# Performance Insights

*Clean-room distillation of 214 insights regarding performance.*

---

### Auto-Dream Service Consolidates Memories
The 'autoDream' service automatically consolidates memory during idle times, suggesting a proactive approach to managing long-term memory that isn't explicitly mentioned in public documentation.

### Increased Heap Size for CCR Environment
The CLI sets `process.env.NODE_OPTIONS += '--max-old-space-size=8192'` to increase the heap size to 8192 MB in the CCR environment, which uses 16GB containers. This adjustment is not mentioned in public documentation and suggests a need for significant memory resources.

### LRU Cache Limits in MCP Server
The MCP server uses an LRU cache with a limit of 100 files or 25 MB, which is not publicly documented. This design decision could impact performance and resource usage.

### Internal Commands for 'ant' User Type
The `INTERNAL_ONLY_COMMANDS` array includes commands like `backfill-sessions`, `break-cache`, and `bughunter`, which are only available when `USER_TYPE === 'ant'`. This suggests a hidden user type that unlocks additional capabilities.

### Secret Reactive Compaction Path
The `REACTIVE_COMPACT` flag enables a hidden reactive compaction path for session memory. This path is not mentioned in public documentation, suggesting an experimental or internal-only feature.

### Rust Module Fallback in Highlighted Code
The HighlightedCode component relies on a native Rust module 'ColorFile' for syntax highlighting, with a fallback to 'HighlightedCodeFallback' if unavailable. This dual approach is not mentioned in public documentation, suggesting a performance optimization strategy.

### Reservoir Size Set to 1024
The 'RESERVOIR_SIZE' for histogram sampling is set to 1024. This specific choice reflects a design decision balancing memory usage and sampling accuracy, which is not publicly detailed.

### Surprising Memory Management Thresholds
The system uses specific memory thresholds: `HIGH_HEAP_MB = 1536` and `CRITICAL_HEAP_MB = 2560`. These thresholds determine when the application returns `null`, suggesting a cautious approach to memory management.

### Voice Mode Has a Secret Kill-Switch
The voice mode feature is controlled by a GrowthBook kill-switch, allowing it to be disabled mid-session without restarting. This is managed by the `isVoiceGrowthBookEnabled()` function, which is not memoized to ensure real-time updates.

### Screen Buffer Packs Cells into Two 32-bit Integers
Each cell in the screen buffer is encoded using two 32-bit integers, with specific bits allocated for `charId`, `styleId`, `hyperlinkId`, and `width`. This packing strategy optimizes memory usage but may complicate direct cell manipulation.

### Swappable Layout Backend via Factory Pattern
The layout engine uses a factory pattern to create layout nodes, allowing the backend to be swapped without altering the DOM layer. This design choice provides flexibility for future changes or optimizations in layout processing.

### Blit Optimization Condition
Claude optimizes rendering by blitting from `prevScreen` when a node's bounding box matches `nodeCache` and the node is not dirty. The condition for this optimization is: `!dirty && prevScreen && !hasRemovedChild && !layoutShifted`.

### Hidden DECSTBM Scroll Optimization
Claude employs a DECSTBM hardware scroll optimization that reduces O(viewport) cell writes to O(scrolled region) writes. This optimization is gated by the `scrollHint` and is not publicly documented.

### Memoization Utilities with Specific Limits
The memoization utilities include specific limits such as a default cache lifetime of 5 minutes and a maximum cache size of 100 for LRU-eviction. These limits reveal design decisions around performance and memory usage.

### WeakRef Usage in AbortController
The AbortController utilities use WeakRef to ensure memory safety by allowing garbage collection of unused child controllers. This approach highlights Anthropic's focus on efficient resource management.

### Git Operations Use LRU Memoization
The source code utilizes LRU memoization for root detection in git operations, which is not commonly documented. This approach optimizes performance by caching results of recent operations, reducing redundant calculations.

### Memory File Limit Set to 200
The memory scanning system caps the number of memory files at 'MAX_MEMORY_FILES = 200'. This limit ensures performance efficiency but could restrict the amount of historical data accessible in large projects.

### Scroll Optimization with DECSTBM Hint
The code uses a DECSTBM scroll optimization hint to emit hardware scroll commands when only the scroll position changes. This reduces the need to rewrite the entire viewport, improving performance.

### Memoization in ANSI Escape Code Parsing
The Ansi component uses memoization to prevent unnecessary re-renders when the parent component changes but the children string remains the same. This behavior is not commonly documented, providing a performance optimization that developers may not expect.

### Line Width Cache Limit: 4096 Entries
The line width cache is capped at 4096 entries, after which it clears entirely. This design decision balances memory usage against performance in handling large text streams.

### Shared Pools for Memory Efficiency
The codebase uses shared pools for character strings and hyperlinks across all screens to improve memory efficiency. Interned char IDs and hyperlink IDs are shared across screens, allowing for direct copying and comparison without re-interning or string lookup.

### FPS Metrics Context Caching Mechanism
The `FpsMetricsProvider` uses a caching mechanism to avoid unnecessary re-renders. It caches the `children` and `getFpsMetrics` props and only updates the context provider when these props change.

### Mailbox Context Memoization
The `MailboxProvider` uses memoization to ensure the `Mailbox` instance is only created once, using `Symbol.for('react.memo_cache_sentinel')` to check if it needs to initialize the mailbox.

### Memory Age Staleness Handling
The memory system uses a floor-rounded day count to determine memory age, clamping negative inputs to 0. It provides specific staleness caveats for memories older than one day to prevent outdated information from being asserted as fact.

### Team Memory Feature Flag
The 'TEAMMEM' feature flag controls access to team memory paths, indicating a gated feature for collaborative memory management. This feature is conditionally imported based on the flag's status.

### Memory File Size Limits
Memory files are capped at 200 lines and 25,000 bytes, with truncation warnings for exceeding these limits. This ensures concise memory entries and prevents excessive data from impacting performance.

### Auto-Memory Feature Override Mechanism
Auto-memory features can be overridden by several environment variables and settings, such as 'CLAUDE_CODE_DISABLE_AUTO_MEMORY', 'CLAUDE_CODE_SIMPLE', and 'CLAUDE_CODE_REMOTE_MEMORY_DIR'. This allows for granular control over memory functionalities, which is not explicitly detailed in public documentation.

### Memory File Scan Limits and Optimizations
The memory scanning function is optimized to handle up to 200 memory files, with a frontmatter line limit of 30 lines per file. This design decision balances performance and resource usage, ensuring efficient memory file processing.

### Read File Sync with Metadata Optimization
The readFileSyncWithMetadata function combines file reading with encoding and line ending detection in one pass, optimizing performance by avoiding multiple filesystem operations.

### Stdin Override for TTY in Non-TTY Environments
Claude uses a cached stdin override to enable interactive Ink rendering even when stdin is piped. This is achieved by opening '/dev/tty' as an alternative input source, but only if not running in CI or on Windows.

### Bun.which Optimization for Command Lookup
The code uses `Bun.which` for command lookup when running in Bun, which avoids process spawning and is faster than traditional methods. This optimization is not documented publicly.

### Memory Leak Avoidance in Combined Abort Signal
The `createCombinedAbortSignal` function avoids a memory leak in Bun by using `setTimeout` and `clearTimeout` instead of `AbortSignal.timeout`. The comment notes that Bun's `AbortSignal.timeout` accumulates ~2.4KB per call in native memory until the timeout fires.

### Process Output Error Handling for EPIPE
The code includes specific error handling for EPIPE errors to prevent memory leaks when a pipe is broken, such as when using `claude -p | head -1`.

### Session File Detection Logic
The code includes logic to detect session-related files under ~/.claude, categorizing them as 'session_memory' or 'session_transcript'.

### Internal Feature Gates for Beta Testing
The code uses internal feature gates like `checkStatsigFeatureGate_CACHED_MAY_BE_STALE` to control access to beta features, indicating controlled testing environments.

### Heap Dump Auto-Trigger at 1.5GB
The heap dump service automatically triggers a memory diagnostic when memory usage reaches 1.5GB. This is not mentioned in public documentation, which typically focuses on manual triggers.

### Path Sanitization Limit Set to 200 Characters
The maximum length for sanitized paths is set to 200 characters. This limit ensures compatibility and stability across upgrades, preventing orphaned cache data.

### Large Memory Files Warning Notice
A warning notice is triggered when memory files exceed a certain character count, impacting performance. The threshold is defined by `MAX_MEMORY_CHARACTER_COUNT`, and users are advised to edit these files to improve performance.

### Memoization of CLAUDE_CONFIG_DIR Environment Variable
The function getClaudeConfigHomeDir() is memoized to avoid capturing stale values of the CLAUDE_CONFIG_DIR environment variable. This ensures that the correct directory is used even if the environment variable is set after the module is loaded.

### Bun YAML Optimization
The YAML parsing logic uses Bun's built-in YAML parser when available, avoiding the heavier 'yaml' npm package. This optimization is not mentioned in public resources.

### Hidden Feature Flag for Team Memory Operations
The code includes a feature flag 'TEAMMEM' that conditionally imports team memory operations, suggesting a hidden or experimental feature related to team memory management.

### ANSI to PNG Optimization Skips SVG
The ANSI to PNG rendering process skips the SVG step entirely, using a 24x48 bitmap font to directly create PNGs. This reduces rendering time from ~224ms to ~5–15ms and eliminates external dependencies.

### AWS Credential Cache Refresh
The `clearAwsIniCache` function forces a refresh of the AWS credential provider cache, ensuring any changes in `~/.aws/credentials` are immediately picked up, which is crucial for environments with frequently changing credentials.

### Secret Feature Flags in Background Housekeeping
The background housekeeping module uses secret feature flags 'EXTRACT_MEMORIES' and 'LODESTONE'. These control the initialization of memory extraction and deep link protocol registration, respectively.

### Ripgrep Config Modes: System, Builtin, Embedded
Claude Code uses a memoized function `getRipgrepConfig` to determine the mode of ripgrep: 'system', 'builtin', or 'embedded'. The choice depends on environment variables and platform specifics.

### Max String Length Limit
The code sets a maximum string length limit of 2^25 (33,554,432) for in-memory string accumulation to prevent excessive memory usage.

### Unconditional Worktree Mode Activation
Worktree mode is now enabled for all users unconditionally, previously controlled by the 'tengu_worktree_mode' flag. This change was made due to issues with cache population causing the mode to be silently disabled.

### In-Memory Error Log Limit
The in-memory error log is limited to 100 entries, as defined by `MAX_IN_MEMORY_ERRORS`. This limit could impact error tracking if exceeded.

### Stats Cache Lock Mechanism
A simple in-memory lock (`statsCacheLockPromise`) is used to prevent concurrent operations on the stats cache, ensuring data integrity during updates.

### Team Memory Operations in Claude
Claude has specific functions to check if operations target team memory files, differentiating between search, write, and edit operations. This is not publicly documented.

### Fast Path File Size Limit in readFileInRange
The readFileInRange utility uses a 'fast path' for files smaller than 10 MB, reading them entirely into memory for efficiency. This approach is approximately twice as fast as streaming for typical source files.

### Memory Snapshots in Detailed Profiling
Detailed profiling captures memory snapshots at each checkpoint, stored in an array corresponding to performance marks, revealing memory usage patterns.

### File Read Cache Limits and Eviction
The FileReadCache class has a maximum cache size of 1000 entries. When exceeded, it evicts the oldest entry to make space for new data.

### Bun.semver Optimization for Version Comparison
The code uses Bun.semver for version comparison when available, which is approximately 20x faster than the npm semver package. It falls back to npm semver with loose parsing in Node.js environments.

### Git Root LRU Cache Implementation
The `findGitRootImpl` function uses an LRU cache with a maximum of 50 entries to memoize git root lookups. This caching strategy optimizes repeated directory tree walks to find the .git directory.

### Memoize Function Uses Background Refresh Strategy
The memoizeWithTTL function employs a write-through cache pattern where stale cache entries are returned immediately while being refreshed in the background. This is contrary to typical memoization strategies that might block until a fresh value is computed.

### Musl Runtime Detection Cache
The system uses a cache to detect MUSL libc environments on Linux. This cache is populated asynchronously at runtime, which is a fallback for unbundled Node.js environments. Native builds resolve this at compile time.

### Intl Segmenter Caching for Performance
Intl constructors are expensive, so Claude caches 'Intl.Segmenter' instances for grapheme and word segmentation to improve performance. This is a surprising optimization not commonly documented.

### Session Environment Script Caching
The session environment script is cached in a variable 'sessionEnvScript', which can be invalidated. This caching mechanism is not mentioned in public documentation, indicating a performance optimization strategy.

### Max Content Hash Size Limit
The maximum content size for hashing is set to 100KB to prevent memory exhaustion. This specific limit is not mentioned in public documentation, revealing a design decision for resource management.

### Image Cache Path Limit
The image store system has a hardcoded limit of 200 paths in its in-memory cache. This means only the 200 most recent image paths are stored, potentially affecting performance if more images are handled.

### Memoization in InvalidConfigDialog
The InvalidConfigDialog component uses a custom memoization strategy with an internal array to cache props and computed values. This approach is not documented publicly and may differ from typical React memoization patterns.

### Internal Debugging Feature: /heapdump
The MemoryUsageIndicator component includes an internal-only debugging feature '/heapdump'. This feature is gated by the build-time constant USER_TYPE, which prevents it from being set up in external builds, as the 10s polling interval is never initialized.

### React Memo Cache Sentinel in ContextSuggestions
The ContextSuggestions component uses a React memo cache sentinel to cache and reuse components efficiently. This internal optimization detail is not mentioned in the public documentation.

### Memo Cache Sentinel Usage in Components
Several components use a Symbol.for("react.memo_cache_sentinel") to manage memoization, which is not publicly documented. This suggests a custom approach to caching in React components.

### OffscreenFreeze's Unique Caching Mechanism
The `OffscreenFreeze` component uses a unique caching mechanism where it freezes children components when they scroll out of the terminal viewport. It caches the last visible render to prevent unnecessary re-renders, which is not a typical React behavior.

### IDE Status Indicator Uses Caching for Performance
The `IdeStatusIndicator` component uses a caching mechanism to avoid unnecessary re-renders. It caches the `ideSelection` properties and only updates the display when these properties change.

### Teleport Error Handling with Memoization
The 'TeleportError' component uses a memoization technique to prevent unnecessary re-renders by caching dependencies and effects with unique symbols.

### FastIcon Cooldown Behavior
The FastIcon component uses a memoization technique that caches the rendered component based on a cooldown prop. If cooldown is true, it returns a dimmed lightning bolt icon, otherwise a regular one.

### GrowthBook Cache Refresh Behavior
The useSkillsChange function clears memoization caches on GrowthBook refresh, which differs from the full cache clear on skill file changes. This selective clearing ensures commands relying on feature flags are updated without a full disk re-scan.

### Memory Limit for Claude Code Remote
In CCR environments, the max heap size for child processes is set to 8192 MB, which is half of the available 16GB in containers. This limit is not publicly documented.

### Fast Mode Enabled by Default
Fast mode is enabled by default unless explicitly disabled via the environment variable 'CLAUDE_CODE_DISABLE_FAST_MODE'. This suggests a preference for performance optimization in the system's default configuration.

### Time-Based Microcompact Configuration
The time-based microcompact feature triggers when the gap since the last assistant message exceeds 60 minutes, ensuring the server's cache TTL has expired. This prevents unnecessary cache misses.

### Hidden Cached Microcompact Feature
There is a feature flag 'CACHED_MICROCOMPACT' that gates a lazy-initialized cached microcompact module. This feature is not mentioned in public documentation and seems to be an internal optimization.

### Policy Limits Caching and Polling
The Policy Limits Service caches restrictions in a file named 'policy-limits.json' and uses a session-level cache. It polls for updates every hour and has a loading promise timeout of 30 seconds to prevent deadlocks. This aggressive caching and polling strategy is not detailed in public documentation.

### Session Memory Feature Gate
The session memory feature is controlled by a feature gate, which checks a cached value to determine if it is enabled. This gate is not mentioned in public-facing materials.

### LSP Diagnostic Deduplication with LRU Cache
Delivered diagnostics are tracked using an LRU Cache to prevent unbounded memory growth, with a maximum of 500 files tracked for deduplication. This ensures efficient memory usage during long sessions.

### 24-Hour Cache Expiration for Referral Eligibility
Referral eligibility data is cached for 24 hours, only refreshing on subscription or experiment changes. This suggests a balance between performance and up-to-date data.

### Overage Credit Grant Cache TTL
The cache for overage credit grant information is set to expire after 1 hour. This means that any cached grant information will be considered stale and will need to be refreshed after this period.

### API Request Caching for 'ant' Users
The system caches the last 5 API requests specifically for users with the 'ant' user type. This behavior is not publicly documented and suggests special handling for certain users.

### Grove Cache Expiration: 24 Hours
The Grove feature has a cache expiration set to 24 hours, which is not publicly documented. This affects how often users see updated Grove settings.

### Metrics Opt-Out Cache TTLs
The metrics opt-out feature uses a 1-hour in-memory cache and a 24-hour disk cache to minimize API calls. This means changes to metrics settings may take up to 24 hours to propagate.

### AutoDream Timeout and Thresholds
AutoDream uses specific thresholds: a minimum of 24 hours since the last consolidation and at least 5 sessions to trigger memory consolidation. These thresholds are not publicly documented.

### Team Memory Sync Debounce Timer
The team memory sync feature uses a debounce timer set to 2000 milliseconds. This means it waits 2 seconds after the last change before pushing updates to the server.

### Team Memory Sync Timeout Setting
The Team Memory Sync service has a timeout setting of 30,000 milliseconds (30 seconds). This is a specific design decision to handle sync operations within a set time frame.

### Tengu Feature Gate for Datadog Events
The code uses a feature gate named 'tengu_log_datadog_events' to control whether events are logged to Datadog. This gate can fall back to a cached value if not initialized.

### Claude API Lazy-Loading
The claudeApiContent.js file, which is 247KB, is lazy-loaded to conserve memory, only entering memory when /claude-api is invoked. This is a strategic choice for performance optimization.

### Debug Log Tail Read Size Limit
When reading debug logs, the system limits the read size to 64KB to avoid high memory usage, which is not publicly documented.

### Memory File Editor Environment Variable
The MemoryCommand component uses the $VISUAL or $EDITOR environment variable to determine which editor to open for editing memory files. If neither is set, it defaults to a system editor.

### Passes Eligibility Check Uses Cache
The 'passes' command checks eligibility using cached data, which may lead to outdated eligibility results if the cache is not refreshed properly.

### Internal Plugin Cache Clearing
The clearAllCaches function is used internally to clear plugin caches, which could affect plugin performance but is not publicly documented.

### 500ms Timeout for Changelog Fetch
The release notes command attempts to fetch the latest changelog with a 500ms timeout. If the fetch fails or times out, it defaults to using cached notes.

### Tengu Cache Eviction Hint
The code logs an event 'tengu_cache_eviction_hint' when clearing a conversation, suggesting an internal feature related to cache management named 'tengu'.

### Memory File Paths: User vs Project
The MemoryFileSelector distinguishes between user and project memory files, checking for 'CLAUDE.md' in both user config and project directories.

### Secret Feature Flag: Tengu Memory Survey
The feature flag 'tengu_dunwich_bell' controls the memory survey feature, which is not publicly documented. This survey is triggered with a 20% probability when certain conditions are met.

### Transcript Share Size Limit
The transcript sharing feature has a size limit, skipping files larger than MAX_TRANSCRIPT_READ_BYTES to prevent out-of-memory errors. This indicates a careful balance between functionality and system stability.

### React Memo Cache Sentinel Usage
The code uses Symbol.for('react.memo_cache_sentinel') to manage memoization in React components, ensuring certain computations are only performed once unless dependencies change.

### Internal Cache Mechanism with Symbol Sentinel
The code uses an internal cache mechanism with `Symbol.for("react.memo_cache_sentinel")` to optimize rendering by caching components. This is not documented publicly and suggests a performance optimization strategy.

### SkillsMenu Caching Mechanism
The SkillsMenu component uses a caching mechanism with a '_c' function to optimize rendering. It caches the 'commands' and 'skills' arrays to avoid unnecessary re-computation.

### Byline Component's Early Return Optimization
The Byline component uses a Symbol-based early return optimization to avoid unnecessary rendering. This is a unique approach to optimize React component rendering.

### Highlight Cache Limit Set to 500
The highlight cache used for syntax highlighting is capped at 500 entries. This limit is enforced to manage memory usage, and the cache uses a least-recently-used (LRU) strategy to evict old entries.

### Memoization in Wizard Steps
The wizard steps use a memoization pattern with a cache sentinel to optimize rendering. This pattern checks if certain dependencies have changed, and if not, reuses previously computed values. This is not documented publicly and could lead to unexpected behavior if developers are unaware of the memoization logic.

### Classifier Approval Cleanup on Mount
The code captures classifier approval on mount using 'getClassifierApproval' and 'getYoloClassifierApproval', then deletes it from a Map to prevent linear growth. This indicates a design choice to manage memory usage efficiently.

### Secret TeamMem Memory Type
The memory type 'TeamMem' is conditionally included based on a feature flag 'TEAMMEM', indicating a hidden team memory feature.

### Orphaned Plugin Cache Exclusion Patterns
Orphaned plugin versions are marked with a `.orphaned_at` file and kept for 7 days. The system uses ripgrep to generate exclusion patterns for these orphaned directories, preventing outdated code usage during this period.

### ZIP Cache Mode for Headless Plugin Installation
In headless mode, plugins can be stored as ZIPs on a mounted volume if CLAUDE_CODE_PLUGIN_USE_ZIP_CACHE is enabled. This allows for efficient storage and loading without UI updates.

### Plugin Install Counts Cache TTL
The plugin install counts cache is refreshed every 24 hours, as defined by the constant `CACHE_TTL_MS` set to 24 * 60 * 60 * 1000 milliseconds.

### Memoized Git Availability Check
The system uses a memoized check to determine if git is available, avoiding repeated checks within a session. This ensures efficiency and prevents unnecessary errors during plugin installations.

### Plugin Zip Cache Only Supports Headless Mode
The Plugin Zip Cache Module only supports headless mode, which is not mentioned in public documentation. This limitation could affect users expecting full functionality in all modes.

### Zip Cache Persistence Across Sessions
The zip cache for plugins is stored on a mounted volume that persists across ephemeral container lifetimes, allowing plugins to be reused without re-downloading.

### Marketplace Cache Directory Structure
The marketplace manager caches marketplace data locally under `~/.claude/plugins/marketplaces/`, organizing by source type (e.g., URL, GitHub).

### Flagged Plugins Module-Level Cache
The `pluginFlagging.ts` file uses a module-level cache to track plugins that were auto-removed because they were delisted. This cache is synchronized with disk writes, allowing synchronous calls during React rendering.

### MCPB Cache Metadata Hashing
The MCPB cache metadata uses an MD5 hash of the source string to generate metadata file paths, a detail not typically exposed in public documentation.

### Plugin Cache Directory Override
The plugin cache directory can be explicitly overridden using the 'CLAUDE_CODE_PLUGIN_CACHE_DIR' environment variable, a feature that could have significant implications for custom deployments.

### Plugin Cache Cleanup Strategy
Orphaned plugin versions are marked and cleaned up after 7 days. This cleanup process involves removing stale markers and deleting versions not in installed_plugins.json.

### Parse Timeout and Node Budget Limits
The parser has a 50ms wall-clock cap (PARSE_TIMEOUT_MS) and a node budget cap of 50,000 nodes (MAX_NODES) to prevent overloading on complex inputs. These limits are crucial for maintaining performance and preventing out-of-memory errors.

### DXT Manifest Validation Uses Lazy Import
The DXT manifest validation function uses lazy imports to avoid loading ~700KB of bound closures from zod v3, optimizing memory usage for sessions that don't use .dxt/.mcpb.

### Hidden Config: tengu_malort_pedway
The 'tengu_malort_pedway' configuration is used to dynamically control features like pixel validation and clipboard guard. This config is fetched with potential stale cache implications.

### Hidden Model Validation Cache
The `validateModel` function caches valid models in `validModelCache` to avoid repeated API calls. This cache is not publicly documented, potentially leading to unexpected behavior if models are updated but cache is not cleared.

### Internal Model Capabilities Caching System
Claude uses a memoized caching system for model capabilities, stored in 'model-capabilities.json'. This system is designed to optimize performance but is not documented publicly.

### Directory Scan Cache Limits
The directory scan uses an LRU cache with a maximum size of 500 entries and a TTL of 5 minutes. This could result in frequent cache evictions in environments with high directory access patterns.

### Shell History Cache TTL
The shell history cache has a TTL of 60 seconds, meaning it refreshes every minute. This could lead to stale data if commands are frequently updated.

### Cached Git Directory Resolution
Claude caches the resolution of the .git directory for repositories, optimizing performance by avoiding repeated filesystem checks. This cache is cleared only for testing purposes.

### Backend Detection Caching Strategy
Backend detection results are cached for the lifetime of the process, ensuring consistent backend selection without repeated checks. This includes caching for tmux and iTerm2 detection.

### Domain Check Cache Strategy
A separate cache for preflight domain checks is implemented with a 5-minute TTL, shorter than the URL cache. This cache only stores 'allowed' domains, requiring re-checks for blocked or failed domains.

### 20 MB Cap on File Reads for Data URIs
File reads are capped at 20 MB for image data URIs, exceeding the API's 5 MB base64 limit, to prevent out-of-memory errors.

### Memoized Styles for Text Wrap
The Text component uses a memoized object to store styles for different text wrap modes. This includes 'wrap', 'wrap-trim', 'truncate-end', and others, optimizing performance by reusing style objects.

### Persistent Memory System in Claude Code
The 'memdir/' directory contains a persistent memory system, including CLAUDE.md and user/project memory, which suggests a focus on retaining user context across sessions.

### Static Asset Caching Strategy
Static assets are cached with a max-age of 31536000 seconds (1 year) and marked as immutable, which can significantly reduce load times for returning users.

### Memoized Git Status Check
The getGitStatus function is memoized to avoid repeated execution, which optimizes performance by caching results. This behavior is not highlighted in public documentation.

### Hyperlink Cache Reset Every 5 Minutes
In the output module, hyperlinks are stored as strings and the hyperlink pool is reset every 5 minutes. This design choice implies that hyperlink caching is temporary and may affect performance or behavior in long-running sessions.

### DECSTBM Scroll Optimization Hint
The Frame type includes a 'scrollHint' property, which is a DECSTBM scroll optimization hint used only in alt-screen mode. This is not documented publicly.

### Yoga Performance Metrics in Frame Events
FrameEvent includes detailed performance metrics for yoga layout calculations, such as 'yogaVisited', 'yogaMeasured', and 'yogaCacheHits', which are not publicly documented.

### Single-Pass Text Measurement Optimization
The `measureText` function optimizes text measurement by computing width and height in a single pass, avoiding array allocation from split operations.

### Memory.md Truncation Limits
The MEMORY.md file is subject to truncation limits of 200 lines or 25,000 bytes, whichever is reached first. This ensures memory entries remain concise and manageable within Claude's context.

### Memory File Limits and Sorting Strategy
The `scanMemoryFiles` function limits memory files to 200 and sorts them by modification time in descending order. This approach reduces syscalls by reading files before sorting, which is not mentioned in public documentation.

### Auto-Memory Feature Priority Chain
The `isAutoMemoryEnabled` function uses a priority chain to determine if auto-memory features are enabled. This includes environment variables like `CLAUDE_CODE_DISABLE_AUTO_MEMORY` and `CLAUDE_CODE_SIMPLE`, and settings in `settings.json`. This priority chain is not publicly documented.

### Hidden Feature Flag: MEMORY_SHAPE_TELEMETRY
The source code contains a hidden feature flag 'MEMORY_SHAPE_TELEMETRY' used to track the selection rate of memory files. This telemetry is used to distinguish between scenarios where the memory selection ran but picked nothing versus when it never ran.

### Cached Stdin Override for TTY Detection
The getStdinOverride function caches a ReadStream for '/dev/tty' to allow interactive rendering even when stdin is piped. This is skipped in CI environments and on Windows, and is cached for the process lifetime.

### Prewarm Modifiers Module on macOS
The `prewarmModifiers` function preloads a native module on macOS to avoid delays on first use. This prewarming is skipped on non-Darwin platforms, highlighting a platform-specific optimization.

### Cached Feature Gate Checks
Feature gate checks in `messages.ts` use cached values that may be stale, potentially leading to outdated feature toggling.

### Sanitize Path Uses djb2Hash for Stability
The sanitizePath function uses djb2Hash to ensure cache directory names remain stable across upgrades, preventing orphaned cache data.

### Chunking Strategy in streamRenderedMessages
The streamRenderedMessages function uses a chunking strategy to reduce memory usage by 55% in large sessions. This involves rendering messages in chunks of 40, optimizing memory by sizing the layout tree to the tallest chunk.

### Large Memory Files Warning System
A warning system is in place to alert users when large memory files may impact performance. This is triggered when files exceed a character count threshold, specifically defined by 'MAX_MEMORY_CHARACTER_COUNT'. This internal threshold is not publicly documented, revealing an internal performance safeguard.

### Bun YAML Parsing Optimization
The YAML parsing logic uses Bun's built-in YAML parser when available, avoiding the need to load the larger 'yaml' npm package. This optimization is specific to environments running under Bun.

### djb2 Hash Function for Stability
Claude uses the djb2 hash function to produce a fast, non-cryptographic hash that returns a signed 32-bit integer. This function is deterministic across runtimes, unlike Bun.hash, ensuring consistent outputs for cache directory names.

### AWS Credential Cache Clearing
The function 'clearAwsIniCache' clears AWS credential provider cache by forcing a refresh, ensuring changes to credentials are picked up immediately.

### Feature Flag: EXTRACT_MEMORIES
The `EXTRACT_MEMORIES` feature flag controls the loading of a module related to memory extraction, indicating a potential feature for handling or processing memory data.

### Versioning in Stats Cache
The stats cache uses a versioning system, currently at version 3, to manage changes in the cache structure. This versioning is not mentioned in public documentation.

### Detailed Profiling Mode for Startup
A detailed profiling mode can be enabled via the 'CLAUDE_CODE_PROFILE_STARTUP' environment variable, allowing full reports with memory snapshots. This mode is not mentioned in public documentation.

### File Read Cache Size Limit
The in-memory file read cache has a maximum size of 1000 entries. When this limit is exceeded, the oldest entries are evicted to make room for new ones.

### Email Fetching Uses Memoization
The code uses memoization to cache email fetching results, which differs from typical synchronous fetching methods. This approach optimizes performance by avoiding redundant network requests.

### Memoize with TTL Refreshes Stale Entries
The `memoizeWithTTL` function uses a write-through cache pattern where stale cache entries are returned immediately and refreshed in parallel. This behavior is not typically documented in public memoization utilities.

### CLI Highlight Caching Strategy
The CLI highlight functionality uses a shared promise to cache the highlight.js import, ensuring no extra bytes are loaded on subsequent imports. This optimization is not mentioned in public documentation.

### Zod to JSON Schema Caching
The `zodToJsonSchema` function caches results using a `WeakMap` to optimize repeated conversions of the same schema within a session.

### Intl Object Caching for Performance
Intl constructors are cached to avoid the expense of creating new instances, which take ~0.05-0.1ms each. This caching strategy is not explicitly detailed in public resources.

### Stable Temp File Paths with Content Hash
Temporary file paths can be made stable across processes by using a content hash. This ensures that paths remain consistent, which is crucial for cache validity in the Anthropic API.

### Ant-only Memory Usage Indicator
The MemoryUsageIndicator component includes a feature that is only enabled for internal builds ('ant') and not for external builds. This feature involves a /heapdump link for debugging purposes and uses a 10-second polling interval to monitor memory usage.

### MCP Server Desktop Import Dialog Caching
The MCPServerDesktopImportDialog component uses a custom caching mechanism with a memo cache sentinel to optimize re-renders. This approach differs from typical React memoization and could lead to unexpected behavior if not properly managed.

### Timestamp Caching in MessageTimestamp Component
The MessageTimestamp component uses a caching mechanism to avoid recalculating the timestamp display. It caches the timestamp, formatted timestamp, and its width, only recalculating if the timestamp changes.

### Cached IDE Status Indicator Rendering
The IdeStatusIndicator component uses a caching mechanism to avoid unnecessary re-renders. It caches the line count and file path to optimize performance.

### Apple Terminal Modifier Prewarm
The code includes a specific prewarm function for Apple Terminal, indicating special handling or optimization for this environment. This suggests performance considerations specific to Apple's terminal application.

### Tengu Ant Model Override Feature
The code references a feature flag 'tengu_ant_model_override' used in model selection logic. This flag is read via a cached value that updates upon GrowthBook initialization.

### Command Cache Strategy in Skill Changes
The command cache is cleared completely on skill file changes, while only memoization caches are cleared on GrowthBook refresh. This dual strategy ensures commands remain up-to-date without unnecessary reloads.

### Max Heap Size in CCR Environments
In CCR environments, the max heap size for child processes is set to 8192 MB, reflecting a design decision to optimize for containers with 16GB of memory.

### Hidden Session Memory Thresholds and Timeouts
The session memory system has specific thresholds and timeouts not publicly documented. The `EXTRACTION_WAIT_TIMEOUT_MS` is set to 15000 ms (15 seconds) and `EXTRACTION_STALE_THRESHOLD_MS` to 60000 ms (1 minute). These values dictate how long the system waits for memory extraction before timing out or considering it stale.

### LSP Diagnostic Deduplication Cache
Claude uses an LRUCache to track up to 500 delivered diagnostic files for deduplication. This prevents memory growth but is not mentioned in public documentation.

### Referral Cache Expiration Time
The referral eligibility cache expires every 24 hours, which is not publicly documented. This means eligibility checks are only refreshed once a day unless there are subscription or experiment changes.

### Overage Credit Cache TTL
The overage credit grant cache has a TTL of 1 hour, after which it is considered stale and needs to be refreshed. This detail about cache expiration is not commonly known.

### Caching API Requests for 'ant' Users
The system caches the last 5 API requests specifically for 'ant' users, which could be a special user type or internal testing group.

### Consolidation Lock Stale Timeout
The consolidation lock for AutoDream becomes stale after 1 hour, even if the PID is still live. This timeout is a safeguard against PID reuse, ensuring that memory consolidation processes don't get stuck.

### Team Memory Sync Timeout
The team memory sync service has a hardcoded timeout of 30,000 milliseconds (30 seconds) for operations. This specific timeout value indicates a design decision balancing performance and reliability.

### Checksum Strategy in Team Memory
The team memory sync API uses SHA-256 checksums prefixed with 'sha256:' for both full responses and individual entry checksums. This ensures data integrity and efficient synchronization by only uploading changed entries.

### Structured Error Handling in Team Memory
The team memory sync service models a structured 413 error for too many entries, with specific error codes and details. This structured approach aids in precise error handling and user feedback.

### Tengu Event Sampling Config Flag
The code references a feature flag named 'tengu_event_sampling_config' used to control event sampling rates. This flag is fetched from GrowthBook and can cache stale values.

### Lazy Loading of Highlight.js in ColorDiff
The ColorDiff module defers loading highlight.js until first render, reducing initial load time and memory usage. This lazy loading strategy is not documented publicly.

### Lazy Loading for Claude API Documentation
The Claude API documentation is lazy-loaded only when the /claude-api command is invoked, which helps conserve memory. The bundled content is 247KB of markdown strings.

### Memory Command Uses $VISUAL and $EDITOR Variables
The MemoryCommand function determines which editor to use based on the $VISUAL or $EDITOR environment variables, defaulting to 'default' if neither is set. This behavior is not commonly documented.

### Automatic Cache Clearing on Plugin Install
The findPluginOptionsTarget function notes that cache clearing should occur automatically during plugin installation, ensuring that the freshest data is used post-installation.

### Release Notes Fetch Timeout
The release notes fetching mechanism has a hardcoded 500ms timeout. If fetching fails or times out, cached notes are used instead.

### Order of Diagnostics in Build Process
The buildDiagnostics function aggregates diagnostics from installation, health, and memory checks in a specific order. This order might affect how issues are prioritized and addressed during debugging.

### React Memoization with Custom Sentinel
The code uses a custom symbol `Symbol.for("react.memo_cache_sentinel")` for memoization checks, which is not a standard React practice. This suggests a unique approach to optimizing component rendering.

### Hidden Feature Flag: TEAMMEM
The code contains a hidden feature flag 'TEAMMEM' that conditionally imports 'teamMemCollapsed.js'. This suggests a feature related to team memory or collaboration that is not publicly documented.

### Bash Output Persistence Mechanism
The UserBashOutputMessage component uses a caching mechanism to persist bash output. It checks if the content has changed and only updates the output if necessary, using a cache array $ with specific indices for stdout and stderr.

### Memory File Selection: User vs Project
The MemoryFileSelector component distinguishes between user and project memory files, defaulting to a 'CLAUDE.md' file in the user's home directory or the current working directory. This behavior is not explicitly documented.

### Memory Path Display Logic
The MemoryUpdateNotification component uses a function to display memory paths relative to the home directory or current working directory, preferring the shorter path. This logic is not detailed in public documentation.

### Memory Survey Trigger Probability
The memory survey is triggered with a 20% probability, as indicated by the SURVEY_PROBABILITY constant set to 0.2. This probabilistic approach controls how often the survey is presented to users.

### Transcript Read Size Limit
The function 'submitTranscriptShare' imposes a size limit of 'MAX_TRANSCRIPT_READ_BYTES' on reading raw transcript files to prevent out-of-memory errors. This indicates a deliberate design choice to handle large data files cautiously.

### Survey Display Probability
The probability of showing a survey after session memory compaction is set to 20%. This probabilistic approach suggests a controlled rollout to gather feedback without overwhelming users.

### ShimmerChar Uses Caching for Performance
The ShimmerChar component uses a caching mechanism to avoid unnecessary re-renders. It caches the character and color combination using an array $[0], $[1], and $[2].

### TrustDialog Uses Internal Caching Mechanism
The TrustDialog component employs an internal caching mechanism using the Symbol.for('react.memo_cache_sentinel') to store and retrieve computed values across renders. This behavior is not documented publicly and indicates a custom optimization strategy.

### FeedColumn Caching Mechanism with _c
The FeedColumn component uses a caching mechanism with _c(10) to optimize rendering. It caches feed widths and actualWidth calculations to avoid unnecessary recalculations and renders.

### Tengu Emergency Tip Configuration
The 'EmergencyTip' component uses a configuration named 'tengu-top-of-feed-tip' to display emergency tips. This configuration is cached and may become stale, indicating a dynamic feature not mentioned in public documentation.

### Memory Scope Options Differ Based on Location
The available memory scope options in the `MemoryStep` differ based on whether the `wizardData.location` is 'userSettings'. This behavior is not publicly documented.

### TeamMem Feature Flag for Memory Types
The 'TeamMem' memory type is conditionally included based on the 'TEAMMEM' feature flag.

### Orphaned Plugin Cache Behavior
Orphaned plugin versions are marked with a `.orphaned_at` file and kept for 7 days to accommodate concurrent sessions. The exclusion list for these plugins is frozen for the session unless `/reload-plugins` is called.

### Installed Plugins Cache Management
The installed plugins cache is memoized and cleared only when the file is modified, preventing repeated filesystem reads within a single session. Background updates modify the disk file but do not update the in-memory snapshot.

### Layer-3 Refresh Primitive for Plugin Management
The Layer-3 refresh primitive in Claude Code swaps active plugin components in the running session. It is triggered by specific commands like /reload-plugins and is not called from useManagePlugins needsRefresh effect. This ensures that plugin caches are fully cleared and not just partially, which could lead to stale data.

### Plugin Install Counts Cache Mechanism
Claude Code caches plugin install counts from its official statistics repository, refreshing the cache if it's older than 24 hours. The cache is stored at ~/.claude/plugins/install-counts-cache.json, ensuring up-to-date usage statistics.

### Plugin Zip Cache Directory Structure
The plugin zip cache is structured with specific directories for known marketplaces and installed plugins, supporting only headless mode and certain marketplace sources. This structure is not publicly detailed.

### Zip Cache Uses Persistent Mounted Volume
The zip cache for plugins is stored on a mounted volume that persists across ephemeral container lifetimes, which is not typically disclosed in public documentation.

### MCPB Cache Directory and Metadata
The MCPB handler uses a cache directory '.mcpb-cache' within the plugin path to store metadata about cached MCPB files. Metadata includes 'source', 'contentHash', 'extractedPath', 'cachedAt', and 'lastChecked'.

### Plugin Cache Cleanup Timeout
The cleanup process for orphaned plugin versions is set to remove versions that have been orphaned for more than 7 days. This uses a specific timeout value of 7 days (7 * 24 * 60 * 60 * 1000 milliseconds).

### Haiku LLM for Command Prefix Extraction
The system uses a shared command prefix extraction mechanism powered by the Haiku LLM, which is memoized with an LRU cache bounded to 200 entries to prevent unbounded growth.

### 50,000 Node Budget Cap
The parser has a node budget cap of 50,000 to prevent out-of-memory errors on deeply nested inputs.

### Memoize with LRU for Command Specs
Command specifications are cached using an LRU (Least Recently Used) strategy to optimize performance when retrieving command details.

### Model Capability Cache Eligibility Check
The function isModelCapabilitiesEligible() restricts cache usage to 'ant' user types and 'firstParty' API providers, ensuring only certain users access cached capabilities.

### Directory Cache Size and TTL
The directory cache is configured with a maximum size of 500 entries and a TTL of 5 minutes. This configuration helps manage memory usage while ensuring recent directory scans are readily available.

### 300ms Debounce for Skill Reloads
The skill change detector uses a 300ms debounce to consolidate rapid skill change events into a single reload. This design decision helps prevent deadlocks by reducing the frequency of cache clearing operations.

### Session TTL and Cleanup Interval
The session TTL is set to 24 hours, and expired sessions are purged every 5 minutes. This ensures that sessions are not kept indefinitely, reducing memory usage.

### Hidden Auto-Dream Feature Flag
The 'autoDreamEnabled' setting is a hidden feature flag that enables background memory consolidation, which is not publicly documented. It is sourced from 'settings' rather than 'global', indicating a more experimental or user-specific feature.

### Newline Component Caches Repeated Strings
The Newline component caches the repeated newline string to avoid recalculating it on every render. It uses a cache array to store the count and the resulting string, optimizing performance for repeated renders.

### In-Memory Share Store for Development
The share store is an in-memory singleton intended for development, suggesting production use of a database like Redis or Postgres. This is not typically mentioned in public-facing documentation.

### In-Memory Index for Search Worker
The search worker maintains an in-memory index of conversation messages to ensure search queries do not block the main thread. This design choice prioritizes performance.

