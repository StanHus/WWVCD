<div align="center">
  <img src="assets/logo.png" width="300" alt="Vin Claudel Logo">
</div>

# WWVCD: What Would Vin Claudel Do?

> A clean-room database of 3,185 prompt engineering and agent architecture patterns distilled from state-of-the-art AI coding assistants.

Whenever I am faced with an insurmountable engineering challenge, I ask myself the same question any reasonable professional would: *What would my favorite superhero, Vin Diesel, do?*

He would probably drive a 1970 Dodge Charger out of a moving cargo plane. Unfortunately, we are building AI agents, not stealing bank vaults in Rio. So the next best thing is to ask: **What would Vin Claudel do?**

Where did these 3,185 insights come from? I didn't just sit in a dark room and make them up. I *got inspired*. Specifically, I got inspired after cloning a cleanroom, legally distinct, definitely-not-leaked implementation of Anthropic's Claude Code. I launched a swarm of autonomous researcher agents into this codebase to extract its deepest structural secrets. (Don't sue me, Anthropic.)

---

## 🚀 Quick Start: How & When to Use This

**The Use Case:** This is not a magic "build my entire app" button. This is your lifeline for **when your AI agent gets stuck.** 

When your agent starts hallucinating facts, gets trapped in an infinite loop of failing tests, or refuses to follow tool boundaries, you don't just tell it "try harder." You ask: *"What would Vin Claudel do?"*

### For Developers & Managers (The 5-Second Way)
You don't need to install anything permanently. If you are struggling with an agent architecture problem, just open your terminal and run:

```bash
npx wwvcd "hallucination"
```
*or*
```bash
npx wwvcd "system prompt"
```

The CLI will instantly search 3,185 clean-room insights and print out exactly how state-of-the-art agents structurally solve that specific edge case. Share that output with your team.

### For AI Assistants (OpenClaw, Cursor, etc.)
You can give your AI agent direct access to this database so it can fix itself. 

If you use OpenClaw, clone this repo into your skills folder (`~/.openclaw/workspace/skills/wwvcd`). When your agent gets stuck, literally just type in chat:
> *"You are hallucinating. Query WWVCD for 'verification' and tell me what Vin Claudel would do to fix this."*

---

## 📚 What's Inside the Database?

We extracted and categorized over 3,000 specific architectural findings into a searchable markdown database (`patterns/database/`):
- **Architecture Insights:** Agent graphs, tool calling mechanisms, and state management.
- **Evaluation Insights:** Verification routines, read-only judging, and quality control.
- **Prompt Insights:** System instructions, prompt caching, and context boundaries.
- **Performance Insights:** Fast-paths, token optimizations, and memory management.
- **Security Insights:** Sandboxing, token limits, and permission handling.

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
