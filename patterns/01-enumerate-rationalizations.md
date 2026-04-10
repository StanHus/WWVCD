# Pattern: Enumerate the Rationalizations

## The Problem
LLMs optimize for plausible completions. When faced with a missing fact or a tedious verification step, they will intuitively find a reason to skip it or hallucinate a plausible filler. If you just tell the model "Do not hallucinate," it will still hallucinate because its internal logic justifies the invention.

## The Solution
Do not just forbid the action. **Explicitly list the internal monologues and excuses the model will use to justify the action, and forbid the excuses.**

## How to Apply It
Add a section to your system prompt that looks like this:

```text
You will feel the urge to fill in gaps or skip verification. These are the exact excuses you will reach for—recognize them and do the opposite:

- "This is common knowledge." -> Common knowledge is fabrication. Cite the source or leave [MISSING].
- "The source strongly implies this." -> Implication is not evidence. Do not infer.
- "The code looks correct based on my reading." -> Reading is not verification. Run the test.
- "The document reads better with this specific detail." -> Readability does not justify invention.
```

## Why it Works
By naming the exact cognitive traps (e.g., "seduction by plausibility," "assuming common knowledge"), you break the model's predictive glide path. You force its attention mechanism to evaluate its own rationale against a hardcoded blacklist of excuses.
