# Evaluation Insights

*Clean-room distillation of 29 insights regarding evaluation.*

---

### Advisor Model Configuration Surprises
The '/advisor' command allows configuring a secondary advisor model to review outputs, but it's gated by 'canUserConfigureAdvisor()'. This suggests a layered model approach where outputs can be cross-verified by different models, a feature not commonly publicized.

### Sonnet Model Used for Memory Relevance
The memory system uses a Sonnet model to select relevant memories, with a strict cap of 5 files per query. This highlights a reliance on AI for efficient data retrieval.

### Image Resizing Strategy Revealed
Images are resized client-side to a maximum of 2000 pixels, while the server resizes them above 1568 pixels. This dual resizing strategy is designed to balance quality and server load, a detail not typically shared.

### MDM Subprocesses Run in Parallel
The code initiates MDM subprocesses in parallel to optimize startup time, reducing the impact of heavy module evaluation on performance.

### JWT Decoding Without Signature Verification
The system decodes JWT payloads without verifying the signature, which could have security implications if not handled carefully.

### Native Client Attestation Placeholder
The attribution header includes a 'cch=00000' placeholder when NATIVE_CLIENT_ATTESTATION is enabled. Bun's native HTTP stack replaces it with a computed hash to verify requests from a real Claude Code client.

### Verbose Telemetry Safe Error Naming
The class `TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS` has an unusually verbose name to ensure developers verify that error messages are safe for telemetry, containing no sensitive data.

### Effort Level Support in Claude Models
The function modelSupportsEffort() indicates that only certain Claude 4 models (opus-4-6, sonnet-4-6) support the effort parameter. This is a sensitive setting affecting model quality.

### Session Ingress Token Retrieval Logic
The system prioritizes retrieving the session ingress token from an environment variable, then a file descriptor, and finally a well-known file. This multi-step fallback mechanism ensures token availability even in subprocesses.

### Claude Desktop Version Check for Handoff
The DesktopHandoff component checks if Claude Desktop is installed and verifies the version. It requires v1.1.2396+ for compatibility, which is not mentioned in public documentation.

### All-Time Stats Promise Never Rejects
The createAllTimeStatsPromise function is designed to always resolve, even if there's an error. It defaults to an error message 'Failed to load stats' if data retrieval fails.

### Security Measure in API Key Helper
The useApiKeyVerification function includes a security measure to prevent Remote Code Execution (RCE) via settings.json by skipping the execution of apiKeyHelper before a trust dialog is shown.

### API Key Verification Statuses
The API key verification process uses specific statuses: 'loading', 'valid', 'invalid', 'missing', and 'error'. These statuses guide the verification flow and error handling.

### Internal Cache Break Detection Flags
The code includes internal flags like 'autoModeActive', 'isUsingOverage', and 'cachedMCEnabled' to track cache behavior changes. These flags are used to verify fixes and ensure certain conditions do not break the cache anymore.

### GrowthBook Feature Flags and Caching
The GrowthBook integration uses a workaround for caching remote evaluation feature values, indicating issues with the SDK's handling of remoteEval responses. This suggests potential reliability issues in feature flag management.

### Predefined One-Token Words List for Token Counting
The loremIpsum generator uses a predefined list of common English words that are verified to tokenize as single tokens. This ensures accurate token counting when generating text, a detail not typically exposed in public documentation.

### Verify Skill Restricted to 'ant' User Type
The 'verify' skill is only registered if the environment variable USER_TYPE is set to 'ant'. This suggests it's a feature restricted to internal or specific users.

### GitHub Token Retrieval Timeout
The GitHub token retrieval process in 'remote-setup' has a timeout set to 5000 milliseconds, indicating a design decision to limit wait times for authentication.

### Vim Mode Detection Based on Config
The function `isVimModeEnabled` checks if vim mode is active by accessing a global configuration object and verifying if `editorMode` is set to 'vim'. This internal mechanism is not publicly documented.

### Tengu Destructive Command Warning Feature
The code contains a feature flag 'tengu_destructive_command_warning' that controls whether a destructive command warning is shown in PowerShell permission requests. This feature flag is checked using the 'getFeatureValue_CACHED_MAY_BE_STALE' function.

### Parallel Keychain Prefetch on macOS
The `startKeychainPrefetch` function fires macOS keychain reads in parallel to reduce startup time by approximately 65ms. This is achieved by reading 'Claude Code-credentials' and 'Claude Code' keychain entries simultaneously, leveraging subprocesses during import evaluation.

### Auto Mode Gate Access Verification
The system verifies access to auto mode gates using 'verifyAutoModeGateAccess', which can update context and trigger notifications. This check is influenced by the 'TRANSCRIPT_CLASSIFIER' feature flag.

### Screenshot JPEG Quality Set to 0.75
Screenshots taken by the system are set to a JPEG quality of 0.75, which balances file size and image clarity. This specific choice reflects a design decision to optimize performance.

### Essential Commands Verification
The system includes a verification step to ensure essential commands like 'help', 'config', 'init', 'commit', and 'review' are present. Missing any of these results in a failure, indicating their critical role in the system's operation.

### API Image Size Limits and Resizing
The API enforces a maximum base64-encoded image size of 5 MB, with client-side resizing limits set at 2000px, slightly larger than the server-side 1568px limit to preserve quality.

### Memory Age Staleness Warning
Claude uses a function to calculate memory age and provides a staleness warning for memories older than one day. This warning highlights that memory claims may be outdated and should be verified against current data.

### User Type Restriction: 'ant'
The 'registerVerifySkill' function contains a restriction that only allows users with a USER_TYPE of 'ant' to register the skill. This suggests internal user roles not publicly documented.

### Unlimited Extra Usage Check for Teams
The system checks if an organization has unlimited extra usage by verifying if `extraUsage.monthly_limit` is `null`. If so, it informs the user that no request is needed. This behavior is not documented publicly.

### Bridge Safe Command Check in User Input
The processUserInput function includes a check for 'isBridgeSafeCommand', indicating certain commands are evaluated for safety before execution. This is not publicly documented and suggests a layer of command validation.

