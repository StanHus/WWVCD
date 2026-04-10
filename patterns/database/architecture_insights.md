# Architecture Insights

*Clean-room distillation of 830 insights regarding architecture.*

---

### Multi-Agent Swarm Mode
Claude Code supports a 'swarm mode' for multi-agent task delegation, a feature not commonly found in similar tools. This allows for complex task orchestration and parallel processing, which could significantly enhance productivity in collaborative environments.

### In-Progress Rust Port
The repository includes an in-progress port of Claude Code to Rust, with 47 files already present. This indicates a strategic move towards leveraging Rust's performance and safety features, which could lead to a more robust and efficient version of the tool.

### Hidden Tool Exposure in MCP Server
The MCP server exposes all tools from `getTools(toolPermissionContext)` with an empty permission context, which is not mentioned in public documentation. This could allow for unintended access to internal tools.

### Bridge-Kick Command for Internal Testing
The '/bridge-kick' command is an internal tool for injecting failure states into the Remote Control feature, used for testing recovery paths. It is only enabled when 'USER_TYPE === 'ant'', indicating it's restricted to Anthropic's internal team.

### Branching Conversations with Fork Command
The '/branch' command allows users to create a forked copy of a conversation, preserving the original while exploring new directions. This feature, also known as '/fork' when 'FORK_SUBAGENT' is off, highlights a unique approach to conversation management.

### Session Clear Hooks Timeout
The 'clearConversation' command is bounded by a session end hooks timeout of 1.5 seconds, ensuring that session cleanup doesn't hang indefinitely.

### Hidden Kairos Mode Tools
The source code reveals a set of tools under 'Kairos / Special Mode Tools', including 'BriefTool', 'SleepTool', and 'RemoteTriggerTool'. These tools are not mentioned in public documentation, suggesting a hidden operational mode named Kairos.

### Surprising Default for Tool Concurrency
The default setting for 'isConcurrencySafe' in tools is 'false', indicating that tools are not designed to handle concurrent operations unless explicitly specified. This contradicts common assumptions about modern tool design.

### Bypass Permissions Mode
The 'ToolPermissionContext' includes a 'bypassPermissions' mode, allowing tools to operate without standard permission checks. This mode could pose significant security risks if misused.

### Glob Tool Result Limit
The 'ToolUseContext' specifies a 'globLimits' property with a 'maxResults' of 1000. This hard limit on results could affect users relying on extensive file searches.

### Secret KAIROS Feature Unlocks Cron Tools
The CronCreateTool, CronDeleteTool, and CronListTool are feature-gated under the 'KAIROS' flag and require the function isKairosCronEnabled() to be true. This suggests a hidden scheduling capability not publicly documented.

### Remote Trigger Tool Requires Secret Flag
The RemoteTriggerTool is only available when the 'AGENT_TRIGGERS' feature flag is enabled. This indicates a controlled remote operation capability that isn't mentioned in public documentation.

### Sleep Tool Hidden Behind Feature Flag
The SleepTool is feature-gated with the 'SLEEP_TOOL' flag, suggesting a hidden capability to pause or delay operations, which isn't publicly acknowledged.

### Monitor MCP Task Requires Hidden Flag
The MonitorMcpTask is feature-gated with 'MONITOR_TOOL', indicating a concealed monitoring capability for MCP tasks that isn't publicly documented.

### LSP Tool Exclusively Enabled
The LSPTool is only enabled when LSP is active, suggesting a specialized toolset for language server protocol operations that isn't broadly advertised.

### FileReadTool Allows Unlimited Result Size
The FileReadTool has a 'maxResultSizeChars' set to Infinity, which prevents circular reads through disk persistence and allows reading large files without size restrictions.

### Sandboxing Limitations on Windows
The BashTool and PowerShellTool implement sandboxing using 'bwrap' on Linux and 'sandbox-exec' on macOS, but no sandboxing is available on Windows. This means Windows executions are inherently less secure unless enterprise policies block execution.

### Auto-Background Thresholds in Execution Tools
The BashTool and PowerShellTool automatically background tasks after 15 seconds in Kairos mode and 2 minutes in other contexts. This behavior is controlled by 'ASSISTANT_BLOCKING_BUDGET_MS' and 'auto-background threshold'.

### Blocked Sleep Patterns in Shell Tools
The BashTool and PowerShellTool contain logic to block sleep commands like 'sleep N' and 'Start-Sleep N' if N is 2 or greater, suggesting a focus on preventing misuse of blocking commands.

### Strict File Edit Restrictions
The file editing tool enforces strict rules such as read-before-write, a maximum file size of 1 GiB, and only allowing one occurrence of 'old_string' unless 'replace_all' is true.

### AgentTool Auto-Backgrounds After 2 Minutes
The AgentTool automatically transitions tasks to run in the background after 120,000 milliseconds (2 minutes). This is not commonly documented and suggests a design choice to handle long-running tasks without user intervention.

### TeamCreateTool Enforces Single Leader Per Team
The TeamCreateTool enforces a one-team-per-leader rule, returning an error if a leader attempts to create another team while already leading one. This constraint is likely intended to maintain clear leadership and task management.

### TaskOutputTool Timeout Range Up to 10 Minutes
The TaskOutputTool allows a timeout range from 0 to 600,000 milliseconds (10 minutes), providing flexibility for long-running tasks. This range is broader than typical defaults, indicating a design decision to accommodate extensive processing times.

### DevBar for Monitoring Slow Operations
The `DevBar.tsx` component is an internal tool that displays slow operations for developer and ant builds only. It polls every 500ms and shows the last 3 slow operations, indicating a focus on performance optimization during development.

### Fallback Tool Use Error Message Limits
The 'FallbackToolUseErrorMessage' component limits rendered lines to 10 and provides a hint for additional lines. This line limit is not commonly documented.

### IDE Auto-Connect Dialog Persistence
The IdeAutoConnectDialog sets 'globalConfig.hasIdeAutoConnectDialogBeenShown = true' once displayed, ensuring it doesn't reappear. This persistent state is not reset unless manually changed, which could lead to confusion if users want to revisit the option.

### Agent Detail Color Swatch Logic
The `AgentDetail` component computes the background color for the color swatch using `getAgentColor(agent.agentType)`, which is not documented publicly. This suggests a hidden logic for color assignment based on agent type.

### Agents Menu State Machine Modes
The `AgentsMenu` component implements a state machine with modes like `list-agents`, `create-agent`, `agent-menu`, `view-agent`, `edit-agent`, and `delete-confirm`. This complex orchestration is not publicly detailed, revealing a sophisticated internal UI flow.

### Secret Tengu Analytics for Agent Generation
The function `generateAgent` triggers a hidden analytics event `tengu_agent_definition_generated` whenever a new agent configuration is auto-generated. This event is not documented publicly and suggests internal tracking of agent creation activities.

### Automatic Color Option in Agent Color Picker
The `ColorPicker` component includes an 'Automatic color' option that, when selected, triggers the `onConfirm` callback with `undefined`. This behavior is not documented in public APIs, indicating a fallback mechanism for color selection.

### Dynamic MCP Tool Buckets in ToolSelector
The `ToolSelector` component dynamically groups MCP tools by server name using `getMcpServerBuckets()`. This internal-only behavior allows for flexible tool categorization based on server configurations, which is not publicly documented.

### Private Agent File Path Utilities
The `agentFileUtils.ts` includes private functions like `getAgentDirectoryPath` and `getRelativeAgentDirectoryPath` for managing agent file paths. These utilities are crucial for internal file management but are not exposed publicly.

### Memory Step in Agent Wizard is Flagged
The 'MemoryStep' in the CreateAgentWizard is conditionally included based on the feature flag 'isAutoMemoryEnabled()'. This step allows users to configure memory scope for agents, but is only available if the feature is enabled internally.

### Classifier Checks in Permission Requests
Permission requests can involve a 'classifierCheckInProgress' flag, which suggests an internal classifier is used to auto-approve or match rules for tool permissions. This is not mentioned in public-facing documentation.

### Worker Badge Color Customization
The WorkerBadge component allows customization of the badge color using a raw color string, which is converted to an Ink color via 'toInkColor'. This suggests a focus on visual clarity and differentiation in multi-agent environments.

### Secret Kairos Feature Flag
The internal state management includes a feature flag 'kairosActive', which is not publicly documented. This suggests the presence of a hidden or experimental feature named Kairos that can be toggled on or off.

### Strict Tool Result Pairing Mode
The state management system includes a 'strictToolResultPairing' boolean, indicating a mode where tool results must be strictly paired with their triggers. This mode is not mentioned in public documentation, suggesting it might be an internal-only or experimental feature.

### Detailed Session Metrics Counters
The state includes numerous detailed counters such as 'sessionCounter', 'locCounter', 'prCounter', 'commitCounter', 'costCounter', and 'tokenCounter'. These counters provide granular tracking of session metrics, which could reveal detailed usage patterns not disclosed publicly.

### Session Lineage Tracking via Parent Session ID
The state management system tracks session lineage using 'parentSessionId', allowing for the reconstruction of session histories. This capability is not publicly documented and suggests an internal focus on understanding session flows.

### One-Shot Post-Compaction Latch
The 'markPostCompaction()' and 'consumePostCompaction()' functions implement a one-shot latch that automatically resets after the first consumption. This mechanism is used to manage post-compaction states efficiently.

### Simple Mode Restricts Tool Usage
In `CLAUDE_CODE_SIMPLE` mode, the available worker tools are limited to Bash, Read, and Edit. This restriction is not mentioned in public documentation, potentially impacting users expecting full tool access.

### Internal Worker Tools Set Revealed
The source code defines an `INTERNAL_WORKER_TOOLS` set containing `TEAM_CREATE_TOOL_NAME`, `TEAM_DELETE_TOOL_NAME`, `SEND_MESSAGE_TOOL_NAME`, and `SYNTHETIC_OUTPUT_TOOL_NAME`. These tools are likely used internally and not exposed to regular users.

### Tool Input Truncation Limits Exposed
Tool inputs are truncated if they exceed 512 characters, with a target truncation length of 128 characters. This aggressive truncation policy is not widely known and could affect data integrity in analytics.

### Startup Time Measurement with Exit Hook
The `useAfterFirstRender` hook measures startup time and can terminate the process immediately after the first render if the `CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER` environment variable is set. This is an internal mechanism likely used for performance testing.

### API Key Verification Lifecycle Management
The `useApiKeyVerification` hook manages the lifecycle of API key verification and prevents execution of `apiKeyHelper` scripts before the trust dialog is accepted. This suggests a strong internal focus on security and preventing unauthorized script execution.

### Blinking Cursor with Offscreen Pause
The `useBlink` hook controls a blinking cursor that pauses when the terminal is blurred or offscreen. This behavior is controlled by the `intervalMs` parameter, defaulting to 530 ms, and uses Ink's `useOffscreenFreeze` to manage visibility.

### Memory Usage Alert Thresholds
The `useMemoryUsage` hook monitors Node.js memory usage and flags when heap usage exceeds 1.5 GB (high) or 2.5 GB (critical). This indicates internal thresholds for memory management and potential performance bottlenecks.

### Inactivity Notification After 6 Seconds
The `useNotifyAfterTimeout` hook sends a desktop notification after just 6 seconds of inactivity, which is unusually short and suggests a high sensitivity to user engagement.

### Manual Refresh Required for Plugins
The `useManagePlugins` hook does not automatically refresh plugins; it requires a manual trigger via `/reload-plugins`. This implies a deliberate choice to avoid automatic updates.

### Deferred Hook Messages on Mount
The `useDeferredHookMessages` hook defers injecting session-start messages until after the first render, using `setTimeout(0)`. This ensures the UI remains responsive during initial load.

### Dynamic Model Alias Resolution
The `useMainLoopModel` hook dynamically resolves model aliases (e.g., `opus`) to concrete model IDs, re-evaluating whenever GrowthBook flags are refreshed. This allows for flexible model management.

### GrowthBook Flag Refresh Triggers Command Reevaluation
The `useSkillsChange` hook subscribes to GrowthBook flag refresh events. When flags are refreshed, it calls `clearCommandMemoizationCaches()` and `getCommands(cwd)` to re-evaluate feature-gated commands. This behavior is not documented publicly, suggesting a dynamic feature gating mechanism.

### Programmatic Vim Mode Switching in Input
The `useVimInput` hook allows external callers to programmatically switch Vim modes using `setModeExternal`. This capability is not mentioned in public documentation, indicating a hidden feature for advanced users or internal testing.

### SSH/Tmux Compatibility in Text Input
The `useTextInput` hook handles raw `\x7f` DEL characters for SSH/tmux compatibility. This suggests a design consideration for users accessing Claude through terminal multiplexers or secure shell sessions.

### Lazy Loading for Input History Navigation
The `useArrowKeyHistory` hook implements lazy loading for input history in chunks of 50. This approach balances memory usage and performance, ensuring efficient navigation without overwhelming the system.

### Ink Terminal's Surprising Architecture
The Ink Terminal framework uses a heavily modified fork of the Ink library, integrating a custom pipeline for terminal rendering. This includes a React reconciler, a Yoga layout engine, and a double-buffered screen, which are not typical for terminal UIs. The system also employs a diff engine and patch optimizer for efficient rendering.

### Advanced Alt-Screen Handling in Ink
The Ink Terminal system includes sophisticated alt-screen handling, with methods like `setAltScreenActive` and `resetFramesForAltScreen` to manage screen state and synchronized output. This ensures robust performance even during terminal resize or signal interruptions.

### Steady-State Spinner Optimization
The `Output` instance reuses its `charCache` across frames, allowing spinner and clock renders to achieve near zero-allocation. This optimization is not documented publicly.

### Environment-Less Bridge Architecture
The V2 Bridge architecture eliminates the need for the Environments API, directly using POST requests to manage sessions. This architecture is only available for REPL sessions and is controlled by a feature flag.

### Session Status Display Every Second
The system updates session status every second, showing elapsed time, current activity, and a trail of the last 5 tool activities. This frequent update is more granular than typical logging intervals.

### HybridTransport's Unique WebSocket-HTTP Architecture
HybridTransport uses WebSocket for reads and HTTP POST for writes, a surprising architecture choice that combines real-time and batch processing. This design allows for efficient data handling with a `BATCH_FLUSH_INTERVAL_MS` of 100ms and a `POST_TIMEOUT_MS` of 15,000ms.

### GitHub PR Status via CLI
The `ghPrStatus.ts` utility checks GitHub PR status using the `gh` CLI. This reliance on an external CLI tool for integration is not typically disclosed, indicating a dependency that could affect portability.

### Memory Staleness Warning for Old Memories
The system issues a staleness warning for memories older than one day, stating: 'This memory is N days old. Memories are point-in-time observations, not live state — claims about code behavior or file:line citations may be outdated.' This contradicts the assumption that memory data is always current.

### Complex Auto-Memory Enablement Priority
The auto-memory feature is controlled by a complex priority chain involving environment variables and project settings. The default state is enabled unless explicitly disabled by several conditions, such as the presence of 'CLAUDE_CODE_DISABLE_AUTO_MEMORY'.

### Internal Length Limits for Responses
Anthropic imposes internal length limits of ≤25 words between tool calls and ≤100 words for final responses, which are not publicly documented. This reveals a focus on concise communication.

### Complete Rust Rewrite of Claude Code
The Rust codebase is a complete standalone rewrite of the TypeScript Claude Code CLI, sharing no runtime code with the TypeScript implementation. It re-implements the same tool names and semantics, permission model, and other features in async Rust using the Tokio runtime.

### MCP Server Configuration Details
The `McpServerConfig` struct allows detailed configuration of MCP servers, including command execution, arguments, environment variables, and server type. This level of configurability suggests a flexible backend architecture.

### Hidden Beta Features in API Headers
The `ANTHROPIC_BETA_HEADER` includes feature flags for 'interleaved-thinking-2025-05-14', 'token-efficient-tools-2025-02-19', and 'files-api-2025-04-14'. These suggest upcoming features not publicly documented.

### Zero-Sized Structs for Tool Implementation
All 33 built-in tools in `cc-tools` are implemented as zero-sized structs. This unconventional choice minimizes memory overhead and suggests a focus on performance and simplicity.

### Bash Tool's Strict Timeout Policy
The `BashTool` enforces a strict command execution timeout, defaulting to 120 seconds and capping at 600 seconds. This ensures that potentially long-running commands do not hang indefinitely.

### Advanced Output Modes in Grep Tool
The `GrepTool` offers three advanced output modes: `files_with_matches`, `content`, and `count`, allowing for flexible search results tailored to different needs.

### WebFetchTool Timeout and Redirect Limits
The WebFetchTool has a hardcoded 30-second timeout and a limit of 10 redirects for HTTP GET requests. This could lead to unexpected failures if a website takes longer to respond or has complex redirect chains.

### NotebookEditTool's Unique ID Generation
The NotebookEditTool generates unique cell IDs by XORing a timestamp with a random number, producing an 8-character hexadecimal string. This method is unconventional and may lead to ID collisions under certain conditions.

### CronCreateTool's Task Limit
The CronCreateTool enforces a maximum of 50 scheduled tasks. This hard limit could restrict users who need to manage a large number of recurring tasks.

### TaskUpdateTool's Deletion Mechanism
Setting a task's status to 'deleted' in the TaskUpdateTool removes it from the global TASK_STORE. This behavior might lead to accidental data loss if not handled carefully.

### PowerShellTool's Cross-Platform Execution
The PowerShellTool uses 'powershell' on Windows but switches to 'pwsh' on other platforms. This cross-platform approach ensures compatibility but may introduce inconsistencies in command execution.

### AutoDream Consolidation Feature
The 'autoDream' feature mentioned in the '06_services_context_state.md' file appears to be an internal tool for context consolidation, not publicly documented.

### Conditional 'agents-platform' Command Import
The 'agents-platform' command is conditionally imported based on the environment variable USER_TYPE being 'ant'. This suggests restricted access to certain features.

### Snapshot Update Dialog for Agent Memory
The 'launchSnapshotUpdateDialog' function allows users to merge, keep, or replace agent memory snapshots, indicating a focus on memory management.

### KAIROS Feature Flag Enables Multiple Tools
The 'KAIROS' feature flag enables several tools including SleepTool, SendUserFileTool, PushNotificationTool, and SubscribePRTool. This suggests a coordinated feature set under the KAIROS codename.

### AGENT_TRIGGERS Enables Cron Tools
The 'AGENT_TRIGGERS' feature flag enables a set of cron tools, including CronCreateTool, CronDeleteTool, and CronListTool, suggesting a focus on scheduled task management.

### REPLTool for Internal Use Only
The REPLTool is conditionally imported based on the 'USER_TYPE' environment variable being 'ant', indicating it's intended for internal use only.

### Task ID Prefixes for Different Task Types
The code assigns specific prefixes to task IDs based on their type, such as 'b' for 'local_bash', 'a' for 'local_agent', and 'd' for 'dream'. This helps in identifying the task type from the ID itself.

### Hidden Vim State Transitions in Code
The Vim state transition table includes undocumented states like 'operatorG' and 'operatorTextObj', which are not mentioned in public documentation. These states handle specific operations such as 'operatorG' for extended operator commands and 'operatorTextObj' for text object manipulations.

### MAX_VIM_COUNT Limit in Vim State Machine
The MAX_VIM_COUNT constant is defined but not publicly documented, indicating a hidden limit on the number of counts a Vim command can handle. This could affect users who rely on high repeat counts for commands.

### Complex Selection State Management
The selection state management in src/ink/selection.ts is highly complex, involving concepts like virtualAnchorRow and scrolledOffAbove. These details are not typically exposed to end-users but have implications for text selection behavior.

### LegacyRoot Architecture Choice
The code uses LegacyRoot for rendering, which means all work is done synchronously without scheduling. This differs from the ConcurrentRoot approach, which allows for asynchronous rendering and scheduling. This choice can lead to performance issues, especially in scenarios with high render frequency.

### Ultraplan CTA Behavior in Remote Agents
The pill CTA only shows for 'remote_agent' tasks in 'needs_input' or 'plan_ready' states. This is contrary to public documentation suggesting it shows for all running tasks.

### Main Session Task ID Generation Logic
Main session tasks use a unique ID starting with 's', generated using a custom alphabet. This is distinct from agent tasks, which use 'a'.

### Default Agent Definition for Main Sessions
Main session tasks default to a 'main-session' agent type unless specified otherwise. This is defined in the DEFAULT_MAIN_SESSION_AGENT constant.

### Task Label Diamond Symbols for Remote Agents
Remote agent tasks use open and filled diamond symbols to indicate status. An open diamond means running or needs input, while a filled diamond indicates 'plan_ready'.

### Agent ID Pattern Revealed
The pattern for validating Agent IDs is revealed as /^a(?:.+-)?[0-9a-f]{16}$/. This pattern indicates a specific format for Agent IDs that includes an optional label and 16 hexadecimal characters.

### Builtin Plugin Default Enabled State
Builtin plugins in the CLI have a 'defaultEnabled' property that defaults to true unless specified otherwise. This means new plugins are automatically enabled for users unless explicitly disabled.

### Sync Hook Response Schema Details
The 'syncHookResponseSchema' includes options like 'continue', 'suppressOutput', and 'decision' to control Claude's behavior post-hook. Notably, 'continue' defaults to true, allowing hooks to interrupt execution.

### Voice State Management with Stable References
The `useSetVoiceState` function in `voice.tsx` provides a stable reference for setting voice state, ensuring no re-renders occur. This synchronous state management allows immediate observation of new values, which is crucial for handlers like `VoiceKeybindingHandler`.

### Development Channel Gatekeeping Mechanism
The `ChannelEntry` type in `state.ts` includes a `dev` flag that enforces gatekeeping for development channels. This flag ensures that development entries are checked individually rather than relying on a session-wide flag, preventing unauthorized access.

### Global Pointer for REPL Bridge Handle
The REPL bridge handle is stored globally, allowing tools and slash commands outside the React tree to invoke handle methods like subscribePR. This design choice ensures that the sessionId and getAccessToken are consistently captured, avoiding token divergence between staging and production environments.

### FlushGate State Machine for Message Queuing
Claude uses a FlushGate state machine to manage message writes during an initial flush. This mechanism queues new messages to prevent them from interleaving with historical messages sent to the server, ensuring orderly message delivery.

### Mapping Tool Names to Human-Readable Verbs
The system maps tool names to human-readable verbs for status displays, enhancing user understanding but not publicly documented.

### Tool Activity Display Expiry Time
The tool activity line in the bridge status remains visible for 30,000 milliseconds (30 seconds) after the last tool_start event. This specific duration is not commonly documented.

### Secret Feature Flag: tengu_bridge_repl_v2_cse_shim
The code contains a feature flag 'tengu_bridge_repl_v2_cse_shim_enabled' used to toggle a temporary shim for session ID translation from 'session_*' to 'cse_*'. This indicates a transitional phase in the system's architecture.

### Explore Agent Minimum Queries
The EXPLORE_AGENT_MIN_QUERIES constant sets a minimum threshold for queries, which is not publicly documented.

### Secret Feature Flag: tengu_hawthorn_window
The feature flag 'tengu_hawthorn_window' can override the default maximum aggregate size of tool_result blocks within a single user message, which is set to 200,000 characters. This allows for dynamic adjustment of message size limits at runtime.

### Async Agent Tool Availability
The set of tools available to async agents includes FILE_READ_TOOL_NAME and WEB_SEARCH_TOOL_NAME, indicating specific capabilities enabled for asynchronous operations.

### Memory Type Taxonomy in Claude Code
Claude Code categorizes memories into four types: 'user', 'feedback', 'project', and 'reference'. These types capture context not derivable from the current project state, such as user roles and feedback.

### Sprite Architecture: 5x12 Design Choice
Each sprite in the buddy system is designed to be 5 lines tall and 12 characters wide, with specific rules for hat slots. This design choice has implications for sprite animation and customization.

### Global Kill Ring for Text Operations
The code implements a global kill ring for text operations, allowing text to be cut and yanked across different input fields. This behavior is not typically documented and could lead to unexpected shared state across inputs.

### Dynamic Team Context for Swarm Coordination
The code supports dynamic team contexts for agent swarm coordination, allowing runtime joining and leaving of teams. This feature is controlled via CLI arguments and not publicly documented.

### In-Process Teammate Integration Helpers
The code provides utilities for in-process teammate integration, including finding task IDs by agent name and handling plan approval responses. It also includes a mechanism to detect permission-related messages, which is not publicly documented.

### CWD Override for Async Contexts
The code uses AsyncLocalStorage to override the current working directory for specific async contexts, allowing concurrent agents to operate independently. This behavior is not widely known or documented.

### Hidden Auto Tool Search Percentage
The default percentage of context window at which to auto-enable tool search is set to 10%. This can be overridden using the ENABLE_TOOL_SEARCH environment variable with the format 'auto:N', where N is a number between 0-100.

### Terminal Cleanup Sequence Before Exit
Claude Code ensures terminal modes are cleaned up synchronously before process exit to prevent terminal state issues, a detail not highlighted in public resources.

### Side Question Uses Forked Agent
The '/btw' side question feature uses a forked agent that shares the parent context but operates independently, with no tools and limited to a single response.

### Fast Mode Subscription Restrictions
Fast Mode is restricted to paid subscriptions or requires credits, as indicated by the message 'Fast mode requires a paid subscription'. This is not clearly stated in public documentation.

### Agent Swarms Feature Flag
The presence of `isAgentSwarmsEnabled` suggests a feature flag for enabling or disabling 'Agent Swarms', a potentially experimental or internal feature.

### Tool Token Count Overhead of 500
When tools are present, the API adds a fixed overhead of 500 tokens per API call. This overhead is subtracted from per-tool counts to ensure accurate tool content size reporting.

### Deterministic Agent ID System
The deterministic agent ID system uses the format 'agentName@teamName' and 'requestType-timestamp@agentId', ensuring reproducibility and predictability. This system is not highlighted in public-facing materials.

### Secret Code Indexing Tools in Use
The codebase tracks usage of lesser-known code indexing tools like 'seagoat', 'bloop', 'gitloop', and 'windsurf'. These tools are not commonly mentioned in public documentation.

### Claude-CLI User Agent Dependency on Logging
The `claude-cli` string in the user agent is crucial for log filtering, and changing it without updating logging could disrupt log processing. This dependency is not publicly documented.

### WeakMap Caching for Tool Grouping
The use of a WeakMap to cache tool names that support grouped rendering is an architecture choice that optimizes performance by avoiding rebuilding sets on every call. This is not a commonly discussed implementation detail.

### MCP Tools Token Threshold Set at 25,000
The MCP tools token threshold is set at 25,000 tokens, which is higher than the 15,000 tokens mentioned in some documentation. This discrepancy could lead to unexpected behavior when managing tool tokens.

### WebSocket Architecture: Special Handling for Bun
The WebSocketTransport class includes specific handling for Bun, a JavaScript runtime. This suggests a tailored architecture for different environments, which is not commonly documented.

### Hidden Agent Teams Feature Flag
The '--agent-teams' CLI flag is hidden from external users but can still be activated if passed. It requires the 'tengu_amber_flint' GrowthBook gate to be enabled.

### Tengu Amber Flint Killswitch
The 'tengu_amber_flint' feature flag acts as a killswitch for the agent teams feature, controlling its availability for external users.

### Hidden Beta Feature Flags in Source Code
The source code reveals several hidden beta feature flags such as 'CONTEXT_1M_BETA_HEADER', 'INTERLEAVED_THINKING_BETA_HEADER', and 'TOOL_SEARCH_BETA_HEADER_1P'. These are not publicly documented and are used internally for testing new features.

### PowerShellTool Lazy Loading Mechanism
The PowerShellTool is lazily loaded to optimize startup performance. It is only required when a skill explicitly uses `shell: powershell`, deferring its import until necessary.

### BetaTool with Strict and Deferred Loading
The BetaTool type has been extended with 'strict' and 'defer_loading' options, allowing for more controlled and potentially delayed feature rollouts, which is not publicly documented.

### Conditional Snip Tool Activation with HISTORY_SNIP
The 'HISTORY_SNIP' feature flag conditionally activates a Snip Tool, indicating a feature that might be under development or testing.

### Hidden Classifier Approval Feature Flags
The system uses feature flags 'BASH_CLASSIFIER' and 'TRANSCRIPT_CLASSIFIER' to control the activation of classifier approvals for tool usage. These flags determine whether certain classifier functions are executed.

### Teammate Mailbox Uses File-Based System
The Teammate Mailbox system uses a file-based approach for messaging within agent swarms. Each agent has an inbox file located at `.claude/teams/{team_name}/inboxes/{agent_name}.json`, where messages are stored as JSON attachments.

### Claude Code Hints Protocol for CLI and SDK
The `extractClaudeCodeHints` function reveals a protocol for emitting `<claude-code-hint />` tags in CLI and SDK outputs. These tags are stripped before reaching the model, indicating a hidden communication channel for tool recommendations.

### Content Array Insertion Logic
When inserting blocks into a content array, if tool_result blocks exist, the new block is inserted after the last one. If no tool_result blocks are present, it is inserted before the last block. Additionally, if the inserted block becomes the final element, a text continuation block is appended.

### Session File Access Analytics Hooks
Session file access is tracked via hooks for Read, Grep, Glob, Edit, and Write tools. This internal analytics mechanism is not disclosed in public documentation.

### Standalone Agent Context Handling
Standalone agent utilities provide context for sessions not part of a swarm team, prioritizing swarm context if available. This behavior is not documented.

### Embedded Search Tools in Ant-Native Builds
In ant-native builds, Claude Code can embed search tools like bfs and ugrep directly into the bun binary, shadowing standard shell commands.

### Hidden Feature Flag: COORDINATOR_MODE
The code contains a feature flag 'COORDINATOR_MODE' that conditionally imports a module for coordinator mode operations. This mode allows specific tools to be used and manages orchestration actions directly.

### PR Activity Subscription Tools Always Allowed
Tools with suffixes 'subscribe_pr_activity' and 'unsubscribe_pr_activity' are always allowed in coordinator mode as they are lightweight orchestration actions.

### TeammateContext Uses AsyncLocalStorage
TeammateContext uses AsyncLocalStorage to manage runtime context for in-process teammates, allowing concurrent execution without global state conflicts.

### Advisor Tool Feature Flag: tengu_sage_compass
The advisor tool is controlled by the feature flag 'tengu_sage_compass'. This flag determines if the advisor tool is enabled and if users can configure it. The advisor tool is part of a beta program and is only available to first-party users.

### Model Support for Advisor Tool
Only models containing 'opus-4-6' or 'sonnet-4-6' in their names support the advisor tool. This restriction is not publicly documented, indicating a selective rollout of the feature.

### Secret Event: tengu_fork_agent_query
The code logs metrics via a secret event named 'tengu_fork_agent_query' when a forked agent query loop completes. This event is not documented publicly.

### Tengu Satin Quoll Feature Flag
The 'tengu_satin_quoll' GrowthBook flag is used to override the maximum output tokens for MCP tools. This flag provides a specific 'mcp_tool' key for token limits, distinct from other keys that use character counts.

### File State Cache Size Limits
The FileStateCache uses a default maximum size of 25MB to prevent memory bloat from large file contents. This limit is specifically designed for large text files and notebooks, as images are not cached.

### MCP Output Token Cap Resolution
The maximum output tokens for MCP tools are determined by a hierarchy: environment variable, 'tengu_satin_quoll' flag, and a default of 25,000 tokens. This layered approach allows for flexible configuration.

### Tool Schema Cache Memoization Strategy
Tool schemas are memoized per session to prevent cache busting from mid-session GrowthBook refreshes, locking schema bytes at first render.

### AsyncLocalStorage for Agent Context Isolation
The code uses AsyncLocalStorage to track agent identity across async operations, preventing context overwriting when multiple agents run concurrently. This differs from using a shared AppState, which would cause interference.

### Agent Descriptions Token Threshold
The `AGENT_DESCRIPTIONS_THRESHOLD` is set to 15,000 tokens, which is used to calculate the cumulative token estimate for agent descriptions. This threshold helps manage the size of agent metadata processed by the system.

### Agent Theme Color Fallback to ANSI
The toInkColor function falls back to raw ANSI color codes if a color is not a known agent color. This ensures that even unknown colors are displayed, though they may not match the theme.

### Non-Core File Patterns for Filtering
The exampleCommands module uses specific regex patterns to identify non-core files, such as lock files and build artifacts, to filter out from certain operations. This deterministic filtering avoids reliance on external tools.

### Pending Initial User Message Mechanism
The code uses a side channel to handle an initial user message emitted by hooks without altering the existing Promise return type. This is done by setting a `pendingInitialUserMessage` variable, which is then consumed by `takeInitialUserMessage`. This avoids structural changes to the return type that would affect multiple callsites.

### Bare Mode Skips Hook Loading
In 'bare mode', the system skips loading plugin hooks entirely, not just executing them. This is an optimization to avoid unnecessary loading of plugin hooks that won't be run, as indicated by the comment in the code.

### Policy-Driven Plugin Hook Blocking
The system includes a policy that can block untrusted external plugin hooks by enabling a managed hooks-only mode. This is controlled by the `shouldAllowManagedHooksOnly` function, which when enabled, skips loading plugin hooks.

### Streamlined Transform: Distillation-Resistant Mode
The 'streamlinedTransform' function implements a 'distillation-resistant' output mode that omits 'thinking content' and strips tool list and model info from init messages. This mode is not publicly documented.

### Bare Mode: CLAUDE_CODE_SIMPLE Flag
The 'isBareMode' function checks for a 'CLAUDE_CODE_SIMPLE' environment variable or '--bare' CLI flag to skip hooks, LSP, plugin sync, skill dir-walk, attribution, background prefetches, and all keychain/credential reads. This mode is not publicly documented.

### Hidden Slash Command Visibility Flag
The frontmatter parser includes a feature flag 'hide-from-slash-command-tool' that controls the visibility of slash commands. This flag is a string similar to a boolean environment variable, determining whether to make commands visible to the SlashCommand tool.

### Query Guard State Machine
The QueryGuard class implements a state machine with three states: idle, dispatching, and running. It uses a synchronous approach compatible with React's useSyncExternalStore, preventing re-entry during async gaps.

### Large Tool Result Thresholds in Context Suggestions
The code defines specific thresholds for triggering context suggestions related to tool results. For instance, a tool result is considered 'large' if it exceeds 15% of the context or 10,000 tokens. These thresholds are not publicly documented, revealing internal criteria for performance tuning.

### Sandbox Network Access Tool Name
The code defines a synthetic tool name 'SandboxNetworkAccess' used for forwarding sandbox network permission requests via the can_use_tool control_request protocol. This is not documented publicly.

### CCR Mode Sync via onChangeAppState
The 'onChangeAppState' function ensures any change in toolPermissionContext.mode notifies CCR and the SDK status stream, addressing previous sync issues. This behavior is not detailed in public documentation.

### Agentic Session Search Utility
The `agenticSessionSearch` utility is used internally to search sessions with agentic properties, which is not publicly documented. This suggests a feature for enhanced session management or retrieval based on agent characteristics.

### Prevent Sleep Service
The `startPreventSleep` and `stopPreventSleep` services are used to manage system sleep states during operations, which is not typically highlighted in user-facing materials.

### Hidden VOICE_MODE Feature in TextInput
The TextInput component has a hidden 'VOICE_MODE' feature that enables voice state management and audio level visualization, suggesting potential future voice interaction capabilities.

### BashModeProgress Uses Custom Caching
BashModeProgress uses a custom caching mechanism to optimize rendering. It caches the input and progress state to avoid unnecessary re-renders, which is not documented publicly.

### ApproveApiKey Recommends 'No' by Default
The ApproveApiKey component defaults to recommending 'No' for API key approval, which is not explicitly stated in any public documentation.

### Default Output Style Description
The default output style description for Claude is 'Claude completes coding tasks efficiently and provides concise responses', which is not explicitly stated in public documentation.

### Diff Tool Chunk Size Limit
The `FileEditToolDiff` component uses a constant `CHUNK_SIZE` from `readEditContext.js`, which defines the maximum size of chunks when reading files for diffs. This could impact performance and memory usage.

### Teleport Stash Feature for Git Changes
The 'TeleportStash' component includes a feature to automatically stash changes before a 'teleport' operation. This is not publicly documented and uses 'stashToCleanState' with a message 'Teleport auto-stash'.

### Ctrl+O Expand Shortcut Context
The CtrlOToExpand component uses a SubAgentContext to avoid displaying the '(ctrl+o to expand)' hint excessively in sub-agent outputs. This context helps manage UI clutter by tracking if the user is inside a sub-agent.

### Teleport Error Flow Completion Tracking
The `ResumeTask` component tracks whether the teleport error flow has been completed using the `hasCompletedTeleportErrorFlow` state variable. This internal tracking is not mentioned in public documentation.

### Session Preview Caches Base Tools
The SessionPreview component caches the result of getAllBaseTools(), suggesting a performance optimization to avoid recalculating available tools.

### AgentProgressLine Background Execution
The AgentProgressLine component has a specific behavior for background execution, where tasks display 'Running in the background' if they are asynchronous and resolved.

### Internal Hook: useBlink for Animation
The `ToolUseLoader` component uses an internal hook `useBlink` to manage blinking animations based on the `shouldAnimate` prop. This hook is not publicly documented, suggesting it's an internal utility for managing UI animations.

### Cached Feature Value: getFeatureValue_CACHED_MAY_BE_STALE
The function `getFeatureValue_CACHED_MAY_BE_STALE` is used to retrieve feature values that may be outdated, indicating a caching mechanism for feature flags that might not always reflect the latest state.

### Internal OAuth Flow States Revealed
The ConsoleOAuthFlow component manages OAuth states including 'platform_setup', 'waiting_for_login', and 'creating_api_key', which are not publicly documented.

### Swarm Initialization Hook with Secret Feature Flag
The `useSwarmInitialization` hook is conditionally loaded based on the `ENABLE_AGENT_SWARMS` feature flag. This allows for dead code elimination when swarms are disabled, which is not publicly documented.

### PR Status Polling with Hidden Thresholds
The `usePrStatus` hook polls PR review status every 60 seconds, stopping after 60 minutes of inactivity. It permanently disables polling if a fetch takes longer than 4 seconds, which is a threshold not mentioned in public documentation.

### File History Snapshot Initialization with Secret Flag
The `useFileHistorySnapshotInit` hook utilizes a secret feature flag `fileHistoryEnabled` to determine whether to initialize file history snapshots. This behavior is not publicly documented.

### Auto-Copy on Selection with Hidden Behavior
The `useCopyOnSelect` hook automatically copies text to the clipboard when a selection is made, mimicking iTerm2's behavior. This feature only works in alt-screen mode and is not publicly documented.

### Session Backgrounding Hook with Ctrl+B
The `useSessionBackgrounding` hook allows users to toggle session backgrounding using Ctrl+B, a feature not commonly documented. It manages tasks by re-backgrounding foregrounded tasks and syncing their state.

### Voice Growth Book Kill-Switch Mechanism
The 'useVoiceEnabled' hook uses a 'Growth Book' kill-switch for voice features. This mechanism allows disabling voice features mid-session, which is not publicly documented.

### History Search Uses AbortController
The 'useHistorySearch' hook uses an AbortController to manage search operations, allowing for cancellation of ongoing history searches. This is a sophisticated approach not typically highlighted in documentation.

### Swarm Permission Polling Interval
The `useSwarmPermissionPoller` hook polls for permission responses every 500 milliseconds, allowing for timely updates in swarm environments.

### Claude SSH Integration Hook Details
The `useSSHSession` hook is designed for REPL integration with `claude ssh` sessions, using an SSH child process instead of a WebSocket. The SSH process and auth proxy are created before the hook runs, differing from the `useDirectConnect` lifecycle.

### Teammate View Auto-Exit Mechanism
The `useTeammateViewAutoExit` hook automatically exits teammate viewing mode if the viewed teammate is killed, encounters an error, or is no longer running. This ensures users can review completed tasks but exit when a task is inactive.

### Internal Direct Connect Feature Flag
The `useDirectConnect` hook uses an internal flag `isRemoteMode` to determine if a Direct Connect session is active. This is not documented publicly.

### Notification Timeout Threshold
The `useNotifyAfterTimeout` hook uses a default interaction threshold of 6000ms to determine if a user is idle before sending notifications. This specific value is not publicly documented.

### Hidden Macro Version in Update Notification
The `useUpdateNotification` hook uses a hidden macro `MACRO.VERSION` to set the initial version for update notifications. This macro is not documented publicly.

### Double-Press Mechanism for Ctrl+C/D Exits
The 'useExitOnCtrlCD' hook uses a time-based double-press mechanism for exiting the application with Ctrl+C or Ctrl+D. This is a surprising choice over a chord system, allowing the first press to trigger an interrupt.

### Hidden 'agentSwarmsEnabled' Feature Flag
The 'useLogMessages' hook checks for a feature flag 'isAgentSwarmsEnabled', indicating a potential experimental feature related to agent swarms.

### Specific Response Timeout Values in Remote Sessions
The `useRemoteSession` hook has a response timeout of 60 seconds, extended to 3 minutes during compaction. These specific values are not publicly documented.

### Max Init Failures Set to 3
The `MAX_CONSECUTIVE_INIT_FAILURES` constant is set to 3, limiting the number of consecutive initialization failures before the hook stops re-attempting for the session lifetime. This prevents continuous failed attempts that could overwhelm the system.

### Double Press Timeout Set to 800ms
The `useDoublePress` hook uses a timeout of 800 milliseconds to differentiate between a single and double press. This specific threshold could impact user interactions where quick double presses are required.

### GrowthBook Refresh Forces Re-render
The `useMainLoopModel` hook forces a re-render upon GrowthBook refresh to ensure model alias resolution is up-to-date. This indicates a reliance on GrowthBook for dynamic configuration.

### Layer-3 Plugin Management System
The `useManagePlugins` hook uses a 'Layer-3' system for plugin management, requiring manual refresh through `/reload-plugins` for consistency. This approach is not publicly documented.

### Exit After First Render for 'ant' Users
The `useAfterFirstRender` hook exits the process after the first render if the environment variable `CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER` is truthy and `USER_TYPE` is 'ant'. This behavior is undocumented.

### History Chunk Size for Arrow Key Navigation
The `useArrowKeyHistory` hook loads history entries in chunks of 10 to optimize disk reads during rapid keypresses. This specific chunk size is not mentioned in public documentation.

### Session Container Compatibility Check
The function 'isSessionContainerCompatible' checks if a session can run in a container by scanning for specific tool usage patterns. This internal compatibility check is not publicly documented.

### IDE Connection Status Returns Null
The `useIdeConnectionStatus` hook can return a status of `null` when no IDE client is found, which is not documented in public APIs.

### Line Numbers Adjusted in IDE At-Mention
The `useIdeAtMentioned` hook adjusts line numbers from 0-based to 1-based, which could lead to confusion if not documented.

### Minimum Display Time Throttle Hook
The `useMinDisplayTime` hook ensures each value is displayed for at least a specified time, differing from standard throttle or debounce methods.

### Ctrl+C Keybinding Integration Hook
The `useExitOnCtrlCDWithKeybindings` hook integrates Ctrl+C handling with keybindings, providing a standard way to manage exits and interrupts.

### Debounce Mechanism in Input Buffer
The useInputBuffer hook implements a debounce mechanism with a configurable debounceMs parameter to manage rapid changes. This is not detailed in public documentation.

### Turn Diff Cache Structure
The useTurnDiffs hook uses a TurnDiffCache structure to manage turn-based diffs, which includes completedTurns, currentTurn, lastProcessedIndex, and lastTurnIndex. This internal structure is not publicly documented.

### KAIROS Gated Assistant History
The useAssistantHistory hook is only called inside a feature gate 'KAIROS', indicating this history feature is restricted or experimental.

### Test Bypass in useDynamicConfig Hook
The useDynamicConfig hook bypasses dynamic config fetching during tests to prevent hangs, which is not documented publicly.

### Prefetch Threshold Rows for History Loading
The useAssistantHistory hook uses a prefetch threshold of 40 rows to trigger loading older messages, which impacts performance and user experience.

### Max Fill Pages Limit for Viewport
The useAssistantHistory hook limits the number of chained page loads to 10 to fill the viewport, preventing excessive loading.

### Hidden Max Lines Limit in Git Diff
The `useDiffData` hook imposes a hidden limit of 400 lines per file (`MAX_LINES_PER_FILE`) when fetching git diffs. Files exceeding this are marked as truncated.

### Undocumented TEAMMATE_MESSAGE_TAG Constant
The `useInboxPoller` hook references an undocumented constant `TEAMMATE_MESSAGE_TAG`, indicating a possible feature for tagging messages related to teammates.

### Internal Mailbox Bridge Hook
The `useMailboxBridge` hook provides an internal mechanism to bridge messages from a mailbox context, using `useSyncExternalStore` for synchronization.

### Agent Name Polling Logic
The `getAgentNameToPoll` function defines different agent name polling logic based on the app state, distinguishing between in-process teammates, process-based teammates, and team leads.

### Kairos Cron Scheduler Feature
The useScheduledTasks hook includes a feature flag check for 'isKairosCronEnabled', indicating a hidden feature or project codenamed 'Kairos' related to scheduling tasks.

### Agent Kill Confirmation Window: 3000ms
The code specifies a 3000ms time window during which a second press of the cancel keybinding will kill all background agents. This is a critical threshold for users who need to quickly terminate processes.

### Immediate Execution of Keybinding Commands
Commands triggered via keybinding are treated as 'immediate' and execute right away without clearing the user's existing input text. This behavior differs from typical command execution which may reset input states.

### File State Cache Limits in MCP Server
The MCP server uses a size-limited LRU cache for file states with specific limits: 100 files and 25MB. This design decision is not publicly documented.

### Output Schema Restrictions in MCP Tools
MCP tools require output schemas to have 'type: "object"' at the root level, skipping schemas with 'anyOf/oneOf'. This restriction is not publicly documented.

### Secret Statusline Command Feature
The 'statusline' command in Claude Code has a hidden feature that allows dynamic configuration of the status line UI using the 'statusline-setup' subagent type. This feature is not documented publicly.

### Internal Agent Tool Name Constant
The constant AGENT_TOOL_NAME is used internally within Claude Code, indicating a specific tool or feature that is not publicly documented.

### Tengu Kairos Brief Config Feature Flag
The 'tengu_kairos_brief_config' feature flag controls the visibility of a slash command for toggling brief-only mode. This flag does not act as a kill switch but controls the command's visibility without a TTL. The tool availability is controlled by a separate gate with a 5-minute TTL.

### Init Verifiers Command Auto-Detection Phase
The 'init-verifiers' command includes an auto-detection phase that scans top-level directories to identify distinct project areas and suggests verifier tools based on detected project types and stacks. It specifically avoids creating verifiers for unit tests or typechecking.

### Ultraplan Command Timeout Setting
The Ultraplan command has a hardcoded timeout of 30 minutes (1800000 ms) for multi-agent exploration, indicating a design decision to limit session duration.

### Version Command Restricted to 'ant' Users
The version command is restricted to users with USER_TYPE set to 'ant', suggesting it's an internal tool not intended for general use.

### Hidden Feature Flag: Tengu Streaming Tool Execution
The source code reveals a hidden feature flag 'tengu_streaming_tool_execution2' used for controlling streaming tool execution. This flag is checked using a potentially stale cache, indicating it might be toggled dynamically during runtime.

### Internal-Only Hook: useMoreRight
The 'useMoreRight' hook is a stub for external builds, indicating it is an internal-only feature. This suggests certain functionalities are reserved for internal use or testing.

### Internal Logging for 'Ant' Users
The code includes specific logging for users identified as 'ant', which logs events with Kubernetes namespace and tool permission context. This suggests a targeted internal logging mechanism for specific user types.

### Synthetic AssistantMessage Creation
The code creates synthetic AssistantMessages for remote permission requests, indicating a unique handling of tool use in remote mode. This is done because the tool use runs on the CCR container and not locally.

### Tool Stub Creation for Unknown Tools
The system creates minimal tool stubs for tools not loaded locally, such as MCP tools, allowing fallback permission requests. This suggests a flexible architecture accommodating unknown remote tools.

### Local Agent Ineligible for Managed Settings
The code explicitly marks the 'local-agent' entry point as ineligible for remote managed settings, indicating a distinct permission model for local environments.

### Tri-State Eligibility in Sync Cache
The eligibility for remote-managed-settings sync cache is managed as a tri-state: undefined, false, and true. This nuanced approach helps avoid unnecessary checks and optimizes performance.

### Agent Summary Interval Timing
Agent summaries are generated every 30 seconds (SUMMARY_INTERVAL_MS = 30_000) by forking the sub-agent's conversation to create a progress summary.

### Strict No-Tools Preamble with Rejection Consequences
The NO_TOOLS_PREAMBLE explicitly instructs the model to respond with text only and warns that tool calls will be rejected, wasting the model's only turn. This aggressive approach aims to prevent wasted computational resources.

### Post-Compact Cleanup with Subagent Handling
The post-compact cleanup function differentiates between main-thread and subagent compacts, ensuring that module-level state is only reset for main-thread operations to avoid corruption.

### Secret Codenames for Context Edit Strategies
The code defines secret codenames for context edit strategies: 'clear_tool_uses_20250919' and 'clear_thinking_20251015'. These appear to be internal feature flags or version identifiers for context management strategies, which are not publicly documented.

### Max Tool Use Concurrency Limit
The maximum concurrency for tool use is set to 10, as determined by the environment variable 'CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY'.

### Memory Extraction Agent's Toolset
The memory extraction agent can use tools like FILE_READ_TOOL_NAME, GREP_TOOL_NAME, and a read-only BASH_TOOL_NAME, but is restricted from using 'rm'. This specific toolset and restriction are not publicly documented.

### Session Memory Extraction Thresholds
The session memory extraction process has specific thresholds: a 15-second timeout for extraction wait and a 60-second stale threshold. Additionally, session memory initialization requires a minimum of 10,000 tokens, and updates require at least 5,000 tokens or 3 tool calls.

### Default Session Memory Template Structure
The default session memory template is highly structured with specific sections like 'Session Title', 'Current State', 'Task specification', and others. These sections are strictly maintained and cannot be modified, deleted, or added to during updates.

### LSP Server Manager Architecture
The LSP Server Manager uses a factory function pattern with closures for state encapsulation, avoiding classes. It manages multiple LSP server instances and routes requests based on file extensions.

### LSP Manager Initialization States
The LSP server manager tracks its initialization state with a specific type 'InitializationState' which includes 'not-started', 'pending', 'success', and 'failed'. This state management ensures that callers handle undefined states gracefully.

### Test-Only LSP Manager Reset Function
A test-only function '_resetLspManagerForTesting' is available to reset the LSP manager's state without tearing down real connections, allowing for early returns in tests.

### Claude.ai Server Name Normalization
Server names starting with 'claude.ai ' are normalized by replacing invalid characters with underscores and collapsing consecutive underscores. This unique normalization approach prevents interference with MCP tool names.

### MCP Connection Context Management
The MCPConnectionManager uses React context to manage MCP server connections, with functions like 'reconnectMcpServer' and 'toggleMcpServer'. This suggests a dynamic approach to managing server connections within the app state.

### Tengu ClaudeAI MCP Eligibility Checks
The code includes a feature flag 'tengu_claudeai_mcp_eligibility' that checks eligibility for ClaudeAI MCP servers. It logs specific states like 'disabled_env_var' and 'missing_scope'.

### Speculation Architecture Limits
The speculation feature has a maximum of 20 turns and 100 messages per session. These limits are hardcoded and may affect performance and resource usage.

### Foreground 529 Retry Sources List
The code defines a specific set of 'foreground' query sources that are allowed to retry on 529 errors. This includes sources like 'repl_main_thread', 'sdk', 'agent:custom', and 'auto_mode'. These sources are considered critical as the user is blocking on the result, and retries are allowed to ensure completion.

### Tool Use Summary via Haiku API
The Tool Use Summary Generator uses a Haiku API to create concise summaries of tool batches. This behavior is not publicly documented and suggests a unique approach to summarization.

### Magic Docs Auto-Update with Subagents
Magic Docs automatically updates markdown files using a forked subagent. This internal mechanism is not detailed in public documentation and highlights an automated approach to documentation maintenance.

### Sanitization of Analytics Metadata
Tool names in analytics logs are sanitized to prevent PII exposure, specifically redacting MCP tool names while preserving built-in tool names. This highlights a focus on privacy in internal logging practices.

### Parallel Work Orchestration with Batch
The 'Batch' system orchestrates parallel work across the codebase, using a minimum of 5 and a maximum of 30 agents. This system emphasizes independent units that can be implemented in isolated git worktrees, highlighting a sophisticated approach to large-scale code changes.

### Hidden Skill: AGENT_TRIGGERS_REMOTE
The 'AGENT_TRIGGERS_REMOTE' feature flag enables a skill called 'ScheduleRemoteAgentsSkill'. This suggests remote agent scheduling capabilities that are not mentioned in public documentation.

### Tengu Remote Setup Logging
The 'tengu_remote_setup' logs specific events such as 'tengu_remote_setup_started' and 'tengu_remote_setup_result'. This suggests a feature or tool named 'Tengu' related to remote setup processes.

### Complex OAuth Status Handling
The OAuth flow in the code manages a complex state machine with multiple states such as 'starting', 'waiting_for_login', 'processing', 'success', 'error', and 'about_to_retry'. This intricate state management suggests a robust handling of various OAuth scenarios, which may not be fully documented.

### Error Handling with Retry in OAuth Flow
The OAuth flow includes a retry mechanism for errors, allowing users to attempt the login process again if an error occurs. This is managed through the `toRetry` property in the OAuth status, which stores the state to retry.

### Internal Keybinding Contexts in GitHub App Installation
The code for installing the GitHub app uses an internal keybinding context labeled as 'Confirmation'. This context is used to manage user input states during the installation process, which is not publicly documented.

### Secret Feature Flag: FORK_SUBAGENT
The 'FORK_SUBAGENT' feature flag controls whether the 'fork' alias is available for the 'branch' command. This suggests a potential subagent capability that is not publicly documented.

### Plan Mode Transition Logic
The plan command checks if the current mode is not 'plan' and transitions to 'plan' mode using handlePlanModeTransition. It then updates the toolPermissionContext to 'plan' mode with a session destination.

### Add Directory Permission Update
The add-dir command updates permissions by applying a permission update to the toolPermissionContext, specifying the destination as either 'localSettings' or 'session'.

### Hidden Plugin Options Flow
The PluginOptionsFlow component manages post-install configuration for plugins, using a hidden 'skipped' state if no configuration is needed. This behavior is not documented publicly.

### Default Max Visible Items in Pagination
The usePagination hook defaults to showing a maximum of 5 visible items at a time. This default is not publicly documented.

### Reload Plugins Command Architecture
The /reload-plugins command uses a 'Layer-3 refresh' to apply pending plugin changes without re-fetching managed settings, which poll hourly. It supports a fail-open approach with no retries, requiring user re-execution for errors.

### SessionEnd Hooks Timeout
The session end hooks are bounded by a timeout of 1.5 seconds, which is controlled by 'CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS'.

### Secret Tengu Hooks Command
The code contains a hidden feature flagged as 'tengu_hooks_command', which logs events related to hook configurations. This feature is not documented publicly.

### Thinkback Skill Directory Retrieval
The 'thinkback' skill directory is dynamically retrieved from the installed plugin's cache path, indicating a modular plugin architecture.

### Extensive Hook Events List
The HOOK_EVENTS array contains 27 specific events like 'PreToolUse', 'PostToolUseFailure', and 'PermissionDenied', indicating a complex event-driven architecture not fully disclosed in public documentation.

### LSP Poll Interval Set to 5000ms
The LSP status polling interval is set to 5000 milliseconds (5 seconds) in the `useLspInitializationNotification` hook. This may impact performance and responsiveness in environments with frequent LSP errors.

### ENABLE_LSP_TOOL Feature Flag
The `useLspInitializationNotification` hook is only active when the `ENABLE_LSP_TOOL` environment variable is set. This suggests a feature flag controlling LSP-related notifications.

### Fast Mode Notification Keys
The `useFastModeNotification` hook uses specific keys like `fast-mode-cooldown-started` and `fast-mode-org-changed` for notifications. These keys suggest distinct states and transitions in fast mode handling.

### Remote Mode Check in Notifications
The notification hooks check for 'getIsRemoteMode()' before displaying warnings, indicating that notifications are suppressed in remote mode. This behavior is not publicly documented.

### Remote Mode Affects Notification Behavior
The `useStartupNotification` hook skips firing notifications if `getIsRemoteMode()` returns true, which is not documented publicly. This means notifications may not appear in remote environments.

### Hardcoded Code Editing Tools List
The list of code editing tools is hardcoded as ['Edit', 'Write', 'NotebookEdit']. This suggests a limited and predefined set of tools recognized for code editing purposes.

### Classifier Checks Race Against User Interaction
Classifier checks and permission hooks run asynchronously, racing against user interaction to determine permission outcomes. This design choice highlights a reliance on both automated and user-driven decision-making.

### Sequential Permission Checks for Coordinators
Coordinator workers perform permission checks sequentially, first using hooks and then a classifier, before falling back to an interactive dialog. This differs from swarm workers, which can forward requests to a leader.

### Secret Tool Name: EXIT_PLAN_MODE_V2_TOOL_NAME
The code references a secret tool name 'EXIT_PLAN_MODE_V2_TOOL_NAME' which is used to trigger a specific phase called 'plan_ready'. This phase is only accessible through this tool, suggesting a hidden feature related to exit planning.

### Secret Tool Name: ASK_USER_QUESTION_TOOL_NAME
The code reveals a tool name 'ASK_USER_QUESTION_TOOL_NAME' which alters the display of questions as CTAs instead of tool names, indicating a specialized tool for user interaction.

### Error Handling in Tool Activity Rendering
The 'renderToolActivity' function includes a try-catch block to handle errors when parsing tool input schemas, defaulting to the tool name if parsing fails. This behavior is not documented publicly.

### Caching in HookProgressMessage
The 'HookProgressMessage' function uses a caching mechanism with an array '$' to store previous states and avoid unnecessary recalculations. This behavior is not documented publicly.

### Minimum Hint Display Time
The code sets a minimum display time of 700ms for tool hints to ensure readability. This prevents fast-completing tool calls from flickering past too quickly.

### Hidden Feature Flag: Agent Swarms
The code includes a hidden feature flag 'isAgentSwarmsEnabled' which is not documented publicly. This suggests there is an internal feature related to 'Agent Swarms' that can be toggled on or off.

### Internal Classifier Checking Logic
The AssistantToolUseMessage component includes logic for 'isClassifierChecking' and 'isAutoClassifier', which are not publicly documented. This suggests internal mechanisms for handling classifier checks that are not exposed to users.

### Advisor Message Caching Logic
The AdvisorMessage component uses a caching mechanism with an array $ to store previous states and avoid unnecessary re-renders. This is not typical React behavior and suggests a custom optimization strategy.

### Secret Color Flag: cyan_FOR_SUBAGENTS_ONLY
The TaskAssignmentDisplay component uses a color flag 'cyan_FOR_SUBAGENTS_ONLY' for rendering task assignments, suggesting a feature or UI element intended only for subagents or internal users.

### BLACK_CIRCLE as Status Indicator
The UserAgentNotificationMessage component uses 'BLACK_CIRCLE' as a visual indicator for status, which may not be documented or visible to end-users.

### Internal Cache Mechanism in WizardProvider
The WizardProvider component uses an internal cache mechanism with a unique identifier _c(38) to manage state transitions efficiently. This is not documented publicly and indicates a custom optimization strategy.

### useExitOnCtrlCDWithKeybindings Hook
The useExitOnCtrlCDWithKeybindings hook is used across multiple components like WizardProvider and AgentsMenu to handle exit actions with specific keybindings. This hook is not publicly documented.

### AgentsMenu Internal State Initialization
The AgentsMenu component initializes its internal state with a default mode 'list-agents' and source 'all', using a cache sentinel mechanism. This initialization detail is not publicly documented.

### Hidden Tool Buckets in ToolSelector
The ToolSelector component categorizes tools into hidden buckets like READ_ONLY, EDIT, EXECUTION, MCP, and OTHER. These categories are not publicly documented, suggesting internal use cases or testing scenarios.

### Conditional TungstenTool Activation
The TungstenTool is conditionally included in the EXECUTION tool bucket based on a string comparison ('external' === 'ant'). This suggests a feature flag or environment-specific behavior not documented publicly.

### Agent Type Validation Limits
The validateAgentType function enforces that agent types must be between 3 and 50 characters long, and must start and end with alphanumeric characters. This is stricter than typical naming conventions.

### Agent Description Length Warnings
Agent descriptions must be at least 10 characters long, and warnings are issued if they exceed 5000 characters. This suggests a focus on concise yet informative descriptions.

### Hidden Agent Directory Paths
The code reveals hidden directory paths for different agent settings, such as 'flagSettings', 'userSettings', and 'policySettings'. 'flagSettings' throws an error, indicating it may be a restricted or internal-only setting.

### Agent Editor Restrictions
The 'AgentEditor' component restricts editing to only custom or plugin agents, ensuring type safety. This implies a controlled environment for agent modifications.

### Secret Agent Source Groups
The code references `AGENT_SOURCE_GROUPS`, which appears to be an internal categorization of agents not mentioned in public documentation. This could indicate hidden groupings or classifications of agents used internally.

### Internal Memoization in DiffDialog Component
The `DiffDialog` component uses an internal caching mechanism with symbols like `Symbol.for("react.memo_cache_sentinel")` to optimize rendering by memoizing state changes. This is not documented publicly and could lead to unexpected behavior if the cache is not managed correctly.

### MCP Reconnect Error Handling
The `MCPReconnect` component handles various reconnection states like 'connected', 'needs-auth', 'pending', 'failed', and 'disabled'. It uses a switch statement to manage these states, which is not publicly documented.

### McpParsingWarnings Component Caching Mechanism
The McpParsingWarnings component uses a caching mechanism with a 26-element array to store previous states and outputs, optimizing re-renders based on changes in parsingErrors, warnings, and scope. This is not documented publicly.

### MCPToolListView Read-Only Tool Detection
MCPToolListView detects if a tool is read-only by checking tool.isReadOnly?.({}) ?? false, which is not mentioned in public documentation. This affects how tools are presented to users.

### MCP OAuth Flow Aborts on Unmount
The MCPAgentServerMenu component aborts the OAuth flow if the component is unmounted, ensuring that the callback server is closed even if a parent component's ESC handler navigates away before its own fires. This behavior is not documented publicly.

### MCP OAuth Flow Cancels on ESC
The MCPAgentServerMenu component allows users to cancel the OAuth authentication flow by pressing ESC, using a custom keybinding. This feature is not publicly documented.

### MCP Server Authentication Pre-check
The MCPAgentServerMenu checks if an agent server needs authentication and has a URL before attempting to authenticate. This pre-check is not highlighted in public resources.

### MCP Tool Description Loading Mechanism
The MCPToolDetailView component loads tool descriptions asynchronously with a fallback message 'Failed to load description' if an error occurs. This behavior is not explicitly documented.

### MCP Server Toggle State Management
The MCPStdioServerMenu manages server toggle states with a callback that checks if the server is 'disabled' before toggling. This internal state management detail is not publicly documented.

### Stalled Animation Timeout and Intensity
The stalled animation in the Spinner component triggers after 3 seconds of no new tokens, with a fade effect over 2 seconds. This is controlled by the `useStalledAnimation` hook, which calculates the stalled intensity based on the time since the last token. The intensity increases gradually unless reduced motion is enabled, which causes an instant change.

### Permission Explainer Uses Lazy Fetch
The permission explainer state is managed using a lazy fetch approach, only creating the fetch promise when the user hits Ctrl+E. This avoids unnecessary token consumption for explanations users never view.

### MCP Suffix Trimming in User-Facing Names
In FallbackPermissionRequest, user-facing tool names ending with ' (MCP)' have this suffix trimmed before display. This behavior is not documented.

### Conditional Loading of ReviewArtifactTool
The ReviewArtifactTool is conditionally loaded based on the 'REVIEW_ARTIFACT' feature flag. This suggests that the tool is only available in certain environments or under specific conditions.

### Permission Request Timeout
The 'WorkerPendingPermission' component uses a memoization cache with a sentinel value to manage permission request states, indicating a potential timeout mechanism for pending permissions.

### Internal Tools: SandboxManager & BashTool
Anthropic uses internal tools like 'SandboxManager' and 'BashTool' to manage sandbox environments and bash command execution, which are not publicly documented.

### Bash Permission Sources in Claude
The function `getBashPermissionSources` identifies file paths with bash permissions by checking for 'allow' rules in project and local settings. It specifically looks for rules where the `toolName` matches `BASH_TOOL_NAME` or starts with it.

### Detecting Hook Sources in Claude
Claude uses `getHooksSources` to determine which settings sources have hooks enabled. It checks both project and local settings for hooks, statusLine, or fileSuggestion configurations.

### HooksConfigMenu is Read-Only
The HooksConfigMenu is intentionally read-only, directing users to edit settings.json or ask Claude for modifications. This is due to the old UI only supporting command-type hooks, making full in-menu editing a maintenance burden.

### Policy Restrictions on Hooks
Hooks can be restricted by policy, blocking user-defined hooks from certain settings files. Only hooks from managed settings are allowed to run when restricted.

### Default Visible Options Count
The default number of visible options in both SelectMulti and useSelectState is set to 5, which may not be intuitive for all users.

### Swarm Banner Tmux Detection Logic
The `useSwarmBanner` hook uses `isInsideTmux` to determine banner content, showing different information based on tmux presence. This logic is crucial for CLI users but isn't publicly detailed.

### Input Truncation Threshold at 10,000 Characters
The `useMaybeTruncateInput` hook triggers input truncation when the input length exceeds 10,000 characters. This threshold is not mentioned in public documentation.

### Unified Suggestion Icon Logic
The code uses specific icons for suggestion types: '+' for files, '◇' for MCP resources, and '*' for agents. This logic is embedded in the function getIcon().

### Notebook Edit Default Mode is Replace
In the NotebookEditToolDiffInner function, if the 'edit_mode' is not specified, it defaults to 'replace'. This behavior is not documented publicly.

### PowerShell Lacks Sandbox Support
The PowerShell tool does not support sandboxing on Windows, unlike other tools. This could lead to security concerns when executing scripts.

### Bash Tool Use Options with Classifier Integration
The bashToolUseOptions function integrates classifier-reviewed options, allowing dynamic feedback and prefix editing, which is not publicly detailed.

### Internal Diff Tool for File Writes
The 'FileWriteToolDiff' component uses an internal utility 'getPatchForDisplay' to generate diffs for file writes, which is not mentioned in public documentation. This suggests a custom diffing mechanism for internal use.

### File Edit Permission State Caching
The FileEditPermissionRequest component caches its state based on a set of props, using a custom caching mechanism with an array $ to track changes. This is not a typical React pattern and may lead to unexpected behavior if props change frequently.

### File Permission Dialog Default Values
The `FilePermissionDialog` component defaults to a 'write' operation type and a 'tool_use_single' completion type if not specified. These defaults may affect how permission dialogs are presented and logged.

### Hidden 'r' Keybinding in RecentDenialsTab
The 'RecentDenialsTab' component uses a hidden keybinding 'r' to toggle retry state for denials, which is not a global keybinding and isn't documented publicly.

### BashTool Permission Behavior
The PermissionRuleDescription component has specific logic for BashTool, allowing any Bash command starting with a specified prefix or any command if no specific rule content is provided. This behavior is not documented publicly.

### Hidden Auto Memory Feature Flag
The code contains a hidden feature flag 'isAutoMemoryEnabled' which determines if the 'MemoryStep' is included in the agent creation wizard. This feature is not publicly documented.

### Undocumented Agent Memory Scope Options
The 'MemoryStep' offers several memory scope options, including 'user', 'project', and 'local', which are not documented in public resources. These options determine where agent memory is stored.

### Hidden Keybinding Contexts in Wizard Steps
The wizard steps in the agent creation process use hidden keybinding contexts like 'Confirmation' and 'Settings'. These contexts are not documented publicly, suggesting they control specific keybinding behaviors during the wizard flow.

### Tengu Agent Creation Event
The source code reveals a hidden feature flag 'tengu_agent_created' used in logging events when a new agent is created. This suggests an internal codename 'tengu' for agent-related features.

### Tool Use Rejection Handling in Messages
The UserToolResultMessage component handles tool use rejections by checking if the content starts with REJECT_MESSAGE or INTERRUPT_MESSAGE_FOR_TOOL_USE, and then displays a UserToolRejectMessage.

### Risky Transcript Deserialization
Resumed transcripts deserialize 'toolUseResult' via raw JSON.parse without validation, which can crash rendering if the result is partial, corrupt, or in an old format. This highlights a potential stability risk.

### Infinite Retry with Exponential Backoff
The `WorkerStateUploader` class retries indefinitely with exponential backoff for PUT requests to `/worker`. The backoff is clamped with a base delay and a max delay, and includes random jitter. This behavior is not commonly known and could lead to unexpected network traffic.

### OAuth Token Installation Logic
The function `installOAuthTokens` in `auth.ts` handles OAuth token installation by first performing a logout to clear old state, then attempts to reuse a pre-fetched profile or fetches a new one. If fetching fails, it falls back to token exchange account data.

### Settings Cache Invalidation Triggers
The settings cache is invalidated by specific triggers: settings write, `--add-dir`, plugin initialization, and hooks refresh. This ensures that the cache remains consistent with the current state of the system.

### Leader Permission Bridge for REPL
The 'Leader Permission Bridge' allows the REPL to register functions for tool use confirmation and permission context setting, making them accessible from non-React code in the in-process runner. This is not documented publicly.

### Teammate Color Assignments
Teammates are assigned colors in a round-robin fashion from a predefined palette (`AGENT_COLORS`). This is used for colored output and pane identification, which is not detailed in public resources.

### Swarm Permission Sync Uses Mailbox System
The permission synchronization for agent swarms uses a mailbox system where worker agents send permission requests to a leader's mailbox, and leaders send responses back. This differs from typical direct communication methods.

### Legacy Agent Tool Name Handling
The function `sdkCompatToolName` translates 'Agent' to 'Task' for backward compatibility, indicating legacy support that is not publicly documented.

### Global vs. Repo-Specific Plugin States
The `installed_plugins.json` file tracks global plugin installations, while the enabled/disabled state is managed per-repository in `.claude/settings.json`. This separation allows different projects to have different active plugins.

### Hot Reload Subscription for Plugin Hooks
The `loadPluginHooks` function memoizes the setup of a hot reload subscription to track changes in plugin settings. This behavior is not publicly documented and suggests a dynamic plugin management system.

### Marketplace Diff Comparison Logic
The `diffMarketplaces` function compares declared settings against materialized JSON states, resolving relative paths using `.git` for canonicalization. It categorizes marketplaces into missing, sourceChanged, and upToDate.

### Valid Agent Memory Scopes
The valid memory scopes for agents are restricted to 'user', 'project', and 'local'. This limits how memory can be scoped within Claude's agent system.

### Walking Plugin Markdown Files
The `walkPluginMarkdown` function is used to traverse markdown files within plugins, applying a callback function to each file. This is crucial for loading agent definitions and commands.

### PowerShell Tool Gated by User Type
The PowerShell tool is enabled by default only for internal users ('ant') and is gated by the environment variable 'CLAUDE_CODE_USE_POWERSHELL_TOOL'. For external users, it defaults to off unless explicitly opted in.

### Default Shell is Always Bash
The default shell for input-box commands is set to 'bash' across all platforms, including Windows. This decision avoids breaking existing Windows users who rely on bash hooks.

### Undocumented Chrome Tools List
The code lists hidden Chrome tools like 'gif_creator' and 'upload_image' that aren't mentioned in public documentation.

### Auto Mode Gate Check for Permission Cycling
The `canCycleToAuto` function checks both cached and live gate states for auto mode, preventing crashes during permission mode transitions. This dual check is crucial for stability when settings change mid-session.

### TRANSCRIPT_CLASSIFIER Feature Flag
The presence of the 'TRANSCRIPT_CLASSIFIER' feature flag indicates conditional loading of the 'autoModeState.js' module, suggesting a feature that might be selectively enabled.

### Conditional Tool: TERMINAL_CAPTURE_TOOL_NAME
The 'TERMINAL_CAPTURE_TOOL_NAME' is conditionally included based on the 'TERMINAL_PANEL' feature flag, indicating it is an internal-only tool.

### Legacy Tool Name Aliases
The code maintains a mapping of legacy tool names to current canonical names, indicating ongoing transitions and backward compatibility considerations.

### EXPLAIN_COMMAND_TOOL for Shell Command Analysis
The EXPLAIN_COMMAND_TOOL is a feature that provides structured explanations of shell commands, including their purpose and potential risks. This tool does not require beta access, indicating it might be used internally or in specific environments.

### Bun-Internal ARGV0 Dispatch Trick
The code uses a bun-internal ARGV0 dispatch trick where the bun binary checks its argv[0] and runs the embedded tool (rg, bfs, ugrep) that matches. This is a non-standard way to invoke binaries, which might not be documented publicly.

### App Enumeration Timeout Set to 1000ms
The app enumeration process has a timeout set to 1000ms, which means if Spotlight or Claude-swift is slow, the tool description omits the app list. This could lead to incomplete data being provided to the model.

### Secret Feature Flag: CHICAGO_MCP
The 'CHICAGO_MCP' feature flag is used to gate dynamic imports and functionality related to the 'chicago MCP surface'. This flag controls app visibility and cleanup processes during tool execution and streaming aborts.

### Frozen Coordinate Mode on First Read
The coordinate mode for the 'chicago MCP' is frozen on its first read, meaning any changes in configuration mid-session will not affect its value. This ensures consistency in tool descriptions and coordinate scaling.

### MCP Rendering Overrides for Tools
The 'getComputerUseMCPRenderingOverrides' function provides rendering overrides for specific tools, ensuring consistent user-facing names and messages. This customization is not publicly documented.

### Undocumented Post-Sampling Hooks
Post-sampling hooks are registered and executed internally after model sampling, but are not exposed in the settings.json config. This feature allows for additional processing post-sampling.

### Dynamic Watch Paths in FileChangedWatcher
The FileChangedWatcher dynamically updates its watch paths based on hook outputs. This is not documented publicly, suggesting a more adaptive system than expected.

### Agent Hook Execution with UUIDs
Agent hooks are executed with a unique tool use ID generated via UUIDs if not provided. This ensures each hook execution is uniquely identifiable.

### Caching Hook Event Metadata
Hook event metadata is cached using a memoization strategy keyed by sorted-joined tool names. This reduces redundant computations.

### Skill Improvement Hook Turn Batch Size
The skill improvement hook only triggers every 5 user messages, as defined by the constant TURN_BATCH_SIZE. This batching could impact the responsiveness of skill improvement analysis.

### Async Hook Default Timeout
Async hooks have a default timeout of 15 seconds unless specified otherwise. This could lead to premature termination of long-running processes.

### SubagentStop Hook Conversion for Agents
In the `registerFrontmatterHooks` function, when registering hooks for agents, 'Stop' hooks are automatically converted to 'SubagentStop'. This is because subagents trigger 'SubagentStop' instead of 'Stop'.

### Session Hooks Use Map for Efficiency
Session hooks are stored in a Map instead of a Record to optimize performance under high-concurrency workflows. This design choice avoids unnecessary copying and listener notifications, making operations like `addFunctionHook` more efficient.

### Optional Tool Usage in API Query Hooks
In `createApiQueryHook`, the `useTools` option defaults to true, meaning tools from the context are used unless explicitly set to false. This can affect the behavior of the API query if tools are not intended to be used.

### SSRF Guard Bypass with Proxies
The SSRF guard for HTTP hooks is bypassed when a global proxy or the sandbox network proxy is in use, as the proxy performs DNS resolution. This means the guard does not prevent requests to blocked IP ranges if a proxy is configured.

### Managed Hooks Only Policy
The system can enforce a policy where only managed hooks are allowed to run. This is controlled by the 'allowManagedHooksOnly' setting in policySettings, which restricts execution to managed hooks even if non-managed settings attempt to disable them.

### Behavior of Disable All Hooks Setting
The 'disableAllHooks' setting in policySettings disables all hooks, but if set in non-managed settings, only managed hooks continue to run. This ensures that non-managed settings cannot override managed hooks.

### Always Emitted Hook Events Bypass Flag
The hook event system has a set of events, 'SessionStart' and 'Setup', that are always emitted regardless of the 'includeHookEvents' option. This is a backward compatibility feature that bypasses the usual event filtering mechanism.

### Pending Hook Events Limit Set to 100
The hook event system has a limit of 100 pending events. If the limit is exceeded, the oldest events are discarded. This could lead to loss of event data if the handler is not registered in time.

### Dynamic Sandbox Proxy Configuration
The sandbox proxy configuration is dynamically imported to avoid static import cycles, indicating a complex dependency management strategy within Claude's architecture.

### Polling and Display Intervals for Tasks
Tasks are polled every 1000ms, stopped tasks are displayed for 3000ms, and terminal local_agent tasks have a 30,000ms grace period in the coordinator panel.

### Subagent Models Inherit Region Prefix
Subagent models inherit the region prefix from their parent model in Bedrock, ensuring consistent cross-region inference profiles. This behavior is crucial for maintaining IAM permission scopes.

### Slack Search Tool Timeout Setting
The Slack search tool has a hardcoded timeout of 5000 milliseconds (5 seconds) for fetching channel data. This could lead to incomplete results if the Slack API is slow.

### TMUX Color Mapping for Agents
The code maps agent colors to TMUX's built-in color names, including non-standard colors like 'colour208' for orange and 'colour205' for pink.

### In-Process Teammate Architecture Details
The InProcessBackend allows teammates to run in the same Node.js process using AsyncLocalStorage, sharing resources like API clients and MCP connections. They communicate via a file-based mailbox and are terminated using AbortController.

### TaskGetTool Uses Deferred Execution
The TaskGetTool is designed to defer its execution as indicated by the 'shouldDefer' property set to true. This is not commonly documented in public resources, suggesting a potential optimization or scheduling strategy.

### TaskGetTool's Max Result Size Limit
The TaskGetTool has a maximum result size limit of 100,000 characters, which is a specific design decision not commonly highlighted in public documentation. This limit could impact the retrieval of large task descriptions.

### NotebookEditTool Supports Multiple Edit Modes
The NotebookEditTool supports 'replace', 'insert', and 'delete' modes for editing Jupyter notebook cells. This flexibility is not emphasized in typical user-facing documentation, indicating a robust feature set.

### NotebookEditTool Requires Absolute Paths
The NotebookEditTool mandates the use of absolute paths for notebook files, which is a strict requirement that might not be apparent to users accustomed to relative paths.

### NotebookEditTool Verbose Mode Behavior
The NotebookEditTool has a verbose mode that reveals additional details like content snippets and cell types when editing notebooks. This is not publicly documented.

### AskUserQuestionTool Preview Feature
The AskUserQuestionTool supports a 'preview' feature for options, allowing visual comparisons through markdown or HTML. This feature is restricted to single-select questions.

### AskUserQuestionTool Chip Width Limit
The AskUserQuestionTool limits the header label displayed as a chip/tag to 12 characters, which could impact UI design.

### ExitPlanModeTool's Hidden Approval Mechanism
The ExitPlanModeTool is designed to signal the completion of a planning phase and readiness for user approval without taking plan content as a parameter. It reads the plan from a file and inherently requests user approval, differing from public documentation that may suggest manual approval steps.

### Preapproved Hosts for WebFetch Tool
The WebFetch tool has a list of preapproved hosts that it can access without explicit user permission. These include domains like 'platform.claude.com', 'github.com/anthropics', and various documentation sites for programming languages and frameworks. This list is specifically for GET requests to mitigate security risks.

### WebFetch Tool's Self-Cleaning Cache
The WebFetch tool includes a self-cleaning 15-minute cache to speed up repeated access to the same URL. This is not mentioned in public documentation, providing a performance boost for frequent queries.

### WebFetch Tool Result Size Limit
The WebFetch tool has a result persistence threshold of 100,000 characters. This limit is crucial for understanding how much data can be processed and stored by the tool.

### WebFetch Tool Redirect Handling
When a URL redirects to a different host, the WebFetch tool informs the user and provides the redirect URL in a special format, requiring a new fetch request. This behavior is not commonly documented.

### WebFetch Cache Limits and TTL
The WebFetch tool uses an LRUCache with a 15-minute TTL and a 50MB size limit for storing fetched URL content. This is shorter than typical cache durations, indicating a focus on freshness over storage efficiency.

### MCP Tool Result Size Limit
The MCPTool has a maximum result size limit of 100,000 characters, indicating a substantial capacity for output data, which may impact performance or memory usage.

### MCP Tool Classification for UI Collapsing
The MCP tool uses explicit per-tool allowlists to classify operations as search or read for UI collapsing. Unknown tool names default to not collapsing, which is a conservative approach. This behavior is not publicly documented.

### MCP Output Warning Threshold
The MCP tool has a specific threshold of 10,000 tokens for displaying warnings about large responses. This threshold is not mentioned in public documentation.

### MCP Rich Output Feature Flag
The MCP tool uses a feature flag 'MCP_RICH_OUTPUT' to determine whether to truncate input values for non-verbose mode. This feature flag is not publicly documented.

### Max JSON Parse Characters Limit
The MCP tool has a limit of 200,000 characters for parsing JSON blobs to ensure performance safety. This limit is not publicly documented.

### File Write Tool Restrictions and Preferences
The File Write Tool has specific restrictions: it must read existing files before writing, should not create documentation files unless explicitly requested, and should avoid using emojis unless asked. It also prefers using the Edit tool for modifications.

### MCP Auth Tool Initiates OAuth Flow
The MCP Auth Tool is a pseudo-tool that initiates an OAuth flow for unauthenticated MCP servers. It provides an authorization URL for the user and automatically swaps in the server's real tools upon completion.

### Task Update Tool's Permanent Deletion Feature
The Task Update Tool allows for tasks to be permanently deleted by setting their status to 'deleted'. This action is irreversible and removes the task from the list entirely.

### TaskUpdateTool Supports 'Deleted' Status
The TaskUpdateTool includes a hidden feature allowing tasks to be marked as 'deleted', which is not documented publicly. This is part of the TaskUpdateStatusSchema.

### WebSearchTool Limits to 8 Searches
The WebSearchTool is hardcoded to allow a maximum of 8 searches per session. This limit is not mentioned in public documentation.

### WebSearchTool Restricted to US
The WebSearchTool is only available for use within the United States, a restriction not commonly known.

### TOOL_SUMMARY_MAX_LENGTH Constant
The tool summary is truncated to a maximum length defined by the constant TOOL_SUMMARY_MAX_LENGTH, affecting how much information is displayed.

### Enter Plan Mode Tool Result Size Limit
The Enter Plan Mode tool has a maximum result size of 100,000 characters, which could limit the amount of information returned in complex scenarios.

### Secret 'Plan Mode' in EnterPlanModeTool
The EnterPlanModeTool component has a secret 'Plan Mode' feature that is not publicly documented. When activated, it changes the interface to indicate Claude is 'exploring and designing an implementation approach.' This mode is visually represented by a black circle and specific text styling.

### Internal TeamCreateTool Workflow Details
The TeamCreateTool has a detailed internal workflow for managing multi-agent teams, which includes creating teams, assigning tasks, and handling idle teammates. It emphasizes patience with idle teammates and provides a structured shutdown process, which is not typically highlighted in public-facing documentation.

### Unique Team Name Generation Logic
The TeamCreateTool uses a unique team name generation logic that checks for existing team names and generates a new word slug if a conflict is found. This ensures no two teams have the same name, which could prevent potential conflicts in team management.

### REPL Mode Defaults for Ants
REPL mode is default-on for 'ant' user type in the CLI, but not for SDK entrypoints. This affects tool visibility and usage.

### TaskCreateTool Result Size Limit
The TaskCreateTool has a maximum result size of 100,000 characters, which could limit the amount of data processed in a single task.

### REPL-Only Tools List
Certain tools like FILE_READ and BASH are only accessible via REPL when REPL mode is enabled, restricting direct use by Claude.

### Hidden REPL Primitive Tools
The REPL mode hides certain primitive tools from direct model use, but they remain accessible within the REPL VM context. These tools include FileReadTool, FileWriteTool, FileEditTool, GlobTool, GrepTool, BashTool, NotebookEditTool, and AgentTool.

### Teammate Spawn Module for AgentTool
A shared spawn module is used for creating teammates, extracted from TeammateTool for reuse by AgentTool. This indicates a modular approach to teammate management within Claude.

### Cross-Session Messaging via Bridge
The 'SendMessageTool' supports cross-session messaging using 'bridge:<session-id>' syntax. This allows communication with remote peers across machines, facilitated by the 'ListPeers' command to discover targets.

### Legacy Protocol Responses for Shutdown
The tool includes legacy protocol responses for shutdown requests, requiring a 'shutdown_response' message with 'approve' true/false. Approving a shutdown terminates the process, while rejecting a plan sends it back for revision.

### KAIROS Cron Scheduling System
The KAIROS cron scheduling system uses a unified gate combining a build-time 'AGENT_TRIGGERS' flag and a runtime 'tengu_kairos_cron' GrowthBook gate with a 5-minute refresh window. This allows independent shipping of cron features from KAIROS.

### TaskStopTool Alias for Backward Compatibility
The TaskStopTool maintains an alias 'KillShell' for backward compatibility, indicating legacy support for older tool names in transcripts and SDKs.

### User Type Conditional Naming
The TaskStopTool's user-facing name changes based on the USER_TYPE environment variable, showing different names for different user types, such as 'ant'.

### Command Truncation in TaskStopTool
The TaskStopTool UI truncates commands to a maximum of 2 lines or 160 characters. This behavior is not publicly documented and could lead to unexpected command display issues.

### TestingPermissionTool Secret Flag
The TestingPermissionTool is only enabled when the environment is set to 'test', which is not mentioned in public documentation. This tool always asks for permission before executing.

### Concurrency Safety in ReadMcpResourceTool
The ReadMcpResourceTool is marked as concurrency safe, allowing multiple instances to run simultaneously without conflict. This is a critical design choice for performance.

### Error Handling in ReadMcpResourceTool
The ReadMcpResourceTool has specific error messages for server connectivity and capability issues, which are not detailed in public documentation.

### Agent Memory Scope Details
The agent memory is scoped into 'user', 'project', and 'local', with specific directory structures. The 'local' scope can persist to a remote mount if 'CLAUDE_CODE_REMOTE_MEMORY_DIR' is set.

### Security in Agent Memory Path
The 'isAgentMemoryPath' function normalizes paths to prevent path traversal attacks, ensuring security within agent memory directories.

### Local Agent Task Functions
Functions like 'completeAgentTask', 'failAgentTask', and 'updateAgentProgress' manage local agent tasks, indicating a robust task management system.

### Hidden Feature Flag: Tengu Agent List Attach
The feature flag 'tengu_agent_list_attach' controls whether the agent list is injected as an attachment message instead of being embedded in the tool description. This flag can override default behavior with the environment variable 'CLAUDE_CODE_AGENT_LIST_IN_MESSAGES'.

### Surprising Agent Snapshot Directory Structure
Agent memory snapshots are stored in a directory structure based on the current working directory, specifically under '.claude/agent-memory-snapshots/<agentType>/'. This structure may not be immediately obvious to developers.

### Agent Source Priority Overrides
Agents can be overridden based on their source priority. The order of priority is defined as: userSettings, projectSettings, localSettings, policySettings, plugin, flagSettings, and built-in. This hierarchy determines which agents take precedence when duplicates exist.

### Internal Snapshot Sync Metadata
Claude uses a '.snapshot-synced.json' file to track metadata about when an agent's memory snapshot was last synced. This internal mechanism helps manage snapshot synchronization without explicit developer intervention.

### Coordinator Mode for Agent Management
Claude has an internal 'COORDINATOR_MODE' feature that, when enabled, allows the system to manage agents through a coordinator module. This mode is controlled by the environment variable 'CLAUDE_CODE_COORDINATOR_MODE'.

### Disabling Built-in Agents in Noninteractive Mode
In noninteractive sessions, all built-in agents can be disabled using the environment variable 'CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS'. This is useful for SDK users who want a clean slate.

### Agent Memory Snapshot Feature
The code includes functionality for managing agent memory snapshots, allowing agents to initialize from previous states. This is not a publicly documented feature.

### One-shot Built-in Agent Types
The system includes 'Explore' and 'Plan' as one-shot built-in agent types that run once and return a report without sending messages back to continue. This saves approximately 135 characters per run, optimizing token usage.

### Agent Color Management for Subagents
Agent colors are specifically managed for subagents, with a predefined set of colors like 'red', 'blue', and 'green'. These colors are mapped to theme colors for subagents only, indicating a specialized UI treatment.

### MCP Tools Allowed for All Agents
The function `filterToolsForAgent` allows tools with names starting with 'mcp__' for all agents, regardless of other conditions. This behavior is not documented publicly.

### TeamDelete Tool for Internal Resource Cleanup
The TeamDeleteTool is designed to remove team and task directories once swarm work is complete. It checks for active members and fails if any are still active, a detail not publicly documented.

### TeamDeleteTool Suppresses Cleanup Result Messages
The TeamDeleteTool UI component suppresses cleanup result messages by returning null if the result contains 'success', 'team_name', and 'message'. This behavior is not documented publicly.

### TaskOutputTool Timeout Limit Set to 10 Minutes
The TaskOutputTool has a timeout limit set to a maximum of 600,000 milliseconds (10 minutes), with a default of 30,000 milliseconds (30 seconds). This specific timeout configuration is not commonly known.

### ListMcpResourcesTool Uses LRU Cache for Resource Fetching
The ListMcpResourcesTool utilizes an LRU cache for fetching resources from MCP servers, which is warmed up during startup and invalidated on specific events. This caching strategy is not publicly documented.

### Hidden Feature Flag: tengu_hive_evidence
The code contains a hidden feature flag 'tengu_hive_evidence' that is used to determine if a verification nudge is needed when closing out a todo list. This flag is checked in conjunction with the 'VERIFICATION_AGENT' feature.

### TodoWriteTool Max Result Size Limit
The TodoWriteTool has a maximum result size limit of 100,000 characters. This limit could impact users with extensive todo lists or detailed task descriptions.

### Feature Gate: Todo V2
The TodoWriteTool checks if a feature called 'Todo V2' is enabled. If not, the tool is enabled for use. This suggests a phased rollout or testing of a new version of the todo functionality.

### Tengu Glacier 2xr Feature Flag
The 'tengu_glacier_2xr' feature flag is used to determine how deferred tools are announced. If enabled, tools appear in <system-reminder> messages; otherwise, they appear in <available-deferred-tools> messages.

### Tool Search Default Results Limit
The default maximum number of results returned by the tool search is set to 5, as specified in the input schema.

### Deferred Tools Cache Key Logic
The cache key for deferred tools is generated by sorting and joining tool names, which is used to detect changes and invalidate the cache.

### Exit Worktree Tool No-Op Behavior
The Exit Worktree Tool will perform no operation if called outside an EnterWorktree session, ensuring no unintended changes to the filesystem.

### ExitWorktreeTool Uses Fail-Closed Logic
The ExitWorktreeTool uses a fail-closed logic where it returns null if the state cannot be reliably determined. This ensures that cleanupWorktree does not inadvertently destroy real work. It returns null when git status or rev-list exit non-zero, or when originalHeadCommit is undefined but git status succeeded.

### FileEditTool Adjusts Line Prefix Based on Environment
The FileEditTool adjusts its line number prefix format based on the environment variable USER_TYPE. If USER_TYPE is 'ant', it uses 'line number + tab', otherwise it uses 'spaces + line number + arrow'. This affects how users must format their edits.

### V8/Bun String Length Limit in FileEditTool
The FileEditTool has a string length limit tied to V8/Bun's limit of ~2^30 characters (~1 billion). This means files larger than 1 GiB in ASCII/Latin-1 encoding may not be handled correctly.

### Special Claude Folder Permission Patterns
The FileEditTool defines specific permission patterns for accessing the .claude/ folder both locally and globally, suggesting special handling or storage of data in these directories.

### PowerShell CLM Restrictions Inverted
The PowerShellTool inverts Microsoft's CLM restrictions by asking about types not in an allowlist, instead of enumerating dangerous types. This is a surprising approach to handling security in PowerShell scripts.

### PowerShell Tool Sandboxing Decision
The PowerShell tool uses a function shouldUseSandbox to determine if sandboxing should be applied. This indicates a conditional approach to security, potentially based on environment or command context.

### Git Safety: Bare Repo Attack Vector
The code identifies a potential sandbox escape via a 'bare-repo attack' where Git treats a directory as a bare repository if it contains HEAD, objects/, and refs/ but lacks a valid .git/HEAD, allowing malicious hooks to run.

### PowerShell Command Semantics for Exit Codes
PowerShellTool interprets non-zero exit codes from external executables as errors, but some commands like robocopy.exe use non-zero codes for success, requiring specific semantics to avoid false errors.

### Skill Tool Context Budgeting
Skill tool listings are limited to 1% of the context window, with a default character budget of 8,000 characters. This is calculated as 1% of 200,000 tokens, assuming 4 characters per token.

### Skill Tool Description Character Limit
Skill tool descriptions have a hard cap of 250 characters to prevent verbose entries from wasting cache creation tokens.

### Enter Worktree Tool Behavior
The Enter Worktree Tool creates a git worktree only when explicitly asked by the user. It creates a new git worktree in `.claude/worktrees/` and switches the session to it.

### Legacy Command Detection in Tools
The system detects if a command originates from the deprecated /commands folder, adjusting the display name accordingly.

### EnterWorktreeTool Max Result Size Limit
The EnterWorktreeTool has a maximum result size limit of 100,000 characters, which could truncate output unexpectedly if the result is too large.

### GlobTool Result Truncation at 100 Files
The GlobTool truncates results to a maximum of 100 files, which may lead to incomplete file searches if more matches exist.

### EnterWorktreeTool Deferred Execution
The EnterWorktreeTool is designed to defer execution, which means it might not run immediately when invoked, potentially affecting workflow timing.

### GlobTool Reuses GrepTool's Render Function
The GlobTool in the Claude Codebase reuses the renderToolResultMessage function from the GrepTool, indicating a shared functionality or output format between these tools.

### GrepTool Usage Restrictions
The GrepTool is designed to always be used for search tasks, explicitly advising against invoking 'grep' or 'rg' as a Bash command. This restriction ensures correct permissions and access.

### ConfigTool Max Result Size Limit
The ConfigTool has a maximum result size limit of 100,000 characters, which could truncate large configuration outputs unexpectedly.

### ConfigTool Concurrency Safety
The ConfigTool is designed to be concurrency safe, allowing multiple operations to be performed simultaneously without conflicts.

### ConfigTool Deferred Execution
The ConfigTool defers execution of certain operations, potentially affecting real-time configuration changes.

### LSP Tool File Size Limit
The LSP Tool has a maximum file size limit of 10,000,000 bytes (approximately 10 MB). This limit is not publicly documented and could impact performance when dealing with large files.

### Hidden Feature Flag for Remote Triggers
The RemoteTriggerTool is gated by a feature flag 'tengu_surreal_dali', which must be enabled alongside a policy 'allow_remote_sessions' for the tool to be active. This suggests a controlled rollout of the feature.

### Remote Triggers Beta Expiry Date
The RemoteTriggerTool includes a feature flag 'ccr-triggers-2026-01-30', indicating a beta feature with an expiry or review date set for January 30, 2026. This suggests a planned evaluation or transition phase.

### TaskListTool Filters Internal Tasks
The TaskListTool explicitly filters out tasks with '_internal' metadata, ensuring only user-relevant tasks are listed. This behavior is not publicly documented.

### SyntheticOutputTool for Non-Interactive Sessions
The SyntheticOutputTool is designed for non-interactive sessions, providing structured output only when 'isNonInteractiveSession' is true. This tool is not meant for interactive use, highlighting a focus on automation.

### RemoteTriggerTool UI Line Count
The RemoteTriggerTool UI calculates the number of lines in a JSON response by counting newline characters and adding one. This is used to display the number of lines in the HTTP response message.

### PDF Reading Limitations in FileReadTool
The FileReadTool can read PDF files, but for PDFs larger than 10 pages, it requires a 'pages' parameter to specify the range. The maximum is 20 pages per request, and reading without specifying pages will fail.

### File Read Tool Limit Mismatch
The 'maxSizeBytes' limit in the File Read Tool checks the total file size, not the output slice, leading to potential mismatches. This was tested with truncation but reverted due to increased error rates.

### KAIROS_BRIEF Entitlement Check Logic
The entitlement check for using the Brief tool is based on build-time flags combined with runtime gates, specifically KAIROS or KAIROS_BRIEF. This ensures that the Brief tool can be bundled with KAIROS or shipped independently.

### BriefTool Upload Timeout Configuration
The BriefTool upload function has a hardcoded timeout of 30,000 milliseconds (30 seconds). This could impact users with slower network connections as uploads will fail if they take longer than this duration.

### BriefTool Maximum Upload Size Limit
The maximum upload size for BriefTool attachments is limited to 30 MB. This limit matches the private API backend and could restrict users from uploading larger files.

### Custom Exit Code Semantics for Commands
The BashTool defines custom semantics for interpreting exit codes of specific commands like 'grep', 'find', and 'diff'. For example, 'grep' treats exit code 1 as 'No matches found', which is not considered an error.

### Kairos State Check in BashTool
The BashTool component includes a function 'getKairosActive' to check the state of a feature or service named 'Kairos'. This indicates the presence of a feature or service that is not publicly documented.

### Sandbox Violation Extraction in BashTool
The BashToolResultMessage component includes a function to extract sandbox violations from stderr using a specific pattern. This function removes any content wrapped in <sandbox_violations> tags, which is not publicly documented.

### Shell CWD Reset Warning Extraction
The BashToolResultMessage component extracts 'Shell cwd was reset' warnings from stderr using a regex pattern. This behavior is not documented in public-facing materials.

### Dangerous Path Check in BashTool
The BashTool includes a function `checkDangerousRemovalPaths` that flags 'rm' or 'rmdir' commands targeting critical system directories, requiring explicit user approval. This check is performed without resolving symlinks to catch paths like '/tmp', which may be symlinks on some systems.

### Background Task Shortcut in BashTool UI
The BashTool UI component has a feature where pressing 'ctrl+b' backgrounds all running foreground commands. If the terminal is 'tmux', the shortcut changes to 'ctrl+b ctrl+b'. This feature is disabled if the environment variable 'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS' is set.

### StatusLine Agent Converts PS1 with Specific Regex
The StatusLine agent uses a specific regex pattern to extract the PS1 value from shell configuration files, which is not publicly documented. The pattern is /(?:^|\n)\s*(?:export\s+)?PS1\s*=\s*['"]([^'"]+)['"]/m.

### General Purpose Agent's Strict Guidelines
The General Purpose Agent has strict guidelines against creating new files or documentation unless explicitly requested, which is not commonly known.

### Plan Agent's Read-Only Mode Restrictions
The Plan Agent operates in a strict read-only mode, prohibiting any file modifications or system state changes, which is a surprising operational constraint.

### Tengu Tools Aliasing in Claude Code
The Claude Code Guide Agent uses aliasing for tools like 'find' and 'grep' to embedded versions 'bfs' and 'ugrep' in certain builds, replacing the dedicated Glob/Grep tools. This behavior is not publicly documented.

### Strict Restrictions for Verification Agent
The Verification Agent is strictly prohibited from modifying the project in any way, including creating, modifying, or deleting files, and running git write operations. This ensures the integrity of the project during verification.

### Explore Agent's Read-Only Mode
The Explore Agent operates in a strict read-only mode, prohibiting any file modifications, creations, or deletions. This ensures it only analyzes existing code without altering the system state.

### Hidden 'Ultraplan' Feature Flag
The code references a hidden feature flag 'ULTRAPLAN_TAG' and an associated 'isUltraplan' boolean in the RemoteAgentTaskState. This suggests there is an undisclosed feature or mode called 'Ultraplan' that affects task behavior.

### Undocumented Remote Review Progress Stages
The RemoteAgentTaskState includes a 'reviewProgress' object with stages 'finding', 'verifying', and 'synthesizing'. These stages are not documented publicly, indicating a structured process for remote reviews that isn't widely known.

### Teammate Identity Persistence Mechanism
InProcessTeammateTaskState stores teammate identity as plain data for AppState persistence, differing from the runtime TeammateContext which uses AsyncLocalStorage. This dual mechanism suggests a complex identity management system.

### DreamTask Phase Handling Lacks Detection
The DreamTask does not parse its 4-stage structure (orient/gather/consolidate/prune) for phase detection. It simply flips from 'starting' to 'updating' when the first Edit/Write tool_use lands.

### LocalShellTask Backward Compatibility Quirk
The 'LocalShellTaskState' type maintains a 'type' property set to 'local_bash' for backward compatibility with persisted session state, even though the actual task type might have evolved.

### Panel Grace Timeout in Task Framework
The task framework includes a specific timeout value, 'PANEL_GRACE_MS', which is used to manage task state updates, though its exact value is not disclosed.

### Limit on Recent Activities in Progress Tracker
The 'ProgressTracker' type in the LocalAgentTask module limits recent activities to a maximum of 5, which may affect how progress is tracked and reported.

### Sticky Scroll State in ScrollBox
ScrollBox maintains a stable 'sticky' scroll state that doesn't rely on layout values. The `isSticky` method indicates if the scroll is pinned to the bottom, set by `scrollToBottom` and cleared by `scrollTo/scrollBy`, providing a reliable signal for 'at bottom' status.

### Button Active State Timer
The Button component uses a timer to manage its active state. When activated via keypress or click, the active state is set and a timer is initiated to clear it after 100ms, ensuring the active state is temporary.

### Synchronized Animation Clock with Pause Feature
The `useAnimationFrame` hook uses a shared clock for animations, pausing updates when offscreen. The clock only runs when there is at least one active subscriber, and animations automatically slow when the terminal is blurred. This behavior is not typically documented in public resources.

### OSC 21337 Tab Status Indicator
The `useTabStatus` hook sets a tab-status indicator using OSC 21337, emitting a colored dot and status text in the terminal's tab sidebar. This feature is wrapped for tmux/screen passthrough and is not widely documented.

### Fullscreen Text Selection Operations in Ink
The `useSelection` hook provides comprehensive text selection operations for Ink instances in fullscreen mode. It includes functions for copying, clearing, and shifting selections, which are no-ops when fullscreen is disabled.

### Raw Mode Synchronously Enabled in useInput
The useInput hook enables raw mode synchronously during React's commit phase using useLayoutEffect. This prevents keystrokes from echoing and the cursor from being visible until the effect fires, which would happen if useEffect was used instead.

### Stable Listener for Input Event Ordering
The useInput hook registers its listener once on mount to maintain its position in the EventEmitter's listener array. This prevents breaking stopImmediatePropagation() ordering when isActive toggles.

### Conditional Cursor Declaration in useDeclaredCursor
The useDeclaredCursor hook conditionally clears the cursor declaration only if the current node is the one that declared it. This prevents clobbering by inactive instances or sibling handoffs.

### Stable Viewport Entry in useTerminalViewport
The useTerminalViewport hook updates the viewport entry during the layout phase without triggering re-renders. This ensures callers read fresh values without causing infinite update loops.

### Shared Clock for Interval Management
Instead of using individual setInterval calls, the code uses a shared ClockContext to manage intervals. This consolidates all timers into one wake-up, which is more efficient. The useInterval hook allows passing null to pause the interval.

### Terminal Title Management via OSC
The useTerminalTitle hook sets terminal titles using OSC 0 escape sequences on non-Windows platforms, while Windows uses process.title. This ensures compatibility across different operating systems.

### Search Highlight on Rendered Text
The useSearchHighlight hook highlights text based on the rendered output, not the source text. This means only visible occurrences are highlighted, which may differ from the source due to truncation or ellipsization.

### MCP Server for Code Exploration
The MCP Server is an internal tool for exploring the leaked Claude Code source. It supports development and analysis but is not intended for public modification of the original source.

### Surprising Bridge System Architecture
Claude Code includes a 'bridge' system for bidirectional IDE communication, which is not commonly found in CLI tools. This allows for seamless integration with IDEs like VS Code and JetBrains.

### React + Ink: Terminal UI Built Like a Web App
Claude Code's terminal UI is built using React and Ink, making it a fully reactive CLI application. This approach mirrors web app development, allowing for components, hooks, and state management in a terminal environment.

### Tool Factory Pattern: buildTool() Function
Claude Code uses a 'buildTool()' factory pattern for defining tools, which standardizes the creation of tools with input schema, permissions, and execution logic. This pattern is not documented publicly, suggesting a sophisticated internal design choice.

### CLI Requires Node.js 20+
The Claude Code CLI requires Node.js version 20 or higher, which is a higher requirement than many other tools.

### Commands Moved to Plugin System
Certain commands like 'security-review' and 'pr-comments' have been moved to a plugin system, indicating a modular architecture that allows for extending functionality without altering the core system.

### QueryEngine.ts: A 46K Line Behemoth
The `QueryEngine.ts` file, at approximately 46,000 lines, is the most complex single file in the Claude Codebase. It handles core functionalities like API communication, tool execution, and error handling, making it a critical component but also a potential maintenance challenge.

### Bridge Uses JWT for Authentication
The Bridge subsystem uses JWT (JSON Web Tokens) for authentication between the IDE and CLI. This choice allows secure, stateless communication, which is crucial for maintaining session integrity across different environments.

### MCP Server Architecture and Transport
MCP server connections are established via stdio, allowing for efficient inter-process communication. The architecture supports both client and server modes within the CLI.

### Ant-Only Tools: Internal Use Only
Certain tools are gated behind the 'USER_TYPE === ant' condition, indicating they are for Anthropic internal use only. These tools are not accessible to external users, suggesting privileged functionalities.

### Dynamic Import Handling in Tool Registry
The tool registry uses dynamic imports with feature flags and environment checks, which can lead to import resolution issues if not handled correctly. This setup requires careful management of feature flags to ensure tools load properly.

### Secret Agent Platform Command
The 'agentsPlatform' command is conditionally imported based on the 'USER_TYPE' environment variable being set to 'ant'. This suggests a hidden feature or toolset accessible only to specific internal users.

### KAIROS GitHub Webhooks Feature
The 'KAIROS_GITHUB_WEBHOOKS' feature flag enables the 'SubscribePRTool', suggesting integration capabilities with GitHub webhooks that are not publicly documented.

### Secret Feature Flag: MONITOR_TOOL
The 'MONITOR_TOOL' feature flag is used to conditionally include 'MonitorMcpTask'. This suggests internal monitoring capabilities that are not publicly documented.

### MAX_VIM_COUNT Limit in Vim State Transitions
The source code defines a constant MAX_VIM_COUNT which limits the number of times a command can be repeated in Vim mode. This limit is not typically exposed in public documentation.

### Ink Selection State Tracks Scrolled-Off Text
The `SelectionState` in `src/ink/selection.ts` tracks text that has scrolled out of view during drag-to-scroll operations. This is done using `scrolledOffAbove` and `scrolledOffBelow` arrays, ensuring that selections can include text that is no longer visible on the screen.

### Ultraplan Diamond Indicator for Remote Agents
Remote agent tasks have a special 'ultraplan' mode with diamond icons indicating status: open diamond for 'needs_input' and filled for 'plan_ready'.

### DreamTaskState Included as Task Type
The code includes a 'DreamTaskState' as a possible task type, suggesting a feature or mode related to 'dreaming'.

### Forked Agent Context for Commands
Commands can execute in a 'fork' context, running as sub-agents with separate contexts and token budgets. This is not publicly documented.

### Custom Agent Colors and Names
Agents can have custom names and colors, potentially set via commands like /rename or swarm. This customization is not widely advertised.

### Hidden Hook Event Behavior
The `syncHookResponseSchema` includes a hidden behavior where the `continue` field defaults to true, and `suppressOutput` defaults to false, contrary to typical expectations where explicit settings are required.

### Overlay Escape Key Coordination
The overlay system uses a hook `useRegisterOverlay` to manage escape key behavior, ensuring overlays like 'select' don't interfere with request cancellations. This is not documented publicly.

### Internal Voice State Management Details
The voice state management uses a custom hook `useVoiceState` that subscribes to a slice of the state and only re-renders when the selected value changes. This is not documented publicly and provides a more efficient way to manage state changes.

### Keybinding Chord Sequence Handling
The 'useKeybinding' hook supports complex chord sequences (e.g., 'ctrl+k ctrl+s') and manages their pending state automatically. It uses 'stopImmediatePropagation()' to prevent other handlers from firing once a chord is handled.

### Global Pointer for Active REPL Bridge Handle
A global pointer is used to manage the active REPL bridge handle, allowing tools and slash commands outside React trees to invoke handle methods.

### Tool Activity Verbs for Status Display
The Bridge UI maps tool names to human-readable verbs for status display, such as 'Reading' for 'Read' and 'Running' for 'Bash'. This mapping is not publicly documented.

### Bridge Debugging Supports Fault Injection
The Bridge debugging tools include a fault injection mechanism, allowing developers to simulate errors like 'poll 404 not_found_error' and 'ws_closed 1002/1006'. This aids in testing recovery paths.

### Tool Display Expiry Timeout Set to 30 Seconds
Tool activity lines in the bridge UI remain visible for 30 seconds after the last tool_start event. This timeout might affect how users perceive tool activity and responsiveness.

### Shared Bridge Transport Layer
The bridge messaging system uses a shared transport-layer helper that is extracted to be used by both environment-based and environment-less cores. This design choice ensures that all collaborators like transport, sessionId, UUID sets, and callbacks are passed as parameters, maintaining purity without closure over bridge-specific state.

### Query Source for Analytics and Cache Control
The `QuerySource` type identifies the origin of queries for analytics, retry logic, and cache control. It includes specific sources like 'agent:custom' and 'magic_docs', allowing for granular tracking and decision-making.

### Async Agent Tool Restrictions
Async agents are restricted to a specific set of tools, including FILE_READ_TOOL_NAME and WEB_SEARCH_TOOL_NAME, while others like TASK_OUTPUT_TOOL_NAME are disallowed.

### Detailed Token Stats Tracking in Context Analysis
The context analysis function tracks detailed token statistics, including tool requests, results, and duplicate file reads, which are calculated to optimize performance.

### Synchronous Terminal Cleanup
The code performs synchronous terminal cleanup to ensure escape sequences are properly disabled before exit, which is critical for maintaining terminal state integrity.

### Permanent Cron Tasks in Claude Code
Permanent cron tasks in Claude Code are exempt from auto-expiry and are not settable via CronCreateTool. They are only written directly to `scheduled_tasks.json` by `src/assistant/install.ts`.

### Deterministic Agent ID System Constraints
Agent IDs in the swarm/teammate system use `@` as a separator, and agent names must not contain `@`. This constraint is enforced by `sanitizeAgentName()`.

### Hidden Code Indexing Tools in Codebase
The codebase tracks usage of lesser-known code indexing tools like 'seagoat', 'bloop', 'gitloop', and 'windsurf'. These tools are not commonly mentioned in public documentation or discussions.

### Agent Teams Feature Hidden Behind Killswitch
The 'agent teams' feature is hidden behind a killswitch for external users. It requires the 'tengu_amber_flint' GrowthBook gate to be enabled, along with an opt-in via environment variable or CLI flag.

### Session State Change Listeners
The code includes listeners for session state changes, metadata changes, and permission mode changes, suggesting a complex internal state management system that adapts in real-time.

### History Snip Feature Flag
The 'HISTORY_SNIP' feature flag is used to conditionally include the Snip Tool, indicating a feature related to historical data snipping that is not widely known.

### Teammate Mailbox System for Agent Swarms
The 'Teammate Mailbox' is a file-based messaging system for agent swarms, where each agent has an inbox at '.claude/teams/{team_name}/inboxes/{agent_name}.json'. This allows agents to communicate by writing messages to each other's inboxes, which are seen as attachments.

### PR Activity Subscription Tools
The code defines a specific set of tools with suffixes 'subscribe_pr_activity' and 'unsubscribe_pr_activity' that are always allowed in coordinator mode. These tools are lightweight orchestration actions managed directly by the coordinator.

### Unified Cloud Auth Status Manager
The `AwsAuthStatusManager` is a singleton managing cloud-provider authentication status across AWS and GCP, despite its legacy AWS-only name. It communicates auth refresh state between utilities and SDKs.

### Specific Theme Colors for Subagents
The theme configuration includes specific colors designated for subagents only, such as `red_FOR_SUBAGENTS_ONLY` and `blue_FOR_SUBAGENTS_ONLY`. This suggests a specialized visual distinction for subagent processes.

### Session PID File Management
Claude writes a PID file for each session to track and manage active sessions. This includes all top-level sessions except teammates/subagents, which are excluded to avoid noise in session tracking.

### Partial View Flag in FileState
The 'isPartialView' flag in FileState indicates when content was auto-injected but did not match disk content. This means the model saw a partial view, requiring explicit reads for edits.

### Tool Schema Cache Mechanism
The tool schema cache is memoized per session to prevent cache busting due to GrowthBook gate flips or dynamic content changes. This internal caching strategy is not publicly documented.

### Dependency-Free User-Agent String
The `getClaudeCodeUserAgent` function is designed to be dependency-free, allowing it to be used in SDK-bundled code without pulling in transitive dependencies.

### Secret Feature Flag: Tengu Satin Quoll
The feature flag `tengu_satin_quoll` is used to override persistence thresholds for tool results, allowing specific tools to bypass default size limits.

### Agent Context Uses AsyncLocalStorage
The agent context for analytics attribution uses AsyncLocalStorage instead of AppState to prevent context overwriting when multiple agents run concurrently in the same process. This ensures that each async execution chain is isolated.

### AsyncLocalStorage for Workload Context
Claude uses AsyncLocalStorage to manage workload context, ensuring context isolation across asynchronous operations. This choice avoids global mutable states and prevents context leakage, which is not publicly documented.

### Default Agent Theme Color for Subagents
The default theme color for agents, specifically for subagents, is set to 'cyan_FOR_SUBAGENTS_ONLY'. This suggests a specialized handling of subagent theming.

### Bare Mode Skips Plugin Hook Loading
The `processSessionStartHooks` function skips loading plugin hooks entirely when in bare mode, as indicated by the `isBareMode()` check. This behavior is not mentioned in public documentation.

### Managed Hooks Only Skips Plugin Hooks
When `shouldAllowManagedHooksOnly()` returns true, plugin hooks are skipped to avoid executing untrusted external code. This is a security measure not publicly documented.

### Context Suggestions Thresholds and Limits
The code defines specific thresholds for triggering context suggestions, such as a 15% threshold for large tool results and a 5% threshold for read bloat. Additionally, a memory high warning is triggered at 5,000 tokens.

### External Metadata Sync Behavior
The `onChangeAppState` function ensures that any change in `toolPermissionContext.mode` triggers a notification to CCR and the SDK status stream. This sync mechanism prevents stale external metadata and ensures UI and CLI mode consistency.

### Speculation State with Pipelined Flag
The SpeculationState type includes a boolean flag 'isPipelined', indicating a mode of operation that is not publicly documented.

### File Edit Tool Render Limit
The FileEditTool limits rendering to 10 lines of content, which might truncate important information for larger files.

### Claude Chrome Extension Architecture Details
The Claude Chrome extension allows direct browser control, including navigation, form filling, and debugging. It inherits site-level permissions from Chrome, which can be managed through the extension settings.

### Internal Cache in BashModeProgress Component
The BashModeProgress component uses an internal cache to optimize rendering by storing previous input and progress states. This cache is implemented using an array $ with specific indices for different states, allowing the component to avoid unnecessary re-renders.

### ApproveApiKey Uses Switch Statement for Logic
The ApproveApiKey component uses a switch statement within an onChange function to handle 'yes' or 'no' responses for API key approval. This logic updates a global configuration with the user's decision, either approving or rejecting the API key.

### ThinkingToggle Confirmation Logic
The ThinkingToggle component uses a memoized cache to handle confirmation logic when toggling the 'thinking' state during a conversation. It requires user confirmation if the toggle is changed mid-conversation, ensuring that changes are intentional.

### ToolUseLoader uses BLACK_CIRCLE for animation
The ToolUseLoader component uses a constant BLACK_CIRCLE as a placeholder when certain conditions are met, such as when shouldAnimate is false or an error occurs. This behavior is not documented publicly.

### File Edit Tool Updated Message Structure
The FileEditToolUpdatedMessage component calculates the number of additions and removals in a structured patch, but the exact logic and thresholds are not publicly documented.

### OAuth Flow Initial State Logic
The OAuth flow initializes to 'ready_to_start' if mode is 'setup-token' or a forced login method is specified, bypassing 'idle' state.

### Global Installation of Macro Object
The `MACRO_OBJ` containing version and package info is installed globally, which could lead to unexpected global state changes.

### Conditional Loading of Swarm Initialization
Swarm features are initialized only when ENABLE_AGENT_SWARMS is true, allowing for dead code elimination when swarms are disabled. This includes both fresh spawns and resumed sessions.

### File History Initialization Check
File history state initialization only occurs if file history is enabled and hasn't been initialized before. This prevents redundant state restoration.

### Auto-Copy on Selection in Alt-Screen Mode
The `useCopyOnSelect` hook automatically copies text to the clipboard when a user finishes dragging or multi-clicks to select in alt-screen mode. This behavior mirrors iTerm2's feature and is only active in alt-screen mode, where selection state is ink-instance-owned.

### History Reader Leak Prevention
The `useHistorySearch` hook includes a mechanism to prevent file descriptor leaks by explicitly calling `.return()` on the history reader's async generator. This ensures that file handles are properly closed.

### Unicode-Aware Path Token Regex
The `useTypeahead` hook uses a Unicode-aware regex pattern to match file path tokens, accommodating letters, numbers, and combining marks across various scripts.

### Task List Watcher Avoids Bun Deadlock
The `useTaskListWatcher` hook includes a specific workaround to avoid a deadlock issue in Bun's PathWatcherManager (oven-sh/bun#27469). It stabilizes props via refs to prevent the watcher effect from re-running unnecessarily, which would otherwise trigger the deadlock.

### Unified Command Queue Priority Order
The `useQueueProcessor` hook processes commands based on a priority order: 'now' > 'next' (user input) > 'later' (task notifications). This ensures that more urgent commands are handled first.

### Swarm Permission Poller Hidden Behavior
The Swarm Permission Poller Hook uses a polling interval of 500 milliseconds to check for permission responses. This behavior is not publicly documented and could impact performance if many requests are pending.

### SSH Session REPL Integration
The useSSHSession hook is designed to integrate with REPL for 'claude ssh' sessions, distinct from WebSocket-based connections. This separation is due to lifecycle differences, indicating a specific architectural choice.

### Incremental Logging Optimization in useLogMessages
The useLogMessages hook optimizes message logging by tracking the last recorded message length and only logging new messages. This avoids unnecessary iterations, reducing wasted iterations from 120k to a more efficient process.

### Extended Timeout for Compaction in Remote Sessions
The useRemoteSession hook extends the default response timeout from 60 seconds to 180 seconds during compaction. This accounts for the 5-30 second duration of compact API calls, ensuring the session does not timeout prematurely.

### Bridge Failure Dismiss Timeout
The system auto-clears the `replBridgeEnabled` state 10,000 milliseconds after a failure, preventing retries. This is designed to stop repeated failures from causing excessive server load.

### IDE Selection Reset on Client Change
The 'useIdeSelection' hook resets selection data whenever the connected IDE client changes, setting lineCount to 0 and clearing text and filePath.

### Hidden REPL Bridge Feature Flags
The `useMergedTools` function includes two hidden feature flags: `replBridgeEnabled` and `replBridgeOutboundOnly`. These flags are not documented and suggest potential internal features related to REPL bridge capabilities.

### Pending Load Mechanism for History
The `useArrowKeyHistory` hook uses a pending load mechanism to batch concurrent requests into a single disk read. This mechanism ensures efficient history retrieval but is not publicly documented.

### Vim Mode Switching Behavior
The `useVimInput` hook implements Vim-like mode switching with specific behaviors, such as moving the cursor left by 1 when exiting insert mode. This behavior mimics Vim but is not explicitly documented.

### Speculative Classifier Checks in Tool Permissions
The code includes functions `consumeSpeculativeClassifierCheck` and `peekSpeculativeClassifierCheck` related to speculative classifier checks for tool permissions. These are not documented publicly.

### IDE At-Mentioned Notification System
The `useIdeAtMentioned` hook tracks IDE at-mention notifications using a method called 'at_mentioned'. It adjusts line numbers to be 1-based instead of 0-based.

### Exit on Ctrl+C with Keybindings
The `useExitOnCtrlCDWithKeybindings` hook integrates keybindings with exit functionality, allowing for custom exit and interrupt handlers.

### Virtual Scroll Optimizations and Limits
The virtual scroll implementation uses a low default estimate height of 3 rows to avoid blank spaces and an overscan of 80 rows to handle long tool results. It caps mounted items at 300 to manage fiber allocation and limits new items per commit to 25 to control render costs.

### Marketplace Notification Handling on Failure
The `useOfficialMarketplaceNotification` hook logs specific debug messages and shows notifications for marketplace installation failures, including a retry on next startup if the reason is 'unknown'.

### Synchronized Blinking Hook with Focus Check
The `useBlink` hook synchronizes blinking animations across instances using a shared animation clock, pausing when the terminal is blurred. It defaults to a 600ms interval.

### Dynamic Config Test Hang Prevention
The `useDynamicConfig` hook includes a condition to prevent test hangs by bypassing dynamic config fetching when `NODE_ENV` is 'test'.

### Hidden 400 Line Limit for Git Diffs
The useDiffData hook imposes a hidden limit of 400 lines per file for git diffs, truncating larger files. This limit is not publicly documented.

### Mailbox Bridge for Message Submission
The useMailboxBridge hook facilitates message submission through a mailbox system, hinting at an internal messaging infrastructure not publicly documented.

### API Key Verification Status Logic
The useApiKeyVerification hook sets the initial status to 'loading' if an apiKeyHelper is configured, indicating a deferred verification process.

### File State Cache Limitations in MCP Server
The MCP server uses a size-limited LRU cache for file states with a maximum of 100 files and 25MB. This design decision could impact performance under heavy load.

### Secret 'statusline-setup' Subagent Type
The 'statusline' command creates an AGENT_TOOL_NAME with a hidden subagent_type 'statusline-setup'. This is not documented publicly and suggests a specialized internal configuration process.

### Automated Verifier Skill Creation
The 'init-verifiers' command automates the creation of verifier skills for code changes, excluding unit tests and typechecking. It focuses on functional verification for web UI, CLI, and API, using tools like Playwright and Tmux.

### Query Loop Transition Reasons
The query loop can exit or continue for specific reasons such as 'blocking_limit', 'image_error', 'tool_use', and 'reactive_compact_retry'. These reasons are not fully documented publicly.

### Tool Search Beta: Strip Fields Before Token Counting
The code includes a function to strip 'caller' and 'tool_reference' fields from messages before token counting, which are only valid with the tool search beta. This indicates special handling for beta features that are not publicly documented.

### Tengu Internal Logging for Ants
Internal logging uses a feature flag 'tengu_internal_record_permission_context' to log events with Kubernetes namespace and tool permission context, specifically for 'ant' user type.

### Diagnostic Tracking Reset Functionality
The DiagnosticTrackingService includes a reset function that clears all tracked files and diagnostics while keeping the service initialized. This allows for a clean state without reinitializing the service.

### Synthetic AssistantMessage for Remote Permissions
The `createSyntheticAssistantMessage` function creates a fake AssistantMessage for remote permission requests, using a UUID and setting input/output tokens to zero. This is used because the tool runs on a CCR container, not locally.

### Viewer-Only Mode in Remote Sessions
Remote sessions have a 'viewerOnly' mode where Ctrl+C/Escape do not interrupt the remote agent, and a 60s reconnect timeout is disabled. This mode is used by `claude assistant`.

### Surprising Sync Cache State Architecture
The sync cache state for remote-managed settings is split into separate modules to avoid circular dependencies, a design choice that impacts module loading and performance.

### Post-Compact Cleanup Strategy
The post-compact cleanup function selectively resets state based on whether the operation is on the main thread or a subagent. This prevents corruption of shared module-level state.

### Hidden Context Management Strategies
The code reveals two internal context management strategies: 'clear_tool_uses_20250919' and 'clear_thinking_20251015'. These strategies are not publicly documented and seem to be tied to specific dates, possibly indicating planned feature rollouts or internal testing phases.

### Streaming Tool Executor's Concurrency Control
The StreamingToolExecutor class implements concurrency control by allowing concurrent-safe tools to execute in parallel, while non-concurrent tools execute alone. This architecture choice impacts how tools are managed and executed.

### Memory Extraction Agent Tool Restrictions
The memory extraction agent has strict tool usage limitations, such as read-only access to certain tools and a turn budget. These constraints are not publicly detailed.

### Background Plugin Installation Logic Revealed
The system performs background plugin installations using a diff-based approach to update marketplaces. It initializes the app state with 'pending' status for marketplaces, focusing progress updates on marketplace clones rather than individual plugins.

### Session Memory Initialization Criteria
Session memory initialization requires a minimum of 10,000 message tokens, and updates occur every 5,000 tokens or 3 tool calls. These criteria ensure consistent behavior between session memory and autocompact features.

### LSP Manager Initialization State Handling
The LSP server manager's initialization state is tracked with a 'generation counter' to prevent stale promises from updating the state. This counter increments every time the manager is reset for testing, ensuring that only the most recent initialization attempt can affect the state.

### LSP Client Crash Handling Mechanism
The LSP client includes a crash handling mechanism that allows the owner to propagate crash state, enabling the server to be restarted on the next use. This is managed through an optional 'onCrash' callback function.

### MCP Server Name Parsing Quirk
The function `mcpInfoFromString` has a known limitation where it incorrectly parses server names containing double underscores. For example, 'mcp__my__server__tool' is parsed as server='my' and tool='server__tool' instead of server='my__server' and tool='tool'.

### Cache Break Detection Mechanism Details
The cache break detection uses a hash-based system to track changes in system blocks, tool descriptions, and other parameters. It includes specific hashes like 'systemHash', 'toolsHash', and 'cacheControlHash' to detect changes, and uses a random suffix for cache break diff paths.

### Haiku Used for Tool Use Summaries
The Tool Use Summary Generator uses a feature called 'Haiku' to create concise summaries of tool operations. This is not publicly documented and suggests a unique internal tool for summarization.

### Magic Docs Uses Forked Subagent
Magic Docs feature uses a forked subagent to update markdown documentation with new learnings from conversations. This internal mechanism is not detailed in public documentation.

### Strict Rules for Magic Docs Updates
Magic Docs updates follow strict rules: preserve headers, avoid historical notes, and focus on high-level architecture. These guidelines are not publicly known and imply a strong emphasis on concise documentation.

### Datadog Allowed Events List
The code contains a list of allowed Datadog events, including 'tengu_*' and 'chrome_bridge_*', which indicate internal features and states not publicly documented.

### Detecting Stuck Claude Code Sessions
Claude Code includes a detailed process for diagnosing stuck sessions, including checking for high CPU usage, specific process states, and memory leaks. It uses shell commands like 'ps' and 'pgrep'.

### Batch Agent Limits
The batch system in the codebase sets a minimum of 5 and a maximum of 30 agents for parallel work orchestration, indicating constraints on task distribution.

### Secret Claude in Chrome MCP Tools
The Claude in Chrome feature uses a set of secret tools prefixed with 'mcp__claude-in-chrome__'. These tools enable browser automation tasks such as interacting with web pages and capturing screenshots, which are not publicly documented.

### Simplify's Parallel Code Review Agents
The Simplify feature launches three parallel review agents to analyze code changes for reuse, quality, and efficiency. This approach is not commonly documented and highlights a sophisticated method of code review.

### Remote Setup Command Timeout
The 'checkLoginState' function in the remote setup command has a timeout of 5000 milliseconds for executing the 'gh auth token' command.

### BtwSideQuestion Frame Interval
The BtwSideQuestion component uses an 80ms interval to update the frame state when no response or error is present. This is not documented publicly.

### OAuth Retry Feature with State Preservation
The OAuth flow has a hidden retry feature that preserves the state when an error occurs. If an error state is reached, users can retry the OAuth process, and the system will transition to an 'about_to_retry' state, preserving the previous state for a seamless retry experience.

### Hidden 'fork' alias via FORK_SUBAGENT flag
The 'fork' alias for the 'branch' command is conditionally available based on the 'FORK_SUBAGENT' feature flag. If this flag is not enabled, 'fork' will not be an alias for 'branch'.

### Dynamic Plugin Status Icons
The code dynamically assigns status icons for plugins based on their state, such as 'will enable', 'disabled', or 'enabled'. This dynamic icon assignment is not publicly documented.

### Hack for MCP Server Context Value
A hack is used to get the context value from 'toggleMcpServer' because 'useContext' only works in a component. This indicates a workaround for state management issues.

### Plugin Reload Architecture Choices
The reload-plugins command uses a lazy-loaded implementation and does not retry on failure, relying on user re-execution for retries. This design choice prioritizes simplicity over robustness, which may surprise developers expecting automatic retries.

### SDK Control Initialize Request Schema
The `SDKControlInitializeRequestSchema` allows for initializing SDK sessions with hooks, MCP servers, and agent configurations. This flexibility indicates a robust setup process for diverse SDK implementations.

### Teammate Lifecycle Notifications Use Folding
Notifications for teammate lifecycle events use a folding mechanism to combine repeated events into a single notification, such as '3 agents spawned'. This behavior is not publicly documented.

### MCP Connectivity Status Notifications
The `useMcpConnectivityStatus` hook provides notifications for MCP server connectivity issues, including failed connections and authentication needs, specifically for Claude AI connectors. This behavior is not publicly documented.

### Rate Limit Warning Notification Logic
The `useRateLimitWarningNotification` hook triggers notifications when Claude AI usage exceeds limits, but only if not in remote mode and if billing access is available. This nuanced behavior isn't detailed in public documentation.

### Model Deprecation Warning Notifications
The `useDeprecationWarningNotification` hook issues high-priority warnings for deprecated models, but only if not in remote mode. This internal mechanism is not publicly documented.

### Memoization in Plugin Installation Status
The `usePluginInstallationStatus` function uses a memoization technique with a cache sentinel to optimize performance. This involves caching previous states to avoid redundant calculations.

### Tool Permission Source Flattening
The source of tool permission decisions is flattened into string labels for analytics/OTel events, with specific handling for classifiers when certain feature flags are enabled.

### Elapsed Time Calculation for Agents
Elapsed time for agents is calculated using a 1-second interval and accounts for total paused time. This precise calculation ensures accurate tracking of agent activity, which may not be apparent to users.

### Tool Use Summary Logic for ExitPlanMode
The formatToolUseSummary function has specific logic for the ExitPlanMode tool, returning 'Review the plan in Claude Code on the web' when the tool name matches EXIT_PLAN_MODE_V2_TOOL_NAME. This behavior is not publicly documented.

### Handling Different System Message Subtypes
The SystemTextMessage function handles different message subtypes such as 'turn_duration' and 'memory_saved' by caching rendered components. This approach optimizes rendering by reusing components when the message or margin state hasn't changed.

### API Error Retry Logic with Countdown
The SystemAPIErrorMessage component implements a retry mechanism for API errors, with a countdown timer that hides the error message until the retry attempt is less than 4. It uses a useInterval hook to update the countdown every second.

### Tengu Feature Gate for Post-Compact Survey
The code references a feature gate named 'tengu_post_compact_survey' which controls the display of a survey after session memory compaction. This gate is checked using a potentially stale cache, indicating a reliance on cached feature flag states.

### Agent Menu Uses Internal Caching
The `AgentsMenu` component uses internal caching with a memoization strategy based on a sentinel value `Symbol.for("react.memo_cache_sentinel")`. This is not documented publicly and suggests a custom optimization technique.

### Tool Buckets Classification System
The `ToolSelector` component categorizes tools into specific buckets: READ_ONLY, EDIT, EXECUTION, MCP, and OTHER. This classification is not publicly documented and indicates a structured approach to tool management.

### Agent Tools Validation
Agents with undefined tools have access to all tools, while empty tool arrays result in limited capabilities. Invalid tools trigger errors.

### Agent Editing Restricted to Custom/Plugin Types
The `AgentEditor` component enforces a restriction where only custom or plugin agents can be edited. This is not apparent in public documentation, which might suggest broader editing capabilities.

### Automatic Color Option for Agents
The `ColorPicker` component includes an 'automatic' option for agent colors, which is not mentioned in the public API. This suggests a dynamic color assignment feature that could simplify agent management.

### Agent File Editing Requires Restart
When editing agent files through the `AgentEditor`, users must restart the application to load the latest version. This requirement is not clearly documented, potentially leading to confusion.

### Unexpected Switch Label 'bb43' in MCP Reconnect
The MCPReconnect function contains a switch statement with an unusual label 'bb43'. This label is not documented and doesn't appear to serve any functional purpose, which could indicate leftover or experimental code.

### McpConfigErrorSection Uses Memoization for UI Efficiency
The McpConfigErrorSection component uses memoization to optimize rendering by caching UI elements based on error and warning states. This is an internal optimization not mentioned in public documentation.

### MCPToolListView Cache Optimization
The MCPToolListView component uses a memoization cache to optimize rendering. It caches server tools and tool options based on server name and tool list, avoiding unnecessary recalculations.

### MCP Agent Server Auth Abort on Unmount
The MCPAgentServerMenu component aborts the OAuth flow on unmount to ensure the callback server is closed, even if a parent component's Esc handler navigates away before its own fires. This behavior is not typically documented in public-facing documentation.

### MCP Server Toggle Enabled Behavior
The MCPStdioServerMenu component includes a toggle function that enables or disables servers based on their current state. This toggle is not just a UI change but actively manages server connectivity, which may not be clear from public documentation.

### Stalled Intensity Threshold for Spinner Animation
The spinner animation transitions to red when tokens stop flowing for more than 3 seconds, with a fade over 2 seconds. This is controlled by the `useStalledAnimation` hook, which calculates `stalledIntensity` based on the time since the last token.

### Glimmer Speed Varies by Spinner Mode
The `useShimmerAnimation` hook sets the glimmer speed to 50ms for 'requesting' mode and 200ms otherwise. This affects how quickly the shimmer effect animates across the message.

### Hidden Feature Flags: BASH_CLASSIFIER and TRANSCRIPT_CLASSIFIER
The source code contains hidden feature flags 'BASH_CLASSIFIER' and 'TRANSCRIPT_CLASSIFIER'. These flags enable a classifier that requires confirmation for certain tool types, such as 'auto-mode'.

### Permission Rule Explanation Hook Details
The PermissionRuleExplanation function includes logic for explaining hooks, with specific formatting for hook names and sources. This detailed explanation is not publicly documented.

### Conditional ReviewArtifactTool Feature
The 'ReviewArtifactTool' is conditionally included based on the 'REVIEW_ARTIFACT' feature flag, suggesting it's a gated feature not available to all users.

### WorkerPendingPermission Component Architecture
The 'WorkerPendingPermission' component uses memoization with unique symbols to cache values, optimizing performance by avoiding unnecessary recomputations.

### HooksConfigMenu is Read-Only by Design
The HooksConfigMenu is intentionally read-only, directing users to edit settings.json directly or use Claude for modifications. This decision avoids maintenance burdens associated with supporting multiple hook types within the UI.

### HooksConfigMenu Checks Policy Settings for Restrictions
The HooksConfigMenu component checks 'policySettings' to determine if hooks are disabled or restricted, using deprecated settings functions. This suggests a reliance on legacy configurations for policy enforcement.

### Hooks Menu is Read-Only
The /hooks menu in the codebase is read-only, meaning users cannot modify hooks through the UI. Instead, they are directed to edit settings.json or use Claude for modifications. This is contrary to typical expectations of a configuration menu allowing edits.

### Hooks Restricted by Policy
Hooks can be restricted by policy, blocking user-defined hooks from running if they are not from managed settings. This affects hooks from ~/.claude/settings.json, .claude/settings.json, and .claude/settings.local.json.

### Matcher View Limitations
The SelectMatcherMode no longer allows adding new matchers. Users can only view existing matchers and their hooks, reinforcing the read-only nature of the hooks menu.

### Default Visible Option Count in Select State
The `useSelectState` function defaults to displaying 5 options at a time if no `visibleOptionCount` is specified. This default setting impacts how users interact with dropdowns, potentially affecting usability in cases with many options.

### Secret Feature Flag: Buddy
The code references a feature flag named 'buddy', which is not publicly documented. This flag seems to be related to a component called 'CompanionSprite' and a hook 'useBuddyNotification'.

### Unified Suggestion Type Detection
The code includes a function 'isUnifiedSuggestion' that checks if an item is a unified suggestion type, specifically for 'file-', 'mcp-resource-', or 'agent-' prefixed IDs. This behavior is not documented publicly.

### Use of Internal Querier for Stdin
The ThemeProvider uses an 'internal_querier' from the useStdin hook to track terminal theme changes. This internal mechanism is not publicly documented, suggesting it may be part of a broader internal system for managing terminal interactions.

### Secret Feature Flag: Tengu Destructive Command Warning
The code uses a feature flag 'tengu_destructive_command_warning' to conditionally display warnings for potentially destructive PowerShell commands. This flag is checked using 'getFeatureValue_CACHED_MAY_BE_STALE', indicating it may not always reflect the latest state.

### ComputerUseApproval TCC Panel for macOS Permissions
The ComputerUseApproval component includes a TCC panel specifically for handling macOS permissions like Accessibility and Screen Recording. This panel conditionally renders based on the presence of `request.tccState`, indicating a specialized UI for macOS permission management.

### FileWriteToolDiff Internal Logic
The FileWriteToolDiff uses a specific configuration to handle file writes by replacing the entire content. This behavior is not explicitly documented in public resources.

### Exit Plan Mode V2 Tool Name
The internal tool name for the Exit Plan Mode V2 is EXIT_PLAN_MODE_V2_TOOL_NAME, which suggests a second version of the tool that might not be publicly acknowledged.

### IDE Diff Config Interface
The `IDEDiffConfig` interface supports file editing configurations with optional multiple edits and a mode switch between 'single' and 'multiple'. This suggests internal tooling for batch file modifications.

### Dynamic Workspace Tab Updates
The WorkspaceTab component dynamically updates its state based on changes to 'toolPermissionContext.additionalWorkingDirectories'. This suggests a reactive design where the UI automatically reflects changes in the underlying data model.

### Wizard Step Caching Mechanism
The `CreateAgentWizard` uses a caching mechanism with `Symbol.for('react.memo_cache_sentinel')` to optimize step rendering, which is not documented publicly.

### Agent Color Name Casting in ColorStep
In the ColorStep, the selected color is cast to AgentColorName type, which implies a strict type system for agent colors, potentially limiting customization to predefined colors.

### Tool Result Validation Before Rendering
Tool results are validated against an output schema before rendering to prevent crashes due to corrupt or old-format data. This validation is crucial for maintaining stability in resumed transcripts.

### Interrupt Message for Tool Use
The code checks for a specific interrupt message `INTERRUPT_MESSAGE_FOR_TOOL_USE` in `UserToolErrorMessage` to handle user interruptions. This suggests a hidden feature for managing tool usage interruptions.

### Indefinite Retry on Worker State Upload
The WorkerStateUploader retries indefinitely with exponential backoff until success or closure. This behavior is not commonly documented and can lead to unexpected resource consumption if not managed properly.

### Session Settings Cache Management
Claude Code uses a sessionSettingsCache to store settings with errors, which is reset alongside other caches on specific triggers like settings write or plugin init. This ensures consistent settings state.

### Team Leader Skips Idle Notification Hook
The code avoids registering an idle notification hook for the team leader, preventing unnecessary notifications when the leader becomes idle.

### Hot Reload for Plugin Hooks
Claude uses a snapshot of enabledPlugins for change detection in hot reload, indicating a mechanism to dynamically update plugin hooks without restarting the application. This is not commonly documented in public resources.

### Claude Plugin Directory Structure
Claude plugins follow a specific directory structure with optional manifest and specific folders for commands, agents, and hooks. This structure is essential for plugin validation and loading.

### Agent Loading from Markdown Files
Agents are loaded from markdown files using 'walkPluginMarkdown'. The function 'loadAgentFromFile' reads the file content, parses frontmatter, and constructs agent definitions with a namespace-prefixed name.

### Default Shell Resolution Strategy
The default shell for input-box commands is resolved to 'bash' regardless of platform, including Windows, which could break existing users with bash hooks. This decision is not highlighted in public documentation.

### PowerShell Tool Gating Logic
The PowerShell tool is gated by a runtime check that defaults to being enabled for internal users ('ant') and disabled for external users, controlled by the environment variable 'CLAUDE_CODE_USE_POWERSHELL_TOOL'.

### Strict Guidelines for Chrome Automation
The guidelines for Claude's Chrome automation emphasize avoiding JavaScript alerts and dialogs, as they block further events. Instead, console logs should be used for debugging, and specific tools are provided to handle console messages and dismiss dialogs.

### Haiku-Powered Date/Time Parsing
The `parseNaturalLanguageDateTime` function uses an internal service named 'Haiku' to convert natural language date/time inputs into ISO 8601 format. This service is not publicly documented and appears to be an internal tool for handling complex date parsing tasks.

### Ant-Only Tool Names Conditional Logic
Certain tool names are conditionally required based on the `USER_TYPE` environment variable being 'ant'. This includes tools like `VERIFY_PLAN_EXECUTION_TOOL_NAME`, which are not available to all users.

### Unified Cross-Platform Code Execution List
A shared list of interpreters and tools like 'python', 'node', 'bash', and 'ssh' is used to prevent drift between Unix and Windows platforms in terms of code execution capabilities.

### Chicago Coordinate Mode for Computer Use Tools
The setup for computer use tools includes a function `getChicagoCoordinateMode`, suggesting a specialized mode or configuration named 'Chicago'.

### Singleton Computer Use Host Adapter
The `getComputerUseHostAdapter` function creates a process-lifetime singleton for computer use tools, loading native modules and ensuring OS permissions.

### Secret Feature Gate: CHICAGO_MCP
The 'CHICAGO_MCP' feature is controlled by the GrowthBook gate 'tengu_malort_pedway'. This gate is used to enable runtime features related to the MCP tool object.

### Internal Post-Sampling Hooks
Post-sampling hooks are used internally and are not exposed in the settings.json config. These hooks are registered programmatically and executed after model sampling completes.

### Exit Codes for Tool Execution Hooks
Different exit codes in tool execution hooks determine the visibility of stdout/stderr, influencing how errors and outputs are handled internally.

### TURN_BATCH_SIZE Threshold for Skill Improvement
The skill improvement hook only runs every 5 user messages, as determined by the TURN_BATCH_SIZE constant. This threshold controls how frequently skill updates are analyzed.

### Skill Hooks 'Once' Flag Behavior
Skill hooks with the 'once' flag are automatically removed after their first successful execution. This ensures they only trigger once per session.

### Session Hooks Optimization with Map
The `SessionHooksState` uses a `Map` instead of a `Record` to optimize performance under high-concurrency workflows. This choice avoids the O(N²) complexity of copying a growing map and reduces listener notifications, which is not a common practice.

### API Query Hook Tools Default
In the `createApiQueryHook` function, the `useTools` configuration defaults to `true`, meaning tools from the context are used unless explicitly set to `false`. This behavior is not clearly documented in public resources.

### Always Emitted Hook Events
The hook event system has a set of events, 'SessionStart' and 'Setup', that are always emitted regardless of the 'includeHookEvents' option. These events are part of an original allowlist for backwards compatibility.

### Max Pending Events Threshold
The system has a threshold of 100 for pending hook events. If this limit is exceeded, the oldest event is removed to make room for new ones.

### Agent Model Region Inheritance
Subagents inherit the region prefix from the parent model for Bedrock, ensuring consistent region usage across agents, especially when IAM permissions are region-specific.

### Known Channels Versioning System
The system maintains a version counter for known Slack channels, incrementing it whenever the known channels set changes. This versioning helps manage updates and ensure the UI reflects the latest state.

### Bash Specs Command Registry Details
The Bash command specs include commands like 'srun' for SLURM clusters and 'pyright' for Python type checking, indicating internal tooling support for specific environments.

### In-Process Backend Architecture
In-process teammates run in the same Node.js process with isolated context via AsyncLocalStorage, sharing resources with the leader and communicating via a file-based mailbox.

### Session Grace Period Lasts 5 Minutes
Sessions can survive WebSocket disconnects for a 5-minute grace period before being destroyed. This allows clients to reconnect without losing state.

### GrowthBook Experiment Event Metadata
The GrowthBookExperimentEvent interface includes a field for event_metadata_vars, which is automatically populated by an internal-tools-common event_logging library. This suggests the use of internal tools for event logging that are not publicly documented.

### Hidden Feature: TaskGetTool's TodoV2 Toggle
The TaskGetTool has a hidden feature flag 'isTodoV2Enabled' that controls its activation. This flag is not mentioned in public documentation, suggesting it's an internal toggle for a new or experimental version of the task management system.

### NotebookEditTool's Secret Edit Modes
The NotebookEditTool supports 'edit_mode=insert' and 'edit_mode=delete', allowing users to add or remove cells in a Jupyter notebook. These modes are not commonly documented, indicating potential internal use or planned features.

### Hidden Feature Flags in NotebookEditTool
The NotebookEditTool uses a hidden feature flag 'bun:bundle' which is not documented publicly. This flag likely controls experimental or internal features.

### AskUserQuestionTool Option Limits
The AskUserQuestionTool enforces a strict limit of 2-4 options per question, which is not publicly documented. This could limit flexibility in user interactions.

### Strict Permissions in NotebookEditTool
The NotebookEditTool requires absolute paths for notebook files and checks write permissions strictly, which is not emphasized in public documentation.

### Preview Feature Flag in AskUserQuestion Tool
The AskUserQuestion tool includes a hidden 'preview' feature flag that allows rendering of visual comparisons in a side-by-side layout. This feature is only available for single-select questions and not documented publicly.

### ExitPlanModeTool's Secret Leader Approval Feature
The ExitPlanModeTool has an internal feature where plans can be submitted for 'team lead approval'. This behavior is not documented publicly and suggests a workflow involving hierarchical approval processes.

### WebFetchTool's Preapproved Host List
WebFetchTool has a hardcoded list of preapproved domains it can access without explicit user permission, including 'platform.claude.com' and 'github.com/anthropics'. This list is restricted to GET requests only for security reasons.

### WebFetchTool's Result Size Limit
The WebFetchTool has a maximum result size limit of 100,000 characters for tool result persistence. This threshold is not publicly documented and affects how much data can be processed in a single fetch operation.

### WebFetch Tool Cache Limits and Behavior
The WebFetch tool has a 15-minute cache TTL and a 50MB size limit. This cache is used to store fetched URL content for faster repeated access.

### WebFetch Tool's Content Processing Guidelines
WebFetch enforces strict guidelines for non-preapproved domains, including a 125-character max for quotes and avoiding exact song lyrics.

### MCP Tool Architecture and Limits
The MCPTool is designed with a maximum result size of 100,000 characters and includes a warning threshold for large responses at 10,000 tokens. It also has specific limits for JSON parsing, such as a maximum of 200,000 characters for performance safety.

### MCP Tool Uses Secret Feature Flags
The MCPTool utilizes a feature flag 'MCP_RICH_OUTPUT' to control the verbosity and format of its output, indicating internal experimentation with output presentation.

### MCP Tool Search Classification System
MCPTool classifies tools as search or read operations using explicit allowlists for common servers. Unknown tools default to not collapsing, indicating a conservative approach to UI management.

### File Write Tool Requires Pre-Read
The File Write Tool mandates using the File Read Tool first for existing files. The operation will fail if the file is not read first.

### File Write Tool Emoji Restriction
The File Write Tool has a restriction against using emojis unless explicitly requested by the user.

### File Write Tool Line Rendering Limit
The File Write Tool has a line rendering limit set to 10 lines, controlled by the constant MAX_LINES_TO_RENDER.

### MCP Auth Tool Pseudo-Tool Architecture
The MCP Auth Tool is a pseudo-tool that initiates OAuth flow for unauthenticated MCP servers. It uses 'performMCPOAuthFlow' with 'skipBrowserOpen' to obtain an authorization URL, completing the OAuth callback in the background. This architecture allows seamless tool swapping post-authentication.

### Task Update Tool Extended Status Schema
The Task Update Tool uses an extended status schema that includes 'deleted' as a special action. This allows tasks to be permanently removed, which is not commonly documented.

### Web Search Tool Limits Searches to 8
The WebSearchTool is hardcoded to allow a maximum of 8 searches per session. This limit is not publicly documented and could affect users expecting unlimited searches.

### Web Search Tool Restricted to US
The WebSearchTool is only available for use within the United States, which is not a widely known restriction and could surprise international users.

### Mandatory Sources Section in Web Search Responses
The WebSearchTool requires a 'Sources:' section in every response, listing all URLs from search results. This strict requirement ensures transparency but is not explicitly mentioned in public documentation.

### Plan Mode Max Result Size Limit
The EnterPlanModeTool has a maximum result size limit of 100,000 characters. This constraint could impact the complexity of tasks handled in plan mode.

### Internal Flags in TeamCreate Tool
The TeamCreate tool uses an internal feature flag 'isAgentSwarmsEnabled' to determine if agent swarms can be created. This flag is not publicly documented, suggesting it controls access to advanced multi-agent capabilities.

### Unique Team Naming Strategy
The TeamCreate tool generates unique team names by checking if a provided name already exists. If it does, it generates a new name using 'generateWordSlug'. This ensures no duplicate team names.

### Task Ownership Dynamics
Tasks within a team are assigned using TaskUpdate with the 'owner' parameter. Any agent can set or change task ownership, allowing flexible task management.

### TaskCreateTool Uses Deferred Execution
The TaskCreateTool defers execution of tasks by setting `shouldDefer: true`. This means tasks are not executed immediately upon creation, contrary to what users might expect.

### REPL-Only Tools Hidden from Direct Use
Tools like FileReadTool and BashTool are hidden from direct use when REPL mode is enabled, forcing batch operations through REPL.

### Hidden Protocol for Shutdown Requests
The system has a hidden protocol for handling shutdown requests and plan approval responses. Agents must respond to JSON messages with specific types, echoing request IDs and setting approval flags.

### Hidden TaskStopTool Behavior for 'ant' Users
The TaskStopTool has a hidden behavior where the user-facing name is blank for users identified as 'ant'. This suggests a special internal user type with different UI experiences.

### TestingPermissionTool Always Requires Permission
The TestingPermissionTool is designed to always ask for permission before executing, regardless of the environment. This is used for end-to-end testing and is only enabled in 'test' environments.

### Deprecated KillShell Alias in TaskStopTool
The TaskStopTool maintains a deprecated alias 'KillShell' for backward compatibility. This ensures continued support for existing transcripts and SDK users relying on the old name.

### TaskStopTool Max Result Size Limit
The TaskStopTool has a maximum result size limit of 100,000 characters. This design decision likely balances performance and usability.

### Hidden MCP Resource Tool with Concurrency
The `ReadMcpResourceTool` is a hidden tool designed to read resources from an MCP server using a URI. It features a concurrency-safe and read-only design, with a surprising `maxResultSizeChars` limit set at 100,000 characters. This tool is not publicly documented.

### Agent Source Groups Display Order
The agent source groups are displayed in a specific order: User agents, Project agents, Local agents, Managed agents, Plugin agents, CLI arg agents, and Built-in agents. This ordering ensures consistent display across CLI and UI.

### Agent Overrides Resolution Logic
Agents are annotated with override information by comparing against the active agent list. An agent is 'overridden' when another agent from a higher-priority source takes precedence, ensuring deduplication by (agentType, source).

### Agent Tools Description Logic
The tools available to an agent are determined by allowlists and denylists. If both are defined, the allowlist is filtered by the denylist. If only one is defined, it dictates the available tools.

### Agent Memory Snapshot System
The agentMemorySnapshot.ts file implements a system for managing snapshots of agent memory. Snapshots are stored in a directory named '.claude/agent-memory-snapshots/<agentType>/' and include metadata about when they were last updated or synced.

### Disable Built-in Agents via Env Var
Developers can disable all built-in agents by setting the environment variable 'CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS' in non-interactive sessions. This feature is useful for SDK users who want a blank slate.

### Agent MCP Server Spec Schema
The Agent MCP Server Spec can either reference an existing server by name or define it inline as a configuration object. This flexibility allows for dynamic server configuration in agent definitions.

### Resume Agent Background Timeout
The resumeAgentBackground function logs the start time using Date.now(), indicating a potential timeout or performance tracking mechanism for resuming agents.

### Agent Colors Restricted to Subagents Only
The AGENT_COLOR_TO_THEME_COLOR mapping restricts colors to subagents only, using keys like 'red_FOR_SUBAGENTS_ONLY'. This implies color themes are not intended for general-purpose agents.

### TeamDeleteTool Uses Deferred Execution
The TeamDeleteTool is configured with 'shouldDefer: true', indicating it operates asynchronously or in a deferred manner, which is not typically highlighted in public documentation.

### TeamDeleteTool Checks for Active Members Before Cleanup
TeamDeleteTool prevents cleanup if there are active non-lead members in the team, which could lead to incomplete disbandment if not all members are properly marked as inactive.

### MCP Resource Tool Uses LRU Cache
The ListMcpResourcesTool uses an LRU cache for fetching resources, which is warmed at startup and invalidated on specific events. This ensures results are never stale.

### Todo Write Tool Usage Guidelines
The TodoWriteTool has specific guidelines for when to use it, such as for complex tasks with 3 or more steps, and when not to use it, like for trivial tasks.

### Secret Feature Flag: tengu_hive_evidence
The code contains a hidden feature flag 'tengu_hive_evidence' used to determine if a verification nudge is needed when closing out a todo list. This flag is checked alongside the 'VERIFICATION_AGENT' feature to decide if a reminder should be appended when a list of 3 or more items is closed without a verification step.

### KAIROS Feature Affects Tool Name Visibility
The visibility of brief tool names is controlled by the 'KAIROS' and 'KAIROS_BRIEF' feature flags. When these flags are active, the brief tool names are imported and used, otherwise they remain null.

### Feature Flag: tengu_glacier_2xr Affects Tool Location Hint
The 'tengu_glacier_2xr' feature flag influences how deferred tools are announced in messages. When enabled, deferred tools appear in '<system-reminder>' messages; otherwise, they appear in '<available-deferred-tools>' messages.

### ExitWorktreeTool's Strict Session Handling
The ExitWorktreeTool only operates on worktrees created by EnterWorktree in the current session, ignoring manually added worktrees or those from previous sessions. If called outside an EnterWorktree session, it performs no action and reports no active session.

### Normalize Quotes Function in FileEditTool
The FileEditTool includes a function to normalize curly quotes to straight quotes, which suggests that Claude cannot output curly quotes directly. This normalization is done to ensure consistency in text processing.

### DIFF_TIMEOUT_MS Constant in FileEditTool
The FileEditTool uses a constant DIFF_TIMEOUT_MS, which likely sets a timeout for diff operations. However, the exact value of this timeout is not revealed in the code snippet.

### Internal File Edit Tool Naming
Internally, the file edit tool is simply named 'Edit', which is a generic name not used in public-facing documentation.

### Background Tasks Can Be Disabled
The PowerShell tool includes a feature to run commands in the background using the `run_in_background` parameter. However, this feature can be disabled by setting the environment variable `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` to a truthy value.

### PowerShell Path Validation with AST Parser
The PowerShell path validation uses an AST parser to ensure paths stay within allowed directories, similar to BashTool. This involves a security model that forces validation for any unrecognized parameters.

### DOTNET Read-Only Flags in PowerShell
The PowerShell tool includes specific read-only flags for DOTNET commands, such as '--version', '--info', '--list-runtimes', and '--list-sdks', indicating a focus on safe command execution.

### Skill Tool Description Character Cap
The Skill Tool enforces a hard cap of 250 characters for skill descriptions to optimize cache creation without improving match rate. This cap applies to all entries, including bundled skills.

### EnterWorktreeTool's Strict Usage Rules
The EnterWorktreeTool is strictly gated to only activate when the user explicitly mentions 'worktree'. It will not trigger for general branch operations or bug fixes unless 'worktree' is specified. This behavior is not publicly documented.

### Worktree Path Location in Claude
When creating a worktree, the EnterWorktreeTool places it inside the hidden directory `.claude/worktrees/`. This specific path is not mentioned in public documentation.

### Worktree Name Validation Rules
The EnterWorktreeTool enforces strict validation on worktree names, allowing only letters, digits, dots, underscores, and dashes, with a maximum of 64 characters. This level of detail is not commonly known.

### GlobTool Result Truncation Limit
The GlobTool truncates results to a maximum of 100 files, which is not documented publicly. This means users may not receive all matching files if more than 100 are found.

### File Checkpointing for Code Rewind
The 'fileCheckpointingEnabled' setting allows file checkpointing for code rewind, a feature not widely advertised. This suggests a capability for version control or undo functionality within the tool.

### Config Tool Async Defer Behavior
The ConfigTool is designed to defer operations asynchronously and is marked as concurrency safe, which is not explicitly detailed in user-facing documentation. This affects how settings are applied and managed under load.

### Synchronous FS in React Render
The function getSymbolAtPosition uses synchronous file I/O due to its invocation within a synchronous React render function, renderToolUseMessage. This is contrary to typical asynchronous I/O practices in JavaScript, potentially impacting performance.

### Hardcoded LSP Tool Name
The LSP tool name is hardcoded as 'LSP' using a TypeScript const assertion, indicating a fixed identity for this tool within the codebase.

### URI Formatting in LSP Tool
The LSP Tool's URI formatting function attempts to convert URIs to relative paths only if they are shorter and do not start with '../../'. This behavior is not documented but affects how file paths are displayed.

### Operation Labels in LSP Tool
The LSP Tool uses a set of predefined labels for different operations, such as 'definition', 'reference', and 'symbol'. These labels are used to format results and are not exposed in public APIs.

### Agent Swarms Teammate Workflow
The TaskListTool has a hidden 'Teammate Workflow' feature that activates when 'agentSwarmsEnabled' is true. It guides teammates on task assignment and prioritization, emphasizing task ID order.

### Synthetic Output Tool for Non-Interactive Sessions
The SyntheticOutputTool is only enabled for non-interactive sessions, ensuring structured output is provided once conditions are met.

### Remote Trigger Tool Auth Handling
The RemoteTriggerTool manages authentication internally, ensuring OAuth tokens are never exposed to the shell, enhancing security.

### TaskListTool Max Result Size
The TaskListTool has a maximum result size of 100,000 characters, indicating a design decision to handle large task lists efficiently.

### Remote Trigger Tool Beta Feature Flag
The RemoteTriggerTool has a beta feature flag 'ccr-triggers-2026-01-30' indicating a planned release or testing phase around January 2026. This suggests long-term feature planning and testing cycles.

### Tengu Surreal Dali Feature Flag
The feature flag 'tengu_surreal_dali' is used to enable the RemoteTriggerTool, suggesting a hidden or experimental feature set related to 'tengu'.

### Remote Trigger Tool Timeout Design
The RemoteTriggerTool has a maximum result size of 100,000 characters, which may limit the amount of data returned in a single operation.

### File Read Tool Limits: Surprising Defaults
The FileReadTool has a default maxSizeBytes of 256 KB and maxTokens of 25000. These limits are surprising as they prioritize error handling over content delivery, reverting a truncation approach that increased error rates.

### KAIROS_BRIEF Entitlement Check
The Brief tool's entitlement check uses the KAIROS_BRIEF feature flag to determine if users can access it. This flag allows Brief to ship independently of the main KAIROS feature, indicating a modular approach to feature deployment.

### Agent Output Task ID Extraction
The function getAgentOutputTaskId extracts task IDs from file paths that match a specific pattern. Task IDs must be alphanumeric, up to 20 characters, and follow the pattern {projectTempDir}/tasks/{taskId}.output.

### Proactive Status in Brief Tool
The Brief tool uses a 'proactive' status to label messages that surface information the user hasn't asked for but needs to see, such as task completions or blockers.

### KAIROS Brief Refresh Interval
The KAIROS Brief tool has a refresh interval set to 5 minutes (300,000 milliseconds), indicating how often it checks for updates or changes.

### Upload Timeout Limit Set to 30 Seconds
The upload timeout for attachments in the BriefTool is set to 30,000 milliseconds (30 seconds). This specific timeout duration indicates the expected performance and network reliability considerations for file uploads.

### Maximum Upload Size Limited to 30MB
The maximum upload size for attachments in the BriefTool is capped at 30 megabytes. This limit aligns with backend constraints and reflects design decisions around data handling and storage.

### Image Data URI Size Limit in BashTool
BashTool's utils.ts file imposes a cap on file reads to 20 MB for image data URIs, noting that the API accepts a maximum of 5 MB base64. This discrepancy suggests a buffer to prevent out-of-memory errors.

### Bash Comment Label Extraction
The system extracts the first line of a bash command as a comment label if it starts with # (not #!). This is used as a non-verbose tool-use label in fullscreen mode.

### Strict Read-Only Mode for Planning Agent
The `planAgent.ts` file enforces a strict read-only mode for planning tasks, prohibiting any file modifications or system state changes. This mode is enforced by disallowing commands like `mkdir`, `touch`, `rm`, `cp`, `mv`, and more, ensuring the agent can only explore and design without altering the environment.

### Verification Agent's Unique Strategy
The verification agent in `verificationAgent.ts` employs a unique strategy focused on breaking implementations rather than confirming their success. It emphasizes finding the last 20% of issues, avoiding verification avoidance, and using tools like browser automation and ephemeral test scripts.

### Embedded Search Tools Aliasing Strategy
The code aliases 'find' and 'grep' to embedded 'bfs' and 'ugrep' tools, removing dedicated Glob/Grep tools. This suggests a fallback to Bash for these commands when embedded tools are present, altering expected behavior.

### ULTRAPLAN_TAG in RemoteAgentTask
The presence of ULTRAPLAN_TAG in the RemoteAgentTask suggests a hidden feature or mode related to 'ultraplan', which is not publicly documented.

### Read-Only Explore Agent Restrictions
The Explore Agent is strictly read-only, prohibiting any file modifications, creations, or deletions, which may limit its utility in certain scenarios.

### Kill Shell Tasks for Exiting Agents
The killShellTasksForAgent function ensures that all running shell tasks are terminated when an agent exits, preventing long-lived processes. This is a safeguard against resource exhaustion.

### Progress Tracker Activity Limits
The ProgressTracker in LocalAgentTask limits recent activities to a maximum of 5. This cap is not mentioned in public documentation.

### Synchronized Animations Pause When Offscreen
The `useAnimationFrame` hook pauses animations when they are offscreen by unsubscribing from the clock, effectively freezing time until the element is visible again. This behavior is not typically documented in public resources.

### Tab Status Indicator Using OSC 21337
The `useTabStatus` hook sets a tab-status indicator using OSC 21337, which emits a colored dot and status text to the tab sidebar. This feature is wrapped for tmux/screen passthrough and clears the status when transitioning to `null`.

### Text Selection Operations in Fullscreen Mode
The `useSelection` hook provides access to text selection operations only when in fullscreen mode. It includes functions like `copySelection`, `clearSelection`, and `shiftSelection`, but returns no-op functions when fullscreen is disabled.

### Internal Exit on Ctrl+C Behavior
The `useInput` hook includes an internal flag `internal_exitOnCtrlC` that determines if the application should exit when Ctrl+C is pressed. This behavior is not publicly documented and allows for custom handling of Ctrl+C events.

### Synchronous Raw Mode with useLayoutEffect
The `useInput` hook uses `useLayoutEffect` instead of `useEffect` to enable raw mode synchronously during React's commit phase. This prevents keystrokes from echoing and the cursor from being visible until the effect fires.

### Viewport Visibility Without Re-renders
The `useTerminalViewport` hook updates visibility state without triggering re-renders. It relies on callers re-rendering for other reasons to pick up the latest visibility state, avoiding infinite loops.

### Declared Cursor Timing for Accessibility
The `useDeclaredCursor` hook ensures the cursor is parked at the text input's caret, aiding accessibility tools. It uses precise timing to avoid a one-keystroke lag, ensuring screen readers and magnifiers track input accurately.

### Terminal Title Handling on Windows
On Windows, the `useTerminalTitle` hook sets the terminal title using `process.title` due to the lack of OSC support in classic conhost.

### Terminal Focus Reporting with DECSET
The `useTerminalFocus` hook uses DECSET 1004 for focus reporting, allowing the terminal to send escape sequences when gaining or losing focus.

### Terminal Events Mapped to React Priorities
Terminal event types are mapped to React scheduling priorities using a switch statement, mirroring react-dom's getEventPriority() function. This internal mapping is not publicly documented.

### Vercel Sessions Don't Persist Across Invocations
The Vercel serverless function setup for Claude Code's MCP API does not persist sessions across invocations. This is due to Vercel's stateless nature, making it unsuitable for session-based MCP clients. Instead, Railway, Render, or VPS should be used for production environments requiring persistent sessions.

### Presence State Management in Collaboration
The usePresence hook manages real-time collaboration states like user presence, cursor positions, and typing status using socket events. This sophisticated state management is not detailed in public documentation.

### Touch Gesture Default Thresholds
The useTouchGesture hook has default thresholds for swipe recognition: a minimum distance of 50px and a velocity of 0.2px/ms. These defaults are not configurable through public documentation.

### Focus Return Hook Safety Cleanup
The useFocusReturn hook includes a safety cleanup mechanism that nullifies the saved reference to the focused element on component unmount, ensuring no memory leaks occur.

### Tool Approval Policy Defaults
The `useCollaboration` hook defaults the `toolApprovalPolicy` to "any-collaborator", allowing any user to approve tool uses unless specified otherwise.

### Default WebSocket URL Fallback
The `useCollaboration` hook uses a default WebSocket URL `ws://localhost:3001` if no `wsUrl` is provided and environment variables are undefined.

### Keyboard Shortcut Sequence Timeout
The `useKeyboardShortcuts` hook sets a timeout of 1000ms for completing key sequences, which could affect user experience with shortcut inputs.

### Mobile Keyboard Height Threshold
The `useViewportHeight` hook considers the keyboard open if the height difference exceeds 50 pixels, which might not account for all keyboard sizes.

### Aria Live Region Delay Default
The `useAriaLive` hook has a default delay of 50ms before injecting messages into the aria-live region. This delay allows the region to reset, which is not commonly documented in public resources.

### Hidden Tool Use Content Type
The code defines a 'tool_use' content type, which is not mentioned in public documentation, indicating internal capabilities for tool interactions.

### Tool Use Filtering in Content Export
The export functions filter content based on 'includeToolUse' option, allowing users to exclude tool use and results from exports.

### Tool Use Export Option in HTML and Plaintext
Both HTML and plaintext export functions include an option to export tool usage details. This feature is controlled by the 'includeToolUse' flag, allowing users to decide whether to include detailed tool interactions in their exports.

### Hidden Permission Settings for Tools
The PermissionSettings component includes a hidden feature allowing auto-approval of certain tools like 'file_read', 'file_write', 'bash', and 'web_search'. This setting lets Claude perform actions without user confirmation, which is not publicly documented.

### Theme Switching Uses Direct State Updates
The `GeneralSettings.tsx` component directly updates the theme state and applies it using a `setTheme` function, indicating a straightforward approach to theme management without complex state management libraries.

### Secret Tool Approval Policy
The collaboration context includes a hidden 'toolApprovalPolicy' feature, allowing either 'owner-only' or 'any-collaborator' to approve tool usage. This is not documented publicly.

### Tooltip Delay Duration Set to 300ms
The Tooltip.Provider in UserAvatar sets a delay duration of 300 milliseconds before showing the tooltip. This specific timing is not documented in public-facing materials.

### ToolWebSearch JSON Parsing Fallback
The ToolWebSearch component attempts to parse search results as JSON and falls back to treating the raw text as a single result if parsing fails. This behavior is not documented publicly.

### Tool Icon Mapping in ToolUseBlock
ToolUseBlock uses a predefined mapping of tool names to icons, such as 'websearch' mapped to 'Globe'. This mapping is internal and not exposed in public documentation.

### ToolFileRead Collapses After 40 Lines
The ToolFileRead component collapses content display after 40 lines by default, unless the user opts to show all lines. This behavior is not commonly documented.

### ToolBash Limits Output to 200 Lines
The ToolBash component truncates command output to 200 lines by default, unless explicitly expanded by the user. This is a design choice not typically highlighted in documentation.

### ToolBash Parses and Strips Exit Codes
ToolBash has a mechanism to parse and strip exit codes from command results. This internal handling of exit codes is not typically exposed to users.

### ToolFileWrite Detects New Files via Regex
ToolFileWrite uses a regex pattern to determine if a file operation results in a new file creation. This internal logic is not documented for end-users.

### ToolWebFetch Truncation Limit
The ToolWebFetch component truncates results to a maximum of 800 characters by default, controlled by the MAX_VISIBLE constant set to 80. This behavior is not documented publicly.

### ToolGrep Default Flag Behavior
In ToolGrep, the '-n' flag for line numbers is enabled by default unless explicitly set to false. This default behavior is not mentioned in public documentation.

