#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Semantic tag mapping to expand queries
const tagSynonyms = {
    'prompt': ['prompt', 'prompts', 'instruction', 'instructions', 'template'],
    'architecture': ['architecture', 'design', 'structure', 'system', 'component', 'module'],
    'evaluation': ['eval', 'evaluation', 'test', 'testing', 'metric', 'benchmark'],
    'security': ['security', 'auth', 'token', 'permission', 'safe', 'safety', 'sandbox'],
    'performance': ['performance', 'speed', 'latency', 'optimize', 'optimization', 'cache', 'caching'],
    'agent': ['agent', 'bot', 'assistant', 'ai', 'model', 'llm', 'gpt', 'claude', 'subagent'],
    'verification': ['verify', 'verification', 'validate', 'validation', 'check', 'verifier'],
    'hallucination': ['hallucination', 'fabricate', 'fabrication', 'grounding', 'ground'],
    'tools': ['tool', 'tools', 'function', 'functions', 'api', 'call', 'mcp'],
    'context': ['context', 'window', 'memory', 'history', 'message'],
    'rag': ['rag', 'retrieval', 'search', 'vector', 'embedding'],
    'pipeline': ['pipeline', 'workflow', 'chain', 'sequence', 'step']
};

function expandQuery(query) {
    const words = query.toLowerCase().split(/\s+/);
    const expanded = new Set(words);
    
    for (const word of words) {
        for (const [tag, synonyms] of Object.entries(tagSynonyms)) {
            if (synonyms.includes(word)) {
                expanded.add(tag);
                synonyms.forEach(s => expanded.add(s));
            }
        }
    }
    return Array.from(expanded);
}

function calculateScore(finding, queryTerms) {
    let score = 0;
    const tags = finding.tags || [];
    
    // Exact tag match is highest score
    for (const term of queryTerms) {
        if (tags.includes(term)) {
            score += 10;
        }
    }
    
    // Text search fallback
    const text = (finding.finding || "") + " " + (finding.raw_detail || "") + " " + (finding.title || "");
    const textLower = text.toLowerCase();
    
    for (const term of queryTerms) {
        if (textLower.includes(term)) {
            score += 1;
        }
    }
    
    return score;
}

function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('Usage: wwvcd <search_query>');
        process.exit(1);
    }
    
    const query = args.join(' ');
    console.log(`\n🔍 Semantic Search: "${query}"\n`);
    
    const dbPath = path.join(__dirname, '../patterns/database/tagged_findings.json');
    if (!fs.existsSync(dbPath)) {
        console.error('Database not found. Rebuild it first.');
        process.exit(1);
    }
    
    const findings = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    const queryTerms = expandQuery(query);
    
    console.log(`Expanded query terms: [${queryTerms.join(', ')}]\n`);
    
    // Score and sort
    const scoredFindings = findings.map(f => ({
        finding: f,
        score: calculateScore(f, queryTerms)
    })).filter(f => f.score > 0);
    
    scoredFindings.sort((a, b) => b.score - a.score);
    
    const topResults = scoredFindings.slice(0, 10);
    
    if (topResults.length === 0) {
        console.log('❌ No results found.');
        return;
    }
    
    console.log(`🎯 Top ${topResults.length} Results:\n`);
    topResults.forEach((result, i) => {
        const f = result.finding;
        console.log(`${i + 1}. [Score: ${result.score}] ${f.title || 'Untitled'}`);
        console.log(`   Pillar: ${f.pillar || 'Unknown'}`);
        console.log(`   Tags: ${(f.tags || []).join(', ')}`);
        console.log(`   Detail: ${f.finding || f.raw_detail || ''}\n`);
    });
}

main();
