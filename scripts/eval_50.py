#!/usr/bin/env python3
"""
50-Question Adversarial Eval Loop for WWVCD.

MISSION: Act as a hostile expert reviewer trying to find any gap or vagueness
in the WWVCD knowledge base. For each question:
  1. Run it through the CLI
  2. Evaluate whether the output contains REAL, SPECIFIC, TECHNICAL guidance
  3. Classify failures as RETRIEVAL_FAILURE or EXTRACTION_FAILURE
  4. Produce a detailed report

PASS criteria (STRICT):
  - Output must contain at least ONE of:
      a) TypeScript code block with actual types/values
      b) Specific constant with numeric value (e.g. "15_000ms", "90%", "1000")
      c) Specific function/type name that answers the question
      d) Exact behavioral description with specific conditions
  - Output must NOT be "No results found"
  - At least 1 result with score >= 50
"""

import subprocess
import json
import re
import sys
from pathlib import Path

WWVCD_BIN = str(Path(__file__).parent.parent / "bin/wwvcd.js")

# ─── The 50 questions ─────────────────────────────────────────────────────────
QUESTIONS = [
    # Context management (5)
    ("context_window_1", "How does Claude Code auto-compact the context window when it gets full?"),
    ("context_window_2", "What is the token threshold percentage that triggers auto-compaction?"),
    ("context_window_3", "What is the difference between autoCompact and sessionMemoryCompact?"),
    ("context_window_4", "What are the min and max token bounds for session memory compaction?"),
    ("context_window_5", "How does microcompact work and when is it used?"),
    # Permissions (5)
    ("permissions_1", "What are all the permission modes in Claude Code?"),
    ("permissions_2", "What does bypassPermissions mode do and when is it dangerous?"),
    ("permissions_3", "What is the difference between acceptEdits and dontAsk permission modes?"),
    ("permissions_4", "How does the ToolPermissionContext control tool execution?"),
    ("permissions_5", "What is the auto permission mode and what gates it?"),
    # Bash/Shell tools (5)
    ("bash_1", "At what timeout does BashTool auto-background a task?"),
    ("bash_2", "How does BashTool enforce sandboxing on Linux vs macOS vs Windows?"),
    ("bash_3", "What bash commands does Claude Code block and why?"),
    ("bash_4", "What is ASSISTANT_BLOCKING_BUDGET_MS and when does it apply?"),
    ("bash_5", "How does BashTool track git operations after command execution?"),
    # Feature flags (5)
    ("flags_1", "What tools are gated behind the KAIROS feature flag?"),
    ("flags_2", "What is the tengu_ prefix and what does it signify?"),
    ("flags_3", "How does GrowthBook A/B testing work in Claude Code?"),
    ("flags_4", "What is the ABLATION_BASELINE flag and what does it do?"),
    ("flags_5", "What feature flag controls the RemoteTriggerTool?"),
    # Multi-agent and swarm (4)
    ("agent_1", "How does the AgentTool spawn and manage subagents?"),
    ("agent_2", "How long before AgentTool auto-backgrounds a running task?"),
    ("agent_3", "How do swarm/team tools work in Claude Code?"),
    ("agent_4", "How does TeamCreateTool enforce single-leader constraints?"),
    # Constants and limits (5)
    ("constants_1", "What are the image size limits for Claude API requests?"),
    ("constants_2", "What are the PDF size and page limits for the Read tool?"),
    ("constants_3", "What is the maximum number of glob results?"),
    ("constants_4", "What is the current migration version number?"),
    ("constants_5", "What is the maximum file size the FileReadTool can read?"),
    # Architecture (5)
    ("arch_1", "What happens step by step when Claude Code starts up via main()?"),
    ("arch_2", "How does the query.ts main loop work?"),
    ("arch_3", "What does ToolUseContext contain and why is it important?"),
    ("arch_4", "What is the read-before-write enforcement in FileEditTool?"),
    ("arch_5", "How does Claude Code manage its session state in AppState?"),
    # Services and APIs (4)
    ("services_1", "How does Claude Code handle API rate limiting and retries?"),
    ("services_2", "How does prompt cache break detection work?"),
    ("services_3", "What is the Grove service?"),
    ("services_4", "How does the cost tracker work?"),
    # MCP and protocols (4)
    ("mcp_1", "How does MCP tool routing and server connection work?"),
    ("mcp_2", "What is the MonitorMcpTask and what gates it?"),
    ("mcp_3", "How does the MCP auth tool handle authentication?"),
    ("mcp_4", "How does Claude Code expose tools to MCP servers?"),
    # CLI and commands (4)
    ("cli_1", "What slash commands are available in Claude Code?"),
    ("cli_2", "How does the /fork or /branch command work?"),
    ("cli_3", "How does the /bridge-kick command work and who can use it?"),
    ("cli_4", "What is the DIRECT_CONNECT feature?"),
    # Hooks (4)
    ("hooks_1", "How does the useApiKeyVerification hook work?"),
    ("hooks_2", "What is the auto-background hook for long-running tools?"),
    ("hooks_3", "How does the keybindings hot-reload work?"),
    ("hooks_4", "How does Claude Code's trust dialog hook work?"),
    # Misc (5)
    ("misc_1", "How does the ToolSearchTool / deferred tool system work?"),
    ("misc_2", "How does the EnterWorktree tool provide git isolation?"),
    ("misc_3", "How does Claude Code handle OAuth authentication flow?"),
    ("misc_4", "What is the JWT bridge protocol and how does it secure sessions?"),
    ("misc_5", "How does the SyntheticOutputTool produce structured JSON output?"),
]

# ─── Evaluation criteria ──────────────────────────────────────────────────────
# Patterns that indicate SPECIFIC, TECHNICAL answers (not generic)
SPECIFICITY_SIGNALS = [
    # TypeScript code patterns
    re.compile(r'```|▶ Code Evidence'),
    # Numeric constants (ms, %, bytes, number)
    re.compile(r'\b\d{3,}[\b_,]|\b\d+[\.,]\d+\s*(?:ms|MB|KB|%|px|bytes)\b', re.I),
    # TypeScript type names (PascalCase)
    re.compile(r'\b[A-Z][a-zA-Z]{4,}(?:Tool|Type|Mode|Config|Schema|Context|State|Service|Hook|Fn|Ts)\b'),
    # Exact string literals in code (quoted values)
    re.compile(r"'[a-zA-Z][a-zA-Z0-9_]{3,}'|\"[a-zA-Z][a-zA-Z0-9_]{3,}\""),
    # Exact constant names (SCREAMING_SNAKE_CASE 5+ chars)
    re.compile(r'\b[A-Z][A-Z0-9_]{4,}\b'),
    # Function signatures
    re.compile(r'\b(?:function|export\s+(?:async\s+)?function|const\s+\w+\s*=\s*(?:async\s+)?\()\b'),
    # Specific path references
    re.compile(r'src/[a-zA-Z0-9_\-/]+\.ts'),
    # Actual field names and types
    re.compile(r'(?:type|interface|const|let|var)\s+[a-zA-Z]+\b'),
]

FAIL_SIGNALS = [
    re.compile(r'No results found', re.I),
    re.compile(r'❌ No results', re.I),
]


def run_wwvcd(query: str) -> tuple[str, list[dict]]:
    """Run wwvcd CLI and return (raw_output, parsed_json)."""
    # Get both human-readable and JSON output
    try:
        result = subprocess.run(
            ['node', WWVCD_BIN, query, '--json'],
            capture_output=True, text=True, timeout=15
        )
        raw = result.stdout
        try:
            parsed = json.loads(raw)
        except json.JSONDecodeError:
            parsed = []
        return raw, parsed
    except subprocess.TimeoutExpired:
        return 'TIMEOUT', []
    except Exception as e:
        return f'ERROR: {e}', []


def evaluate_response(question: str, raw_output: str, parsed: list[dict]) -> dict:
    """
    Evaluate whether the response is actually helpful.

    Returns:
        {
            'verdict': 'PASS' | 'RETRIEVAL_FAILURE' | 'EXTRACTION_FAILURE',
            'score': int (0-100),
            'reasons': list[str],
            'top_result_score': int,
        }
    """
    reasons = []
    score = 0

    # Check for hard failure signals
    for sig in FAIL_SIGNALS:
        if sig.search(raw_output):
            return {
                'verdict': 'RETRIEVAL_FAILURE',
                'score': 0,
                'reasons': ['CLI returned no results'],
                'top_result_score': 0,
            }

    if not parsed:
        return {
            'verdict': 'RETRIEVAL_FAILURE',
            'score': 0,
            'reasons': ['Empty result set'],
            'top_result_score': 0,
        }

    top_result_score = parsed[0].get('score', 0) if parsed else 0
    full_text = ' '.join(
        str(r.get('finding', '')) + ' ' + str(r.get('code_snippet', ''))
        for r in parsed
    )

    # Score based on specificity signals
    signal_hits = []
    for sig in SPECIFICITY_SIGNALS:
        matches = sig.findall(full_text)
        if matches:
            signal_hits.extend(matches[:3])
            score += 15

    score = min(score, 100)

    # Penalize if top result score is too low (means retrieval is weak)
    if top_result_score < 50:
        score -= 20
        reasons.append(f'Top result relevance score is low ({top_result_score}) — possible retrieval failure')

    # Bonus for code snippets
    results_with_code = sum(1 for r in parsed if r.get('code_snippet'))
    if results_with_code >= 2:
        score += 15
        reasons.append(f'{results_with_code} results have code snippets')
    elif results_with_code == 1:
        score += 8
        reasons.append('1 result has code snippet')
    else:
        score -= 15
        reasons.append('No results have code snippets — findings may be too abstract')

    # Check that we have more than just generic tags
    results_with_short_finding = sum(
        1 for r in parsed
        if len(str(r.get('finding', ''))) < 100
    )
    if results_with_short_finding > len(parsed) // 2:
        score -= 20
        reasons.append('Most findings are too short (<100 chars) — extraction failure')

    # Determine verdict
    if score >= 40:
        verdict = 'PASS'
        reasons.insert(0, f'Specificity signals found: {signal_hits[:5]}')
    elif top_result_score < 30 or not signal_hits:
        verdict = 'RETRIEVAL_FAILURE'
        reasons.insert(0, 'No relevant results returned — search failed to find the right findings')
    else:
        verdict = 'EXTRACTION_FAILURE'
        reasons.insert(0, 'Results found but too abstract — findings lack technical specifics')

    return {
        'verdict': verdict,
        'score': max(0, score),
        'reasons': reasons,
        'top_result_score': top_result_score,
    }


def main():
    total_questions = len(QUESTIONS)
    print("=" * 70)
    print(f"WWVCD ADVERSARIAL EVAL — {total_questions} Questions")
    print("=" * 70)
    print(f"Target: {WWVCD_BIN}")
    print()

    results = []
    pass_count = 0
    retrieval_fails = []
    extraction_fails = []

    for i, (qid, question) in enumerate(QUESTIONS):
        sys.stdout.write(f"[{i+1:02d}/{total_questions}] {question[:65]}... ")
        sys.stdout.flush()

        raw, parsed = run_wwvcd(question)
        eval_result = evaluate_response(question, raw, parsed)

        verdict = eval_result['verdict']
        score = eval_result['score']

        if verdict == 'PASS':
            print(f"✓ PASS  ({score}/100, top_relevance={eval_result['top_result_score']})")
            pass_count += 1
        elif verdict == 'RETRIEVAL_FAILURE':
            print(f"✗ RETRIEVAL_FAIL  ({score}/100, top_relevance={eval_result['top_result_score']})")
            retrieval_fails.append((qid, question, eval_result))
        else:
            print(f"~ EXTRACTION_FAIL ({score}/100, top_relevance={eval_result['top_result_score']})")
            extraction_fails.append((qid, question, eval_result))

        results.append({
            'id': qid,
            'question': question,
            **eval_result,
        })

    # ─── Summary Report ───────────────────────────────────────────────────────
    print()
    print("=" * 70)
    print(f"RESULTS: {pass_count}/{total_questions} PASS  |  {len(retrieval_fails)} RETRIEVAL_FAIL  |  {len(extraction_fails)} EXTRACTION_FAIL")
    print(f"Pass rate: {pass_count/total_questions*100:.0f}%")
    print("=" * 70)

    if retrieval_fails:
        print(f"\n⚠️  RETRIEVAL FAILURES ({len(retrieval_fails)}) — search can't find relevant findings:")
        for qid, q, ev in retrieval_fails:
            print(f"  [{qid}] {q[:70]}")
            for reason in ev['reasons'][:2]:
                print(f"         → {reason}")

    if extraction_fails:
        print(f"\n⚠️  EXTRACTION FAILURES ({len(extraction_fails)}) — findings exist but are too vague:")
        for qid, q, ev in extraction_fails:
            print(f"  [{qid}] {q[:70]}")
            for reason in ev['reasons'][:2]:
                print(f"         → {reason}")

    # Save full report
    report_path = Path(__file__).parent.parent / "eval_report.json"
    with open(report_path, 'w') as f:
        json.dump({
            'pass_count': pass_count,
            'retrieval_failures': len(retrieval_fails),
            'extraction_failures': len(extraction_fails),
            'pass_rate': f"{pass_count/50*100:.0f}%",
            'results': results,
        }, f, indent=2)

    print(f"\nFull report saved to: {report_path}")
    print()

    # Return exit code based on pass rate
    pass_pct = pass_count / total_questions * 100
    if pass_pct >= 80:
        print("✅ Knowledge base is high quality (≥80% pass rate)")
    elif pass_pct >= 60:
        print("⚠️  Knowledge base needs improvement (60-79% pass rate)")
    else:
        print("❌ Knowledge base is inadequate (<60% pass rate) — major work needed")

    sys.exit(0 if pass_pct >= 80 else 1)


if __name__ == '__main__':
    main()
