import json
import os
import re
from collections import Counter
from typing import List, Dict

# Basic stop words
STOP_WORDS = set("the and of to in a is for that on with as it by be this from at are an was or which can you your your we our have has had but not they their what when where why how if then else do did done all any some many much more most less least very too also so just only about out up down over under through into onto out of off like as well as such as well as both either neither nor whether though although even though while whereas however moreover furthermore nevertheless nonetheless therefore thus hence consequently accordingly otherwise instead alternatively conversely similarly likewise additionally besides then again yet still also too besides as well as well as".split())

def extract_tags(text: str) -> List[str]:
    text = text.lower()
    # Simple tokenization
    words = re.findall(r'\b[a-z0-9_]+\b', text)
    # Remove stop words and short words
    words = [w for w in words if w not in STOP_WORDS and len(w) > 3]
    
    # Common tech/agent keywords mapping
    keyword_map = {
        'prompt': ['prompt', 'prompts', 'instruction', 'instructions', 'template'],
        'architecture': ['architecture', 'design', 'structure', 'system', 'component', 'module'],
        'evaluation': ['eval', 'evaluation', 'test', 'testing', 'metric', 'benchmark'],
        'security': ['security', 'auth', 'token', 'permission', 'safe', 'safety', 'sandbox'],
        'performance': ['performance', 'speed', 'latency', 'optimize', 'optimization', 'cache', 'caching'],
        'agent': ['agent', 'bot', 'assistant', 'ai', 'model', 'llm', 'gpt', 'claude'],
        'verification': ['verify', 'verification', 'validate', 'validation', 'check'],
        'hallucination': ['hallucination', 'fabricate', 'fabrication', 'grounding', 'ground'],
        'tools': ['tool', 'tools', 'function', 'functions', 'api', 'call'],
        'context': ['context', 'window', 'memory', 'history', 'message'],
        'rag': ['rag', 'retrieval', 'search', 'vector', 'embedding'],
        'pipeline': ['pipeline', 'workflow', 'chain', 'sequence', 'step']
    }
    
    tags = set()
    
    # Keyword-based tagging
    for tag, keywords in keyword_map.items():
        if any(kw in text for kw in keywords):
            tags.add(tag)
            
    # Extract frequent meaningful words as additional tags
    word_counts = Counter(words)
    for word, count in word_counts.most_common(10):
        if len(tags) < 15 and count > 1: # Arbitrary threshold
             tags.add(word)
    
    return list(tags)[:20]

def main():
    findings_path = os.path.expanduser('~/.openclaw/workspace/clawcode/findings.json')
    db_dir = os.path.expanduser('~/.openclaw/workspace/WWVCD/patterns/database/')
    
    with open(findings_path, 'r') as f:
        data = json.load(f)
        
    findings = data.get('findings', [])
    print(f"Loaded {len(findings)} findings.")
    
    # Process each finding
    tagged_findings = []
    
    for finding in findings:
        text = str(finding.get('finding', '')) + " " + str(finding.get('raw_detail', '')) + " " + str(finding.get('title', ''))
        
        tags = extract_tags(text)
        finding['tags'] = tags
        tagged_findings.append(finding)
            
    # Write to database (JSON)
    os.makedirs(db_dir, exist_ok=True)
    with open(os.path.join(db_dir, 'tagged_findings.json'), 'w') as f:
        json.dump(tagged_findings, f, indent=2)
        
    print("Tagged findings saved.")

if __name__ == '__main__':
    main()
