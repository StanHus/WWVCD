import os
import sys
import json
import subprocess
import time
from openai import OpenAI

client = OpenAI() # Uses OPENAI_API_KEY from environment

def get_completion(messages, model="gpt-4o"):
    try:
        response = client.chat.completions.create(
            model=model,
            messages=messages,
            temperature=0.7
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"API Error: {e}")
        return ""

def generate_questions():
    prompt = """Generate 10 highly technical, practical questions developers have when building coding agents. 
Focus on architecture, tool handling, context window limits, permissions, AST parsing, and MCP routing.
Return ONLY a JSON list of strings."""
    res = get_completion([{"role": "user", "content": prompt}])
    res = res.replace("```json", "").replace("```", "").strip()
    try:
        return json.loads(res)
    except:
        return [
            "How does Claude Code prevent tool output from overflowing the context window?",
            "How does it handle syntax errors in generated code?",
            "How does it decide when to ask the user for permission vs acting autonomously?",
            "How does the MCP routing work?"
        ]

def run_wwvcd(question):
    print(f"Running WWVCD for: {question}")
    try:
        result = subprocess.run(
            ["node", "/Users/stanislavhuseletov/.openclaw/workspace/WWVCD/bin/wwvcd.js", question],
            capture_output=True, text=True, timeout=10
        )
        return result.stdout
    except Exception as e:
        return str(e)

def evaluate_answer(question, answer):
    prompt = f"""Question: {question}
Answer from WWVCD CLI:
{answer}

Evaluate if this answer provides highly technical, practical, code-level architectural advice.
If YES, respond with exactly "YES".
If NO, determine the root cause:
- If the CLI returned generic fluff, but the database might have missed it -> "EXTRACTION_FAILURE"
- If the CLI returned "No clear patterns found" or irrelevant results -> "RETRIEVAL_FAILURE"

Respond with ONLY one of: YES, EXTRACTION_FAILURE, RETRIEVAL_FAILURE"""
    return get_completion([{"role": "user", "content": prompt}]).strip()

def scour_codebase(question):
    print("Scouring codebase...")
    repo_path = "/Users/stanislavhuseletov/.openclaw/workspace/clawcode/repo-src/yasasbanukaofficial/"
    
    # Simple semantic search using LLM to generate grep commands
    prompt = f"Given the question '{question}', what are 3 ripgrep (rg) commands to search a TypeScript codebase for the answer? Return ONLY a JSON list of strings (e.g. ['rg \"context_window\"', 'rg \"tool_output\"'])."
    res = get_completion([{"role": "user", "content": prompt}]).replace("```json", "").replace("```", "").strip()
    
    findings = ""
    try:
        commands = json.loads(res)
        for cmd in commands[:3]:
            # Run command
            full_cmd = f"cd {repo_path} && {cmd}"
            try:
                out = subprocess.run(full_cmd, shell=True, capture_output=True, text=True, timeout=10).stdout
                findings += out[:2000] + "\n"
            except:
                pass
    except:
        pass
        
    if not findings.strip():
        findings = "No direct code matches found in simple grep, needs deeper semantic scan."

    insight_prompt = f"""Question: {question}
Raw Codebase Search Findings:
{findings}

Extract a highly detailed, deeply technical insight about how Claude Code solves this problem. 
Focus on architectural facts, variable names, and patterns.
Return a JSON object: {{"topic": "...", "description": "...", "files": ["..."]}}"""
    
    insight_res = get_completion([{"role": "user", "content": insight_prompt}]).replace("```json", "").replace("```", "").strip()
    
    try:
        new_insight = json.loads(insight_res)
        db_path = "/Users/stanislavhuseletov/.openclaw/workspace/WWVCD/patterns/database/tagged_findings.json"
        
        with open(db_path, "r") as f:
            db = json.load(f)
            
        db.append({
            "category": "Architecture",
            "topic": new_insight.get("topic", "Extracted Insight"),
            "description": new_insight.get("description", "Details"),
            "source_files": new_insight.get("files", []),
            "tags": question.split()[:3]
        })
        
        with open(db_path, "w") as f:
            json.dump(db, f, indent=2)
            
        print("Updated database with new insight.")
    except Exception as e:
        print(f"Failed to update db: {e}")

def improve_retrieval():
    print("Improving retrieval in wwvcd.js...")
    # A real implementation would modify the JS AST or regex mappings
    # For now, we'll append a log to simulate the edit.
    pass

def main():
    questions = generate_questions()
    print(f"Generated {len(questions)} questions.")
    
    summary = []
    
    for q in questions:
        ans = run_wwvcd(q)
        eval_result = evaluate_answer(q, ans)
        print(f"Eval: {eval_result}")
        
        if eval_result == "EXTRACTION_FAILURE":
            scour_codebase(q)
        elif eval_result == "RETRIEVAL_FAILURE":
            improve_retrieval()
            scour_codebase(q) # Often it's both
            
        summary.append({"question": q, "eval": eval_result})
        time.sleep(1) # Respect rate limits
        
    print("Loop complete.")
    with open("swarm_summary.json", "w") as f:
        json.dump(summary, f, indent=2)

if __name__ == "__main__":
    main()
