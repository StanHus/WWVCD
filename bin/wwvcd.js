#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ANSI Colors
const colors = {
    reset: '\x1b[0m',
    bold: '\x1b[1m',
    dim: '\x1b[2m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
};

const STOP_WORDS = new Set([
    'how', 'to', 'do', 'i', 'in', 'the', 'a', 'an', 'is', 'are', 'for', 'of', 'on', 
    'with', 'what', 'why', 'can', 'does', 'we', 'make', 'stop', 'prevent', 'get'
]);

// Semantic tag mapping to expand queries
const tagSynonyms = {
    'prompt': ['prompt', 'prompts', 'instruction', 'instructions', 'template', 'system'],
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

function printUsage() {
    console.log(`\n${colors.cyan}${colors.bold}WWVCD (What Would Vanilla Claude Do?)${colors.reset}`);
    console.log(`${colors.dim}Deep-dive into Claude Code architectural patterns.\n${colors.reset}`);
    console.log(`${colors.bold}Usage:${colors.reset}`);
    console.log(`  wwvcd <search_query>\n`);
    console.log(`${colors.bold}Examples:${colors.reset}`);
    console.log(`  wwvcd "how to stop hallucination"`);
    console.log(`  wwvcd "mcp tools verification"\n`);
}

function expandQuery(query) {
    const words = query.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
    const expanded = new Set();
    
    for (const word of words) {
        if (!word || STOP_WORDS.has(word)) continue;
        
        expanded.add(word);
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
    const titleLower = (finding.title || "").toLowerCase();
    const bodyLower = ((finding.finding || "") + " " + (finding.raw_detail || "")).toLowerCase();
    
    for (const term of queryTerms) {
        // Exact tag match: highest signal
        if (tags.includes(term)) {
            score += 10;
        }
        
        // Use regex for whole-word boundary matching to prevent "to" matching "auto"
        try {
            const regex = new RegExp(`\\b${term}\\b`, 'i');
            
            // Title match
            if (regex.test(titleLower)) {
                score += 5;
            }
            
            // Body text match
            if (regex.test(bodyLower)) {
                score += 1;
            }
        } catch(e) {
            // Ignore regex errors for weird terms
        }
    }
    
    return score;
}

function main() {
    const args = process.argv.slice(2);
    if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
        printUsage();
        process.exit(args.length === 0 ? 1 : 0);
    }
    
    const query = args.join(' ');
    console.log(`\n${colors.cyan}🔍 Semantic Search: ${colors.bold}"${query}"${colors.reset}\n`);
    
    const dbPath = path.join(__dirname, '../patterns/database/tagged_findings.json');
    if (!fs.existsSync(dbPath)) {
        console.error(`${colors.red}❌ Error: Database not found at ${dbPath}${colors.reset}`);
        console.error(`${colors.dim}Please ensure the finding pipeline has run and generated the tagged database.${colors.reset}\n`);
        process.exit(1);
    }
    
    let findings = [];
    try {
        findings = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    } catch (e) {
        console.error(`${colors.red}❌ Error: Failed to parse database JSON.${colors.reset}`);
        console.error(e.message);
        process.exit(1);
    }

    const queryTerms = expandQuery(query);
    if (queryTerms.length === 0) {
        console.log(`${colors.yellow}⚠️  No meaningful search terms extracted from query. Try adding more specific keywords.${colors.reset}\n`);
        return;
    }
    
    console.log(`${colors.dim}Active terms: [${queryTerms.join(', ')}]${colors.reset}\n`);
    
    // Score and sort
    const scoredFindings = findings.map(f => ({
        finding: f,
        score: calculateScore(f, queryTerms)
    })).filter(f => f.score > 0);
    
    scoredFindings.sort((a, b) => b.score - a.score);
    
    const topResults = scoredFindings.slice(0, 5); // Focus on top 5 for readability
    
    if (topResults.length === 0) {
        console.log(`${colors.yellow}❌ No architectural patterns found matching your query.${colors.reset}\n`);
        return;
    }
    
    console.log(`${colors.green}${colors.bold}🎯 Top ${topResults.length} Architectural Patterns:${colors.reset}\n`);
    topResults.forEach((result, i) => {
        const f = result.finding;
        console.log(`${colors.bold}${colors.magenta}${i + 1}. ${f.title || 'Untitled'}${colors.reset} ${colors.dim}(Score: ${result.score})${colors.reset}`);
        console.log(`   ${colors.cyan}Pillar:${colors.reset} ${f.pillar || 'Unknown'}`);
        if (f.tags && f.tags.length > 0) {
            console.log(`   ${colors.yellow}Tags:${colors.reset} ${f.tags.join(', ')}`);
        }
        if (f.source_file) {
            console.log(`   ${colors.blue}Source:${colors.reset} patterns/${f.source_file}`);
        }
        
        // Truncate detail to keep CLI clean
        let detail = f.finding || f.raw_detail || '';
        if (detail.length > 200) detail = detail.substring(0, 197) + '...';
        console.log(`   ${colors.reset}${detail}\n`);
    });
}

main();