---
name: wwvcd
description: Search thousands of clean-room distilled agent insights and architectural patterns to answer "what would vin claudel do?". Uses a massive database extracted from state-of-the-art agent systems to provide concrete prompt engineering and architecture advice.
---

# WWVCD (What Would Vin Claudel Do)

This skill queries a database of over 3,000 distilled, clean-room insights extracted from state-of-the-art AI coding agents. It provides structural prompt engineering and architectural patterns to solve your problems.

## The Database

The insights are categorized into Markdown files under `patterns/database/`:
- `prompts_insights.md`: System prompts, instructions, and prompt caching.
- `architecture_insights.md`: Agent graphs, tool calling, state management.
- `evaluation_insights.md`: Verification, judging, and quality control.
- `performance_insights.md`: Fast-paths, caching, memory management.
- `security_insights.md`: Permissions, tokens, boundaries.

## Usage

When a user asks "what would vin claudel do for X", "wwvcd for Y", or "how do I improve Z":

1. Identify the topic of their problem (e.g., "verification", "system prompt", "tool boundaries").
2. Run the included Node CLI tool to search the database:
   ```bash
   node ~/.openclaw/workspace/skills/wwvcd/bin/wwvcd.js "verification"
   ```
3. Read the relevant architectural files from `patterns/01-enumerate-rationalizations.md` etc. if a deep structural pattern applies.
4. Synthesize the findings into a concrete, structural recommendation for the user. Do not just quote the insight—explain *how* to implement it in their system.

## Philosophy

You are not reading proprietary source code. You are searching a massive index of abstract architectural findings. Translate these abstract findings into concrete code, prompts, or system designs for the user. Remember: Vin Claudel lives life one token at a time.
