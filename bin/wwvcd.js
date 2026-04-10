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
  `);
  process.exit(0);
}

const query = args.join(' ').toLowerCase();
const dbPath = path.join(__dirname, '..', 'patterns', 'database');

if (!fs.existsSync(dbPath)) {
  console.error('Error: Database directory not found.');
  process.exit(1);
}

const files = fs.readdirSync(dbPath).filter(f => f.endsWith('.md'));
let foundCount = 0;

console.log(`\n🔍 Searching WWVCD database for: "${query}"\n`);

files.forEach(file => {
  const content = fs.readFileSync(path.join(dbPath, file), 'utf-8');
  const insights = content.split('### ').slice(1);
  
  insights.forEach(insight => {
    if (insight.toLowerCase().includes(query)) {
      foundCount++;
      // Highlight the match terminal-style manually if we want, or just print
      console.log(`\x1b[36m========================================\x1b[0m`);
      console.log(`📁 Source: \x1b[33m${file}\x1b[0m`);
      console.log(`\x1b[36m========================================\x1b[0m`);
      console.log(`### ${insight.trim()}\n`);
    }
  });
});

if (foundCount === 0) {
  console.log(`❌ No insights found matching "${query}". Try a different keyword.\n`);
} else {
  console.log(`✅ Found ${foundCount} insight(s) matching "${query}".\n`);
}
