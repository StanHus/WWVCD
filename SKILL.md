---
name: wwvcd
description: Search 1,166 deep technical architectural patterns, constants, and TypeScript code snippets distilled from state-of-the-art AI coding assistants to answer "what would vin claudel do?". Use when stuck on agent architecture, tool routing, hallucination, or bash execution.
---

# WWVCD (What Would Vin Claudel Do)

This skill queries a database of 1,166 deep, clean-room insights extracted from the source code of state-of-the-art AI coding agents. Unlike superficial blog prose, this database returns exact millisecond constants, actual TypeScript schemas, and raw code evidence.

## The Database

The insights are categorized into Markdown files under `patterns/database/`, containing:
- **Verbatim Code Evidence**: Over 338 findings include the actual `code_snippet` block.
- **Deep Technical Context**: Details like `ASSISTANT_BLOCKING_BUDGET_MS`, `BashTool` backgrounding timeouts, and `yoloClassifier` heuristics.

## Usage

When a user asks "what would vin claudel do for X", "wwvcd for Y", or "how do I improve Z":

1. Identify the topic of their problem (e.g., "verification", "system prompt", "bash background timeout", "tool boundaries").
2. Run the included Node CLI tool to search the database:
   ```bash
   node ~/.openclaw/workspace/skills/wwvcd/bin/wwvcd.js "bash background timeout"
   ```
3. The CLI will output up to 10 highly specific results, including the source file, H2 context, and the `▶ Code Evidence` block.
4. Read the relevant architectural files from `patterns/01-enumerate-rationalizations.md` etc. if a deep structural pattern applies.
5. Synthesize the exact constants, code blocks, and structural findings into a concrete recommendation for the user. Do not just summarize—give them the exact TypeScript interfaces and constants the state-of-the-art agents use.

## Philosophy

You are not reading generic advice. You are searching a massive index of hard architectural facts. Translate these facts into concrete code, prompts, or system designs for the user. Remember: Vin Claudel lives life one token at a time.
