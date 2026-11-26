/**
 * The node's own runtime numbers, compiled into the page.
 *
 * Nothing here is copy written for the site. Each value is read out of the shipping
 * node sources in the popopx-mac-node repository, and the citation travels with it
 * so a reader — or the next person to edit this file — can re-check it. A portal that
 * paraphrases a protocol always ends up contradicting it, so the strings that go on
 * the wire (`PPXNODE1`, `X-PPX-Token`, `::popopx_sys::NODE_CMD::`) are spelled here
 * exactly once and never localized.
 *
 * Re-derive with, from a checkout of popopx-mac-node next to this one:
 *   grep -n "pairingCodePrefix\|consolePort\|consoleTokenHeader" \
 *     ../PopopxMacNode/Sources/PopopxMacNode/Models/MacNodeModels.swift
 * and read the contract tests that pin them:
 *   ../PopopxMacNode/Tests/PopopxMacNodeTests/MacNodeContractTests.swift:198-212
 */

/** Ports the node knows about, and who actually listens on each one. */
export interface RuntimePort {
  port: number;
  /** What binds it — the node itself, or a tool the node only dials as a client. */
  owner: "node" | "tool" | "daemon";
  bind: string;
  protocol: string;
  /** Localized at the column level only; the address is a wire value. */
  purpose: "console" | "inference" | "control";
  authenticated: string;
}

/**
 * `NodeWire` in `MacNodeModels.swift:53-96`. The node owns exactly one listener, and
 * the two other ports belong to processes the node starts and connects to as a client.
 */
export const RUNTIME_PORTS: RuntimePort[] = [
  {
    port: 18920,
    owner: "node",
    bind: "127.0.0.1",
    protocol: "HTTP/1.1 + SSE",
    purpose: "console",
    authenticated: "X-PPX-Token",
  },
  {
    port: 11434,
    owner: "tool",
    bind: "127.0.0.1",
    protocol: "HTTP",
    purpose: "inference",
    authenticated: "OLLAMA_HOST",
  },
  {
    port: 5225,
    owner: "daemon",
    bind: "127.0.0.1",
    protocol: "ws://",
    purpose: "control",
    authenticated: "--chat-server-port",
  },
];

/**
 * The pairing credential, as the node mints it.
 *
 * `MacNodeModels.swift:55` (prefix), `:974` and `MacNodePopopxBridge.swift:586` (the
 * `PPXNODE1-<base64url(body)>.<base64url(sig)>` shape), `:619` and `:2225-2232` (the
 * `"once": true` claim and the mark-as-used write), `MacNodeModels.swift:102` (900 s).
 * The signature is Ed25519 over the node's own key
 * (`~/Library/Application Support/PopopxMacNode/pairing/node.key`,
 * `MacNodeModels.swift:2342`, signed at `MacNodePopopxBridge.swift:563-581`).
 * Since `040ef25` this is the credential *inside* the sealed envelope: the QR and copy
 * button carry `https://popopx.chat/i/v1/…` (`data/edgeHub.ts`), and the raw code is
 * only shown in the console's diagnostics drawer.
 */
export const PAIRING = {
  codePrefix: "PPXNODE1",
  codeShape: "PPXNODE1-<base64url(body)>.<base64url(signature)>",
  signature: "Ed25519",
  lifetimeSeconds: 900,
  singleUse: true,
  deliveredAs: "/api/pairing/qr.png",
} as const;

/**
 * The command wire, in the only form the parser accepts.
 *
 * `MacNodeModels.swift:41-49`: three `::`-separated segments after the marker, split
 * on the first `::` only, payload capped at 1 024 characters minus the two leading
 * segments because that is the ceiling the iOS parser enforces (`:52`).
 */
export const WIRE = {
  commandPrefix: "::popopx_sys::NODE_CMD::",
  commandShape: "::popopx_sys::NODE_CMD::{serviceId}::{action}::{payload}",
  segments: 3,
  maxPayloadCharacters: 1024,
  heartbeatSeconds: 20,
  lockTriggers: ["🔒", "LOCK_ALL", "lock_all"],
} as const;

/**
 * Where the node puts things, under one data root.
 *
 * `AppPaths` in `MacNodeModels.swift:2305-2376`. Pairing and vault material are
 * ordinary files written atomically with `.completeFileProtection` and mode `0600`
 * (`MacNodePopopxBridge.swift:877-881`, `MacNodeModels.swift:2505`). The exception is
 * a hub-bridge credential, which is a Keychain item under `im.popopx.macnode.hub`
 * (`HubBridges/HubSecrets.swift`), because the bridges landed after this file was
 * first written; `DATA_LOCATIONS` below still lists the data-root layout only.
 */
export const DATA_ROOT = "~/Library/Application Support/PopopxMacNode";

export interface DataLocation {
  /** Path relative to the data root, as the app creates it. */
  path: string;
  tone: "artifact" | "secret" | "log" | "workspace";
  /** Which dictionary key in `security.dataNote` explains this one. */
  note: "output" | "vault" | "pairing" | "weights" | "ledger" | "logs" | "config";
}

export const DATA_LOCATIONS: DataLocation[] = [
  { path: "output/", tone: "artifact", note: "output" },
  { path: "vault/sealed/", tone: "secret", note: "vault" },
  { path: "pairing/", tone: "secret", note: "pairing" },
  { path: "engines/weights/", tone: "workspace", note: "weights" },
  { path: "engines/ltx2/", tone: "workspace", note: "weights" },
  { path: "ledger/", tone: "artifact", note: "ledger" },
  { path: "outbox/", tone: "artifact", note: "output" },
  { path: "logs/", tone: "log", note: "logs" },
  { path: "config/", tone: "log", note: "config" },
];

/**
 * The three tiers, from `ModelPlan.recommend(memoryGB:)` in
 * `MacNodeModels.swift:698-756`, with the bands from `ComputeTier` (`:531-570`).
 * Model references are product literals and are never translated, the same way the
 * engine catalog keeps `Ollama / Qwen3.8` in English.
 */
export interface TierPlan {
  tier: "flagship" | "high" | "light";
  band: string;
  llm: string;
  video: string;
  residentGB: string;
  heavyVideo: "local" | "mesh";
  pull: string;
}

export const TIER_PLANS: TierPlan[] = [
  {
    tier: "flagship",
    band: ">= 96 GB",
    llm: "qwen3.8:27b-q8_0",
    video: "LTX-2.5 · BF16 full weights · MLX",
    residentGB: "min(memory − 12, 84) GB",
    heavyVideo: "local",
    pull: "ollama pull qwen3.8:27b-q8_0",
  },
  {
    tier: "high",
    band: "48 – 95 GB",
    llm: "qwen3.8:27b-q4_k_m",
    video: "LTX-2.5 · MLX 8-bit",
    residentGB: "min(memory − 10, 52) GB",
    heavyVideo: "local",
    pull: "ollama pull qwen3.8:27b-q4_k_m",
  },
  {
    tier: "light",
    band: "< 48 GB",
    llm: "qwen3.8:9b-q4_k_m",
    video: "LTX-2.5 · MLX 4-bit · short clips",
    residentGB: "min(memory − 8, 28) GB",
    heavyVideo: "mesh",
    pull: "ollama pull qwen3.8:9b-q4_k_m",
  },
];

/**
 * What the node needs on the machine, in the order its own installer works through
 * them (`HardwareProfilerAndInstaller.swift:314-357` probes, `:536-545` installs).
 * Everything here is a local tool the engines call, not a service we host.
 */
export interface Prerequisite {
  name: string;
  /** Which dictionary key in `install.prereqNote` explains it. */
  note: "system" | "memory" | "disk" | "media" | "inference" | "bridge";
  required: "hard" | "wizard" | "optional";
}

export const PREREQUISITES: Prerequisite[] = [
  { name: "macOS 14+", note: "system", required: "hard" },
  { name: "Apple Silicon", note: "memory", required: "hard" },
  { name: "> 40 GB free SSD", note: "disk", required: "hard" },
  { name: "FFmpeg + ffprobe", note: "media", required: "wizard" },
  { name: "Ollama", note: "inference", required: "wizard" },
  { name: "LTX-2.5 MLX workspace", note: "inference", required: "wizard" },
  { name: "popopx-chat daemon", note: "bridge", required: "optional" },
];
