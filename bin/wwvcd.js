#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Semantic tag mapping to expand queries
const tagSynonyms = {
    'hallucination': ['hallucinat', 'fabricat', 'false claim', 'invent', 'plausib', 'lie', 'grounding'],
    'evaluation': ['eval', 'verif', 'judge', 'assess', 'score', 'check', 'test', 'metric', 'benchmark'],
    'prompt': ['instruct', 'sysprompt', 'system prompt', 'context'],
    'tool': ['function', 'hook', 'action', 'call'],
    'security': ['auth', 'permission', 'token', 'key', 'bypass', 'safet', 'sandbox', 'model'],
    'performance': ['fast-path', 'optimiz', 'perform', 'latency', 'cache', 'speed'],
    'architecture': ['architecture', 'design', 'structure', 'system', 'component', 'module'],
    'agent': ['agent', 'bot', 'assistant', 'subagent', 'parallel'],
    'mcp': ['mcp', 'model context protocol', 'routing', 'strateg', 'server'],
    'state': ['state', 'management', 'store']
};

const stopWords = new Set(['how', 'do', 'i', 'stop', 'my', 'from', 'the', 'a', 'an', 'to', 'in', 'on', 'with', 'is', 'are', 'and', 'of', 'for', '--yes', '-y', 'what', 'would', 'vin', 'claudel', 'claude']);

function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('Usage: wwvcd <search_query>');
        process.exit(1);
    }
    
    // Clean query
    const rawQuery = args.join(' ').toLowerCase().replace(/[^\w\s-]/g, '');
    const words = rawQuery.split(/\s+/).filter(w => w.length > 2 && !stopWords.has(w));
    
    // Expand query with heavy weights for specific concepts
    const activeConcepts = new Set();
    const searchTerms = new Set(words);
    
    words.forEach(word => {
        Object.entries(tagSynonyms).forEach(([concept, synonyms]) => {
            if (concept.includes(word) || synonyms.some(s => word.includes(s) || s.includes(word))) {
                activeConcepts.add(concept);
                synonyms.forEach(s => searchTerms.add(s));
                searchTerms.add(concept);
            }
        });
    });

    console.log(`\n\x1b[1m🔍 Semantic Search:\x1b[0m "${args.join(' ')}"`);
    console.log(`\x1b[90mExtracted Concepts: [${Array.from(activeConcepts).join(', ')}]\x1b[0m\n`);
    
    // Read the database
    const dbPath = path.join(__dirname, '../patterns/database/tagged_findings.json');
    if (!fs.existsSync(dbPath)) {
        console.error('Database not found. Please ensure WWVCD is installed correctly.');
        process.exit(1);
    }
    
    const findings = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    // Score findings
    const scoredFindings = findings.map(f => {
        let score = 0;
        const text = (f.finding || "") + " " + (f.raw_detail || "") + " " + (f.title || "");
        const textLower = text.toLowerCase();
        const tagsLower = (f.tags || []).map(t => t.toLowerCase());
        
        // Massive boost for core concepts that the user explicitly searched for
        activeConcepts.forEach(concept => {
            // If the finding's tags exactly match the concept, huge boost
            if (tagsLower.includes(concept)) score += 50;
            
            // If the finding's text contains the concept or its synonyms, strong boost
            tagSynonyms[concept].forEach(syn => {
                if (textLower.includes(syn)) score += 20;
            });
        });
        
        // Minor boost for raw word hits
        words.forEach(word => {
            if (textLower.includes(word)) score += 5;
            if (tagsLower.includes(word)) score += 10;
        });
        
        // Penalty for generic Claude/Model stuff if we are looking for specific behaviors like hallucinations
        if (activeConcepts.has('hallucination') || activeConcepts.has('evaluation')) {
            if (textLower.includes('claude-sonnet') || textLower.includes('claude-opus')) {
                score -= 30; 
            }
        }
        
        return { finding: f, score };
    }).filter(f => f.score > 20); // higher threshold
    
    scoredFindings.sort((a, b) => b.score - a.score);
    const topResults = scoredFindings.slice(0, 5);
    
    // Print Structural Deep Dives if relevant
    if (activeConcepts.has('hallucination') || activeConcepts.has('evaluation') || activeConcepts.has('prompt')) {
        console.log(`\x1b[35m\x1b[1m========================================\x1b[0m`);
        console.log(`\x1b[35m\x1b[1m🧠 CORE STRUCTURAL STRATEGY REQUIRED\x1b[0m`);
        console.log(`\x1b[35m\x1b[1m========================================\x1b[0m`);
        if (activeConcepts.has('hallucination')) {
            console.log(`\x1b[33mPattern 01: Enumerate Rationalizations\x1b[0m`);
            console.log(`Explicitly list the internal monologues and excuses the model will use to justify skipping work or inventing facts, and forbid them directly in the prompt.\n`);
            console.log(`\x1b[33mPattern 02: Structural Evidence\x1b[0m`);
            console.log(`Force the model to provide structural proof (e.g. an exact verbatim Source Quote block). A claim without structural evidence is automatically a FABRICATION.\n`);
        }
        if (activeConcepts.has('evaluation')) {
            console.log(`\x1b[33mPattern 03: The Read-Only Judge\x1b[0m`);
            console.log(`Evaluation agents MUST be architecturally decoupled from generation. Remove their ability to write or edit files. If they can fix the code, they will be seduced by plausibility and hallucinate fixes.\n`);
        }
    }
    
    if (topResults.length === 0) {
        console.log('❌ No results found. Try a different keyword.');
        return;
    }
    
    console.log(`\x1b[36m\x1b[1m🎯 Top ${topResults.length} Architectural Patterns:\x1b[0m\n`);
    topResults.forEach((result, i) => {
        const f = result.finding;
        console.log(`\x1b[1m${i + 1}. ${f.title || 'Untitled'}\x1b[0m \x1b[90m(Score: ${result.score})\x1b[0m`);
        console.log(`   \x1b[34mTags:\x1b[0m \x1b[90m${(f.tags || []).join(', ')}\x1b[0m`);
        
        const detail = f.finding || f.raw_detail || '';
        // Word wrap detail
        const wrapped = detail.replace(/(?![^\n]{1,80}$)([^\n]{1,80})\s/g, '$1\n   ');
        console.log(`   ${wrapped}\n`);
    });
}

main();
