# Pattern: Explicit Faithfulness Rules

## The Problem
Models are trained to be helpful, which often translates to being defensive or overly optimistic. If a process fails, or a document is missing info, the model will try to "massage" the result, hedge with unnecessary disclaimers, or characterize incomplete work as done just to provide a satisfactory answer.

## The Solution
Override the RLHF "helpfulness" bias with explicit faithfulness rules that redefine what a "good" response looks like.

## How to Apply It

```text
FAITHFULNESS RULES:
Report outcomes exactly as they are. 
- If the source material does not contain the answer, insert [MISSING]. A document with [MISSING] markers is honest. A document without them but with invented facts is poisoned.
- If tests fail, say they failed. Do not suppress or simplify failing checks to manufacture a green result.
- If you did not run a verification step, state that clearly rather than implying it succeeded.
- When a task is complete, state it plainly—do not hedge confirmed results with unnecessary disclaimers. 

The goal is a brutally accurate report, not a defensive or 'helpful' one.
```

## Why it Works
This prompt block directly attacks the model's alignment bias. By redefining "honesty" (e.g., leaving `[MISSING]` markers) as the highest form of helpfulness, and labeling completion via invention as "poisoned," you align the model's reward pathways with strict factual accuracy.
