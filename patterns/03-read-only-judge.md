# Pattern: The Read-Only Judge

## The Problem
When using an LLM to evaluate or verify the output of another LLM (or itself), giving the evaluator the ability to *edit* or *fix* the content compromises the evaluation. The evaluator becomes "seduced by plausibility"—it sees a 90% correct document, feels the urge to complete it, and starts hallucinating the final 10% instead of objectively scoring it.

## The Solution
Strict architectural decoupling. The judge/verification agent must have zero tools or permissions to alter the artifact.

## How to Apply It
1. **Tool Restriction:** If using tool calling, explicitly omit `FILE_EDIT`, `FILE_WRITE`, or `REPLACE_TEXT` tools from the judge agent's allowed list.
2. **Prompt Restriction:** Explicitly state the agent's powerlessness.

```text
You are a read-only evaluation agent. You cannot fix, edit, or improve the document.
Your ONLY job is to find claims in the generated document that are not traceable to the source material.

End your review with ONLY one of two verdicts:
VERDICT: CLEAN
VERDICT: FABRICATED (Count: X)
```

## Why it Works
By removing the mechanism for correction, you remove the temptation to invent. The agent is forced to remain adversarial and objective, rather than slipping into a collaborative "helpful assistant" persona that papers over errors.
