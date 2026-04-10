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

// Map common terms to Anthropic/Claude Code terminology
let queries = [originalQuery];
if (originalQuery.includes('hallucinat')) queries.push('fabricat', 'false claim');
if (originalQuery.includes('eval')) queries.push('verif', 'judge');

const dbDirs = [
  path.join(__dirname, '..', 'patterns', 'database'),
  path.join(__dirname, '..', 'patterns')
];

let foundCount = 0;

console.log(`\n🔍 Searching WWVCD database for: "${originalQuery}"\n`);

dbDirs.forEach(dbPath => {
  if (!fs.existsSync(dbPath)) return;
  
  // Read markdown files but skip directories (like 'database' itself when inside 'patterns')
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
        if (queries.some(q => lowerInsight.includes(q))) {
          foundCount++;
          console.log(`\x1b[36m========================================\x1b[0m`);
          console.log(`📁 Source: \x1b[33m${file}\x1b[0m`);
          console.log(`\x1b[36m========================================\x1b[0m`);
          console.log(`### ${insight.trim()}\n`);
        }
      });
    } else {
      // For structural deep dives in patterns/
      const lowerContent = content.toLowerCase();
      if (queries.some(q => lowerContent.includes(q))) {
        foundCount++;
        console.log(`\x1b[36m========================================\x1b[0m`);
        console.log(`🧠 Structural Deep Dive: \x1b[35m${file}\x1b[0m`);
        console.log(`\x1b[36m========================================\x1b[0m`);
        // Print preview of the deep dive
        const lines = content.split('\n');
        const preview = lines.slice(0, 15).join('\n');
        console.log(`${preview}\n... [Read full strategy in WWVCD repo: patterns/${file}]\n`);
      }
    }
  });
});

if (foundCount === 0) {
  console.log(`❌ No insights found matching "${originalQuery}". Try synonyms like "fabrication", "evidence", "system prompt", etc.\n`);
} else {
  console.log(`✅ Found ${foundCount} insight(s) matching "${originalQuery}".\n`);
}
