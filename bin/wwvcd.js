#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
  🏎️  WWVCD: What Would Vin Claudel Do?
  Search 3,185 clean-room AI agent and prompt engineering insights.

  Usage: wwvcd <search_query>

  Example:
    wwvcd "verification"
    wwvcd "system prompt"
    wwvcd "hallucination"
  `);
  process.exit(0);
}

const originalQuery = args.join(' ').toLowerCase();

// A highly aggressive synonym expansion dictionary
const expansions = {
  'hallucination': ['fabricat', 'false claim', 'invent', 'plausib', 'hallucinat', 'lie'],
  'eval': ['verif', 'judge', 'evaluat', 'assess', 'score', 'check', 'test'],
  'prompt': ['instruct', 'sysprompt', 'system prompt', 'context'],
  'tool': ['function', 'hook', 'action', 'call'],
  'error': ['fail', 'exception', 'crash', 'bug', 'telemetry'],
  'security': ['auth', 'permission', 'token', 'key', 'bypass', 'safet'],
  'memory': ['context', 'recall', 'history', 'summar', 'cache'],
  'speed': ['fast-path', 'optimiz', 'perform', 'latency', 'cache'],
};

// Expand the query into multiple search terms
let searchTerms = [originalQuery];

// Check if the query matches any of our synonym groups
Object.keys(expansions).forEach(key => {
  if (originalQuery.includes(key) || expansions[key].some(syn => originalQuery.includes(syn))) {
    searchTerms.push(key, ...expansions[key]);
  }
});

// Split multi-word queries to do partial "AND" matching
const queryWords = originalQuery.split(' ').filter(w => w.length > 2);
if (queryWords.length > 1) {
  searchTerms = [...new Set([...searchTerms, ...queryWords])];
} else {
  searchTerms = [...new Set(searchTerms)];
}

const dbDirs = [
  path.join(__dirname, '..', 'patterns', 'database'),
  path.join(__dirname, '..', 'patterns')
];

let foundCount = 0;

console.log(`\n🔍 Searching WWVCD database for: "${originalQuery}"`);
console.log(`   (Expanded search terms: ${searchTerms.join(', ')})\n`);

dbDirs.forEach(dbPath => {
  if (!fs.existsSync(dbPath)) return;
  
  const files = fs.readdirSync(dbPath, { withFileTypes: true })
                  .filter(dirent => !dirent.isDirectory() && dirent.name.endsWith('.md'))
                  .map(dirent => dirent.name);
  
  files.forEach(file => {
    const content = fs.readFileSync(path.join(dbPath, file), 'utf-8');
    
    // For database insights (split by ###)
    if (dbPath.includes('database')) {
      const insights = content.split('### ').slice(1);
      insights.forEach(insight => {
        const lowerInsight = insight.toLowerCase();
        
        // Count how many search terms hit this insight
        let hitCount = 0;
        searchTerms.forEach(term => {
          if (lowerInsight.includes(term)) hitCount++;
        });

        // For multi-word queries, require at least 1 strong hit or 2 partial hits
        // If it's a single word query, just 1 hit is fine
        const requiredHits = queryWords.length > 1 ? 2 : 1;

        if (hitCount >= requiredHits) {
          foundCount++;
          console.log(`\x1b[36m========================================\x1b[0m`);
          console.log(`📁 Source: \x1b[33m${file}\x1b[0m`);
          console.log(`\x1b[36m========================================\x1b[0m`);
          
          // Print the insight, limiting to 10-15 lines if it's super long
          const lines = insight.trim().split('\n');
          if (lines.length > 15) {
            console.log(`### ${lines.slice(0, 15).join('\n')}\n... [Insight truncated]\n`);
          } else {
            console.log(`### ${insight.trim()}\n`);
          }
        }
      });
    } else {
      // For structural deep dives in patterns/
      const lowerContent = content.toLowerCase();
      let hitCount = 0;
      searchTerms.forEach(term => {
        if (lowerContent.includes(term)) hitCount++;
      });

      if (hitCount > 0) {
        foundCount++;
        console.log(`\x1b[36m========================================\x1b[0m`);
        console.log(`🧠 Structural Deep Dive: \x1b[35m${file}\x1b[0m`);
        console.log(`\x1b[36m========================================\x1b[0m`);
        const lines = content.split('\n');
        const preview = lines.slice(0, 10).join('\n');
        console.log(`${preview}\n... [Read full strategy in WWVCD repo: patterns/${file}]\n`);
      }
    }
  });
});

if (foundCount === 0) {
  console.log(`❌ No insights found matching "${originalQuery}". Try a broader keyword.\n`);
} else {
  console.log(`✅ Found ${foundCount} insight(s) matching "${originalQuery}".\n`);
}
