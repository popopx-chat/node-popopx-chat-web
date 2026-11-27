/**
 * Facts for the two local extensions in v1.0.2 build 4, compiled into the page.
 *
 * Every value is read from the node sources at `6de6eb8`:
 *   `Sources/PopopxMacNode/Assistant/AssistantModels.swift` — four permission levels,
 *     the 08:00/30-minute defaults, IMAPS 993 / SMTPS 465, the Keychain references;
 *   `AssistantApprovalGate.swift` — 32-character base64url receipt, 900-second lifetime;
 *   `AssistantAuditStore.swift` — `ledger/assistant.sqlite3`;
 *   `GodsEyeViewPolicy.swift` — `127.0.0.1`, port 18931, package and entry checks;
 *   `GodsEyeViewConfig.swift` — `allowSourcePull` defaults false, Keychain refs.
 *
 * The prose that explains these numbers is localized; the numbers themselves are not.
 */

export const ASSISTANT = {
  commit: "7ddacdc",
  permissions: ["read", "propose", "write", "admin"],
  defaultPermissions: ["read", "propose"],
  approvalState: "pending_user_approval",
  receipt: "HMAC-SHA256",
  receiptCharacters: 32,
  receiptSeconds: 900,
  briefing: "08:00",
  patrolMinutes: 30,
  offlineMinutes: 15,
  imapPort: 993,
  smtpPort: 465,
  ledger: "ledger/assistant.sqlite3",
  mailRefs: ["assistant/mail/imap-password", "assistant/mail/smtp-password"],
} as const;

export const GODSEYE = {
  commit: "99694e2",
  packageName: "gods-eye-view",
  pinnedVersion: "1.0.0",
  bindHost: "127.0.0.1",
  defaultPort: 18931,
  entryFile: "server.js",
  mcpEntryFile: "mcp-server.js",
  minimumNodeMajor: 20,
  maximumPackageBytes: 1048576,
  allowSourcePull: false,
  writeExamples: ["draw", "mark", "export", "report"],
  keychainRefs: [
    "godseye/aisstream",
    "godseye/opensky-client-id",
    "godseye/opensky-client-secret",
  ],
} as const;