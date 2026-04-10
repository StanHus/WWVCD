#!/usr/bin/env python3
"""
Deep extraction from kuberwastaken spec files into rich, code-preserving findings.

DESIGN GOALS:
- Preserve exact TypeScript types, function signatures, constant values
- Keep code blocks verbatim in code_snippet field
- Generate full prose (up to 3000 chars) — NOT truncated blog summaries
- Produce semantic tags based on actual technical content
- Output: patterns/database/tagged_findings.json
"""

import re
import json
import os
import hashlib
from pathlib import Path

SPEC_DIR = Path.home() / ".openclaw/workspace/clawcode/repo-src/kuberwastaken/spec"
OUTPUT_PATH = Path(__file__).parent.parent / "patterns/database/tagged_findings.json"

# ─── Semantic tag taxonomy ────────────────────────────────────────────────────
TAG_PATTERNS = [
    # Tool names
    (re.compile(r'\bBashTool\b', re.I), ['bash', 'tool', 'shell', 'execution']),
    (re.compile(r'\bAgentTool\b', re.I), ['agent', 'tool', 'subagent', 'multi-agent']),
    (re.compile(r'\bFileReadTool\b|\bFileWriteTool\b|\bFileEditTool\b', re.I), ['file', 'tool', 'filesystem']),
    (re.compile(r'\bGlobTool\b|\bGrepTool\b', re.I), ['search', 'tool', 'filesystem']),
    (re.compile(r'\bMCPTool\b|\bMCP\b', re.I), ['mcp', 'tool', 'protocol']),
    (re.compile(r'\bWebSearchTool\b|\bWebFetchTool\b', re.I), ['web', 'tool', 'search']),
    (re.compile(r'\bTaskCreate\b|\bTaskUpdate\b|\bTaskGet\b|\bTaskList\b', re.I), ['task', 'tool', 'state']),
    (re.compile(r'\bCronCreate\b|\bCronDelete\b|\bCronList\b', re.I), ['cron', 'scheduling', 'kairos']),
    (re.compile(r'\bSkillTool\b', re.I), ['skill', 'tool', 'plugin']),
    (re.compile(r'\bNotebookEditTool\b', re.I), ['notebook', 'tool', 'jupyter']),
    (re.compile(r'\bEnterWorktree\b|\bExitWorktree\b', re.I), ['worktree', 'tool', 'git']),
    (re.compile(r'\bEnterPlanMode\b|\bExitPlanMode\b', re.I), ['plan-mode', 'tool']),
    (re.compile(r'\bAskUserQuestion\b', re.I), ['interrupt', 'tool', 'user-input']),
    (re.compile(r'\bSleepTool\b', re.I), ['sleep', 'tool', 'kairos']),
    (re.compile(r'\bRemoteTrigger\b', re.I), ['trigger', 'tool', 'remote']),
    (re.compile(r'\bToolSearch\b', re.I), ['tool-discovery', 'tool', 'deferred']),
    (re.compile(r'\bSyntheticOutput\b|\bStructuredOutput\b', re.I), ['output', 'tool', 'sdk']),
    (re.compile(r'\bTeamCreate\b|\bTeamDelete\b|\bSendMessage\b', re.I), ['swarm', 'team', 'multi-agent']),
    (re.compile(r'\bREPLTool\b', re.I), ['repl', 'tool', 'execution']),
    (re.compile(r'\bLSPTool\b', re.I), ['lsp', 'tool', 'language-server']),
    (re.compile(r'\bPowerShellTool\b', re.I), ['powershell', 'tool', 'shell', 'windows']),
    (re.compile(r'\bTodoWriteTool\b', re.I), ['todo', 'task', 'tool']),
    (re.compile(r'\bBriefTool\b', re.I), ['brief', 'tool', 'kairos']),
    # Core architecture
    (re.compile(r'\bpermission|PermissionMode|bypassPermissions|dangerouslySkip\b', re.I), ['permissions', 'security']),
    (re.compile(r'\bToolPermissionContext\b', re.I), ['permissions', 'tool', 'context']),
    (re.compile(r'\bToolUseContext\b', re.I), ['tool', 'context', 'execution']),
    (re.compile(r'\bAppState\b', re.I), ['state', 'architecture']),
    (re.compile(r'\bcontext.window|context_window|CONTEXT_WINDOW\b', re.I), ['context-window', 'limits']),
    (re.compile(r'\bcompact|autoCompact|microCompact\b', re.I), ['compaction', 'context-window', 'memory']),
    (re.compile(r'\bsession.memory|SessionMemory\b', re.I), ['session-memory', 'memory', 'context']),
    (re.compile(r'\bhallucin|fabricat|grounding\b', re.I), ['hallucination', 'evaluation', 'prompt']),
    (re.compile(r'\bprompt.cach|PROMPT_CACHE\b', re.I), ['prompt-caching', 'performance', 'api']),
    (re.compile(r'\bfeature.flag|growthbook|GrowthBook\b', re.I), ['feature-flags', 'analytics']),
    (re.compile(r'\btengu_\b', re.I), ['tengu', 'feature-flags', 'internal']),
    (re.compile(r'\bkairos|KAIROS\b', re.I), ['kairos', 'feature-flags']),
    (re.compile(r'\bhook|useHook\b', re.I), ['hooks', 'react']),
    (re.compile(r'\bOAuth|oauth\b', re.I), ['oauth', 'auth', 'security']),
    (re.compile(r'\bJWT|jwt\b'), ['jwt', 'auth', 'bridge']),
    (re.compile(r'\bbridge|Bridge\b'), ['bridge', 'remote', 'session']),
    (re.compile(r'\bMigration|migration\b'), ['migration', 'versioning']),
    (re.compile(r'\banalytics|telemetry\b', re.I), ['analytics', 'telemetry']),
    (re.compile(r'\bsandbox|bwrap|sandbox-exec\b', re.I), ['sandboxing', 'security']),
    (re.compile(r'\bconcurrenc|isConcurrencySafe\b', re.I), ['concurrency', 'tool']),
    (re.compile(r'\brate.limit|rateLimit\b', re.I), ['rate-limiting', 'api']),
    (re.compile(r'\bkeybinding|hotkey\b', re.I), ['keybindings', 'ui']),
    (re.compile(r'\bInk|TUI|terminal.ui\b', re.I), ['ink', 'tui', 'ui']),
    (re.compile(r'\bsystem.prompt|systemPrompt\b', re.I), ['system-prompt', 'prompt']),
    (re.compile(r'\bmulti.agent|subagent|SubAgent\b', re.I), ['multi-agent', 'agent']),
    (re.compile(r'\bcost.track|CostTracker\b', re.I), ['cost-tracking', 'analytics']),
    (re.compile(r'\bCLAUDE\.md|claudemd\b', re.I), ['claude-md', 'configuration']),
    (re.compile(r'\bauto.memory|autoMemory\b', re.I), ['auto-memory', 'memory']),
    (re.compile(r'\bworktree\b', re.I), ['worktree', 'git', 'isolation']),
    (re.compile(r'\brust|Cargo\b'), ['rust', 'performance']),
    (re.compile(r'\bLODESTONE\b'), ['lodestone', 'feature-flags', 'deeplink']),
    (re.compile(r'\bDIRECT_CONNECT\b'), ['direct-connect', 'feature-flags']),
    (re.compile(r'\bMCPServer|mcp.server\b', re.I), ['mcp-server', 'mcp', 'configuration']),
    (re.compile(r'\bretry|withRetry\b', re.I), ['retry', 'error-handling', 'api']),
    (re.compile(r'\btoken.limit|maxTokens|max_tokens\b', re.I), ['token-limits', 'api', 'limits']),
    (re.compile(r'\bimage|IMAGE_MAX\b'), ['images', 'limits', 'api']),
    (re.compile(r'\bPDF\b'), ['pdf', 'limits', 'api']),
    (re.compile(r'\bqueue|Queue\b'), ['queue', 'architecture']),
    (re.compile(r'\bAbortController|abort\b', re.I), ['abort', 'cancellation', 'async']),
    (re.compile(r'\bchokidar|file.watch\b', re.I), ['file-watching', 'hot-reload']),
    (re.compile(r'\bide|IDE|vscode|jetbrains\b', re.I), ['ide', 'integration']),
    (re.compile(r'\bgit|commit|branch\b'), ['git', 'version-control']),
    (re.compile(r'\bvalidat|zod|ZodType\b', re.I), ['validation', 'schema']),
    (re.compile(r'\bWebSocket|SSE\b'), ['websocket', 'sse', 'streaming']),
    (re.compile(r'\bDaemon|daemon\b'), ['daemon', 'process', 'background']),
    (re.compile(r'\bAutoClassifier\b'), ['auto-classifier', 'permissions', 'tool']),
    (re.compile(r'\bspeculation|prefetch\b', re.I), ['speculation', 'performance', 'prefetch']),
    (re.compile(r'\berror.id|ErrorId\b', re.I), ['error-handling', 'errors']),
    (re.compile(r'\bglobLimit|maxResults\b'), ['glob', 'limits', 'search']),
    (re.compile(r'\bplan.mode|PlanMode\b', re.I), ['plan-mode', 'architecture']),
    (re.compile(r'\bedit.format|EditFormat\b', re.I), ['edit-format', 'file-editing']),
    (re.compile(r'\bAutoApprove|alwaysAllow\b', re.I), ['auto-approve', 'permissions']),
    (re.compile(r'\btrust.dialog|trustDialog\b', re.I), ['trust', 'security', 'onboarding']),
    (re.compile(r'\bthinking|extended.thinking\b', re.I), ['thinking', 'model', 'configuration']),
    (re.compile(r'\bvoice\b', re.I), ['voice', 'input']),
    (re.compile(r'\bbackground.task|backgrounded\b', re.I), ['background', 'async', 'task']),
    (re.compile(r'\bReadFileState|read.before.write\b', re.I), ['read-before-write', 'file-editing', 'safety']),
]

# Category tags by source file
FILE_CATEGORY_TAGS = {
    '00_overview.md': ['overview', 'architecture'],
    '01_core_entry_query.md': ['entry-point', 'cli', 'architecture'],
    '02_commands.md': ['commands', 'cli', 'slash-commands'],
    '03_tools.md': ['tools', 'tool-framework'],
    '04_components_core_messages.md': ['components', 'messages', 'ui'],
    '05_components_agents_permissions_design.md': ['agents', 'permissions', 'architecture'],
    '06_services_context_state.md': ['services', 'context', 'state', 'compaction'],
    '07_hooks.md': ['hooks', 'react', 'ui'],
    '08_ink_terminal.md': ['ink', 'terminal', 'ui'],
    '09_bridge_cli_remote.md': ['bridge', 'remote', 'cli'],
    '10_utils.md': ['utils', 'utilities'],
    '11_special_systems.md': ['special-systems', 'kairos', 'mcp'],
    '12_constants_types.md': ['constants', 'types', 'limits'],
    '13_rust_codebase.md': ['rust', 'performance'],
    'INDEX.md': ['index', 'overview'],
}


def generate_tags(title: str, body: str, source_file: str) -> list[str]:
    """Generate semantic tags from content."""
    combined = (title + ' ' + body).lower()
    tags = set()

    # Apply pattern-based tags
    for pattern, tag_list in TAG_PATTERNS:
        if pattern.search(combined):
            tags.update(tag_list)

    # Add file-based category tags
    tags.update(FILE_CATEGORY_TAGS.get(source_file, []))

    # Extract SCREAMING_SNAKE_CASE constants (exact technical identifiers)
    constants = re.findall(r'\b[A-Z][A-Z0-9_]{4,}\b', body)
    for c in constants[:5]:
        if len(c) > 4 and c not in {'TYPE', 'NULL', 'TRUE', 'FALSE', 'VOID', 'FROM', 'INTO', 'WITH'}:
            tags.add(c.lower().replace('_', '-'))

    # Limit to 15 most meaningful tags
    return list(tags)[:15]


def extract_code_blocks(text: str) -> tuple[str, str]:
    """
    Returns (text_without_code, code_snippet).
    Extracts all code blocks and removes them from prose.
    """
    code_blocks = re.findall(r'```(?:typescript|ts|javascript|js|rust|bash|json|yaml|toml|)?\n(.*?)```', text, re.DOTALL)
    code_snippet = '\n\n// ---\n'.join(block.strip() for block in code_blocks if block.strip())[:3000]

    # Remove code blocks from prose
    prose = re.sub(r'```.*?```', '[CODE BLOCK]', text, flags=re.DOTALL)
    prose = re.sub(r'\[CODE BLOCK\]\s*\[CODE BLOCK\]', '[CODE BLOCKS]', prose)

    return prose, code_snippet


def clean_prose(text: str) -> str:
    """Clean up prose: normalize whitespace, remove markdown noise."""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Normalize whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Remove excessive dashes (separators)
    text = re.sub(r'^-{3,}$', '', text, flags=re.MULTILINE)
    # Clean up table of contents entries like "1. [Title](#anchor)"
    text = re.sub(r'^\d+\.\s+\[.*?\]\(#.*?\)\s*$', '', text, flags=re.MULTILINE)
    # Remove bullet-only TOC
    text = re.sub(r'^   - \[.*?\]\(#.*?\)\s*$', '', text, flags=re.MULTILINE)
    return text.strip()


def make_id(source_file: str, title: str) -> str:
    """Generate a stable, unique ID."""
    raw = f"{source_file}::{title}"
    return hashlib.md5(raw.encode()).hexdigest()[:12]


def is_toc_section(title: str, body: str) -> bool:
    """Detect Table of Contents sections that have no real content."""
    # Body is mostly TOC links
    toc_links = re.findall(r'\[.*?\]\(#.*?\)', body)
    words = len(re.findall(r'\b\w+\b', body))
    if len(toc_links) >= 3 and words < 60:
        return True
    if len(body.strip()) < 80:
        return True
    return False


def parse_spec_file(filepath: Path) -> list[dict]:
    """Parse a spec file into rich findings."""
    with open(filepath, encoding='utf-8') as f:
        content = f.read()

    source_file = filepath.name
    findings = []
    current_h2 = ''
    current_h2_file_context = ''

    # Split by H2 and H3 headers
    # We need to preserve the structure
    sections = re.split(r'\n(?=#{2,3} (?!#))', content)

    for section in sections:
        lines = section.split('\n')
        if not lines:
            continue

        header = lines[0].strip()

        if header.startswith('### '):
            raw_title = header[4:].strip()
            # Strip leading numbering like "1.1 ", "71. ", "A.1 "
            title = re.sub(r'^[\d\.]+\s+', '', raw_title).strip()
            if not title:
                title = raw_title

            body = '\n'.join(lines[1:]).strip()

            if is_toc_section(title, body):
                continue

            prose, code_snippet = extract_code_blocks(body)
            prose = clean_prose(prose)

            # Build the finding text: h2 context + prose
            # We want the finding to be dense and useful
            context_prefix = f"[Context: {current_h2}] " if current_h2 else ''
            finding_text = (context_prefix + prose)[:3000]

            if len(finding_text.strip()) < 80:
                # Skip nearly empty sections
                continue

            tags = generate_tags(title, body, source_file)

            findings.append({
                'id': make_id(source_file, raw_title),
                'title': title,
                'h2_context': current_h2,
                'source_file': source_file,
                'finding': finding_text,
                'code_snippet': code_snippet,
                'tags': tags,
            })

        elif header.startswith('## '):
            raw_h2 = header[3:].strip()
            # Strip numbering
            current_h2 = re.sub(r'^[\d\.]+\s+', '', raw_h2).strip()

            body = '\n'.join(lines[1:]).strip()

            if is_toc_section(current_h2, body):
                continue

            prose, code_snippet = extract_code_blocks(body)
            prose = clean_prose(prose)

            # H2 sections with substantial content become their own findings
            if len(prose.strip()) > 150:
                tags = generate_tags(current_h2, body, source_file)

                findings.append({
                    'id': make_id(source_file, raw_h2),
                    'title': current_h2,
                    'h2_context': '',
                    'source_file': source_file,
                    'finding': prose[:3000],
                    'code_snippet': code_snippet,
                    'tags': tags,
                })

    return findings


def main():
    spec_files = sorted(SPEC_DIR.glob('*.md'))
    if not spec_files:
        print(f"ERROR: No spec files found in {SPEC_DIR}")
        return

    print(f"Found {len(spec_files)} spec files")

    all_findings = []
    for spec_file in spec_files:
        print(f"  Parsing {spec_file.name}...")
        findings = parse_spec_file(spec_file)
        print(f"    → {len(findings)} findings extracted")
        all_findings.extend(findings)

    print(f"\nTotal findings extracted: {len(all_findings)}")

    # Quality report
    with_code = sum(1 for f in all_findings if f['code_snippet'])
    avg_len = sum(len(f['finding']) for f in all_findings) / len(all_findings) if all_findings else 0
    print(f"Findings with code snippets: {with_code}/{len(all_findings)}")
    print(f"Average finding length: {avg_len:.0f} chars")

    # Sample check
    print("\nSample findings (first 3):")
    for f in all_findings[:3]:
        print(f"  [{f['source_file']}] {f['title']}")
        print(f"    Tags: {f['tags']}")
        print(f"    Finding ({len(f['finding'])} chars): {f['finding'][:200]}...")
        if f['code_snippet']:
            print(f"    Code ({len(f['code_snippet'])} chars): {f['code_snippet'][:100]}...")

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as out:
        json.dump(all_findings, out, indent=2, ensure_ascii=False)

    print(f"\nWrote {len(all_findings)} findings to {OUTPUT_PATH}")


if __name__ == '__main__':
    main()
