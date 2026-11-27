/**
 * The edge-hub bridges and the sealed pairing envelope, compiled into the page.
 *
 * Every value here is a policy limit, a wire string or a refusal rule read out of the
 * shipping node sources in `popopx-mac-node` at `6de6eb8` (v1.0.2 build 4): the four hub
 * bridges from `5858b3c`, the sealed pairing link from `040ef25`, the update gate and LAN
 * Discover from `e40f5e3`, the private assistant from `7ddacdc`, and the God's Eye View
 * bridge from `99694e2`. Nothing here is copy written for the site, and no limit is
 * rounded: a reader who edits the node can re-derive each number from the citation
 * beside it.
 *
 * Re-derive from a checkout next to this one:
 *   grep -n "maximumServers\|maximumEntities\|maximumCalDavServers\|maximumDiscoveryTargets" \
 *     ../PopopxMacNode/Sources/PopopxMacNode/HubBridges/HubBridgeConfig.swift
 *   grep -n "proposalLifetime" \
 *     ../PopopxMacNode/Sources/PopopxMacNode/Models/MacNodeModels.swift
 *   grep -n "linkPrefix\|maxSealableBytes\|maxOpenableBytes" \
 *     ../PopopxMacNode/Sources/PopopxMacNode/Pairing/OpaquePairingCodec.swift
 *
 * The bridges are in the signed build-4 image this portal links, not only on `main`.
 */

/** What a hub target is allowed to be. `EdgeBoundary.swift:124-227`. */
export const EDGE_HOST_POLICY = {
  /** Loopback, RFC 1918, ULA or a `.local` name. */
  admittedClasses: ["loopback", "RFC 1918", "ULA (fc00::/7)", ".local"],
  /** Names outside `.local` are refused, never resolved: `EdgeBoundary.swift:15-20`. */
  unresolvedNames: "refused",
  /** `http://user:pass@host/` is refused before the host is classified. */
  credentialsInURL: "refused",
  /** An allow-listed host that answers 302 cannot bounce the node. `HubLinks.swift:79-138`. */
  redirects: "refused",
} as const;

/** Local capability discovery. `LocalCapabilityDiscovery.swift:92-395`. */
export const DISCOVERY = {
  endpoint: "/v1/discovery/capabilities",
  /** Read-only: the scan button is POST /v1/discovery/scan, the card is a GET. */
  mode: "GET",
  ollamaOrigin: "http://127.0.0.1:11434",
  cacheSeconds: 20,
  probeTimeoutSeconds: 0.35,
  maximumTargets: 8,
  maximumWorkspaceRows: 8,
  /** Stated on every snapshot; `LocalCapabilityDiscovery.swift:83`. */
  boundary: "loopback plus the LAN targets this owner listed",
  /** There is no mDNS responder, port sweep or subnet walk; `:8-10`. */
  scanning: "none",
} as const;

/** The local MCP client. `HubBridgeConfig.swift:117-265`, `MCPBridge.swift:215-323`. */
export const MCP = {
  protocol: "JSON-RPC 2.0",
  methods: ["initialize", "tools/list", "tools/call"],
  transports: ["stdio", "streamable HTTP (loopback)"],
  configPath: "config/mcp_servers.json",
  maximumServers: 8,
  maximumAllowedCommands: 16,
  maximumArguments: 32,
  /** Empty `allowedTools` means read-only tools only, never everything; `MCPBridge.swift:347-352`. */
  emptyToolList: "read-only tools only",
} as const;

/** Home Assistant and MQTT. `HubBridgeConfig.swift:270-435`, `SmartHomeBridge.swift:1-27`. */
export const SMART_HOME = {
  protocols: ["Home Assistant REST (local)", "MQTT 3.1.1"],
  defaultMqttPort: 1883,
  maximumEntities: 64,
  highRiskDomains: ["lock", "alarm_control_panel", "siren", "camera", "vacuum"],
  readOnlyByDefault: true,
  telemetryByDefault: false,
} as const;

/** CalDAV free/busy. `HubBridgeConfig.swift:439-542`, `CalDavBridge.swift:87-277`. */
export const CALDAV = {
  methods: ["PROPFIND", "REPORT"],
  maximumServers: 4,
  maximumCollectionsPerServer: 4,
  minimumSlotMinutes: 15,
  lookaheadDays: 14,
  maximumWindowDays: 92,
  /** Fields parsed into a `private` type and dropped inside the parse; `HubBridges/CalDav/ICalendarFreeBusy.swift:1-27`. */
  discardedFields: ["SUMMARY", "DESCRIPTION", "LOCATION", "ORGANIZER", "ATTENDEE"],
  keptFields: ["DTSTART", "DTEND"],
} as const;

/** The human-in-the-loop gate. `PrivacyProposalLedger.swift:278-334`, `MacNodeModels.swift:107`. */
export const APPROVAL = {
  state: "pending_user_approval",
  receipt: "HMAC-SHA256",
  receiptCharacters: 24,
  lifetimeSeconds: 15 * 60,
  binding: "proposal id + verb",
} as const;

/** Keychain references, never values. `HubSecrets.swift:62-112`. */
export const HUB_SECRETS = {
  service: "im.popopx.macnode.hub",
  referenceShape: "smarthome/homeassistant/token",
  plaintextFileFallback: false,
  unpackagedRun: "memory only, lost at exit",
} as const;

/**
 * The sealed pairing envelope. `OpaquePairingCodec.swift:61-124`, produced by
 * `MacNodePopopxBridge.swift:1231-1279`.
 *
 * The key is derived from a *published* input that ships inside the app. That makes
 * the envelope an obfuscation for previews, screenshots and forwards — not
 * confidentiality against anyone who reads the source or the binary.
 */
export const SEALED_PAIRING = {
  linkPrefix: "https://popopx.chat/i/v1/",
  linkShape: "https://popopx.chat/i/v1/<base64url(nonce || ciphertext || tag)>",
  kdf: "HKDF-SHA256",
  cipher: "ChaCha20-Poly1305",
  nonceBytes: 12,
  tagBytes: 16,
  keyBytes: 32,
  maxSealableBytes: 2048,
  maxOpenableBytes: 4096,
  /** The wizard's QR image, served by the loopback console only. */
  qrEndpoint: "/api/pairing/qr.png",
  /** What the envelope is for, in the codec's own words: `OpaquePairingCodec.swift:66-69`. */
  guarantee: "hides the relay from previews, screenshots and forwards",
} as const;