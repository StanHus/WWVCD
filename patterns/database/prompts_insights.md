# Prompts Insights

*Clean-room distillation of 134 insights regarding prompts.*

---

### Hidden Fast-Path CLI Features
The CLI entry point uses fast-paths to load only necessary modules based on specific flags, avoiding the full CLI load. Notable flags include `--dump-system-prompt` for an ant-only feature and `--claude-in-chrome-mcp` for a Chrome MCP server. These paths are controlled by feature flags like `DUMP_SYSTEM_PROMPT` and `CHICAGO_MCP`, which are not publicly documented.

### Agent Navigation Footer Exit Detection
The `AgentNavigationFooter` component uses `useExitOnCtrlCDWithKeybindings()` to detect pending exits, overriding instructions with 'Press X again to exit'. This behavior is not documented, indicating a nuanced exit strategy.

### Hidden Memory Instructions in Agent Generation
When `isAutoMemoryEnabled()` is true, `generateAgent` appends `AGENT_MEMORY_INSTRUCTIONS` to the system prompt. This hidden feature suggests a conditional enhancement for agent memory capabilities, not publicly documented.

### Agent Validation Has Strict Character Limits
Agent validation enforces strict character limits: 'whenToUse' must be between 10 and 5000 characters, and 'systemPrompt' has a warning threshold at 10000 characters. These limits ensure concise and manageable input sizes.

### Generate Step Skips Manual Inputs
In the CreateAgentWizard, the 'GenerateStep' automatically skips manual input steps for name, prompt, and description if the agent is generated using a natural language prompt. This behavior is not documented publicly.

### Immediate ACKs Prevent Phantom Prompts
The system fires both 'received' and 'processed' acknowledgments immediately upon SSE event receipt to prevent phantom prompt flooding during restarts. This behavior is a fix for issues with re-queued prompts not being acknowledged as 'processed'.

### Cyber Risk Instruction Sets Strict Boundaries
The `CYBER_RISK_INSTRUCTION` string explicitly outlines permissible security assistance activities, such as authorized security testing and CTF challenges, while strictly prohibiting destructive techniques and malicious activities. This instruction is injected directly into the system prompt, ensuring compliance with ethical guidelines.

### Session Date Stability with Memoization
The `getSessionStartDate` function is a memoized version of `getLocalISODate`, capturing the date once at session start to maintain prompt-cache stability. This prevents cache busting at midnight in simple mode (`--bare`).

### Built-In Output Styles with Educational Prompts
The 'Explanatory' and 'Learning' output styles are built-in configurations that provide educational insights and hands-on practice prompts. These styles use unique formats like star-bordered code fences and 'Learn by Doing' requests to engage users.

### KAIROS Feature Flag for Brief Instructions
The codebase includes a hidden feature flag 'KAIROS' and 'KAIROS_BRIEF' for brief tool instructions. This suggests an internal mechanism to toggle between detailed and concise guidance, which isn't publicly documented.

### Dynamic Boundary in System Prompts
The 'SYSTEM_PROMPT_DYNAMIC_BOUNDARY' is used to separate static from dynamic content in system prompts, allowing for global caching of certain sections. This internal mechanism is not explained in public documentation.

### Autonomous Mode with SleepTool
Claude's 'Proactive Section' allows it to operate autonomously using 'SleepTool' to manage wait times, with a maximum prompt cache expiry of 5 minutes. This behavior isn't publicly documented.

### System Prompt Injection for Debugging
The code includes a feature for system prompt injection used for cache breaking and ephemeral debugging, which is not publicly documented. This feature clears context caches immediately when the injection changes.

### Reset Auto Mode Opt-In for Default Offer
A one-shot migration resets 'skipAutoPermissionPrompt' for users who accepted an old dialog but don't have 'auto' as default, ensuring they see new options.

### Prompt Command Context Forking
The 'PromptCommand' type includes a 'context' property that can be set to 'inline' or 'fork'. When set to 'fork', the skill runs in a sub-agent with a separate context and token budget, allowing for isolated execution.

### Prompt Overlay Provider Mechanism
The 'PromptOverlayProvider' uses a complex state management system to render floating overlays outside clipped slots. It uses 'position:absolute bottom="100%"' to ensure overlays are not clipped by the layout's overflow settings.

### Bridge Remote Control Requires Claude.ai Subscription
The Bridge feature's Remote Control functionality is restricted to users with claude.ai subscriptions, as indicated by the `BRIDGE_LOGIN_INSTRUCTION` message. Users must log in with their claude.ai account to access this feature.

### DANGEROUS_uncachedSystemPromptSection Function
The function 'DANGEROUS_uncachedSystemPromptSection' creates system prompt sections that recompute every turn and break the prompt cache. This is marked as dangerous and requires a reason for cache-breaking.

### CLI Sysprompt Prefixes Based on Context
The CLI sysprompt prefix changes based on the API provider and interaction mode. For 'vertex', it defaults to 'You are Claude Code, Anthropic's official CLI for Claude.'

### Cyber Risk Instruction Guardrails
The CYBER_RISK_INSTRUCTION sets strict boundaries for security-related requests, explicitly forbidding destructive techniques and requiring clear authorization for dual-use tools. This instruction is owned by the Safeguards team and cannot be modified without their review.

### Memory Selection Logic for Queries
The function `findRelevantMemories` uses a system prompt to select up to 5 memory files relevant to a user's query. It excludes `MEMORY.md` and avoids re-selecting previously surfaced memories. The prompt advises against selecting memories that are merely usage references for recently-used tools, focusing instead on warnings or known issues.

### Tengu Pewter Ledger Experiment Details
The 'tengu_pewter_ledger' experiment controls plan file structure prompts with variants like 'trim', 'cut', and 'cap'. It aims to manage plan file size and session-level costs, with a baseline mean of 6,207 characters.

### Hidden Character Attack Mitigation in Claude
Claude implements a security measure against hidden character attacks using Unicode normalization and removal of dangerous Unicode categories. This is always enabled to protect against vulnerabilities like ASCII Smuggling and Hidden Prompt Injection.

### Custom System Prompt Bypasses Default Context
When a `customSystemPrompt` is set, the default `getSystemPrompt` and `getSystemContext` are skipped entirely. This means the custom prompt replaces the default, and the system context isn't appended to an unused default.

### ASK_READ_FILE_STATE_CACHE_SIZE Limit
The `ASK_READ_FILE_STATE_CACHE_SIZE` is set to a small value of 10, indicating a design choice to limit file state caching during permission prompts or limited tool operations.

### Session Search System Prompt Details
The session search system prompt prioritizes exact tag matches, followed by partial matches and semantic similarity, aiming to be inclusive in matching sessions to user queries.

### Session Title Prompt for AI
The session title generation prompt instructs AI to create concise, sentence-case titles between 3-7 words, focusing on clarity and recognizability for users.

### Tengu Basalt 3kr Feature Flag
The feature flag 'tengu_basalt_3kr' is used to control the MCP instructions delta feature. It defaults to false unless overridden by an environment variable or specific user type.

### MCP Instructions Delta Toggle
The MCP instructions delta feature can be toggled using the environment variable 'CLAUDE_CODE_MCP_INSTR_DELTA'. This allows local testing to bypass the GrowthBook gate.

### Sensitive Env Vars Stripped in Subprocesses
Sensitive environment variables are stripped from subprocess environments to prevent prompt-injection attacks, but GITHUB_TOKEN is intentionally not scrubbed to allow GitHub API calls.

### Autonomous Mode Log Title Handling
The function `getLogDisplayTitle` skips the first prompt if it starts with a tick/goal tag, indicating an autonomous mode auto-prompt. It defaults to 'Autonomous session' when no other title is available.

### Git Instructions Controlled by Env Var
The inclusion of git instructions is controlled by the environment variable CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS. If set truthy, git instructions are disabled; if falsy, they are enabled.

### Claude's Large Output Handling Instructions
Claude's instructions for handling large outputs require reading the entire content sequentially and adjusting chunk sizes to avoid truncation. The instructions emphasize not proceeding until all content is read, highlighting a strict requirement for data completeness.

### CLAUDE.md File Loading Order
Files are loaded in a specific order for CLAUDE.md, with local memory files having the highest priority. This order affects how instructions are processed, with more recent files taking precedence.

### Branded Type for System Prompts
The system prompt arrays are branded with a unique type 'SystemPrompt', ensuring they are treated distinctly within the codebase. This branding is dependency-free, preventing circular initialization issues.

### Secret Feature Flag: Tengu Auto Mode
The codebase includes a hidden feature flag 'tengu_auto_mode_opt_in_dialog_accept' for an 'Auto Mode' that lets Claude handle permission prompts automatically. This mode is ideal for long-running tasks but slightly more expensive and recommended only for isolated environments.

### Sticky Text Cap Limit
The 'VirtualMessageList' component imposes a cap of 500 characters on sticky text prompts. This limit is likely intended to manage performance and memory usage when handling large text inputs.

### VSCode Terminal Support Check
The ShowInIDEPrompt component includes a check for VSCode terminal support using isSupportedVSCodeTerminal(). This affects whether a 'Save file to continue…' message is shown, indicating conditional UI behavior based on IDE support.

### Claude In Chrome Permission Sync
The `usePromptsFromClaudeInChrome` hook syncs permission mode changes directly to the Claude for Chrome extension using an internal RPC call. This behavior is not detailed in public documentation.

### Paste Completion Timeout Set to 100ms
The paste handler in Claude uses a completion timeout of 100 milliseconds. This short timeout helps manage the paste state and ensures that pasted content is processed promptly.

### Undercover Mode in Git Commit Protocol
The commit command includes a hidden 'undercover' mode, activated when the USER_TYPE is 'ant' and isUndercover() returns true. This mode prepends special instructions to the commit prompt.

### Hidden Plugin Marketplace Flag
The `createMovedToPluginCommand` function includes a hidden feature flag `getPromptWhileMarketplaceIsPrivate`. This flag provides a prompt for external users while the marketplace is private, indicating a phased rollout strategy.

### TENGU Feature Flag for Security Dialog
The code references a feature flag 'tengu_managed_settings_security_dialog_shown' that logs when a security dialog is displayed for dangerous settings. This suggests an internal tracking mechanism for user interactions with security prompts.

### Forked Agent Pattern for Memory Extraction
The `extractMemories.ts` file uses a 'forked agent pattern' to extract durable memories from the session transcript. This pattern creates a perfect fork of the main conversation, sharing the parent's prompt cache, and runs once at the end of each query loop. This is not documented publicly and shows a unique approach to memory management.

### Channel Permission Relay Mechanism
The code implements a channel permission relay mechanism where permission prompts are sent over channels like Telegram and Discord. This mechanism races the reply against local UI responses, with the first resolver winning.

### Tengu Prompt Suggestion Feature Flag
The 'tengu_prompt_suggestion_init' feature is controlled by an environment variable 'CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION' and a feature flag 'tengu_chomp_inflection'. It is disabled in non-interactive sessions and for swarm teammates.

### Prompt Too Long Error Parsing
The system has a specific error message 'Prompt is too long' and a parsing function to extract token counts from error messages, indicating a strict token limit enforcement.

### AutoDream Independent of KAIROS
AutoDream's consolidation prompt is designed to function independently of KAIROS feature flags, allowing it to be shipped separately and not be reliant on KAIROS being enabled.

### Automatic Settings Schema Generation
The updateConfig.ts file includes a function to generate a JSON schema from a Zod schema, ensuring that the skill prompt remains in sync with actual types. This highlights a commitment to consistency and accuracy in configuration management.

### Skillify Prompt's Detailed User Interaction
The 'Skillify' feature involves a detailed multi-step process to convert user sessions into reusable skills, including analyzing sessions and interviewing users with specific constraints, such as using 'AskUserQuestion' for all inquiries.

### Simplify Prompt's Parallel Review Agents
The 'Simplify' feature uses three parallel agents for code review: Code Reuse, Code Quality, and Efficiency. Each agent has specific tasks, such as identifying redundant state or unnecessary work.

### Compact Command Behavior Divergence
The 'compact' command clears conversation history while keeping a summary in context. It supports non-interactive use and can take optional custom summarization instructions, which is not commonly documented.

### Ultrareview Overage Dialog Details
The Ultrareview feature includes a dialog that prompts users when their free ultrareviews are exhausted, offering a pay-per-use option. The minimum balance required is $10.

### Ultrareview Session Overage Handling
Once a user confirms overage billing in a session, subsequent '/ultrareview' commands proceed without re-prompting. This is controlled by the 'sessionOverageConfirmed' flag.

### Haiku-Based Session Name Generation
Session names are generated using a haiku-based system prompt, requiring a short kebab-case name that captures the conversation's main topic. This is an unusual and creative approach to naming.

### SDK Control Initialize Request Schema Details
The `SDKControlInitializeRequestSchema` includes optional fields like `sdkMcpServers`, `jsonSchema`, and `systemPrompt`, which are not commonly documented. These fields allow for advanced configuration of SDK sessions, such as specifying MCP servers and custom prompts.

### Max Display Characters Limit in Prompts
The UserPromptMessage component has a hard cap of 10,000 characters for displayed prompt text, with truncation applied to both the head and tail of the text. This design decision is aimed at reducing keystroke latency.

### Hidden Survey States in Feedback System
The survey system includes hidden states like 'transcript_prompt', 'submitting', and 'submitted', which are not publicly documented. These states manage transitions and user interactions in the feedback process.

### System Prompt Length Requirements
System prompts for agents must be between 20 and 10000 characters. This ensures prompts are neither too brief nor excessively verbose.

### Agent Creation System Prompt Details
The 'AGENT_CREATION_SYSTEM_PROMPT' provides detailed steps for crafting AI agents, including extracting core intent and designing expert personas. It emphasizes project-specific context from 'CLAUDE.md' files.

### Dynamic Capabilities in CapabilitiesSection
CapabilitiesSection dynamically generates a list of capabilities (tools, resources, prompts) based on serverToolsCount, serverResourcesCount, and serverPromptsCount. This dynamic generation is not explicitly documented.

### Default Feedback Placeholders in Permission Prompts
The PermissionPrompt component uses default placeholders for feedback inputs: 'tell Claude what to do next' for accept feedback and 'tell Claude what to do differently' for reject feedback. These defaults are used unless overridden.

### Sandbox Doctor Internal Commands
The SandboxDoctorSection component uses internal commands to check for missing dependencies and provides instructions to run '/sandbox' for installation.

### Sandbox Violation Notification Timeout
The `SandboxPromptFooterHint` component uses a timeout of 5000 milliseconds to reset the recent violation count to zero after displaying a notification about sandbox violations. This behavior is not documented publicly.

### Shift+Enter Keybinding Detection
The `getNewlineInstructions` function provides different newline instructions based on the terminal environment and whether a Shift+Enter keybinding is installed. This nuanced behavior is not publicly documented.

### Secret Issue Flag Banner for Internal Use
The `IssueFlagBanner` component is marked as 'ANT-ONLY', indicating it's an internal feature that prompts users to report issues when friction is detected in conversations. This banner is not intended for public use.

### Hidden TCC Panel in Computer Use Approval
The ComputerUseApproval component includes a hidden TCC panel that prompts users to open macOS System Settings for Accessibility and Screen Recording permissions. This behavior is not publicly documented.

### Agent System Prompt Truncated to 240 Characters
The system prompt for agents is truncated to 240 characters in the ConfirmStep component. This truncation is not mentioned in public documentation, potentially affecting how users craft prompts.

### Auto Mode Critique System Prompt
The auto mode critique system prompt is designed to evaluate user-written rules for clarity, completeness, conflicts, and actionability. This internal prompt guides the critique process, ensuring a structured evaluation of rules.

### IT2 Setup Prompt Handles Python Package Managers
The IT2 Setup Prompt dynamically detects Python package managers like uvx, pipx, or pip, and adjusts its installation process accordingly. This flexibility is not commonly documented.

### Teammate System Prompt Requires SendMessage Tool
The teammate system prompt addendum mandates using the SendMessage tool for communication, emphasizing that text responses alone are invisible to teammates. This strict requirement is not publicly emphasized.

### Denial Tracking Limits in Permission System
The permission system tracks denials with specific limits: a maximum of 3 consecutive denials and 20 total denials before falling back to prompting the user.

### Security Check for Static Redirect Targets
The `isStaticRedirectTarget` function ensures security by rejecting redirect targets containing whitespace or quote characters, which indicate dynamic content. This prevents unsafe paths from being stripped and ensures they remain visible in permission prompts.

### MCP Tool Names Bypass Permission Prompts
The `mcp__computer-use__*` tool names are added to `allowedTools` to bypass normal permission prompts. This is managed by the package's `request_access` handling approval for the entire session.

### Escape Hotkey System-Wide Capture
The 'registerEscHotkey' function captures the Escape key system-wide using CGEventTap, preventing prompt-injected actions from dismissing dialogs with Escape. This feature is not documented publicly.

### App Names Filtering for Security
The appNames.ts file filters installed apps to avoid noise and prompt-injection risks. It uses allowlists and blocklists to ensure only relevant apps are shown, which is not detailed in public documentation.

### Default HTTP Hook Timeout is 10 Minutes
The default timeout for HTTP hooks is set to 10 minutes, aligning with the TOOL_HOOK_EXECUTION_TIMEOUT_MS. This long timeout could impact system responsiveness if hooks are not completed promptly.

### Surprising Hook Timeout Default
The execPromptHook function defaults to a 30-second timeout if no specific timeout is provided for a hook. This is longer than typical defaults in similar systems, which often use 10 or 15 seconds.

### Environment Variable for User Prompt Logging
The code checks for an environment variable 'OTEL_LOG_USER_PROMPTS' to determine if user prompt logging is enabled, which is not mentioned in public documentation.

### Deep Link Security Measures
Claude Code's deep link parser includes security measures to sanitize Unicode and reject inputs with ASCII control characters. It also enforces a 5000-character limit on pre-filled prompts to prevent malicious command injections.

### MCP Tool Overrides in mcpClient.ts
The MCPTool's name, description, prompt, and other properties are overridden in mcpClient.ts, suggesting a dynamic configuration not visible in the current source.

### Durable Cron Feature Flag
The prompt for the CronListTool is built using the 'isDurableCronEnabled' flag, indicating a hidden feature related to durable cron jobs that may not be publicly documented.

### Fork Subagent Feature Gate
The 'FORK_SUBAGENT' feature flag enables a fork subagent feature where omitting 'subagent_type' triggers an implicit fork, inheriting the parent's conversation context and system prompt. This feature is mutually exclusive with coordinator mode.

### Sleep Tool API Call Cost
The Sleep Tool incurs an API call cost for each wake-up, with a prompt cache that expires after 5 minutes of inactivity. This design choice affects how users might manage tool usage to optimize costs.

### KAIROS and KAIROS_BRIEF Feature Flags
The code uses feature flags 'KAIROS' and 'KAIROS_BRIEF' to determine if brief tool names should be loaded. These flags control whether certain tool prompts are imported and used.

### FileReadTool Max Lines to Read
The FileReadTool has a hard limit of 2000 lines for reading files. This limit is set to prevent excessive data processing and is mentioned in the tool's prompt template.

### Secret Feature Flag: tengu_amber_wren
The 'tengu_amber_wren' feature flag is used to override default file reading limits. This flag can modify 'maxSizeBytes', 'maxTokens', and 'includeMaxSizeInPrompt' settings, affecting how file reads are processed.

### Prompt Patterns for Stall Notification
The LocalShellTask uses specific prompt patterns to detect when a command is blocked waiting for input, such as `(y/n)`, `[y/n]`, and `Do you...` style questions.

### MCP Server's Hidden Tools and Commands
The MCP server exposes 8 tools and 5 prompts for navigating the Claude Code codebase, including `list_tools`, `get_tool_source`, and `search_source`, which are not publicly documented.

### Memory System Injection Mechanism
The memory system in Claude Code uses `.claude.md` and `CLAUDE.md` files to inject persistent memory into system prompts. This mechanism supports project-level, user-level, and session-level memory, which is not detailed in public documentation.

### Unresolved Macro Reference: MACRO.ISSUES_EXPLAINER
The source code references a macro `MACRO.ISSUES_EXPLAINER` that is not properly resolved, indicating a potential oversight or missing component in the system prompt construction.

### Unique Pasted Text Reference Behavior
The code uses numeric, auto-incrementing IDs for pasted text references within a single prompt, which are not unique across prompts. This could lead to confusion if users expect global uniqueness.

### Conditional Devtools Import in Development
In development mode, the code attempts to import `react-devtools-core` conditionally to avoid breaking third-party code. If not installed, a warning is logged with installation instructions.

### Secret Migration Flag: tengu_migrate_bypass_permissions_accepted
The codebase contains a secret feature flag 'tengu_migrate_bypass_permissions_accepted' used for logging during the migration of 'bypassPermissionsModeAccepted' to 'skipDangerousModePermissionPrompt'. This indicates a controlled migration process with tracking.

### Explanatory Feature Prompt for Educational Insights
The Explanatory feature prompt encourages Claude Code to provide educational insights before and after writing code. It uses a specific format with backticks and stars to highlight key points.

### Pewter Ledger Variant Experiment Details
The 'tengu_pewter_ledger' experiment controls plan file structure prompts with variants 'trim', 'cut', and 'cap', affecting plan file size and session-level costs.

### Custom System Prompt Overrides Default
The function `fetchSystemPromptParts` allows a `customSystemPrompt` to completely override the default system prompt and system context. If `customSystemPrompt` is set, `getSystemPrompt` and `getSystemContext` are skipped entirely.

### Fast Mode Requires Specific Authentication
Fast Mode is restricted based on authentication type. OAuth users may face 'extra_usage_disabled', while API key users are prompted to purchase credits. This behavior is not clearly outlined in public documentation.

### Hidden Feature Flag: tengu_basalt_3kr
The feature flag 'tengu_basalt_3kr' is used to control the enabling of MCP instructions delta. It defaults to false unless overridden by environment variables or specific user types.

### MCP Instructions Delta Environment Override
The environment variable 'CLAUDE_CODE_MCP_INSTR_DELTA' can force the enabling or disabling of MCP instructions delta, overriding other settings and feature flags.

### CacheSafeParams for Forked Agents
Forked agents must match certain parameters with the parent request to share prompt cache hits. These include system prompt, user context, system context, and tool use context.

### Hook Timeout Values
The hook schemas include optional timeout values for both command and prompt hooks, which are not specified in public documentation.

### Desktop Handoff Requires User Confirmation
The DesktopHandoff component prompts users to confirm ('y'/'n') before initiating a download of the Claude Desktop app if it's not installed, indicating a manual step in the process.

### Tengu Auto Mode Feature Flag
The 'tengu_auto_mode_opt_in_dialog' feature flag logs events when users accept or decline auto mode, which lets Claude handle permission prompts automatically. This is not publicly documented.

### Symlink Warning Message Logic
The 'ShowInIDEPrompt' component warns users if a symlink target is outside the working directory, using 'relative(getCwd(), symlinkTarget).startsWith("..")'.

### Claude Chrome Extension Prompt Notification Schema
The Claude for Chrome extension uses a specific JSON-RPC 2.0 schema for prompt notifications, which includes optional image data in base64 format and an optional tabId. This schema is not publicly documented.

### Evolution of CLAUDE.md Init Prompts
The init command has evolved from a detailed prompt to a more concise version, focusing on minimal necessary information for CLAUDE.md. The new prompt emphasizes user interaction to determine setup preferences, including options for personal and project CLAUDE.md files.

### Undercover Mode for Git Operations
The code includes a hidden 'undercover' mode for git operations, activated when the USER_TYPE is 'ant'. This mode alters commit behavior by prepending specific instructions from getUndercoverInstructions().

### Private Marketplace Prompt for Plugin Commands
The `createMovedToPluginCommand` function includes a `getPromptWhileMarketplaceIsPrivate` parameter, indicating a private marketplace phase. This suggests a transitional state where certain commands are moved to plugins, but the marketplace is not yet public.

### Aggressive No-Tools Preamble
The code includes an aggressive preamble that explicitly forbids tool usage, with specific instructions to respond with text only. This is likely to prevent wasted turns due to tool call rejections, which occur 2.79% of the time on Sonnet 4.6.

### Skill Model Variables for Claude
The source code reveals specific model IDs and names like 'claude-opus-4-6' and 'claude-sonnet-4-6', which are used for substituting placeholders in skill prompts.

### Error Step Manual Instructions
The `ErrorStep` component provides a link to manual setup instructions for GitHub Actions, which is not commonly highlighted in public documentation. It points users to a specific URL for further guidance.

### Dynamic Text Input Sizing Based on Terminal
The text input field size dynamically adjusts based on terminal size, ensuring optimal user experience. The input field is set to a minimum of 50 columns or the terminal's width minus the length of a prompt message and padding.

### Ultrareview Overage Billing Logic
Ultrareview sessions bypass overage prompts once confirmed, allowing uninterrupted usage. Team and Enterprise plans automatically proceed without quota checks.

### Kebab-Case Session Name Generation
The generateSessionName function uses a system prompt to create short kebab-case names for sessions, like 'fix-login-bug'. This is done through the 'queryHaiku' API.

### Private Marketplace Prompt for PR Comments
The `pr-comments` command includes a detailed prompt for when the marketplace is private, suggesting internal testing or limited access scenarios.

### Managed Settings Security Dialog Warnings
The ManagedSettingsSecurityDialog warns users that their organization's settings could allow execution of arbitrary code or interception of prompts and responses. This internal warning suggests significant security implications that may not be fully disclosed.

### Transcript Share Prompt Options
The transcript share prompt offers three options: 'yes', 'no', and 'don't ask again', mapped to inputs '1', '2', and '3'.

### Agent Navigation Default Instructions
The AgentNavigationFooter component has a default instruction set for navigation, which includes using arrow keys and Enter/Esc for selection and navigation. This is not mentioned in any public-facing documentation.

### Sandbox Dependency Check Behavior
The `SandboxDoctorSection` component checks for missing dependencies and provides specific instructions if errors are found. It uses a `depCheck` object to determine if there are errors or warnings, and displays a message with install instructions if errors exist.

### ANT-ONLY Issue Flag Banner
The 'IssueFlagBanner' is an internal-only feature ('ANT-ONLY') that prompts users to report issues when friction is detected. This suggests internal monitoring of user interactions.

### Overlay Max Items Limit Set to 5
The 'PromptInputFooterSuggestions.tsx' file sets a limit for overlay maximum items to 5, which could affect how many suggestions are visible to users at once.

### Wizard Step Timeout Mechanism
The wizard steps use a caching mechanism with a timeout value of 20 for 'PromptStep' and 18 for 'DescriptionStep'. These specific numbers suggest a deliberate design choice for managing state persistence across wizard steps.

### Secret 'tengu_input_prompt' Event Logging
The code logs a 'tengu_input_prompt' event with flags 'is_negative' and 'is_keep_going' based on user input. This event is not publicly documented and seems to be used for internal analysis of user prompts.

### OTEL Event Logs Last Text Block
For array inputs, the OTEL 'user_prompt' event logs the last text block, not the first. This differs from previous behavior and is not documented, potentially affecting how prompt data is analyzed.

### MCP Computer Use Tools Bypass Permissions
The `mcp__computer-use__*` tools are added to `allowedTools` to bypass normal permission prompts. This is managed by the package's `request_access` which handles approval for the whole session.

### Global Escape Hotkey with System-Wide Consumption
The `registerEscHotkey` function registers a global Escape hotkey that consumes the Escape key system-wide. This is a PI defense mechanism to prevent prompt-injected actions from dismissing dialogs with Escape. It uses CGEventTap via `@ant/computer-use-swift` and holds a drainRunLoop pump retain for its lifetime.

### Hook Timeout Design Decision
The `execPromptHook` function defaults to a 30-second timeout for hooks if no specific timeout is provided. This is set by `const hookTimeoutMs = hook.timeout ? hook.timeout * 1000 : 30000`.

### Deep Link Banner Prefill Threshold
The deep link banner switches its message if a pre-filled prompt exceeds 1000 characters, warning users to scroll and review the entire prompt. This threshold is not publicly documented.

### Max Query Length for Deep Links
The maximum length for a pre-filled prompt in a 'claude-cli://' URI is capped at 5000 characters to prevent security issues and ensure readability.

### Minimal Uniqueness Hint for 'ant' User Type
The FileEditTool has a special instruction for users with the 'ant' user type, suggesting them to use the smallest old_string that's clearly unique, usually 2-4 adjacent lines. This hint is not provided to other user types.

### Worktree Session Persistence Logic
If a session remains in a worktree upon exit, the user is prompted to keep or remove it. This persistence logic is not widely advertised.

### Undercover Instructions for 'ant' Users
The code contains special 'undercover' instructions for users identified as 'ant'. These instructions ensure that internal codenames are not leaked in commit messages, even if git instructions are disabled.

### Status Line System Prompt
The STATUSLINE_SYSTEM_PROMPT is a detailed internal guide for converting shell PS1 configurations to Claude Code settings, including specific regex patterns and escape sequence conversions.

