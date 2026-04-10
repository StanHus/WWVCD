<div align="center">
  <img src="assets/logo.png" width="300" alt="Vin Claudel Logo">
</div>

# WWVCD: What Would Vin Claudel Do?

> A searchable database of 1,166 deep technical findings distilled from the leaked Claude Code source — with exact TypeScript types, actual constants, and code evidence for every entry.

Whenever I am faced with an insurmountable engineering challenge, I ask myself the same question any reasonable professional would: *What would my favorite superhero, Vin Diesel, do?*

He would probably drive a 1970 Dodge Charger out of a moving cargo plane. Unfortunately, we are building AI agents, not stealing bank vaults in Rio. So the next best thing is to ask: **What would Vin Claudel do?**

Where did these insights come from? I didn't just sit in a dark room and make them up. I *got inspired*. Specifically, I got inspired after cloning a cleanroom, legally distinct, definitely-not-leaked implementation of Anthropic's Claude Code. I launched a swarm of autonomous researcher agents into this codebase to extract its deepest structural secrets — every type definition, every constant value, every behavioral contract. (Don't sue me, Anthropic.)

---

## 🚀 Quick Start

```bash
npx wwvcd "context window compaction"
npx wwvcd "permission bypassPermissions mode"
npx wwvcd "bash background timeout threshold"
npx wwvcd "kairos cron scheduling feature flag"
npx wwvcd "MCP server routing tool"
```

These aren't keyword searches. Each query semantically expands to related concepts and scores against 1,166 findings that contain **actual TypeScript type definitions, exact millisecond constants, real code evidence, and precise behavioral contracts**.

### Example output: `npx wwvcd "bash background timeout"`

```
🎯 Architectural Findings:

1. BashTool  [03_tools.md → Shell Execution Tools]
   Tags: bash, background, async, kairos, sandboxing, execution

   Timing Constants:
   - Progress threshold: 2_000ms (show progress spinner after 2s)
   - Auto-background threshold: 120_000ms (auto-background after 2 minutes)
   - ASSISTANT_BLOCKING_BUDGET_MS: 15_000ms (in Kairos/assistant mode)

   Permission Behavior:
   - bypassPermissions mode: allows all commands
   - auto/acceptEdits mode: allows read-only; asks for write
   - default mode: always asks unless explicitly allowed

   ▶ Code Evidence:
   {
     stdout: string
     stderr: string
     interrupted: boolean
     backgroundTaskId?: string       // Set when run_in_background=true
     assistantAutoBackgrounded?: boolean  // Auto-backgrounded after budget
     dangerouslyDisableSandbox?: boolean
   }
```

That's a real answer. With actual numbers. With actual types. This is what Vin Claudel does.

---

## 📚 What's Inside

We extracted and structured 1,166 findings across 15 spec files covering the full Claude Code TypeScript source:

| Category | Coverage |
|---|---|
| **Tools** | Every tool's input schema, output schema, permission behavior, feature gates, timing constants |
| **Context Management** | autoCompact, sessionMemoryCompact, microCompact — exact thresholds and token bounds |
| **Permissions** | All PermissionModes with exact semantics, ToolPermissionContext full type, rule sources |
| **Architecture** | Query loop, AppState, ToolUseContext, boot sequence, migration versions |
| **Services** | Rate limiting, prompt caching, cost tracking, analytics, bridge protocol |
| **Hooks** | Every React hook — purpose, return type, key logic, dependencies |
| **Constants** | Every constant in constants/ — exact values, derivations, last-verified dates |
| **Feature Flags** | Every feature gate: tengu_*, KAIROS, GrowthBook gates, environment guards |
| **MCP** | Server connection, tool exposure, auth flow, resource reading |
| **Commands** | Every slash command — syntax, file, type, subcommands |

### Deep Dive Patterns

Under `patterns/`, we expanded the most critical findings into implementable strategies:
- `01-enumerate-rationalizations.md` — Explicitly name and forbid an LLM's internal excuses
- `02-structural-evidence.md` — Force structural citations (no citation = FABRICATION)
- `03-read-only-judge.md` — Architecturally decouple generation from evaluation
- `04-explicit-faithfulness.md` — Override RLHF "helpfulness" by defining honesty as highest priority

---

## 🧠 Core Philosophy

Building reliable AI agents is not about writing generic *"You are a helpful assistant"* prompts. It's about defensive, structural prompt engineering.

Advanced agents anticipate failure modes. They enumerate exact rationalizations the model will use to cheat or hallucinate, and enforce strict, parseable evidence requirements for every claim or action.

Vin Claudel doesn't hallucinate. He executes. This repo is the playbook for doing exactly that. Because it's about family. And living life one token at a time.

---

## 🛠 Maintenance

To regenerate the database from the source spec files:
```bash
python3 scripts/extract_spec.py
```

To validate the database quality against 55 adversarial questions:
```bash
python3 scripts/eval_50.py
```
