<div align="center">
  <img src="assets/logo.png" width="300" alt="Vin Claudel Logo">
</div>

# WWVCD: What Would Vin Claudel Do?
<p><a href="https://www.npmjs.com/package/wwvcd" rel="nofollow"><img src="https://camo.githubusercontent.com/cba6135c628b09e068592d88e73c6a4d416c7571c659b6629ba02b37d71e7aa5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f77777663642e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/wwvcd.svg" style="max-width: 100%;"></a>
<a href="https://www.npmjs.com/package/wwvcd" rel="nofollow"><img src="https://camo.githubusercontent.com/a46dca2b88d7d388efc0146d0479ce4c4dfbae8da38be90d7f6db23b5e18357c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f77777663642e737667" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dm/wwvcd.svg" style="max-width: 100%;"></a></p>

> A clean-room database of **1,166 deep technical architectural patterns** distilled from the source code of state-of-the-art AI coding assistants.

Whenever I am faced with an insurmountable engineering challenge, I ask myself the same question any reasonable professional would: *What would my favorite superhero, Vin Diesel, do?*

He would probably drive a 1970 Dodge Charger out of a moving cargo plane. Unfortunately, we are building AI agents, not stealing bank vaults in Rio. So the next best thing is to ask: **What would Vin Claudel do?**

This is not a database of generic blog prose. **This is hard technical truth.** Every insight contains exact millisecond constants, actual TypeScript interfaces, tool schemas, and raw code evidence extracted directly from a cleanroom implementation of Anthropic's Claude Code.

---

## 🚀 Quick Start: How & When to Use This

**The Use Case:** This is your lifeline for **when your AI agent gets stuck.** 

When your agent starts hallucinating facts, getting trapped in an infinite loop of failing tests, or refusing to background terminal processes correctly, you ask: *"What would Vin Claudel do?"*

### For Developers & Managers (The 5-Second Way)
You don't need to install anything permanently. Just run:

```bash
npx wwvcd "bash background timeout"
```
*or*
```bash
npx wwvcd "hallucination"
```

The CLI will instantly search the database and print out exactly how state-of-the-art agents structurally solve that specific edge case, including the verbatim `▶ Code Evidence` blocks.

### For AI Assistants (OpenClaw, Cursor, etc.)
If you use OpenClaw, clone this repo into your skills folder (`~/.openclaw/workspace/skills/wwvcd`). When your agent gets stuck, literally just type in chat:
> *"You are hallucinating. Query WWVCD for 'verification' and tell me what Vin Claudel would do to fix this."*

---

## 📚 What's Inside the Database?

The previous iterations of this database contained generic, LLM-summarized prose. We nuked it. 

We ran a new extraction pipeline directly over the `claude-code-src` specifications. The current database contains **1,166 high-signal findings** (averaging 600+ chars each), featuring:
- **Verbatim Code Evidence:** 338+ findings include exact TypeScript `code_snippet` blocks.
- **Precise Constants:** No more "after a certain time." You get the exact `ASSISTANT_BLOCKING_BUDGET_MS` values.
- **Deep Context:** Every finding maps to the specific source file and architectural module it was extracted from.

### Structural Deep Dives
Under the `patterns/` folder, we expanded the most critical findings into implementable strategies you can copy-paste into your own prompts today:
- `01-enumerate-rationalizations.md`: Explicitly name and forbid an LLM's internal excuses for hallucinating.
- `02-structural-evidence.md`: Force structural citations (no citation = automatic failure).
- `03-read-only-judge.md`: The architectural requirement of decoupling generation from evaluation.
- `04-explicit-faithfulness.md`: Overriding RLHF "helpfulness" by defining honesty as the highest priority.

---

## 🧠 Core Philosophy

Building reliable, autonomous AI agents is not about writing generic *"You are a helpful assistant"* prompts. It is about defensive, structural prompt engineering.

Advanced AI agents anticipate failure modes. They enumerate exact rationalizations the model will use to cheat or hallucinate, and they enforce strict, parseable evidence requirements for every claim or action. 

Vin Claudel doesn't hallucinate. He executes. This repo is the playbook for doing exactly that. Because it's about family. And living life one token at a time.
