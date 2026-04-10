<div align="center">
  <img src="assets/logo.png" width="300" alt="Vin Claudel Logo">
</div>

# WWVCD: What Would Vin Claudel Do?

> A clean-room database of 3,185 prompt engineering and agent architecture patterns distilled from state-of-the-art AI coding assistants.

Whenever I am faced with an insurmountable engineering challenge, I ask myself the same question any reasonable professional would: *What would my favorite superhero, Vin Diesel, do?*

He would probably drive a 1970 Dodge Charger out of a moving cargo plane. Unfortunately, we are building AI agents, not stealing bank vaults in Rio. So the next best thing is to ask: **What would Vin Claudel do?**

Where did these 3,185 insights come from? I didn't just sit in a dark room and make them up. I *got inspired*. Specifically, I got inspired after cloning a cleanroom, legally distinct, definitely-not-leaked implementation of Anthropic's Claude Code. 

I launched a swarm of autonomous researcher agents into this codebase to extract its deepest structural secrets. This database is the result. This is exactly *how Claude Code makes decisions*. This is the actual logic programmed into it to stop hallucinations, manage tool boundaries, and enforce structural evidence. (Again, this is a cleanroom implementation based on my own personal hallucinations. Don't sue me, Anthropic.)

Building reliable, autonomous AI agents is not about writing generic "You are a helpful assistant" prompts. It is about defensive, structural prompt engineering. It is about family. And living life one token at a time.

This repository contains zero proprietary source code. Instead, it provides the abstracted, structural methodologies—the "conclusions"—reverse-engineered and categorized for immediate use.

---

**[ 📚 The Insight Database ](#-whats-inside)** | **[ 📦 Install via NPM ](#-npm-package)** | **[ 🛠 OpenClaw Skill ](#-openclaw-skill)** | **[ 🧠 Core Philosophy ](#-core-philosophy)**

---

> ⚠️ **Notice on ClawHub availability:** We are currently experiencing an authentication blockage deploying the skill to the ClawHub registry directly. We will update this notice once the native `clawhub install wwvcd` command is online. In the meantime, use the universal **NPM** package or manually install the **OpenClaw** skill via the fallback instructions below.

---

## 📚 What's Inside

### 1. The Insight Database
We have extracted and categorized over 3,000 specific architectural findings into a searchable markdown database (`patterns/database/`):
- **Architecture Insights:** Agent graphs, tool calling mechanisms, and state management.
- **Evaluation Insights:** Verification routines, read-only judging, and quality control.
- **Prompt Insights:** System instructions, prompt caching, and context boundaries.
- **Performance Insights:** Fast-paths, token optimizations, and memory management.
- **Security Insights:** Sandboxing, token limits, and permission handling.

### 2. Structural Deep Dives
Under `patterns/`, we have expanded the most critical findings into implementable strategies:
- `01-enumerate-rationalizations.md`: How to explicitly name and forbid an LLM's internal excuses for hallucinating.
- `02-structural-evidence.md`: How to force structural citations (no citation = automatic failure).
- `03-read-only-judge.md`: The architectural requirement of decoupling generation from evaluation.
- `04-explicit-faithfulness.md`: Overriding RLHF "helpfulness" by defining honesty as the highest priority.

---

## 📦 NPM Package (Universal CLI)

You can search the entire database of 3,185 insights globally from any terminal. This makes the database accessible to developers, AI agents like Cursor or Windsurf, and automation pipelines.

You don't even need to install it permanently. Just run:

```bash
npx wwvcd "verification"
```

Or install it globally for instant access:

```bash
npm install -g wwvcd
wwvcd "system prompt"
```

The CLI will recursively search the database and print out exactly how state-of-the-art agents handle that specific edge case.

---

## 🛠 OpenClaw Skill

Allow your local AI assistant to automatically query this massive database and apply these advanced patterns to your own prompts and agent architectures.

1. Clone this repository into your OpenClaw skills directory:
   ```bash
   git clone https://github.com/StanHus/WWVCD.git ~/.openclaw/workspace/skills/wwvcd
   ```
2. Trigger it in chat by asking: 
   - *"WWVCD: how do I improve this prompt?"*
   - *"What would Vin Claudel do for my document generator?"*
   - *"WWVCD for my evaluation agent."*

---

## 🧠 Core Philosophy

Advanced AI agents anticipate failure modes. They enumerate exact rationalizations the model will use to cheat or hallucinate, and they enforce strict, parseable evidence requirements for every claim or action. Vin Claudel doesn't hallucinate. He executes. This repo is the playbook for doing exactly that.
