#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// ─── Concept taxonomy: query word → semantic expansion ───────────────────────
const CONCEPT_MAP = {
    // Context and memory
    'context': ['context-window', 'compaction', 'compact', 'autocompact', 'token', 'limit', 'window'],
    'context-window': ['context-window', 'compact', 'autocompact', 'token-limit', 'summary'],
    'compact': ['compaction', 'context-window', 'autocompact', 'session-memory', 'summary', 'microcompact'],
    'compaction': ['compaction', 'context-window', 'autocompact', 'session-memory'],
    'memory': ['auto-memory', 'session-memory', 'memdir', 'memory', 'claude-md'],
    'token': ['token-limits', 'context-window', 'limits', 'api'],
    'summarize': ['compaction', 'context-window', 'session-memory'],
    // Permissions
    'permission': ['permissions', 'security', 'bypass', 'plan-mode', 'auto-approve', 'trust'],
    'permissions': ['permissions', 'security', 'bypasspermissions', 'dangerouslyskip', 'auto-approve'],
    'bypass': ['permissions', 'security', 'bypasspermissions', 'dangerouslyskip'],
    'security': ['security', 'permissions', 'sandboxing', 'trust', 'oauth', 'jwt'],
    'sandbox': ['sandboxing', 'security', 'bash', 'bwrap'],
    'sandboxing': ['sandboxing', 'security', 'bash', 'bwrap', 'sandbox-exec'],
    'trust': ['trust', 'security', 'oauth', 'onboarding'],
    'auth': ['oauth', 'auth', 'security', 'jwt', 'bridge'],
    // Tools
    'tool': ['tool', 'tool-framework', 'tools', 'execution'],
    'tools': ['tool', 'tool-framework', 'tools', 'execution'],
    'bash': ['bash', 'shell', 'execution', 'background'],
    'shell': ['bash', 'shell', 'execution', 'sandboxing'],
    'background': ['background', 'async', 'task', 'bash'],
    'agent': ['agent', 'multi-agent', 'subagent', 'swarm'],
    'subagent': ['subagent', 'multi-agent', 'agent', 'agentool'],
    'swarm': ['swarm', 'team', 'multi-agent', 'sendmessage'],
    'team': ['swarm', 'team', 'multi-agent'],
    'mcp': ['mcp', 'mcp-server', 'protocol', 'tool'],
    'file': ['file', 'filesystem', 'tool', 'read-before-write'],
    'edit': ['file-editing', 'filesystem', 'tool', 'read-before-write'],
    'read': ['file', 'filesystem', 'tool'],
    'write': ['file', 'filesystem', 'tool', 'read-before-write'],
    'glob': ['glob', 'search', 'filesystem', 'limits'],
    'grep': ['search', 'filesystem', 'tool'],
    'search': ['search', 'tool-discovery', 'web'],
    'web': ['web', 'tool', 'search', 'fetch'],
    'notebook': ['notebook', 'jupyter', 'tool'],
    'repl': ['repl', 'tool', 'execution'],
    'lsp': ['lsp', 'language-server', 'tool'],
    'worktree': ['worktree', 'git', 'isolation', 'tool'],
    'schedule': ['cron', 'scheduling', 'kairos', 'tool'],
    'cron': ['cron', 'scheduling', 'kairos'],
    'skill': ['skill', 'tool', 'plugin'],
    'plan': ['plan-mode', 'architecture'],
    'task': ['task', 'state', 'tool'],
    // Features and flags
    'kairos': ['kairos', 'feature-flags', 'special-systems'],
    'feature': ['feature-flags', 'analytics', 'growthbook'],
    'flag': ['feature-flags', 'analytics'],
    'tengu': ['tengu', 'feature-flags', 'internal'],
    'growthbook': ['feature-flags', 'analytics'],
    'bridge': ['bridge', 'remote', 'cli', 'jwt', 'session'],
    'remote': ['bridge', 'remote', 'websocket', 'sse'],
    // Prompts and model
    'prompt': ['system-prompt', 'prompt', 'prompt-caching'],
    'system': ['system-prompt', 'prompt', 'architecture'],
    'cache': ['prompt-caching', 'performance', 'api'],
    'caching': ['prompt-caching', 'performance', 'api'],
    'hallucination': ['hallucination', 'evaluation', 'prompt'],
    'hallucinate': ['hallucination', 'evaluation', 'prompt'],
    'thinking': ['thinking', 'model', 'configuration'],
    // Architecture
    'architecture': ['architecture', 'entry-point', 'services', 'state'],
    'state': ['state', 'architecture', 'services'],
    'hook': ['hooks', 'react', 'ui'],
    'hooks': ['hooks', 'react', 'ui'],
    'component': ['components', 'ui', 'messages'],
    'migration': ['migration', 'versioning'],
    'analytics': ['analytics', 'telemetry', 'growthbook'],
    'telemetry': ['analytics', 'telemetry'],
    'session': ['session', 'bridge', 'remote'],
    'error': ['error-handling', 'errors', 'retry'],
    'retry': ['retry', 'error-handling', 'api'],
    'rate': ['rate-limiting', 'api'],
    'limit': ['rate-limiting', 'limits', 'token-limits', 'api'],
    // Constants and types
    'constant': ['constants', 'types', 'limits'],
    'constants': ['constants', 'types', 'limits'],
    'type': ['types', 'constants', 'schema'],
    'types': ['types', 'constants', 'schema'],
    'api': ['api', 'limits', 'retry', 'rate-limiting'],
    // CLI
    'command': ['commands', 'cli', 'slash-commands'],
    'slash': ['commands', 'cli', 'slash-commands'],
    'config': ['configuration', 'claude-md', 'settings'],
    'settings': ['configuration', 'claude-md'],
    // Performance
    'performance': ['performance', 'rust', 'prefetch', 'speculation'],
    'fast': ['performance', 'prefetch', 'speculation'],
    'speed': ['performance', 'prefetch', 'speculation'],
    'startup': ['entry-point', 'prefetch', 'performance'],
    'prefetch': ['prefetch', 'speculation', 'performance'],
    // Concurrency
    'concurrent': ['concurrency', 'tool', 'async'],
    'concurrency': ['concurrency', 'tool', 'async'],
    'parallel': ['concurrency', 'multi-agent', 'async'],
    // UI
    'terminal': ['terminal', 'ink', 'tui', 'ui'],
    'ink': ['ink', 'tui', 'terminal', 'ui'],
    'tui': ['tui', 'terminal', 'ink', 'ui'],
    'keybinding': ['keybindings', 'ui', 'hot-reload'],
    'keybindings': ['keybindings', 'ui', 'hot-reload'],
    // Git
    'git': ['git', 'version-control', 'worktree'],
    'commit': ['git', 'version-control'],
    // Rust
    'rust': ['rust', 'performance'],
    // OAuth
    'oauth': ['oauth', 'auth', 'security'],
    'login': ['oauth', 'auth', 'security'],
    // Image/PDF
    'image': ['images', 'limits', 'api'],
    'pdf': ['pdf', 'limits', 'api'],
    // Cost
    'cost': ['cost-tracking', 'analytics', 'api'],
    'token-count': ['token-limits', 'context-window', 'limits'],
    // Specific compound terms (map camelCase/combined forms directly)
    'bypasspermissions': ['permissions', 'security', 'permission-modes'],
    'dangerouslyskippermissions': ['permissions', 'security'],
    'acceptedits': ['permissions', 'security'],
    'dontask': ['permissions', 'security'],
    'autocompact': ['compaction', 'context-window', 'autocompact'],
    'sessionmemory': ['session-memory', 'memory', 'context'],
    'microcompact': ['compaction', 'context-window'],
    'toolpermission': ['permissions', 'tool'],
    'tooluse': ['tool', 'execution'],
    'appstate': ['state', 'architecture'],
    'agentool': ['agent', 'multi-agent'],
    'bashtool': ['bash', 'shell', 'execution'],
    'filereadtool': ['file', 'filesystem'],
    'fileedittool': ['file', 'filesystem', 'read-before-write'],
    'filewritetool': ['file', 'filesystem'],
    'mcptool': ['mcp', 'tool'],
    'globtool': ['glob', 'search', 'filesystem'],
    'greptool': ['search', 'filesystem'],
    'webtool': ['web', 'search'],
    'websearchtool': ['web', 'search'],
    'webfetchtool': ['web', 'search'],
    'skilltool': ['skill', 'plugin'],
    'toolsearch': ['tool-discovery', 'deferred'],
    'askuserquestion': ['interrupt', 'user-input'],
    'notebookedit': ['notebook', 'jupyter'],
    'enterworktree': ['worktree', 'git'],
    'enterplanmode': ['plan-mode'],
    'exitplanmode': ['plan-mode'],
    'croncreate': ['cron', 'scheduling', 'kairos'],
    'crondelete': ['cron', 'scheduling', 'kairos'],
    'cronlist': ['cron', 'scheduling', 'kairos'],
    'remotetrigger': ['trigger', 'remote', 'kairos'],
    'sleeptool': ['sleep', 'kairos'],
    'brieftool': ['brief', 'kairos'],
    'teamcreate': ['swarm', 'team', 'multi-agent'],
    'sendmessage': ['swarm', 'team', 'multi-agent'],
    'syntheticoutput': ['output', 'sdk'],
    'repltool': ['repl', 'execution'],
    'lstool': ['lsp', 'language-server'],
    'taskcreate': ['task', 'state'],
    'taskupdate': ['task', 'state'],
    'taskget': ['task', 'state'],
    'tasklist': ['task', 'state'],
    'taskoutput': ['task', 'async'],
    'taskstop': ['task', 'async'],
    'todowrite': ['todo', 'task'],
};

// Stop words — removed from query before scoring
const STOP_WORDS = new Set([
    // English function words
    'how', 'do', 'does', 'did', 'done', 'doing',
    'the', 'a', 'an', 'to', 'in', 'on', 'with', 'is', 'are', 'and', 'of', 'for',
    'what', 'when', 'where', 'why', 'which', 'who', 'whom', 'that', 'this', 'these', 'those',
    'my', 'me', 'we', 'you', 'it', 'its', 'our', 'your', 'their', 'they', 'he', 'she',
    'be', 'been', 'being', 'have', 'has', 'had', 'having',
    'will', 'would', 'could', 'should', 'may', 'might', 'must', 'shall',
    'can', 'was', 'were', 'not', 'nor', 'but', 'or', 'if', 'as', 'so', 'yet',
    'at', 'by', 'up', 'out', 'off', 'into', 'onto', 'from', 'over', 'under',
    // Filler verbs that add noise
    'use', 'get', 'set', 'run', 'make', 'makes', 'made', 'create', 'creates',
    'handle', 'handles', 'work', 'works', 'keep', 'gets', 'kept', 'keeps',
    'even', 'still', 'just', 'also', 'too', 'only', 'both', 'each', 'more',
    'most', 'some', 'many', 'much', 'very', 'all', 'any',
    // Noise question words
    'tell', 'show', 'explain', 'describe', 'list', 'give',
    'reject', 'rejects', 'rejected', 'allow', 'allows', 'allowed',
    'call', 'calls', 'called', 'using', 'used', 'getting', 'calling',
    // Context-noise words (always appear with more specific terms)
    'mode', 'modes', 'thing', 'things', 'way', 'ways', 'means',
    'different', 'specific', 'certain', 'current', 'new', 'old',
    'first', 'last', 'next', 'then', 'now', 'here', 'there',
    'true', 'false', 'null', 'undefined',
    // Brand names that are stop words in this context
    'vin', 'claudel', 'claude', 'code', '--yes', '-y',
]);

function main() {
    const args = process.argv.slice(2);
    const flagIdx = args.indexOf('--json');
    const jsonMode = flagIdx !== -1;
    const cleanArgs = args.filter(a => !a.startsWith('--'));

    if (cleanArgs.length === 0) {
        console.error('Usage: wwvcd <search_query> [--json]');
        console.error('');
        console.error('Examples:');
        console.error('  wwvcd "context window compaction"');
        console.error('  wwvcd "bash background threshold"');
        console.error('  wwvcd "permission bypassPermissions"');
        console.error('  wwvcd "kairos cron scheduling"');
        process.exit(1);
    }

    const rawQuery = cleanArgs.join(' ').toLowerCase().replace(/[^\w\s\-\.]/g, ' ');
    const baseWords = rawQuery
        .split(/\s+/)
        .filter(w => w.length > 2 && !STOP_WORDS.has(w));

    // Expand SCREAMING_SNAKE_CASE and camelCase tokens into component words
    // e.g. ASSISTANT_BLOCKING_BUDGET_MS → ["assistant", "blocking", "budget"]
    //      bypassPermissions → ["bypass", "permissions"]
    const queryWords = [];
    baseWords.forEach(word => {
        queryWords.push(word); // always keep original
        if (word.includes('_')) {
            // underscore-separated (SCREAMING_SNAKE_CASE or snake_case)
            word.split('_').forEach(part => {
                if (part.length > 2 && !STOP_WORDS.has(part) && part !== word) {
                    queryWords.push(part);
                }
            });
        }
        // camelCase splitting: bypassPermissions → bypass + permissions
        const camelParts = word.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(' ');
        if (camelParts.length > 1) {
            camelParts.forEach(part => {
                if (part.length > 2 && !STOP_WORDS.has(part) && part !== word) {
                    queryWords.push(part);
                }
            });
        }
    });

    // Build expanded concept set from query words
    const activeConcepts = new Set();
    queryWords.forEach(word => {
        // Direct exact match (highest confidence)
        if (CONCEPT_MAP[word]) {
            CONCEPT_MAP[word].forEach(c => activeConcepts.add(c));
            activeConcepts.add(word);
        }
        // Prefix match: query word STARTS WITH a concept key
        // e.g. "bypasspermissions" starts with "bypass" → add bypass concepts
        Object.entries(CONCEPT_MAP).forEach(([key, expansions]) => {
            if (word.startsWith(key) && key.length >= 4) {
                expansions.forEach(c => activeConcepts.add(c));
                activeConcepts.add(key);
            }
            // Or the key starts with the word (narrowing: user typed partial)
            // e.g. "auth" → matches "authentication" concepts
            if (key.startsWith(word) && word.length >= 4) {
                expansions.forEach(c => activeConcepts.add(c));
                activeConcepts.add(key);
            }
        });
        // Always add the raw word itself for text scoring
        activeConcepts.add(word);
    });

    if (!jsonMode) {
        console.log(`\n\x1b[1m🔍 What Would Vin Claudel Do?\x1b[0m`);
        console.log(`\x1b[90mQuery: "${cleanArgs.join(' ')}" → Concepts: [${Array.from(activeConcepts).slice(0, 8).join(', ')}${activeConcepts.size > 8 ? '...' : ''}]\x1b[0m\n`);
    }

    // Load database
    const dbPath = path.join(__dirname, '../patterns/database/tagged_findings.json');
    if (!fs.existsSync(dbPath)) {
        console.error('Database not found. Run: node scripts/extract_spec.py');
        process.exit(1);
    }

    const findings = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    // ─── Scoring function ────────────────────────────────────────────────────
    const scoredFindings = findings.map(f => {
        let score = 0;
        const finding = (f.finding || '').toLowerCase();
        const code = (f.code_snippet || '').toLowerCase();
        const title = (f.title || '').toLowerCase();
        const tags = (f.tags || []).map(t => t.toLowerCase());
        const allText = finding + ' ' + code + ' ' + title;

        // Exact concept tag match: strongest signal
        activeConcepts.forEach(concept => {
            if (tags.includes(concept)) score += 40;
            else if (tags.some(t => t.includes(concept) || concept.includes(t))) score += 10;
        });

        // Raw query words in tags (exact identifier match — very high signal)
        queryWords.forEach(word => {
            if (tags.includes(word)) score += 30;
            else if (tags.some(t => t.includes(word) || word.includes(t))) score += 12;
        });

        // Title matches: strong signal
        queryWords.forEach(word => {
            if (title.includes(word)) score += 20;
        });

        // Full-text match in finding prose
        queryWords.forEach(word => {
            if (finding.includes(word)) score += 8;
        });

        // Code snippet match: high value — this means the finding has concrete evidence
        queryWords.forEach(word => {
            if (code.includes(word)) score += 15;
        });

        // Concept text match in full text
        activeConcepts.forEach(concept => {
            if (allText.includes(concept.replace('-', ' '))) score += 5;
            if (allText.includes(concept.replace('-', ''))) score += 5;
        });

        // Bonus for having a code snippet (more technical = more useful)
        if (f.code_snippet && f.code_snippet.length > 50) score += 8;

        return { finding: f, score };
    }).filter(f => f.score >= 25);

    scoredFindings.sort((a, b) => b.score - a.score);
    const topResults = scoredFindings.slice(0, 10);

    if (jsonMode) {
        console.log(JSON.stringify(topResults.map(r => ({
            score: r.score,
            title: r.finding.title,
            source_file: r.finding.source_file,
            finding: r.finding.finding,
            code_snippet: r.finding.code_snippet,
            tags: r.finding.tags,
        })), null, 2));
        return;
    }

    if (topResults.length === 0) {
        console.log('\x1b[31m❌ No results found.\x1b[0m');
        console.log('\x1b[90mTry broader terms: e.g. "permission", "context", "agent", "tool"\x1b[0m');
        return;
    }

    console.log(`\x1b[36m\x1b[1m🎯 ${topResults.length} Architectural Findings:\x1b[0m\n`);

    topResults.forEach((result, i) => {
        const f = result.finding;
        const source = f.source_file ? ` \x1b[90m[${f.source_file}${f.h2_context ? ' → ' + f.h2_context : ''}]\x1b[0m` : '';

        console.log(`\x1b[1m${i + 1}. ${f.title || 'Untitled'}\x1b[0m\x1b[90m (score: ${result.score})\x1b[0m${source}`);
        console.log(`   \x1b[34mTags:\x1b[0m \x1b[90m${(f.tags || []).join(', ')}\x1b[0m`);

        // Print full finding, word-wrapped at 90 chars
        const detail = f.finding || '';
        const lines = detail.split('\n').slice(0, 20); // max 20 lines of prose
        lines.forEach(line => {
            if (line.length > 92) {
                // Word-wrap long lines
                const words = line.split(' ');
                let cur = '   ';
                words.forEach(word => {
                    if ((cur + word).length > 92) {
                        console.log(cur);
                        cur = '   ' + word + ' ';
                    } else {
                        cur += word + ' ';
                    }
                });
                if (cur.trim()) console.log(cur);
            } else {
                console.log(`   ${line}`);
            }
        });

        // Print code snippet if present
        if (f.code_snippet && f.code_snippet.length > 20) {
            const snippetLines = f.code_snippet.split('\n').slice(0, 25);
            console.log(`\n   \x1b[33m▶ Code Evidence:\x1b[0m`);
            snippetLines.forEach(line => console.log(`   \x1b[90m${line}\x1b[0m`));
            if (f.code_snippet.split('\n').length > 25) {
                console.log(`   \x1b[90m... (truncated)\x1b[0m`);
            }
        }

        console.log();
    });

    // Footer hint
    console.log(`\x1b[90m─────────────────────────────────────────────────────────────\x1b[0m`);
    console.log(`\x1b[90mTip: use --json flag to get machine-readable output.\x1b[0m`);
    console.log(`\x1b[90mSource: kuberwastaken/claude-code-src spec (${findings.length} findings)\x1b[0m\n`);
}

main();
