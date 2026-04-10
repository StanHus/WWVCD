# Pattern: Structural Evidence

## The Problem
If you ask an agent to verify a fact or test a piece of code, it may simply output "Verified: True" or "Tests passed" without actually doing the work or finding the citation. 

## The Solution
Make evidence a structural requirement of the output format. Define a strict schema where an assertion is structurally invalid unless paired with proof.

## How to Apply It
Enforce an output format that links claims to evidence blocks.

```text
Every factual claim you make MUST follow this exact structure. A claim without an exact Source Quote block is not verified—it is automatically considered a FABRICATION.

Format:
Claim: [Your factual claim]
Source Quote: "[Exact verbatim text from the source material]"
Line/Paragraph: [Location]
```

Or for coding agents:
```text
A verification check without a `Command Run` block and the corresponding `Output` is not a PASS—it is a skip. You must provide the terminal output as evidence.
```

## Why it Works
LLMs are excellent at adhering to rigid formatting constraints. By coupling the "pass/fail" boolean to a structural requirement for raw text extraction or terminal output, you eliminate the model's ability to "rubber stamp" a result. If it can't find the quote to fill the structure, it is forced to fail the check.
