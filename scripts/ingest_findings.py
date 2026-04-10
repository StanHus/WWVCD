import json
import os
import re

FINDINGS_PATH = os.path.expanduser("~/.openclaw/workspace/clawcode/findings.json")
OUTPUT_DIR = os.path.expanduser("~/.openclaw/workspace/hwcdi-patterns/patterns/database")

os.makedirs(OUTPUT_DIR, exist_ok=True)

with open(FINDINGS_PATH, "r") as f:
    data = json.load(f)

findings = data.get("findings", [])
print(f"Loaded {len(findings)} findings.")

categories = {
    "prompts": re.compile(r"prompt|instruction|sysprompt", re.I),
    "architecture": re.compile(r"agent|tool|hook|state|architecture", re.I),
    "evaluation": re.compile(r"verif|eval|judge|quality", re.I),
    "security": re.compile(r"security|token|auth|key|permission", re.I),
    "performance": re.compile(r"cache|memo|fast-path|optimization", re.I)
}

category_data = {k: [] for k in categories}
category_data["uncategorized"] = []

for f in findings:
    title = f.get("title", "Untitled")
    desc = f.get("finding", "")
    content = f"### {title}\n{desc}\n\n"
    
    matched = False
    for cat, pattern in categories.items():
        if pattern.search(title) or pattern.search(desc):
            category_data[cat].append(content)
            matched = True
            break
            
    if not matched:
        category_data["uncategorized"].append(content)

for cat, items in category_data.items():
    if not items:
        continue
    
    file_path = os.path.join(OUTPUT_DIR, f"{cat}_insights.md")
    with open(file_path, "w") as out:
        out.write(f"# {cat.capitalize()} Insights\n\n")
        out.write(f"*Clean-room distillation of {len(items)} insights regarding {cat}.*\n\n")
        out.write("---\n\n")
        out.write("".join(items))
        
print(f"Successfully processed {len(findings)} insights into {OUTPUT_DIR}")
