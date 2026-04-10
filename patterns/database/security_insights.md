# Security Insights

*Clean-room distillation of 368 insights regarding security.*

---

### JWT-Authenticated Bridge Protocol for Cloud Sync
The Bridge Protocol uses JWT-authenticated WebSocket/SSE connections for cloud-synced sessions, indicating a secure, scalable approach to remote session management that might not be obvious to users.

### Claude's Plugin Trust Model with Approval Flow
The plugin system includes a trust model with an approval flow, suggesting a rigorous vetting process for third-party plugins to ensure security and reliability.

### Bypass Permissions Mode Exists
The permission mode schema includes a 'bypassPermissions' mode, which allows operations without user consent. This mode is not mentioned in public documentation, raising questions about its intended use.

### MCP Server Status Includes 'Needs-Auth'
The MCP server status schema includes a 'needs-auth' status, indicating that some servers require authentication before use. This status is not commonly discussed in user-facing materials.

### Control Request Subtypes Reveal Hidden Features
Control request schemas include subtypes like 'set_max_thinking_tokens' and 'elicitation', which suggest features for managing thinking budgets and eliciting information that are not publicly detailed.

### Kairos Brief Mode Requires Entitlement
The 'brief-only mode' is feature-gated via 'KAIROS' or 'KAIROS_BRIEF' flags and requires entitlement checks through 'isBriefEntitled()'. This ensures only authorized users can toggle this mode.

### Tengu Logging for Bypass Permissions
The `BypassPermissionsModeDialog.tsx` component logs specific events using the 'tengu_' prefix, such as 'tengu_bypass_permissions_mode_dialog_shown' and 'tengu_bypass_permissions_mode_dialog_accept'. This suggests internal tracking of permission bypass usage.

### Redaction of Sensitive Information
The 'redactSensitiveInfo' function in the 'Feedback' component uses regex to strip API keys starting with 'sk-ant-...' before submission. This shows a proactive approach to privacy and security.

### Classifier Auto-Approve Animation at 20fps
The BashPermissionRequest component includes an animated shimmer text 'Attempting to auto-approve…' that runs at 20fps. This animation is isolated to prevent full-dialog re-renders, indicating a focus on performance optimization even in minor UI elements.

### Tengu Permission Request Logging
The permission request logging system uses a 'tengu_permission_request_start' event on mount and 'tengu_permission_request_end' on unmount. This suggests an internal feature or system named 'tengu' related to permission handling.

### Sed Edit Detection in Bash Permissions
The BashPermissionRequest component can detect 'sed' edit patterns and delegates these to a specialized SedEditPermissionRequest component. This indicates a nuanced handling of potentially destructive commands, ensuring additional scrutiny.

### Hidden Session Flags in Claude Code
The source code reveals hidden session flags such as 'sessionBypassPermissionsMode' and 'sessionPersistenceDisabled'. These flags are not publicly documented and suggest internal capabilities for bypassing permissions and disabling session persistence.

### Security Gates Use Blocking Cache
Security gates use a `_CACHED_OR_BLOCKING` mechanism that awaits initialization before returning cached values. This ensures security policies are enforced even if it means blocking operations, a behavior not typically highlighted in public documentation.

### Proto Fields Stripped for Non-1P Destinations
Event metadata keys starting with `_PROTO_` are stripped before being sent to non-first-party destinations like Datadog. This selective data handling is not publicly documented and reflects internal data privacy practices.

### Voice Recording Requires Rapid Key Presses
Voice recording activation requires 5 rapid keydowns for bare-char bindings, but only 2 for modifier combos. This threshold ensures accidental activation is minimized, but may surprise users expecting immediate response.

### Persistent CharCache Across Frames
The `charCache` in Claude's `Output` instance persists across frames, allowing for significant performance optimizations in text-heavy content. This persistence is a key performance feature not highlighted in public documentation.

### Bridge Mode Exclusivity for Subscribers
The 'isBridgeEnabled' function restricts bridge mode to Claude.ai subscribers, excluding Bedrock/Vertex/API key users. This exclusivity is enforced through a combination of build flags and GrowthBook feature gates.

### OAuth 401 Retry Mechanism
The API client retries OAuth 401 errors once if a token refresh succeeds. If the retry also fails with a 401, it throws a 'BridgeFatalError'. This retry mechanism is not widely documented and indicates a built-in resilience to temporary authentication failures.

### V2 Sessions Use JWT Refresh Strategy
V2 sessions employ a proactive JWT refresh strategy, where a scheduler triggers a refresh 5 minutes before expiry, calling `api.reconnectSession()` to obtain a fresh JWT. This differs from V1 sessions, which update the OAuth token directly.

### Hidden AI Permission Decisions via TRANSCRIPT_CLASSIFIER
The permissions system integrates a feature flag called 'TRANSCRIPT_CLASSIFIER' which allows AI-based decisions for permissions. This feature is not publicly documented and suggests AI is used to dynamically determine permissions based on transcripts.

### Emergency Bypass Permissions Killswitch Exists
The permissions system includes an emergency 'bypassPermissionsKillswitch' which can disable the bypass permissions mode. This suggests a safety mechanism to prevent unauthorized access if the bypass mode is misused.

### Hardcoded Dangerous Bash Patterns Require Approval
The permissions system uses a list of 'DANGEROUS_PATTERNS' as regular expressions to identify bash commands that always need explicit approval. This hardcoded list is a security measure to prevent potentially harmful operations.

### YOLO Classifier Auto-Approves Commands
The 'yoloClassifier' is a component that auto-approves most commands when in 'bypass permissions' mode. This indicates a relaxed mode where permissions are broadly granted, potentially for testing or development purposes.

### Robust Security for Team Memory Paths
Team memory paths are protected with heavy security measures against path traversal attacks, including custom error handling and symlink validation. This level of security is not commonly expected in memory path handling.

### Hot-Reload Feature for Keybindings
Claude's keybinding system supports hot-reloading of user-defined keybindings using the 'chokidar' file watcher. This feature allows for dynamic updates without restarting the application, which is not typically available in similar systems.

### Escape Key Quirk in Ink
In the Ink framework, pressing the escape key sets 'key.meta = true', a legacy behavior that could lead to unexpected results in key matching logic.

### Platform-Specific Keybinding Differences
The 'IMAGE_PASTE_KEY' and 'MODE_CYCLE_KEY' have different bindings based on the platform, with 'alt+v' for Windows and 'ctrl+v' for others, and 'meta+m' for Windows without VT mode versus 'shift+tab' for others.

### Null-Unbinding in Chord Handling
A null override on a chord prevents its prefix from entering chord-wait, showing a unique approach to handling keybinding conflicts.

### Binary Detection Uses 10% Non-Printable Threshold
The `isBinaryContent` function detects binary files by checking if more than 10% of the first 8192 bytes are non-printable and non-whitespace characters. This threshold is a key design choice for distinguishing binary content.

### Secret GrowthBook Client Keys Revealed
The code reveals three distinct GrowthBook SDK client keys used internally: 'sdk-yZQvlplybuXjYh6L' for development, 'sdk-xRVcrliHIlrg4og4' for production 'ant' users, and 'sdk-zAZezfDKGoZuXXKe' for external users. These keys are dynamically selected based on user type and environment flags.

### Future-Dated OAuth Beta Header Found
An OAuth beta feature header 'oauth-2025-04-20' suggests that Anthropic is planning or testing features well into the future, indicating long-term strategic planning.

### Strict OAuth Custom URL Restrictions
The OAuth configuration restricts custom URLs to a specific allowlist, including 'https://beacon.claude-ai.staging.ant.dev' and 'https://claude.fedstart.com', to prevent OAuth tokens from being sent to arbitrary endpoints.

### Claude's Hard Token Limit Revealed
The Rust codebase sets a hard limit on tokens with `MAX_TOKENS_HARD_LIMIT` set to `65,536`. This is the absolute maximum number of tokens Claude can process in a single operation.

### Automatic Permission Handling Modes
The `AutoPermissionHandler` can automatically allow or deny permissions based on predefined modes like `BypassPermissions`, `AcceptEdits`, and `Plan`, which could lead to unexpected behavior in automated environments.

### High Pricing for OPUS Model
The `OPUS` model is priced at $15.00 per million input tokens and $75.00 per million output tokens, significantly higher than other models, indicating a premium service tier.

### 200K-Token Context Window
Claude Code manages a 200K-token context window with automatic compaction, a significant capacity that exceeds typical limits in similar systems.

### Internal Feature Flags: ENABLE_KITTY_KEYBOARD, ENABLE_MODIFY_OTHER_KEYS
The source code reveals internal feature flags such as ENABLE_KITTY_KEYBOARD and ENABLE_MODIFY_OTHER_KEYS, which are not documented publicly. These flags suggest support for specific terminal features that may not be widely advertised.

### REPL Bridge to Remote Control Migration
The migration function 'migrateReplBridgeEnabledToRemoteControlAtStartup' changes the config key 'replBridgeEnabled' to 'remoteControlAtStartup'. This indicates a shift from a developer-focused feature to a more user-facing configuration.

### Hidden Feature Flag: TRANSCRIPT_CLASSIFIER
The code contains a hidden feature flag 'TRANSCRIPT_CLASSIFIER' that, when enabled, adds 'auto' to the INTERNAL_PERMISSION_MODES. This suggests the presence of an experimental or internal feature related to automatic permission mode classification.

### Internal Permission Modes: Auto and Bubble
In addition to external permission modes, there are internal modes 'auto' and 'bubble' that are not exposed to users. These might be used for internal testing or advanced configurations.

### Hidden Keybinding Contexts Revealed
The source code reveals several keybinding contexts not publicly documented, such as 'Attachments', 'Footer', 'MessageSelector', 'DiffDialog', 'ModelPicker', 'Select', and 'Plugin'. These contexts suggest additional functionality or UI elements that are not widely known.

### Meta and Alt Modifier Handling Quirk
In the keybinding matching logic, both 'meta' and 'alt' modifiers are treated as aliases due to terminal limitations, meaning either can trigger a binding if 'key.meta' is true. This could lead to unexpected behavior if users expect distinct handling.

### Secret Keybinding Customization Feature
The keybinding customization feature is controlled by the 'tengu_keybinding_customization_release' flag and is only available to Anthropic employees. External users are restricted to default keybindings.

### File Stability Threshold for Keybindings
The system waits 500 milliseconds for file writes to stabilize before reloading keybindings, with a polling interval of 200 milliseconds.

### Daily Custom Keybindings Log
A telemetry event logs custom keybindings usage once per day to estimate user customization rates.

### Secret 'tengu_keybinding_fallback_used' Event
The code logs a 'tengu_keybinding_fallback_used' event when a keybinding action isn't found, using a fallback. This is part of a migration safety net, suggesting an internal feature codenamed 'tengu'.

### Keybinding Fallback Migration Strategy
The code includes a fallback parameter for keybindings as a safety net during migration. This is meant to be removed once no 'keybinding_fallback_used' events are logged, indicating a cautious approach to feature rollouts.

### Ink Meta Key Quirk with Escape Key
The code notes a quirk where Ink sets key.meta=true when the escape key is pressed, due to legacy terminal behavior. This is explicitly handled to prevent chord matching issues.

### Platform-Specific Keybindings for Image Paste
The default keybinding for pasting images is platform-specific: 'alt+v' on Windows and 'ctrl+v' on other platforms. This behavior is not commonly known and could affect cross-platform consistency.

### VT Mode Support Alters Keybindings
Claude Code changes the mode cycle shortcut based on VT mode support: 'shift+tab' if supported, otherwise 'meta+m'. This is due to reliability issues with 'shift+tab' on Windows Terminal without VT mode.

### Ant-Only Development Overrides for Bridge Config
The code includes ant-only development overrides for OAuth tokens and base URLs, which are activated when `process.env.USER_TYPE` is set to 'ant'. This suggests a special internal environment for testing or development.

### Trusted Device Token in Bridge API Calls
Bridge API calls can include a trusted device token for elevated security tiers. This is controlled by the `tengu_sessions_elevated_auth_enforcement` flag, indicating a layered security approach.

### Static Anthropic-Version Header
The `oauthHeaders` function includes a static `anthropic-version` header set to '2023-06-01'. This hardcoded versioning could imply a fixed API version or a lack of dynamic version negotiation.

### Secret Redaction Pattern in Debugging
The `redactSecrets` function uses a regex pattern to redact sensitive fields like `access_token` and `secret`. Values shorter than 16 characters are fully redacted, while longer values are partially redacted.

### Token Refresh Scheduler with Buffer
The token refresh scheduler proactively refreshes session tokens 5 minutes before expiry, a detail not covered in public documentation.

### Trusted Device Token Gate for Elevated Sessions
The 'tengu_sessions_elevated_auth_enforcement' feature flag controls whether the CLI sends an X-Trusted-Device-Token during bridge sessions, which have an elevated security tier on the server. This allows staged rollouts by enabling CLI-side headers before server-side enforcement.

### Bridge Permission Callbacks for Remote Control
The BridgePermissionCallbacks type defines methods for handling permission requests and responses in remote control sessions. It includes methods like sendRequest, sendResponse, and cancelRequest, which manage the lifecycle of permission interactions.

### SDK URL Construction for Local vs Production
Bridge constructs WebSocket SDK URLs differently for localhost versus production environments. Localhost uses 'ws' and '/v2/', while production uses 'wss' and '/v1/', reflecting different routing and security considerations.

### Hidden OAuth Configurations for 'ant' Users
The OAuth configuration can switch between 'prod', 'staging', and 'local' based on environment variables, but only if the 'USER_TYPE' is 'ant'. This indicates special configurations for internal users or developers.

### Console OAuth Scopes Include API Key Creation
The 'CONSOLE_OAUTH_SCOPES' include 'org:create_api_key', allowing API key creation via the console. This scope is crucial for managing access and automation.

### Hidden GrowthBook Dev Key
The GrowthBook client key switches based on the environment variable ENABLE_GROWTHBOOK_DEV. If set to true, it uses 'sdk-yZQvlplybuXjYh6L', otherwise 'sdk-xRVcrliHIlrg4og4'.

### Direct Connect Session Creation
The `createDirectConnectSession` function establishes a session on a direct-connect server, using a POST request to `${serverUrl}/sessions`. It can skip permissions if `dangerouslySkipPermissions` is true, and throws `DirectConnectError` on failures.

### Auth Routing via ANTHROPIC_UNIX_SOCKET
The 'claude ssh' command routes authentication through 'ANTHROPIC_UNIX_SOCKET', indicating a specialized mechanism for handling authentication over SSH tunnels, potentially bypassing standard auth methods.

### JSON Parse Cache Limited to 8KB Keys
The JSON parse cache skips caching for strings larger than 8KB to avoid excessive memory usage. This is a design decision to prevent large inputs from pinning significant memory.

### Prewarm Native Module for Modifier Keys on macOS
The `prewarmModifiers` function preloads a native module on macOS to avoid delays on first use. It dynamically imports the module to check if a modifier key is pressed.

### mTLS Config Loaded from Environment Variables
The mTLS configuration is dynamically loaded from environment variables like `CLAUDE_CODE_CLIENT_CERT` and `CLAUDE_CODE_CLIENT_KEY`. This allows for flexible deployment configurations without hardcoding sensitive information.

### StaticKeybindingProvider Avoids ChordInterceptor
The StaticKeybindingProvider component is designed to provide keybinding context without using the ChordInterceptor, which would hang in headless renders due to lack of stdin. This is a deviation from typical keybinding implementations that rely on user input.

### Ant-Only Context Window Override
Internal users ('ants') can override the context window size using the 'CLAUDE_CODE_MAX_CONTEXT_TOKENS' environment variable, which takes precedence over all other context window settings.

### SDK Betas Restricted to API Key Users
The function 'filterAllowedSdkBetas' restricts SDK-provided betas to API key users only, warning that custom betas are unavailable to subscribers. This behavior is not publicly documented.

### CCR Token Directory for Subprocess Access
The code defines a specific directory `/home/claude/.claude/remote` for storing OAuth and API tokens, which is only used in the Claude Code Remote (CCR) environment. This setup allows subprocesses to access tokens without inheriting file descriptors, which don't cross tmux/shell boundaries.

### Hardcoded GCS Bucket URL for Releases
The code contains a hardcoded Google Cloud Storage bucket URL for Claude Code releases: 'https://storage.googleapis.com/claude-code-dist-86c565f3-f756-42ad-8dfa-d59b1c096819/claude-code-releases'. This could be a potential security risk if not properly managed.

### API Key Removal from macOS Keychain
The function `maybeRemoveApiKeyFromMacOSKeychainThrows` attempts to remove an API key from the macOS keychain using the `security` command. This operation is specific to macOS and throws an error if unsuccessful.

### Synthetic Message Filtering in Token Usage
The function `getTokenUsage` filters out synthetic messages by checking against `SYNTHETIC_MESSAGES` and `SYNTHETIC_MODEL`. This behavior is not documented publicly, indicating a hidden feature to differentiate real from synthetic usage data.

### Token Budget Regex Design
Regex patterns for token budgets avoid lookbehind to maintain performance in JSC. They capture whitespace explicitly instead.

### Image Error Classification Codes
Image processing errors are classified using numeric codes for analytics, with specific codes for module load, permission, and memory errors. This classification is not publicly detailed.

### Request ID Normalization in Control Messages
The normalizeControlMessageKeys function converts camelCase 'requestId' to snake_case 'request_id' for compatibility with older iOS app builds. This ensures messages aren't silently dropped due to mismatched keys.

### Provider Managed Environment Variables
The code includes a set of environment variables under 'PROVIDER_MANAGED_ENV_VARS' that control inference routing, such as 'CLAUDE_CODE_USE_BEDROCK' and 'ANTHROPIC_API_KEY'. These variables are stripped from user settings when 'CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST' is set, preventing user overrides.

### Dangerous Shell Settings
The code identifies certain shell settings as dangerous, capable of executing arbitrary shell code. These include 'apiKeyHelper', 'awsAuthRefresh', and 'gcpAuthRefresh'.

### Legacy Name in AwsAuthStatusManager
The AwsAuthStatusManager retains a legacy name from when it was AWS-only, despite now supporting multiple cloud providers like GCP Vertex. This suggests a historical focus on AWS that may not be immediately obvious from current documentation.

### Hardcoded Fingerprint Salt for Validation
The fingerprint validation process uses a hardcoded salt '59cf53e54c78' which must match exactly for validation to pass. This is a surprising security decision as hardcoding salts can lead to vulnerabilities.

### Warning Keys Limit Set to 1000
The `MAX_WARNING_KEYS` constant is set to 1000, limiting the number of tracked warnings to prevent unbounded memory growth. This specific limit is not mentioned in public documentation.

### Console Billing Access Hidden Logic
The 'hasConsoleBillingAccess' function hides cost reporting for users without authentication or specific roles, and for those with the 'DISABLE_COST_WARNINGS' environment variable set.

### Lazy Import of Proper-Lockfile
The code uses a lazy accessor for the proper-lockfile package to avoid the startup cost of monkey-patching fs methods unless locking is actually needed.

### Early Input Capture in REPL Initialization
The `startCapturingEarlyInput` function captures user input typed before the REPL is fully initialized, ensuring no keystrokes are lost during startup.

### Security Check in Windows Path Resolution
The code includes a security measure to filter out executable paths from the current directory to prevent executing potentially malicious files, highlighting a proactive approach to security.

### Zod Schema Caching Mechanism
The system caches JSON Schema conversions of Zod schemas using a WeakMap to optimize performance. This caching is keyed by schema identity, ensuring that the same schema reference is reused per session.

### Default API Key Cache TTL: 5 Minutes
The default Time-To-Live (TTL) for the API key helper cache is set to 5 minutes (300,000 milliseconds). This design decision affects how frequently API keys are refreshed, balancing performance and security.

### macOS Option Key Special Characters
The code maps macOS Option+key combinations to specific keybindings, such as 'Option+T' to 'thinking toggle'. This is used to detect shortcuts on macOS terminals without 'Option as Meta' enabled.

### BASH and TRANSCRIPT Classifier Feature Flags
Feature flags 'BASH_CLASSIFIER' and 'TRANSCRIPT_CLASSIFIER' are used to determine if certain permission decision reasons should be serialized. These flags are not publicly documented.

### Chrome Extension Permissions Management
The onboarding for 'Claude in Chrome' mentions that site-level permissions are inherited from the Chrome extension, which could lead to unexpected access if not managed carefully.

### Markdown Component Uses Token Cache
The Markdown component uses a token cache to optimize performance, caching up to 500 tokenized markdown strings. This behavior is not publicly documented.

### Memoization in AwsAuthStatusBox
The AwsAuthStatusBox component uses a custom memoization technique with a cache array to store and reuse values like status, unsubscribe functions, and rendered JSX elements. This differs from typical React memoization patterns.

### Tengu Onboarding Events
The onboarding process logs specific events with the prefix 'tengu_', such as 'tengu_began_setup' and 'tengu_onboarding_step'. These events track the onboarding progress and OAuth status.

### Bypass Permissions Mode with 'tengu' Event
The Bypass Permissions Mode in Claude Code triggers a 'tengu_bypass_permissions_mode_dialog_accept' event when accepted. This mode allows execution of potentially dangerous commands without user approval.

### Keybinding Customization Feature Gate
The KeybindingWarnings component is only shown when keybinding customization is enabled, which is controlled by a feature gate for 'ant users'. This suggests a selective rollout or testing phase.

### Deprecated Settings Still in Use
The ConsoleOAuthFlow component relies on 'getSettings_DEPRECATED', indicating legacy settings are still in active use, which could lead to future maintenance challenges.

### Voice Mode Requires Anthropic OAuth
Voice mode functionality is contingent on having a valid Anthropic OAuth token, as it uses endpoints not accessible via API keys.

### Voice Integration with Specific Key Press Thresholds
Voice integration in Claude uses specific constants like `RAPID_KEY_GAP_MS` set to 120ms and `HOLD_THRESHOLD` set to 5 to determine key press behavior for activating voice features.

### Secret 'tengu_toggle_todos' Event Logging
The 'GlobalKeybindingHandlers' component logs an event 'tengu_toggle_todos' when toggling the todo list with Ctrl+T. This suggests a hidden feature or experiment related to task management.

### Security Review Excludes Certain Vulnerabilities
The security review process explicitly excludes reporting on Denial of Service (DOS) vulnerabilities and secrets stored on disk, focusing only on high-confidence, impactful security issues.

### Ultrareview Command for Remote Bug Hunting
The 'ultrareview' command is the only entry point to the remote bughunter path, distinct from the local '/review' command. It runs in 'Claude Code on the web' and includes a permission dialog when free reviews are exhausted.

### Token Budget Thresholds and Limits
The token budget management system uses specific thresholds: a COMPLETION_THRESHOLD of 0.9 and a DIMINISHING_THRESHOLD of 500 tokens. These thresholds dictate when to continue or stop processing based on token usage.

### Token Counting Limits for Thinking Blocks
The code sets specific token counting limits when thinking blocks are enabled, with a minimum budget of 1024 tokens and a maximum of 2048 tokens. This constraint ensures that the thinking process has sufficient resources.

### Lazy Loading of Audio NAPI Module
The audio-capture-napi module is lazy-loaded on the first voice keypress, delaying the load to avoid startup freezes. This can block the event loop for up to 8 seconds if coreaudiod is cold.

### Global Keyterms for Voice Recognition
The `voiceKeyterms.ts` file defines a list of global keyterms to improve STT accuracy, including terms like 'MCP', 'symlink', and 'gRPC'. These are used to ensure coding terminology is correctly recognized.

### Security Dialog Bypassed in Non-Interactive Mode
The security dialog for dangerous settings is bypassed if the application is in non-interactive mode, which is not commonly documented. This could lead to settings being applied without user confirmation in certain automated environments.

### OAuth Token Eligibility Check Details
Eligibility for remote managed settings is determined by OAuth tokens, specifically allowing Enterprise/C4E and Team subscriptions. Tokens without subscriptionType metadata are also considered eligible, potentially leading to unnecessary API calls.

### OAuth Eligibility for Remote Settings
Only Enterprise/C4E and Team subscribers using OAuth are eligible for remote-managed settings. This restriction is not publicly documented.

### Session Memory Compaction Token Limits
The session memory compaction process has specific token limits set: minTokens at 10,000, maxTokens at 40,000, and minTextBlockMessages at 5. These thresholds dictate how much session data is preserved or discarded during compaction.

### Surprising Default Token Thresholds
The default maximum input tokens are set to 180,000, with a target to keep the last 40,000 tokens. These thresholds are higher than typical public API limits, indicating a more robust internal handling of context.

### Compact Warning Suppression Mechanism
A mechanism exists to suppress context compaction warnings immediately after a successful compaction. This is to prevent inaccurate warnings due to lack of updated token counts.

### OAuth Profile Request Timeout
OAuth profile requests have a timeout set to 10,000 milliseconds, which is a specific design choice for handling slow network conditions.

### Auth Code Listener Dynamic Port
The AuthCodeListener class dynamically assigns a port for its localhost server, allowing it to avoid port conflicts by using OS-assigned ports.

### Claude AI Inference Scope in OAuth
The OAuth client has a specific scope called CLAUDE_AI_INFERENCE_SCOPE, which is used for long-lived inference-only tokens. This scope is not publicly documented and suggests a specialized access level for inference tasks.

### Manual Auth Code Resolver in OAuth
The OAuthService class includes a manualAuthCodeResolver function for handling authorization codes manually, which is used in non-browser environments. This feature is not commonly highlighted in public documentation.

### OAuth Flow Port Timeout
The OAuthService class uses a localhost port for capturing authorization codes, which could imply a timeout or failure if the port is not correctly handled. This reliance on a local port is not typically discussed in public resources.

### Security Checks in Headers Helper
The headersHelper script includes security checks to ensure it only runs if trust has been established for a project. This is skipped in non-interactive sessions, highlighting a potential security consideration.

### KAIROS Feature Gate in Channel Notifications
The channel notification system uses feature flags 'KAIROS' and 'KAIROS_CHANNELS' to control access, with a runtime gate named 'tengu_harbor'. This requires OAuth authentication and blocks API key users until channels are enabled in the admin console.

### XAA IdP Login Timeout Settings
The XAA IdP login process has a 5-minute timeout for acquiring an id_token and a 30-second timeout for requests. Tokens are cached with a 60-second expiry buffer.

### Secret Tengu MCP OAuth Events
The code references specific failure reasons for events like 'tengu_mcp_oauth_refresh_failure' and 'tengu_mcp_oauth_flow_error'. These events are used for analytics and are likely not publicly documented.

### OAuth Port Range Adjustment for Windows
The OAuth redirect port range is adjusted for Windows, reserving ports 39152-49151 to avoid conflicts with the dynamic port range. This is a platform-specific adjustment not commonly documented.

### OAuth Request Timeout Value
OAuth requests in Claude have a set timeout of 30000 milliseconds (30 seconds), which is a specific design choice that may affect performance and user experience.

### Fetching User's First Token Date
The function 'fetchAndStoreClaudeCodeFirstTokenDate' retrieves and stores the first token date for users, ensuring it is valid before saving. This helps track when users started using Claude Code.

### Files API Beta Header with OAuth
The Files API includes a beta header 'files-api-2025-04-14,oauth-2025-04-20' which enables Bearer OAuth on public-api routes. This indicates upcoming OAuth support for the Files API, which is not yet publicly documented.

### AI Gateway Fingerprints
Claude uses specific header prefixes to identify AI gateways like 'litellm', 'helicone', and 'portkey'. This helps in routing and handling requests appropriately.

### OAuth Preferred for Bootstrap API
The bootstrap API prefers OAuth tokens over API keys, but will fall back to API keys if OAuth is unavailable. This ensures broader compatibility with different user setups.

### Secret Scanner for Anthropic API Keys
The secret scanner includes a rule for detecting Anthropic API keys using a prefix 'sk-ant-api'. This prefix is assembled at runtime to avoid exposing the literal byte sequence.

### Datadog Integration Specifics
The integration with Datadog logs uses a specific endpoint 'https://http-intake.logs.us5.datadoghq.com/api/v2/logs' with a client token 'pubbbf48e6d78dae54bceaa4acf463299bf'. The default flush interval is set to 15000ms, with a maximum batch size of 100 and a network timeout of 5000ms.

### Handling of PII-Tagged Proto Fields
The code strips '_PROTO_*' keys from metadata before sending to Datadog, ensuring PII-tagged fields are only logged to first-party systems.

### Hidden Settings Details and Permissions
The settings schema includes detailed permission rules, environment variables, and model configurations. Notably, it allows for precise control over permissions with syntax like 'Bash(npm:*)' and 'Bash(rm -rf:*)', indicating a robust security model.

### Claude in Chrome: Browser Automation Skill
The 'Claude in Chrome' skill automates browser tasks like clicking elements and capturing screenshots. It requires site-level permissions, which could have privacy implications.

### Secret Header for CCR BYOC Beta
The code uses a secret header 'ccr-byoc-2025-07-29' for the CCR BYOC Beta feature, which is not publicly documented. This header is included in API requests for importing GitHub tokens.

### Tengu Cobalt Lantern Feature Flag
The 'tengu_cobalt_lantern' feature flag is used to enable Claude Code setup on the web, contingent on policy permissions. This flag is not mentioned in public documentation.

### GitHub Token Import Timeout
The importGithubToken function sets a 15-second timeout for HTTP requests when importing GitHub tokens. This specific timeout value is not publicly documented.

### Complex Secret Handling in GitHub App Installation
The installation process for the GitHub App includes intricate handling of existing secrets, with specific keybindings for confirming secret usage. This complexity is not reflected in public documentation.

### Conditional OAuth Selection in API Key Step
The `ApiKeyStep` component conditionally selects between 'existing', 'new', or 'oauth' options based on the presence of an existing API key or OAuth token creation function. This behavior isn't documented publicly.

### Special Handling for CLAUDE_CODE_OAUTH_TOKEN
The code includes special handling for a secret named 'CLAUDE_CODE_OAUTH_TOKEN', replacing the default 'anthropic_api_key' in workflow content. This suggests a specific OAuth token for Claude integrations.

### Keybinding Customization Preview Feature
The keybinding customization feature is currently in preview mode and is not enabled by default. The function isKeybindingCustomizationEnabled() checks if this feature is enabled.

### Detailed Plugin Error Handling
The system has detailed error handling for plugins, including specific messages for path-not-found, git-auth-failed, and manifest-validation-error among others. This level of granularity in error reporting is not typically exposed to users.

### Native CSI U Terminal Support
Claude's terminal setup includes support for terminals with native CSI U / Kitty keyboard protocol, such as Ghostty, Kitty, iTerm2, and WezTerm. This is not publicly documented and affects key binding installations.

### MCP XAA IdP Setup Requires HTTPS
The MCP XAA IdP setup enforces HTTPS for issuer URLs, except for localhost. This ensures secure communication, preventing leaks of client secrets and authorization codes.

### Permission Retry Message Creation
The permissions command creates a retry message by appending a new permission retry message to the existing context messages whenever a retry is triggered.

### Claude Chrome Extension URLs Revealed
The Claude Chrome extension interacts with specific URLs: 'https://claude.ai/chrome', 'https://clau.de/chrome/permissions', and 'https://clau.de/chrome/reconnect'. These URLs are used for installation, managing permissions, and reconnecting.

### MCP Connectivity Failure Notifications
The useMcpConnectivityStatus function sends notifications for failed MCP server connections, differentiating between local and Claude.ai servers, and whether they need authentication.

### Interactive Permission Flow with Resolve-Once Guard
The interactive permission flow uses a 'resolve-once' guard to prevent multiple resolutions of permission decisions. This ensures that asynchronous checks and user interactions do not lead to conflicting outcomes.

### Hidden BASH_CLASSIFIER Feature Flag
The code reveals a hidden feature flag 'BASH_CLASSIFIER' used to enable classifier auto-approval for bash commands. This flag is not documented publicly and controls whether the classifier is used for permission checks.

### Swarm Worker Mailbox Forwarding
Swarm workers forward permission requests to a leader via a mailbox system if classifier auto-approval fails. This forwarding mechanism is not publicly documented.

### Undocumented External Permission Modes
The code defines `EXTERNAL_PERMISSION_MODES` and `PERMISSION_MODES`, suggesting there are specific permission settings for external integrations that are not publicly documented.

### InProcessTeammateDetailDialog Keybindings Behavior
InProcessTeammateDetailDialog uses specific keybindings for actions: ' ' (space) for onDone, 'left' for onBack, 'x' for onKill, and 'f' for onForeground. These are not documented in public-facing materials.

### CompactBoundaryMessage Uses Undocumented Shortcut
The CompactBoundaryMessage component uses a shortcut 'ctrl+o' for toggling the transcript, which is not documented in the public API. This shortcut is registered under the key 'app:toggleTranscript'.

### MacOS Keychain Lock Check
The 'InvalidApiKeyMessage' function checks if the MacOS keychain is locked and provides a specific message to unlock it. This behavior is not documented externally.

### Token Display Delay Set to 30 Seconds
The system is configured to show tokens after a delay of 30,000 milliseconds (30 seconds) from the start of an operation.

### Permission Dialog Default Values
In the PermissionDialog component, the default color is set to 'permission' and the default inner padding is set to 1. These defaults are applied when no specific values are provided, affecting the visual styling of permission dialogs.

### Permission Rule Explanation Defaults
The 'PermissionRuleExplanation' function defaults to using a theme color 'error' when the classifier type is 'auto-mode'. This behavior is not documented publicly.

### Managed Sandbox Domains Only Flag
The SandboxPermissionRequest component includes a flag 'shouldAllowManagedSandboxDomainsOnly' which restricts certain options based on domain management settings.

### Sandbox Override Requires Permission
The code reveals that overriding the sandbox environment requires explicit permission, which is not commonly known from public documentation.

### Teams Dialog Registers as Overlay
The `TeamsDialog` component registers itself as an overlay using `useRegisterOverlay('teams-dialog')`. This prevents the `CancelRequestHandler` from intercepting escape key presses, indicating a specialized input handling.

### Hidden Index Toggle Prevention in Multi-Select
The multi-select component has a 'hideIndexes' feature that prevents numeric keys from toggling options by index when index labels are hidden. This behavior is not publicly documented.

### Hidden Overlay Registration in Select Input
The `useSelectInput` function automatically registers as an overlay when `onCancel` is provided, preventing `CancelRequestHandler` from intercepting the Escape key. This behavior is not documented publicly.

### Dialog Default Color Set to 'permission'
The Dialog component defaults its color to 'permission' if no color is specified. This is not documented publicly and could lead to unexpected styling if developers assume a different default.

### Dialog isCancelActive Defaults to True
The Dialog component's isCancelActive prop defaults to true, enabling built-in keybindings for cancel actions unless explicitly set to false. This behavior is not clearly documented.

### Conditional 'Always Allow' Options
The 'always allow' options are only shown when not restricted by allowManagedPermissionRulesOnly, and when there are suggestions available.

### Isolated Shimmer Animation in Bash Permission
The BashPermissionRequest component isolates a 20fps shimmer clock to avoid re-rendering the entire dialog every 50ms during the classifier's 1-3 second processing time.

### File Write Timeout and Limits
The 'FileWritePermissionRequest' component handles file writes with specific conditions for file existence and content replacement, suggesting implicit timeouts or limits not documented publicly.

### Syntax Highlighting Toggle in AskUserQuestion
The AskUserQuestionPermissionRequest component has a feature flag for disabling syntax highlighting, controlled by settings.syntaxHighlightingDisabled. This behavior is not publicly documented.

### WebFetchPermissionRequest Always Allow Option
The WebFetchPermissionRequest component includes a conditional option to 'always allow' requests for a specific domain, controlled by shouldShowAlwaysAllowOptions(). This option is not mentioned in public documentation.

### Hidden IDE Diff Support Feature
The `FilePermissionDialog` component includes a hidden feature for IDE diff support through the `ideDiffSupport` prop. This feature is not documented publicly and allows for configuration and application of file edits directly within an IDE.

### Async Language Detection in File Dialogs
The `FilePermissionDialog` uses an asynchronous function `getLanguageName` to determine the language from the file path. This allows for dynamic language detection but may introduce delays if not handled properly.

### Secret Feature Flag: tengu_accept_submitted
The code logs an event 'tengu_accept_submitted' when a permission is accepted, suggesting a hidden feature flag 'tengu_*'. This flag is not publicly documented and may relate to internal analytics or feature tracking.

### Special Permissions for .claude Folders
The code includes specific checks for paths within '.claude' folders, both project-specific and global, to determine special permission options. This behavior is not documented publicly, suggesting these folders have unique permissions.

### Session-Scoped Directory Removal
The 'RemoveWorkspaceDirectory' component applies permission updates with a hardcoded destination of 'session', indicating directory removals are session-scoped and not persistent.

### Surprising Reconnect Result Handling
The 'handleReconnectResult' function has a case for 'needs-auth', suggesting that some server connections require additional authentication steps, which is not commonly highlighted.

### Hidden Keyboard Shortcut Hints in Wizard
The ModelStep component includes a hidden keyboard shortcut hint for navigating ('[1m[4m[0m') and selecting ('Enter') models, as well as a configurable shortcut hint for confirming actions with a fallback to 'Esc'.

### Abort Generation with Escape Key
In the GenerateStep component, the generation process can be aborted by pressing the escape key, which sets an error message 'Generation cancelled'. This behavior is not documented publicly.

### Auth Failure Threshold in CCRClient
The CCRClient gives up after 10 consecutive 401/403 errors with a valid-looking token, allowing approximately 200 seconds to resolve transient issues like userauth downtime or clock skew.

### Long-Lived Auth Tokens via Setup-Token Command
The 'setup-token' command guides users through setting up long-lived (1-year) auth tokens for Claude accounts. This feature is not widely advertised and suggests a focus on user convenience for authentication.

### Managed Settings Drop-In Convention
The `loadManagedFileSettings` function follows a drop-in convention for managed settings files. The base `managed-settings.json` is merged first, followed by alphabetically sorted drop-in files like `10-otel.json` and `20-security.json`, allowing independent policy fragments without coordinating edits.

### WebFetch Requires Domain Prefix
WebFetch permissions require a 'domain:' prefix and do not support URLs or wildcard patterns in the URL format. This is a strict requirement for hostname-based permissions.

### Dangerously Skip Permissions Flag
The '--dangerously-skip-permissions' flag is propagated to teammates if the permission mode is 'bypassPermissions', allowing them to skip permission checks.

### Team-Wide Allowed Paths
Team files can specify team-wide allowed paths, granting all teammates edit permissions without approval, a feature not publicly highlighted.

### Hidden Ultraplan Keyword Handling
The code includes functions `hasUltraplanKeyword` and `replaceUltraplanKeyword` which suggest handling of a special 'ultraplan' keyword. This feature is not publicly documented.

### Marketplace Only Manifest Fields Warning
The `claude plugin validate` command surfaces warnings for fields like 'category', 'source', 'tags', 'strict', and 'id' that are present in marketplace.json but not in plugin.json. These fields are stripped silently at runtime, but authors are warned to avoid confusion.

### Security via Trust Dialog for Plugin Installs
Plugin installations are gated by a 'trust this folder' dialog, ensuring user consent before proceeding. This prevents unauthorized installations from malicious sources.

### Auto-Uninstall of Delisted Plugins
The system auto-uninstalls plugins that are no longer listed in the marketplace, which is not a publicly documented behavior. This feature ensures security and compliance but may surprise users who find their plugins missing.

### Official Marketplace from GCS Mirror
The official marketplace is fetched from a GCS mirror instead of GitHub, using a zip file keyed by base repo SHA, to optimize startup performance.

### Path Validation for Security
The validatePathWithinBase function ensures paths do not escape a base directory, preventing path traversal attacks.

### Canonical Plugin Storage ID Format
The canonical storage key for a plugin's options is always formatted as "${name}@${marketplace}". This is used in both `settings.pluginConfigs` and `secureStorage.pluginSecrets`.

### Memoization of Plugin Options Loading
The `loadPluginOptions` function is memoized per-pluginId to optimize performance, as loading involves reading settings and potentially spawning a keychain process on macOS.

### OAuth Authentication Required for Claude Code
Claude Code requires OAuth authentication with a Claude.ai account, explicitly stating that API key authentication is insufficient. This requirement is not clearly communicated in public-facing materials.

### Plaintext Storage for Credentials with Warning
The 'plainTextStorage' module stores credentials in plaintext and returns a warning: 'Warning: Storing credentials in plaintext.' This is a significant security risk that is not clearly communicated in any public documentation.

### Keychain Cache TTL for MacOS
The MacOS keychain cache has a TTL to limit staleness across processes. This is designed to avoid repeated expensive security CLI calls, with the sync read path taking ~500ms per call. The TTL is set to 30 seconds, balancing performance and staleness.

### Security Command Stdin Line Limit
The `security` command on macOS has a stdin line limit of 4096 bytes, minus a 64-byte headroom. Exceeding this limit can result in command truncation and stale keychain entries being read.

### TRANSCRIPT_CLASSIFIER Feature Flag for Auto Mode
The feature flag `TRANSCRIPT_CLASSIFIER` controls access to the auto mode in permission cycling. Its presence in the code indicates conditional functionality based on this flag.

### Permission Update Destination Options
The `permissionUpdateDestinationSchema` defines multiple destinations for saving permission rules, including user settings, project settings, local settings, session, and CLI arguments. This flexibility allows for varied rule persistence.

### Classifier Permissions Feature is ANT-ONLY
The 'classifier permissions' feature is marked as 'ANT-ONLY', indicating it is not available for external builds. The function 'isClassifierPermissionsEnabled' always returns false, disabling this feature.

### Exclusive Permission Mode: Auto
The 'auto' permission mode is exclusive to Anthropic's internal users ('ant') and is not available to external users. This mode is part of the 'TRANSCRIPT_CLASSIFIER' feature.

### Permission Schema Fallback Behavior
The permission schemas have a fallback mechanism where malformed entries from the SDK host default to undefined instead of rejecting the decision. This is contrary to typical strict validation practices.

### Protection of Dangerous Files
A list of dangerous files and directories is explicitly protected from auto-editing, showcasing a focus on security against code execution and data exfiltration risks.

### Tree-sitter Fail-Closed Design in Bash Analysis
The bash command analysis using tree-sitter is designed with a fail-closed approach. If tree-sitter produces a node not explicitly allowlisted, the command is classified as 'too-complex' and requires user permission. This ensures no unrecognized structures are interpreted.

### Parse Aborted Sentinel for Security
A special sentinel value 'PARSE_ABORTED' is used to indicate when the parser was loaded and attempted but aborted due to timeout or complexity. This is distinct from 'null', which indicates the module wasn't loaded.

### Fig Spec Loading with Path Restrictions
The `loadFigSpec` function only loads command specifications if the command name does not contain slashes, backslashes, or double dots, and does not start with a dash (except for a single dash). This is likely a security measure to prevent path traversal and invalid command names.

### PowerShell AST Mapping for Security
The PowerShell parser maps AST elements directly to System.Management.Automation.Language classes, allowing TypeScript to derive security flags without extra AST node calls.

### GitHub Auth Status Detection via CLI
Claude uses the 'gh auth token' command to detect GitHub authentication status, avoiding network requests by reading local config/keyring. This method ensures tokens are not exposed to the process.

### Unique CLI Host Bundle ID for Terminal
The code uses a unique sentinel bundle ID 'com.anthropic.claude-code.cli-no-window' for the frontmost gate, which is never intended to match a real application. This indicates dead code for mouse click-through exemption and keyboard safety-net for the terminal.

### Loopback Addresses Allowed in SSRF Guard
The SSRF guard explicitly allows loopback addresses (127.0.0.0/8 and ::1) to facilitate local development. This could be a potential security risk if not properly managed in production environments.

### O_NOFOLLOW Security Measure
The use of O_NOFOLLOW in Unix systems prevents following symlinks when opening task output files, mitigating a potential security risk where attackers could redirect writes to arbitrary files.

### Secret Flag to Skip Bedrock Authentication
The environment variable 'CLAUDE_CODE_SKIP_BEDROCK_AUTH' can be set to skip authentication for the Bedrock client. This is an internal feature not intended for public use, allowing requests without credentials.

### Ultraplan Keyword Trigger Position Logic
The function `findKeywordTriggerPositions` uses complex logic to determine when the keyword 'ultraplan' should trigger a launch directive, including rules for delimiters, path-like contexts, and punctuation. It avoids triggering on paths, file extensions, and when followed by a question mark.

### Git Config Parser Case Sensitivity Details
The parser for .git/config files treats section and key names as case-insensitive, but subsection names are case-sensitive. This differs from common assumptions that all parts are case-sensitive.

### AcceptEdits Mode Auto-Allows Specific Cmdlets
In 'acceptEdits' mode, certain PowerShell cmdlets like 'set-content' and 'remove-item' are auto-allowed without user confirmation. This mode bypasses typical security checks for these commands.

### Destructive Command Warning Patterns
The system uses regex patterns to detect potentially destructive PowerShell commands like 'Remove-Item -Recurse -Force' and warns users. These warnings are purely informational and do not affect permission logic.

### Link Item Types in New-Item Cmdlet
The 'New-Item' cmdlet can create filesystem links like 'symboliclink', 'junction', and 'hardlink'. These links can redirect path resolution, potentially leading to security risks.

### Git Safety Write Cmdlets in PowerShell
A set of cmdlets like 'new-item', 'set-content', and 'invoke-webrequest' are identified as GIT_SAFETY_WRITE_CMDLETS, which can place files at caller-specified paths. These cmdlets are checked against git-internal paths to prevent unauthorized file placements.

### PowerShell Security: Alternative Parameter Prefixes
The PowerShell security analysis includes a function `psExeHasParamAbbreviation` that recognizes alternative parameter-prefix characters like en-dash, em-dash, and horizontal bar, which are accepted by PowerShell's tokenizer. This could allow commands with these prefixes to bypass certain security checks.

### OAuth Base URL Preference for Uploads
The upload function prefers using the ANTHROPIC_BASE_URL environment variable over the default OAuth configuration, potentially affecting where uploads are directed.

### Cross-Segment cd+git Command Security Check
The code includes a security check for commands that use 'cd' and 'git' across different pipe segments, which is not publicly documented. This is to prevent bare repository attacks.

### Zsh Dangerous Commands Set
The code maintains a set of Zsh-specific dangerous commands like 'zmodload' and 'emulate' to block potential security bypasses. This is not typically highlighted in public-facing security documentation.

### Destructive Command Warnings for Git and More
The system includes a set of regex patterns to detect potentially destructive commands like 'git reset --hard' and 'rm -rf', providing warnings but not affecting permission logic.

### Bash Command Classifier Permissions
The code includes a feature flag isClassifierPermissionsEnabled that determines if classifier permissions are active. This internal feature flag is not mentioned in public documentation.

### Meta Key Behavior Differs from Docs
The `meta` key is set to true not only when `keypress.meta` is true, but also when `keypress.name` is 'escape' or `keypress.option` is true. This differs from typical expectations where `meta` would only correspond to the Meta key.

### Super Key Only via Kitty Protocol
The `super` key (Cmd on macOS/Win key) is only recognized via the Kitty keyboard protocol CSI u sequences. This means it won't be detected in other terminal environments.

### Ctrl+Space Handling Quirk
When `ctrl` is set, `keypress.name` for space is the literal word 'space'. This is converted to an actual space character to prevent 'space' from leaking into text input.

### Suppress Unrecognized Escape Sequences
Unrecognized escape sequences parsed as function keys without a name are suppressed to prevent them from leaking into input as literal text.

### Hidden X10 Mouse Event Handling in Tokenizer
The tokenizer has a hidden feature to treat 'CSI M' as an X10 mouse event prefix, consuming 3 payload bytes. This is only enabled for stdin input, as enabling it for output streams can swallow display text. This feature is controlled by the 'x10Mouse' option, which defaults to false.

### MCP Server Authentication Requirement
The MCP server can be configured to require an API key for HTTP access, adding a layer of security for sensitive operations.

### Tengu CCR Bridge GrowthBook Gate
The entitlement check for the Bridge feature involves a GrowthBook gate named 'tengu_ccr_bridge'. This gate, along with an OAuth subscriber check, determines if the Bridge feature is enabled for a user.

### Session-Ingress Authentication with JWT
The Bridge layer uses JWT-based authentication for session ingress, with tokens prefixed by 'sk-ant-si-' and containing 'exp' claims. The system proactively refreshes these tokens before they expire.

### Trusted Device Token for Elevated Security
Claude Code's Bridge sessions can use a 'Trusted Device token' for elevated security, included in the 'X-Trusted-Device-Token' header. This token is enrolled via 'trustedDevice.ts'.

### Default Model: Claude-Sonnet-4-20250514
The test-auth.ts script defaults to using the model claude-sonnet-4-20250514 if no model is specified, indicating a potential default model for internal testing.

### Multiple Sources for Anthropic API Key
The Anthropic API key can be sourced from an environment variable, a keychain, or an OAuth token, allowing for flexible authentication setups.

### MDM and Keychain Prefetching on Startup
The startup process includes prefetching macOS keychain data and starting MDM subprocesses to optimize performance. This is done in parallel with other imports to save approximately 135ms.

### Task ID Generation Security
Task IDs are generated using a case-insensitive-safe alphabet and random bytes, providing approximately 2.8 trillion combinations. This design choice aims to resist brute-force symlink attacks.

### Kitty Keyboard Protocol Handling
The code includes specific handling for the Kitty keyboard protocol (CSI u), which is not commonly documented in terminal input parsers.

### Internal Permission Modes Include 'auto' and 'bubble'
The code defines internal permission modes that include 'auto' and 'bubble', which are not part of the external permission modes. This suggests additional internal handling of permissions that is not exposed to users.

### Feature Flag 'TRANSCRIPT_CLASSIFIER' Alters Permission Modes
The presence of the 'TRANSCRIPT_CLASSIFIER' feature flag influences the inclusion of 'auto' in the internal permission modes. This indicates conditional functionality based on this flag.

### Expanded Keybinding Contexts
The keybinding contexts have been expanded to include new contexts such as 'Attachments', 'Footer', 'MessageSelector', 'DiffDialog', 'ModelPicker', 'Select', and 'Plugin'. These are not mentioned in the public documentation.

### Chord Sequence Timeout Threshold
The timeout for chord sequences is set to 1000 milliseconds. If a user does not complete the chord within this time, the sequence is cancelled. This design decision affects how users interact with complex keybindings.

### Meta and Alt Modifier Mapping Quirk
In the keybinding system, both Alt and Meta map to 'key.meta' due to terminal limitations. This means a 'meta' modifier in config is treated as an alias for 'alt', affecting how keybindings are interpreted.

### Reserved Shortcuts Filter in Keybindings
The function `filterReservedShortcuts` filters out reserved shortcuts that cannot be rebound to prevent `/doctor` warnings. This is not publicly documented.

### Platform-Specific Keybinding Adjustments
Keybindings like 'alt+v' for image paste on Windows and 'ctrl+v' on other platforms show platform-specific adjustments. This behavior isn't clearly documented.

### Ant-only Bridge Overrides for Dev Environment
The bridge configuration includes ant-only environment variable overrides for OAuth tokens and base URLs, specifically `CLAUDE_BRIDGE_OAUTH_TOKEN` and `CLAUDE_BRIDGE_BASE_URL`. These are used in development environments to bypass standard OAuth configurations.

### Tengu Sessions Elevated Auth Enforcement
The code references a feature gate `tengu_sessions_elevated_auth_enforcement` which enforces elevated security tiers for bridge sessions. This involves requiring a trusted device token for certain API calls when the server's enforcement flag is active.

### JWT Token Refresh Scheduler with Secret Buffers
The token refresh scheduler uses a 5-minute buffer before expiry to refresh tokens, with a fallback interval of 30 minutes if expiry is unknown. It allows up to 3 consecutive failures before giving up.

### Trusted Device Token: 90-Day Rolling Expiry
Trusted device tokens used in bridge sessions have a 90-day rolling expiry and are stored in the keychain. This ensures persistent authentication while allowing flexibility in token management.

### Production OAuth Config Uses 307 Redirects
The production OAuth configuration uses a 307 redirect through 'claude.com/cai/*' to connect CLI sign-ins to 'claude.com' for attribution, indicating a two-hop redirection process.

### Hidden GrowthBook Dev Feature Flag
The code contains a hidden feature flag 'ENABLE_GROWTHBOOK_DEV' that switches the GrowthBook client key to 'sdk-yZQvlplybuXjYh6L' when enabled, otherwise defaults to 'sdk-xRVcrliHIlrg4og4'. This flag is only active for users with 'USER_TYPE' set to 'ant'.

### Path Sanitization to Prevent Traversal Attacks
The `sanitizePathKey` function includes checks for null bytes, URL-encoded traversals, Unicode normalization attacks, and absolute paths to prevent path traversal attacks. This detailed sanitization process is not highlighted in public resources.

### Direct Connect Session Skips Permissions
The 'createDirectConnectSession' function includes an option to 'dangerouslySkipPermissions', allowing sessions to bypass standard permission checks. This could have security implications if misused.

### DirectConnectSessionManager Uses Custom WebSocket Headers
The DirectConnectSessionManager class uses custom headers for WebSocket connections, specifically an 'authorization' header if an authToken is provided. This is not typical for standard WebSocket connections, which usually don't support headers in the same way as HTTP requests.

### mTLS Config Uses Specific Environment Variables
The mTLS configuration is sourced from environment variables named `CLAUDE_CODE_CLIENT_CERT`, `CLAUDE_CODE_CLIENT_KEY`, and `CLAUDE_CODE_CLIENT_KEY_PASSPHRASE`. This setup allows dynamic configuration of mutual TLS settings at runtime.

### Surprising Context Window Size Defaults
The default context window size for models is set to 200,000 tokens, with a maximum output token limit of 32,000, which can escalate to 64,000. However, a capped default of 8,000 tokens is used for slot-reservation optimization, indicating a significant over-reservation.

### CCR Token Persistence for Subprocesses
The code includes a mechanism to persist tokens to disk specifically for subprocess access within the Claude Code Remote (CCR) environment. This is done by writing tokens to '/home/claude/.claude/remote', a directory created by the Go environment-manager. This behavior is gated by the 'CLAUDE_CODE_REMOTE' environment variable and is not documented publicly.

### Internal Model Repo Allowlist
The code maintains an allowlist of repositories where internal model names are permitted in commit trailers. This list is intentionally limited to specific private repos to prevent leaks of codenames. This practice is not publicly documented, indicating a focus on internal security and confidentiality.

### MacOS Keychain API Key Removal Command
The function `maybeRemoveApiKeyFromMacOSKeychainThrows` uses a specific command to remove API keys from the MacOS keychain, which could fail if the command's exit code is not zero.

### Token Budget Parsing with Regex
Token budgets are parsed using regex patterns that match shorthand notations like '+500k' or verbose phrases like 'use 2M tokens'. This approach avoids certain regex features for performance reasons.

### Normalize Control Message Keys Function
The `normalizeControlMessageKeys` function converts camelCase `requestId` to snake_case `request_id` in control messages. This is a workaround for older iOS app builds that lack proper Swift CodingKeys mapping.

### Warning Tracking Limit
The system tracks warnings to prevent spam, with a maximum of 1000 distinct warning keys. This limit helps manage memory usage while tracking potential issues.

### Default MCP Output Tokens Limit
The hardcoded default maximum for MCP output tokens is set to 25,000. This limit is used if no environment variable or feature flag override is present.

### Billing Access Logic with Mock Overrides
The billing access logic can be overridden for testing purposes using a mock flag `mockBillingAccessOverride`. This allows developers to simulate billing access without actual authentication.

### Security Check for Windows Executables
The code includes a security measure to prevent executing potentially malicious executables from the current directory on Windows. This involves filtering out results from the current directory when finding executables.

### API Key Helper Cache TTL
The default TTL for the API key helper cache is set to 5 minutes (300,000 milliseconds). This indicates a design decision to balance between performance and the need to refresh credentials frequently.

### macOS Option Key Shortcuts for Terminal
Special characters produced by macOS Option+key are mapped to keybinding equivalents, enabling detection of Option+key shortcuts in macOS terminals without 'Option as Meta' enabled.

### Session Token in Headers
The RemoteIO class prepares headers with a session token for authorization if available, indicating a reliance on session tokens for secure communication.

### Sandboxing Disabled on Linux
Sandboxing is explicitly disabled on Linux platforms, which could lead to different security behaviors compared to other OSes.

### Tengu Bypass Permissions Mode
The 'Bypass Permissions Mode' dialog logs events with the prefix 'tengu_', such as 'tengu_bypass_permissions_mode_dialog_accept'. This mode allows Claude Code to run commands without user approval, intended for sandboxed environments.

### Specific Wheel Acceleration Parameters
The ScrollKeybindingHandler component uses specific parameters for wheel acceleration: a window of 40ms, a step of 0.3, and a maximum multiplier of 6. These are not publicly documented.

### Voice Activation Key Press Thresholds
Voice activation requires 5 rapid consecutive key events, with warmup feedback starting at 2 events. These specific thresholds control how quickly voice mode activates.

### Modifier Combo First-Press Fallback
The fallback for modifier-combo first-press activation is set to 2000ms, matching macOS's max key-repeat delay. This ensures modifier combos don't fragment into two sessions.

### Bypass Permissions Mode in Chrome Extension
The Claude for Chrome extension has a hidden 'bypassPermissions' mode that sets the permission mode to 'skip_all_permission_checks'. This mode is not mentioned in public documentation.

### Max Init Failures Guard for ReplBridge
The system stops re-attempting to initialize the ReplBridge after three consecutive failures. This prevents unnecessary retries when the OAuth is unrecoverable, reducing server load.

### Immediate Execution of Command Keybindings
Commands triggered via keybindings are treated as 'immediate', meaning they execute right away without clearing the user's existing input text. This behavior might differ from what users expect based on public documentation.

### Voice Keyterms Limit in STT Endpoint
The `getVoiceKeyterms` function limits the number of keyterms to 50 for the voice_stream STT endpoint. This ensures efficient processing without overwhelming the system.

### Secret Feature Flag: Tengu Managed Settings Dialog
The code contains a feature flag 'tengu_managed_settings_security_dialog_shown' that logs when a security dialog is displayed for dangerous settings in remote managed settings. This flag is not publicly documented.

### Complex Eligibility Logic for Managed Settings
The eligibility for remote managed settings is determined by a complex set of conditions, including API key presence, OAuth token metadata, and specific environment variables. This logic is not fully detailed in public documentation.

### Eligibility Criteria for Remote Managed Settings
Only Console users with an API key and Enterprise/OAuth users with specific subscriptions are eligible for remote managed settings. This selective eligibility is not widely known.

### Session Memory Compaction Thresholds
The session memory compaction has specific thresholds: a minimum of 10,000 tokens, a maximum of 40,000 tokens, and at least 5 text block messages to preserve. These thresholds are not publicly documented.

### OAuth API Timeout Value
The OAuth API requests have a timeout set to 10000 milliseconds (10 seconds), which is a specific design choice not publicly documented.

### Manual OAuth Flow URL Construction
The OAuth service constructs a manual flow URL for environments where automatic browser redirection is not possible. This is not commonly documented.

### Cross-App Access Flag for MCP Servers
The code includes a Cross-App Access (XAA) flag for MCP servers, which is a per-server configuration. This feature is not publicly documented and is controlled via the 'xaa' field in the OAuth configuration.

### KAIROS Channel Notifications Feature Flag
The 'KAIROS' and 'KAIROS_CHANNELS' feature flags gate the channel notifications functionality, which allows an MCP server to push user messages into conversations. This feature requires claude.ai OAuth authentication and is blocked for API key users until a specific admin surface is enabled.

### Hidden User Settings Sync Keys
User settings synchronization uses hidden keys such as '~/.claude/settings.json' and '~/.claude/CLAUDE.md'. These keys are not publicly documented.

### Session Log Retry Logic
The session log append implementation retries on transient errors like network issues, 5xx, and 429 errors, but fails immediately on a 401 error. This retry logic ensures robustness against temporary failures but does not tolerate unauthorized access.

### Bootstrap API Authentication Strategy
The Bootstrap API prefers OAuth for authentication but falls back to API key auth for console users. This dual strategy ensures access even when OAuth tokens lack the necessary scope.

### x402 Wallet Configuration Secrets
The x402 Wallet Configuration manages private keys stored in a user's global config file, '~/.claude/config.json', which are never logged or transmitted. This is not publicly documented.

### x402 Payment Fetch Wrapper
The x402 Payment Fetch Wrapper intercepts HTTP 402 responses, automatically handling payment authorizations and retries, a feature not publicly documented.

### Datadog Logs Endpoint and Token
The Datadog logs endpoint is 'https://http-intake.logs.us5.datadoghq.com/api/v2/logs' with a client token 'pubbbf48e6d78dae54bceaa4acf463299bf', which is sensitive information not intended for public exposure.

### Proto PII Tagging for Privileged Analytics
Analytics metadata with '_PROTO_*' keys are tagged for PII and routed to privileged access columns in BigQuery. These keys are stripped before fanout to Datadog, ensuring only first-party logging sees unredacted values.

### Redacted Github Token Class
The RedactedGithubToken class ensures that GitHub tokens are redacted in logs and outputs, only revealing the token when explicitly called with .reveal().

### CONTEXT_COLLAPSE feature for API view
The 'CONTEXT_COLLAPSE' feature flag enables a transformation called 'projectView' on messages before they are sent to the API, affecting how context is visualized and token counts are calculated.

### Add Directory Permission Destination
The `add-dir` command allows specifying a permission destination as either 'localSettings' or 'session'. This determines whether the directory addition is temporary or persists across sessions.

### Configurable Shortcut Hints for Plugin Actions
The `PluginSelectionKeyHint` component uses `ConfigurableShortcutHint` to provide dynamic shortcut hints for plugin actions like 'install', 'toggle', and 'details'. This dynamic hinting system is not widely documented.

### Native CSI U Terminals List
The code maintains a list of terminals that natively support the CSI u / Kitty keyboard protocol, including Ghostty, Kitty, iTerm2, WezTerm, and Warp. This list is used to determine terminal capabilities but is not documented publicly.

### Trusted Device Enrollment Post-Login
After login, Claude enrolls the device as trusted for a 10-minute fresh-session window. This is part of the post-login refresh logic to ensure security and session integrity.

### Hidden Notification Key for Settings Errors
The code uses a hidden notification key 'settings-errors' to manage notifications related to settings errors. This key is not publicly documented and is used to display warnings when settings issues are detected.

### Centralized Permission Decision Logging
All permission decisions in Claude are logged centrally through 'logPermissionDecision()', which integrates with Statsig analytics, OTel telemetry, and code-edit metrics, showing a comprehensive tracking system.

### Swarm Worker Permission Flow Details
The swarm worker permission flow involves classifier auto-approval for bash commands, forwarding requests to a leader via mailbox, and registering callbacks for leader responses. It returns null if swarms are not enabled.

### Resolve-Once Guard in Interactive Permissions
The interactive permission handler uses a 'resolve-once' guard to prevent multiple resolutions of the permission decision, ensuring only one outcome is finalized.

### Hidden 'Gates' Tab in Settings
The Settings component includes a hidden 'Gates' tab that is not publicly documented. This tab has its own escape key handling logic, suggesting it may be used for internal feature gating or testing purposes.

### Auto Classifier Mode Behavior
The code reveals an 'auto classifier' mode where permissionMode can be 'auto' or 'plan'. This affects the isAutoClassifier flag, which is true if permissionMode is 'auto' or 'plan' and hasStrippedRules is true.

### Token Display Delay in Spinner
The spinner component includes a delay for showing tokens, with a specific threshold of SHOW_TOKENS_AFTER_MS set to 30,000 milliseconds.

### Default Color for PermissionRequestTitle
The PermissionRequestTitle component defaults to a color value of 'permission' if no color is provided. This default choice is not mentioned in public documentation.

### Secret Feature Flag 'bb8' in Permission Handling
The code reveals a secret feature flag 'bb8' used in the permission handling logic. This flag is involved in the decision-making process for user responses to permission requests, particularly when logging events and handling 'yes' or 'yes-dont-ask-again' options.

### BASH_CLASSIFIER and TRANSCRIPT_CLASSIFIER Flags
The 'BASH_CLASSIFIER' and 'TRANSCRIPT_CLASSIFIER' feature flags enable special classifier logic within permission decision reasons. These flags alter the behavior of the classifier type decisions.

### Overlay Registration Triggered by OnCancel
In `useSelectInput`, the component automatically registers as an overlay if the `onCancel` callback is provided. This prevents the `CancelRequestHandler` from intercepting the Escape key, ensuring the select component handles it instead.

### Theme Color Resolution in ThemedText
The ThemedText component resolves theme color keys to raw colors using a function that checks if a color starts with 'rgb(', '#', 'ansi256(', or 'ansi:'. This indicates raw color values are prioritized over theme keys.

### Notebook Edit Language Detection
The `NotebookEditPermissionRequest` component determines the language of a notebook cell as 'markdown' or 'python' based on the `cell_type` property. This behavior is not explicitly documented.

### SedEditPermissionRequest Uses Suspense for File Reads
The SedEditPermissionRequest component uses React's Suspense to handle asynchronous file reads, which is not a common pattern for handling file I/O in React. This suggests a design choice to integrate file operations more seamlessly with the component's rendering lifecycle.

### DENY_ALL_RESPONSE Uses DEFAULT_GRANT_FLAGS
The DENY_ALL_RESPONSE object in ComputerUseApproval uses DEFAULT_GRANT_FLAGS, indicating a standardized way to handle denied permission requests. This suggests a uniform approach to permission management across different components.

### Shimmer Animation Optimization in BashPermissionRequest
The shimmer animation in BashPermissionRequest was isolated to prevent re-rendering the entire dialog every 50ms. This optimization reduces unnecessary rendering during the 1-3 seconds the classifier typically takes.

### Content Chrome Overhead Constant
The `AskUserQuestionPermissionRequest` component uses a constant `CONTENT_CHROME_OVERHEAD` set to 15, which accounts for lines used by UI elements like the nav bar and footer. This specific number reveals a design decision about the UI layout.

### Special Patterns: CLAUDE_FOLDER_PERMISSION_PATTERN
The code references special permission patterns 'CLAUDE_FOLDER_PERMISSION_PATTERN' and 'GLOBAL_CLAUDE_FOLDER_PERMISSION_PATTERN'. These patterns suggest specific handling for Claude-related folders, which is not publicly documented.

### Default Operation Type: 'write'
The default operation type for file permission dialogs is set to 'write'. This is a design decision that may impact how permissions are requested and granted.

### Special Permissions for .claude Folder
The code includes special permission options for files within a project's '.claude' folder and the global '~/.claude' folder. These options are not typically visible to users and are used to determine whether to show a '.claude folder' permission option.

### Permission Rule Source Display Logic
The RuleSourceText component constructs a display string for permission rules using 'permissionRuleSourceDisplayString'. This indicates a focus on providing clear user feedback about the origin of permission rules.

### Hidden Directory Options for Permissions
The code reveals hidden directory options for permissions: 'yes-session', 'yes-remember', and 'no'. These options determine whether a directory is remembered for the session, permanently, or not at all.

### Hidden 'confirm:no' Keybinding in Wizard
A hidden keybinding 'confirm:no' is used across multiple wizard steps to trigger the goBack function, providing a fallback 'Esc' key to navigate backwards, which is not publicly documented.

### Configurable Shortcut Hint System
The code includes a 'ConfigurableShortcutHint' component that allows dynamic configuration of keyboard shortcuts based on context, such as 'Chat' or 'Settings'. This feature is not publicly documented and suggests a flexible shortcut management system.

### Cancel Generation Keybinding Context
The 'confirm:no' keybinding is used in two different contexts ('Settings' and 'Chat') to cancel generation and go back in the wizard. This dual use can lead to unexpected behavior if not properly managed.

### Heartbeat Interval and Auth Failure Thresholds
The default interval between heartbeat events is set to 20 seconds, with a server TTL of 60 seconds. The system allows for up to 10 consecutive 401/403 errors with a valid-looking token before giving up, equating to approximately 200 seconds of retry attempts.

### Default Permission Modes in Claude Code
The default permission mode in Claude Code can be set to 'acceptEdits', 'plan', 'bypassPermissions', or 'default'. This setting determines how file changes are handled, with options for auto-acceptance or standard behavior.

### Ultraplan Keyword Replacement Feature
The code includes functions 'hasUltraplanKeyword' and 'replaceUltraplanKeyword', suggesting a feature that modifies input based on specific keywords. This feature is not publicly documented.

### Plugin Validation Security Check
The validation process includes a security check for path traversal in plugin.json component paths to prevent directory escape attempts.

### Trust Dialog Blocks Plugin Installations
Claude's security model includes a 'trust this folder' dialog that blocks all execution until the user explicitly trusts the current working directory, preventing unauthorized plugin installations.

### Authoritative Plugin Enabled Check
The function 'checkEnabledPlugins' determines enabled plugins by merging settings from various sources, giving policy settings the highest priority. This function is the authoritative source for checking if a plugin is enabled.

### Plugin Options Caching Mechanism
Plugin options are cached per-pluginId to avoid repeated settings reads and keychain accesses, which can be slow. The cache is cleared when settings change or plugins reload, ensuring up-to-date data.

### Extglob Security Disablement
The code includes a command to disable extended glob patterns for security reasons. This is done to prevent exploitation via malicious filenames.

### List of Dangerous Shell Prefixes
A set of dangerous shell prefixes, including 'bash', 'zsh', 'cmd', and 'powershell', is maintained to prevent bypassing the permission system by disallowing these as bare prefixes.

### Plaintext Credential Storage Warning
The `plainTextStorage` module stores credentials in plaintext, issuing a warning: 'Warning: Storing credentials in plaintext.' This is a security risk as it exposes sensitive data.

### Keychain Prefetch Timeout Set to 10 Seconds
The `KEYCHAIN_PREFETCH_TIMEOUT_MS` is set to 10,000 milliseconds (10 seconds). This timeout affects how long the system waits for keychain operations, potentially impacting startup performance.

### Defined Permission Modes for Chrome
The system defines specific permission modes for Chrome, including 'ask', 'skip_all_permission_checks', and 'follow_a_plan'. These modes dictate how permissions are handled within the application.

### Managed Permission Rules Flag
The `shouldAllowManagedPermissionRulesOnly` function checks if the 'allowManagedPermissionRulesOnly' setting is enabled, which restricts permission rules to those defined in managed settings only. This feature is not publicly documented and could impact user permissions significantly.

### Ants Skip Certain Permission Modes
The code contains a special condition for 'ant' users, where they skip 'acceptEdits' and 'plan' modes in the permission cycle, directly transitioning to 'bypassPermissions' or 'auto' mode if available. This behavior is not documented publicly.

### Unreachable Rule Detection Logic
The code includes logic to detect unreachable permission rules, suggesting fixes when a rule is shadowed by another. This internal mechanism isn't publicly documented and could affect user configurations.

### Shared vs Personal Setting Sources
The code differentiates between shared and personal setting sources, impacting how permission rules are applied. Shared sources include project and policy settings, while personal ones are user-specific.

### Wildcard Pattern Escaping in Permissions
The code uses null-byte sentinel placeholders for wildcard pattern escaping, which is an unusual method to handle pattern matching in permissions. This is not a common practice and is not documented.

### Auto Permission Mode is Ant-Only
The 'auto' permission mode is restricted to internal users (USER_TYPE='ant') and is not available to external users. This mode is part of a feature flag 'TRANSCRIPT_CLASSIFIER'.

### Random Salt in Placeholders for Security
Placeholders used in command parsing are salted with 8 random bytes to prevent injection attacks, highlighting a strong focus on security.

### Static Redirect Target Security Check
The system checks if a redirection target is a simple static file path, rejecting targets with whitespace or quotes for security reasons.

### GitHub Auth Status via 'gh auth token'
Claude checks GitHub CLI authentication status using 'gh auth token' instead of 'auth status' to avoid network requests, ensuring the token never enters the process by ignoring stdout.

### Security Measure: O_NOFOLLOW Flag
The use of the `O_NOFOLLOW` flag in task output files is a security measure to prevent symlink attacks in Unix environments. This flag is not available on Windows, highlighting a platform-specific security consideration.

### Bedrock Client Auth Bypass via Env Var
The Bedrock client can bypass authentication if the environment variable 'CLAUDE_CODE_SKIP_BEDROCK_AUTH' is set to a truthy value. This allows the client to operate without AWS credentials.

### Claude AI Login Check for Sessions
The function 'checkNeedsClaudeAiLogin' determines if a user must log in to Claude.ai by checking subscription status and refreshing OAuth tokens. This is not publicly documented.

### Token Auth Defaults to Admin User
When the `AUTH_TOKEN` is unset, the TokenAuthAdapter defaults all users to the built-in 'default' admin user. This means any request is treated as an admin if no token is configured.

### API Key Auth Requires Specific Prefix
The ApiKeyAdapter requires API keys to start with 'sk-ant-'. This prefix is a hardcoded requirement for validation, potentially indicating a specific internal format or system.

### OAuth Default Callback URL
The OAuthAdapter defaults the callback URL to 'http://localhost:3000/auth/callback' if OAUTH_CALLBACK_URL is not set. This default could lead to misconfigurations in production environments.

### Admin Users via Environment Variable
Both TokenAuthAdapter and ApiKeyAdapter use an 'ADMIN_USERS' environment variable to assign admin roles. This variable can contain user IDs, emails, or API key prefixes, allowing flexible admin assignment.

### Auth Token Enforcement Logic
The system enforces an auth token for connections only if the AUTH_TOKEN environment variable is set. Without it, all connections are allowed.

### Session Key Derivation Method
The session key is derived using HMAC with SHA-256, ensuring a stable key across process restarts.

### Claude Code Internal Event Schema
The ClaudeCodeInternalEvent interface includes fields like is_claubbit, is_claude_code_action, and is_claude_ai_auth, which suggest internal feature flags or modes related to Claude's operation. These fields are not publicly documented.

### PublicApiAuth Default Values
The createBasePublicApiAuth function sets default values for account_id, organization_uuid, and account_uuid to 0 and empty strings. This could lead to unexpected behavior if these defaults are not overridden.

### Cmdlet Parameter Validation Security Model
The security model for cmdlet parameter validation forces validation for any parameter not in the known sets, preventing unknown parameters from consuming arguments that could be paths.

### PowerShell Alternative Parameter Prefixes
PowerShell's tokenizer accepts alternative parameter-prefix characters such as '/', en-dash, em-dash, and horizontal bar, which are treated as equivalent to the ASCII hyphen-minus. This is used for parameter checks in PowerShell commands.

### Security Check for cd+git Commands
A security check prevents compound commands with 'cd' and 'git' across pipe segments to avoid bare repository attacks. This is not publicly documented.

### Destructive Command Patterns Warning System
The code includes a warning system for potentially destructive commands like 'git reset --hard' and 'rm -rf'. This system provides warnings but does not affect permission logic, which may surprise users expecting stricter controls.

### Sandbox Exclusion Not a Security Boundary
The 'excludedCommands' feature is explicitly noted as a user convenience, not a security boundary. Bypassing it is not considered a security bug.

### Meta Key Handling Quirk
The `parseKey` function treats the 'meta' key as true if `keypress.meta`, `keypress.name` is 'escape', or `keypress.option` is true. This behavior is noted as potentially removable in a future major version.

### Hidden X10 Mouse Event Feature Flag
The tokenizer has a hidden 'x10Mouse' option that treats 'CSI M' as an X10 mouse event prefix, consuming 3 payload bytes. This is only enabled for stdin input to avoid swallowing display text in output streams.

### Command Registry Uses Local Storage for Persistence
The Command Registry in Claude Code uses local storage to persist the list of recent commands, with a maximum of 5 recent commands stored under the key 'claude-code-recent-commands'. This behavior is not documented publicly.

### Default Settings Reveal Internal Preferences
The default settings include a dark theme, a specific font size for chat and code, and a maximum token limit of 8096. These defaults suggest internal preferences and constraints not publicly documented.

### Default Keybindings for Core Actions
Default keybindings include 'Ctrl+Shift+N' for new conversation and 'Ctrl+K' for command palette. These defaults indicate prioritized actions for efficient user interaction.

### Role Hierarchy and Permissions
The role hierarchy assigns numeric ranks to roles: owner (3), collaborator (2), viewer (1). This hierarchy determines permissions, such as only owners can transfer ownership or manage access.

### Client Search Scoring Mechanism
The client-side search scores text based on token matches, with bonuses for word boundary matches and multiple occurrences. The score is penalized if not all tokens match. This nuanced scoring is not documented publicly.

### Default Keyboard Shortcuts
The KeyboardSettings component defines default keyboard shortcuts like 'Ctrl+Shift+N' for new conversations and 'Ctrl+L' to focus input, which are not publicly documented.

### Restricted Directories Feature for File Operations
The PermissionSettings component allows users to specify 'restricted directories' for file operations, limiting Claude's access. This feature isn't prominently advertised, potentially impacting user privacy and security settings.

### Max Tokens Limit Set to 200,000
The `ModelSettings.tsx` file reveals a maximum token limit of 200,000 for AI model responses, which is significantly higher than typical public limits.

### Cmd/Ctrl+B Toggles Sidebar
A global keyboard shortcut (Cmd/Ctrl+B) is implemented to toggle the sidebar. This shortcut is not commonly documented in user interfaces, potentially surprising users who discover it accidentally.

### Keyboard Height Padding on iOS Safari
The MobileInput component uses paddingBottom equal to the keyboard height to avoid issues with position:fixed on iOS Safari. This is a workaround for a known bug where fixed positioning breaks when the keyboard is open on iOS Safari.

### Focus Trap for Custom Overlays
The FocusTrap component is used to trap keyboard focus within its children, but it's specifically noted that Radix Dialog handles focus trapping natively. This component is intended for custom overlays that don't use Radix primitives.

