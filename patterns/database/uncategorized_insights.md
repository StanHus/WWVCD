# Uncategorized Insights

*Clean-room distillation of 1610 insights regarding uncategorized.*

---

### Secret Feature Flags: Tengu_*
The Claude Code repository contains internal feature flags prefixed with 'tengu_', indicating undisclosed experimental features or capabilities. These flags are not mentioned in any public documentation, suggesting they are used for internal testing or development purposes.

### Tamagotchi-Style Buddy System
Claude Code includes a 'buddy' system described as Tamagotchi-style, which is not publicly documented. This feature likely provides a virtual companion or assistant that interacts with users in a playful or engaging manner, potentially enhancing user experience.

### Custom Ink TUI Framework
Instead of using standard terminal UI libraries, Claude Code employs a custom Ink framework for its terminal user interface. This choice suggests a unique approach to building interactive terminal applications, potentially offering more flexibility and control over UI components.

### Growthbook Manages Secret Feature Flags
Claude Code uses Growthbook for managing feature flags and A/B testing, indicating that there are likely hidden features being tested or rolled out selectively.

### Undocumented ABLATION_BASELINE Flag
The `ABLATION_BASELINE` flag is used to set multiple `CLAUDE_CODE_*` environment variables for a 'harness-science L0 ablation'. This suggests internal testing or performance benchmarking that is not publicly disclosed.

### Strict Migration Version Control
The main CLI entry point uses a constant `CURRENT_MIGRATION_VERSION = 11` to control configuration migrations. This strict version gating ensures that migrations are only run when necessary, but the specific version number and its implications are not publicly detailed.

### Secret Feature Flags Revealed
The source code reveals several internal feature flags such as `DIRECT_CONNECT`, `KAIROS`, `SSH_REMOTE`, and `LODESTONE` that are not documented publicly. These flags suggest hidden capabilities and experimental features within the system.

### Claude's MCP Server Codenamed 'tengu'
The MCP server entry point is codenamed `claude/tengu`, which is not publicly documented. This suggests a possible internal naming convention or project that is not disclosed to users.

### Surprising Migration Function Names
The migration functions include unexpected names like `migrateFennecToOpus()` and `migrateSonnet1mToSonnet45()`, indicating internal model renaming and migration processes that are not publicly explained.

### Secret MCP Server Codename: 'claude/tengu'
The MCP server is internally codenamed 'claude/tengu', a detail not disclosed in public documentation. This suggests a potential internal project or feature set associated with 'tengu'.

### Undocumented 'enabledPlatforms' Field in Sandbox
The SandboxSettingsSchema accepts an undocumented 'enabledPlatforms' field due to the use of '.passthrough()'. This field is not mentioned in public documentation, indicating potential platform-specific configurations.

### Adaptive Thinking Config: Opus 4.6+ Exclusive
The ThinkingAdaptiveSchema allows Claude to decide its thinking configuration, but it's exclusive to Opus 4.6 and later. This adaptive feature is not widely publicized, suggesting it may be in testing or limited release.

### Secret ClaudeAI Proxy Server Config
The MCP server configuration includes a secret type 'claudeai-proxy' with specific fields 'url' and 'id'. This suggests an internal proxy mechanism for ClaudeAI that is not publicly documented.

### Commands Load Lazily to Minimize Startup Cost
Commands in Claude Code are loaded via dynamic `import()` from their `load()` method, meaning the heavy module is only loaded when the command is first invoked. This reduces initial startup cost.

### Command Loading Priority Revealed
The priority order for command loading is `bundledSkills → builtinPluginSkills → skillDirCommands → workflowCommands → pluginCommands → pluginSkills → COMMANDS()`. This hierarchy determines which commands are loaded first.

### Bridge-Safe Commands Limited to 'local' Type
The `BRIDGE_SAFE_COMMANDS` set includes only `'local'` commands, such as `compact`, `clear`, and `cost`. This indicates that only certain commands can be safely executed over the Remote Control bridge.

### Remote-Safe Commands Defined
The `REMOTE_SAFE_COMMANDS` set includes commands like `session`, `exit`, and `help`, indicating these can be safely executed in remote mode. This set is crucial for understanding what operations are possible remotely.

### Secret Feature Flags Unlock Hidden Commands
The source code reveals several feature flags like 'KAIROS', 'BUDDY', and 'BRIDGE_MODE' that enable hidden commands such as '/brief', 'buddy', and '/remote-control'. These commands are not publicly documented and suggest additional capabilities that can be toggled internally.

### Internal Commands Disabled for External Use
Commands like '/ant-trace', '/autofix-pr', and '/backfill-sessions' are marked as stubs and disabled in all external builds. This indicates they are used internally for testing or development purposes, not meant for public use.

### Bridge Mode Requires Double Check
The 'BRIDGE_MODE' feature requires both the feature flag to be on and the 'isBridgeEnabled()' function to return true. This double-check mechanism ensures that the feature is not accidentally enabled.

### Internal-Only Git Commit Commands
Commands like '/commit' and '/commit-push-pr' are marked as internal-only, indicating they are not intended for public use and are gated by 'INTERNAL_ONLY_COMMANDS'.

### Chrome Settings Exclusive to Subscribers
The '/chrome' command for managing Claude in Chrome settings is available only to 'claude-ai' subscribers, ensuring exclusive access to premium features.

### ANT Users Always See Cost Breakdown
ANT users are always shown a detailed cost breakdown, even if they are subscribers. This behavior is hidden from regular Claude.ai subscribers, indicating a tiered access to cost transparency.

### Desktop Handoff Restricted by OS
The `/desktop` command is only enabled for macOS or Windows x64 systems, limiting the ability to continue sessions in Claude Desktop to specific operating systems.

### Effort Level Conflict Warning
If the `CLAUDE_CODE_EFFORT_LEVEL` environment variable conflicts with a user's requested effort level, the system issues a warning. This suggests internal prioritization of environment configurations over user settings.

### BG_SESSIONS Flag Alters Exit Behavior
When the `BG_SESSIONS` flag is active, the `/exit` command detaches the tmux client instead of terminating it. This behavior is not documented publicly, indicating a special handling for background sessions.

### Task IDs Have 2.8 Trillion Combinations
Task IDs are generated using a prefix and 8 crypto-random base-36 characters, allowing for approximately 2.8 trillion unique combinations. This ensures a very low probability of collision.

### Secret Feature Flags in Codebase
The codebase contains hidden feature flags such as 'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS' and '_simulatedSedEdit' that are not exposed in the model-facing schema. These flags control background task execution and simulate sed edits, respectively.

### NPM Auto-Updater Polls Every 30 Minutes
The AutoUpdater component checks for updates from GCS every 30 minutes. This frequent polling could have implications for network usage and update responsiveness, which is not typically disclosed in public documentation.

### Ink Framework Powers Terminal UI
Claude's UI components are built using the Ink framework, a terminal React renderer. This choice of framework suggests a focus on terminal-based interactions, which might not be apparent to users expecting a traditional GUI.

### Hidden Context Collapse Feature Flag
The `ContextVisualization.tsx` component contains a `CollapseStatus` sub-component that is only active when the `CONTEXT_COLLAPSE` feature flag is enabled. This indicates a hidden feature for managing context window usage.

### Desktop Handoff Flow with Auto-Download
The `DesktopHandoff.tsx` component manages a flow to open content in Claude Desktop. If the desktop app is not installed, it automatically downloads it. This seamless integration suggests a focus on user experience.

### Effort Level Feature is Gated
The 'EffortCallout' component is feature-gated, meaning it only renders when a non-default effort level, such as 'max thinking' mode, is active. This suggests that effort levels are a controlled feature not available to all users.

### Worktree Cleanup Dialog in Exit Flow
The 'ExitFlow' component includes a 'WorktreeExitDialog' that appears if the 'showWorktree' prop is true. This indicates a mechanism for managing temporary work environments, which is not commonly documented.

### Feedback Form Opens GitHub Issues
The 'Feedback' component submits user feedback by opening a GitHub issue, with a URL limit of 7250 characters. This direct integration with GitHub is not publicly advertised.

### Global Search Dialog Hidden Limits
The Global Search Dialog in Claude's codebase has a hidden limit of 'MAX_TOTAL_MATCHES = 500', which is not publicly documented. This means users may not see more than 500 search results, potentially missing relevant matches.

### Idle Return Dialog User Options
The IdleReturnDialog offers four distinct actions: 'continue', 'clear', 'dismiss', and 'never'. This level of granularity in user choice is not typically highlighted, suggesting a focus on user autonomy.

### Scroll Drain Debounce Mechanism
The scroll drain mechanism uses a debounce flag 'scrollDraining' set for 150ms. This is used to manage scroll activity efficiently by yielding during background intervals. This behavior is not commonly known and differs from typical scroll handling.

### Atomic Session Switching with Signals
The 'switchSession()' function atomically updates the session ID and project directory, emitting a 'sessionSwitched' signal. This atomic operation ensures consistency during session changes, a detail not highlighted in public documentation.

### Coordinator Mode Flips Mid-Session
The `matchSessionMode()` function can change the `CLAUDE_CODE_COORDINATOR_MODE` environment variable in-place during a session. This can lead to unexpected behavior if the mode is switched mid-session, triggering a user-visible warning and logging a `tengu_coordinator_mode_switched` event.

### Hidden Scratchpad Feature with Tengu Gate
The `getCoordinatorUserContext()` function reveals a hidden feature where a scratchpad directory is enabled only if the `tengu_scratch` GrowthBook gate is active. This feature is not publicly documented and is gated behind internal feature flags.

### Analytics Disabled Under Specific Conditions
Analytics in Claude Code are disabled when `NODE_ENV` is set to 'test', or if any of the environment variables `CLAUDE_CODE_USE_BEDROCK`, `CLAUDE_CODE_USE_VERTEX`, or `CLAUDE_CODE_USE_FOUNDRY` are truthy. This behavior is not documented publicly.

### Secret GrowthBook Overrides via Env Var
The `CLAUDE_INTERNAL_FC_OVERRIDES` environment variable allows internal feature configuration overrides using a JSON map. This feature is not documented publicly and provides a way to bypass standard feature gating mechanisms.

### GrowthBook Initialization Timeout Revealed
The GrowthBook initialization process has a hardcoded timeout of 5000ms. This specific timeout value is not publicly documented and could impact feature loading times under certain conditions.

### Virtual Scroll Uses Quantized Scrolling
The virtual scroll implementation quantizes scrollTop to `SCROLL_QUANTUM = 40` rows, meaning React re-renders only when the mounted range needs to shift. This reduces unnecessary re-renders and improves performance.

### Large Pastes Are Chunked to Avoid Blocking
Pastes larger than 1000 characters are split into multiple `onPaste` calls to prevent blocking the event loop. This ensures the application remains responsive even with large data inputs.

### Voice Stream Maps Locales to BCP-47 Codes
The voice recording feature maps user locales to BCP-47 language codes for Deepgram, supporting over 20 languages. This mapping ensures accurate transcription across diverse languages.

### Mandatory ThemeProvider Wrapping in Ink
Every `render()` and `createRoot()` call in the Ink Terminal system is automatically wrapped in a `ThemeProvider`. This ensures that `ThemedBox` and `ThemedText` components work seamlessly without requiring manual provider mounting by consumers.

### Ink Terminal's Frame Interval Constant
The Ink Terminal system uses a frame interval constant of 16 milliseconds, targeting approximately 60 frames per second. This is used by the throttled `scheduleRender` function to maintain smooth rendering performance.

### Console Patching in Ink Terminal
The Ink Terminal system patches `console.log`, `console.warn`, and `console.error` to write to a separate file descriptor instead of stdout. This prevents output mixing and ensures clean terminal rendering.

### Ink Virtual DOM for Terminal Rendering
The ink virtual DOM mirrors a minimal browser DOM API but is adapted specifically for terminal rendering. It includes unique node types like 'ink-root', 'ink-box', and 'ink-progress', which cater to terminal-specific features such as hyperlinks and progress indicators.

### Yoga Index Differs from DOM Index
In Claude's ink DOM, nodes like 'ink-virtual-text', 'ink-link', and 'ink-progress' lack yoga nodes. As a result, the 'insertBeforeNode' function computes the yoga insertion index separately from the DOM index, which can lead to unexpected layout behaviors.

### CLAUDE_CODE_DEBUG_REPAINTS Mode
The 'CLAUDE_CODE_DEBUG_REPAINTS' mode in Claude allows developers to trace React component stacks responsible for screen row updates. This mode uses the 'findOwnerChainAtRow' function to debug repaint issues.

### Event Handlers Stored Separately from Attributes
In Claude's ink DOM, event handler props are stored in 'node._eventHandlers' instead of 'node.attributes'. This separation prevents handler identity changes from marking the node dirty, optimizing rendering performance.

### Yoga Layout Always Uses Intrinsic Height
The `calculateLayout(width)` function in `YogaLayoutNode` always calls `this.yoga.calculateLayout(width, undefined, Direction.LTR)`, meaning the height is always set to undefined. This implies that the layout system relies on intrinsic height calculations, which may lead to unexpected layout behavior when height is not explicitly defined.

### Internal Scroll Drain Parameters Revealed
Claude uses specific thresholds for scroll operations: `SCROLL_MIN_PER_FRAME = 4`, `SCROLL_INSTANT_THRESHOLD = 5`, `SCROLL_HIGH_PENDING = 12`, `SCROLL_STEP_MED = 2`, and `SCROLL_STEP_HIGH = 3`. These values dictate how scrolling is handled internally, differing from any public documentation.

### Secret Feature Flag for REPL Bridge V2
The REPL Bridge V2 is gated by a secret GrowthBook flag named 'tengu_bridge_repl_v2'. This feature allows for an environment-less bridge setup, bypassing the Environments API layer entirely.

### 24-Hour Default Session Timeout
The default session timeout for a bridge session is set to 24 hours, as indicated by 'DEFAULT_SESSION_TIMEOUT_MS = 24 * 60 * 60 * 1000'. This long timeout suggests a design choice favoring persistent sessions.

### Two Distinct Bridge Worker Types
The system defines two worker types: 'claude_code' and 'claude_code_assistant'. These types likely dictate different operational modes or capabilities within the bridge system.

### Polling Behavior Differs from Documentation
The 'pollForWork' function logs empty polls every 1st time and then every 100th consecutive empty poll, which is not mentioned in public documentation. This behavior helps in monitoring the frequency of empty polls without overwhelming the logs.

### Surprising Backoff Config Defaults
The 'BackoffConfig' in 'bridgeMain.ts' sets a default connection cap of 120,000ms (2 minutes) and a general give-up time of 600,000ms (10 minutes). These generous defaults suggest a tolerance for long connection attempts, which might affect performance under certain conditions.

### Session Timeout Watchdog Mechanism
The system employs a 'timeout watchdog' that tracks sessions and terminates those that exceed a predefined duration. This is managed by the `timedOutSessions` set, which logs sessions killed by the watchdog.

### Env-Less Bridge Core Bypasses Environments API
The 'Env-Less Bridge Core' allows direct connections that bypass the Environments API entirely, using a series of POST requests to establish and maintain the session. This is a significant departure from the documented environment-based approach.

### Global REPL Bridge Handle
A global pointer, `replBridgeHandle`, manages the active REPL bridge handle, allowing centralized control over REPL sessions. This approach centralizes session management and provides a single point of access.

### Secret Close Codes for Epoch Handling
The internal system uses specific close codes like `4090` for epoch superseded and `4091` for CCR initialization failure, which are not publicly documented. These codes help manage epoch mismatches and initialization issues internally.

### SSETransport's Aggressive Reconnect Strategy
SSETransport employs an aggressive reconnect strategy with a `RECONNECT_BASE_DELAY_MS` of 1000ms and a `RECONNECT_MAX_DELAY_MS` of 30,000ms, allowing for quick recovery from disconnections. This approach ensures minimal downtime for server-sent events.

### Massive Batch and Queue Sizes in Event Uploader
The SerialBatchEventUploader allows for a `maxBatchSize` of 500 and a `maxQueueSize` of 100,000, indicating a design choice to handle large volumes of data efficiently. This setup supports high-throughput environments but requires careful management to avoid blocking.

### Surprising Default Timeout for Shell Commands
The default timeout for shell commands is set to an unexpectedly long duration of 30 minutes. This could lead to prolonged resource usage if not managed carefully.

### Sandboxed PowerShell Uses Unusual Shell Wrapping
When executing sandboxed PowerShell commands, Claude uses '/bin/sh' as an outer shell with a base64-encoded inner command. This unusual choice could affect compatibility and performance.

### Shell Selection Priority Revealed
The shell selection process prioritizes the 'CLAUDE_CODE_SHELL' environment variable, followed by the user's default shell, 'zsh', and finally 'bash'. This order is not publicly documented and could affect user experience.

### Unusual SIGKILL and SIGTERM Values
The source code uses specific numeric values for SIGKILL and SIGTERM: 137 and 143, respectively. These values are typically associated with exit codes rather than signal numbers, which are usually 9 and 15.

### Aggressive Size Watchdog Interval
The SIZE_WATCHDOG_INTERVAL_MS is set to 5,000ms, meaning background processes are checked and potentially killed every 5 seconds if they exceed disk limits. This aggressive interval could impact performance.

### StreamWrapper Only Supports Pipe Mode
The StreamWrapper utility is designed to only support pipe mode, connecting ChildProcess stdout/stderr to TaskOutput. This limitation might restrict flexibility in handling process outputs.

### Deprecated ExecSync Wrapper
The execSyncWithDefaults function is marked as deprecated, suggesting a shift away from synchronous shell execution in favor of asynchronous methods, possibly to improve performance and responsiveness.

### Hidden Worktree Mode Feature Flag
There is an internal feature flag `worktreeModeEnabled.ts` that checks for a 'worktree mode'. This suggests experimental or conditional functionality related to git worktrees that isn't publicly documented.

### Session Environment Variables Injection
Claude Code injects environment variables into the session context via `sessionEnvVars.ts`. This internal mechanism allows dynamic configuration of session environments, which is not publicly detailed.

### Model Selection Priority Hierarchy
The model selection process in Claude Code follows a specific priority: session override > --model flag > ANTHROPIC_MODEL environment variable > settings > default. This hierarchy dictates which model is used, providing flexibility but also potential for unexpected behavior.

### Buddy System Launches as April Fools Teaser
The Buddy system, a virtual companion feature, is gated behind the 'BUDDY' feature flag and was planned to launch as a teaser from April 1–7, 2026. This suggests it was intended as an April Fools' Day event.

### Species Encoding Bypasses Build-Time Canary Checks
Species names in the Buddy system are encoded using 'String.fromCharCode(...)' to avoid triggering build-time string scans for model codenames. This method circumvents internal checks that could flag certain strings.

### Mulberry32 PRNG Powers Deterministic Companion Generation
The Buddy system uses a 32-bit PRNG called 'mulberry32', seeded from a hash of 'userId + SALT', to deterministically generate companion attributes. This ensures consistent companion appearances without storing data.

### Rarity Weights Reveal Companion Rarity Distribution
The rarity of companions in the Buddy system is determined by specific weights: common (60%), uncommon (25%), rare (10%), epic (4%), and legendary (1%). This distribution influences how often users encounter rare companions.

### Complex Stat Rolling for Companion Attributes
The Buddy system uses a detailed algorithm to roll stats for companions, ensuring one peak stat, one dump stat, and others scattered. Stats are influenced by rarity, with a floor that scales from 5 to 50.

### Secret Feature Flag for Buddy System
The Buddy system is controlled by a hidden feature flag 'feature('BUDDY')', which gates all related functionality. This suggests the feature is not yet publicly available and is under controlled testing or development.

### Buddy Feature Teaser Dates Revealed
The Buddy feature teaser is only active between April 1–7, 2026, as determined by the 'isBuddyTeaserWindow()' function. This indicates a planned promotional period before the full release.

### KAIROS Mode Logs Daily Activities
In KAIROS mode, daily logs are stored in an append-only format under 'logs/YYYY/MM/YYYY-MM-DD.md'. This suggests a focus on detailed activity tracking and historical analysis.

### KAIROS Mode Daily Log Path Structure
In KAIROS mode, daily logs are stored in a structured path format: '<autoMemPath>/logs/YYYY/MM/YYYY-MM-DD.md'. This reveals a systematic approach to organizing logs by date, which is not publicly documented.

### KAIROS_BRIEF Feature Flag Unveiled
The 'KAIROS_BRIEF' feature flag is used to toggle the 'app:toggleBrief' action, suggesting a hidden or experimental feature related to concise information display.

### TERMINAL_PANEL Feature Flag Revealed
The 'TERMINAL_PANEL' feature flag enables the 'app:toggleTerminal' action, indicating a potential hidden feature for terminal integration within the application.

### Beta Headers Reveal Secret Features
The source code lists several beta headers that enable experimental features not publicly documented, such as 'interleaved-thinking-2025-05-14' for extended reasoning and 'afk-mode-2026-01-31' for autonomous mode. These headers suggest features under active development that are not yet available to the public.

### PDF Handling Differs from Public Docs
The API has a 32 MB total request limit, but only allows PDFs up to 20 MB raw size due to base64 encoding overhead. Additionally, PDFs over 3 MB are extracted to images, a behavior not typically disclosed.

### Internal-Only CLI Features
The 'CLI_INTERNAL_BETA_HEADER' is only enabled for users with 'USER_TYPE === 'ant'', indicating features exclusive to internal users. This suggests a separate set of functionalities reserved for Anthropic employees.

### Bedrock and Vertex Beta Limitations
Bedrock and Vertex platforms have specific limitations on beta headers, with Bedrock only supporting certain headers through 'extraBodyParams' and Vertex causing errors with unsupported betas. This indicates platform-specific constraints not widely known.

### Error ID Tracking with Obfuscated Numbers
Error IDs are obfuscated numeric identifiers used to track error sources in production. The next available ID is 346, indicating a structured approach to error management.

### Platform-Adaptive Status Indicators
The `BLACK_CIRCLE` status indicator adapts based on the platform, using `'⏺'` on macOS and `'●'` on others. This design choice ensures consistent user experience across different operating systems.

### Secret Model Names: Opus, Sonnet, Haiku
The internal model names 'Claude Opus 4.6', 'claude-sonnet-4-6', and 'claude-haiku-4-5-20251001' reveal a structured naming convention for different AI capabilities, which are not disclosed in public-facing materials.

### Surprising Context Window Limit
The Rust codebase defines a `ContextWindowExceeded` error, indicating a hard limit on the context window size. This suggests that the system has a maximum capacity for context, beyond which it cannot process additional input.

### Hidden Model Codenames in Codebase
The codebase reveals secret model codenames like `SONNET_MODEL` and `HAIKU_MODEL`, which are not publicly documented. These suggest internal variations or experimental models being tested.

### Streaming Always Enabled for Message Requests
The `CreateMessageRequest` struct has a `stream` field that is always set to `true` internally, indicating that all message requests are processed with streaming enabled, contrary to typical API flexibility.

### CLAUDE.md File Discovery Mechanism
The `build_user_context` function searches for `CLAUDE.md` files from the current working directory to the filesystem root, and also reads from `~/.claude/CLAUDE.md`, suggesting a comprehensive context-building approach.

### Surprising Timeout and Retry Limits
The `ClientConfig` sets a default timeout of 600 seconds and allows up to 5 retries with exponential backoff, capping delays at 60 seconds. This suggests a design choice prioritizing robustness over speed.

### Buddy/Tamagotchi System Unveiled
The 'Buddy/Tamagotchi' system is mentioned in the '11_special_systems.md' file, suggesting a gamified or interactive element within the Claude Code environment, which is not publicly documented.

### Gacha Mechanics in Buddy System
The Buddy system includes 'gacha mechanics' using PRNG, suggesting a random reward element similar to mobile games, which is not publicly disclosed.

### TENGU Feature Flag for Experimental Features
The source code reveals a hidden feature flag named 'TENGU' used to gate experimental features not available in public releases. This suggests that Anthropic tests new functionalities internally before wider deployment.

### History Items Limit Set to 100
The code sets a hard limit of 100 for stored history items, which may affect users who rely on extensive command history for workflow continuity.

### Pasted Content Length Capped at 1024
The maximum length for pasted content is restricted to 1024 characters, which could limit the ability to paste large blocks of text or code.

### Secret Command 'btw' Revealed
The command 'btw' is included in the list of commands but is not documented publicly. Its purpose and functionality remain unclear from the source code.

### Hidden Feature Flag 'feature'
A feature flag 'feature' is imported from 'bun:bundle', suggesting hidden or experimental features not publicly documented.

### Git Status Character Limit
The code imposes a character limit of 2000 on the git status output, truncating any excess characters. This limit is not mentioned in public documentation and could affect users relying on full git status outputs.

### REACTIVE_COMPACT Feature for Dynamic Context Management
The 'REACTIVE_COMPACT' feature flag conditionally imports a module for reactive context management, indicating a dynamic approach to handling context size.

### Cost Summary Printed on Process Exit
The useCostSummary function attaches a listener to print the total cost when the process exits, highlighting a focus on cost transparency.

### Session-Specific Cost Tracking
The code tracks costs on a per-session basis, using the session ID to determine if stored cost data should be returned. This behavior is not detailed in public documentation.

### Internal Graceful Shutdown Utility
The code includes internal utilities for graceful shutdowns, such as 'gracefulShutdown' and 'gracefulShutdownSync', which are not mentioned in public-facing materials.

### Project Onboarding Steps and Conditions
The onboarding process includes steps like creating a new app or cloning a repository, and running '/init' to create a CLAUDE.md file. These steps are conditionally enabled based on workspace status.

### Secret Feature Flag: 'anthropic-beta'
The 'anthropic-beta' header is set to 'ccr-byoc-2025-07-29' in the session history API requests, indicating a feature flag or beta feature not publicly documented.

### Timeout Value for Fetch Page
The fetchPage function in session history uses a timeout of 15000 milliseconds (15 seconds), which is not commonly disclosed in public documentation.

### History Page Size Limit
The HISTORY_PAGE_SIZE constant is set to 100, defining the number of events returned per page in session history, which could affect pagination strategies.

### CCR Upstream Proxy Fails Open
The CCR upstreamproxy module is designed to 'fail open', meaning any error in the proxy setup logs a warning and disables the proxy without breaking the session. This ensures a broken proxy setup does not disrupt an otherwise functional session.

### Max Chunk Bytes Limit in Relay
The CONNECT-over-WebSocket relay for CCR upstreamproxy has a maximum chunk size of 512KB, designed to accommodate Week-1 Datadog payloads without needing a relay rewrite.

### Focus Stack Limit in Ink UI
The Ink terminal UI's focus manager maintains a focus stack with a maximum size of 32 elements. This prevents unbounded growth from Tab cycling by deduplicating and shifting the stack.

### Hyperlink Propagation in 'ink-link' Nodes
The function 'squashTextNodesToSegments' propagates hyperlinks from 'ink-link' nodes to their child nodes, allowing for structured hyperlink styling. This behavior is not documented publicly.

### Hyperlink Pool Resets Every 5 Minutes
The hyperlink pool in the rendering engine resets every 5 minutes, which could affect hyperlink persistence across sessions.

### Scroll Delta Throttling at 1 Row/Frame
The renderer throttles scroll delta application to 1 row per frame, which can affect the smoothness of fast scrolling interactions.

### Custom Border Styles with Limited Characters
The source code defines a custom border style named 'dashed' using characters that are not typically used for dashes. The top and bottom borders use '╌', while the sides use '╎'. Corners are left empty due to a lack of suitable line-drawing characters.

### Bidirectional Text Reordering on Windows
The code implements bidirectional text reordering specifically for Windows environments, including Windows Terminal and VS Code's integrated terminal. This is due to the lack of native support for the Unicode Bidi Algorithm in these environments.

### Detecting Layout Shifts for Efficient Rendering
A flag named 'layoutShifted' is used to detect changes in node positions or sizes, which helps decide whether a full re-render is necessary. This optimizes rendering by limiting updates to only changed areas.

### Chalk Level Boosting for Xterm.js
The function `boostChalkLevelForXtermJs` increases the chalk color level to 3 when running in a VS Code terminal with chalk level 2. This is to ensure truecolor support, as chalk's `supports-color` does not recognize `TERM_PROGRAM=vscode`.

### Tmux Color Clamping to 256 Colors
The function `clampChalkLevelForTmux` reduces chalk's color level to 2 when running inside tmux unless `CLAUDE_CODE_TMUX_TRUECOLOR` is set. This ensures compatibility with tmux's default configuration, which doesn't pass truecolor sequences.

### Ink Render Options and Defaults
The `renderSync` function in `root.ts` sets default options for Ink rendering, such as `exitOnCtrlC` and `patchConsole`, which are both true by default. These defaults ensure proper handling of console output and process termination.

### Optimize Function Reduces Terminal Patches
The optimize function in src/ink/optimizer.ts applies several rules to reduce terminal patches, such as merging consecutive cursorMove patches and deduping hyperlinks. This behavior is not detailed in public documentation.

### Frame Interval Constant
The FRAME_INTERVAL_MS constant is set to a specific value, which dictates the refresh rate for rendering frames. This is a critical design decision affecting performance and responsiveness.

### Logging Every 20 Calls
The code logs performance metrics every 20 calls, which could indicate a focus on optimizing specific performance bottlenecks. This is not typically documented in public-facing materials.

### Terminal Queries Avoid Timeouts
The terminal querier uses a DA1 sentinel to avoid timeouts by ensuring responses arrive in order. If DA1 arrives before the expected response, the terminal does not support the query.

### Undocumented Hyperlink Terminal Support
The code includes additional terminals like 'ghostty' and 'Hyper' that support OSC 8 hyperlinks but aren't detected by the supports-hyperlinks library.

### Yoga Node Width Can Exceed Parent
The getMaxWidth function can return a width wider than the parent container due to Yoga's measurement passes. This behavior can cause text overflow, contrary to typical expectations of width constraints within a parent container.

### Hardcoded Default Tab Interval
The expandTabs function uses a hardcoded default tab interval of 8 columns, aligning with POSIX defaults and certain terminal behaviors. This choice is not configurable, which might surprise developers expecting customization options.

### Click Event Propagation in DOM Hit Testing
The dispatchClick function bubbles ClickEvents from the deepest node up through parentNode, only firing on nodes with an onClick handler. This behavior mimics DOM event propagation but is specific to the internal node structure.

### Internal Feature Flag: Tengu
The code references an internal feature flag named 'Tengu', which is not documented publicly. This flag might control specific experimental features or behaviors within the system.

### Frame Interval Set to 16ms
The FRAME_INTERVAL_MS constant is set to 16 milliseconds, aligning with a 60fps refresh rate for animations and render throttling. This specific choice impacts performance and smoothness of animations.

### Absolute Node Removed Flag Mechanism
A flag 'absoluteNodeRemoved' is used to signal when an absolute-positioned node is removed, affecting rendering. This prevents incorrect blitting of overlay elements.

### OSC 9;4 Progress Reporting Quirks
The function `isProgressReportingAvailable` explicitly excludes Windows Terminal for OSC 9;4 progress reporting, interpreting it as notifications instead. This is contrary to some expectations that all terminals supporting OSC sequences would handle them similarly.

### OSC Progress Support for Specific Terminals
The `useTerminalNotification` function supports progress reporting via OSC 9;4 sequences for specific terminals: ConEmu, Ghostty 1.2.0+, and iTerm2 3.6.6+. This feature is not widely documented.

### Truncate Text Strategy with Ellipsis
The `truncate` function in `wrap-text.ts` uses a specific strategy to truncate text with an ellipsis, supporting positions 'start', 'middle', and 'end'. This nuanced behavior is not typically detailed in public documentation.

### Cross-Platform Terminal Clearing
The `getClearTerminalSequence` function detects terminal capabilities to clear the screen and scrollback, with special handling for modern Windows terminals and legacy systems. This cross-platform support is more sophisticated than typical implementations.

### ANSI Codes for Styling: Inverse and Bold
The code defines specific ANSI codes for styling, such as INVERSE_CODE and BOLD_CODE. The inverse code uses SGR 7 and flags VISIBLE_ON_SPACE, while the bold code uses SGR 1 and cancels dim with endCode 22.

### Explicit Pinning to Sonnet 4.5 Model
Users previously set to 'sonnet[1m]' are explicitly pinned to 'sonnet-4-5-20250929[1m]' to preserve their model choice, as 'sonnet' now resolves to Sonnet 4.6.

### Auto-Updates Preference Migration
Auto-updates preferences are migrated to settings.json if explicitly disabled by the user, ensuring the DISABLE_AUTOUPDATER env var is set.

### Opus Pro Migration for First-Party Pro Users
Pro users on first-party API are auto-migrated to Opus 4.5 default unless they have a custom model setting, with migration tracked by 'opusProMigrationComplete'.

### Secret Fennec to Opus Migration
The migration script 'migrateFennecToOpus' automatically updates users from deprecated 'fennec' model aliases to new 'Opus 4.6' aliases. This migration is only triggered for users with 'ant' user type.

### MCP Server Config Migration
The 'migrateEnableAllProjectMcpServersToSettings' function moves MCP server approval fields from project config to local settings, ensuring better management and consistency.

### Background Task Indicator Logic
The 'isBackgroundTask' function determines if a task should be shown in the background tasks indicator based on its status and whether it is explicitly backgrounded.

### Task Stop Error Handling
The 'stopTask' function includes detailed error handling, throwing 'StopTaskError' with specific codes when a task cannot be stopped, such as 'not_found', 'not_running', or 'unsupported_type'.

### Hidden Tengu Scratchpad Feature Gate
The code contains a hidden feature gate named 'tengu_scratch' which is checked to enable a scratchpad feature. This feature gate is not publicly documented and is used internally to control access to certain functionality.

### Coordinator Mode Controlled by Environment Variable
The coordinator mode in the system is controlled by an environment variable 'CLAUDE_CODE_COORDINATOR_MODE'. This mode can be dynamically switched during a session, which is not typically documented in public-facing materials.

### Non-Modal Overlays Set
The `NON_MODAL_OVERLAYS` set includes overlays like 'autocomplete' that shouldn't disable TextInput focus. This indicates specific overlays are designed to maintain focus on input fields even when active.

### Padding Width Calculation in QueuedMessageProvider
The QueuedMessageProvider calculates padding width using a constant PADDING_X set to 2. This affects the layout by doubling the padding value when useBriefLayout is false.

### Default Notification Timeout Value
The default timeout for notifications is set to 8000 milliseconds. This value is used unless a specific timeout is provided for a notification.

### Reservoir Sampling Size in StatsStore
The reservoir size for sampling in the StatsStore is set to 1024. This size determines how many samples are kept for statistical calculations.

### Modal Context Affects Terminal Size Calculations
The `ModalContext` in `modalContext.tsx` alters the terminal size calculations by providing a smaller inner area for modals. This affects components that cap their visible content height, potentially causing them to overflow if they rely on `useTerminalSize().rows`.

### Chord Timeout Set to 1000ms
The chord sequence timeout is set to 1000 milliseconds. If a user does not complete the chord within this time, the sequence is canceled. This specific timeout duration could affect user experience, especially for those who may need more time to input sequences.

### Non-Rebindable Hardcoded Shortcuts
Certain shortcuts like 'ctrl+c', 'ctrl+d', and 'ctrl+m' are hardcoded and cannot be rebound due to their critical functions in Claude Code.

### Reserved Shortcuts with Time-Based Handling
Certain shortcuts like 'ctrl+c' and 'ctrl+d' have special time-based double-press handling and cannot be overridden by users. This is enforced through validation in 'reservedShortcuts.ts'.

### Built-in Plugin Registry with @builtin ID
Built-in plugins use the format '{name}@builtin' to distinguish from marketplace plugins. This internal naming convention is not documented publicly, revealing a structured approach to plugin management.

### Tengu Bridge Poll Intervals and Configurations
The `tengu_bridge_poll_interval_config` feature flag allows tuning of multisession bridge poll intervals independently from single-session defaults. This is not publicly documented, suggesting internal testing or phased rollout.

### Poll Interval Design Decisions in Bridge Config
The poll interval when at capacity is set to 600,000 ms (10 minutes), providing 24× headroom on Redis TTL and aligning with transport auto-reconnects. This design prioritizes liveness signals over recovery paths.

### BridgeRunner is a Placeholder for Future Options
The BridgeRunner is currently an empty message, acting as a placeholder for future bridge-specific options. This is indicated by the comment in the `createCodeSession` function where `bridge: {}` is used as a positive signal for the oneof runner.

### Session ID Retagging for Compatibility
Session IDs are re-tagged from `cse_*` to `session_*` and vice versa for compatibility between worker endpoints and client-facing endpoints. This retagging is controlled by the `isCseShimEnabled` gate, which defaults to active unless explicitly disabled.

### Bridge Pointer TTL Set to 4 Hours
The bridge pointer has a time-to-live (TTL) of 4 hours, as defined by BRIDGE_POINTER_TTL_MS. This TTL ensures that pointers remain fresh and can be used for crash recovery, matching the backend's rolling BRIDGE_LAST_POLL_TTL semantics.

### MAX_WORKTREE_FANOUT Limit Set to 50
The MAX_WORKTREE_FANOUT is capped at 50 to limit the parallel stat() burst and guard against pathological setups. This limit ensures that the system can handle a large number of worktrees without performance degradation.

### QR Code Generation for Bridge Connections
The Bridge UI component generates QR codes for connection URLs using specific options like 'utf8' type and 'L' error correction level. This is not publicly documented.

### Session Spawner Dependency Management
Session spawner dependencies include specific script arguments to prevent node runtime errors, indicating careful consideration of execution environments.

### Bridge Session Timeout Set to 24 Hours
The default timeout for a session in the Bridge system is set to 24 hours, as indicated by the constant `DEFAULT_SESSION_TIMEOUT_MS` being `24 * 60 * 60 * 1000`. This means that any session will automatically terminate after 24 hours unless explicitly extended.

### Bridge Fault Injection for Testing Recovery
The Bridge system includes a fault injection mechanism for testing recovery paths, accessible via the `/bridge-kick` command. This allows developers to simulate faults like 404 errors or network blips to test system resilience.

### Bridge Worker Type Filtering by Origin
The Bridge system uses `BridgeWorkerType` to filter sessions by origin, such as 'claude_code' or 'claude_code_assistant'. This allows the backend to tailor session experiences based on the worker type.

### Bridge Debug Handle for Fault Management
The Bridge system includes a `BridgeDebugHandle` for managing faults, allowing developers to inject faults, force reconnections, and manage debug sessions directly from the code.

### Tengu Bridge Timeout Telemetry
The code emits a 'tengu_bridge_repl_connect_timeout' telemetry event if neither onConnect nor onClose fires within 15,000 ms. This is the only telemetry for sessions that start but then go silent.

### Env-Less Bridge Configuration Defaults
The default configuration for the env-less bridge includes specific retry and timeout settings, such as 'init_retry_max_attempts: 3' and 'http_timeout_ms: 10,000'. These defaults suggest a focus on reliability and responsiveness.

### Teardown Archive Timeout Distinction
The 'teardown_archive_timeout_ms' is set to 1500 ms, distinct from the general 'http_timeout_ms'. This shorter timeout prevents slow archive requests from consuming the entire 2s graceful shutdown period.

### Env-Less Bridge Minimum Version
The env-less bridge path has a separate semver floor 'min_version: 0.0.0', allowing for version-specific upgrades without affecting env-based clients.

### Bridge Mode Entitlement Check with 'tengu_ccr_bridge'
The code includes a feature flag 'tengu_ccr_bridge' used to control access to the bridge mode, which requires a claude.ai subscription. This flag is checked both in a non-blocking and blocking manner to determine if the bridge mode should be enabled.

### Shimmer Animation Tick Interval
The shimmer animation in the bridge status updates every 150 milliseconds. This interval is crucial for the visual effect but is not publicly documented.

### Inbound Attachments Download Timeout
The download timeout for resolving inbound attachments is set to 30,000 milliseconds (30 seconds). This timeout is critical for handling file attachments but is not widely known.

### Bridge Backoff Configuration Details
The Bridge component uses a backoff configuration with specific timeouts: initial connection attempts start at 2 seconds and cap at 2 minutes, with a give-up threshold of 10 minutes. General operations start at 500 milliseconds, capping at 30 seconds, also giving up after 10 minutes.

### Multi-Session Spawn Mode Feature Gate
Bridge includes a feature gate for multi-session spawn modes, controlled by GrowthBook. This indicates a controlled rollout or testing phase for handling multiple simultaneous sessions.

### Session ID Comparison Logic
Bridge uses a unique method to compare session IDs by stripping tagged prefixes, ensuring compatibility across different system layers. This prevents rejection of valid sessions due to mismatched ID formats.

### Bridge Capacity Wake Mechanism
The bridge's capacity wake mechanism uses a shared primitive to manage poll loops, allowing early wake-ups when capacity frees up or shutdown signals occur. This prevents duplicated code in `replBridge.ts` and `bridgeMain.ts`.

### Image Block Normalization in Messages
The system normalizes image blocks from bridge clients that may use camelCase `mediaType` instead of snake_case `media_type`, preventing session failures due to malformed image data.

### Poll Config Thresholds and Defaults
Poll intervals have a minimum threshold of 100ms to prevent misconfigurations. Values below 100ms are rejected, and defaults are used to ensure consistent behavior across sessions.

### Future Beta Headers Revealed for 2025-2026
Several beta headers are defined for future features, including 'claude-code-20250219', 'interleaved-thinking-2025-05-14', and 'task-budgets-2026-03-13'. These headers indicate planned feature rollouts and testing phases.

### Local ISO Date Override for Testing
The function 'getLocalISODate' checks for an environment variable 'CLAUDE_CODE_OVERRIDE_DATE' to override the current date. This is likely used for testing and debugging purposes, allowing developers to simulate different dates.

### Bedrock's Limited Beta Header Support
Bedrock only supports a limited number of beta headers, which must be included in 'extraBodyParams' instead of headers. This restriction could impact how features are tested and rolled out on Bedrock.

### Ultraplan Mode XML Tags
The ULTRAPLAN_TAG is used for remote parallel planning sessions, a feature not widely publicized.

### Image Size Limits in Anthropic API
The Anthropic API enforces a maximum base64-encoded image size of 5 MB, which translates to a raw image size of 3.75 MB due to base64's 33% size increase. This constraint is crucial for developers working with image data.

### PDF Extraction Thresholds in API
PDFs larger than 3 MB are extracted into page images instead of being sent as base64 document blocks. This threshold is specific to the first-party API, while non-first-party always uses extraction.

### Tengu Attribution Header Feature Flag
The 'tengu_attribution_header' feature flag controls whether the attribution header is enabled for API requests. It defaults to true but can be disabled via an environment variable or a GrowthBook killswitch.

### Binary Content Detection Threshold
Claude Code checks the first 8192 bytes of a buffer to detect binary content, looking for null bytes or a high proportion of non-printable characters.

### Session Timeout and Limits
Server configurations for sessions include an idle timeout (`idleTimeoutMs`) which can be set to 0 to never expire, and a maximum number of concurrent sessions (`maxSessions`).

### DirectConnect Handles Unsupported Subtypes Differently
The DirectConnectSessionManager sends an error response for unrecognized control request subtypes to prevent server hangs. This behavior is not documented publicly.

### Buddy Feature Teaser Window Dates
The Buddy feature has a teaser window set for April 1-7, 2026. During this period, a teaser notification is shown to users who haven't hatched a companion yet.

### Companion Feature with Hidden Rarity Mechanics
The 'Companion' feature uses a hidden rarity system with specific weights and thresholds. The rarity affects attributes like 'hat' and 'shiny' status, with a 1% chance for a companion to be shiny. Rarity thresholds are defined, e.g., 'common' starts at 5, while 'legendary' starts at 50.

### Internal Slow Operations Logging Thresholds
The threshold for logging slow operations is set differently for development and internal users ('ants'). Dev builds log operations over 20ms, while 'ants' log those over 300ms. This is controlled by the CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS environment variable.

### Secret Plan Mode Interview Phase Activation
The 'Plan Mode Interview Phase' is always enabled for internal users ('ants') and can be toggled for others via the 'tengu_plan_mode_interview_phase' feature flag or environment variables.

### Feature Flag for 'templates' in Config Directories
The CLAUDE_CONFIG_DIRECTORIES array conditionally includes 'templates' based on the feature flag 'TEMPLATES'. This suggests a hidden feature related to template management that is not always enabled.

### Remote Keep-Alives Controlled by Environment Variable
The sending of keep-alives in session activity tracking is controlled by the environment variable 'CLAUDE_CODE_REMOTE_SEND_KEEPALIVES'. This allows remote control over session persistence, which could impact performance and resource usage.

### Session Activity Heartbeat Interval Set to 30 Seconds
The session activity tracking uses a heartbeat interval of 30,000 milliseconds (30 seconds) to keep sessions alive. This specific interval is crucial for maintaining active sessions without excessive resource use.

### Unicode Sanitization Iteration Limit
The Unicode sanitization function has a hardcoded iteration limit of 10 to prevent infinite loops, which could crash the system if exceeded. This limit is meant to handle deeply nested Unicode strings that could otherwise cause performance issues.

### Teleport Progress Steps in Claude
Claude's teleport utility tracks progress through specific steps: 'validating', 'fetching_logs', 'fetching_branch', 'checking_out', and 'done'. These steps indicate the stages of a teleport operation, which is not publicly documented.

### Advanced ANSI Slice Handling
Claude's ANSI slice function handles OSC 8 hyperlink sequences correctly, unlike the slice-ansi package. It uses display width instead of code units to avoid truncating slices with zero-width combining marks.

### Teammate Context Priority Resolution
The teammate context prioritizes AsyncLocalStorage over dynamic team context for identity resolution. This means in-process teammates have precedence over tmux teammates.

### UTF-8 BOM Stripping in JSON Parsing
The code includes a function to strip UTF-8 BOM from JSON content before parsing, which is necessary due to PowerShell's default behavior of writing BOMs.

### Bundled Mode Detection for Bun Runtime
The code includes a function `isInBundledMode` specifically designed to detect if the current runtime is a Bun-compiled standalone executable. This detection relies on checking for embedded files in the Bun runtime, which is not commonly documented.

### Scheduler Lock for Cron Tasks
The code implements a scheduler lock mechanism for cron tasks using a file `.claude/scheduled_tasks.lock`. This ensures only one Claude session drives the cron scheduler, with a fallback mechanism if the owner session dies.

### Semantic Number Coercion in JSON Inputs
The `semanticNumber` function allows coercion of numeric string literals to numbers, addressing issues with model-generated JSON inputs that quote numbers. This behavior is not visible in the API schema, which still indicates a number type.

### PDF Support Check Based on Model
The function `isPDFSupported` checks if PDF reading is supported based on the model name. It specifically excludes 'claude-3-haiku', indicating a model-specific feature gate.

### Extra Usage Billing Logic for Models
The function `isBilledAsExtraUsage` determines billing based on model type and mode. It bills extra for fast mode and specific models like 'opus' and 'sonnet', unless merged with 'opus1m'.

### Sidechain Sessions Excluded in ListSessions
The listSessions implementation excludes sessions marked as 'sidechain' by checking for '"isSidechain":true' in the first line of session data. This behavior is not documented publicly.

### File Encoding Defaults to UTF-8
The detectEncodingForResolvedPath function defaults to UTF-8 for empty files and non-empty files without a BOM, which could affect how files with special characters are read.

### Diagnostic Logging Without PII
The diagnostic logging function explicitly avoids logging any PII, including file paths and project names, which is a critical privacy feature not highlighted in public documentation.

### Diagnostics Timing Logs for Async Functions
The code wraps async functions with diagnostic timing logs, logging both start and completion events with duration. This feature is not publicly documented.

### Tengu Preflight Check Failure Logging
The code includes a feature flag 'tengu_preflight_check_failed' that logs events when preflight checks fail. This is not publicly documented.

### Deprecated Synchronous Exec Calls
The execSync_DEPRECATED function wraps node's execSync to log slow operations. It's marked deprecated, suggesting async alternatives should be used to avoid blocking the event loop.

### Cross-Project Resume for 'Ants' Only
The cross-project resume feature is gated to users with USER_TYPE set to 'ant', indicating a staged rollout or internal testing phase.

### Hidden Feature Flag: tengu_collage_kaleidoscope
The source code references a hidden feature flag 'tengu_collage_kaleidoscope', which acts as a kill switch for the native NSPasteboard reader. This feature is defaulted to 'on' but can be toggled off to fall back on osascript.

### Fallback for WSL Path Conversion
When converting paths between Windows and WSL, if the 'wslpath' command fails, the code falls back to a manual conversion method. This involves replacing backslashes with forward slashes and converting drive letters to '/mnt/'.

### Large Paste Threshold Set at 800 Characters
The code defines a threshold of 800 characters to consider text as a 'large paste'. This specific number could influence how text data is processed or displayed.

### Use of Deprecated execSync_DEPRECATED
The code uses a function named `execSync_DEPRECATED` for synchronous command execution, indicating reliance on deprecated methods internally.

### Changelog Fetching from GitHub Strategy
Claude Code fetches its changelog from GitHub instead of bundling it, due to static rendering limitations. This is not a publicly discussed strategy.

### Limit on Release Notes Displayed
The code limits the number of release notes shown to 5, a specific design decision not mentioned in public documentation.

### Ant-Only '/good-claude' Command
The '/good-claude' command is exclusive to 'ant' builds and is triggered when users respond 'Good' to feedback surveys. This command does not exist in external builds.

### Buffered Error Log Writers
Error logs are buffered with a flush interval of 1000ms and a max buffer size of 50, ensuring efficient disk writes and minimizing performance impact.

### API Image Size Limit Enforced on Base64
The API enforces a 5MB size limit on the base64-encoded string length of images, not the decoded raw bytes. This differs from typical expectations where limits apply to raw file size.

### File History Capped at 100 Snapshots
The file history feature is capped at 100 snapshots, after which older snapshots are evicted. This limit is used as an activity signal in useGitDiffStats.

### Git Diff Operations Timeout at 5000ms
Git diff operations are set to timeout after 5000 milliseconds, which might affect performance in large repositories.

### Max Git Diff Size Set to 1MB
Files larger than 1MB are skipped during git diff operations, which may lead to incomplete diff results in large projects.

### Surprising Editor Classification Logic
The code uses basename to classify GUI editors, ensuring that paths like /home/alice/code/bin/nvim don't mistakenly match 'code'. This logic is not documented publicly and could lead to unexpected behavior if users rely on directory names.

### Cron Task Auto-Expiry Mechanism
Recurring cron tasks auto-expire after a configurable limit unless marked as permanent. This is a system escape hatch for assistant mode's built-in tasks, which are exempt from expiry.

### TLS Cert Handling Before Trust Dialog
NODE_EXTRA_CA_CERTS is set early in the init process to ensure TLS connections can be established before the trust dialog. This is done by reading from user-controlled settings, not project-level settings, to prevent malicious injections.

### Preconnect to Anthropic API with 10s Timeout
The system preconnects to the Anthropic API using a HEAD request with a 10-second timeout to overlap the TCP+TLS handshake with startup tasks. This is skipped if certain environment variables are set, such as CLAUDE_CODE_USE_BEDROCK or HTTPS_PROXY.

### Semantic Boolean Coercion for Model Inputs
The `semanticBoolean` function allows string literals 'true'/'false' to be coerced into booleans, addressing model-generated JSON issues without altering the advertised input shape.

### Session URL Parsing with Random UUIDs
The `parseSessionIdentifier` function generates a random UUID for session URLs and JSONL file paths, ensuring unique session identification even for invalid URLs.

### Asciicast Recording Limited to 'ant' Users
The asciicast recording feature is only available to users with USER_TYPE set to 'ant'. This is controlled by the environment variable CLAUDE_CODE_TERMINAL_RECORDING, which must be truthy for the feature to activate.

### Undercover Mode Activation and Restrictions
Undercover mode is activated by setting CLAUDE_CODE_UNDERCOVER=1 or automatically if the repo is not on an internal allowlist. There is no force-off option, ensuring internal information is not leaked.

### Peer Address Parsing with 'bridge' Scheme
The parseAddress function can parse addresses with a 'bridge' scheme, which is a newer addition compared to legacy UDS paths. This indicates a shift towards more structured communication protocols.

### Stdin Timeout Peek Mechanism
The peekForStdinData function implements a timeout mechanism to differentiate between real pipe producers and idle stdin, resolving true on timeout and false on end.

### Worktree Slug Validation Limits
Worktree slugs are limited to 64 characters and must match a specific regex pattern. This is a surprising constraint not typically documented.

### Hidden Event: tengu_file_changed
The code logs an event 'tengu_file_changed' whenever lines are added or removed in a file. This event is not publicly documented.

### Diff Timeout Limit Set to 5000ms
The diff operation in the code has a timeout set to 5000 milliseconds, which is not mentioned in public documentation.

### Pure-TS ANSI to PNG Pipeline for Clipboard
The function `copyAnsiToClipboard` converts ANSI text to a PNG image using a pure TypeScript pipeline without WASM or system fonts. This ensures compatibility across all builds, both native and JS.

### Clipboard Command Timeout Values
The `copyPngToClipboard` function sets a timeout of 5000 milliseconds for clipboard operations on all platforms (macOS, Linux, Windows).

### Plan Slug Generation Retry Limit
The `getPlanSlug` function retries up to 10 times to generate a unique word slug for session plans, ensuring no file conflicts.

### Claude Desktop Deep Link in Dev Mode
In development mode, the deep link protocol switches from 'claude' to 'claude-dev'. This allows developers to test desktop integration without affecting production environments.

### Minimum Claude Desktop Version 1.1.2396
The minimum required version for Claude Desktop is 1.1.2396. This version check ensures compatibility and access to the latest features.

### Debug Filter Mixed Inclusive/Exclusive Handling
The `parseDebugFilter` function treats mixed inclusive/exclusive filters as an error case, returning null and showing all messages. This behavior is not documented publicly.

### Hidden 'tengu_timer' Debug Category
The function `extractDebugCategories` recognizes a hidden debug category 'tengu_timer' when the message includes '1P event:'. This category is not mentioned in public documentation.

### Strict UUID Validation Regex
The UUID validation uses a strict regex pattern to ensure the format is correct, which could lead to unexpected rejections if not properly formatted.

### Lazy Schema Construction
The `lazySchema` function defers Zod schema construction until first access, optimizing initial load times. This deferred execution is not typically highlighted.

### Internal Message Sources in Mailbox
The 'Mailbox' utility supports message sources like 'tick' and 'task', which are not typically exposed in user-facing interfaces. These suggest internal task scheduling or system events.

### Whimsical Slug Generator for Plan IDs
The slug generator uses a unique list of 'Claude-flavored' whimsical adjectives such as 'floofy', 'purrfect', and 'zazzy' for generating plan IDs, reflecting a playful approach.

### Proactive Mode and KAIROS Feature Flag
The source code reveals a feature flag 'KAIROS' used alongside 'PROACTIVE' to conditionally import a proactive module. This suggests an internal feature or mode not publicly documented.

### Claude Desktop Config Path for Windows
The code attempts to locate the Claude Desktop config file on Windows by checking multiple paths, including converting Windows paths to WSL format. This suggests a focus on cross-platform compatibility, especially for WSL users.

### Tmux Control Mode Probing Logic
The code uses a heuristic and a synchronous probe to determine tmux control mode, prioritizing environment variables for performance. This highlights a careful balance between speed and accuracy in terminal integration.

### SHOT_STATS Feature Flag for Ant-Only Stats
The 'SHOT_STATS' feature flag gates access to 'shot stats', which are exclusive to Anthropic's internal use ('ant-only'). This feature is not mentioned in public documentation.

### STDOUT Guard Marker for Non-JSON Lines
The system uses a sentinel '[stdout-guard]' to mark non-JSON lines diverted to stderr. This ensures that NDJSON streams remain uncorrupted by stray writes, which are tagged for visibility.

### Error Message Length Limit: 10,000 Characters
The formatError function truncates error messages longer than 10,000 characters, which could lead to loss of critical debugging information.

### Debug Log Level Controlled by Environment Variable
The minimum debug log level can be set using the CLAUDE_CODE_DEBUG_LOG_LEVEL environment variable, allowing for more granular control over logging verbosity.

### Session Environment Variables Limited Scope
Session-scoped environment variables are only applied to spawned child processes, not the REPL process itself, limiting their scope.

### Markdown Strikethrough Parsing Disabled
Strikethrough parsing is disabled in Markdown to prevent confusion with the '~' character, which is often used for approximation.

### XML Tag Stripping Rules
XML-like tags are stripped from UI titles unless they result in empty text, in which case the original text is retained.

### Normalized Message Upper Bound Calculation
The function normalizedUpperBound calculates the maximum number of NormalizedMessages a Message can produce. It returns the length of content blocks or 1 if the message is an attachment, indicating a design choice to limit normalization complexity.

### ExecSync Default Timeout Set to 10 Minutes
The execSyncWithDefaults_DEPRECATED function has a default timeout of 10 minutes (600,000 ms), which is unusually long for synchronous operations, potentially causing blocking issues.

### Repository Detection Limited to GitHub
The detectCurrentRepository function only returns results for GitHub repositories, explicitly excluding other hosts to avoid breaking downstream consumers. This suggests a strong dependency on GitHub-specific features.

### Tengu API Success Attribution
The `SideQueryOptions` type includes a `querySource` field that attributes calls in `tengu_api_success` for COGS joining against `reporting.sampling_calls`. This internal tracking mechanism is not publicly documented.

### Buffered Writer Flush Interval
The `createBufferedWriter` function has a default `flushIntervalMs` of 1000 milliseconds, indicating a design decision to flush buffered content every second unless specified otherwise.

### Tengu Feature Flag for Immediate Commands
The feature flag 'tengu_immediate_model_command' allows inference-config commands to execute immediately during a running query for external users, while it's always enabled for internal users ('ants').

### 1M Context Disable for HIPAA Compliance
The function 'is1mContextDisabled' checks an environment variable to disable the 1M context feature, specifically for HIPAA compliance by C4E admins.

### Privacy Levels Control Telemetry and Traffic
Privacy levels in Claude Code control the amount of nonessential network traffic and telemetry, with levels ranging from 'default' to 'essential-traffic', the latter disabling all nonessential traffic.

### Auto Mode Denials Limited to 20 Entries
The 'recordAutoModeDenial' function limits the number of auto mode denials tracked to 20 entries, which is not mentioned in public documentation.

### Shell Completion Setup for Specific Shells
The 'setupShellCompletion' function supports shell completion setup specifically for 'zsh', 'bash', and 'fish' shells, excluding others. This specificity is not widely known.

### Internal Model Repos Allowlist
A list of specific GitHub repositories is maintained where internal model names are allowed in commit trailers. This list includes private repos like 'github.com:anthropics/claude-cli-internal' and 'github.com/anthropics/anthropic', ensuring undercover mode remains active in public repos.

### Remote Session Attribution URLs
The function `getAttributionTexts` returns a session URL for commit and PR attribution when in remote mode, using `CLAUDE_CODE_REMOTE_SESSION_ID` and `SESSION_INGRESS_URL` environment variables. This is not documented publicly.

### Model Name Fallback to Avoid Codename Leaks
For external repositories, if a model name is unrecognized, the code falls back to 'Claude Opus 4.6' to prevent codename leaks. This is a hardcoded fallback.

### Max Output Size Limit for Files
The maximum output size for files is limited to 0.25MB, as defined by `MAX_OUTPUT_SIZE = 0.25 * 1024 * 1024`. This constraint is not publicly documented.

### Apple Terminal Backup and Restore Process
The system includes a backup and restore mechanism for Apple Terminal preferences, marking the setup as in progress and storing the backup path. This ensures recovery of terminal settings if needed.

### Shell Command Parsing Patterns
The system uses specific patterns to parse shell commands from text, supporting both code blocks and inline commands. This allows for flexible command execution embedded in text.

### ANSI Color Support in SVG Conversion
The system supports basic ANSI color codes, 256-color mode, and 24-bit true color when converting terminal text to SVG. This ensures accurate color representation.

### Secret Feature Flag: tengu_version_config
The code uses a secret feature flag named 'tengu_version_config' to enforce minimum version requirements. This flag is fetched from Statsig and used to terminate the process if the current version is too old.

### Conversation Text Limit: 1000 Characters
The function 'extractConversationText' limits the conversation text to the last 1000 characters. This ensures that recent context is prioritized in generating session titles.

### Custom CA Certificates Handling
The code handles CA certificates for TLS connections, allowing for custom configurations via environment variables like NODE_EXTRA_CA_CERTS and flags like --use-system-ca.

### Check for Local Claude Installation
The function isRunningFromLocalInstallation() checks if the Claude CLI is running from a managed local installation by inspecting the execution path for '/.claude/local/node_modules/'.

### Max Effort Support Limited to Opus 4.6
The function modelSupportsMaxEffort() reveals that 'max' effort is supported only by the Opus 4.6 model for public models, as per API documentation.

### Secret 'Ultrathink' Feature Flag
The code contains a secret feature flag 'ULTRATHINK' controlled by a GrowthBook flag 'tengu_turtle_carbon'. This feature is not publicly documented and appears to be a build-time and runtime gate for an advanced feature.

### Rainbow Shimmer Colors for UI
The code defines a set of 'RAINBOW_SHIMMER_COLORS' for UI elements, which are not publicly documented. This suggests a hidden UI feature that uses a shimmering rainbow effect.

### POSIX Locale Detection for Timestamps
The code includes a custom function to derive BCP 47 locale tags from POSIX environment variables for timestamp formatting, which is not commonly documented.

### Secret Editor Command Overrides
The code contains a hidden feature where specific editors have command overrides to add wait flags. For example, 'code' is overridden to 'code -w' and 'subl' to 'subl --wait'. This is not publicly documented.

### Limited Platform Support
The code only officially supports 'macos' and 'wsl' platforms, despite having logic for detecting 'windows' and 'linux'. This limitation is not clearly communicated in public documentation.

### GitHub API Timeout Hardcoded to 5000ms
The GitHub API timeout is hardcoded to 5000 milliseconds in the `fetchPrStatus` function. This may cause issues if network latency is high or the API response is slow.

### Layout Mode Switches at 70 Columns
The layout mode for the LogoV2 component switches from 'compact' to 'horizontal' when the terminal width reaches 70 columns, affecting how content is displayed.

### iTerm2 Backup and Recovery System
The system includes a backup and recovery mechanism for iTerm2 settings, which checks for in-progress setups and attempts to restore settings from a backup path if available.

### Glob Pattern Handling in Windows
The `extractGlobBaseDirectory` function adjusts base directories for Windows drive roots by appending a separator if the base directory is a drive letter, ensuring paths like 'C:/*.txt' are correctly interpreted as 'C:/'.

### Concurrency Cap in Async Generators
The `all` function allows running multiple async generators concurrently, with a default concurrency cap set to Infinity, meaning it will run all generators simultaneously unless specified otherwise.

### Lock Options with Retry Backoff
The lock options for the Teammate Mailbox system include a retry mechanism with backoff, allowing up to 10 retries with a minimum timeout of 5ms and a maximum of 100ms. This ensures concurrent callers wait for the lock instead of failing immediately.

### GitHub Repo Path Mapping in Global Config
The system updates GitHub repository path mappings in the global config at startup. It tracks known local paths for repos, promoting the most recently used clone to the front of the list.

### Installation Type Detection Logic
Claude's system includes logic to detect the current installation type, differentiating between 'npm-global', 'npm-local', 'native', 'package-manager', 'development', and 'unknown'. This helps in configuring the environment appropriately.

### Default Cleanup Period Set to 30 Days
The cleanup utility uses a default period of 30 days to determine when to remove old files. This is controlled by the constant DEFAULT_CLEANUP_PERIOD_DAYS and can be overridden by user settings.

### Stream Can Only Be Iterated Once
The Stream class in stream.ts is designed to be iterated only once. Attempting to iterate it multiple times will throw an error, as indicated by the started flag.

### Environment Variable Overrides for Bash Timeouts
The functions `getDefaultBashTimeoutMs` and `getMaxBashTimeoutMs` allow environment variables `BASH_DEFAULT_TIMEOUT_MS` and `BASH_MAX_TIMEOUT_MS` to override default timeout values of 2 and 10 minutes, respectively. This provides a hidden mechanism for dynamic timeout configuration.

### Terminal Theme Detection via OSC 11
The system theme detection for terminal applications uses the OSC 11 escape sequence to query the terminal's actual background color, rather than relying on the OS appearance setting. This approach ensures that a dark terminal on a light-mode OS is correctly resolved as 'dark'.

### Special Case Handling in Duration Formatting
The formatDuration function has a special case for durations less than one second, showing one decimal place. Additionally, it handles rounding carry-over, such as 59.5s rounding to 60s, which increments the minute count.

### PDF Size Limit Enforced at 20MB
The code enforces a PDF size limit of 20MB raw, which is not publicly documented. This is due to a 32MB total request limit after base64 encoding, which increases size by ~33%.

### SDK Event Queue Capped at 1000 Events
The SDK event queue is capped at 1000 events to prevent overflow, which is not documented. Events are only consumed in headless/streaming mode, not in TUI mode.

### Hidden Query Profiler Feature Flag
The query profiling utility can be enabled using the hidden environment variable 'CLAUDE_CODE_PROFILE_QUERY'. This is not documented publicly and allows detailed tracking of query processing stages.

### Hidden Team Panes in Team Discovery
The Team Discovery utility tracks hidden panes by using a 'hiddenPaneIds' set, which is not publicly documented. This affects how team statuses are displayed in the UI.

### Secret Shell Timeout Setting
The default timeout for shell commands is set to 30 minutes (30 * 60 * 1000 milliseconds), which is not publicly documented. This could affect long-running processes.

### Shell Override Environment Variable
The environment variable CLAUDE_CODE_SHELL allows overriding the default shell used, but only if it includes 'bash' or 'zsh'. This is not publicly documented.

### MAX_SCAN_BYTES Limit in File Scanning
The readEditContext function limits file scanning to 10MB using the MAX_SCAN_BYTES constant. This cap ensures performance but may truncate results if the needle isn't found within this range.

### Delayed Slow Operations in Housekeeping
Claude delays very slow operations by 10 minutes after start and rechecks user activity to avoid running them during active use. This ensures a smoother user experience.

### Tengu Worktree Detection Event
The function `getWorktreePaths` logs an event named 'tengu_worktree_detection' to track the detection of git worktrees, including duration and success status.

### Meta+J Terminal Panel with Tmux
Claude Code features a built-in terminal panel toggled with Meta+J, using tmux for shell persistence. Each instance has its own tmux session, isolated by a unique socket name.

### Tagged ID Versioning with Base58 Encoding
Tagged IDs are generated using a version prefix '01' followed by a base58 encoded UUID. This ensures compatibility with the API's tagged_id.py format.

### AbortController Max Listeners Limit
The default maximum number of listeners for an AbortController is set to 50, which is higher than typical defaults and could impact performance under heavy load.

### Idle Timeout Exit Delay Configuration
The idle timeout manager can automatically exit the process after a specified idle duration, configurable via the CLAUDE_CODE_EXIT_AFTER_STOP_DELAY environment variable.

### Teammate Modes for Spawning
Anthropic supports different teammate modes for spawning: 'tmux', 'in-process', and 'auto'. The 'auto' mode automatically chooses based on context.

### OSC 8 Hyperlink Uses Basic ANSI Color
The createHyperlink function uses basic ANSI blue color for hyperlink text, which is preserved across line breaks, but RGB colors are not preserved. This choice affects how hyperlinks appear in different terminal environments.

### Cron Expressions Use Local Timezone
The cron expression parser interprets times in the process's local timezone, which could lead to unexpected behavior if the server's timezone differs from the user's expectations.

### Proxy URL Preference in Environment Variables
The getProxyUrl function prefers lowercase environment variable names over uppercase ones for proxy configuration. This subtlety could lead to configuration issues if users are unaware.

### Sandbox Properties: External Check Hardcoded
The function 'buildSandboxProperties' checks if the string 'external' is equal to 'ant', which is hardcoded to always return false. This suggests a placeholder or incomplete feature implementation.

### Environment Variable Capping Logic
The function 'validateBoundedIntEnvVar' caps environment variable values to a specified upper limit, logging a message when this occurs. This capping mechanism is not widely documented, potentially affecting user configurations.

### Headless Profiler Sampling Rates
The headless profiler samples 100% of 'ant' users and only 5% of external users. This decision is made at module load time, ensuring non-sampled users incur no profiling cost.

### JetBrains Plugin Directory Detection
The code dynamically builds plugin directory paths for various JetBrains IDEs based on the operating system, supporting IDEs like PyCharm, IntelliJ, and AndroidStudio. This ensures compatibility across different environments.

### Cron Jitter Config Refresh Interval
The cron jitter configuration refreshes every 60 seconds to quickly adapt to incident-driven changes. This ensures the fleet converges rapidly when config changes are pushed.

### 3-Character Fingerprint Algorithm Details
The fingerprint for Claude Code attribution is computed using SHA256 with a specific algorithm: SHA256(SALT + msg[4] + msg[7] + msg[20] + version)[:3]. This precise method is not publicly documented.

### Claude's Isolated TMUX Socket
Claude creates an isolated tmux socket named 'claude-<PID>' to prevent accidental interference with the user's tmux sessions. This ensures any tmux command run through Claude operates on its isolated socket.

### TMUX Commands Routed Through WSL on Windows
On Windows, tmux commands are executed through WSL, allowing tmux sessions to launch Win32 processes while maintaining stdin/stdout flow through the WSL pty. This is a unique approach not commonly known.

### User Activity Timeout in ActivityManager
The `ActivityManager` class uses a 5-second timeout (`USER_ACTIVITY_TIMEOUT_MS = 5000`) to determine user activity periods. This affects how user engagement is tracked.

### Terminal Rendering Limits and Overflow Padding
The terminal rendering utility limits output to a maximum of 3 lines with a padding of 10 characters to prevent overflow. This is not documented publicly.

### Direct Message Bypassing Model
Claude allows direct messaging to team members that bypasses the model entirely, using a function to write directly to a mailbox. This feature is not publicly known.

### Telemetry Metrics Cardinality Defaults
Claude's telemetry system has default settings for metrics cardinality, including session ID and account UUID, but not app version. This configuration is not publicly detailed.

### PowerShell Timeout for Ancestor PIDs
The function getAncestorPidsAsync uses a PowerShell script with a timeout of 3000 milliseconds to fetch ancestor PIDs on Windows. This could lead to incomplete results if the script execution exceeds this time limit.

### Secret Codenames in Theme Colors
The theme configuration includes secretive color codenames like clawd_body, clawd_background, and professionalBlue, suggesting internal themes or features not publicly documented.

### Global Cleanup Registry for Shutdown
The cleanupRegistry.ts file maintains a global set of cleanup functions to be executed during a graceful shutdown, separate from other modules to avoid circular dependencies.

### Background Session Detection via Environment Variable
The function `isBgSession()` checks if a REPL is running inside a `claude --bg` tmux session by examining the environment variable `CLAUDE_CODE_SESSION_KIND`. This is a hidden feature not mentioned in public documentation.

### Session Kind Override via Feature Flag
The `envSessionKind()` function allows overriding session kind using the `BG_SESSIONS` feature flag, enabling session registration without parent process intervention. This is not publicly documented.

### Internal Warning Suppression Patterns
Certain internal warnings, like `MaxListenersExceededWarning`, are suppressed from users using regex patterns. This suppression strategy is not publicly disclosed.

### Cron Scheduler Check Interval
The cron scheduler in Claude checks for task execution every 1 second. This frequent polling ensures timely execution of scheduled tasks but may have implications for resource usage.

### Lock Probe Interval for Cron Scheduler
The cron scheduler re-probes the scheduler lock every 5 seconds. This interval is designed to handle session crashes by allowing non-owning sessions to take over.

### Truncate on Byte Limit Option
The readFileInRange utility has an option to truncate output at a specified byte limit without throwing an error. This is controlled by the truncateOnByteLimit flag.

### Internet Access Check via Cloudflare
Claude checks for internet access by sending a HEAD request to Cloudflare's 1.1.1.1 with a 1-second timeout. This method is used to determine connectivity.

### CCR_AUTO_CONNECT Feature Flag
The 'CCR_AUTO_CONNECT' feature flag conditionally imports 'bridgeEnabled.js', indicating a secret feature related to automatic connection management.

### Startup Profiling Modes and Sampling Rates
Startup profiling has two modes: 100% of 'ant' users and 0.1% of external users are logged to Statsig, with detailed profiling enabled by 'CLAUDE_CODE_PROFILE_STARTUP=1'.

### Mock Billing Access for Testing
The code includes a 'mockBillingAccessOverride' that allows developers to simulate billing access for testing purposes. This is set by the 'setMockBillingAccessOverride' function and affects the '/mock-limits' testing.

### Ink Static Component Workaround
The code uses a workaround for Ink's limitation of not supporting multiple <Static> components in the same render tree. It renders the component to a string and prints it to stdout instead.

### Team Name for Task Resolution
The leader's team name is used for task list resolution, ensuring tasks are stored under the team name rather than the session ID.

### Collapse Background Bash Notifications
The `collapseBackgroundBashNotifications` function collapses consecutive completed background bash task notifications into a single synthetic notification. This behavior is only active in fullscreen environments and not in verbose mode. It specifically targets successful completions, leaving failed or killed tasks visible.

### Slash Commands Processed Individually
The `processQueueIfReady` function processes slash commands and bash-mode commands individually to ensure error isolation and progress UI. Non-slash commands are batched by mode, but different modes are never mixed.

### AsyncLocalStorage for Context Isolation
The `runWithWorkload` function uses AsyncLocalStorage to ensure context isolation across asynchronous operations, preventing context leakage between turns.

### Sanitizer Restricts Uppercase in Workload Tags
The server-side sanitizer `_sanitize_entrypoint` only accepts lowercase workload tags, stopping parsing at the first uppercase character.

### Width-Aware Path Truncation
The 'truncatePathMiddle' function uses width-aware truncation to preserve both directory context and filename, specifically accounting for CJK/emoji characters.

### Eager CLI Flag Parsing
The 'eagerParseCliFlag' function allows early parsing of CLI flags before the main initialization, supporting both '--flag=value' and '--flag value' syntaxes.

### Handling Double Dash in CLI Args
The 'extractArgsAfterDoubleDash' function corrects CLI argument parsing by handling the '--' separator, ensuring correct command extraction.

### Exec File Default Timeout Value
The default timeout for executing files is set to 10 minutes (600,000 milliseconds). This generous timeout indicates a design choice to accommodate potentially long-running processes.

### Secret Pricing Tiers for Claude Models
The source code reveals several secret pricing tiers for Claude models, such as COST_TIER_30_150 for Opus 4.6 in fast mode, which is $30 input / $150 output per Mtok. These tiers are not publicly documented.

### Fast Mode Pricing for Opus 4.6
The Opus 4.6 model has a special fast mode pricing tier, COST_TIER_30_150, which significantly increases costs to $30 input / $150 output per Mtok when fast mode is enabled.

### CLI Highlight Caching Mechanism
The code uses a shared promise for CLI highlighting to ensure efficient loading and caching of highlight.js, avoiding redundant imports and reducing load times.

### Heatmap Width Calculation Constraints
The heatmap generation function caps the number of weeks displayed to 52, aligning with GitHub's style. This decision ensures that the heatmap does not exceed one year of data, balancing detail with readability.

### Logging for Unknown Platforms
When an unknown platform is detected, the system logs a debug message and defaults to standard paths. This indicates a cautious approach to platform compatibility.

### Portable Worktree Detection Without Execa
The 'getWorktreePathsPortable' function uses 'child_process' instead of 'execa' for worktree detection, avoiding a dependency chain. It has a 5000ms timeout for the 'git worktree list --porcelain' command.

### Tengu File Operation Analytics
The code logs file operation analytics under the event name 'tengu_file_operation'. This suggests an internal codename 'Tengu' for tracking file operations, which is not publicly documented.

### CLAUDE_ENV_FILE Support
The system checks for a 'CLAUDE_ENV_FILE' environment variable to load session scripts. This feature allows environment persistence across shell commands, which is not publicly documented.

### Centralized CLI Exit Helper
The CLI exit helpers consolidate repeated 'print + lint-suppress + exit' blocks across various handlers. This centralized approach uses 'return undefined as never' to allow TypeScript to narrow control flow, which is not a common practice.

### NDJSON Safe Stringify Implementation
The 'ndjsonSafeStringify' function escapes U+2028 and U+2029 characters to prevent JSON lines from being split incorrectly by JavaScript line-terminator semantics. This ensures that JSON output remains intact across different receivers.

### Tengu Update Check Event
The update function logs an event 'tengu_update_check' when checking for updates. This suggests an internal codename 'tengu' used for update-related features.

### RemoteIO WebSocket Transport Support
The RemoteIO class supports bidirectional streaming with WebSocket transport, which is not explicitly mentioned in public documentation.

### Secret Event: 'tengu_transcript_view_enter'
The function 'enterTeammateView' logs an event 'tengu_transcript_view_enter', which is not publicly documented. This suggests a hidden feature related to viewing teammate transcripts.

### PANEL_GRACE_MS Timeout Set to 30,000ms
The constant 'PANEL_GRACE_MS' is set to 30,000 milliseconds (30 seconds), which determines the grace period for panel operations. This specific timeout value is not publicly documented.

### Internal Mode Names Filtered from CCR
Internal-only mode names like 'bubble' and 'ungated auto' are filtered out before notifying CCR, ensuring only externalized modes are communicated. This filtering is not publicly disclosed.

### Hidden VOICE_MODE Feature Flag
The code contains a hidden feature flag 'VOICE_MODE' that conditionally imports a VoiceProvider component. This feature is only available internally ('ant-only') and is bypassed in external builds.

### Bash Output Limits Defined
The code defines specific limits for bash output: `BASH_MAX_OUTPUT_DEFAULT` and `BASH_MAX_OUTPUT_UPPER_LIMIT`. These values are used to control the output size of bash commands, which is not commonly detailed in public documentation.

### Cross-Project Resume Check
The `checkCrossProjectResume` function indicates an internal feature for resuming sessions across different projects, which is not publicly documented. This could imply advanced session continuity capabilities.

### Custom Title Feature Flag
The `isCustomTitleEnabled` flag suggests a feature for enabling custom titles in sessions, which is not mentioned in public-facing documentation.

### Modal Transcript Peek Design Choice
The code specifies that 2 rows of transcript context are kept visible above the modal pane's divider, a design choice not mentioned in public documentation.

### Fullscreen Environment Check
The code uses 'isFullscreenEnvEnabled' to conditionally render components, suggesting hidden behavior based on environment settings.

### Hidden Feature Flag: tengu_mcp_multidialog_choice
The code logs an event with the feature flag 'tengu_mcp_multidialog_choice' when users select servers in the MCPServerMultiselectDialog component. This flag is not publicly documented.

### Quick Open Dialog Timeout and Limits
The Quick Open Dialog component has a visible results limit of 8, with a minimum of 4 results displayed if the terminal size allows. The preview lines are set to 20, but adjust based on terminal width.

### TagTabs Width Calculation Details
TagTabs component uses specific constants and calculations to manage tab width, like MAX_OVERFLOW_DIGITS = 2 and LEFT_ARROW_WIDTH = LEFT_ARROW_PREFIX.length + MAX_OVERFLOW_DIGITS + 1. These precise values ensure UI consistency but are not publicly documented.

### Hidden Flag: --dangerously-load-development-channels
The code contains a warning message for a hidden flag `--dangerously-load-development-channels`, intended for local development only. It advises against using this option for channels downloaded from the internet.

### Sandbox Violation Display Limit
The `SandboxViolationExpandedView` component limits the display of sandbox violations to the last 10 entries. This is controlled by slicing the violations array.

### Auto-Updater Interval Set to 30 Minutes
The auto-updater for the PackageManager checks for updates every 30 minutes, as indicated by the useInterval function call with a 1800000 ms delay.

### Deprecated Write File Function Used
The ExportDialog component uses a deprecated function, writeFileSync_DEPRECATED, to write files, which might indicate legacy code that could lead to future issues.

### Max Version Cap in Auto-Updater
The auto-updater has a maxVersion cap that prevents updates beyond a certain version, which is not publicly documented. This is used to cap updates if the latest version exceeds the maxVersion.

### Specific Audio Level Thresholds in TextInput
The TextInput component uses a SILENCE_THRESHOLD of 0.15 and a LEVEL_BOOST of 1.8 for audio levels, indicating specific design choices for handling ambient noise and boosting speech detection.

### Hidden Event: tengu_mcp_dialog_choice
The code logs an event 'tengu_mcp_dialog_choice' when a user interacts with the MCPServerApprovalDialog. This event is not publicly documented and suggests internal tracking of user choices regarding MCP server usage.

### MCP Server Approval Dialog Options
The MCPServerApprovalDialog presents options to use all future MCP servers in a project or just the current one, which could affect project-wide settings inadvertently.

### Hidden Status Notices Feature
The `StatusNotices` component reveals a hidden feature where neutral or positive status messages have been moved to a separate component, `Status.tsx`, accessible via `/status`. This behavior is not documented publicly.

### ANT-ONLY Flag in InterruptedByUser Component
The `InterruptedByUser` component contains a conditional rendering block that includes an `[ANT-ONLY]` flag, suggesting internal-only features or messages intended for Anthropic staff.

### Silent Worktree Cleanup on No Changes
The WorktreeExitDialog silently cleans up the worktree if there are no changes or commits. This behavior is not documented publicly.

### Fullscreen Environment Gutter Width Calculation
In fullscreen environments, the gutter width for line numbers is calculated as 't6 = t7.length + 2', where 't7' is the string length of the line count. This behavior is not documented.

### Goodbye Messages Array in ExitFlow
The 'ExitFlow' component uses a predefined array of goodbye messages, 'GOODBYE_MESSAGES', which includes 'Goodbye!', 'See ya!', 'Bye!', and 'Catch you later!'. This array is used to randomly select a goodbye message.

### Thinking Toggle Feature in Claude
The ThinkingToggle component allows toggling a feature where 'Claude will think before responding'. This is controlled by options with values 'true' and 'false', labeled as 'Enabled' and 'Disabled'.

### Tengu Teleport Feature Flags
The TeleportResumeWrapper component logs events with feature flags 'tengu_teleport_started' and 'tengu_teleport_cancelled'. These flags are not publicly documented.

### MCP Server Import Collision Handling
The MCPServerDesktopImportDialog component handles server name collisions by appending a counter to the server name. If a server name already exists, it checks for availability by appending '_1', '_2', etc., until an unused name is found.

### Hidden Shortcut in IdeOnboardingDialog
The IdeOnboardingDialog component includes a hidden shortcut 'Cmd+Option+K' for macOS and 'Ctrl+Alt+K' for other platforms, which is not documented publicly.

### Deep Search Constants in LogSelector
The LogSelector component uses specific constants for deep search: DEEP_SEARCH_MAX_MESSAGES is set to 2000, DEEP_SEARCH_CROP_SIZE to 1000, and DEEP_SEARCH_MAX_TEXT_LENGTH to 500. These numbers dictate the limits of the search functionality.

### AutoUpdater Skips in Test/Dev Environments
The AutoUpdater component skips update checks entirely if the environment is set to 'test' or 'development'. This behavior is not documented publicly and could lead to discrepancies in testing versus production environments.

### Server-Side Kill Switch for Auto-Updates
The AutoUpdater component contains a server-side kill switch feature that caps updates if a 'max version' is set. This feature is not publicly documented and allows Anthropic to halt updates at a specific version.

### Hidden Feature Flag: SKIP_DETECTION_WHEN_AUTOUPDATES_DISABLED
The AutoUpdaterWrapper component uses a hidden feature flag 'SKIP_DETECTION_WHEN_AUTOUPDATES_DISABLED' to skip installation type detection when auto-updates are disabled. This behavior is not documented publicly.

### Task Completion TTL: 30 Seconds
The TaskListV2 component uses a TTL of 30,000 milliseconds (30 seconds) for recently completed tasks. This specific duration is not mentioned in public documentation.

### OffscreenFreeze Component in TeammateViewHeader
The TeammateViewHeader component uses an OffscreenFreeze wrapper, which is not publicly documented. This suggests a mechanism to optimize rendering by freezing offscreen components.

### ChannelDowngradeDialog Handles Version Downgrade
The ChannelDowngradeDialog component allows users to choose between downgrading or staying on the current version when switching from the latest to a stable channel. This behavior is not commonly documented.

### Markdown Table Safety Margin
The `MarkdownTable` component uses a safety margin of 4 to prevent layout overflow and infinite flicker loops. This specific margin value is not publicly documented.

### Reserved Category: Autocompact Buffer
The `ContextVisualization` component reserves the category name 'Autocompact buffer', which is not publicly explained. This suggests internal categorization for context management.

### Cost Threshold Dialog Limit Set at $5
The CostThresholdDialog component displays a message when a user has spent $5 on the Anthropic API in a session. This specific threshold is not publicly documented.

### Fullscreen Default-On Behavior
PR #21439 made fullscreen the default mode, affecting rendering by reactivating a per-line DiffLine branch. This change impacts how diffs are processed, optimizing for O(1) leaves per diff.

### Gutter Width Calculation in Diffs
The gutter width in diffs is calculated as the length of the maximum line number plus 3, accounting for a marker and padding spaces. This design decision impacts how diffs are displayed in narrow terminals.

### TeleportRepoMismatchDialog's Secret Path Validation
The `TeleportRepoMismatchDialog` component uses a hidden validation mechanism for repository paths. It calls `validateRepoAtPath` to check if a path matches the target repository, and if invalid, it removes the path using `removePathFromRepo`. This behavior is not documented publicly.

### Hidden Timestamp Logic in MessageTimestamp
The MessageTimestamp component uses a caching mechanism with a 10-slot array to optimize rendering. It only shows timestamps when in transcript mode and the message type is 'assistant'.

### Model Width Calculation in MessageModel
The MessageModel component calculates the minimum width for the model display by adding 8 to the string width of the model name. This ensures consistent UI layout.

### Error Categorization in NativeAutoUpdater
The NativeAutoUpdater component categorizes errors into specific types like 'timeout', 'checksum_mismatch', and 'network_error' for analytics. This helps in precise error tracking and debugging.

### Auto-Update Channel Selection Logic
The NativeAutoUpdater defaults to the 'latest' update channel unless specified otherwise in initial settings. This ensures users receive the most recent updates by default.

### BridgeDialog QR Code Generation
The BridgeDialog component generates a QR code for a session URL using the 'qrcode' library with specific options like 'errorCorrectionLevel: L' and 'small: true'.

### SessionBackgroundHint Double-Press Pattern
SessionBackgroundHint uses a double-press pattern for Ctrl+B to background a session, with a second press required within 800ms.

### Environment Variable for Disabling Background Tasks
The environment variable 'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS' can disable background tasks in the SessionBackgroundHint component.

### GitHub URL Limit Set to 7250 Characters
The code defines a constant `GITHUB_URL_LIMIT` set to 7250 characters, which was determined experimentally. This limit is used to ensure URLs do not exceed GitHub's length restrictions.

### Conditional GitHub Issues URL Based on Environment
The code conditionally sets the GitHub issues repository URL based on the environment. If the environment is 'external', it uses a public URL; otherwise, it uses an internal URL.

### Tree Structure Built Using Lodash's setWith
The `buildNestedTree` function uses Lodash's `setWith` to build a nested tree structure from dot-notation paths, avoiding automatic array creation.

### Remote Callout Requires Bridge Feature
The 'Remote Callout' feature is gated behind the 'Bridge' feature flag. It checks if 'isBridgeEnabled()' returns true before showing the remote callout dialog.

### DevBar Visible for 'Ant' Environment
The 'DevBar' component is designed to be visible only in development builds or when the environment is set to 'ant'. This is controlled by the 'shouldShowDevBar()' function.

### Remote Control Timeout Interval
The 'Remote Control' feature uses a 500ms interval to check for slow operations when the 'DevBar' is visible.

### Auto Dismiss Timeout in EffortCallout
The EffortCallout component has an auto-dismiss feature with a hardcoded timeout of 30,000 milliseconds (30 seconds). This behavior is not documented publicly and could affect user interactions.

### HistorySearchDialog Width Calculation
HistorySearchDialog dynamically adjusts its layout based on terminal width, with a specific threshold at 100 columns to decide preview placement. This is not mentioned in user-facing documentation.

### Secret Feature Flag: CONTEXT_COLLAPSE
The `CollapseLabel` component is conditionally rendered based on the feature flag `CONTEXT_COLLAPSE`. This flag, when enabled, allows the component to subscribe to store mutations unconditionally, indicating a hidden feature for collapsing context.

### Wheel Scroll Acceleration Parameters
The scroll acceleration for wheel events is controlled by specific parameters: `WHEEL_ACCEL_WINDOW_MS` set to 40 ms, `WHEEL_ACCEL_STEP` set to 0.3, and `WHEEL_ACCEL_MAX` set to 6. These values dictate how quickly scrolling accelerates in response to rapid wheel events.

### Shimmer Animation Interval
The shimmer animation in the Spinner component is controlled by a constant 'SHIMMER_INTERVAL_MS' defined in 'bridgeStatusUtil.js'. This value is set to 100 milliseconds, dictating the speed of the shimmer effect.

### Spinner Frames Design Choice
The Spinner component uses a design choice where the frames are created by reversing the default characters to create a looping animation. This is an unconventional method that might affect performance or visual smoothness.

### Skill Improvement Survey Input Validation
The Skill Improvement Survey only accepts '0' and '1' as valid inputs, which correspond to 'dismissed' and 'good' responses respectively.

### Diagnostics Display URI Handling
The Diagnostics Display component processes file URIs by removing 'file://' and '_claude_fs_right:' prefixes, which suggests internal handling of specific file systems.

### Structured Diff List Width Calculation
The width for displaying structured diffs is calculated as the terminal width minus 12, which may affect how diffs are rendered in different terminal sizes.

### Settings Error Dialog Options
The InvalidSettingsDialog component presents users with two options: 'Exit and fix manually' or 'Continue without these settings'. This decision point is crucial for handling invalid settings files.

### Effort Level Symbol Default Fallback
The effortLevelToSymbol function defaults to returning a high effort symbol if an unknown effort level is encountered, which could originate from remote config.

### ThemePicker Skip Exit Handling
The ThemePicker component includes a skipExitHandling prop that, when true, bypasses exit handling logic, useful in contexts like onboarding.

### Hidden Feature Flag: tengu_amber_quartz_disabled
The 'tengu_amber_quartz_disabled' GrowthBook flag acts as a kill-switch for voice mode, defaulting to false. This means voice mode is enabled by default unless explicitly disabled via this flag.

### TasksV2Store Singleton with File Watcher
The `TasksV2Store` is a singleton managing the TodoV2 task list with a file watcher. It uses specific timers like `HIDE_DELAY_MS` set to 5000ms and `DEBOUNCE_MS` set to 50ms to manage task visibility and updates.

### Hidden 'tengu_teleport_resume_session' Event
The code logs a hidden event 'tengu_teleport_resume_session' when resuming a session. This event is not publicly documented and suggests internal tracking of session resumes using a feature codenamed 'tengu'.

### Queue Processing Priority Order
The queue processing in `useQueueProcessor` uses a priority order: 'now' > 'next' (user input) > 'later' (task notifications). This priority is automatically handled by the `dequeue()` function.

### Voice Stream Language Fallback Mechanism
If a language code sent by the CLI is not supported by the server, the WebSocket closes with a 1008 error, and the system falls back to the default language 'en'.

### LSP Plugin Recommendation Timeout Threshold
The timeout threshold for LSP plugin recommendations is set at 28,000 ms, just below the menu's auto-dismiss time of 30 seconds, to distinguish between timeouts and explicit dismissals.

### Hidden Gates in Plugin Recommendation System
The `usePluginRecommendationBase` function applies hidden gates like remote mode and in-flight checks before resolving plugin recommendations. This gating mechanism is not publicly documented.

### Bridge Failure Timeout Set to 10 Seconds
The `BRIDGE_FAILURE_DISMISS_MS` constant is set to 10,000 milliseconds (10 seconds), which determines how long after a failure the `replBridgeEnabled` is auto-cleared to stop retries. This is a specific design decision to prevent excessive retries that could lead to unnecessary server load.

### Chrome Flag Detection in Process Args
The function `getChromeFlag` checks for `--chrome` and `--no-chrome` flags in `process.argv` to determine whether to enable Chrome-specific features. This internal mechanism is not publicly documented.

### Chrome Extension Notification Requires Subscription
The `useChromeExtensionNotification` function checks if the user is a Claude.ai subscriber before enabling notifications for the Chrome extension. This requirement is not explicitly mentioned in public documentation.

### Tengu Skill Improvement Survey Event Logging
The code logs events with the name 'tengu_skill_improvement_survey' when a skill improvement suggestion appears or is responded to. This suggests an internal feature or experiment named 'Tengu' related to skill improvement.

### Secret 'tengu_plugin_hint_response' Event
The code logs an event named 'tengu_plugin_hint_response' when a user responds to a plugin hint recommendation. This event is tied to internal analytics and is not publicly documented.

### Internal Friction Patterns Detection
The code includes a set of 'friction patterns' to detect when users express dissatisfaction or corrections, such as 'that's wrong' or 'try again'. This internal mechanism is not publicly documented.

### Issue Flag Banner Thresholds and Cooldowns
The 'useIssueFlagBanner' function uses a minimum submit count of 3 and a cooldown of 30 minutes (1800000 ms) to determine when to show an issue flag banner. These thresholds are not publicly documented.

### File Suggestions Throttle Every 5 Seconds
The file suggestions feature refreshes every 5 seconds to pick up untracked files, even if the .git/index mtime doesn't change. This ensures untracked files are included in suggestions without relying on git index updates.

### Clipboard Image Hint Cooldown Set to 30 Seconds
The clipboard image hint feature has a cooldown period of 30 seconds to prevent spamming users with notifications. This cooldown is checked before showing a notification when the terminal regains focus.

### Tengu IDE Logging Feature
The code includes a feature for logging events in IDEs using a specific naming convention 'tengu_ide_' followed by the event name. This suggests an internal feature or project codenamed 'Tengu' related to IDE integration.

### Hidden Feature Flag: tengu_sedge_lantern
The code contains a hidden feature flag 'tengu_sedge_lantern' which defaults to false. This flag is used in conjunction with the 'AWAY_SUMMARY' feature to control appending 'while you were away' summaries after a terminal has been blurred for 5 minutes.

### Hidden Sandbox Configuration Secrets
The sandbox configuration includes hidden options like 'allowManagedDomainsOnly' and 'allowManagedReadPathsOnly', which prioritize managed settings over user or project settings. These options are not publicly documented.

### Ablation Baseline Feature Flag
The 'ABLATION_BASELINE' feature flag enables a series of environment variables that disable various Claude Code features like 'CLAUDE_CODE_SIMPLE' and 'DISABLE_INTERLEAVED_THINKING'. This is not mentioned in public documentation.

### Tengu Codename for Claude MCP Server
The Claude MCP server is internally codenamed 'tengu', as seen in the server initialization: `name: 'claude/tengu'`. This codename is not mentioned in public documentation.

### Claude Code Stream Close Timeout
The Claude Code SDK allows overriding the default stream close timeout of 60 seconds for long-running MCP calls. This timeout is not widely known.

### Remote Hosts Data Collection for 'ant' Users
For users with USER_TYPE 'ant', Claude Code collects data on running remote hosts using the 'coder' command, with a timeout of 30 seconds.

### Installation Path Decision Based on OS
Claude Code determines the installation path based on the operating system, using a Windows-style path for 'win32' platforms and a Unix-style path otherwise.

### Secret Feature Flags in Init Command
The init command uses feature flags like 'tengu_*', 'KAIROS', 'BUDDY', and 'BRIDGE' to control setup behavior. These flags are not mentioned in public documentation.

### Ultraplan Model Selection via Feature Flag
The Ultraplan command selects its model based on a feature flag 'tengu_ultraplan_model', defaulting to 'opus46.firstParty'. This suggests dynamic model selection capabilities.

### Advisor Model Validation Process
The advisor command includes a validation process for models, ensuring only valid and supported models can be set as advisors. Invalid models return specific error messages.

### Undercover Mode Alters PR Workflow
When `USER_TYPE` is set to 'ant' and `isUndercover()` returns true, the PR workflow omits reviewer arguments and changelog sections, indicating a special internal mode.

### Bundled Skills File Extraction
Bundled skills can include additional reference files extracted to disk on first invocation, allowing the model to read/grep these files, which is not publicly documented.

### MCP Skill Builders Registration
The MCP skill discovery process uses a write-once registry for skill builders, ensuring no cyclic dependencies in the module graph, a detail not covered in public documentation.

### Internal Skill Loading Paths
The function 'getSkillsPath' reveals internal paths for loading skills based on different settings sources, such as 'policySettings', 'userSettings', and 'projectSettings'. These paths are not exposed in public documentation.

### Secret User Type: 'Ant'
The code includes a secret user type 'ant', determined by the environment variable USER_TYPE. This user type likely enables specific features or behaviors not available to other users.

### Hidden Feedback Channel for Rate Limits
The code references a hidden feedback channel '#briarpatch-cc' for handling rate limit messages, which is not publicly documented.

### Rate Limit Warning Threshold Set at 70%
The system only shows warnings for approaching rate limits when utilization exceeds 70%, which is not mentioned in public documentation.

### Internal /mock-limits Command for Testing
The code includes a '/mock-limits' command used by Anthropic employees to simulate rate limit scenarios, which is not publicly available.

### Opus-Specific Rate Limit Handling
The system has specific logic for handling rate limits related to 'Opus' models, including fallback behavior to 'Sonnet' models.

### Caffeinate Timeout Management on macOS
The code uses the macOS `caffeinate` command to prevent the system from sleeping during operations. The timeout for the caffeinate process is set to 300 seconds (5 minutes), and it is restarted every 4 minutes to ensure continuous operation. This is a self-healing mechanism to handle cases where the Node process is killed unexpectedly.

### VCR Fixture Management for Testing
The VCR system is used for managing test fixtures, with a specific focus on caching and reusing test data. It uses a hash of the input data to create unique filenames for fixtures. If a fixture is missing in CI environments, it throws an error unless VCR_RECORD is set.

### Protocol Prefixes in Diagnostic Tracking
The DiagnosticTrackingService normalizes file URIs by removing specific protocol prefixes like 'file://', '_claude_fs_right:', and '_claude_fs_left:'. This ensures consistent file handling across different environments.

### Early Warning Configurations for Rate Limits
Early warning configurations are set to alert users when they consume quota faster than allowed. For example, a 'five_hour' limit triggers a warning at 90% utilization if 72% of the time has elapsed.

### Mock Rate Limits for Internal Testing
The `mockRateLimits.ts` file contains internal-only mock rate limits for testing purposes, with headers like 'anthropic-ratelimit-unified-status' and 'anthropic-ratelimit-unified-reset'. These are not intended to match real-world API behavior and are for internal testing only.

### Tengu Notification Method Tracking
The notifier system logs events with 'tengu_notification_method_used', tracking which notification method was used. This includes methods like 'iterm2', 'kitty', and 'ghostty', which are not publicly documented.

### Secret Feature Flag for Voice Stream
The voiceStreamSTT service is gated by a secret feature flag 'VOICE_MODE', which is only reachable in specific 'ant' builds. This flag controls access to the push-to-talk functionality using Anthropic's voice_stream WebSocket endpoint.

### Hidden Finalize Timeout Values in Voice Stream
The voiceStreamSTT service uses specific timeout values for finalizing connections: a 'safety' timeout of 5,000 ms and a 'noData' timeout of 1,500 ms. These values dictate how long the system waits before determining a connection is inactive.

### MCP Server Approval Dialogs
The MCP server approval process uses React components to render approval dialogs for pending project servers. This process is integrated into the existing Ink root instance, allowing for seamless user interaction.

### Session Reconnect Strategy and Limits
The SessionsWebSocket class implements a reconnect strategy with a delay of 2,000 ms and a maximum of 5 attempts. Additionally, it allows for 3 retries specifically for 'session not found' errors, indicating a transient issue during server compaction.

### Remote Session Viewer Mode
The RemoteSessionConfig includes a 'viewerOnly' mode where the client acts as a pure viewer, disabling certain interactions like Ctrl+C/Escape interrupts and session title updates.

### 60s Reconnect Timeout in Viewer Mode
In 'viewerOnly' mode, the 60-second reconnect timeout is disabled, which could impact session stability and user experience.

### Remote Settings Fetch Timeout
The timeout for fetching remote settings is set to 10 seconds (SETTINGS_TIMEOUT_MS = 10000). This is shorter than typical API timeouts, which could lead to premature failures in fetching settings.

### Loading Promise Timeout for Remote Settings
The loading promise for remote settings has a timeout of 30 seconds (LOADING_PROMISE_TIMEOUT_MS = 30000). This is intended to prevent deadlocks if the settings are never loaded.

### Proactive Mode Conditional Import with KAIROS
The code conditionally imports the proactive module only if the 'PROACTIVE' or 'KAIROS' feature flags are enabled. This suggests that these features are internally tested but not publicly documented.

### Tengu Slate Heron Feature Flag
The 'tengu_slate_heron' feature flag is used to control the time-based microcompact configuration, indicating a potential internal project or experiment.

### Auto-Compaction Failure Threshold
Auto-compaction stops after 3 consecutive failures, as a circuit breaker mechanism. This threshold is based on data showing that 1,279 sessions had 50+ consecutive failures, wasting significant resources.

### CLAUDE_CODE_AUTO_COMPACT_WINDOW Environment Variable
The auto-compaction process can be influenced by the CLAUDE_CODE_AUTO_COMPACT_WINDOW environment variable, which adjusts the context window size. This provides a hidden configuration option for tuning performance.

### API-Round Message Grouping Strategy
Messages are grouped by API-round boundaries, not by human turns, allowing for finer-grained context management. This differs from typical conversation models and highlights a unique approach to handling API interactions.

### Valid Scopes for Plugin Operations
Plugin operations in Claude are limited to specific scopes: 'user', 'project', and 'local'. Managed plugins can also be updated but not installed. This scope limitation is not clearly outlined in public-facing materials.

### Secret TENGU Plugin Command Failure Event
The code logs a 'tengu_plugin_command_failed' event for plugin command errors, which is not publicly documented. This event is used for internal dashboards to compute success rates.

### Background Plugin Installation Manager
The PluginInstallationManager performs automatic plugin installations from trusted sources in the background, without blocking startup. This behavior is not highlighted in public documentation.

### Exponential Backoff for LSP Errors
The LSP server implements an exponential backoff strategy for transient errors like 'content modified'. The base delay is set to 500ms, with retries at 500ms, 1000ms, and 2000ms.

### LSP Diagnostic Volume Limits
The LSP Diagnostic Registry imposes strict volume limits: a maximum of 10 diagnostics per file and 30 total diagnostics. This could lead to some diagnostics being dropped if limits are exceeded.

### Plugin-Only LSP Server Support
LSP servers are only supported via plugins, not through user or project settings. This means users must rely on plugins to configure LSP servers.

### LSP Severity Mapping to Claude
LSP severity levels are mapped to Claude's diagnostic severity strings, defaulting to 'Error' for invalid or missing values. This mapping ensures consistent severity interpretation.

### Elicitation Timeout Configuration
The elicitation process includes a specific timeout configuration of 10,000 milliseconds for executing the headersHelper script, indicating a design decision for performance management.

### MCP Registry Fetch Timeout
The MCP registry fetch operation has a timeout set to 5000 milliseconds. This specific timeout value indicates a design decision balancing responsiveness and network latency tolerance.

### Internal VSCode MCP Notification Setup
The setupVscodeSdkMcp function establishes a special internal VSCode MCP for bidirectional communication using notifications. This setup is not publicly documented.

### Internal-Only MCP Server Configurations
The code reveals internal-only server configurations for IDE extensions, specifically 'sse-ide' and 'ws-ide' types, which are not publicly documented. These configurations include fields like 'ideName' and 'ideRunningInWindows'.

### MCP String Parsing Limitation with Double Underscores
The function 'mcpInfoFromString' has a known limitation where server names containing '__' are parsed incorrectly, which could lead to unexpected behavior. This is not documented publicly.

### Internal Cross-App Access Flag in MCP
The MCP configuration includes an internal-only Cross-App Access (XAA) flag, which is not mentioned in public documentation. This flag is part of the 'McpXaaConfigSchema'.

### MCP Servers Beta Header Revealed
The code uses a custom header 'mcp-servers-2025-12-04' for MCP server requests, indicating a potential beta feature or rollout plan.

### ClaudeAI Fetch Timeout Setting
The fetch operation for ClaudeAI MCP server configurations has a timeout set to 5000 milliseconds, indicating a design decision for responsiveness.

### In-Process Transport for MCP Communication
The 'InProcessTransport' class allows for MCP server and client communication within the same process, avoiding subprocess overhead.

### Secret Feature Flag: tengu_harbor
The feature flag 'tengu_harbor' is used to control the overall enablement of channels. It defaults to false and is refreshed every 5 minutes via GrowthBook.

### Feature Flag: tengu_harbor_ledger
The 'tengu_harbor_ledger' feature flag is used to retrieve the approved channel plugins allowlist, which determines if a plugin can register based on its marketplace and plugin name.

### XAA Request Timeout Set to 30 Seconds
The XAA (Cross-App Access) request timeout is set to 30,000 milliseconds (30 seconds), ensuring that requests do not hang indefinitely.

### Enterprise MCP File Path
The path to the managed MCP configuration file is determined by joining the managed file path with 'managed-mcp.json'.

### Flag to Bypass Channel Allowlist
The '--dangerously-load-development-channels' flag allows bypassing the channel plugins allowlist, enabling both plugin and server entries regardless of approval.

### SDK Control Transport Bridge Mechanism
The SDK MCP Transport Bridge allows in-process SDK MCP servers to communicate with the CLI process through control messages, using stdout/stdin for message passing. This differs from typical inter-process communication methods.

### User Sync Data Schema Details
The user sync data schema includes a version number, last modified timestamp, and checksum for data integrity. It uses MD5 for checksums, which is considered weak for cryptographic purposes.

### Settings Sync Timeout and Limits
The settings sync service has a timeout of 10 seconds and a maximum file size limit of 500 KB per file. These constraints are not mentioned in public documentation.

### Kairos Cron Feature Detection
The code checks for a feature flag 'isKairosCronEnabled' which suggests an internal feature related to scheduling or cron jobs. This feature is not publicly documented.

### Tengu Tip Logging for Analytics
When a tip is shown, an event 'tengu_tip_shown' is logged for analytics, indicating a structured approach to tracking user interactions with tips.

### SSL Error Hints for Enterprise Proxies
The function 'getSSLErrorHint' provides specific guidance for users behind TLS-intercepting proxies, suggesting setting 'NODE_EXTRA_CA_CERTS' or asking IT to allowlist '*.anthropic.com'. This is intended to reduce support requests from enterprise users.

### Claude Code Guest Pass Referral Campaign
The referral campaign uses a specific code name 'claude_code_guest_pass' for eligibility and redemption checks. This suggests a targeted referral program that may not be publicly documented.

### Ultrareview Quota Peek for Subscribers
The 'fetchUltrareviewQuota' function allows subscribers to peek at their ultrareview quota, which includes reviews used, limit, and remaining. This feature is not available to non-subscribers.

### API Timeout Settings for Referral and Usage
The API calls for referral eligibility and redemptions have timeouts set to 5 seconds and 10 seconds respectively. This indicates a prioritization of quick responses for eligibility checks over redemption data.

### Sequential Log Append for Sessions
The system uses a sequential wrapper to ensure that log appends for a session are processed one at a time. This prevents concurrent log writes, which could lead to data inconsistency.

### 500MB File Size Limit in Files API
The Files API enforces a maximum file size limit of 500MB, which may affect users handling large files. This specific limit is not mentioned in public documentation.

### Vertex AI Region Priority Hierarchy
The code outlines a specific priority hierarchy for determining the GCP region for Vertex AI models, prioritizing model-specific variables over global settings. This detailed priority is not commonly known.

### Internal EMPTY_USAGE Object
An internal EMPTY_USAGE object is defined to initialize usage metrics with zero values, which is not exposed in public documentation.

### Admin Request Types: Limit Increase & Seat Upgrade
The system supports two admin request types: 'limit_increase' and 'seat_upgrade'. This functionality is not widely advertised.

### Incident Kill Switch for Metrics API
The metrics API has an incident kill switch that disables nonessential traffic, returning false for metrics enabled status to reduce load.

### Secret Feature Flag: tengu_onyx_plover
The feature flag 'tengu_onyx_plover' is used to control scheduling parameters for the AutoDream feature. This flag is not publicly documented and allows internal configuration of thresholds like 'minHours' and 'minSessions'.

### Session Scan Interval for AutoDream
The session scan interval for AutoDream is set to 10 minutes (600,000 milliseconds). This interval determines how frequently the system checks if the session threshold is met.

### Consolidation Lock Timeout
The consolidation lock for AutoDream becomes stale after 1 hour (3,600,000 milliseconds), even if the PID is still live. This prevents lock contention and ensures timely consolidation.

### Event Sampling Configuration
The event sampling configuration is managed through a GrowthBook dynamic config named 'tengu_event_sampling_config'. Events not listed are logged at a 100% rate, but those listed can have a sample rate between 0 and 1, affecting how frequently they are logged.

### First-Party Event Logging Resilience
The first-party event logging system includes resilience features like quadratic backoff retry, append-only logs for failed events, and chunking large event sets. It uses OpenTelemetry's BatchLogRecordProcessor with defaults of 5 seconds and 200 events.

### Tengu Frond Boric: Analytics Killswitch
The 'tengu_frond_boric' configuration acts as a killswitch for analytics sinks, allowing individual sinks like Datadog or first-party logging to be disabled.

### Undocumented Analytics Disabling Conditions
Analytics operations are disabled in environments like 'test', and when using third-party cloud providers such as Bedrock, Vertex, or Foundry. This is not clearly documented in public resources.

### Ink's Flexbox Engine: Simplified Yoga Port
The TypeScript port of yoga-layout used by Ink implements a simplified single-pass flexbox engine covering only the features Ink uses, such as flex-direction and justify-content. It omits features like aspect-ratio and RTL direction, which are not used by Ink.

### File Index Scoring: Test File Penalty
In the file index scoring system, paths containing 'test' incur a 1.05× penalty, capped at 1.0, to rank non-test files higher. This scoring approach is designed to prioritize more relevant files in search results.

### Async File Indexing: Yielding for Responsiveness
The async file indexing process yields to the event loop every 8–12k paths to prevent blocking the main thread for over 10ms, ensuring responsiveness even with large indexes of 270k+ files.

### Lazy Loading of highlight.js for Performance
The code defers loading highlight.js until the first render to avoid performance issues. This lazy loading approach prevents the initial load from registering 190+ language grammars, which can take 100-200ms on macOS and significantly longer on Windows, leading to potential GC pauses in CI environments.

### BAT_THEME Environment Variable is a Stub
The BAT_THEME environment variable support is a stub in this TypeScript port. Since highlight.js does not support bat themes, the getSyntaxTheme function always returns the default theme for Claude, ignoring any BAT_THEME settings.

### User Type Check for 'ant' in Skills Registration
The registerRememberSkill function only registers the skill if the USER_TYPE environment variable is set to 'ant'. This suggests a feature flag or internal user segmentation that restricts certain functionalities to specific user types.

### Loop Command Default Interval
The default interval for the /loop command is set to '10m' if no interval is specified. This choice of default interval may affect how frequently tasks are automated.

### Kairos Cron Feature Flag
The presence of isKairosCronEnabled suggests a feature flag for enabling or disabling Kairos Cron functionality, indicating a controlled rollout or testing phase.

### Debug Skill Behavior Based on User Type
The 'debug' skill has different descriptions based on the USER_TYPE environment variable. If USER_TYPE is 'ant', it provides a detailed debug log reading feature, otherwise, it only enables debug logging.

### Stuck Skill Uses Direct ps Commands
The 'stuck' skill uses direct 'ps' commands to diagnose frozen or slow Claude Code sessions, which is not typically documented for users.

### Internal MCP Server Tagged ID Decoding
The code includes a function to decode 'mcpsrv_' tagged IDs to UUIDs, which is intended to be an internal implementation detail that could change.

### Hidden Model IDs in SKILL_MODEL_VARS
The SKILL_MODEL_VARS constant reveals internal model IDs such as 'claude-opus-4-6', 'claude-sonnet-4-6', and 'claude-haiku-4-5'. These IDs are used to substitute placeholders in markdown files at runtime, indicating a dynamic model selection mechanism.

### Secret Feature Flag: KAIROS_DREAM
The source code reveals a secret feature flag 'KAIROS_DREAM' that, when enabled, registers a 'DreamSkill'. This feature is not publicly documented and suggests additional functionality tied to the 'KAIROS' initiative.

### Vim and Normal Mode Toggle Command
The 'vim' command toggles between Vim and Normal editing modes, treating 'emacs' as 'normal' for backward compatibility. This behavior is not clearly documented.

### Sandbox Platform Restrictions and Enterprise Settings
The sandbox feature is restricted to macOS, Linux, and WSL2, with an undocumented enterprise setting ('enabledPlatforms') that can disable sandboxing on specific platforms. This is not mentioned in public documentation.

### Sandbox Settings Locked by Policy
Sandbox settings can be locked by higher-priority configurations, preventing local changes. This behavior is not publicly documented.

### Btw Side Question Interval Timing
The 'btw' command uses an 80ms interval to update frames while waiting for a response or error. This specific timing choice is not documented.

### Hidden Max 20x Subscription Check
The code contains a hidden check for a 'max' subscription with a 'default_claude_max_20x' rate limit tier. This suggests an undocumented subscription tier that offers significantly higher usage limits.

### Secret Flag to Disable Upgrade Command
The 'upgrade' command can be disabled using an environment variable 'DISABLE_UPGRADE_COMMAND'. This is not publicly documented and allows control over the availability of the upgrade feature.

### Dynamic Text Input Columns Calculation
The text input field dynamically calculates its width based on the terminal size, ensuring a minimum of 50 columns. This is done using `Math.max(50, terminalSize.columns - PASTE_HERE_MSG.length - 4)`, which adapts the UI to different terminal sizes.

### Command Availability: Claude-AI and Console Only
The 'install-github-app' command is only available for 'claude-ai' and 'console', limiting its use to specific environments. This restriction is not mentioned in public documentation.

### Hidden Feature Flag: REACTIVE_COMPACT
The code contains a feature flag 'REACTIVE_COMPACT' that conditionally imports a module for reactive compaction. This feature is not documented publicly and its purpose or effects are not clear from the available code.

### Context Command: Visualization vs Non-Interactive
The 'context' command has two modes: a visual grid in interactive sessions and a text-based output in non-interactive sessions, controlled by the getIsNonInteractiveSession function.

### Directory Validation Error Handling
The validateDirectoryForWorkspace function treats errors like EACCES and EPERM as 'path not found' rather than crashing, ensuring robustness against inaccessible directories.

### Immediate Timeout in AddDirError Function
The AddDirError function sets a timeout with a duration of 0 milliseconds to call the onDone callback. This effectively makes it execute immediately after the current call stack is cleared.

### Secret 'tengu_effort_command' Analytics Event
The 'tengu_effort_command' event is logged when setting effort levels, which is not publicly documented. This suggests internal tracking of user interactions with effort settings.

### Hidden 'BRIDGE_MODE' Feature Flag
The 'BRIDGE_MODE' feature flag controls the availability of the remote-control bridge command, which is not mentioned in public documentation. This indicates a hidden feature for remote terminal control.

### Environment Variable Overrides Effort Level
The environment variable 'CLAUDE_CODE_EFFORT_LEVEL' can override user-set effort levels, potentially causing unexpected behavior if not cleared.

### Remote-Control Command Aliases
The 'remote-control' command can also be accessed using the alias 'rc', a shortcut not documented publicly.

### Teammates Cannot Set Their Own Color
In the color command, teammates in a 'swarm' session cannot set their own color. Colors are assigned by the team leader. This behavior is not documented publicly.

### Doctor Command Controlled by Environment Variable
The 'doctor' command can be disabled by setting the environment variable DISABLE_DOCTOR_COMMAND to a truthy value. This feature flag is not mentioned in public documentation.

### Ant-Only Cost Display
The cost command reveals additional cost details for users with USER_TYPE set to 'ant'. This behavior is not publicly documented and suggests internal roles have special access.

### Plugin Command Aliases Include 'Marketplace'
The 'plugin' command in the code has aliases including 'plugins' and 'marketplace', suggesting a broader scope for plugin management that might include a marketplace feature.

### Marketplace Graceful Degradation
The loadMarketplacesWithGracefulDegradation function attempts to load marketplaces even if some fail, which is not mentioned in public documentation.

### Install Count Formatting
The formatInstallCount function formats plugin install counts, suggesting a focus on user-friendly display, which is not highlighted in public resources.

### MCP Server Suppression for Duplicates
The code suppresses MCP server configurations if they are duplicates of existing ones, either provided by a plugin or already configured. This behavior is not publicly documented.

### Hidden Validate Plugin Command
The 'ValidatePlugin' command includes a hidden feature that automatically prefers validating a marketplace manifest if both plugin and marketplace manifests exist in a directory. This behavior is not mentioned in public documentation.

### Hidden Plugin Argument Parsing Logic
The `parsePluginArgs` function can interpret complex plugin installation commands, such as `plugin@marketplace` or URLs as marketplace paths. This behavior isn't documented publicly.

### Scoped Plugin Installation Options
The `buildPluginDetailsMenuOptions` function offers scoped installation options, such as 'install-user', 'install-project', and 'install-local', which are not publicly documented.

### GitHub Repo Extraction for Plugins
The `extractGitHubRepo` function can extract GitHub repository information from a plugin's source if it's specified as a GitHub source, which is not a publicly known feature.

### Hidden Feature Flag: Tengu Marketplace
The code references a hidden feature flag 'tengu_marketplace_added' used for logging events when a marketplace is added. This suggests an internal codename 'Tengu' for marketplace-related features.

### Internal Control for Marketplace Auto-Updates
The code includes a function 'setMarketplaceAutoUpdate' that allows toggling auto-updates for marketplaces, a feature not prominently documented publicly.

### Graceful Degradation in Marketplace Loading
The function 'loadMarketplacesWithGracefulDegradation' suggests a robust design choice to handle marketplace loading failures gracefully, which may not be obvious from public documentation.

### Plugin Trust Warning Uses Custom Messages
The PluginTrustWarning component includes a customizable message that can be appended to the default warning text. This is not documented publicly.

### Deprecated Output Style Command
The '/output-style' command has been deprecated and replaced by '/config'. This change is not documented publicly, and users are advised to update their settings file for changes to take effect in the next session.

### Fast Mode Toggle Feature
The 'fast' command allows toggling of a fast mode feature, which is only available for 'claude-ai' and 'console'. It uses a feature flag 'tengu_fast_mode_toggled' for analytics, indicating internal tracking of this feature's usage.

### Hidden Desktop Command for Specific Platforms
The 'desktop' command is only enabled on macOS and Windows x64 platforms, and is hidden otherwise. This is controlled by the isSupportedPlatform function.

### Telemetry Flushed Before Logout
The performLogout function flushes telemetry data before clearing user credentials to prevent organizational data leakage. This is an intentional design choice to ensure data integrity.

### Graceful Shutdown on Logout
After logging out, the system performs a graceful shutdown with a 200ms delay, ensuring all processes are properly terminated.

### Hidden Feature Flag: DISABLE_LOGOUT_COMMAND
The 'logout' command can be disabled using an environment variable 'DISABLE_LOGOUT_COMMAND'. This feature flag is not documented publicly.

### MCP Toggle Command for Server Management
The MCP command includes a toggle feature to enable or disable servers. It supports targeting all servers or specific ones by name, providing flexibility in server management.

### Hidden XAA Feature Flag in MCP Command
The MCP add command includes a hidden feature flag '--xaa' for enabling XAA (SEP-990), which is only visible if 'isXaaEnabled()' returns true. This suggests a conditional feature rollout.

### Conditional Visibility for Remote Environment Command
The 'remote-env' command is conditionally visible based on the user's subscription status and policy limits. It is hidden if the user is not a Claude AI subscriber or if the policy 'allow_remote_sessions' is not allowed.

### Feedback Command Conditional Availability
The feedback command is conditionally enabled based on several environment variables and user type. It is disabled if any of these conditions are true: CLAUDE_CODE_USE_BEDROCK, CLAUDE_CODE_USE_VERTEX, CLAUDE_CODE_USE_FOUNDRY, DISABLE_FEEDBACK_COMMAND, DISABLE_BUG_COMMAND, isEssentialTrafficOnly(), or if the user type is 'ant'.

### Hidden 'extra-usage' Command with Special Conditions
The 'extra-usage' command is conditionally enabled based on the environment variable 'DISABLE_EXTRA_USAGE_COMMAND' and the result of 'isOverageProvisioningAllowed()'. It allows users to manage extra usage when limits are hit, but is hidden in non-interactive sessions unless explicitly allowed.

### Unlimited Extra Usage Check Bypasses Requests
If an organization has unlimited extra usage enabled with no monthly cap, the system bypasses the request process entirely. This is determined by checking if 'extraUsage?.is_enabled' is true and 'extraUsage.monthly_limit' is null.

### Global Config Flag for Extra Usage Visits
A global configuration flag 'hasVisitedExtraUsage' is used to track if a user has visited the extra usage command. This flag is set the first time the command is run.

### Slack App Install Tracking
The code tracks the number of times a user clicks to install the Slack app by incrementing 'slackAppInstallCount' in the global config.

### Tengu Voice Mode Toggle
The voice mode feature in Claude has a hidden toggle event called 'tengu_voice_toggled'. This event logs when voice mode is enabled or disabled, which is not mentioned in public documentation.

### Voice Growth Book Feature Flag
The availability of the voice command is controlled by a feature flag 'isVoiceGrowthBookEnabled', which is not publicly documented.

### Language Hint Display Limit
The language hint for voice mode is limited to being shown a maximum of 2 times, a specific design decision not mentioned in public documentation.

### Undocumented Mobile Command
The 'mobile' command in the codebase shows a QR code to download the Claude mobile app, which is not mentioned in public documentation.

### Hidden Feature Flag: Tengu Review Bughunter
The '/ultrareview' command is controlled by a hidden feature flag 'tengu_review_bughunter_config'. This flag determines if the feature is enabled, and if not, ungated users will not see the command at all.

### Ultrareview Billing Behavior for Teams
Team and Enterprise plans bypass the free-review quota and Extra Usage dialog for '/ultrareview'. The quota endpoint is only for consumer plans, avoiding confusion for team/enterprise users.

### Hidden Rate Limit Options Command
The 'rate-limit-options' command is marked as hidden and is only enabled for Claude AI subscribers. It provides options when rate limits are reached, indicating internal handling of rate limit scenarios.

### Files Command Restricted to 'ant' User Type
The 'files' command, which lists all files in context, is only enabled for users with the 'ant' user type. This suggests a restricted feature possibly for internal testing or specific user groups.

### Hidden Feature Flag: BG_SESSIONS
The 'BG_SESSIONS' feature flag allows Claude to run in a background tmux session, detaching instead of killing the session. This is not documented publicly.

### Internal Marketplace Name: claude-code-marketplace
An internal marketplace name 'claude-code-marketplace' is used for certain user types, indicating a separate internal plugin ecosystem.

### Hidden Command: thinkback-play
The 'thinkback-play' command is hidden and controlled by the 'tengu_thinkback' feature gate, playing an animation post-generation.

### MAX_LOOKBACK Limit in Copy Command
The 'copy' command has a MAX_LOOKBACK limit of 20, capping the number of recent assistant messages it can retrieve.

### Tengu Thinkback Feature Flag
The 'think-back' command is gated by a feature flag 'tengu_thinkback', suggesting it's part of a controlled rollout or experiment. This feature provides a '2025 Claude Code Year in Review'.

### Bridge Session Title Syncing
The rename command attempts to sync session titles to a bridge session on claude.ai/code. It uses 'replBridgeSessionId' for v2 env-less bridge, indicating a backend session management system.

### Hidden Heapdump Command
The 'heapdump' command is hidden and allows dumping the JS heap to the desktop. It supports non-interactive sessions, indicating it's likely for debugging or internal use.

### Internal Marketplace Codename and Repo
The internal marketplace for plugins is codenamed 'claude-code-marketplace' and is associated with the repository 'anthropics/claude-code-marketplace'. This differs from the public 'anthropics/claude-plugins-official'.

### Tengu Grove Policy Toggle Event
A logging event 'tengu_grove_policy_toggled' is triggered when the 'Help improve Claude' setting is toggled, indicating internal tracking of user consent changes.

### Use of Deprecated Write File Sync
The function 'writeFileSync_DEPRECATED' is used for exporting conversations, suggesting potential issues with file operations.

### Tag Command Restricted to 'ant' Users
The 'tag' command is only enabled for users with USER_TYPE set to 'ant'. This restriction is not publicly documented and limits the feature to a specific user group.

### Trusted Device Enrollment: 10-Minute Window
The login process includes enrolling the device as trusted for a 10-minute fresh-session window. This detail is not mentioned in public-facing documentation.

### Environment Flag to Disable Login Command
The login command can be disabled using the DISABLE_LOGIN_COMMAND environment variable. This capability is not publicly documented, suggesting internal control over login access.

### Hidden PR Comments Plugin Command
The 'pr-comments' command is an internal plugin for fetching GitHub PR comments, not documented publicly. It uses 'gh pr view' and 'gh api' commands to retrieve and format comments, suggesting a deeper integration with GitHub than publicly advertised.

### Remote Session Feature with QR Code
The 'session' command includes a 'remote' alias and generates a QR code for remote sessions, which is not publicly documented. This feature is gated by the 'getIsRemoteMode' function, indicating it's intended for internal or limited release.

### IDE Hint Show Count Limit
The IDE status indicator has a hardcoded limit of 5 for how many times an IDE hint can be shown. This is controlled by the constant `MAX_IDE_HINT_SHOW_COUNT`.

### Tengu Feature Flag for Subscription Notice
The code contains a feature flag 'tengu_switch_to_subscription_notice_shown' which logs an event when a notice is shown to users about switching to an existing subscription. This feature is not publicly documented.

### Subscription Notice Display Limit
The code enforces a limit of 3 ('MAX_SHOW_COUNT') on how many times a subscription notice can be shown to a user. This limit is not mentioned in public documentation.

### Hidden Command for Plugin Updates
The code contains a hidden command '/reload-plugins' to apply updates after plugins have been auto-updated. This command is not documented publicly.

### NPM Deprecation Warning with High Priority
The system issues a high-priority warning if it detects an npm installation, urging users to switch to a native installer. The warning has a timeout of 15000ms.

### Dynamic Priority for Install Messages
Install messages are dynamically assigned priorities based on their type. Errors and user-required actions are labeled 'high', while 'path' and 'alias' types are 'medium'.

### Model Migration Notifications Use 3s Timestamp
The `useModelMigrationNotifications` function only shows notifications if a model migration timestamp is within the last 3 seconds. This is controlled by the `recent` function.

### Legacy Opus Migration Notification
The `useModelMigrationNotifications` function includes a notification for legacy Opus migrations, with a specific message and timeout of 8000ms if `CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP` is not set.

### BASH_CLASSIFIER Feature Flag
The source code includes a feature flag named 'BASH_CLASSIFIER', which is used to determine if a source type should be labeled as 'classifier'. This indicates a hidden feature related to classifying Bash commands.

### Custom Prefix Functions in TreeSelect
TreeSelect component allows custom prefix functions for parent and child nodes, enabling tailored display of hierarchical data. This customization is not highlighted in public documentation.

### Hidden Feature: 'Gates' Tab in Settings
The Settings component includes a 'Gates' tab, which is not publicly documented. This tab has its own escape handling logic, suggesting it may control access to experimental or restricted features.

### Secret Feature Flag: Bridge
The code contains a feature flag `isBridgeEnabled` that is not publicly documented. This suggests there may be an internal or experimental feature called 'Bridge' that is being conditionally enabled.

### Auto-Updater Disabled Reason Function
The function `getAutoUpdaterDisabledReason` is used to determine why the auto-updater might be disabled, which is not a publicly documented behavior.

### Session ID Tracking in Diagnostics
The `buildPrimarySection` function includes tracking of `Session ID` and `Session name`, which suggests detailed session tracking for diagnostics purposes.

### LSP Recommendation Auto-Dismiss Timer
The LSP Recommendation Menu automatically dismisses after 30 seconds, counting as a 'no' response. This behavior is not typically documented, potentially leading to unexpected user experiences.

### Rainbow Text Animation Phase Offset
The RainbowText component uses a phase offset to cycle the rainbow gradient along the text on each animation frame, creating a sweeping color effect rather than static colors.

### Smooth Count Animation for Incremental Updates
The useSmoothCount function incrementally updates a count towards a target, displaying intermediate values (e.g., 2→3→4→5) instead of snapping directly, unless 'snap' is set.

### Color Coding for Task Status Text
The 'TaskStatusText' function uses color coding for different task statuses: 'completed' is 'success', 'failed' is 'error', and 'killed' is 'warning'. This specific color scheme is not mentioned in public documentation.

### Hidden Teammate View Feature Flag
The code contains hidden feature flags related to a 'teammate view', specifically functions like `enterTeammateView` and `exitTeammateView`. This suggests an internal feature for viewing or managing tasks in a collaborative environment that is not publicly documented.

### Dream Detail Dialog Turn Limit
The DreamDetailDialog component has a hardcoded limit of 6 visible turns, with earlier turns collapsing into a count. This design decision affects how much historical task data is immediately visible to users.

### Task Status Icons and Colors
The task status icons and colors are determined by specific conditions. For example, a task with 'hasError' returns a cross icon and 'error' color, while 'awaitingApproval' returns a question mark and 'warning' color. These mappings are not detailed in public documentation.

### Shell Detail Dialog Tail Bytes Limit
The ShellDetailDialog component reads only the last 8192 bytes of a task output file, as defined by the constant SHELL_DETAIL_TAIL_BYTES. This limit may affect the visibility of longer outputs in the UI.

### Background Task Activity Limit
The BackgroundTask component defaults to an activity limit of 40 characters for task descriptions or commands, which is used to truncate text for display purposes.

### UserPlanMessage Border Color
The 'UserPlanMessage' component uses a specific border color 'planMode' for its box, which might not be customizable or documented.

### Teammate Message Parsing Regex
The code uses a specific regex pattern to parse teammate messages from XML format. The regex pattern captures 'teammate_id', 'color', and 'summary' attributes, allowing for multiple messages in a single block.

### TEAMMEM Feature Flag
The code references a feature flag 'TEAMMEM' to conditionally import modules related to team member functionality. This suggests hidden or experimental features related to team management.

### API Error Retry Timeout
The SystemAPIErrorMessage component includes a retry mechanism with a hidden retry timeout environment variable 'API_TIMEOUT_MS'. This suggests that users can configure the retry timeout, which is not mentioned in the public documentation.

### Resource Update Parsing from XML
The UserResourceUpdateMessage component parses resource and polling updates from XML format using specific regex patterns. This parsing logic is not detailed in public documentation, indicating a more complex internal handling of updates.

### API Error Message Character Limit
The 'AssistantTextMessage' component enforces a maximum character limit of 1000 for API error messages. This limit is not mentioned in public documentation.

### EXPERIMENTAL_SKILL_SEARCH Feature Flag
The code uses a feature flag 'EXPERIMENTAL_SKILL_SEARCH' to determine if the environment is a demo. This flag is checked at compile-time, suggesting it controls experimental features not publicly documented.

### Teammate Mailbox Filters Hidden Messages
The 'teammate_mailbox' attachment type filters out 'idle_notification' and 'teammate_terminated' messages before counting, which means these messages are hidden from the UI but not documented as such.

### Rate Limit Tier 'default_claude_max_20x'
The rate limit tier 'default_claude_max_20x' is used to determine if a user is at the maximum rate limit, which is not publicly documented. This impacts how upsell messages are shown to users.

### Skill Format in User Commands
The UserCommandMessage component checks for a 'skill-format' tag in text to determine if a command should be displayed as a skill. This is a non-obvious feature not mentioned in public documentation.

### Invisible Attachments Avoid Render Cap
Certain attachment types are rendered as `null` and filtered out before the 200-message render cap. This prevents invisible entries from consuming the render budget, allowing more visible messages to be displayed.

### Channel Message Truncation Limit
UserChannelMessage truncates message content to a width of 60 characters. This ensures consistent display across different interfaces.

### Dangerous Settings Extraction Logic
The code identifies 'dangerous' settings by checking if environment variables are not in a predefined SAFE_ENV_VARS list. This means any env var not explicitly marked as safe is considered dangerous.

### ExpandShellOutputContext Auto-Expands Shell Output
The ExpandShellOutputContext is used to automatically expand the most recent user `!` command output, showing it in full rather than truncated. This behavior is not publicly documented.

### Debounced Digit Input for Surveys
The useDebouncedDigitInput function delays digit input by 400ms to prevent accidental submissions. This is longer than typical debounce times, indicating a focus on preventing user errors.

### Default Feedback Survey Configuration
The default configuration for feedback surveys includes a minimum time of 600,000ms (10 minutes) before showing feedback, and a 0.5% probability of displaying the survey. This configuration is defined under 'DEFAULT_FEEDBACK_SURVEY_CONFIG'.

### Transcript Ask Configuration Probability
The 'DEFAULT_TRANSCRIPT_ASK_CONFIG' sets the probability of asking for transcript sharing to 0%, suggesting this feature may be disabled or in testing phases.

### Feedback Response Mapping with Specific Codes
The feedback system maps specific numeric inputs to responses ('0' for 'dismissed', '1' for 'bad', '2' for 'fine', '3' for 'good'), which may not be intuitive for all users.

### Tracking Feedback with Appearance IDs
The system generates a unique 'appearanceId' for each survey session using 'randomUUID', allowing precise tracking of user interactions and feedback sessions.

### Data Retention Extended to 5 Years
The code indicates an extension of data retention to 5 years for improving AI models and safety protections. This is a significant increase from typical data retention policies and could have privacy implications.

### Future Terms Update Scheduled for 2025
The code includes a notice about an update to Consumer Terms and Privacy Policy scheduled to take effect on October 8, 2025. This forward-looking update is not commonly disclosed in advance.

### ModelSelector Default Model 'sonnet'
The ModelSelector component defaults to a model named 'sonnet' if no initial model is provided. This default is not mentioned in public documentation, indicating a potential internal standard or testing model.

### Hidden File Display Limit
The `DiffFileList` component has a hardcoded limit of `MAX_VISIBLE_FILES = 5`, which restricts the number of files shown at once. This limit is not documented publicly and could affect users handling large diffs.

### DiffDetailView Line Rendering Limit
The `DiffDetailView` component has a hardcoded limit of rendering a maximum of 400 lines due to parsing limits. This constraint is not mentioned in public documentation and could affect users dealing with large diffs.

### Resolving Spinner Isolates Re-renders
The ResolvingSpinner component in ElicitationDialog.tsx owns its own 80ms animation timer to re-render only the spinner glyph, not the entire form. This design choice optimizes performance but is not mentioned in public documentation.

### MCP Server Reconnect Behavior Differs from Docs
The MCP server reconnect logic includes a hidden retry mechanism not documented publicly. If a reconnect attempt fails, it silently retries up to 3 times before surfacing an error to the user.

### Hidden Scope Order in MCPListPanel
The MCPListPanel component defines a hidden constant SCOPE_ORDER that dictates the display order of configuration scopes: ['project', 'local', 'user', 'enterprise']. This order is not publicly documented.

### Dynamic Scope Label in MCPListPanel
The 'dynamic' scope in MCPListPanel is labeled as 'Built-in MCPs' and is always available, which is not mentioned in the public documentation.

### TeammateSpinnerTree Early Return Sentinel
TeammateSpinnerTree uses a Symbol.for('react.early_return_sentinel') to handle early returns, which is an unusual pattern not typically seen in React components.

### Message Preview Line Limit in TeammateSpinnerLine
The getMessagePreview function in TeammateSpinnerLine limits the preview to the last 3 lines of content, which is a specific design choice not documented publicly.

### Special Character Set for 'xterm-ghostty'
The code uses a special set of characters ['·', '✢', '✳', '✶', '✻', '*'] for the terminal environment 'xterm-ghostty', replacing '✽' with '*' due to rendering issues.

### Inlined Thinking Shimmer Constants
The THINKING_INACTIVE color is set to { r: 153, g: 153, b: 153 } and THINKING_INACTIVE_SHIMMER to { r: 185, g: 185, b: 185 }. These were previously in a separate component but are now inlined to reduce redundant subscribers.

### Reduced Motion Cycle Timing
The `REDUCED_MOTION_CYCLE_MS` is set to 2000 milliseconds, indicating a 2-second cycle for reduced motion animations, with 1 second visible and 1 second dimmed.

### Error Red RGB Values
The `ERROR_RED` color is defined with specific RGB values: r: 171, g: 43, b: 63. This precise color choice might reflect specific branding or design guidelines.

### Dynamic Require for Dead Code Elimination
Components not exported directly from `index.ts` are imported using dynamic `require()` to enable dead code elimination, as noted in the comments.

### Shimmer Animation Speed Variance
The shimmer animation speed in the Spinner component varies based on the mode. When in 'requesting' mode, the shimmer speed is 50ms, while in other modes it is 200ms. This affects how quickly the shimmer effect progresses across the message.

### Worker Badge Rendering Logic
The 'WorkerBadge' component uses a caching mechanism to optimize rendering by storing previous color and name values, which is not commonly documented.

### Shimmer Loading Text Uses Fixed Message
The ShimmerLoadingText component uses a hardcoded loading message 'Loading explanation…' which is animated using shimmer effects. This behavior is not configurable.

### Tengu Desktop Upsell Feature Flag
The 'tengu_desktop_upsell' feature flag controls the display of a desktop upsell dialog. It defaults to disabled with 'enable_shortcut_tip' and 'enable_startup_dialog' set to false.

### Desktop Upsell Dismissal Thresholds
The desktop upsell dialog is suppressed if the user has dismissed it or seen it 3 times. This threshold is not publicly documented.

### Hidden Auto-Allow Sandbox Mode
The code reveals a hidden 'auto-allow' mode for the sandbox feature, which is not documented publicly. This mode automatically allows certain bash commands when sandboxing is enabled.

### Internal Sandbox Dependency Checks
The code performs internal checks for dependencies like 'ripgrep', 'bubblewrap', and 'socat', which are not mentioned in public documentation. Missing dependencies trigger specific install hints.

### Managed Network Restrictions in Sandbox
The sandbox configuration includes managed network restrictions, allowing only specific hosts. This feature is controlled by 'shouldAllowManagedSandboxDomainsOnly'.

### Use of Deprecated Settings Function
The code uses a function named getSettings_DEPRECATED to retrieve settings, indicating reliance on outdated code paths.

### Hidden Feature Flag: CLAUDE_CODE_SYNTAX_HIGHLIGHT
The color-diff module can be disabled via the environment variable CLAUDE_CODE_SYNTAX_HIGHLIGHT. This is not documented publicly and acts as a hidden feature flag to control syntax highlighting.

### StructuredDiffFallback Change Threshold
The StructuredDiffFallback component uses a specific threshold of 0.4 to decide whether to show a full-line diff instead of word-level diffing. This means if the changes exceed 40% of the line, the component opts for a full-line diff.

### Team Status Excludes 'team-lead'
The `TeamStatus` component filters out teammates with the name 'team-lead'. This behavior is not documented and could lead to unexpected results when counting teammates.

### Internal Command Detection with IT2_COMMAND
The code uses `IT2_COMMAND` and `TMUX_COMMAND` to detect specific environments. This suggests internal logic for adapting behavior based on the terminal environment, which is not publicly documented.

### MCP Skills Source Revealed
The SkillsMenu component includes a hidden source type 'mcp' for skills, which is not documented publicly. MCP skills are identified by server names and not by the 'mcp__<server>__…' format.

### OptionMap Navigation Links
The OptionMap class maintains a linked list structure for options, allowing navigation with 'previous' and 'next' pointers. This design choice facilitates efficient traversal of options.

### Internal Codename 'TENGU' Found in Source
The source code contains references to an internal codename 'TENGU', which appears to be related to feature flags or experimental features. This codename is not mentioned in any public documentation.

### Focus Navigation Wraps Around Options
The focus navigation logic in the select component wraps around when reaching the end or beginning of the options list. This behavior is not explicitly documented in public resources.

### Default Visible Option Count is 5
The default number of visible options in the multi-select component is set to 5, which may affect user interface design and usability.

### Hidden Editor Shortcut in Multi-Select
The SelectMulti component has a hidden feature where pressing 'ctrl+g' opens an external editor for editing input option values. This is not documented in public-facing materials.

### Hidden Image Paste Feature
SelectMulti supports a hidden feature allowing users to paste images directly as base64 strings, which is not publicly documented.

### Hidden Navigation Control in SelectMulti
SelectMulti includes hidden callbacks for controlling navigation behavior when pressing up from the first item or down from the last item, preventing wrap-around.

### Shimmer Animation Cycle Length Calculation
The shimmer effect in `HighlightedInput` calculates its cycle length as `hi - lo + 20`, where `lo` and `hi` are the minimum and maximum positions of highlights with shimmer colors. This specific calculation is not documented.

### Conditional Import for COORDINATOR_MODE
The code conditionally imports the 'coordinatorMode.js' module only if the 'COORDINATOR_MODE' feature flag is enabled. This suggests a hidden feature related to coordination that is not always active.

### Queue Hint Display Threshold
The system shows a queue hint message up to 3 times if the user hasn't seen it yet. This threshold is controlled by 'NUM_TIMES_QUEUE_HINT_SHOWN'.

### Fast Icon Hint Display Duration
The hint for the fast icon is displayed for 5000 milliseconds (5 seconds) once per session. This is defined by 'HINT_DISPLAY_DURATION_MS'.

### Task Notification Limit Set to 3
The `processQueuedCommands` function caps task notifications at 3 visible lines. Any additional notifications are summarized in a synthetic overflow message, indicating a design choice to prevent notification overload.

### Idle Notifications Silently Processed
Idle notifications in the command queue are filtered out and processed silently, meaning users are not aware of these background processes. This differs from typical notification handling.

### Footer Temporary Status Timeout
The footer temporary status timeout is set to 5000 milliseconds (5 seconds). This specific duration controls how long temporary status messages are displayed in the UI.

### Companion Reserved Columns
The 'companionReservedColumns' variable is used to manage UI layout, indicating a reserved space for companion features. This affects how content is displayed and may not be documented.

### Surprising Animation Timing: Processing Shimmer
The ProcessingShimmer component uses a 50ms animation frame interval unless reduced motion is preferred, which is not typical for web animations that often use 16.67ms (60fps).

### Default Visible Count in FuzzyPicker
The FuzzyPicker component has a default visible count of 8 items, with a minimum of 2, which may affect user experience in different terminal sizes.

### Tabs Component Initial Focus Behavior
The `Tabs` component has an `initialHeaderFocused` prop that defaults to true, ensuring the header is focused and navigation always works. This is contrary to typical behavior where content focus is more common.

### Divider Component Default Character
The `Divider` component uses the Unicode character '─' (U+2500) as the default line character, which may not be expected by developers assuming ASCII characters.

### Pane Component Color Theme
The `Pane` component allows a color theme for the top border line, which is used across all slash-command screens like /config and /help. This consistent theming might not be documented.

### AUTO_THEME Feature Flag for Dynamic Themes
The 'AUTO_THEME' feature flag enables dynamic theme changes based on terminal settings. This is controlled by the 'feature()' function, which allows the system theme to be updated live when 'auto' is active.

### Progress Bar Caching Mechanism
The ProgressBar component uses a caching mechanism to store previously calculated segments and colors. This is done using an array '$' to avoid recalculating segments unless necessary, optimizing rendering.

### Default Theme Set to 'Dark'
The default theme for the ThemeProvider is set to 'dark', ensuring that the application has a consistent look even without a provider. This decision impacts the initial user experience.

### StatusIcon Uses 'suggestion' Color for Info
In the StatusIcon component, the 'info' status uses the color 'suggestion', which is not a typical color name and may lead to confusion if not documented.

### Ratchet Component's Unexpected Lock Behavior
The Ratchet component defaults its lock behavior to 'always' if not explicitly set. This means it will always engage unless specified otherwise, potentially leading to unexpected UI locking.

### Dynamic Feed Width Calculation
The Feed component dynamically calculates its width based on the title, lines, and optional content. This ensures the UI adapts to various content sizes, which is not explicitly documented.

### Use of 'claude' Color in Text
The Feed component uses a custom color 'claude' for rendering text, which is not a standard color name in CSS or React, indicating a custom styling choice unique to this codebase.

### Tengu Overage Credit Upsell Feature
The 'Tengu' overage credit upsell feature is limited to a maximum of 3 impressions per user. It uses a backend check for eligibility and logs events with the 'tengu_overage_credit_upsell_shown' identifier.

### Animated Asterisk Animation Duration
The 'AnimatedAsterisk' component has a total animation duration of 3000 milliseconds, calculated from a sweep duration of 1500 milliseconds repeated twice.

### Voice Mode Notice Display Limit
The VoiceModeNotice component is designed to show a maximum of 3 times, controlled by the MAX_SHOW_COUNT constant. This limit is not publicly documented.

### Clawd Animation Frame Rate
The Clawd animation uses a frame rate of 60ms per frame, which is not documented in public resources. This precise timing affects the smoothness of animations.

### Channels Notice Flag Behavior
The ChannelsNotice component uses a flag to determine if development channels should be loaded, with options like '--dangerously-load-development-channels'. This behavior is not publicly documented.

### Secret ANT-ONLY What's New Feed
The `createWhatsNewFeed` function contains a hidden feature for 'ANT-ONLY' users, displaying the latest Claude Code commits. This feature is gated by a condition checking if 'external' equals 'ant'.

### Opus1m Merge Notice Display Limit
The `shouldShowOpus1mMergeNotice` function limits the display of the Opus1m merge notice to a maximum of 6 times. This is controlled by the `MAX_SHOW_COUNT` constant set to 6.

### Clawd Pose Fallback for Apple Terminal
In the `Clawd` component, arm poses fall back to the default pose when used in Apple Terminal due to a background fill trick. Only eye poses are supported in this terminal.

### Tengu Guest Passes Upsell Tracking
The code tracks the display of a 'Guest Passes Upsell' using the event 'tengu_guest_passes_upsell_shown'. This indicates internal tracking of user engagement with upsell features.

### Apple Terminal Specific Welcome Message
The WelcomeV2 component renders a specific welcome message for users on Apple Terminal, which is not documented in public resources.

### Guest Passes Upsell Display Threshold
The Guest Passes Upsell is shown only if the user has seen it less than 3 times and hasn't visited the passes page, indicating a threshold for upsell display.

### Bash Classifier-Reviewed Option is ANT-ONLY
The classifier-reviewed option for Bash is restricted to internal use only, marked as ANT-ONLY. This means it's not available in public deployments.

### Session Persistence Control Mechanism
The code includes a mechanism to disable session persistence using 'isSessionPersistenceDisabled', which is not publicly documented. This could impact how user sessions are managed internally.

### PreviewBox Default Dimensions
The PreviewBox component has a default minimum width of 40 and a default maximum number of lines set to 20. These defaults are used unless overridden by props.

### Secret 'tengu_plan_enter' Event in Plan Mode
The code includes a secret event 'tengu_plan_enter' that logs when entering a special 'plan mode'. This mode allows Claude to explore the codebase and design an implementation strategy without making changes until approval.

### PLAN_REJECTION_PREFIX Handling
The code handles messages starting with 'PLAN_REJECTION_PREFIX' by extracting and displaying the plan content. This behavior is not detailed in public documentation.

### Secret Transport Feature Flags Discovered
The source code reveals two secret environment variables, `CLAUDE_CODE_USE_CCR_V2` and `CLAUDE_CODE_POST_FOR_SESSION_INGRESS_V2`, which toggle between different transport mechanisms. These flags are not publicly documented and determine whether SSETransport or HybridTransport is used.

### WebSocket Sleep Detection Mechanism
The WebSocketTransport class includes a sleep detection mechanism that resets the reconnection budget if the system sleeps. This is triggered if the gap between reconnection attempts exceeds 60 seconds, which is double the max reconnect delay.

### Permanent WebSocket Close Codes
Certain WebSocket close codes (1002, 4001, 4003) are treated as permanent rejections by the server, causing the transport to transition to 'closed' immediately without retrying. This behavior is not documented in public resources.

### Backpressure Mechanism in SerialBatchEventUploader
The SerialBatchEventUploader employs a backpressure mechanism where the enqueue() function blocks when maxQueueSize is reached, preventing further events from being added until space is available. This ensures that the system does not become overwhelmed with pending events.

### RetryableError Overrides Exponential Backoff
The RetryableError class allows the uploader to wait for a server-supplied duration before retrying, overriding the default exponential backoff. This is clamped to a range and jittered to prevent hot-looping or stalling.

### POST Timeout in HybridTransport
The HybridTransport sets a POST timeout of 15,000ms to prevent a single stuck POST from blocking the serialized queue, ensuring that network issues do not stall all writes.

### Grace Period for Queued Writes on Close
The HybridTransport provides a 3-second grace period for queued writes on close, which exceeds the 2-second cleanup budget but allows for additional time to complete writes under degraded network conditions.

### SSE Reconnection Timeout Set to 10 Minutes
The SSETransport.ts file sets a reconnection timeout of 10 minutes (600,000 ms) for reconnect attempts before giving up. This is longer than typical reconnection strategies, which could lead to prolonged downtime in case of persistent connection issues.

### SSE Liveness Timeout Set to 45 Seconds
The SSETransport.ts file treats the connection as dead after 45 seconds of silence, which is three times the server's keepalive interval of 15 seconds. This setting balances between responsiveness and avoiding premature disconnections.

### POST Retry Strategy with 10 Retries
The POST retry strategy in SSETransport allows for a maximum of 10 retries with delays starting at 500 ms and capping at 8000 ms. This aggressive retry strategy could lead to increased server load under failure conditions.

### MCP Server Connection Batch Size
The function 'getMcpServerConnectionBatchSize' suggests that there is a specific batch size configuration for MCP server connections, which is not publicly documented. This could imply a limit on how many connections are handled simultaneously.

### Zod Error Formatting Function
The `formatZodError` function in `validation.ts` converts Zod validation errors into a human-readable format, including extracting the field path and error message.

### Internal Write Tracking Mechanism
The `internalWrites.ts` file implements a mechanism to track timestamps of in-process settings-file writes, allowing the system to ignore its own echoes during file change detection.

### MCP Error Aggregation in Settings
The `getSettingsWithAllErrors` function aggregates settings validation errors with MCP configuration errors to avoid a circular dependency. This is done by moving MCP error aggregation to a separate module, `allErrors.ts`, which acts as a leaf node in the dependency graph.

### Plugin Settings Base Layer
The `pluginSettingsBase` acts as a base layer for the settings cascade, written by the pluginLoader and read as the lowest-priority base during settings loading. This allows plugins to define default settings that can be overridden by higher-priority sources.

### Internal Write Window Timing
A 5000ms window is used to consider file changes as internal, preventing notifications for changes made by Claude Code itself. This timing is not publicly disclosed.

### MDM Settings Poll Interval
Claude Code polls MDM settings every 30 minutes due to the inability to watch these changes via filesystem events. This interval is not mentioned in public documentation.

### Ant-only Managed Settings Path Override
The managed settings path can be overridden for testing or demos using the environment variable CLAUDE_CODE_MANAGED_SETTINGS_PATH, but only if USER_TYPE is set to 'ant'. This feature is eliminated from external builds.

### Strict Plugin-Only Customization Policy
The strictPluginOnlyCustomization policy can lock customization surfaces to plugin-only sources, skipping user and project-level settings. Managed and plugin-provided sources always load, as they are admin-controlled.

### Admin-Trusted Sources Bypass Restrictions
Sources like 'plugin', 'policySettings', and 'built-in' are considered admin-trusted and bypass the strictPluginOnlyCustomization policy, allowing them to load even when user-controlled sources are blocked.

### Teammate Command Environment Variable
The system uses the TEAMMATE_COMMAND_ENV_VAR environment variable to determine the command for spawning teammate processes, defaulting to the current process executable path if not set.

### Hidden Pane IDs in Team Files
The TeamFile type includes a hiddenPaneIds field, which stores pane IDs hidden from the UI. This feature is not documented publicly.

### In-Process Teammate Spawning
Claude Code supports in-process teammate spawning using AsyncLocalStorage for context isolation, differing from the documented process-based teammates.

### Teammate Model Fallback to Opus 4.6
The default model for new teammates is hardcoded to Opus 4.6 unless specified, ensuring consistency across different API providers.

### Hidden Session Name for Claude
The code defines a constant `HIDDEN_SESSION_NAME` set to 'claude-hidden', which is not mentioned in public documentation. This suggests there might be a session type or feature not publicly disclosed.

### Plan Mode Required Feature Flag
The environment variable `CLAUDE_CODE_PLAN_MODE_REQUIRED` forces teammates to enter a plan mode and get approval before writing code. This feature is not publicly documented and indicates a controlled development process.

### Swarm Socket Isolation with PIDs
Swarm operations are isolated from user's tmux sessions by using a separate socket named with the process ID (`claude-swarm-${process.pid}`). This ensures multiple Claude instances don't conflict.

### Backend Detection for Pane Management
The system automatically selects the appropriate backend (tmux or iTerm2) for creating teammate panes based on the environment, which is not explicitly documented.

### Swarm Reconnection Uses CLI Args for Context
Swarm reconnection initializes team context using CLI arguments set in main.tsx, bypassing useEffect workarounds. This approach is efficient but not widely known.

### Compact Boundary Messages in System
The system handles 'compact boundary' messages, which are not mentioned in public documentation. These messages compact conversations and include metadata like 'preserved_segment'.

### Force-Disable Plugins via Org Policy
The `isPluginBlockedByPolicy` function checks if a plugin is force-disabled by organizational policy through the `managed-settings.json` file. This prevents users from installing or enabling certain plugins, acting as a single source of truth across various operations.

### Skill.md Stops Directory Scanning
When the `walkPluginMarkdown` function encounters a SKILL.md file in a directory, it stops scanning subdirectories. This behavior treats skill directories as leaf containers, only processing .md files within that directory.

### .lsp.json File Optional for LSP Config
The .lsp.json file in a plugin directory is optional for loading LSP server configurations. If it doesn't exist, the system ignores it without error, focusing on manifest.lspServers field instead.

### Marketplace Input Parsing Handles Azure DevOps Uniquely
The `parseMarketplaceInput` function treats Azure DevOps URLs differently by recognizing '/_git/' in the path and avoiding appending '.git', which would break the URL. This is not documented publicly.

### Plugin Settings Priority in Add-Dir Directories
The `getAddDirEnabledPlugins` and `getAddDirExtraMarketplaces` functions process `settings.local.json` after `settings.json` within each directory, giving local settings higher priority. This priority rule is not mentioned in public documentation.

### Seed Marketplaces for Plugin Installation
The code uses a feature called 'seed marketplaces' to pre-register plugin sources, preventing unnecessary cloning. This is controlled by the environment variable CLAUDE_CODE_PLUGIN_SEED_DIR.

### Layered Plugin Reload Mechanism
Claude uses a three-layer model for plugin management, with Layer 3 handling active components. This layer is refreshed via commands like /reload-plugins and auto-refreshes after marketplace installs.

### Auto-Update Behavior for Official Marketplaces
Official marketplaces like 'knowledge-work-plugins' are intentionally excluded from the default auto-update behavior, as specified in `NO_AUTO_UPDATE_OFFICIAL_MARKETPLACES`.

### Blocked Name Pattern for Marketplace Impersonation
A regex pattern blocks marketplace names that impersonate official Anthropic/Claude marketplaces, focusing on combinations of 'official', 'anthropic', and 'claude'.

### Hidden Feature Flag 'tengu_lapis_finch'
The feature flag 'tengu_lapis_finch' is used to control the recording of plugin hints. It is checked before any hint recording logic is executed, suggesting it might be related to an experimental or limited release feature.

### Official Marketplace Retry Configuration
The retry logic for installing the official marketplace uses a maximum of 10 attempts, with an initial delay of 1 hour and a backoff multiplier of 2. The maximum delay is capped at 1 week.

### Max Shown Plugins Limit
The system has a hard cap of 100 plugins for 'claudeCodeHints.plugin[]', beyond which no more plugins are shown or appended to the list. This is intended to prevent unbounded growth of the configuration.

### Inline Marketplace Sentinel
The 'inline' marketplace is a synthetic sentinel used for plugins loaded via '--plugin-dir'. It is not a real marketplace, and dependencies from these plugins do not inherit it.

### Telemetry Added Due to GitHub Complaint
Telemetry for plugin fetches was added because GitHub complained about load from 'claude-plugins-official'. This telemetry helps track network volume and catch regressions before GitHub raises issues again.

### Plugin Version Calculation Prioritization
Plugin versions are determined by prioritizing the version in 'plugin.json', followed by a provided version, then a Git commit SHA, and finally 'unknown'. This hierarchy ensures accurate versioning for updates and caching.

### LSP Recommendation Ignore Limit
The LSP plugin recommendation system stops showing recommendations after a user ignores them 5 times. This limit is not publicly documented and could affect user experience for those who frequently dismiss suggestions.

### LSP Detection Limited to Inline Configs
The LSP plugin recommendation utility can only detect plugins with inline server configurations in the marketplace entry. This limitation is not documented and could lead to missed recommendations for plugins using separate .lsp.json files.

### Plugin Discovery Order and Precedence
The plugin loader prioritizes marketplace-based plugins over session-only plugins. This means plugins specified in the 'plugin@marketplace' format in settings will override those loaded via the '--plugin-dir' CLI flag.

### Output Style Namespacing with Plugin Names
Output styles are namespaced with the plugin name to avoid conflicts, ensuring that styles from different plugins do not clash.

### Managed Plugins Policy Behavior
The function `getManagedPluginNames` only protects plugins with a boolean entry in the format 'plugin@marketplace'. Legacy formats are not protected.

### MCPB User Configuration Requirement
MCPB files that require user configuration are skipped during server loading. Users must configure them via the plugin menu.

### Session-only 'flag' Plugin Scope
The 'flag' plugin scope is session-only and not persisted to installed_plugins.json, unlike other scopes. This is not publicly documented.

### Plugin Identifier Parsing Ignores Extra '@'
The parsePluginIdentifier function only uses the first '@' as a separator, ignoring any additional '@' symbols in the input.

### Seen Expiry Threshold for Flagged Plugins
Flagged plugins have a 'seen' expiry threshold of 48 hours, after which they may be re-flagged if not dismissed by the user.

### Hidden Cowork Plugin Directory Switch
The source code reveals a hidden feature allowing users to switch between 'plugins' and 'cowork_plugins' directories using a CLI flag '--cowork' or the environment variable 'CLAUDE_CODE_USE_COWORK_PLUGINS'. This is not documented publicly.

### Layered Plugin Seed Directories
Multiple plugin seed directories can be layered using the platform path delimiter, allowing for a PATH-like precedence order. This feature is not widely known or documented.

### Plugin Autoupdate Race Condition Handling
The plugin autoupdate system has a mechanism to handle race conditions where updates complete before the REPL mounts. It stores pending updates and delivers them immediately once a callback is registered.

### PowerShell Snap Detection on Linux
On Linux, if PowerShell is installed via snap, the system bypasses it due to potential hang-ups, preferring direct binaries from apt/rpm installations instead.

### CLAUDE_CODE_SHELL_PREFIX Environment Variable
The `CLAUDE_CODE_SHELL_PREFIX` environment variable allows the shell wrapper to use a different shell than the specified `shellPath`, executing commands for both bash and zsh when set. This is not documented publicly and could lead to unexpected behavior if the environment variable is set without the user's knowledge.

### Fig Spec Depth Rules for CLI Commands
Depth rules for CLI commands like `gcloud` and `aws` are hardcoded to ensure accurate command prefix extraction. This is not publicly documented, affecting how command arguments are parsed.

### Sandbox Tmpdir Handling in PowerShell
When sandboxed, the tmpdir() is not writable, so the sandbox only allows writes to sandboxTmpDir. This affects Linux/macOS/WSL2, but not Windows native where sandbox is never enabled.

### Secret Feature Flag: CCR_BYOC_BETA
The code contains a secret feature flag 'CCR_BYOC_BETA' set to become active on '2025-07-29'. This suggests a planned feature related to 'BYOC' (Bring Your Own Cloud) that is not publicly documented.

### Undocumented Environment Kind: 'bridge'
The source code defines an environment kind 'bridge', which is not mentioned in public documentation. This suggests an internal or experimental environment type that may have specific use cases.

### Teleport API Retry Delays Revealed
The Teleport API uses exponential backoff for retries with specific delays: 2000ms, 4000ms, 8000ms, and 16000ms. This configuration is not publicly documented and affects how the system handles network errors.

### Hidden Feature Flag for Git Bundle Size Limit
The source code contains a hidden feature flag 'tengu_ccr_bundle_max_bytes' that allows tuning the maximum size of a Git bundle. The default limit is set to 100 MB, which is not documented publicly.

### Fallback Storage Mechanism for Secure Storage
The system uses a fallback storage mechanism that prioritizes primary storage but falls back to secondary storage if primary fails. This ensures data persistence even if the primary storage encounters issues.

### Secret Feature Flag: tengu_copper_bridge
The source code reveals a hidden feature flag 'tengu_copper_bridge' used to enable a 'bridge' feature for certain users. This feature is enabled for 'ant' users or when the flag is set, allowing a WebSocket connection to a bridge server, otherwise defaulting to native messaging.

### Conditional Logging for 'ant' Users
Logging for the Chrome Native Host is conditionally enabled based on the 'USER_TYPE' environment variable. Only 'ant' users have logs written to a specific file path, suggesting targeted debugging or monitoring for these users.

### 1MB Max Message Size Limit
The Chrome Native Host implementation has a maximum message size limit of 1MB for communications with Chrome. This constraint is crucial for developers to consider when designing features that rely on data exchange with the extension.

### Dynamic Chrome Bridge URL Resolution
The Chrome bridge URL is dynamically resolved based on environment variables and feature flags, allowing flexibility between local, staging, and production environments. This indicates a sophisticated deployment strategy for testing and production.

### Tengu Chrome Auto-Enable Feature Flag
The feature flag 'tengu_chrome_auto_enable' is used to automatically enable Claude in Chrome for certain users. This flag is checked alongside the user's type being 'ant' to determine if auto-enable should occur.

### Internal Extension ID for Anthropic Employees
The code includes a special Chrome extension ID 'dngcpimnedloihjnnfngkgjoidhnaolf' used exclusively for Anthropic employees, identified by the user type 'ant'.

### Native Host Identifier for Chrome Extension
The native host identifier 'com.anthropic.claude_code_browser_extension' is used to facilitate communication between the Claude Chrome extension and the host application.

### Chrome Extension Reconnect URL
The URL 'https://clau.de/chrome/reconnect' is used for reconnecting the Claude Chrome extension, suggesting a dedicated endpoint for managing extension connectivity.

### Secret Chrome Extension URL Base
The Chrome extension uses a secret base URL 'https://clau.de/chrome/tab/' for focusing tabs, which is not publicly documented.

### Haiku Date/Time Parsing System
The 'Haiku' system is used internally to parse natural language date/time inputs into ISO 8601 format, preferring future dates over past ones.

### Lenient Settings Parser for Appending Rules
The function `getSettingsForSourceLenient_FOR_EDITING_ONLY_NOT_FOR_READING` bypasses schema validation to append new rules, preserving existing settings even if unrelated fields fail validation. This leniency is explicitly discouraged for execution purposes.

### Sandbox Auto-Allow for Bash Commands
The 'DetectUnreachableRulesOptions' type includes a 'sandboxAutoAllowEnabled' option, which when true, allows sandboxed Bash commands to bypass personal ask rules, potentially auto-allowing them.

### Tengu Auto Mode Circuit Breaker
The 'tengu_auto_mode_config.enabled' flag can disable auto mode via a circuit breaker mechanism. When set to 'disabled', it prevents SDK or explicit re-entry after being kicked out.

### Ant-Only Dangerous Patterns in Bash
Certain dangerous patterns in Bash, like 'fa run' and 'coo', are restricted to 'ant' users only. These patterns are based on internal sandbox data and are not available to external users.

### Risk Level Numeric Mapping for Analytics
Risk levels ('LOW', 'MEDIUM', 'HIGH') are mapped to numeric values (1, 2, 3) for analytics purposes. This mapping suggests a quantitative approach to risk assessment in internal analytics.

### MAX_DIRS_TO_LIST Limit in Directory Formatting
The function formatDirectoryList limits the number of directories listed to 5. This design decision could impact how directory information is presented in logs or user interfaces.

### Snapshot Creation Timeout
The snapshot creation process has a timeout set to 10 seconds. This specific timeout value might affect performance under certain conditions, especially if the process takes longer than expected.

### Shell Completion Timeout
Shell completion operations have a timeout of 1000 milliseconds. This short timeout might lead to incomplete suggestions if the system is under heavy load.

### Max Shell Completions Limit
The maximum number of shell completions is limited to 15. This cap might restrict the user experience by not showing all possible completions in scenarios with a large number of options.

### Random Salt for Placeholder Strings
The `generatePlaceholders` function creates placeholder strings with a random 8-byte salt to prevent injection attacks. This salt ensures that malicious commands cannot contain literal placeholder strings that would be replaced during parsing.

### AST-Based Bash Command Analysis
The bash command analysis uses AST-based parsing with tree-sitter, replacing previous methods. It walks the tree with an explicit allowlist of node types, ensuring only recognized structures are processed.

### Secret Feature Flags for Tree-Sitter Bash
The source code reveals secret feature flags 'TREE_SITTER_BASH' and 'TREE_SITTER_BASH_SHADOW' used to gate the new Tree-Sitter-based Bash parser. These flags are intended for internal use and testing, as indicated by comments suggesting they are 'ant-only until pentest'.

### Tengu Tree-Sitter Load Event
A specific event 'tengu_tree_sitter_load' is logged to track the loading status of the Tree-Sitter Bash parser. This event is only fired when a load is genuinely attempted, ensuring telemetry accuracy.

### Deprecated Regex Command Parsing
The `RegexParsedCommand_DEPRECATED` class is a legacy implementation for parsing commands using regex and shell-quote, only used when the tree-sitter parser is unavailable. This suggests a fallback mechanism that may not be as robust or secure.

### Unique Heredoc Placeholder Salt
The heredoc extraction utility generates a unique placeholder salt using 8 random bytes to prevent collisions in command texts. This ensures that heredoc placeholders are distinct even if the command text contains similar patterns.

### Handling Shell Quote Bugs in Bash Commands
The code includes specific handling for shell quote bugs, such as treating '\' inside single quotes as an escape, which bash treats as a literal backslash followed by a closing quote. This can expose operators when bash re-parses the command.

### Command Prefix Recursion Limits
The function `getCommandPrefixStatic` limits recursion depth to 10 and wrapper count to 2 when resolving command prefixes. This prevents excessive recursion and potential stack overflow.

### Todo Schema Validation with Zod
The Todo schema uses Zod for validation, enforcing non-empty content and active form fields. This ensures data integrity for todo items.

### PowerShell Static Prefix Extraction
The PowerShell static prefix extraction uses an AST parser instead of tree-sitter, unlike bash. It avoids suggesting commands with path-like invocations or those in the NEVER_SUGGEST list.

### Internal Dangerous Cmdlets List
The code maintains an internal list of dangerous PowerShell cmdlets that execute arbitrary code, such as 'invoke-command' and 'start-job', to prevent suggestion and execution without user consent.

### Strict Zip Validation Limits
The zip validation process enforces strict limits: max file size is 512MB, max total size is 1024MB, max file count is 100,000, and compression ratio limits are set between 0.5:1 and 50:1 to prevent zip bombs.

### 7-Day Lock Stale Timeout
The native installer uses a 7-day (604800000 ms) lock stale timeout to manage process locks, allowing cleanup of abandoned locks from crashed processes.

### Tengu PID-Based Version Locking
The PID-based version locking feature is controlled by a GrowthBook gate named 'tengu_pid_based_version_locking'. This feature can be force-enabled or disabled via the environment variable ENABLE_PID_BASED_VERSION_LOCKING.

### Mise and Asdf Installation Detection
Claude detects installations via 'mise' and 'asdf' by checking if the executable path is within specific directory patterns. This detection is used for logging and potentially altering behavior based on the installation method.

### Fallback Stale Timeout Reduced to 2 Hours
The fallback stale timeout for PID-based locking is set to 2 hours, significantly shorter than the previous 30-day timeout. This change accommodates edge cases like network filesystems where PID checks might fail.

### Fallback Terminal Bundle ID Mapping
The code includes a fallback map for terminal bundle IDs on macOS, excluding Linux terminals. This suggests a focus on macOS compatibility for the CLI executor.

### 1ms Interval for RunLoop Drain
The `drainRunLoop` function uses a 1ms interval to call `_drainMainRunLoop` while any main-queue-dependent call is pending. This is unusually frequent and could have performance implications.

### 30,000ms Timeout for Native Calls
The `drainRunLoop` function sets a timeout of 30,000ms for native calls. This specific timeout value indicates a balance between responsiveness and allowing enough time for complex operations.

### No Degraded Mode for CU Host Adapter
The `getComputerUseHostAdapter` function does not support a degraded mode. If native modules fail to load, the system throws an error, indicating a reliance on these modules for full functionality.

### Unhide Timeout Design Decision
The unhide operation for apps is designed with a generous timeout of 5000ms (5 seconds), which is longer than expected for an operation that should be 'instant'. This suggests a design choice prioritizing proceeding over waiting if issues arise.

### Ant Bypass for Subscription Checks
The system allows 'ant' users to bypass subscription checks, enabling them to access features regardless of their subscription tier. This is part of Anthropic's internal dogfooding strategy.

### Critical Apps Always Included
A set of critical apps is always included in Claude's automation, bypassing path checks. This includes browsers, communication, productivity, and development apps, ensuring functionality even with many installed apps.

### MacOS-Only Computer Use Swift Module
The '@ant/computer-use-swift' module is exclusively for macOS, throwing an error if used on other platforms. This module involves native methods that require macOS-specific handling.

### File Change Stability Threshold
The file watcher uses a stability threshold of 500ms for write finishes, which may impact how quickly changes are detected.

### Project Skill Detection Logic
The system detects project-related skills by checking if a skill's path starts with 'projectSettings:'. This specific prefix is used to identify project skills.

### 5GB Task Output Limit
Task output files have a maximum size limit of 5GB. This is a significant amount of data, suggesting tasks can generate very large outputs without being truncated.

### Session ID in Task Output Directory
Task output directories include a session ID to prevent concurrent sessions from clobbering each other's output files. This design choice ensures isolation and integrity of session data.

### Task Output Length Limits and Truncation
The code sets a default maximum task output length of 32,000 characters, with an upper limit of 160,000 characters. Outputs exceeding this limit are truncated and include a header with the file path.

### Default Model Selection Based on User Type
The default model selection varies based on user type, with specific models for 'ant' users and Claude AI subscribers, and pricing details for PAYG users.

### Bedrock Client Defaults to 'us-east-1'
The Bedrock client defaults to the 'us-east-1' region if neither 'AWS_REGION' nor 'AWS_DEFAULT_REGION' environment variables are set. This behavior is not documented publicly and ensures that queries are consistent with the client's region.

### Extra Usage Enabled Logic Revealed
The function 'isExtraUsageEnabled' determines if extra usage is enabled based on specific 'OverageDisabledReason' values. Surprisingly, 'out_of_credits' still counts as enabled, suggesting nuanced internal logic.

### Secret Tengu Ant Model Configuration
The code contains a secret feature flag 'tengu_ant_model_override' for configuring 'Ant' models, which are only accessible to users with 'ant' user type. This configuration is hidden from external builds by adding codenames to 'scripts/excluded-strings.txt'.

### Model Capability Overrides for Third-Party Models
Anthropic uses environment variables like 'ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES' to override capabilities for third-party models. This is only applicable when the API provider is not 'firstParty'.

### API Provider Selection Logic
The API provider is determined by environment variables, defaulting to 'firstParty'. The options include 'bedrock', 'vertex', and 'foundry', which are selected based on specific environment variables like 'CLAUDE_CODE_USE_BEDROCK'.

### Model Alias Wildcards in Allowlist
Model family aliases like 'opus' act as wildcards in the allowlist, permitting any version of the model family. This allows flexibility in model versioning without explicit listing.

### Undocumented Model Upgrade Path
The `getAvailableUpgrade` function suggests an upgrade path for models like 'opus' and 'sonnet' to 'Opus 1M' and 'Sonnet 1M', respectively, with a 5x context multiplier. This feature is not publicly documented.

### ANTHROPIC_CUSTOM_MODEL_OPTION Environment Variable
The `validateModel` function checks if a model matches the `ANTHROPIC_CUSTOM_MODEL_OPTION` environment variable, allowing pre-validated custom models. This environment variable is not mentioned in public documentation.

### Model Allowlist Checks
The `modelAllowlist.ts` file contains complex logic for checking if a model belongs to a family or matches a version-prefix entry. This includes resolving aliases and checking segment boundaries, which is more intricate than publicly described.

### Claude Model Deprecation Dates Revealed
The code reveals specific deprecation dates for Claude models, such as 'Claude 3 Opus' retiring on January 5, 2026 for most providers. These dates are not publicly documented.

### Secret Model Configurations for Claude
The source code contains internal constants for model configurations like 'CLAUDE_3_7_SONNET_CONFIG', revealing specific naming patterns and deployment versions not publicly disclosed.

### Eligibility Criteria for Model Capabilities
Model capabilities are only accessible if 'USER_TYPE' is 'ant' and the API provider is 'firstParty', indicating a restricted access policy not publicly detailed.

### Tengu File Persistence Feature Flag
The code references a feature flag 'tengu_file_persistence_started' for logging events related to file persistence. This suggests an internal feature named 'Tengu' related to file handling.

### Bedrock Model Strings Fallback Mechanism
The system uses a fallback mechanism for Bedrock model strings, defaulting to hardcoded IDs when no matching profile is found. This behavior is not publicly documented.

### Environment Kind Detection via CLAUDE_CODE_ENVIRONMENT_KIND
The code uses the environment variable 'CLAUDE_CODE_ENVIRONMENT_KIND' to determine the environment type ('byoc' or 'anthropic_cloud'). This variable is not publicly documented.

### File Persistence Only in BYOC Mode
File persistence is only executed in 'byoc' mode, as determined by 'CLAUDE_CODE_ENVIRONMENT_KIND'. This restricts file handling to specific environments.

### Ultraplan Polling Interval and Failure Handling
The polling interval for Ultraplan's CCR session is set to 3000ms, with a maximum of 5 consecutive failures allowed before termination. This means a session can make approximately 600 calls in a 30-minute period.

### Skill Usage Debounce Mechanism
The skill usage tracking system uses a debounce mechanism with a 60-second threshold to avoid excessive file I/O operations, ensuring efficient performance while updating skill usage data.

### Slack Channel Name Parsing Logic
Slack channel names are parsed from markdown lines formatted as 'Name: #channel-name'. This specific format is crucial for correct parsing.

### Tengu Skill Loaded Event Logging
The code logs a 'tengu_skill_loaded' event for each skill available at session startup. This is part of an internal analytics system to track skill availability across sessions.

### Command Search Fuse Threshold
The command search uses a Fuse.js threshold of 0.3, indicating a relatively strict matching criterion for command suggestions.

### Use Polling Workaround for Bun Deadlock
Due to a deadlock issue in Bun's native fs.watch(), the code uses stat() polling as a workaround, avoiding FSWatcher deadlocks.

### Enhanced Telemetry Beta Feature Flag
The source code reveals a feature flag 'ENHANCED_TELEMETRY_BETA' that enables enhanced telemetry for Claude Code using OpenTelemetry. This feature is not publicly documented.

### Span Time-To-Live Set to 30 Minutes
The session tracing module sets a time-to-live (TTL) for spans at 30 minutes, which is not publicly documented. This indicates a design decision to limit the lifespan of telemetry data.

### BigQuery Metrics Exporter Endpoint Logic
The BigQueryMetricsExporter class uses a default endpoint 'https://api.anthropic.com/api/claude_code/metrics' unless overridden by an environment variable for 'ant' users, indicating a special internal configuration.

### Twin-Column Privacy Pattern for Plugin Telemetry
The telemetry system uses a twin-column privacy pattern where each user-defined name field emits both a raw and a redacted value. The redacted value is 'third-party' unless the marketplace is allowlisted.

### Fixed Salt for Plugin ID Hashing
A fixed salt 'claude-plugin-telemetry-v1' is used for hashing plugin IDs, allowing cross-org distinct-counts but potentially exposing hash reversibility.

### Perfetto Tracing is Ant-Only Feature
Perfetto tracing is an internal-only feature for Claude Code, generating traces in Chrome Trace Event format, and is not available in external builds.

### Telemetry Timeout Values Revealed
Telemetry timeouts are set with specific intervals: metrics export every 60000ms, logs every 5000ms, and traces every 5000ms.

### Beta Tracing Enabled via Tengu Lantern
Beta session tracing for Claude Code is enabled for external users only if their organization is allowlisted via the 'tengu_trace_lantern' GrowthBook gate. This feature is automatically enabled for internal 'ant' users in all modes.

### Thinking Output Hidden from External Users
In the beta session tracing module, 'thinking output' is only visible to internal 'ant' users, while it is hidden from external users. This suggests a deliberate decision to restrict access to certain internal processing details.

### Stale Fetch Warning in Deep Link Banner
The deep link banner warns users if the last fetch of a repo was more than 7 days ago, indicating potential staleness of the CLAUDE.md file. This is controlled by a threshold of 7 days (604800000 milliseconds).

### Content Size Limit for Tracing
The maximum content size for beta detailed tracing is set to 60KB, slightly below the Honeycomb limit of 64KB, to ensure safety.

### Terminal Preference Capture for Deep Links
Claude captures the user's terminal preference from the TERM_PROGRAM environment variable on macOS to ensure the correct terminal is used for deep link handling. This avoids falling back to a static list that may not reflect user preferences.

### Claude CLI Custom URI Scheme
The Claude Code source includes a custom URI scheme 'claude-cli://' that registers with the OS to handle specific links. This feature is not publicly documented and allows invoking Claude with specific commands directly from a browser or other apps.

### macOS Terminal Preference Detection
Claude Code detects the user's preferred terminal emulator on macOS by checking running processes and installed .app bundles, prioritizing iTerm2, Ghostty, Kitty, Alacritty, and WezTerm over the default Terminal.app.

### Deep Link URI Handler for Claude CLI
The Claude CLI includes a hidden feature to handle deep link URIs using the 'claude-cli://' scheme. This feature allows the OS to invoke Claude with specific actions parsed from the URI, opening a new terminal window with the appropriate arguments.

### Global Gitignore Path Resolution
The code reveals that Claude resolves the global gitignore path to '.config/git/ignore' in the user's home directory, which might not be commonly documented.

### Internal Bash Command Specs
The codebase includes internal command specifications for bash commands like 'srun' for SLURM clusters, which are not commonly documented in public-facing materials.

### Escape Sequences in Git Config Parsing
The parser handles escape sequences in subsection names and values, such as backslashes and quotes, which is a nuanced detail not widely covered.

### Teammate Mode Snapshot Behavior
The `teammateModeSnapshot` module captures the teammate mode at session startup, ensuring runtime config changes don't affect the current session. A CLI override can set the mode before capture, taking precedence over config. If `initialTeammateMode` is null, it defaults to 'auto'.

### Python Package Manager Detection Order
The system detects Python package managers in the order of 'uvx', 'pipx', and 'pip'. The preference for 'uvx' suggests a focus on isolated environments. If none are found, it logs a debug message and returns null.

### PaneBackendExecutor for Teammate Execution
The `PaneBackendExecutor` adapts pane-based backends like tmux and iTerm2 to the `TeammateExecutor` interface. It manages operations such as spawning teammates, sending messages, and terminating sessions.

### Pane Shell Initialization Delay
The code specifies a 200ms delay after pane creation to allow shell initialization, which is considered sufficient even for slower configurations like starship/oh-my-zsh.

### iTerm2 Session ID Parsing
The code includes a function to parse session IDs from iTerm2's `it2` CLI output, highlighting a reliance on specific output formats for functionality.

### Tmux Detection Relies Solely on Environment Variables
The detection of whether a session is inside tmux relies solely on the TMUX environment variable captured at module load time, avoiding any subprocess checks like `tmux display-message`.

### In-Process Fallback Activation Flag
The `inProcessFallbackActive` flag tracks if the system has fallen back to in-process mode due to the absence of pane backends like iTerm2 or tmux.

### MDM Subprocess Timeout Set to 5000ms
The MDM subprocess timeout is set to 5000 milliseconds, which could impact performance if the subprocess takes longer than expected. This specific timeout value is not typically disclosed in public documentation and could affect how quickly settings are applied or updated.

### Priority Order for macOS Plist Paths
The code defines a priority order for macOS plist paths, with per-user managed preferences taking precedence over device-level preferences. This priority order is not typically highlighted in public documentation, and it affects which settings are applied when multiple plist files are present.

### Ant-Only User Preferences for macOS
The code allows user-writable preferences for local MDM testing only when the environment variable USER_TYPE is set to 'ant'. This is a hidden feature flag that enables specific testing configurations not available to regular users.

### Tengu CCR Bundle Seed Feature Flag
The code contains a feature flag 'tengu_ccr_bundle_seed_enabled' that controls whether bundle seeding is enabled for remote sessions. This flag allows sessions to proceed without a GitHub remote if a local git repository is present.

### Secret Feature Flag: Claude Code Remote
The source code reveals a hidden feature flag 'is_claude_code_remote' which indicates whether Claude Code is running in a remote environment. This flag is not mentioned in public documentation.

### Undocumented Flag: Claude Code Action
The code includes an undocumented flag 'is_claude_code_action' which suggests specific functionality when Claude Code is used as an action, potentially in CI/CD pipelines.

### Hidden Flag: Claude Code Conductor Mode
A hidden flag 'is_conductor' suggests a special mode for Claude Code, possibly indicating a coordination or orchestration role within a larger system.

### Secret Flag: Claubbit Mode in Claude Code
The source code contains a mysterious flag 'is_claubbit', with no public explanation, possibly indicating a special operational mode or integration.

### Shell-Agnostic Git Operation Tracking
The system tracks git operations like 'git commit', 'git push', and GitHub PR actions using regexes that work identically across Bash and PowerShell. This allows for consistent usage metrics and analytics events.

### Hidden Feature Flag: UDS_INBOX
The source code reveals a hidden feature flag 'UDS_INBOX' that enables sending messages to local peers via Unix Domain Sockets (UDS). This feature is not documented publicly and allows communication with local Claude sessions using socket paths.

### Durable Cron Task Feature Flag
The 'tengu_kairos_cron_durable' flag controls whether cron tasks are disk-persistent. By default, this is set to 'true', ensuring tasks survive restarts unless explicitly disabled.

### Cron Job Limit Set to 50
The maximum number of cron jobs allowed is capped at 50. This limit is enforced to manage system resources and prevent overload.

### GrowthBook Kill Switch for Cron
The GrowthBook gate acts as a fleet-wide kill switch for the cron scheduler. Setting it to 'false' stops running schedulers on their next poll tick, not just new ones.

### Max Progress Messages Limited to Three
The UI component limits the display of progress messages to a maximum of three, a constraint not mentioned in public documentation.

### PowerShell Edition-Specific Syntax Guidance
The code provides syntax guidance based on PowerShell edition, highlighting differences like the absence of pipeline chain operators in Windows PowerShell 5.1, which can cause parser errors.

### PowerShell Read-Only Command Validation Details
The PowerShell read-only command validation uses a case-insensitive approach for cmdlet matching and includes a set of DOTNET_READ_ONLY_FLAGS like '--version' and '--info'. It also has a shared callback for cmdlets that print or coerce their arguments to stdout/stderr, with specific checks for element types and colon-bound parameter values.

### PowerShell Command Display Limits
The UI for displaying PowerShell commands truncates output to a maximum of 2 lines or 160 characters. This could lead to incomplete command visibility in verbose mode.

### Voice Mode Gated by GrowthBook
The 'voiceEnabled' setting is registered at build-time but is gated by GrowthBook at runtime. This means it can be dynamically disabled via a feature flag, even if it appears in the code.

### Model Options Fallback to Defaults
If fetching model options fails, the system defaults to a predefined list: 'sonnet', 'opus', 'haiku'. This ensures continuity even if dynamic fetching fails.

### Ctrl+O to Expand Feature
The UI component 'CtrlOToExpand' suggests a hidden feature where pressing Ctrl+O might expand certain UI elements, though it's not documented.

### Symbol Context Read Limit
The symbol context extraction function reads only the first 64KB of a file, which may miss symbols located beyond this window.

### Image Processor Fallback to Sharp
When in bundled mode, the system attempts to use a native image processor module. If unavailable, it falls back to using 'sharp', which is always used for image creation.

### KAIROS_BRIEF Refresh Interval
The KAIROS_BRIEF feature has a refresh interval set to 5 minutes (300,000 milliseconds), which controls how often certain internal processes are updated.

### Dynamic Import in BRIDGE_MODE
The code uses a dynamic import for upload.ts within a feature('BRIDGE_MODE') guard to ensure that unnecessary modules (like axios, crypto) are tree-shaken from builds where BRIDGE_MODE is not enabled.

### Hidden Background Task Parameter
The 'run_in_background' parameter allows commands to run without immediate result checking, which is not publicly documented. This feature is disabled if the environment variable 'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS' is set.

### Accept Edits Mode Auto-Allows Filesystem Commands
In 'acceptEdits' mode, certain filesystem commands like 'mkdir', 'rm', and 'mv' are automatically allowed without further checks. This behavior is not publicly documented.

### Tengu Sandbox Feature Flag for Command Exclusion
The 'tengu_sandbox_disabled_commands' feature flag is used to dynamically configure disabled commands and substrings for certain users identified as 'ant'. This feature flag allows bypassing certain commands from the sandbox environment, which is not documented publicly.

### Sed Command Parser with BRE to ERE Conversion
The sedEditParser.ts file includes a parser for sed edit commands that uses BRE to ERE conversion placeholders like '\x00BACKSLASH\x00'. This conversion is not documented and uses null-byte sentinels to handle regex conversions internally.

### Teleport API for Remote Session Management
The code uses a 'fetchSession' function from the 'teleport/api.js' module, indicating reliance on a 'teleport' API for managing remote sessions. This API is not mentioned in public documentation.

### DreamTask Keeps Only 30 Recent Turns
The DreamTask feature in Claude's codebase only retains the 30 most recent turns for live display. This is controlled by the constant `MAX_TURNS = 30`.

### LocalShellTask Stall Check Every 5 Seconds
The LocalShellTask checks for stalls every 5 seconds (`STALL_CHECK_INTERVAL_MS = 5_000`) and considers a task stalled if no output growth is detected for 45 seconds (`STALL_THRESHOLD_MS = 45_000`).

### Alternate Screen Buffer Behavior in Terminal
The `AlternateScreen` component enters the terminal's alternate screen buffer (DEC 1049), clears it, and homes the cursor. It constrains its height to the terminal row count, requiring overflow handling via `overflow: scroll` or flexbox. On unmount, it disables mouse tracking and exits the alt screen, restoring the main screen's content. This behavior is not commonly documented.

### Yoga Layout Node Usage in Layout Engine
The layout engine uses `YogaLayoutNode` to manage layout calculations. It maps internal layout properties to Yoga's API, such as `EDGE_MAP` and `GUTTER_MAP`. This internal usage of Yoga for layout management is not typically exposed in public documentation.

### Default Terminal Size in AlternateScreen
The `AlternateScreen` component defaults to a terminal size of 24 rows if the size context is not provided. This default value is a design decision that might not be obvious to developers.

### 5s Timeout for Terminal Mode Re-assert
The code sets a 5000ms (5 seconds) timeout for stdin silence, after which a terminal mode re-assert is triggered. This is used to handle scenarios like tmux detach→attach, ssh reconnect, and laptop wake where the terminal resets DEC private modes but no signal reaches the application.

### Hidden Clock Interval for Blurred Focus
The code defines a hidden clock interval, `BLURRED_TICK_INTERVAL_MS`, which is set to double the `FRAME_INTERVAL_MS` when the terminal is not focused. This behavior is not documented publicly.

### RawAnsi Bypasses React Tree for Performance
The RawAnsi component bypasses the React tree and Yoga layout to directly output ANSI-escaped, width-wrapped content. This avoids the costly re-parsing and layout process, improving performance for terminal-ready content.

### Deterministic Scroll in ScrollBox
The ScrollBox component uses a deterministic approach to scrolling by deferring position reads to render time. This is achieved through the `scrollToElement` method, which reads `el.yogaNode.getComputedTop()` during the same Yoga pass that computes scrollHeight, ensuring consistency.

### InternalStdinContext with Secret Flags
The `StdinContext` includes internal flags like `internal_exitOnCtrlC` and `internal_eventEmitter` not exposed in public APIs. These flags control behavior such as exiting on Ctrl+C and managing events internally.

### ErrorOverview Uses Synchronous File System Calls
The `ErrorOverview` component uses synchronous `readFileSync` calls to read source files for error context. This could block the main thread, affecting performance in environments where async operations are preferred.

### NoSelect Component's fromLeftEdge Feature
The `NoSelect` component has a `fromLeftEdge` prop that extends the exclusion zone for text selection. This is used to prevent selection of leading indents in multi-line drags, ensuring clean copy-paste of code.

### CursorDeclarationContext's Conditional Clear Feature
The `CursorDeclarationContext` allows conditional clearing of cursor declarations using a `clearIfNode` argument. This prevents focus issues when sibling components transfer focus, ensuring layout-effect order doesn't cause conflicts.

### Focus Event Bubbling in Terminal
Focus events in the terminal environment bubble similarly to React's focusin/focusout semantics, allowing parent components to observe descendant focus changes.

### Unlimited Max Listeners in EventEmitter
The custom EventEmitter in Claude's code disables the default maxListeners warning, allowing unlimited listeners. This is crucial in React environments where many components might listen to the same event.

### Event Propagation Control in Terminal Events
Terminal events have DOM-style propagation control with methods like `stopPropagation()` and `preventDefault()`, mirroring browser event APIs. This is not commonly expected in terminal environments.

### Event Priority Mapping Mirrors React-Dom
The event dispatcher maps terminal event types to React scheduling priorities, mirroring react-dom's getEventPriority() switch. This suggests a close integration or dependency on React's event handling system.

### DEC Private Mode Sequences Uncovered
The DEC private mode sequences include several undocumented modes such as SYNCHRONIZED_UPDATE (2026) and BRACKETED_PASTE (2004). These modes are used to control terminal behaviors like synchronized updates and paste handling.

### Grapheme Width Calculation Reveals Emoji Handling
The grapheme width calculation function considers emojis and East Asian wide characters as having a width of 2. This differs from typical character width assumptions and affects text layout in terminals.

### Hidden Mouse Tracking Modes in Terminals
The ENABLE_MOUSE_TRACKING constant combines multiple mouse tracking modes, including MOUSE_SGR (1006) for SGR format reporting, which is not commonly documented.

### Tmux Multiplexer Passthrough Handling
The code uses DCS passthrough to tunnel escape sequences through tmux and GNU screen. Tmux 3.3+ requires `allow-passthrough` to be enabled, otherwise sequences are silently dropped. This feature is not widely documented.

### Clipboard Path Detection Logic
The clipboard path logic uses specific environment variables to determine the method: 'native', 'tmux-buffer', or 'osc52'. It checks `SSH_CONNECTION` to gate `pbcopy` usage, which is not commonly known.

### OSC Sequence Terminator for Kitty
The code uses `ST` (ESC \) as the OSC sequence terminator for Kitty terminals to avoid beeps, while using `BEL` for others. This specific behavior is not documented publicly.

### Colon Separator Support in SGR Parser
The SGR parser supports both semicolon (;) and colon (:) separated parameters, which is not commonly documented. This allows for more flexibility in parsing SGR sequences.

### Extended Color Support in SGR Parser
The SGR parser can interpret extended color sequences using either 5 or 2 as the first subparameter. This allows for both indexed and RGB color specifications.

### Dark Mode Default Behavior
The Tailwind CSS configuration defaults to dark mode unless a `.light` class is present, contrary to the typical light mode default in many applications.

### Web Worker Support in Webpack
The Webpack configuration includes support for Web Workers, allowing `.worker.ts` and `.worker.js` files to be processed using `worker-loader`, which is not commonly enabled by default.

### MCP Server Mode: Claude Code as a Server
The 'mcp.ts' file indicates that Claude Code can operate in an MCP server mode, allowing it to act as a server for other processes. This mode is not mentioned in public documentation, suggesting it is an internal feature or under development.

### Massive Query Engine: 46K Lines of Code
The Query Engine, a core component of Claude Code, spans approximately 46,000 lines of code. This indicates a highly complex and potentially difficult-to-maintain system, reflecting the sophistication and breadth of its capabilities.

### Two Transport Generations for Bridge Protocol
The Bridge protocol supports two transport generations: v1 uses WebSocket and HTTP POST, while v2 uses SSE and CCRClient. Both are wrapped behind the 'ReplBridgeTransport' interface.

### Bun Bundle Shim Intercepts Imports
The 'bun-bundle-shim' plugin intercepts 'bun:bundle' imports and resolves them to a local shim, allowing the CLI to run without Bun's production bundler pass. This behavior is not documented publicly.

### Secret Feature Flag: CLAUDE_CODE_SRC_ROOT
The environment variable CLAUDE_CODE_SRC_ROOT is used internally to specify the source root directory for the Claude Code project, which is not mentioned in public documentation.

### Internal MCP Client/Server Testing Script
The script test-mcp.ts is used internally to test the MCP client/server roundtrip using a standalone mcp-server sub-project, which involves spawning a server and connecting a client to it.

### Hidden Command Flags and Aliases
The command system includes hidden commands and aliases not documented publicly. For example, commands can have a 'hidden' flag, making them invisible in standard help outputs. Additionally, some commands have aliases that are not disclosed, potentially providing alternative ways to invoke the same functionality.

### Policy Limits Stubbing for Development
In development, the policy limits service can be stubbed to simulate 'no limits', allowing unrestricted testing. This approach helps developers test features without hitting production limits.

### Chrome Extension Bridge Modes
There are references to `--claude-in-chrome-mcp` and `--chrome-native-host` modes in `src/entrypoints/cli.tsx`, suggesting potential Chrome extension integrations. These modes are not documented and appear to be deferred features.

### Undocumented MACRO Global Object
The codebase uses a global 'MACRO' object for inlining package details like version and feedback URL, which are normally handled by the bundler. This object is not mentioned in public documentation.

### Esbuild-Based Build System for Claude Code
Claude Code uses an esbuild-based build system to bundle the entire source tree, alias 'bun:bundle', inject the 'MACRO' global, and handle TSX/JSX. This differs from the original Bun's bundler setup.

### MCP Config File Location and Format
The MCP configuration file is expected to be located at `~/.claude/.mcp.json` or in the project root. It uses a JSON format to specify server details such as command, args, and env variables.

### MCP Client SDK Version Compatibility
The project uses `@modelcontextprotocol/sdk` version ^1.12.1, which must be compatible with the rest of the system to ensure smooth MCP operations.

### Feature Flag 'ABLATION_BASELINE' Always False
The feature flag 'ABLATION_BASELINE' is hardcoded to always return false, indicating a permanently disabled feature or experimental setup.

### Internal Codename: KAIROS
The codename 'KAIROS' is used internally within the Claude Code source. This suggests a project or module that is not publicly acknowledged, potentially indicating a significant feature or initiative.

### Dependence on Bun Runtime
Claude Code is dependent on the Bun runtime, specifically version 1.1.0 or higher, which is not a common choice compared to Node.js. This may affect portability and developer adoption.

### Custom Fork of Ink for Terminal UI
Claude Code uses a custom fork of Ink to render its terminal UI, embedded directly in the source. This choice allows for tailored modifications but requires maintaining a separate codebase from the main Ink project.

### Hidden Limits on History and Paste Content
The code sets a hidden limit of 100 history items and a maximum pasted content length of 1024 characters, which are not publicly documented. These constraints may affect how much data users can store and retrieve in history.

### Node.js Version Check in Setup
The setup process includes a check for Node.js versions below 18, outputting an error message if the version is insufficient. This requirement is stricter than typical Node.js version checks.

### Hidden Feature Flag: WORKFLOW_SCRIPTS
The codebase includes a hidden feature flag 'WORKFLOW_SCRIPTS' that conditionally loads the 'LocalWorkflowTask'. This feature is not publicly documented and suggests internal experimentation with workflow automation.

### Ink Theme Integration via ThemeProvider
The code wraps all Ink render calls with a ThemeProvider, ensuring consistent theming across components. This integration is not explicitly documented in public resources.

### Undocumented Task Type: 'dream'
The source code defines a 'dream' task type, which is not mentioned in public documentation. This task type is part of the TaskType enumeration, suggesting it has a specific role or functionality within the system.

### Hidden Feature Flag: 'anthropic-beta'
The code includes a hidden feature flag 'anthropic-beta' with the value 'ccr-byoc-2025-07-29'. This suggests a beta feature or testing environment that is not publicly disclosed.

### Project Onboarding Seen Count Threshold
The system stops showing project onboarding after it has been seen 4 times, or if the project is marked as a demo. This threshold is not publicly documented.

### Session History Fetch Timeout
Fetching session history pages has a timeout set to 15,000 milliseconds (15 seconds), which may impact performance under certain network conditions.

### Operator Find Stores Last Find Character
The executeOperatorFind function stores the last find character and type in the context using setLastFind. This behavior is not explicitly documented for users.

### Transition Context Supports Undo Functionality
The TransitionContext type includes an optional onUndo function, suggesting internal support for undo operations that is not publicly documented.

### Operator Context Includes Register Functions
The OperatorContext type includes getRegister and setRegister functions, indicating internal handling of Vim registers which may not be fully documented.

### CCR Upstream Proxy Fails Open on Errors
The CCR upstream proxy is designed to 'fail open,' meaning any error in its setup logs a warning and disables the proxy rather than breaking the session. This ensures that a broken proxy setup does not disrupt an otherwise functional session.

### NO_PROXY List Includes Anthropic Domains
The NO_PROXY list for the upstream proxy explicitly includes multiple forms of Anthropic domains to prevent interception. This is due to the MITM breaking non-Bun runtimes, as Python httpx/certifi doesn't trust the forged CA.

### WebSocket Relay Chunk Size Limit
The WebSocket relay for the CCR upstream proxy has a maximum chunk size of 512 KB. This is designed to accommodate potential large payloads like git-push without requiring a relay rewrite.

### Sidecar Ping Interval Set to 30 Seconds
The sidecar's idle timeout is 50 seconds, and the system is configured to send pings every 30 seconds to ensure the connection remains active. This interval is set well within the timeout to prevent unintended disconnections.

### Hidden Scroll Behavior in DOMElement
The `DOMElement` type includes a hidden scroll behavior where `pendingScrollDelta` is drained at `SCROLL_MAX_PER_FRAME` rows/frame, allowing for smoother scrolling animations. This is not documented publicly.

### Bidi Support Detection for Terminals
The code includes a mechanism to detect if a terminal supports bidirectional text rendering, specifically targeting Windows environments and VS Code's integrated terminal. This detection is based on environment variables like `WT_SESSION` and `TERM_PROGRAM`.

### WrapAnsi Fallback Mechanism
The `wrapAnsi` function uses a fallback mechanism where it defaults to using `wrapAnsiNpm` if `Bun.wrapAnsi` is not available, indicating a dual environment support strategy.

### Clamping Chalk Level for Tmux
The code clamps the Chalk color level to 2 when running inside Tmux, unless a specific environment variable (CLAUDE_CODE_TMUX_TRUECOLOR) is set. This ensures compatibility with Tmux's default behavior, which doesn't pass truecolor sequences unless configured.

### Ink Render Sync Preserves Microtask Boundary
The `wrappedRender` function in `src/ink/root.ts` preserves a microtask boundary that was previously provided by `await loadYoga()`. This ensures that the first render does not fire synchronously before async startup work settles, preventing issues like overwriting scrollback instead of appending below the logo.

### Ink Diff Optimizer Applies Multiple Rules
The `optimize` function in `src/ink/optimizer.ts` applies several rules to optimize terminal diffs, such as removing empty stdout patches, merging consecutive cursorMove patches, and deduping hyperlinks with the same URI. This reduces the number of patches written to the terminal, improving performance.

### LegacyRoot Used Instead of ConcurrentRoot
The code uses `LegacyRoot` for rendering, which processes all work synchronously, instead of `ConcurrentRoot` which allows for scheduling and prioritization. This choice can lead to performance issues in complex applications due to the lack of scheduling.

### Performance Logging Every 20 Calls
The system logs performance metrics every 20 calls, which might be too infrequent for high-throughput systems or too frequent for low-throughput ones, potentially impacting performance.

### FlushSyncWork Leak Across Roots
The comment mentions a `flushSyncWork` cross-root leak that grows at approximately 0.0003ms per call, which could become pathological in scenarios with upfront rendering of many elements.

### Terminal Queries Without Timeouts
The terminal querying system in `terminal-querier.ts` avoids timeouts by using a DA1 sentinel. If a query's response arrives before DA1, the terminal supports it; otherwise, it doesn't.

### Hardcoded Tab Expansion Interval
The `expandTabs` function uses a hardcoded tab interval of 8 columns, which aligns with the POSIX default but may not be suitable for all environments.

### Click-to-Focus Behavior in DispatchClick
The `dispatchClick` function includes a click-to-focus feature, where clicking an element focuses the closest focusable ancestor. This behavior is not commonly documented.

### Absolute Node Removal Flag in Rendering
The `absoluteNodeRemoved` flag is set when a pending clear is added for an absolute-positioned node, signaling the renderer to disable blit for the next frame. This prevents restoring pixels of removed nodes that may have painted over non-siblings.

### Deprecation of Non-TTY Output Support
Non-TTY output is no longer supported in the `renderPreviousOutput_DEPRECATED` method. This change reflects a shift towards TTY-only environments.

### Logging for Invalid Yoga Dimensions
When yoga dimensions are invalid, such as negative or infinite values, detailed logging is triggered to help diagnose the root cause. This is visible with the --debug flag.

### OSC 9;4 Progress Reporting Terminal Support
The function `isProgressReportingAvailable` checks for OSC 9;4 progress reporting support in terminals. Notably, Windows Terminal interprets OSC 9;4 as notifications, not progress. Supported terminals include ConEmu, Ghostty 1.2.0+, and iTerm2 3.6.6+.

### DEC 2026 Synchronized Output Terminal Support
The `isSynchronizedOutputSupported` function checks for DEC mode 2026 support, which prevents flicker during redraws. Modern terminals like iTerm.app, WezTerm, WarpTerminal, and others support this, but tmux does not.

### Hidden Terminal Support: Ghostty and Kitty
The terminal notification system supports lesser-known terminals like Ghostty and Kitty, which are not commonly documented. This includes specific notification methods for each terminal.

### Progress Reporting Thresholds and Terminal Support
Progress reporting in terminals is limited to specific versions: ConEmu, Ghostty 1.2.0+, and iTerm2 3.6.6+. This indicates a threshold for compatibility that developers must be aware of.

### Modern Windows Terminal Detection Logic
The code includes specific logic to detect modern Windows terminals using environment variables like WT_SESSION and TERM_PROGRAM, indicating a focus on compatibility with newer terminal features.

### Opus Model Migration Behavior Differs from Docs
The migration functions for Opus models silently remap legacy model strings to 'opus' and 'opus[1m]' without user intervention, which may differ from public documentation that suggests user action is needed.

### Tengu Auto Mode Reset for Default Offer
The migration 'resetAutoModeOptInForDefaultOffer' only runs when 'tengu_auto_mode_config.enabled' is set to 'enabled'. This affects ~40 users who reached the old dialog via Shift+Tab, ensuring they see the new 'make it my default mode' option.

### Sonnet 1M Users Pinned to Sonnet 4.5
Users with 'sonnet[1m]' are automatically migrated to 'sonnet-4-5-20250929[1m]' to preserve their model choice, as Sonnet 4.6 was offered to a different group.

### Opus Default Reset for Pro Users
Pro users on 'firstParty' are automatically migrated to 'Opus 4.5' unless they have a custom model setting. This is tracked by 'opusProMigrationComplete'.

### Fennec Model Aliases Migrated to Opus
Users with 'fennec' model aliases are migrated to 'Opus 4.6' equivalents. This affects userSettings only, ensuring idempotency without a completion flag.

### Background Main Session Task with Ctrl+B
The LocalMainSessionTask allows users to background a main session query by pressing Ctrl+B twice. This feature is not publicly documented and provides a way to continue queries in the background while clearing the UI for new inputs.

### Tengu Scratchpad Feature Gate
The code contains a feature gate 'tengu_scratch' that controls access to a scratchpad feature. This feature gate is checked using the Statsig service, indicating it may be an experimental or internal-only feature.

### Automatic Coordinator Mode Switching
The code automatically switches between 'coordinator' and 'normal' modes based on session data. If the current mode doesn't match the stored session mode, it flips the environment variable to ensure consistency, which could lead to unexpected behavior if not documented.

### Built-in Plugins with Conditional Availability
Built-in plugins can be conditionally available based on system capabilities, as indicated by the 'isAvailable' function. This means some plugins might be hidden from users if certain conditions aren't met.

### Bun:Bundle Feature Flags for Dead-Code Elimination
The 'bun:bundle' module provides feature flags that allow for dead-code elimination, meaning that disabled branches are completely removed at compile time. This can significantly affect the final build size and performance.

### Secret 'Coordinator' Session Mode
The code defines a hidden 'coordinator' session mode, distinct from the normal mode. This mode is not mentioned in public documentation.

### Lite Logs with Limited Data
The system supports 'lite' logs where messages are not loaded, indicated by the 'isLite' flag. This is not a publicly documented feature.

### Session Slug for Resuming Plans
Sessions have a 'slug' used for resuming plans, a feature not commonly known or documented.

### Mailbox Context Internal Use
The `MailboxProvider` uses a `Mailbox` instance to manage context, which is initialized with a unique sentinel value. This internal mechanism isn't publicly documented.

### Immediate Notifications Clear Current Timeout
The notification system clears any existing timeout when an 'immediate' priority notification is added, ensuring it is shown immediately. This behavior isn't documented publicly.

### Reservoir Sampling in Stats Store
The stats store uses reservoir sampling (Algorithm R) with a fixed reservoir size of 1024 to maintain a sample of observed values for histograms. This is not commonly disclosed.

### Modal Context Overrides Terminal Size
The modal context can override terminal size measurements, affecting how components calculate their visible content height. This can lead to unexpected UI behavior.

### Internal Channel Entry Dev Flag
The internal `ChannelEntry` type includes a `dev` flag that indicates entries loaded via `--dangerously-load-development-channels`. This flag is checked per-entry rather than session-wide, which is not publicly documented.

### macOS Reserved Shortcuts in Claude Code
Claude Code includes a list of macOS-specific shortcuts like 'cmd+c' and 'cmd+v' that are intercepted by the OS and cannot be used within the application.

### Tengu Bridge Polling Intervals
The polling intervals for the Tengu Bridge are controlled by the 'tengu_bridge_poll_interval_config' feature flag. The default polling interval when not at capacity is 2000ms, while at capacity it is 600,000ms (10 minutes). These intervals can be tuned independently for multisession bridges.

### Built-in Plugin Management System
Built-in plugins are managed through a registry and can be enabled or disabled by users via the '/plugin' UI. Plugin IDs are formatted as '{name}@builtin' to distinguish them from marketplace plugins. The system uses deprecated settings for user preferences.

### Bridge Mode Stub for Disabled Configurations
A stub implementation exists for when `BRIDGE_MODE` is disabled, ensuring that any bridge functionality references do not cause errors. This includes no-op implementations for bridge handles and loggers.

### Beta Header Set for Future Date 2025
A beta header `environments-2025-11-01` is set in the bridge API client, indicating preparations for future environment configurations or testing scenarios.

### CSE Shim Kill Switch via GrowthBook Gate
The CSE shim can be toggled using a kill switch injected via setCseShimGate(). This avoids static imports banned from the SDK bundle, defaulting to active unless explicitly registered.

### Secret Redaction Strategy in Debug Logs
Secrets in debug logs are redacted if they are shorter than 16 characters. Longer secrets are partially redacted, showing only the first 8 and last 4 characters.

### Debug Message Truncation Limit
Debug messages are truncated to a maximum of 2000 characters, with newlines collapsed to '\n'. This ensures logs remain concise and manageable.

### ReplBridgeTransport V2 Uses SSETransport and CCRClient
The ReplBridgeTransport abstraction in V2 uses SSETransport for reads and CCRClient for writes, diverging from the V1 setup which uses HybridTransport. This setup confines the v1/v2 choice to the construction site, indicating a significant internal architectural decision.

### Bridge Session Management with Secret Features
The Bridge UI includes a multi-session mode with a session count indicator and session-specific display info. The spawn mode can be 'same-dir' or 'worktree', and the session count is tracked with 'sessionActive' and 'sessionMax'.

### Bridge Supports Multiple Session Spawn Modes
Bridge can operate in different spawn modes: 'single-session', 'worktree', and 'same-dir'. Each mode dictates how session directories are managed, impacting isolation and persistence.

### Bridge Worker Type Filtering
Bridge uses a 'worker_type' field to filter sessions by origin, such as 'claude_code' and 'claude_code_assistant'. This allows the backend to manage session visibility based on context.

### Heartbeat Interval and Jitter in Bridge
The CCRClient worker heartbeat interval is set to 20,000 ms with a jitter fraction of 0.1. This design allows for load distribution across the fleet and ensures a 3x margin before server TTL of 60s.

### Connect Timeout Telemetry in Bridge
The 'connect_timeout_ms' is set to 15,000 ms, and if neither onConnect nor onClose fires before this, a 'tengu_bridge_repl_connect_timeout' event is emitted. This is the only telemetry for sessions that start but then go silent.

### Minimum Version and Upgrade Messaging
The 'min_version' for the env-less bridge is '0.0.0', and 'should_show_app_upgrade_message' is false, allowing flexibility in rolling out v2 features without blocking older clients.

### Shimmer Animation Interval Set to 150ms
The shimmer animation in the bridge status UI updates every 150 milliseconds. This specific interval might affect performance and user experience, especially in resource-constrained environments.

### Download Timeout for Inbound Attachments Set to 30 Seconds
The download timeout for resolving inbound attachments is set to 30 seconds. This could lead to failed downloads in slow network conditions, affecting message completeness.

### Default Backoff Configuration
The default backoff configuration for connections includes an initial delay of 2000ms, a cap of 120000ms, and a give-up time of 600000ms. This indicates a design choice to handle retries with increasing delays, allowing for a maximum of 10 minutes before giving up.

### WebSocket SDK URL Construction
The WebSocket SDK URL is constructed differently for localhost and production environments, using '/v2/' for localhost and '/v1/' for production. This distinction allows for direct session-ingress connections in development and Envoy rewrites in production.

### Capacity Wake Primitive for Bridge Poll Loops
The `capacityWake` module encapsulates a shared primitive for managing sleep and wake conditions in bridge poll loops, allowing early wake-ups when capacity frees up or shutdown signals are received. This was previously duplicated in `replBridge.ts` and `bridgeMain.ts`.

### Strict Poll Config Validation with Zod
Poll configuration uses Zod to enforce strict validation, rejecting configs with values below 100ms and ensuring at least one liveness mechanism is enabled. This prevents misconfigurations that could lead to excessive polling or disabled liveness checks.

### Future-Dated Beta Headers
The code lists several beta headers with future dates, such as 'claude-code-20250219' and 'interleaved-thinking-2025-05-14'. This suggests planned feature releases well into the future, indicating long-term strategic planning.

### Bedrock Extra Params for Betas
Certain beta headers are only supported through 'extraBodyParams' on Bedrock, not as headers. This includes 'interleaved-thinking-2025-05-14' and 'context-1m-2025-08-07', indicating a limitation in Bedrock's API.

### Session URL Shim for Compatibility
The function 'getRemoteSessionUrl' uses a compatibility shim to convert session IDs from 'cse_*' to 'session_*'. This indicates a temporary workaround for compatibility between different parts of the system.

### Customizable Spinner Verbs
Claude's spinner verbs, such as 'Accomplishing' and 'Beboppin'', can be customized through initial settings. If 'config.mode' is set to 'replace', custom verbs replace defaults, otherwise they are appended.

### Session Idle Timeout Configuration
The server configuration allows setting an 'idleTimeoutMs' for detached sessions, with 0 meaning sessions never expire. This flexibility can affect resource management and session persistence.

### Sprite Design Rules for Companion Characters
Companion character sprites are designed with specific rules: each sprite is 5 lines tall and 12 characters wide. The first line is reserved for hats, which can only be used in the third frame of animation.

### Companion Rarity Floor Values Revealed
The rarity floor values for companions are set at specific thresholds: common (5), uncommon (15), rare (25), epic (35), and legendary (50). These values determine the minimum stat levels for companions based on their rarity.

### Slow Operation Logging Thresholds
The threshold for logging slow operations is 20ms for development, 300ms for internal users ('ants'), and can be overridden by the CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS environment variable.

### Keep-Alive Gated by Environment Variable
The sending of keep-alives in session activity tracking is controlled by the environment variable `CLAUDE_CODE_REMOTE_SEND_KEEPALIVES`. This behavior is not documented publicly, suggesting an internal control mechanism for session management.

### Unicode Sanitization Max Iterations Limit
The Unicode sanitization function has a safety limit of 10 iterations to prevent infinite loops. If this limit is reached, the system will crash loudly, which is a safeguard against deeply nested Unicode strings.

### ANSI Slice Zero-Width Character Handling
The sliceAnsi function handles zero-width characters by advancing position based on display width, not code units. This ensures correct slicing of strings with zero-width combining marks.

### UTF-8 BOM Stripping in JSON Read
The stripBOM function is used to remove the UTF-8 BOM from JSON content, ensuring compatibility with environments like PowerShell 5.x that write UTF-8 with BOM by default.

### Bun Runtime Detection and Integration
The code includes functions to detect if it's running in a Bun environment, specifically checking for the presence of 'process.versions.bun' and 'Bun.embeddedFiles'. This indicates a deeper integration with the Bun runtime than publicly documented.

### Scheduler Lock Mechanism for Cron Tasks
Claude uses a lock file mechanism '.claude/scheduled_tasks.lock' to manage cron task scheduling across multiple sessions. The first session to acquire the lock becomes the scheduler, with others remaining passive.

### Extra Usage Billing Logic
The function `isBilledAsExtraUsage` determines extra usage billing based on model type and mode. Fast mode always incurs extra charges, while specific model names like 'opus-4-6' and 'sonnet-4-6' are checked for billing conditions.

### Sidechain Sessions Filtered in Session Parsing
The function `parseSessionInfoFromLite` filters out sessions marked as sidechain by checking for the string '"isSidechain":true' in the first line of the session data. This behavior is not documented publicly.

### Default Encoding for Empty Files is UTF-8
The function `detectEncodingForResolvedPath` defaults to 'utf8' for empty files to prevent corruption when writing emojis or CJK characters. This decision is not commonly highlighted.

### Session Pagination Uses Offset for Skipping
The `ListSessionsOptions` includes an `offset` parameter allowing pagination by skipping a specified number of sessions from the start. This is not typically detailed in public documentation.

### Diagnostics Timing Wrapper for Async Functions
The `withDiagnosticsTiming` function wraps async functions to log start, completion, and duration, aiding in performance monitoring and debugging.

### Paste Store Directory Timeout
The paste store uses a simple time-based cleanup mechanism to remove files older than a specified cutoff date. This approach could lead to unexpected data loss if not properly managed.

### Large Output Threshold in Notebooks
The code defines a 'LARGE_OUTPUT_THRESHOLD' of 10,000 characters for notebook outputs. Outputs exceeding this threshold are flagged as large, which may affect performance or display.

### Bun Integration for Command Resolution
The code includes a conditional check for the Bun runtime, using 'Bun.which' for command resolution if available. This allows for faster command path lookups without spawning a process, which is not documented in public resources.

### Error Log Flush Interval Set to 1000ms
The error log system flushes buffered log writers every 1000 milliseconds, which may impact performance depending on log volume.

### File History Snapshot Limit Set to 100
The file history feature is capped at 100 snapshots, after which older snapshots are evicted. This limit could affect users relying on extensive file versioning.

### Git Diff Max Lines Per File Set to 400
The git diff operation limits the number of lines per file to 400, which could truncate diffs for files with extensive changes.

### Editor Classification Quirk in Claude Code
The function `classifyGuiEditor` uses `basename` to classify editors, which prevents directory components from affecting classification. This means paths like `/home/alice/code/bin/nvim` won't mistakenly match 'code'.

### Asciicast Recording for 'Ant' Users
The asciicast recording feature is only available to users with USER_TYPE set to 'ant'. It records terminal sessions if CLAUDE_CODE_TERMINAL_RECORDING is enabled, saving recordings with a timestamped filename.

### Clipboard Copy Timeout on macOS and Linux
The `copyPngToClipboard` function sets a 5000ms timeout for clipboard operations on macOS and Linux, which might lead to failures if the system is slow.

### Custom Protocol for Desktop Deep Links
Claude uses a custom protocol 'claude' or 'claude-dev' for deep linking to resume CLI sessions in the desktop app. This feature is not widely advertised.

### Minimum Desktop Version 1.1.2396
The minimum required version for the Claude Desktop app is set to 1.1.2396. This specific version requirement is not publicly documented.

### Debug Filter Exclusivity Error Handling
The `parseDebugFilter` function treats mixed inclusive/exclusive filters as an error case, returning null silently without logging. This differs from typical error handling practices.

### Lite Read Buffer Size for Metadata
The buffer size for lite metadata reads is set to 65536 bytes, indicating a design decision for efficient data handling.

### MCP Server Integration Patterns Revealed
The codebase uses specific regex patterns to match MCP server names for integration, including patterns like /^claude[-_]?context$/i and /^gemini[-_]?code[-_]?assist$/i. This indicates a structured approach to server integration.

### Whimsical Adjectives for Slug Generation
The codebase includes a list of whimsical adjectives like 'floofy', 'purrfect', and 'zazzy' for generating random word slugs, reflecting a playful approach to naming conventions.

### Coordinator Mode: Env Check Instead of Module
In Coordinator Mode, the code uses an inline environment variable check instead of a module to avoid circular dependencies. This behavior is not documented and suggests a unique approach to managing dependencies.

### Tmux Control Mode: Sync Probe for Fullscreen
The code uses a synchronous probe to determine tmux control mode, which is critical for entering fullscreen. This sync approach prevents race conditions with React rendering, a detail not covered in public documentation.

### Claude Desktop Config Path: WSL and macOS Only
The code specifies that Claude Desktop integration is only supported on macOS and WSL, with specific file paths for configuration. This limitation is not widely known and could impact cross-platform compatibility.

### Low 1% FPS Calculation in FpsTracker
The FpsTracker class calculates the low 1% FPS by sorting frame durations and finding the 99th percentile frame time. This helps in identifying performance bottlenecks.

### Error Message Truncation at 10,000 Characters
The function `formatError` truncates error messages longer than 10,000 characters, showing the first and last 5,000 characters with a truncation notice in between. This behavior is not documented publicly.

### Bun WebSocket Support in Transport Layer
The `WebSocketTransport` class includes specific support for Bun's native WebSocket implementation, indicating that Claude Code is designed to run in environments using Bun, which is not commonly mentioned in public documentation.

### Runtime Debug Logging Toggle
Claude Code allows enabling debug logging mid-session using the `enableDebugLogging` function, which is not a feature commonly advertised.

### Session Environment Variables Limited to Child Processes
Session-scoped environment variables are only applied to spawned child processes, not the REPL process itself. This is managed via a bash provider for environment overrides.

### Generic XML Tag Stripping Pattern
A generic regex pattern is used to strip XML-like tags from text, avoiding the need for a growing allowlist. This pattern only matches lowercase tag names.

### Normalized Message Upper Bound Logic
The function normalizedUpperBound sets an upper limit on how many NormalizedMessages a single Message can produce. This is determined by the number of content blocks, with a maximum of 1 for messages without a 'message' property.

### TENGU API Success Query Source
The `querySource` attribute in `SideQueryOptions` is used for attributing calls in `tengu_api_success` for COGS joining against `reporting.sampling_calls`. This suggests an internal tracking mechanism for API success rates tied to a specific codename 'TENGU'.

### Internal Privacy Level Controls
Claude Code includes internal privacy levels that control nonessential network traffic and telemetry, ranging from 'default' to 'essential-traffic'. These levels are influenced by environment variables like 'CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC'.

### Hidden Beta Feature Flags
The code references several beta feature flags like 'INTERLEAVED_THINKING_BETA_HEADER' and 'SUMMARIZE_CONNECTOR_TEXT_BETA_HEADER' that are not publicly documented. These flags suggest experimental features being tested internally.

### Auto Mode Denials Tracking
The system tracks recently denied commands by the auto mode classifier, with a maximum of 20 denials stored. This tracking is conditional on the 'TRANSCRIPT_CLASSIFIER' feature flag.

### Shell Detection for Completion Scripts
The 'detectShell' function identifies the user's shell (zsh, bash, fish) to set up completion scripts, but it does not support other shells. This could limit functionality for users of unsupported shells.

### Internal Codename: Claude Opus 4.6
The code uses 'Claude Opus 4.6' as a fallback model name to prevent leaking internal codenames for unrecognized models in external repositories.

### Hidden Feature Flag: isUndercover
The function getAttributionTexts() checks for a hidden feature flag 'isUndercover' which, if true, returns empty attribution texts for commits and PRs.

### Session URL for Remote Attribution
In remote mode, getAttributionTexts() returns a session URL for attribution if a remote session ID and ingress URL are available, bypassing local development environments.

### Sequential Execution Wrapper for Async Functions
The `sequential` function ensures that async functions are executed one at a time in the order they were received, preventing race conditions. This is particularly useful for operations like file writes or database updates. The function uses a queue to manage execution order and checks for new items after processing to ensure all tasks are handled.

### Detecting Local Installation of Claude
The function `isRunningFromLocalInstallation` checks if Claude is running from a managed local installation by inspecting the execution path for a specific directory structure (`/.claude/local/node_modules/`). This allows the system to differentiate between local and global installations.

### Rainbow Color Function for UI Elements
A function 'getRainbowColor' assigns rainbow colors to UI elements based on their index, with optional shimmer effects.

### Editor Command Overrides for GUI Editors
The code contains a map of editor command overrides, specifically for GUI editors like VS Code and Sublime Text, to add wait flags. For example, VS Code uses 'code -w' to wait for the file to be closed.

### WSL Detection and Versioning
The platform detection logic includes specific checks for WSL, identifying both WSL1 and WSL2 versions based on the '/proc/version' file content. This allows for tailored handling of WSL environments.

### Limited Supported Platforms
The code explicitly supports only 'macos' and 'wsl' platforms, excluding 'windows' and 'linux' from the SUPPORTED_PLATFORMS array, which may limit functionality on those systems.

### GitHub PR Status Timeout Limit
The function `fetchPrStatus` uses a specific timeout of 5000 milliseconds (5 seconds) for GitHub API requests. This might affect performance if the API response is delayed.

### Concurrency Cap in Generators
The 'all' function in generators.ts allows for concurrent execution of generators with a configurable concurrency cap, defaulting to Infinity.

### Environment-Based Timeout Configuration
The functions `getDefaultBashTimeoutMs` and `getMaxBashTimeoutMs` allow for environment-based configuration of timeouts, with defaults set to 2 minutes and 10 minutes respectively. This flexibility is not widely publicized.

### Theme Luminance Calculation for Theme Detection
The themeFromOscColor function calculates luminance using ITU-R BT.709 relative luminance formula. A luminance value greater than 0.5 is considered 'light', otherwise 'dark'.

### Query Profiling Utility with Secret Flag
The query profiling utility can be enabled using the secret environment variable `CLAUDE_CODE_PROFILE_QUERY=1`. This utility tracks detailed checkpoints throughout the query pipeline, which are not documented publicly.

### Shell Execution Timeout Limit
The default timeout for shell executions is set to 30 minutes (1800000 milliseconds). This might be longer than expected for certain operations, potentially leading to resource exhaustion if not managed properly.

### Secret Feature Flag: LODESTONE
The `LODESTONE` feature flag is used to conditionally load a module for registering deep link protocols. This suggests a hidden capability related to handling or registering custom URL schemes.

### Delayed Operations Timeout
Background operations are delayed by 10 minutes after start, as indicated by `DELAY_VERY_SLOW_OPERATIONS_THAT_HAPPEN_EVERY_SESSION` set to 10 minutes. This ensures slow operations do not impact user experience immediately upon startup.

### Ripgrep Command Buffer Size Limit
The buffer size for ripgrep command output is limited to 20MB, which is designed to handle large monorepos with over 200k files. This specific buffer size is not commonly known.

### Terminal Panel Uses Tmux for Persistence
The built-in terminal panel in Claude Code uses tmux for shell persistence, creating a unique session per instance. This behavior is not explicitly documented.

### Tagged ID Encoding Format
The tagged ID format used by the API encodes a UUID as a base58 string prefixed with a tag and version. The format is '{tag}_{version}{base58(uuid_as_128bit_int)}', ensuring compatibility with the API's tagged_id.py.

### Batching Teammate Shutdown Messages
Consecutive in-process teammate shutdown messages are collapsed into a single batch message with a count, reducing message clutter.

### Notification Channels Include 'ghostty'
The code includes a list of notification channels, one of which is 'ghostty', a potentially internal or experimental channel not commonly known.

### OSC 8 Hyperlink Support with ANSI Fallback
The `createHyperlink` function uses OSC 8 escape sequences for hyperlinks, but falls back to plain text if the terminal doesn't support hyperlinks. It applies a basic ANSI blue color, but RGB colors are not preserved across line breaks.

### Limited Cron Expression Parsing
Claude's cron parser supports a minimal 5-field subset without aliases like L, W, or ?. It interprets times in the local timezone, which can lead to unexpected behavior across different environments.

### Proxy Keep-Alive Disabled on Error
Claude disables fetch keep-alive after a stale-pool ECONNRESET, ensuring retries open a fresh TCP connection. This is sticky for the process lifetime, indicating a cautious approach to connection pooling.

### Secret Feature Flag: tengu_sage_compass
The feature flag 'tengu_sage_compass' is used to control the Advisor feature, which is not publicly documented. It includes configurations like 'enabled', 'canUserConfigure', 'baseModel', and 'advisorModel'.

### Sandbox Properties Conditional on 'ant'
The function 'buildSandboxProperties' returns properties only if the condition "external" !== 'ant' is met, which is an unusual and non-obvious condition.

### Environment Variable Validation Limits
The 'validateBoundedIntEnvVar' function caps environment variable values at a specified upper limit, logging a message if the value is capped or invalid.

### Tengu Kairos Cron Config Validation
The 'tengu_kairos_cron_config' is validated using a Zod schema with strict upper bounds to prevent errors from malformed configurations. This includes a 30-day maximum for recurring tasks.

### Terminal Display Limits to 3 Lines
The terminal display utility limits content to a maximum of 3 lines by default, using a constant `MAX_LINES_TO_SHOW = 3`. This is not configurable through public interfaces.

### Terminal Padding to Prevent Overflow
Terminal display adds a padding of 10 characters to prevent overflow, which is not documented in public resources.

### Direct Member Messaging Bypasses Model
The `sendDirectMemberMessage` function allows sending messages directly to team members without involving the model, which is not publicly documented.

### PowerShell Timeout Limit for Process Ancestry
The function `getAncestorPidsAsync` uses a PowerShell script with a timeout of 3000 milliseconds to fetch process ancestry on Windows. This could lead to incomplete ancestry data if the script execution exceeds this time limit.

### Global Cleanup Function Registry
A global registry for cleanup functions is maintained in `cleanupRegistry.ts`, allowing functions to be registered for execution during graceful shutdown. This registry is separate to avoid circular dependencies.

### Hidden Feature Flag for Background Sessions
The code contains a hidden feature flag 'BG_SESSIONS' that enables background sessions. This flag allows the environment to set a session kind to 'bg', 'daemon', or 'daemon-worker', which affects how the session is registered and managed.

### Suppression of Internal Warnings
Certain internal warnings, such as 'MaxListenersExceededWarning', are suppressed to prevent them from reaching users. This is part of an effort to streamline user experience by hiding known non-critical issues.

### File Read Fast Path Limit: 10 MB
The fast path for reading files in Claude is limited to files smaller than 10 MB. This design choice optimizes performance for typical source files but may not handle larger files efficiently.

### WSL Detection via WSLInterop
Claude detects if it's running in a WSL environment by checking for the existence of '/proc/sys/fs/binfmt_misc/WSLInterop'. This method is reliable but not commonly documented.

### Statsig Logging Sample Rate
Statsig logging is sampled at a rate of 0.5% for external users, which is a specific design decision not disclosed in public documentation.

### RenderOnceAndExit Component Behavior
The RenderOnceAndExit component uses useLayoutEffect to ensure React's commit phase completes before exiting, which is more robust than process.nextTick() for React 19's async render cycle.

### Lazy Loading for Lockfile Access
The lockfile module uses a lazy accessor for proper-lockfile to avoid startup costs, loading the package only when a lock function is called.

### Slash and Bash Commands Processed Individually
The queue processor handles slash commands and bash-mode commands individually to ensure error isolation and proper handling of exit codes. This behavior is not documented publicly and differs from other command processing which batches commands of the same mode.

### Hidden Pricing Tiers for Claude Models
The source code reveals several internal pricing tiers for Claude models that are not publicly documented. For instance, Opus 4.6 has a fast mode pricing of $30 input / $150 output per Mtok, which is significantly higher than other tiers.

### Initial User Message via Side Channel
The `pendingInitialUserMessage` is a side channel used to pass an initial user message without changing the existing Promise return type. This workaround is not documented.

### Heatmap Limited to 52 Weeks
The terminal heatmap generation is capped at 52 weeks to mimic GitHub's style, limiting the visualization to one year of data.

### MUSL Runtime Detection on Linux
The code includes a mechanism to detect if the system is using MUSL libc instead of glibc, with a fallback runtime check for unbundled Node.js environments. This suggests a need to support diverse Linux environments.

### Worktree Detection Timeout
The 'getWorktreePathsPortable' function uses a 5000ms timeout for Git worktree detection. This specific timeout value is not mentioned in public documentation.

### Hidden Feature Flag: tengu_*
The code references a feature flag prefixed with 'tengu_', which is not documented publicly. This suggests there are hidden or experimental features under development that are gated by this flag.

### Specific Output Limits for Tasks and Bash
The code specifies output limits for tasks and bash commands: BASH_MAX_OUTPUT_DEFAULT, BASH_MAX_OUTPUT_UPPER_LIMIT, TASK_MAX_OUTPUT_DEFAULT, and TASK_MAX_OUTPUT_UPPER_LIMIT. These are set to specific values that dictate how much output can be handled, which may impact performance and usability.

### Secret Event Logging: Tengu Claude MD Dialog
The ClaudeMdExternalIncludesDialog component logs events with names like 'tengu_claude_md_external_includes_dialog_declined'. This suggests an internal tracking or feature flag system named 'tengu'.

### Secret Feature Flag: tengu_mcp_multidialog_choice
The code logs an event with the feature flag 'tengu_mcp_multidialog_choice' when users select servers in the MCPServerMultiselectDialog. This flag is not publicly documented.

### QuickOpenDialog Visible Results Calculation
The QuickOpenDialog component dynamically calculates the number of visible results based on terminal rows, with a minimum of 4 and a maximum of 8. It uses the formula Math.min(8, Math.max(4, rows - 14)).

### MessageResponse Nested Rendering Check
The MessageResponse component uses a context to determine if it is nested within another MessageResponse, preventing nested ⎿ characters from rendering.

### Hidden Flag for Development Channels
The code includes a hidden flag '--dangerously-load-development-channels' intended for local development only. It warns against using channels downloaded from the internet.

### Export Dialog Filename Handling
The ExportDialog component ensures filenames end with '.txt' by replacing existing extensions if necessary. This behavior might not be obvious to users.

### Deprecated Settings Function Still in Use
The function 'getSettings_DEPRECATED' is still used in the MCPServerApprovalDialog component, indicating reliance on deprecated code paths that might affect future maintainability.

### Internal Split of Status Notices
The codebase has split status notices into neutral/positive and other types, with the latter remaining in StatusNotices.tsx. This split is not documented in public documentation.

### Hidden ANT-ONLY Flag in InterruptedByUser
The InterruptedByUser component contains a hidden feature flag 'ANT-ONLY' that changes the displayed message, suggesting internal-only functionality.

### DiffFrame Placeholder Logic
The DiffFrame component uses a placeholder logic that defaults to a dimmed text '…' when no content is available, which is not publicly documented.

### IDE Auto-Connect Default Option
The IdeAutoConnectDialog defaults to 'yes' for enabling auto-connect to IDE, suggesting a preference for seamless integration.

### Default Width for Highlighted Code Component
The 'HighlightedCode' component has a default width of 80 characters if no width is specified. This decision impacts how code is displayed by default, potentially affecting readability.

### Randomized Goodbye Messages in Exit Flow
The 'ExitFlow' component uses a set of predefined goodbye messages, selecting one at random when the flow completes. This adds a human touch to the exit process.

### Debounce and Throttle Settings in Global Search
The Global Search Dialog uses a debounce time of 100ms and limits visible results to 12. These settings are not publicly documented but significantly impact the performance and responsiveness of the search feature.

### Hidden URL in RemoteEnvironmentDialog
The RemoteEnvironmentDialog component contains a hidden setup hint URL: 'https://claude.ai/code'. This URL is not publicly documented and suggests a configuration page for environments.

### MessageSelector Max Visible Messages
The MessageSelector component limits the number of visible messages to 7. This design decision impacts how users interact with message lists.

### AutoUpdater Skips in Dev/Test Environments
The AutoUpdater component skips update checks entirely in 'test' or 'development' environments, as indicated by the condition `"production" === 'test' || "production" === 'development'`. This behavior is not documented publicly.

### 30-Minute Update Interval for AutoUpdater
The AutoUpdater uses a 30-minute interval to check for updates, which could lead to concurrent installations if not properly managed. This interval is not publicly documented.

### Dynamic Task Display Limit Based on Terminal Size
The TaskListV2 component dynamically calculates the maximum number of tasks to display based on terminal size. If the terminal has 10 or fewer rows, no tasks are shown. Otherwise, it shows between 3 and 10 tasks, depending on the available rows.

### Internal Source Display Order
The order for displaying source groups in the ContextVisualization component is internally set to 'Project > User > Managed > Plugin > Built-in'. This order is not publicly documented and reflects Anthropic's prioritization strategy.

### Hidden Tengu Onboarding Feature
The onboarding process logs events with the 'tengu_' prefix, such as 'tengu_began_setup' and 'tengu_onboarding_step'. This suggests a hidden or experimental feature related to onboarding, possibly named 'Tengu'.

### Dynamic GitHub Issues Repo URL Switching
The Feedback component dynamically switches the GitHub issues repository URL based on an internal condition. If the condition 'external' equals 'ant', it uses a different internal repository URL.

### Nested Tree Structure for Validation Errors
The ValidationErrorsList component builds a nested tree structure from dot-notation paths using lodash's setWith function. This avoids automatic array creation and enhances path readability for invalid values.

### Remote Control Dialog Behavior
The 'Remote Control' dialog is designed to show only once per user by setting `remoteDialogSeen` in the global config. This behavior is not documented publicly.

### Teardrop Asterisk Constant
The constant 'TEARDROP_ASTERISK' in 'src/components/Spinner.tsx' is used for special UI elements, indicating a unique design choice that might not be widely known.

### Headroom Scroll Padding
The 'HEADROOM' constant in 'src/components/VirtualMessageList.tsx' adds 3 rows of padding above the target when scrolling, impacting how content is displayed during navigation.

### Diagnostics Display File URI Handling
The DiagnosticsDisplay component handles file URIs with special prefixes like 'file://' and '_claude_fs_right:', which are not mentioned in the public documentation.

### Hidden Voice Mode Kill-Switch Flag
The `tengu_amber_quartz_disabled` flag acts as an emergency kill-switch for the voice mode feature. It defaults to `false`, meaning voice mode is enabled unless explicitly disabled.

### Teammate Selection Wrapping Logic
The teammate selection logic wraps around a list of teammates, allowing navigation from leader to teammates and back. The index wraps from -1 to the number of teammates, with -1 representing the leader.

### PR Status Polling Intervals and Limits
The PR status polling occurs every 60 seconds, with a stop condition after 60 minutes of inactivity. If a fetch takes longer than 4 seconds, polling is disabled permanently.

### Auto Connect IDE Feature Flag
The `autoConnectIdeFlag` is a feature flag that controls automatic IDE connection. It checks multiple conditions including environment variables like `CLAUDE_CODE_AUTO_CONNECT_IDE` and `CLAUDE_CODE_SSE_PORT` to determine if auto-connect should be enabled.

### Dynamic IDE Integration Configuration
The IDE integration dynamically configures the MCP server based on the IDE's connection type (WebSocket or SSE) and other parameters like `ideRunningInWindows`. This configuration is scoped as 'dynamic'.

### STT Supported Language Codes Subset
The list of supported language codes for the voice stream STT is a subset of the server-side allowlist. Sending an unsupported code results in a WebSocket closure with a 1008 error.

### LSP Plugin Timeout Threshold
The LSP plugin recommendation system uses a timeout threshold of 28,000 ms to differentiate between a timeout and an explicit dismiss action. This is slightly less than the 30-second auto-dismiss time of the menu.

### Direct Connect Init Message Handling
The Direct Connect feature skips duplicate 'init' messages from the server to prevent handling the same initialization multiple times during a session.

### Interaction Threshold for Notifications
The system considers an interaction 'recent' if it occurred within the last 6,000 ms. This threshold is used to determine when to show notifications after a period of inactivity.

### Unified Suggestions Limit Set to 15
The maximum number of unified suggestions that can be generated is limited to 15, which is a specific design choice not publicly documented.

### Tengu Toggle Todos Feature
The code includes a feature flag 'tengu_toggle_todos' which logs events when toggling the todo list using ctrl+t. This feature cycles through views like tasks and teammates, indicating an internal task management system.

### Double-Press Exit Mechanism for Ctrl+C/D
The application uses a time-based double-press mechanism for Ctrl+C and Ctrl+D to exit. The first press shows a message, and the second press within a timeout triggers the exit. This is hardcoded and cannot be changed via configuration.

### Gate Chain in Plugin Recommendation System
The plugin recommendation system uses a gate chain to manage the recommendation process. It includes checks for remote mode, already showing recommendations, and in-flight status. This centralized gate chain ensures that new sources remain small and manageable.

### Chrome Extension Requires Subscription
The Chrome extension for Claude requires users to have a claude.ai subscription, which is not publicly documented. If a user is not subscribed, a notification is shown with a priority of 'immediate' and a timeout of 5000ms.

### Chrome Extension Detection Warning
If the Claude Chrome extension is not installed and the user is not running on 'homespace', a warning notification is shown with a priority of 'immediate' and a timeout of 3000ms. This behavior is not documented.

### Tengu Skill Improvement Logging
The 'tengu_skill_improvement_survey' event logs when a skill improvement suggestion appears and when a user responds. This logging is tied to the 'tengu' codename, indicating a possibly internal feature.

### Hidden Restrictions on External Commands
The function 'isSessionContainerCompatible' checks for external command patterns like 'curl', 'wget', 'ssh', and others, and disallows their execution if detected. This behavior is not publicly documented and restricts certain command usages within session containers.

### User Type 'ant' Flag for Feature Access
The 'useIssueFlagBanner' function only activates if the environment variable 'USER_TYPE' is set to 'ant', suggesting a hidden feature flag that gates access to specific functionality based on user type.

### Friction Pattern Detection in User Messages
The 'hasFrictionSignal' function scans user messages for patterns indicating dissatisfaction or correction, such as 'that's wrong' or 'try again'. This internal mechanism for detecting user friction is not publicly documented.

### File Index Throttle for Untracked Files
The file index refreshes every 5 seconds to pick up untracked files, even if the .git/index mtime doesn't change. This differs from public expectations that only tracked file changes trigger refreshes.

### Focus Check Debounce for Clipboard
A debounce of 1000ms is applied to focus changes when checking for images in the clipboard. This is not mentioned in public documentation.

### Paste Completion Timeout
The paste completion timeout is set to 100ms to handle paste operations. This specific timeout value is not publicly shared.

### Sandbox Unix Socket Handling on macOS
The sandbox configuration allows Unix socket paths on macOS but ignores them on Linux due to seccomp limitations. This could lead to unexpected behavior differences between platforms.

### Corepack Auto-Pin Bugfix
A bugfix disables Corepack's auto-pinning feature, which adds yarnpkg to package.json files. This is controlled by setting process.env.COREPACK_ENABLE_AUTO_PIN to '0'.

### 60s Timeout for Claude Code Stream
The Claude Code stream has a default timeout of 60 seconds, which can be overridden if SDK MCP calls are expected to run longer. This is a critical parameter for developers to consider when designing long-running processes.

### USER_TYPE 'ant' Enables Remote Host Management
When USER_TYPE is set to 'ant', special remote host management features are enabled, allowing the listing and session counting of running remote hosts using 'coder' and 'ssh' commands.

### Exclusive Entry Point for Ultrareview
The '/ultrareview' command is the only entry point to the remote bughunter path, while '/review' remains purely local. This indicates a separation of concerns where ultrareview is intended for more intensive remote operations.

### Caffeinate Timeout and Restart Interval
The `caffeinate` command is used to prevent macOS from sleeping during operations, with a timeout of 300 seconds (5 minutes) and a restart interval of 4 minutes. This ensures continuous sleep prevention and self-healing if the process is killed unexpectedly.

### Diagnostic Summary Character Limit
The maximum number of characters for a diagnostic summary is limited to 4000. This constraint likely aims to balance detail with performance and readability.

### Mock Rate Limit Scenarios for Internal Testing
The `mockRateLimits.ts` file defines a variety of mock scenarios for testing rate limits, such as 'session-limit-reached', 'overage-active', and 'org-spend-cap-hit'. These scenarios allow internal testing without affecting actual API limits.

### Tengu Notification Method Logging
The `sendNotification` function logs the notification method used with the event 'tengu_notification_method_used'. This internal tracking helps analyze notification channel effectiveness.

### 60s Reconnect Timeout in Remote Sessions
In non-viewer-only mode, remote sessions have a 60-second reconnect timeout, which is disabled in viewer-only mode.

### Timeouts and Retries for Remote Managed Settings
The Remote Managed Settings Service has a timeout of 10 seconds for fetching settings (SETTINGS_TIMEOUT_MS) and allows up to 5 retries (DEFAULT_MAX_RETRIES). This is not publicly documented and could impact performance under certain network conditions.

### Proactive Mode Conditional Import
The code conditionally imports a module based on the presence of the 'PROACTIVE' or 'KAIROS' feature flags. This suggests hidden capabilities that are activated only when these flags are set.

### Max Consecutive Autocompact Failures Limit
The system stops trying autocompact after 3 consecutive failures, a limit not mentioned in public documentation. This is intended to prevent excessive API calls when the context is irrecoverably over the limit.

### Policy Limits API Fetching with ETag Caching
The Policy Limits Service fetches organization-level restrictions using ETag caching and background polling. It fails open, meaning if the fetch fails, it continues without restrictions. The polling interval is set to 1 hour.

### Policy Limits Fetch Timeout
The policy limits fetching process has a timeout set at 10 seconds, which could impact the responsiveness of the service if the API is slow.

### Valid Plugin Scopes for Installation
Claude defines valid installable plugin scopes as 'user', 'project', and 'local', excluding 'managed', which can only be installed from managed-settings.json.

### Secret Telemetry Event: tengu_plugin_command_failed
The code logs a secret telemetry event 'tengu_plugin_command_failed' whenever a plugin CLI command fails. This event includes details like the command name and error category, which are used for computing success rates in dashboards.

### Exponential Backoff for LSP Transient Errors
The LSP server uses an exponential backoff strategy for transient errors like 'content modified', with a base delay of 500ms and a maximum of 3 retries. This means delays are 500ms, 1000ms, and 2000ms respectively.

### Plugin-Based LSP Server Loading
Claude only supports LSP servers through plugins, not user or project settings. This design choice centralizes control but limits flexibility for users.

### Elicitation Retry Code -32042
The elicitation handler includes a specific error-based retry code (-32042), where 'accept' is a no-op, and retries are managed by user actions like 'dismiss' or 'retry'. This behavior is not publicly documented.

### Internal VSCode MCP Integration for Notifications
There is a special internal setup for VSCode MCP to enable bidirectional communication using notifications. This integration is not mentioned in public documentation.

### Internal-Only IDE Server Types
The code defines internal-only server types for IDE extensions, specifically 'sse-ide' and 'ws-ide'. These configurations include fields like 'ideName' and 'ideRunningInWindows', which are not publicly documented.

### Fetch Timeout for ClaudeAI MCP Configs
The fetch timeout for ClaudeAI MCP server configurations is set to 5000 milliseconds. This specific timeout value reflects a design decision balancing responsiveness and network latency.

### SDK MCP Transport Bridge Secret Feature
The SDK MCP Transport Bridge allows in-process MCP servers to communicate with the Claude Code CLI process using control messages. This feature is not publicly documented and supports multiple SDK MCP servers running simultaneously.

### Speculation Limits in Claude Code
Speculation in Claude Code is limited to 20 turns and 100 messages. This restricts the extent of speculative execution.

### Tengu Tip Analytics Events
The code logs analytics events like 'tengu_tip_shown' when tips are shown to users. This suggests a focus on tracking user engagement with tips, which is not explicitly mentioned in public documentation.

### SSL Error Handling in Anthropic SDK
The Anthropic SDK includes a specific function to extract SSL error details from a chain of error causes. It recognizes SSL errors using a predefined set of error codes and provides actionable hints for SSL/TLS errors, particularly for enterprise users behind TLS-intercepting proxies.

### Referral API Fetch Timeouts
The referral eligibility API call has a 5-second timeout, while the referral redemptions call has a 10-second timeout. These differing timeouts could impact user experience and are not publicly documented.

### Ultrareview Quota Endpoint
The ultrareview quota is checked via a private endpoint '/v1/ultrareview/quota', which is not publicly documented. This endpoint provides data on reviews used, limit, remaining, and overage status.

### x402 Payment Tracker's Session Limits
The x402 Payment Tracker enforces a maximum payment per request and a maximum total session spend in USD, which are configured via `X402WalletConfig`. These limits are crucial for preventing excessive spending during a session.

### x402 Payment Protocol's Network Support
The x402 protocol supports payments on 'base', 'base-sepolia', 'ethereum', and 'ethereum-sepolia' networks. This is not widely documented, indicating potential future expansions or testing environments.

### x402 Payment Timeout Configuration
The x402 protocol specifies a maximum timeout for payment settlement in seconds, as defined in the `PaymentRequirement` interface. This timeout ensures timely transaction processing.

### x402 Assumes 1 USDC = 1 USD
The x402 client assumes a fixed conversion rate of 1 USDC = 1 USD when calculating payment amounts. This assumption simplifies calculations but may not reflect real-world fluctuations.

### EIP-55 Checksum Address Implementation
The code implements EIP-55 checksum address encoding using keccak256, which is not explicitly documented in public resources.

### Tengu 1P Event Batch Config
The 'tengu_1p_event_batch_config' controls batching behavior for first-party event logging, including delay and batch size.

### GrowthBook Feature Flag Workaround
The code contains a workaround for a malformed feature response from the API, using 'value' instead of 'defaultValue'. This suggests internal issues with the API that are not publicly documented.

### Yoga Layout Spec Parity Features
The Yoga Layout implementation includes features for spec parity that are not used by Ink, such as 'flex-wrap', 'align-content', and 'baseline alignment'. This indicates a broader implementation scope than necessary for current use.

### RTL Direction Not Implemented in Yoga Layout
The Yoga Layout implementation explicitly does not support RTL direction, as Ink always passes Direction.LTR. This could limit the application's usability in right-to-left language contexts.

### Test File Scoring Penalty in FileIndex
The FileIndex class applies a 1.05× penalty to paths containing 'test', capped at 1.0, making non-test files rank higher in search results. This behavior is not documented publicly.

### Dynamic Chunk Timeout in FileIndex
The FileIndex uses a dynamic chunk timeout of 4ms to yield to the event loop, adapting to machine speed. This ensures responsiveness on slower hardware, a detail not widely known.

### USER_TYPE 'ant' Restriction in Remember Skill
The Remember Skill only registers if the USER_TYPE environment variable is set to 'ant', restricting its availability. This limitation is not publicly documented.

### Secret Feature Flag: Kairos Cron
The code references a secret feature flag 'isKairosCronEnabled', which suggests a hidden scheduling feature named 'Kairos'. This feature isn't mentioned in public documentation.

### Default Interval for Loop Command: 10 Minutes
The '/loop' command defaults to a 10-minute interval if no specific interval is provided. This default setting is not publicly documented.

### Debug Skill with Ant-Specific Behavior
The debug skill has different descriptions based on user type. For users identified as 'ant', it reads session debug logs; otherwise, it enables logging for diagnosis.

### Tagged ID to UUID Decoding
The code includes a function to decode 'mcpsrv_' tagged IDs to UUIDs using a Base58 alphabet. This is an internal implementation detail not meant for public use.

### KAIROS and KAIROS_DREAM Feature Flags
The source code reveals the existence of feature flags 'KAIROS' and 'KAIROS_DREAM' which, when enabled, register a 'DreamSkill'. This suggests hidden or experimental functionality related to dreaming or dream-like processing.

### REVIEW_ARTIFACT Feature Flag
The 'REVIEW_ARTIFACT' feature flag conditionally registers a 'HunterSkill', indicating a potential feature related to artifact review or analysis that is not publicly documented.

### BUILDING_CLAUDE_APPS Feature Flag
The 'BUILDING_CLAUDE_APPS' feature flag conditionally registers a 'ClaudeApiSkill', indicating potential support for building applications on top of Claude's API that is not publicly documented.

### Settings File Hierarchy and Overrides
Settings files are loaded in a specific order: user → project → local, where later files override earlier ones. This hierarchy allows for granular control over configuration settings.

### Skillify's Detailed User Interview Process
The Skillify feature includes a detailed multi-step interview process to capture user preferences and automate repeatable processes. It uses a structured approach to suggest skill names, goals, and steps, iterating with user feedback.

### Tengu Editor Mode Toggle
The code contains a feature flag 'tengu_editor_mode_changed' for toggling between Vim and Normal editing modes. This feature is not publicly documented and suggests internal experimentation with editor modes.

### Claude Max 20x Plan Check
The upgrade command checks if a user is on the 'max' subscription plan with a 'default_claude_max_20x' rate limit tier, which is not publicly documented.

### Disable Upgrade Command Environment Variable
The upgrade command can be disabled using the DISABLE_UPGRADE_COMMAND environment variable, which is not mentioned in public documentation.

### Hidden GitHub App Setup Steps
The `CreatingStep` component in the GitHub app installation process has a hidden step sequence that includes 'Getting repository information', 'Creating branch', and 'Opening pull request page'. These steps are not publicly documented as part of the standard setup process.

### Handling Existing Workflows
The `ExistingWorkflowStep` component presents options for handling existing workflows, including 'Update', 'Skip', and 'Exit'. This decision-making process is not explicitly documented for users setting up workflows.

### Guided GitHub App Installation with Fallback
The installation process for the Claude GitHub App includes detailed guidance and a fallback URL if the browser doesn't open automatically. Users are directed to visit 'https://github.com/apps/claude' manually if needed.

### Secret Codename: Tengu for GitHub App Install
The internal codename 'tengu_install_github_app_started' is used for logging events related to the GitHub App installation process. This suggests a potential feature or project named 'Tengu' related to GitHub integrations.

### Environment Flag to Disable Compact Command
The 'compact' command can be disabled using an environment variable 'DISABLE_COMPACT'. This is not mentioned in public documentation, offering a way to control feature availability.

### Branch Command: Forking Conversations with Metadata
The 'branch' command creates a fork of the current conversation by copying transcript files, preserving original metadata while updating the session ID. This detailed forking mechanism is not publicly documented.

### Context Visualization with ANSI colors
The '/context' command visualizes context usage with ANSI colors, providing a colored grid representation of the current context, which differs from typical text outputs.

### Microcompact Messages for Accurate API Representation
The 'microcompactMessages' function is used to compact messages before sending them to the API, ensuring the representation matches what the model actually sees.

### AddDirError Timeout Set to Zero
The `AddDirError` function uses a timeout of zero milliseconds to trigger the `onDone` callback immediately. This is unusual and can lead to unexpected behavior if the callback relies on asynchronous operations.

### CLAUDE_CODE_EFFORT_LEVEL Environment Variable
The CLAUDE_CODE_EFFORT_LEVEL environment variable can override user-set effort levels, indicating a priority mechanism for environment configurations.

### Tengu Bridge Command Analytics
The 'tengu_bridge_command' event is logged for preflight failures in the bridge command, suggesting analytics tracking for command execution issues.

### Default Color Uses 'default' Sentinel
The system uses a 'default' sentinel instead of an empty string to reset colors, ensuring persistence across session restarts.

### MCP Server User Config Management
The PluginOptionsFlow component uses loadMcpServerUserConfig and saveMcpServerUserConfig functions to manage user configurations specific to the MCP server, indicating a specialized configuration handling for MCP-related plugins.

### Plugin Validation Command Details
The 'ValidatePlugin' command provides detailed validation for plugin manifests, preferring marketplace.json over plugin.json if both exist in a directory. This behavior is not typically highlighted in user documentation.

### Hidden 'marketplace' Subcommands in Plugin Parser
The `parsePluginArgs` function supports hidden subcommands for 'marketplace' actions like 'add', 'remove', 'update', and 'list', which are not documented publicly. This suggests internal or experimental features for managing plugin marketplaces.

### Hidden Event: 'tengu_marketplace_added'
The code logs an event 'tengu_marketplace_added' when a new marketplace source is added. This event is not documented publicly and suggests internal tracking of marketplace additions.

### Marketplace Auto-Update Flag
The code includes a feature flag 'isMarketplaceAutoUpdate' that controls whether marketplaces are set to auto-update. This flag is not mentioned in public documentation.

### Marketplace Source Parsing Logic
The function 'parseMarketplaceInput' accepts inputs in formats like 'owner/repo', URLs, or local paths. This parsing logic is not publicly detailed.

### Fast Mode Toggled Event: tengu_fast_mode_toggled
The 'applyFastMode' function logs an event named 'tengu_fast_mode_toggled' when fast mode is toggled. This event name is not publicly documented and suggests internal tracking of fast mode usage.

### Telemetry Flush Before Logout
The system flushes telemetry data before clearing credentials during logout to prevent organizational data leakage, indicating a strong focus on data integrity.

### Secure Storage Wiped on Logout
All secure storage data is wiped upon logout, ensuring no residual data remains on the device, which is critical for maintaining user privacy.

### MCP XAA IdP Connection Management
The MCP XAA IdP connection is managed via a command 'xaa', which includes a setup process requiring an issuer URL and client ID. This setup is a one-time configuration for all XAA-enabled servers.

### MCP Command Bypass with 'no-redirect'
The MCP command allows a 'no-redirect' argument to bypass the redirect for testing purposes. This is an undocumented feature useful for developers.

### MCP Add Command XAA Feature Flag
The `mcp add` command includes a hidden `--xaa` option for enabling XAA (SEP-990) support. This requires running `claude mcp xaa setup` first and also requires `--client-id` and `--client-secret` options.

### Hidden Remote Environment Command
The `remote-env` command is conditionally hidden based on user subscription status and policy limits. It is only enabled if the user is a Claude AI subscriber and the policy allows remote sessions.

### Internal Command Behavior for Feedback
The feedback command has internal logic that disables it under certain conditions, such as when specific environment variables are truthy or when the user type is 'ant'. This behavior is not documented publicly.

### Admin Request Eligibility Check for Limit Increase
The system checks admin request eligibility for 'limit_increase' and allows users to proceed even if the eligibility check fails, relying on the create endpoint to enforce rules. This fallback is not publicly documented.

### Voice Mode Toggled with 'tengu' Flag
The voice mode feature in the codebase uses a feature flag 'tengu_voice_toggled' to log events when voice mode is toggled. This suggests internal tracking or experimentation with this feature.

### Voice Mode Hidden by GrowthBook Flag
The visibility of the voice mode command is controlled by a GrowthBook feature flag 'isVoiceGrowthBookEnabled'. This suggests A/B testing or gradual rollout.

### Ultrareview Billing Thresholds
The 'Ultrareview' feature requires a minimum balance of $10 to proceed, and users are informed if their balance is too low. This specific threshold is not publicly documented.

### Ultrareview Escape Handling
If a user hits Escape during the ~5s launch of an Ultrareview, the dialog shows 'cancelled' and unmounts, skipping onDone to avoid writing to a dead transcript slot.

### Tengu Feature Flag for Ultrareview
The ultrareview feature is controlled by a feature flag named 'tengu_review_bughunter_config'. This flag determines if the ultrareview command is visible to users.

### Hidden Tengu Model Command Analytics
The 'ModelPickerWrapper' function logs events with the codename 'tengu_model_command_menu' when models are selected or canceled. This suggests a hidden analytics feature tracking model selection behavior.

### Tengu Jade Anvil 4 Feature Flag
The 'RateLimitOptionsMenu' component checks a feature flag 'tengu_jade_anvil_4' to determine if a certain behavior should be enabled. This flag is not documented publicly.

### Hidden Rate Limit Command
The 'rate-limit-options' command is marked as 'isHidden: true', meaning it is not visible in help menus and is used internally to handle rate limit scenarios.

### Tengu Thinkback Feature Gate
The 'thinkback-play' command is gated by the 'tengu_thinkback' feature flag, indicating a controlled rollout or internal testing phase for this feature.

### Bridge Session Title Sync in Rename Command
The rename command includes a non-blocking sync of session titles to a bridge session on claude.ai/code. This uses a 'replBridgeSessionId' and updates via 'updateBridgeSessionTitle'.

### x402 Command for Crypto Payments
The x402 command manages HTTP 402 crypto payments using USDC on Base. It includes subcommands for setup, status, enabling/disabling payments, setting limits, and switching networks.

### Export Filename Sanitization Process
The export command sanitizes filenames by converting text to lowercase, removing special characters, replacing spaces with hyphens, and trimming hyphens from the start and end.

### Grove Dialog Qualification Check
The function 'isQualifiedForGrove' determines if a user can access the Grove dialog. If not qualified, users receive a fallback message directing them to a privacy settings URL.

### Hidden Feature Flag: DISABLE_LOGIN_COMMAND
The login command can be disabled using an environment variable `DISABLE_LOGIN_COMMAND`. This is not documented publicly.

### Remote Mode Dependency for Session Command
The 'session' command only works in remote mode, indicated by the `getIsRemoteMode()` function. This dependency is not clearly documented.

### QR Code Generation for Remote Sessions
The session command generates a QR code using `qrcode` library with 'utf8' type and 'L' error correction level. This detail is not publicly documented.

### SDK Beta Schema with Future Date
The `SdkBetaSchema` uses a literal 'context-1m-2025-08-07', indicating a future feature or release date in August 2025. This suggests planned long-term development or features that are not yet publicly available.

### Adaptive Thinking Feature in Claude
The `ThinkingConfigSchema` includes an 'adaptive' type, allowing Claude to decide when and how much to think, specifically for Opus 4.6+. This feature is not widely documented and suggests advanced self-regulation capabilities.

### Secret Fast Mode Notification Flags
The code reveals internal flags for Fast Mode notifications: 'fast-mode-cooldown-started', 'fast-mode-cooldown-expired', 'fast-mode-org-changed', and 'fast-mode-overage-rejected'. These flags are used to trigger specific notifications based on Fast Mode events.

### IDE Status Indicator Timeout
The IDE status indicator uses a timeout of 3000 milliseconds to show hints. This timeout is used to delay notifications if certain conditions are met, such as the IDE not being connected.

### Auto Mode Unavailable Feature Flag
The 'TRANSCRIPT_CLASSIFIER' feature flag is used to control the availability of auto mode notifications. This flag likely gates access to certain transcript-related features.

### Hidden Priority Levels in Install Messages
The `useInstallMessages` function assigns a hidden priority level to install messages based on their type. Messages with type 'error' or requiring user action are marked 'high', while 'path' and 'alias' types are 'medium'.

### Remote Mode Gate in Startup Notifications
The `useStartupNotification` function includes a 'remote-mode gate' that prevents notifications from firing if the system is in remote mode. This is an undocumented behavior.

### Hidden Model Migration Notifications
The code reveals hidden notifications for model migrations, specifically for 'Sonnet 4.5 → 4.6' and 'Opus Pro → default'. These notifications are triggered if the migration timestamp is within the last 3 seconds, suggesting they are meant for immediate user feedback during startup.

### Legacy Model Remap Opt-Out Flag
A feature flag 'CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP=1' allows users to opt out of legacy model remapping, indicating internal flexibility for model version control.

### OrderedList Context for Nested Markers
OrderedList uses a context to manage markers for nested list items, allowing for automatic numbering and custom markers. This internal mechanism is not publicly documented.

### Dynamic Content Height Calculation
The content height in the Settings component is dynamically calculated based on the terminal size, with a minimum of 15 and a maximum of 30 rows. This adaptive design is not mentioned in public documentation.

### Bridge Feature Detection
The Config component checks if a 'bridge' feature is enabled, which is not publicly documented. This suggests internal or experimental features that may be toggled on or off.

### Usage Limit Bar with Reset Time
The Usage component includes a 'LimitBar' that displays usage percentages and reset times, with a minimum width requirement of 62 characters for full display. This detailed usage tracking is not highlighted in public materials.

### 30-Second Auto-Dismiss for LSP Menu
The LSP Recommendation Menu automatically dismisses after 30 seconds, counting as a 'no' response. This behavior is not documented publicly and could lead to users unintentionally ignoring recommendations.

### Dynamic Review Stage Counts Formatting
The formatReviewStageCounts function dynamically formats review stage counts, hiding 'refuted' when zero and using 'deduping' for the synthesizing stage. This nuanced behavior is not detailed in public documentation.

### SHELL_DETAIL_TAIL_BYTES Limit in ShellDetailDialog
The ShellDetailDialog component reads only the last 8192 bytes of the task output file. This limit is set by the constant SHELL_DETAIL_TAIL_BYTES.

### Local Command Output Handling
The `UserLocalCommandOutputMessage` function processes content with specific tags like `local-command-stdout` and `local-command-stderr`. This indicates a structured approach to handling command outputs, which may not be publicly documented.

### Teammate Message Parsing with Regex
The system uses a regular expression to parse teammate messages from an XML-like format. The regex supports extracting attributes like 'teammate_id', 'color', and 'summary', and captures the message content. This parsing method allows handling multiple messages in a single text block.

### Resource and Polling Update Parsing
The UserResourceUpdateMessage component parses resource and polling updates from XML format using regex. It distinguishes between 'resource' and 'polling' updates, extracting server, target, and optional reason fields.

### Shutdown Message Rendering Logic
The code includes logic for rendering shutdown request and rejection messages with specific styles, such as warning-colored borders for requests and subtle borders for rejections.

### Transcript Mode Alters Thinking Message Display
In 'AssistantThinkingMessage', when 'isTranscriptMode' is true, the full thinking message is shown. This differs from the default behavior where only a placeholder is shown unless 'verbose' is true.

### Experimental Skill Search Feature
The 'EXPERIMENTAL_SKILL_SEARCH' feature flag is used to determine if the environment is a demo, affecting the rendering of messages. This experimental feature is not publicly documented.

### Rate Limit Tier System
The system uses a tiered rate limit model, with specific tiers like 'default_claude_max_20x'. This tiering system is not detailed in public documentation.

### Task Assignment Summary Format
The getTaskAssignmentSummary function formats task assignment summaries as '[Task Assigned] #{taskId} - {subject}', which may differ from user expectations or documentation.

### Plugin Hint Menu Auto-Dismiss Timeout
The PluginHintMenu component automatically dismisses itself after 30,000 milliseconds (30 seconds) if no user response is given. This behavior is not typically documented in user-facing materials.

### MAX_JSON_FORMAT_LENGTH Limits JSON Formatting
The `MAX_JSON_FORMAT_LENGTH` constant is set to 10,000, limiting the length of content that can be JSON formatted. This constraint is not mentioned in public documentation.

### URL Matching Regex in JSON Strings
The `URL_IN_JSON` regex is used to match HTTP(S) URLs inside JSON string values. It avoids quotes, whitespace, and trailing commas/braces, which is a conservative approach not detailed in public resources.

### Debounced Digit Input Timeout
The DEFAULT_DEBOUNCE_MS is set to 400 milliseconds for digit input, balancing between accidental submissions and user intent. This timeout affects how quickly numeric inputs are processed.

### API Request Timeout Setting
The API request for sharing session transcripts has a timeout set to 30,000 milliseconds (30 seconds). This timeout setting reflects a balance between ensuring completion of potentially large data uploads and maintaining responsiveness.

### Tengu Feedback Survey Configuration
The feedback survey is controlled by a feature flag 'tengu_feedback_survey_config'. Default settings include a minimum of 10 minutes before feedback is shown and a 1-hour gap between surveys.

### Feedback Survey Response Mapping
Feedback survey responses are mapped to inputs '0' for 'dismissed', '1' for 'bad', '2' for 'fine', and '3' for 'good'.

### Default Transcript Ask Probability
The default probability for asking users to share their transcripts is set to 0, indicating it may be disabled by default.

### TENGU Guest Pass Feature
The code references a feature flag 'tengu_guest_passes_link_copied' which is triggered when a referral link is copied to the clipboard. This suggests an internal guest pass system under the codename TENGU.

### Grace Period for Policy Update
The code includes a grace period notice for an update to the Consumer Terms and Privacy Policy effective October 8, 2025. This notice includes changes like extending data retention to 5 years.

### Wizard Step Counter Default Behavior
The `WizardProvider` component defaults the `showStepCounter` to `true` if not explicitly set. This behavior is not documented publicly, potentially leading to unexpected UI elements for developers unaware of this default.

### Default Model Set to 'sonnet'
The ModelSelector component defaults to using the 'sonnet' model if no initial model is specified. This is not documented publicly.

### Hidden File List Limit in DiffFileList
The DiffFileList component has a hidden limit of 5 files that can be displayed at once, controlled by the constant `MAX_VISIBLE_FILES`. This limit is not documented publicly, which could lead to confusion when users have more than 5 files in a diff.

### Turn Diff to DiffData Conversion
The function `turnDiffToDiffData` converts turn diffs into a structured format for display, but this conversion process is not detailed in public-facing materials. It involves sorting files by path and mapping hunks for each file.

### CapabilitiesSection Returns 'none' for Empty Capabilities
The CapabilitiesSection component explicitly returns the string 'none' when there are no capabilities to display. This behavior is not documented, potentially affecting how users perceive server capabilities.

### MCP Scope Order Includes 'Enterprise'
The MCP scope order includes a previously undocumented 'enterprise' level, suggesting a tiered configuration system. The order is: ['project', 'local', 'user', 'enterprise', 'dynamic'].

### FlashingChar Uses Early Return Sentinel
FlashingChar utilizes a Symbol.for("react.early_return_sentinel") to manage early returns, which is not a common practice in React components.

### SpinnerGlyph Reduced Motion Cycle Timing
SpinnerGlyph defines a reduced motion cycle of 2000ms, with 1 second visible and 1 second dim, which may affect accessibility settings.

### Error Red Color Interpolation in Spinner
The `GlimmerMessage` component interpolates between the theme's message color and a hardcoded ERROR_RED color when `stalledIntensity` is greater than 0, providing a visual cue for stalled processes.

### Command List Display Truncation Logic
The commandListDisplayTruncated function truncates the command list to 'similar' if the plain text representation exceeds 50 characters. This behavior is not documented.

### WorkerBadge Component Uses Caching
The WorkerBadge component uses a caching mechanism with a React compiler runtime function _c(7) to optimize rendering by storing previous props and results. This caching is not documented publicly.

### ShimmerLoadingText Uses Animation
The ShimmerLoadingText component uses a shimmer animation for the loading message, controlled by useShimmerAnimation with specific parameters like 'responding' and 'inactive'. This animation detail is not publicly documented.

### Explanation Promise Uses AbortController
The createExplanationPromise function uses an AbortController to create a signal for the fetch request, though it notes the request is fast enough not to abort. This use of AbortController is not publicly documented.

### Desktop Upsell Dismissal Threshold
The desktop upsell dialog is dismissed if it has been seen 3 times, as indicated by the 'desktopUpsellSeenCount' configuration. This threshold is a specific design decision to limit user exposure.

### Sandbox Mode Detection Logic
The `SandboxSettings` component uses a function `getCurrentMode` to determine the current sandbox mode, which can be 'auto-allow', 'regular', or 'disabled'. This decision is based on whether sandboxing is enabled and if auto-allow is activated.

### Sandbox Warning Display Logic
In `SandboxSettings`, warnings are only displayed if there are warnings present and not all Unix sockets are allowed. This is controlled by the `showSocketWarning` variable.

### Undocumented Sandbox Config Restrictions
The SandboxConfigTab component reveals undocumented configurations like filesystem read/write restrictions and network restrictions, which are managed through specific configurations.

### Structured Diff Change Threshold
The StructuredDiffFallback component uses a change threshold of 0.4 to decide between full-line and word-level diffing. This specific threshold impacts how differences are visually represented.

### Dynamic Max Height Calculation
The maxHeight for the Commands component is dynamically calculated as half the terminal's row count: 'const maxHeight = Math.floor(rows / 2);'. This is not mentioned in public documentation.

### Visible Command Count Calculation
The number of visible commands is calculated as 'Math.max(1, Math.floor((maxHeight - 10) / 2))'. This specific calculation is not detailed in public resources.

### SkillsMenu Groups Skills by Source
The SkillsMenu component groups skills into categories like 'policySettings', 'userSettings', 'projectSettings', 'localSettings', 'flagSettings', 'plugin', and 'mcp'. This grouping logic is not detailed in public documentation.

### Reset Cursor on Update Flag
The SelectInputOption component includes a resetCursorOnUpdate flag, which automatically resets the cursor to the end of the line when the option becomes focused or the input value changes. This is designed to prevent cursor position bugs.

### Hidden Focus Wrapping Behavior
The focus navigation wraps to the first or last item when reaching the end or beginning of the list, but this behavior can be overridden by providing specific callbacks. This is not documented in public-facing materials.

### Hidden Feature: Allow Empty Submit for Input Options
The `allowEmptySubmitToCancel` flag in `OptionWithDescription` allows input options to treat empty submissions as valid. By default, empty submissions are canceled, but setting this flag to `true` changes this behavior, allowing immediate submission on Enter.

### Shimmer Effect Cycle Length Calculation
The shimmer effect in HighlightedInput is calculated with a cycle length of `hi - lo + 20`, where `lo` and `hi` are the minimum and maximum positions of highlights with shimmer color. This adds a buffer of 20 to the shimmer cycle.

### Sandbox Violation Tracking Mechanism
The code tracks sandbox violations and displays a hint if operations are blocked. This mechanism uses a subscription model to update violation counts in real-time.

### Input Truncation Limit: 10,000 Characters
The input is truncated if it exceeds 10,000 characters, which is not commonly documented. This limit affects how much data can be processed at once.

### Task Notifications Capped at Three
The maximum number of task notification lines shown to users is capped at 3, as defined by `MAX_VISIBLE_NOTIFICATIONS`. Excess notifications are summarized in a synthetic overflow message.

### Surprising Text Truncation Thresholds
The code sets a truncation threshold at 10,000 characters and a preview length of 1,000 characters for input text. These specific numbers dictate when and how text is truncated in the UI.

### Tabs Context Default Values
The Tabs component's context sets default values for components rendered outside of a Tabs context, such as headerFocused being false and focusHeader as a no-op.

### Pane Component Modal Behavior
The Pane component behaves differently when used inside a modal. It uses a different Box configuration with 'paddingX={1}' and 'flexShrink={0}' to adjust its layout, which is not documented publicly.

### Divider Component Defaults
The Divider component defaults to using the character '─' and a padding of 0 if not specified. This behavior is not clearly documented, which could lead to unexpected rendering results.

### ProgressBar Block Characters
The ProgressBar component uses a specific set of block characters [' ', '▏', '▎', '▍', '▌', '▋', '▊', '▉', '█'] to represent progress. This choice of characters is not documented and affects the visual representation of progress.

### Status Icon Color Mismatch
The StatusIcon component uses a 'suggestion' color for 'info' status, which is not documented. This differs from the expected 'info' color, potentially leading to unexpected UI behavior.

### Theme Color Bypass in Color Function
The color function allows bypassing theme lookups by using raw color values like 'rgb()', '#', 'ansi256()', or 'ansi:'. This can lead to inconsistencies if not managed carefully.

### Ratchet Component Visibility Lock Behavior
The Ratchet component has a 'lock' prop defaulting to 'always', which engages when the component is offscreen. This behavior isn't publicly documented, and it affects how components are rendered based on their visibility.

### Tengu Overage Credit Upsell Feature Flag
The code contains a feature flag 'tengu_overage_credit_upsell_shown' used for logging events related to the overage credit upsell. This flag is part of a system that limits the display of upsell messages to a maximum of 3 impressions.

### Backend-Only Overage Credit Eligibility Check
The eligibility for overage credit grants is determined entirely by the backend, with the CLI not replicating tier, threshold, or role checks. This means that the frontend relies on the backend's 'available' flag to decide if a user should see the upsell.

### Max Impressions Limit for Upsell Messages
The system enforces a maximum of 3 impressions for the overage credit upsell messages, after which users will no longer see these messages unless they reset their config.

### AnimatedAsterisk Respects Motion Preferences
AnimatedAsterisk respects user motion preferences by checking prefersReducedMotion at mount. It avoids re-rendering on settings changes, ensuring consistent animation behavior.

### AnimatedClawd Click-Triggered Animations
AnimatedClawd features click-triggered animations like JUMP_WAVE and LOOK_AROUND. These animations are only active when mouse tracking is enabled, providing interactive feedback.

### AnimatedAsterisk Animation Timing Details
The AnimatedAsterisk component uses precise timing for its animation, with SWEEP_DURATION_MS set to 1500ms and a total animation time of 3000ms, ensuring smooth transitions.

### Voice Mode Notice Limit
The 'VoiceModeNotice' component has a surprising limit of showing the notice a maximum of 3 times, controlled by the constant 'MAX_SHOW_COUNT'. This could affect user awareness of the feature.

### ANT-ONLY What's New Feed
The 'createWhatsNewFeed' function contains a conditional check for 'external' being 'ant', which changes the title and empty message to indicate it's for 'ANT-ONLY: Latest CC commits'. This suggests an internal-only feature or environment.

### Clawd Pose Adaptation for Apple Terminal
In Apple Terminal, Clawd's arm poses default to the 'default' pose due to a background fill trick, meaning only eye poses are used.

### WelcomeV2 Component Width Constraint
The WelcomeV2 component has a fixed width of 58 characters, which may affect how it displays in different terminal environments.

### ANT-ONLY Feature: Classifier-Reviewed Option for Bash
The code mentions a classifier-reviewed option for Bash that is an 'ANT-ONLY' feature, suggesting restricted access or internal testing.

### Hidden Feature Flag: hideSubmitTab
The 'hideSubmitTab' feature flag is used internally to conditionally hide the submit tab in the QuestionNavigationBar component. It defaults to false, meaning the submit tab is shown unless explicitly hidden.

### SSE URL Transformation for Secure Protocols
When using SSE transport, the code transforms WebSocket URLs to HTTPS by appending `/worker/events/stream`. This transformation is not documented and could affect how URLs are constructed and used.

### Tengu Telemetry Feature Flag
The code contains a feature flag 'tengu_ws_transport_*' that gates telemetry events specifically for Remote Control sessions. This flag is set to true at the REPL-bridge construction site, ensuring that only sessions with Cloudflare idle-timeout emit telemetry events, while print-mode workers remain silent.

### WebSocket Sleep Detection Threshold
The WebSocketTransport uses a sleep detection threshold set to 60 seconds to determine if the machine has slept. If the gap between reconnection attempts exceeds this, it resets the reconnection budget and retries.

### Stream Event Flush Interval
Stream events accumulate in a delay buffer for up to 100 milliseconds before being enqueued. This mirrors the HybridTransport's batching window and ensures that each emitted event is self-contained, allowing new clients to see complete text.

### POST Timeout and Grace Period
The POST timeout is set to 15 seconds to prevent a single stuck POST from blocking the serialized queue. Additionally, there's a 3-second grace period for queued writes on close, which exceeds the 2-second cleanup budget.

### Reconnect and Liveness Timeouts
The system allows for reconnection attempts for up to 10 minutes, with a base delay of 1 second and a maximum delay of 30 seconds. Connections are considered dead after 45 seconds of silence, despite server keepalives every 15 seconds.

### Hidden Event Log: 'tengu_mcp_start'
The 'mcpServeHandler' function logs a hidden event 'tengu_mcp_start' when the MCP server starts. This event is not documented publicly and suggests internal tracking of MCP server usage.

### Auto Mode Config Uses Replace Semantics
The 'autoModeConfigHandler' function uses 'replace semantics' for user settings, meaning any non-empty user section completely replaces defaults, while empty sections fall back to defaults. This behavior is not clearly documented.

### MCPConnectionManager: Internal-Only Usage
The MCPConnectionManager component is used internally for managing connections, but its specific purpose and configuration are not publicly documented.

### Consistent Marketplace Error Handling
The handleMarketplaceError function provides a consistent way to handle errors in marketplace commands, ensuring users receive clear feedback.

### Detailed ValidationError Structure
The ValidationError type includes detailed fields like 'mcpErrorMetadata' and 'suggestion', which are not typically exposed in public documentation. This provides more context for configuration errors.

### Deletion Grace Period for Settings
The DELETION_GRACE_MS is set to 1700 milliseconds, allowing a grace period before processing a settings file deletion to handle delete-and-recreate patterns.

### Priority of Setting Sources
The order of SETTING_SOURCES determines priority, with later sources like 'policySettings' overriding earlier ones such as 'userSettings'.

### Claude Opus 4.6 as Default Model Fallback
The getHardcodedTeammateModelFallback function defaults to using Claude Opus 4.6 for new teammates if no model is set in the config. This choice is not publicly documented and shows a preference for this model version.

### Unique Swarm Socket Naming with PID
Swarm socket names include the process ID to prevent conflicts between multiple Claude instances, ensuring isolated swarm operations.

### Environment Variable for Plan Mode Enforcement
The PLAN_MODE_REQUIRED_ENV_VAR enforces plan mode for teammates before implementation, requiring approval before writing code.

### Teammate Color Assignment Round-Robin
Teammate colors are assigned in a round-robin manner from a predefined palette. The colorIndex variable is used to track the next color to assign, and it resets during team cleanup.

### Hidden Feature Flag: Tengu Input Bash
The code logs an event 'tengu_input_bash' when processing a bash command, indicating a hidden feature flag or internal tracking mechanism related to bash command processing.

### Compact Boundary Metadata Handling
The system handles 'compact_boundary' messages by converting SDK compact metadata to internal format, preserving segment UUIDs.

### Plugin Policy Blocking Mechanism
Plugins can be force-disabled by organization policy, preventing installation or enabling by users.

### SKILL.md as Leaf Container in Plugin Directory
The `walkPluginMarkdown` function treats directories containing a `SKILL.md` file as leaf containers, meaning it will process all `.md` files in that directory but will not recurse into subdirectories. This behavior is not documented publicly.

### Path Traversal Prevention in Plugin Paths
The `validatePathWithinPlugin` function ensures that resolved paths remain within the plugin directory to prevent path traversal attacks. This involves checking if the relative path starts with `..` or is an absolute path.

### Flexible Git SSH URL Handling
The `parseMarketplaceInput` function supports a wide range of Git SSH URL formats, including custom usernames and self-hosted setups. This flexibility is not highlighted in public-facing materials.

### Plugin Settings Have Lowest Priority
Plugin-related settings from --add-dir directories have the lowest priority, meaning they are overridden by user, project, local, flag, and policy settings. This is contrary to typical settings precedence where local settings often have higher priority.

### Seed Marketplaces Registration
Claude registers seed marketplaces (CLAUDE_CODE_PLUGIN_SEED_DIR) before performing background installations. This prevents unnecessary cloning of seed marketplaces, which could otherwise defeat their purpose.

### Official Marketplace Auto-Install Retry Logic
The auto-installation of the official marketplace retries up to 10 times with an exponential backoff strategy. Initial delay is 1 hour, doubling each attempt, capped at a maximum delay of 1 week.

### Reserved Marketplace Names for Anthropic Use
Anthropic has reserved specific marketplace names like 'claude-plugins-official' and 'anthropic-marketplace' for exclusive use, blocking impersonation attempts.

### Exclusion from Marketplace Auto-Update
The 'knowledge-work-plugins' marketplace is excluded from the default auto-update behavior, unlike other official marketplaces.

### Traffic Separation for Official Repo
The system can separate traffic to the 'anthropics/claude-plugins-official' repository from user-configured marketplaces, indicating focused monitoring.

### Plugin Version Calculation Order
The plugin version calculation prioritizes the version from plugin.json, followed by a provided version, then a Git commit SHA, and finally defaults to 'unknown'. This order of preference is not commonly documented.

### Plugin Delisting Detection and Auto-Uninstall
The system automatically detects and uninstalls plugins that have been removed from the marketplace. This feature is controlled by the 'forceRemoveDeletedPlugins' flag in the marketplace configuration, which is not publicly documented.

### LSP Recommendation Limitation on External Configs
The LSP plugin recommendation system only works for plugins that declare their servers inline in the marketplace entry. It cannot detect plugins with separate .lsp.json files until after installation.

### Max Ignored LSP Recommendations Count
The system stops showing LSP plugin recommendations after a user ignores them five times. This threshold is not mentioned in public documentation.

### Force-for-Plugin Flag Supports Multiple Types
The 'force-for-plugin' flag in output styles supports both boolean and string values, which may not be commonly known.

### 'Flag' Scope for Session-Only Plugins
The `ExtendedPluginScope` type includes a 'flag' scope for session-only plugins, which is not persisted to `installed_plugins.json`. This means plugins with this scope are temporary and not saved across sessions.

### Official Marketplace Names for Telemetry Redaction
The function `isOfficialMarketplaceName` checks if a marketplace name is Anthropic-controlled. Official plugin identifiers are logged to general-access metadata, while third-party identifiers are restricted to PII-tagged columns.

### GCS Marketplace Fetch with Sentinel Check
The system fetches the official marketplace from a GCS mirror instead of cloning from GitHub on startup. It uses a `.gcs-sha` sentinel to check if a new zip file needs downloading, avoiding unnecessary downloads.

### CDN Caching Strategy for Marketplace Zips
Marketplace zips are content-addressed by SHA allowing indefinite CDN caching, while the `latest` pointer has a max-age of 300 seconds to limit staleness.

### Defense Against Path Traversal in Plugin Installation
The system includes a defense mechanism that validates paths to prevent path traversal attacks, ensuring resolved paths stay within a base directory.

### Marketplace Reconciler Codename
The 'Marketplace reconciler' is internally codenamed as a utility to ensure the 'known_marketplaces.json' file aligns with the intended settings. It uses functions like 'diffMarketplaces()' and 'reconcileMarketplaces()' to manage this synchronization.

### Switching Plugin Directories via Flags
The system supports switching between 'plugins' and 'cowork_plugins' directories using a CLI flag '--cowork' or an environment variable 'CLAUDE_CODE_USE_COWORK_PLUGINS'. This allows dynamic configuration of plugin directories.

### Plugin Seed Directory Layering
Anthropic allows multiple plugin seed directories to be layered using the platform path delimiter. This provides a read-only fallback layer, enabling pre-baked plugin directories in container images.

### Plugin Autoupdate Requires Restart
The plugin autoupdate functionality updates plugins on disk but requires a restart for changes to take effect. This behavior is not commonly documented and may surprise users expecting immediate updates.

### Skill File Command Naming Convention
Skill files named 'SKILL.md' use the parent directory name for command naming, while regular files use the filename without the .md extension. This distinction affects how commands are referenced internally.

### PowerShell Detection on Linux
On Linux, if PowerShell is detected via a snap launcher, the code attempts to use direct binaries from known apt/rpm locations to avoid subprocess hangs. This is a workaround for snapd initialization issues.

### PowerShell UTF-16LE Base64 Encoding
PowerShell commands are base64-encoded as UTF-16LE to ensure they survive any shell-quoting layer. This encoding choice is not publicly documented but is crucial for command integrity.

### Environment API Timeout Setting
The API request to fetch environments has a timeout setting of 15,000 milliseconds (15 seconds), which indicates a design decision to handle potentially long network operations.

### CCR_BYOC_BETA Feature Flag
The code contains a feature flag 'CCR_BYOC_BETA' with a date set to '2025-07-29'. This suggests a planned or ongoing beta feature related to 'CCR BYOC' that is not publicly documented.

### Teleport API Retry Configuration
The Teleport API uses an exponential backoff strategy for retries with specific delays: 2s, 4s, 8s, and 16s, totaling 5 attempts. This is not documented publicly.

### Tengu Bundle Max Bytes Limit
The default maximum size for git bundles in the CCR seed-bundle process is 100MB, tunable via 'tengu_ccr_bundle_max_bytes'. This limit is not publicly documented.

### Fallback Storage Deletion Logic
When migrating data from secondary to primary storage, the secondary storage is deleted to preserve credentials across environments. This ensures that stale primary entries do not shadow fresh secondary data.

### Chrome Native Host Now Pure TypeScript
The Chrome native messaging host functionality, previously implemented as a Rust NAPI binding, is now entirely in TypeScript. This transition could impact performance or compatibility, as TypeScript may handle certain operations differently than Rust.

### 1MB Limit on Chrome Messages
The maximum message size that can be sent to Chrome is capped at 1MB. This limit could affect the handling of large data sets or complex operations within the browser automation context.

### Tab Context Required at Session Start
At the start of each browser automation session, Claude must call mcp__claude-in-chrome__tabs_context_mcp to gather information about the user's current tabs. This ensures the automation is context-aware and avoids creating unnecessary new tabs.

### Internal Chrome Extension IDs
Anthropic uses specific Chrome extension IDs for production and internal development. The production ID is 'fcoeoabgfenejglbffodgkkbkcdhcgfn', while internal IDs include 'dihbgbndebgnbjfmelmegjepbnkhlgni' and 'dngcpimnedloihjnnfngkgjoidhnaolf'.

### Auto Mode Check with TRANSCRIPT_CLASSIFIER
The `checkAndDisableAutoModeIfNeeded` function is gated by the `TRANSCRIPT_CLASSIFIER` feature flag. This suggests that auto mode behavior is contingent on this internal feature, which is not mentioned in public documentation.

### Protected Dangerous Files and Directories
Certain files and directories are marked as dangerous and protected from auto-editing. These include '.gitconfig', '.bashrc', and directories like '.git' and '.vscode'.

### Snapshot Creation Timeout Set to 10 Seconds
The snapshot creation process in the shell is set to timeout after 10 seconds. This specific timeout value could impact performance under certain conditions.

### Command Length Limit: 10,000 Characters
The parser imposes a maximum command length of 10,000 characters. Commands exceeding this length are not processed, which may impact users with very large scripts.

### 50ms Parse Timeout Limit
The bash parser has a 50ms wall-clock timeout cap to handle pathological inputs. This can be bypassed by passing `Infinity` to the `parse` function.

### Internal Fig Spec Loading
The system attempts to load command specifications from Fig's autocomplete library, indicating an internal dependency on Fig's ecosystem.

### Regex Fallback for Command Parsing Deprecated
The `RegexParsedCommand_DEPRECATED` class indicates that regex-based command parsing is deprecated and only used when the tree-sitter parser is unavailable. This suggests a shift towards more robust parsing methods using tree-sitter, with the regex path serving as a legacy fallback.

### Heredoc Extraction Limitations in Bash Parsing
The heredoc extraction utility acknowledges limitations, such as failing to extract heredocs inside backtick command substitutions and complex multi-heredoc scenarios. This could lead to parsing failures or require manual approval for subcommands.

### Unique Heredoc Placeholder Generation
The code uses a unique placeholder for heredocs by generating a random hex string to prevent collisions. This ensures that command text containing '__HEREDOC_N__' does not interfere with parsing.

### Shell Quote Parsing Quirks in Bash Commands
The `rearrangePipeCommand` function has several conditions where it falls back to quoting the entire command due to shell-quote's limitations. For example, it cannot handle backticks, command substitutions, shell variables, control structures, or bare newlines correctly. This fallback behavior is not documented publicly.

### Complex Wrapper Command Handling Logic
The `getCommandPrefixStatic` function includes logic to handle wrapper commands, which have complex option handling. It uses recursion to resolve these commands, with a maximum recursion depth of 10 and wrapper count of 2. This specific handling is not detailed in public documentation.

### PowerShell Static Prefix Extraction Logic
The PowerShell static prefix extraction uses an AST parser instead of tree-sitter, and it avoids suggesting commands with path-like invocations or dynamic elements. This mirrors bash's logic but with PowerShell-specific adaptations.

### Internal List of Dangerous PowerShell Cmdlets
Claude maintains a list of dangerous PowerShell cmdlets that execute arbitrary code, including 'invoke-command', 'start-job', and 'import-module'. These are used to prevent unsafe suggestions.

### Drain RunLoop Timeout Set to 30 Seconds
The `drainRunLoop` function has a timeout set to 30,000 milliseconds (30 seconds). If the timeout is exceeded, it throws an error indicating the native call took too long.

### Shared RunLoop Pump with Retain/Release Mechanism
A shared CFRunLoop pump is used with a retain/release mechanism, calling `_drainMainRunLoop` every 1ms while any main-queue-dependent call is pending.

### Chicago MCP Unhide Timeout
The Chicago MCP feature has a generous unhide timeout of 5000ms, which is much longer than expected for an operation meant to be instant. This suggests a design choice prioritizing continuity over performance.

### Tengu Malort Pedway Feature Flag
The feature flag 'tengu_malort_pedway' is used to configure Chicago MCP, suggesting a secret or experimental feature related to user interface or interaction.

### Chicago MCP Subscription Check
Chicago MCP is only enabled for 'max' or 'pro' subscription tiers, with an exception for internal 'ant' users, indicating a tiered feature rollout strategy.

### Chicago MCP Lock File Mechanism
Chicago MCP uses a lock file 'computer-use.lock' to manage session concurrency, with a unique session ID and PID, preventing multiple sessions from interfering.

### Path Allowlist for Installed Apps
The `PATH_ALLOWLIST` restricts visible apps to those under specific roots like `/Applications/` and `/System/Applications/`, filtering out OS plumbing paths. This approach avoids blocklisting every junk subpath, which is impractical due to frequent macOS updates.

### ComputerUseSwift is macOS-Only
The ComputerUseSwift module is exclusively available on macOS platforms. Attempting to use it on other platforms will throw an error.

### Loopback Allowed in SSRF Guard
The SSRF guard explicitly allows loopback addresses (127.0.0.0/8 and ::1) for local development purposes, even though it blocks other private and link-local address ranges.

### Specific IP Range Blocking in SSRF Guard
The SSRF guard blocks specific IP ranges, including 0.0.0.0/8, 10.0.0.0/8, 100.64.0.0/10, 169.254.0.0/16, 172.16.0.0/12, and 192.168.0.0/16 for IPv4, and ::, fc00::/7, fe80::/10 for IPv6.

### Task Output File Size Cap
Task output files have a maximum size cap of 5GB, as defined by `export const MAX_TASK_OUTPUT_BYTES = 5 * 1024 * 1024 * 1024`. This is a significant limit for handling large data outputs.

### Session ID Capture Timing
The session ID for task output directories is captured at the first call and not re-read on every invocation. This design prevents issues with concurrent sessions clobbering each other's output files.

### Task Output Limits and Truncation Behavior
The maximum task output length is capped at 160,000 characters, with a default of 32,000. Outputs exceeding this are truncated, and a header with the file path is prepended.

### Task Polling Interval and Display Durations
Tasks are polled every 1000ms, with killed tasks displayed for 3000ms before eviction. Terminal tasks have a 30,000ms grace period in the coordinator panel.

### Bedrock Region Fallback to us-east-1
The Bedrock client defaults to the 'us-east-1' region if neither 'AWS_REGION' nor 'AWS_DEFAULT_REGION' environment variables are set. This ensures consistent region behavior.

### API Provider Detection Logic
The system determines the API provider using environment variables like 'CLAUDE_CODE_USE_BEDROCK'. This affects which backend services are used, such as 'bedrock', 'vertex', or 'foundry'.

### Model Aliases and Wildcard Handling
The system uses model aliases and family aliases to simplify model selection. For instance, 'opus' acts as a wildcard allowing any version of the opus model family.

### Ant User Type Checks for Model Access
Access to certain models and features is restricted to users with the 'ant' user type, ensuring that experimental or internal features remain hidden from general users.

### Opus and Sonnet 1M Context Upgrade
There is an internal feature for upgrading to 'Opus 1M' and 'Sonnet 1M' models, offering 5x more context if access checks pass.

### Model Family Allowlist Specificity
The allowlist logic prioritizes specific model entries over family aliases, narrowing access to particular versions.

### Discrepancy in Model Deprecation Dates
The deprecation dates for models differ across providers. For example, 'Claude 3.7 Sonnet' retires on February 19, 2026 for 'firstParty' but on April 28, 2026 for 'bedrock'.

### Internal-Only Fields Stripped in Schema
The ModelCapabilitySchema uses .strip() to remove internal-only fields like 'mycro_deployments' before persisting data.

### Model Configurations Include Specific Launch Dates
Model configurations include specific launch dates, such as 'claude-opus-4-5-20251101', indicating planned release timelines.

### Bedrock Model String Resolution Logic
The system uses a fallback mechanism to resolve model strings for Bedrock, defaulting to hardcoded IDs if no match is found in the user's inference profile list. This behavior is not publicly documented.

### File Persistence Concurrency Limit
The file persistence system has a default upload concurrency limit, which is not publicly documented. This limit could impact performance in high-load scenarios.

### Ultraplan CCR Session Polling Mechanism
The `ccrSession.ts` file reveals a polling mechanism for '/ultraplan' sessions, with a 30-minute duration making around 600 calls. It uses a 3-second interval and allows up to 5 consecutive failures before stopping.

### Strict Matching Threshold in Fuse.js
The Fuse.js search implementation uses a threshold of 0.3, which is relatively strict for matching commands. This suggests a design choice prioritizing precision over recall in command searches.

### Telemetry Export Intervals
Telemetry in Claude Code has specific default export intervals: metrics every 60 seconds, logs every 5 seconds, and traces every 5 seconds. These intervals are crucial for understanding the frequency and potential load of telemetry data being sent.

### Twin-Column Privacy Pattern in Telemetry
The telemetry system employs a twin-column privacy pattern, where user-defined fields emit both raw and redacted values. This ensures privacy by routing raw values to PII-tagged columns and using redacted values unless the marketplace is allowlisted.

### Secret Feature Flag: tengu_trace_lantern
The 'tengu_trace_lantern' GrowthBook gate is used to allowlist organizations for beta session tracing in interactive mode. This feature is not publicly documented.

### Beta Tracing Visibility Rules
Beta session tracing has different visibility rules for external users and 'ant' users. 'Thinking output' is only visible to 'ant' users, which is not mentioned in public documentation.

### Stale Fetch Warning Threshold
A warning is shown if a repo hasn't been fetched in over 7 days, indicating the CLAUDE.md may be stale. This specific threshold is not publicly documented.

### Deep Link Terminal Preference Capture
The system captures the user's terminal preference from the TERM_PROGRAM environment variable on macOS to ensure the correct terminal is used for deep links. This behavior is not publicly documented.

### Failure Backoff Timeout
The protocol handler registration includes a failure backoff mechanism with a timeout of 24 hours (86,400,000 milliseconds) to prevent repeated registration attempts.

### Secret Deep Link Protocol for Claude CLI
The Claude CLI supports a hidden deep link protocol 'claude-cli://' which allows launching the CLI with specific commands directly from a URL. This feature is not publicly documented.

### Tmux Swarm Socket Usage
The TmuxBackend uses a separate 'swarm socket' for operations in a standalone swarm session, distinct from the user's original tmux session. This is done using the command `runTmuxInSwarm` which includes the argument `-L` followed by the result of `getSwarmSocketName()`. This setup is not publicly documented.

### In-Process Fallback Activation
Claude activates an in-process fallback mode if no pane backend is available, such as when neither iTerm2 nor tmux is installed. This fallback is indicated by the `inProcessFallbackActive` flag.

### First Source Wins Policy for MDM Settings
Claude Code uses a 'first source wins' policy for MDM settings, meaning the highest-priority source that exists provides all policy settings. This could lead to unexpected behavior if a lower-priority source is updated but not recognized due to a higher-priority source being present.

### Windows Registry Policy Paths
Claude Code uses specific Windows registry paths for MDM policies, located under SOFTWARE\Policies\ClaudeCode. These paths are chosen to ensure compatibility across 32-bit and 64-bit processes, avoiding issues with registry redirection.

### Inline Admin Dashboard Fallback
If the admin HTML file is missing, the system falls back to serving an inline HTML string. This ensures the admin dashboard is always available, albeit in a basic form.

### User Hourly Rate Limiter with 100 Sessions Default
The UserHourlyRateLimiter class limits new session creations to 100 per user per hour by default. This is controlled by the 'maxSessionsPerHour' parameter, which defaults to 100 if not specified.

### Exponential Backoff for Reconnects
The reconnect delay for WebSocket connections uses an exponential backoff strategy, starting at 1 second and capping at 30 seconds.

### Surprising Session Limits and Defaults
The system imposes a maximum of 10 sessions overall and 3 sessions per user by default, which may not be expected by users.

### Internal Rate Limiter with Cleanup Mechanism
The ConnectionRateLimiter class includes a cleanup method to remove stale entries, which is not a common feature in basic rate limiters.

### Scrollback Buffer Capacity Defaults to 100KB
The ScrollbackBuffer class defaults to a capacity of 100KB for storing PTY output, which is a specific design choice not publicly documented.

### Connection Rate Limiter Details
The rate limiter allows a configurable number of connections per IP within a 60-second window, with a default cleanup mechanism for stale entries.

### Teammate Idle Behavior
Teammates in a team automatically go idle between turns and send a notification. Users are advised to be patient with idle teammates and not comment on their idleness unless it impacts work.

### REPL Mode Default-On for 'Ants'
REPL mode is default-on for users identified as 'ants' in the CLI, but not for SDK entrypoints. This is controlled by the environment variable `CLAUDE_CODE_REPL` and `CLAUDE_REPL_MODE`.

### Durable Cron Kill Switch
A separate feature gate 'tengu_kairos_cron_durable' controls disk-persistent cron tasks, defaulting to true. This gate does not consult 'CLAUDE_CODE_DISABLE_CRON', which kills the entire scheduler.

### Cron Refresh Interval Set to 5 Minutes
The cron scheduling system refreshes its feature gate status every 5 minutes. This interval balances responsiveness with resource usage.

### V8/Bun String Length Limit
The code notes a V8/Bun string length limit of ~2^30 characters (~1 billion), which is crucial for understanding file size handling in Claude.

### Git Safety for Sandbox Escape Prevention
The code includes specific measures to prevent sandbox escape via Git, such as detecting bare-repo attacks and normalizing paths to avoid re-entry into the current working directory.

### Auto-Allowance of Cmdlets in Accept Edits Mode
In 'acceptEdits' mode, certain filesystem-modifying cmdlets like 'set-content', 'add-content', 'remove-item', and 'clear-content' are automatically allowed. This is controlled by the `ACCEPT_EDITS_ALLOWED_CMDLETS` set.

### Arg Leaks Value Function in PowerShell
The 'argLeaksValue' function checks for potential leaks by analyzing command elements, ensuring only safe types like 'StringConstant' and 'Parameter' are allowed, preventing leaks via unsafe types.

### PowerShell Executables Detection Logic
The function isPowerShellExecutable checks if a command name is a PowerShell executable by comparing against a set of known names and extracting the base name from paths. This includes handling both '/' and '\' path separators.

### Dynamic Model Options Handling
Claude Code dynamically generates a section for model options, which can include options like sonnet, opus, haiku, best, or a full model ID. This is done through a try-catch block to handle potential errors.

### Auto-Compact When Context is Full
The 'autoCompactEnabled' setting automatically compacts data when the context is full, which could impact performance and data retention strategies. This feature is not prominently featured in public documentation.

### 64KB Read Limit for Symbol Extraction
The getSymbolAtPosition function reads only the first 64KB of a file to extract symbols, assuming most targets are near recent edits. This limit could lead to incomplete symbol extraction if the target is beyond this window.

### Inclusive Regex for Symbol Extraction
The symbol extraction regex in getSymbolAtPosition is designed to handle various programming languages, including Rust lifetimes and macros, by matching alphanumeric characters, underscores, dollars, and special symbols.

### MIME Type Dispatch for File Uploads
The system dispatches uploads based on MIME type, with images being processed differently than other files. Images are uploaded with a preview, while other files are stored as originals only. This approach optimizes how different file types are handled and displayed.

### Hidden Command Semantics for Exit Codes
The code defines specific exit code interpretations for commands like 'grep', 'find', and 'diff', deviating from default success/failure semantics. For example, 'grep' treats exit code 1 as 'No matches found', not an error.

### Hidden 'run_in_background' Feature Flag
The code includes a hidden feature flag 'run_in_background' that allows commands to run in the background without immediate output. This is not documented publicly and is controlled by the environment variable 'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS'.

### Sed Edit Command Parser with Placeholders
The sedEditParser.ts file uses unique null-byte placeholders for BRE to ERE conversion in sed commands. These placeholders are BACKSLASH_PLACEHOLDER, PLUS_PLACEHOLDER, among others, ensuring they don't appear in user input.

### Use of Deprecated Command Splitter
The code repeatedly uses 'splitCommand_DEPRECATED' to parse bash commands, indicating reliance on deprecated utilities.

### Sed Validation Allowlist Details
The sed validation function only allows specific flags: -n, --quiet, --silent, -E, --regexp-extended, -r, -z, --zero-terminated, --posix. Combined flags are parsed character by character.

### Dangerous Path Check for rm/rmdir
The system checks rm/rmdir commands against a list of dangerous paths, requiring explicit user approval even if allowlist rules exist. This prevents data loss from commands like `rm -rf /`.

### Background Hint with Ctrl+B
The BackgroundHint component allows users to background all running foreground commands by pressing Ctrl+B. This feature is disabled if the environment variable CLAUDE_CODE_DISABLE_BACKGROUND_TASKS is set to true.

### LocalShellTask Cleanup Procedures
LocalShellTask includes specific cleanup procedures, such as unregistering cleanup functions and clearing timeouts, to prevent resource leaks. This is critical for maintaining system stability.

### Stall Watchdog Thresholds in LocalShellTask
The stall watchdog in LocalShellTask triggers notifications if output stops growing for 45,000 ms and checks every 5,000 ms. This is not documented publicly.

### LocalShellTask Kind Variants
LocalShellTask supports two kinds: 'bash' and 'monitor'. The 'monitor' kind shows a description instead of a command and has a distinct UI presentation.

### Yoga Layout Defaults to LTR Direction
The Yoga layout engine defaults to using the Left-to-Right (LTR) direction when calculating layouts, as seen in the `calculateLayout` method.

### Alternate Screen Buffer Behavior
The AlternateScreen component uses DEC 1049 to enter the alternate screen buffer, clearing it and homing the cursor. It constrains its height to the terminal row count and enables SGR mouse tracking by default. On unmount, it restores the main screen's content.

### Internal Clock Tick Interval Doubled When Blurred
The internal clock's tick interval doubles when the terminal is not focused, using `BLURRED_TICK_INTERVAL_MS = FRAME_INTERVAL_MS * 2`. This behavior is not documented publicly and may affect animations or time-sensitive operations when the terminal loses focus.

### Internal App Context with Exit Method
The `AppContext` provides an `exit` method to unmount the entire Ink app. This internal feature is marked by `AppContext.displayName = 'InternalAppContext'`, indicating it is not intended for public use.

### Box Component Handles Extensive Event Listeners
The Box component supports a wide range of event listeners, including onClick, onFocus, onBlur, and mouse events, similar to a DOM element. This allows for complex interaction handling directly within Ink applications.

### ScrollBox's Sticky Behavior Explained
The ScrollBox component has a sticky behavior that keeps the scroll pinned to the bottom. This is set by scrollToBottom, the initial stickyScroll attribute, and the renderer when positional follow fires. It provides a stable signal for 'at bottom' that doesn't depend on layout values.

### ScrollBox's Render-Time ScrollTop Clamp
ScrollBox allows setting a render-time scrollTop clamp to the currently-mounted children's coverage span. This prevents burst scrollTo calls from racing past React's async re-render, showing the edge of mounted content instead of a blank spacer.

### Unlimited Event Listeners in Custom Emitter
The custom `EventEmitter` class disables the default maxListeners warning, allowing unlimited listeners. This is to accommodate React's pattern where many components listen to the same event.

### DEC Private Mode Sequences for Terminal Control
The DEC private mode sequences include several terminal-specific extensions like ALT_SCREEN (47), MOUSE_SGR (1006), and SYNCHRONIZED_UPDATE (2026). These are not commonly documented in public resources.

### Complex Mouse Tracking with DEC Sequences
Mouse tracking in terminals can be enabled with a combination of DEC sequences like MOUSE_NORMAL (1000) and MOUSE_SGR (1006), allowing for detailed input tracking.

### OSC Terminator Choice Based on Terminal
The OSC sequence uses different terminators based on the terminal environment. For Kitty, it uses 'ESC \\', while for others it defaults to BEL. This avoids unwanted beeps in Kitty.

### Terminal Multiplexer Passthrough Wrapping
The code wraps escape sequences for passthrough in terminal multiplexers like tmux and GNU screen. This is gated by tmux's 'allow-passthrough' setting, which defaults to off.

### Clipboard Path Determination Logic
Clipboard operations choose between 'native', 'tmux-buffer', or 'osc52' paths based on environment variables like 'TMUX' and 'SSH_CONNECTION'. This affects how clipboard data is handled.

### SGR Parser Supports Colon-Separated Parameters
The SGR (Select Graphic Rendition) parser in Claude Code's terminal I/O supports both semicolon and colon-separated parameters. This is not commonly documented in public-facing materials, providing flexibility in parsing SGR sequences.

### MCP API Session ID Handling
The MCP API uses a 'mcp-session-id' header to manage sessions for Streamable HTTP transport. If a session ID is not provided or recognized, a new session is created, and the session ID is generated using 'randomUUID'.

### Legacy SSE Support in MCP API
Despite the introduction of Streamable HTTP transport, Claude Code's MCP API maintains legacy support for SSE (Server-Sent Events) transport. This ensures compatibility with older clients that rely on SSE.

### STDIO Entrypoint for Claude Code
The Claude Code source includes a STDIO entrypoint specifically for local use with Claude Desktop and Claude Code. This is not publicly documented, suggesting it's an internal feature for development or testing purposes.

### SRC_ROOT Resolution Logic
The SRC_ROOT is resolved using an environment variable CLAUDE_CODE_SRC_ROOT, defaulting to a specific directory structure if not set. This implies a flexible setup for different environments, likely for internal testing.

### Toast Queue Limitations
The notification system limits visible toasts to 5 at a time, queuing additional toasts. This design choice impacts how users experience notifications.

### Notification History Limit
The notification system retains a maximum of 100 notifications, which may lead to older notifications being lost if not managed.

### Hidden API URL Fallback Mechanism
The code uses a hidden fallback API URL 'http://localhost:3001' if the 'NEXT_PUBLIC_API_URL' environment variable is not set. This could lead to unexpected behavior in production if the environment variable is misconfigured.

### Core ANSI Parser Functionality Exposed
The 'parseAnsiSegments' function is the core parser used by AnsiRenderer, allowing direct processing of ANSI-encoded strings into styled text segments. This internal functionality is exposed for programmatic use, which is not commonly documented.

### System Theme Preference Handling
The theme system automatically applies the user's system color scheme preference using a media query listener. This behavior is not prominently documented, yet it ensures the UI adapts to user preferences seamlessly.

### Platform Detection Utility for Conditional Rendering
The 'platform' function allows conditional rendering based on whether the code is running in a web or terminal environment. This utility is crucial for ensuring both branches of conditional rendering are valid React.

### Secret Model: Claude Haiku 4.5
The Claude Haiku 4.5 model is internally labeled with a future date '20251001', suggesting a planned release or versioning strategy not publicly disclosed.

### Max Message Length Limit: 100,000
The maximum message length is capped at 100,000 characters, a specific limit not publicly documented.

### Streaming Chunk Size: 64
The streaming chunk size is set to 64, a specific configuration detail not disclosed in public resources.

### Share Expiry Options Include 'Never'
The share expiry options include a 'never' setting, allowing indefinite sharing, a feature not commonly highlighted.

### Internal Command IDs for Shortcuts
The code defines a set of internal command IDs such as 'open-palette', 'new-conversation', and 'toggle-sidebar' that are used to register and look up shortcut commands. These are not exposed in the public documentation.

### Notifications Only When Tab is Backgrounded
The browser notification service only sends notifications when the tab is in the background, a behavior not commonly highlighted in public documentation.

### Share Link Expiry Options
Share links can expire in 1 hour, 24 hours, 7 days, or never. This flexibility isn't commonly highlighted in public documentation.

### User Color Assignment Rotation
User colors are assigned from a fixed list of 8 hex colors and rotate based on index. This simple mechanism isn't typically disclosed.

### Search API is Currently a Stub
The server-side search API client in `search-api.ts` is currently a stub. The app uses client-side search via `client-search.ts`. The comment suggests swapping `clientSearch` calls for `apiSearch` when a backend search endpoint becomes available.

### ANSI to CSS Color Mapping
The `color-mapping.ts` file maps ANSI color values to CSS hex strings. It includes handling for standard ANSI 16-color palettes, a 6x6x6 color cube, and a grayscale ramp. This detailed mapping is not commonly documented.

### Ink Dimension Conversion to CSS
Ink dimensions are converted to CSS using `ch` units for character-width, which is not commonly documented. This ensures the layout approximates the terminal in a monospace font.

### Ink to CSS Border Style Mapping
Ink/cli-boxes border styles are mapped to CSS, with most styles approximated as 'solid'. Notably, 'round' is also mapped to 'solid' with added borderRadius.

### Conversations Stored in Local Storage
Conversations are not persisted on the backend but live in localStorage using Zustand's persist middleware. This is contrary to typical expectations of server-side storage.

### Default Limits in Conversation List API
The default limit for listing conversations is set to 20, with an offset of 0. These defaults are not publicly documented.

### Combine Multiple AbortSignals into One
The `combineSignals` function allows multiple AbortSignals to be combined into a single signal. If any of the signals are already aborted, the combined signal is immediately aborted with the same reason. This behavior is not typically documented in public APIs.

### SSE Burst Buffering in Streaming
The `parseStream` function handles burst buffering for SSE events, ensuring no events are dropped regardless of arrival speed. This is a non-obvious implementation detail that ensures robustness in high-throughput scenarios.

### SSE Connection with Exponential Backoff
The SSE connection management includes an automatic exponential backoff strategy for reconnections, with a default maximum of 5 attempts. This internal detail is crucial for maintaining persistent connections without overwhelming the server.

### Unique StreamEvent Types in Protocol
The Anthropic message streaming protocol includes unique StreamEvent types like 'content_block_delta' and 'message_delta', which are not commonly found in typical SSE implementations. These types allow for granular control over content updates and message handling.

### MCP Protocol Version Set to Future Date
The MCP client initialization uses a protocol version date set in the future: '2024-11-05'. This suggests either a placeholder or a future-proofing measure.

### Default Timeout and Retry Limits in API Client
The API client has a default timeout of 30,000 milliseconds and a maximum of 3 retry attempts. These values dictate how long the client waits for a response and how many times it retries failed requests.

### MCP Session Reinitialization on Expiry
The MCP client maintains a single session per page load and reinitializes if it expires. This ensures continuous operation without manual intervention.

### Lazy Loading of Shiki for Syntax Highlighting
The syntax highlighting worker uses lazy loading for Shiki to prevent main thread blocking. It supports themes like 'github-dark' and 'github-light', and languages such as 'typescript', 'python', and 'dockerfile'.

### Lightweight Markdown Worker Design
The markdown worker avoids importing the full remark pipeline to keep its bundle small. It performs lightweight pre-processing like sanitizing and extracting headings to avoid blocking the main thread.

### Conditional Timestamps in Export Functions
The export functions for JSON and Markdown conditionally include timestamps based on the 'includeTimestamps' option. If false, timestamps are omitted or set to 0.

### Worker Pool Size Capped at 4
The WorkerPool class limits the number of concurrent workers to 4, regardless of the device's hardware concurrency capabilities. This is done to avoid spawning too many threads, which could lead to performance degradation.

### Streaming Optimizer Max Delay of 50ms
The StreamingOptimizer class uses a max delay of 50ms before forcing a flush of accumulated text, ensuring smooth UI updates at 60fps during streaming. This delay is a critical parameter for balancing latency and performance.

### Custom Metrics Sink for Analytics
The code allows for a custom analytics sink to be set via `setMetricSink`, enabling integration with providers like PostHog or Datadog. By default, the sink is a no-op, meaning no metrics are reported unless configured.

### Web Vitals Rating Thresholds
The code defines specific thresholds for rating web vitals like LCP, FID, and CLS. For example, LCP is rated 'good' if under 2500ms, and 'poor' if over 4000ms.

### CLS Session Handling Logic
The code implements a session-based approach to calculate CLS values, resetting the session value if the gap between shifts exceeds 1000ms.

### Dialog Component Size Variants
The Dialog component supports size variants with specific max-widths: 'sm' (max-w-sm), 'md' (max-w-lg), 'lg' (max-w-2xl), and 'full' (max-w-[calc(100vw-2rem)] h-[calc(100vh-4rem)]). Default size is 'md'.

### Button Component Legacy Aliases
The Button component includes legacy aliases for variants and sizes. 'default' maps to 'primary' variant, and 'destructive' maps to 'danger'. Size 'default' maps to 'md', and 'icon' is a unique size.

### Badge Component Dot Color Mapping
The Badge component uses a dot color mapping based on the variant. For example, 'default' uses 'bg-surface-400', 'success' uses 'bg-success', and 'error' uses 'bg-error'.

### Default Toast Duration Behavior
The toast component does not specify a default duration for toasts, which means unless explicitly set, toasts may persist indefinitely. This behavior is not commonly documented and could lead to unexpected UI persistence.

### Random ID Generation for Toasts
Toasts are assigned a random ID using `Math.random().toString(36).slice(2, 9)`. This method, while simple, could lead to potential ID collisions in high-frequency scenarios.

### Toast Style Variants and Animations
The toast component uses specific CSS classes for animations like `animate-slide-up` and `animate-slide-down-out`, which are not standard and imply custom animations for toast appearance and dismissal.

### Dropdown Menu Side Offset Default
The dropdown menu component sets a default side offset of 4 units, which affects the positioning of the dropdown relative to its trigger.

### Textarea Auto-Grow Feature
The Textarea component has an undocumented 'autoGrow' feature that dynamically adjusts the height of the textarea based on content. This behavior is not mentioned in public documentation.

### Shortcut Conflict Handling
The ShortcutRow component highlights conflicts with existing shortcuts by changing the background color to 'bg-red-500/5', which is not a publicly documented feature.

### Undocumented MCP Servers Settings Section
The SettingsNav component includes an undocumented 'MCP Servers' section, identified by the id 'mcp'. This section is not mentioned in public-facing documentation, suggesting internal or future use.

### Hidden Timeout Thresholds in Server Testing
The connection test for server configurations in `McpSettings.tsx` uses a hardcoded 800ms timeout for simulating API calls. Additionally, the test randomly fails with a 30% probability, which is not documented publicly.

### API Connection Timeout Set to 5000ms
The API connection timeout is set to 5000 milliseconds, which is a specific design choice that might impact users with slower network connections.

### Cursor Position Measured Using Hidden Mirror Div
The code uses a hidden mirror div to approximate the pixel position of a text offset inside a textarea, which is a non-obvious technique for cursor position measurement.

### Exported Conversations Filename Format
Exported conversations are saved with filenames formatted as 'claude-code-conversations-YYYY-MM-DD.json/md', which embeds the export date directly into the filename.

### Unintended Annotation Badge Behavior
The AnnotationBadge component does not render if there are no annotations, but it also does not render if the collaboration context is missing, which might be unintended.

### Hidden Share Link Functionality
The CollaborationProvider includes a 'generateShareLink' function that creates shareable links with specific roles and expiry times, a feature not publicly documented.

### Typing Indicator Animation Details
The TypingIndicator uses specific animation settings for typing dots, with a 0.6s duration and 0.15s delay between dots, which are not publicly documented.

### Presence Avatars Limit Set to 4
The PresenceAvatars component limits the display to a maximum of 4 avatars, with any additional users represented by an overflow badge. This is not documented in public-facing materials.

### Syntax Highlighter Supports Two Themes
The SyntaxHighlight component only supports two themes: 'github-dark' and 'github-light'. This limitation is not mentioned in public documentation.

### Shiki Highlighter Language Support
The Shiki highlighter in SyntaxHighlight supports a specific set of languages, including TypeScript, Python, and Rust, among others. This specific list is not publicly documented.

### Elapsed Timer Update Interval
The ElapsedTimer component updates every 100ms to display elapsed time, which is a specific design choice not mentioned in public resources.

### Diff Algorithm Uses LCS for Line Comparison
The DiffView component uses a Longest Common Subsequence (LCS) algorithm to compute differences between lines. This internal detail is not documented externally.

### ANSI Color Handling with 256-Color Support
The AnsiRenderer component supports a 256-color palette, including a 6×6×6 color cube and a grayscale ramp. This is more than the typical 16-color ANSI palette.

### File Icon Mapping for Various Extensions
The FileIcon component maps a wide range of file extensions to specific icons, including support for less common extensions like 'rst' and 'fish'.

### Accessibility Features in ChatWindow
The ChatWindow component includes accessibility features like screen reader announcements for new messages, enhancing usability for visually impaired users.

### Automatic Conversation Initialization
The ChatLayout component automatically initializes a new conversation if none exist, using the createConversation function. This behavior is not documented in public-facing materials.

### Message Height Estimation for Virtualization
The VirtualMessageList component uses estimated heights for messages to optimize rendering: short (80px), medium (160px), and tall (320px). This is crucial for performance but not publicly documented.

### Streaming Message Indicator
Messages with a 'streaming' status in ChatInput show a pulsing indicator next to the content. This subtle UI feature is not highlighted in user guides.

### Abort Controller for Streaming Requests
The ChatInput component uses an AbortController to manage streaming requests, allowing users to cancel ongoing operations. This is a sophisticated feature not widely advertised.

### Theme System Defaults to Dark Mode
The theme system defaults to 'dark' mode if the user's system preference is set to 'system'. This is contrary to many applications that default to 'light' mode. The code explicitly sets the default theme to 'dark' and toggles the '.light' class for light themes.

### Sidebar Resizing Limits
The sidebar can be resized between 200px and 480px. This range is enforced by clamping the width during the resize operation, which might limit user customization.

### Command Palette Input Focus Delay
The Command Palette in the application has a hardcoded delay of 10 milliseconds before focusing the input field when opened. This delay is intended to allow the dialog to animate in before focusing.

### Mobile File Viewer Swipe Down Threshold
The Mobile File Viewer component requires a swipe down gesture with a threshold of 80 pixels to trigger the close action. This threshold determines how far a user must swipe to close the viewer.

### Command Palette Scoring System
The Command Palette uses a scoring system to rank commands based on a search query. Exact matches score 100, starts with query scores 80, includes query scores 60, description includes query scores 40, and fuzzy matches score 20.

### iOS-Style Bottom Sheet with Hidden Scroll Lock
The BottomSheet component locks body scroll when open by setting 'document.body.style.overflow' to 'hidden'. This behavior is not documented publicly, providing a smoother user experience.

### Mobile Sidebar Focus Trap and Restoration
The MobileSidebar component traps focus while open and restores it upon closing. This ensures accessibility and usability, but is not highlighted in public documentation.

### SwipeableRow Snap Threshold for Actions
SwipeableRow snaps to show actions if dragged more than half an action width. This threshold is set to 'actionWidth / 2', which defaults to 36px, influencing user interaction design.

### Announcer Timer Delay
The Announcer component uses a 50ms delay before updating messages for both 'polite' and 'assertive' announcements. This delay is not documented publicly.

### Live Region Clear Timeout
The LiveRegion component clears its message after 500ms to ensure repeated identical messages are re-announced. This behavior is not commonly documented.

### Image Viewer Zoom Limits
The ImageViewer component allows zooming in up to 800% and zooming out to 10%. These limits are not publicly documented.

### Regex Infinite Loop Prevention
The SearchBar component includes a safeguard against infinite loops when processing regex matches. If a match of zero length is found, the loop breaks to prevent infinite processing.

### Open Files in VS Code Directly
The FileBreadcrumb component includes a feature to open files directly in VS Code using a custom protocol handler. This is triggered by the 'Open in VS Code' button.

### Conditional Export of Thinking Blocks
The ExportOptionsPanel allows exporting 'thinking blocks' only if the format is not JSON. This is controlled by disabling the option when JSON is selected.

### Export Format Options Include HTML and PDF
The FormatSelector component includes export options for 'markdown', 'json', 'html', 'pdf', and 'plaintext'. The 'html' option creates a self-contained file with embedded styles, while 'pdf' uses the browser's print-to-PDF dialog.

### Notification Center Includes System Filter
The NotificationCenter component has filter tabs for 'all', 'error', 'activity', and 'system'. This allows users to view notifications by category, including system-level notifications.

### Notification Badge Caps at 99+
The NotificationBadge component displays a maximum count of '99+' for notifications, indicating a cap on how many notifications are visually represented.

### Toast Component Handles Duration with Pausing
The Toast component tracks remaining time across pause/resume cycles using a ref. It updates progress every 50ms and dismisses the toast when the duration reaches zero.

### Toast Animation Uses Spring Physics
The ToastStack component uses a spring animation with specific stiffness and damping values: stiffness of 380 and damping of 28. This differs from typical easing functions and suggests a more dynamic, physics-based animation.

### Markdown Component Parity Across Platforms
The Markdown component is designed to have props compatible with a terminal version, allowing seamless swapping between web and terminal environments. This suggests a focus on cross-platform consistency.

### Spinner Modes Map to Specific Styles
The Spinner component maps each mode ('queued', 'loading', 'thinking', 'auto', 'disabled') to specific border and text colors, indicating a detailed design for visual feedback.

### PDF Export Handled Client-Side
PDF export is explicitly handled client-side using 'window.print()', which is not mentioned in public documentation. This means server-side PDF generation is unsupported.

### Share ID Length Set to 12 Characters
The share ID is generated with a fixed length of 12 characters using 'nanoid'. This specific length choice is not publicly documented.

### Specific Image MIME Types Supported
The code supports specific image MIME types for base64 encoding, including 'png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp', and 'ico'. This list is not publicly documented.

