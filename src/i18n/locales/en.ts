import type { Dictionary } from "../types";

export const en: Dictionary = {
  dir: "ltr",

  nav: {
    overview: "Overview",
    node: "What is a Node",
    features: "Capabilities",
    install: "Install & Setup",
    security: "Privacy & Control",
    troubleshooting: "Troubleshooting",
    releases: "Releases & GitHub",
    download: "Get the node",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    chooseLanguage: "Language",
  },

  ecosystem: {
    heading: "The rest of POPOPX",
    body:
      "Three portals, one project, all of them ours. Nothing on this page loads anything from them and no request is ever made to them: you only leave node.popopx.chat if you click.",
    chat: "POPOPX Chat",
    chatBody:
      "The messaging network itself — end to end, no global ID, and the queue your node listens on.",
    botStudio: "Bot Studio",
    botStudioBody:
      "Where the service accounts behind the ten engines are written and hosted, on a server you control.",
    serviceSuite: "Service accounts",
    serviceSuiteBody:
      "The zero-knowledge encrypted channel ecosystem those engines talk to.",
  },

  routes: {
    "/": { eyebrow: "OVERVIEW", title: "POPOPX Mac Node — your own Mac runs the ten engines" },
    "/node": { eyebrow: "WHAT IS A NODE", title: "What a node is, and what it is not — POPOPX Mac Node" },
    "/features": { eyebrow: "CAPABILITIES", title: "Ten local engines and the hardware that runs them — POPOPX Mac Node" },
    "/install": { eyebrow: "INSTALL & SETUP", title: "Install, pair, upgrade, back up, remove — POPOPX Mac Node" },
    "/security": { eyebrow: "PRIVACY & CONTROL", title: "What stays on your disk, and how to stop it — POPOPX Mac Node" },
    "/troubleshooting": { eyebrow: "TROUBLESHOOTING", title: "Ports, firewalls and memory ceilings — POPOPX Mac Node" },
    "/releases": { eyebrow: "RELEASES & SOURCE", title: "Releases, digests and the whole source tree — POPOPX Mac Node" },
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Your Device. Your Node.",
    titleAccent: "Your Control.",
    subtitle:
      "POPOPX Mac Node is the edge of the network you own. It runs the local models, media and file engines behind the ten Discover services on your own Mac, beside POPOPX Chat and Bot Studio. The network relays your encrypted messages; the inference, the render, the sealed archive and the secrets stay on hardware you bought.",
    ctaDownload: "Download the DMG",
    ctaSource: "Read the source",
    releaseLabel: "Latest release",
    sizeLabel: "Size",
    digestLabel: "SHA-256",
    statusFetching: "Asking GitHub Releases…",
    statusLive: "Live from GitHub Releases",
    statusFallback: "GitHub unreachable — showing the pinned release",
    copyDigest: "Copy digest",
    digestCopied: "Digest copied",
    verifyTitle: "Verify before you open it",
    verifyBody:
      "Save the image and the release digest file into the same folder and check them before you open anything. A release may publish a SHA256SUMS.txt manifest, a single-asset .sha256 sidecar, or both — so Releases & GitHub prints the exact two commands for the release you are looking at.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Your own hardware",
    statStorage: "Artifacts on your own SSD",
    statIdentity: "No account, no ID",
    statSource: "AGPL-3.0 end to end",
  },

  overview: {
    splitHeading: "The network coordinates. Your machine executes.",
    splitSub:
      "This is the whole idea, and it is worth stating exactly, because the usual reading of a product like this is backwards: the cloud is not doing the work and your Mac is not a thin client. Each side does the only part it should do.",
    cloudTitle: "What the network carries",
    cloudBody:
      "SMP relays and XFTP storage move your messages and files end to end between your own devices, and the ten Discover service accounts send one signal each. A relay sees ciphertext and routing metadata. It never receives a model, a prompt, a frame or a filename, and it runs no part of any engine.",
    macTitle: "What your Mac does",
    macBody:
      "The node takes that signal and does the work on the machine in front of you: quantised inference through Ollama on loopback, LTX-2.5 rendering through MLX, FFmpeg and GOP watermarking, CryptoKit sealing and hash-chain vaults, diskutil and AppKit for the physical actions. Then it writes the result to your own disk.",
    pathsHeading: "Start where you actually are",
    paths: [
      {
        title: "Understand the split",
        body:
          "What a node is, the one line it listens on, how a phone gets permission to drive it, and which ports are involved.",
      },
      {
        title: "Put it on a Mac",
        body:
          "Prerequisites, the verified DMG, building from source, first pairing, upgrades, moving machines and removing it completely.",
      },
      {
        title: "Check what leaves",
        body:
          "A directory-by-directory account of the data root, what is transmitted back to your phone, where keys live, and how to stop or revoke.",
      },
      {
        title: "Fix what broke",
        body:
          "The failures that actually happen: a port already bound, a model that never answered, weights that were skipped, a code that expired.",
      },
    ],
  },

  architecture: {
    heading: "Three guarantees, no service in between",
    sub:
      "The interesting part of this architecture is what is missing from it: no account service, no key escrow, no analytics endpoint, no hosted inference.",
    items: [
      {
        title: "Physical local storage",
        body:
          "Every artifact an engine produces — the briefing, the watermarked clip, the sealed archive, the decoded report — is written to your own SSD under one data root. It is outside iCloud sync and outside any shared container, and the ledgers are written with complete file protection, so they are not readable at rest once the machine is locked.",
      },
      {
        title: "No account, no ID",
        body:
          "There is no registration, no phone number, no email and no device identifier to hand over. Pairing the phone to the node is one QR scan, and the commands that arrive after it travel over your own popopx-chat queue with SMP and XFTP carrying them end to end.",
      },
      {
        title: "AGPL-3.0 across the whole stack",
        body:
          "The ten engines, the SMP gateway, the local web console, the GOP and frequency-domain watermarking and the compute-point ledger are one AGPL-3.0-only source tree. There is no closed core: the blind-signature credential code and the crypto registry live in popopxmq, in the open.",
      },
    ],
  },

  dashboard: {
    badge: "UI Preview — interface design mock-up, not a live node",
    heading: "What the console shows once the node is running",
    sub:
      "The app carries one local web console, and this is a picture of its status screen: the machine it found, the unified memory it decided to reserve, the engines it can be asked to run, and the phones it let in. The layout, the column names and the arithmetic are the shipped product's. Nothing here is read off a live process.",
    machineLabel: "Sample machine",
    machineHint:
      "The node reads chip, core count and physical memory from sysctl on launch. A browser cannot read yours — navigator.deviceMemory is capped at 8 GB on every implementation — so pick one of these configurations and the figures below recompute.",
    statusHeading: "Status",
    statusConnected: "Connected",
    daemonRunning: "Daemon running",
    loopbackNote:
      "The console binds 127.0.0.1 and refuses a bind on 0.0.0.0, a LAN address or a hostname, so it is reachable from this Mac only.",
    memHeading: "Unified memory allocation",
    memTotalLabel: "Unified memory",
    memCeilingLabel: "Resident ceiling",
    memMeshLabel: "Mesh ceiling",
    memHeadroomLabel: "Kept for the desktop session",
    usageLabel: "Engine working set (estimate)",
    servicesHeading: "Local engines and services",
    servicesNote:
      "On the left, the ten engines and the three shelves they ship under — the same catalog the phone's menu prints. On the right, the three addresses the node knows about: the one it listens on and the two it dials as a client. Both are fixed lists, not measurements, and an engine runs only if you enable it.",
    devicesHeading: "Paired devices",
    deviceColumns: ["Device", "Paired", "Last seen", "Revoke"],
    devicesActive: "active",
    revoke: "Revoke",
    revokedRow: "revoked",
    neverSeen: "never seen",
    disclaimer:
      "This card is a picture, not a client. It opens no connection and reads no process: choosing a machine applies the node's published tier rule in your own browser, and Revoke changes only the row you are looking at. In the real console that button marks the device revoked, drops its commands from then on, and does not tear down the chat connection — Privacy & Control says exactly what it does not do.",
  },

  node: {
    heading: "A node is a computer you already own",
    sub:
      "Not a region, not an instance type, not a subscription tier. One Mac that runs the parts of POPOPX that should not happen somewhere else — and the only thing you have to trust is the machine you already trust with your files.",
    points: [
      {
        title: "The sensitive work never leaves",
        body:
          "Medical reports are parsed by Vision on your own machine. Raw footage is sliced and watermarked locally. The vault sealing and the sealed archive are CryptoKit operations on your own disk. Nothing in those paths has a hosted endpoint to call.",
      },
      {
        title: "The distance is zero",
        body:
          "Inference happens on unified memory next to the process that asked for it. The model client is pinned to 127.0.0.1:11434, which is why there is no code path in the node that can reach a hosted inference API even by accident — the host literal would have to change first.",
      },
      {
        title: "You already paid for it",
        body:
          "Compute points meter the cycles your own hardware spends, and the Edge Compute Mesh is the one engine that lends idle capacity outward instead of borrowing it. The tier you get is a function of the memory you bought.",
      },
      {
        title: "Permission is per device",
        body:
          "One signed, single-use, fifteen-minute pairing code authorizes one device. The console lists what is paired, and revoking it is a button — with one honest caveat about what that button does not do, covered on the privacy page.",
      },
    ],
    wireHeading: "One line, three segments",
    wireBody:
      "A command from the phone is an ordinary message on your own popopx-chat queue, and inside it is one marker line: a prefix, the engine id, the action, and a JSON payload. The parser splits on the first separator only, so a payload containing the separator survives intact, and a line whose engine id is unknown, whose payload is empty, or whose payload is over the ceiling the iOS side accepts is dropped rather than partially executed.",
    wireSampleLabel: "The only accepted form",
    pairingHeading: "Pairing, in the order it actually happens",
    pairingSub:
      "The node mints a credential, you show it to the phone once, and the credential is worthless afterwards. Nothing is stored on a server, because there is no server that could store it.",
    pairingSteps: [
      {
        title: "The node offers",
        body:
          "From the menu bar or the console, the node writes an offer, signs the body with its own Ed25519 key — the one at pairing/node.key under its data root — and renders it as a QR code locally through CoreImage. No image leaves the machine.",
      },
      {
        title: "The phone claims it",
        body:
          "POPOPX iOS scans the code, and the contact that results is the device key. That one scan establishes the SMP bridge; from then on the Discover service accounts talk to your node and to nothing else.",
      },
      {
        title: "The offer dies",
        body:
          "The first claim marks the offer used. Generating a new code retires the previous one, so a photographed QR is not a standing invitation — it expires on its own after fifteen minutes even if nobody ever scans it.",
      },
    ],
    pairingFacts: {
      lifetime: "Offer lifetime",
      singleUse: "Redemption",
      signature: "Signed by",
      delivery: "Rendered as",
    },
    sealedHeading: "The QR is a sealed envelope",
    sealedSub:
      "Since 040ef25 the wizard's QR and copy button carry one opaque URL instead of the raw credential. The envelope keeps the relay address out of a screenshot, a link preview or a forward; it is not a secret that the holder of the app cannot open.",
    sealedShapeLabel: "Sealed link shape",
    sealedFacts: {
      kdf: "Key derivation",
      cipher: "AEAD",
      nonce: "Nonce",
      caps: "Payload caps",
    },
    sealedBody:
      "The key is derived with HKDF-SHA256 from an input published inside the app, and the box is ChaCha20-Poly1305 with a fixed associated-data string, so anyone who reads the source can open an envelope. That is the design: the link hides the SMP queue address from previews, screenshots and forwards, while the signed, single-use, fifteen-minute credential inside is what actually authorises a device. The raw PPXNODE1-… code and the invitation URI that carries the queue address stay in the console's diagnostics drawer; the node public key appears there and on the paired-device rows, never on the wizard's face. The QR image is rendered locally and served only on loopback at /api/pairing/qr.png.",
    portsHeading: "The listening side of the node",
    portsSub:
      "The node itself opens one port. The other two belong to programs it starts and connects to as a client, which matters when you are reading a firewall log: a connection to 11434 or 5225 was made by the node, not accepted by it.",
    portsColumns: ["Port", "Bound by", "Address", "Wire", "What guards it"],
    portsOwner: {
      node: "The node",
      tool: "Ollama",
      daemon: "popopx-chat",
    },
    portsPurpose: {
      console: "Web console and the engine log stream",
      inference: "Local model inference",
      control: "Chat daemon control socket",
    },
    portsFootnote:
      "All three are loopback. The console is plain HTTP with no TLS, which is only a reasonable design because it never leaves the machine: bind attempts on 0.0.0.0, a LAN address or a hostname are refused before a socket is created, and the address is hardcoded in the app rather than read from a config file. What guards it instead is a random twenty-four-byte token issued at every launch, sent as X-PPX-Token, held in memory only, and dead when the process exits. The chat daemon's control socket has no authentication at all — that is the honest description of it — and it is safe only for as long as it stays on 127.0.0.1.",
  },

  hub: {
    heading: "Five local capabilities, one boundary",
    sub:
      "Build 4 adds owner-scoped capability discovery, four protocol adapters and a sealed pairing link to the signed image. The bridges are off by default, every target is admitted by the same positive allow-list, and every write becomes a signed proposal a human has to approve. None of it is a hosted service, and none of it opens a new listener.",
    status:
      "In the signed v1.0.2 build 4 (6de6eb8, 27 November 2026) and in the Universal DMG on this site. The cards below describe the image you are downloading, not a source branch.",
    cards: [
      {
        title: "Discovery that answers only about itself",
        body:
          "The console reports what this Mac already has: Ollama on 127.0.0.1:11434 and the models it serves, the workspace folders you authorised, the EventKit permission state, and a TCP reachability row for up to eight LAN targets you typed yourself. It is a read-only GET /v1/discovery/capabilities. There is no mDNS advertiser, no port sweep and no subnet walk; only loopback, RFC 1918 literals, ULA and .local names are admitted, and a public address is refused before a socket is opened.",
      },
      {
        title: "MCP, inside the allow-list",
        body:
          "A local MCP client speaks JSON-RPC 2.0 initialize, tools/list and tools/call. Servers are registered by hand in config/mcp_servers.json — at most eight. A stdio command must be an absolute path inside a sixteen-entry allowedCommands list with no shell metacharacters; an HTTP server must answer on loopback. A read-only tool may run; a mutating tool is never executed on request, only turned into a proposal.",
      },
      {
        title: "Home Assistant and MQTT on the LAN",
        body:
          "Home Assistant over its local REST API and a hand-written MQTT 3.1.1 client, both restricted to loopback, RFC 1918 and .local. Only entities named in exposedEntities exist to the bridge, read-only mode is on by default, and a broker publish can only address an exposed entity under a prefix you configured. Credentials are Keychain references; settings.json holds no token.",
      },
      {
        title: "CalDAV keeps the gaps, not the text",
        body:
          "PROPFIND and REPORT against up to four self-hosted CalDAV servers on the LAN. The iCalendar parser keeps DTSTART and DTEND and drops SUMMARY, DESCRIPTION, LOCATION, ORGANIZER and every ATTENDEE inside the parse, so there is no later redaction step to get wrong. Remote busy blocks are cut out of local free slots with a fifteen-minute floor; a recurrence the parser cannot evaluate is reported as a floor rather than guessed.",
      },
    ],
    boundaryHeading: "What the boundary refuses",
    boundaryItems: [
      {
        title: "Public addresses and unresolved names",
        body:
          "A bridge target must be loopback, RFC 1918, ULA or a .local name. A bare hostname is not resolved to find out whether it is public, credentials in a URL are refused, and an HTTP bridge will not follow a redirect — so an allow-listed host cannot bounce the node to somebody else's server.",
      },
      {
        title: "Writes without a human",
        body:
          "A smart-home actuation or a mutating MCP tool becomes a pending_user_approval proposal carrying an HMAC-SHA256 receipt bound to its id and verb, valid for fifteen minutes. The payload that runs is the payload you were shown, it is booked in the local audit log, and switching the bridge off voids what was pending.",
      },
      {
        title: "Secrets with no plaintext fallback",
        body:
          "The Home Assistant token, MQTT password and CalDAV password are Keychain items addressed by a reference; an unpackaged run keeps them in memory only, and nothing falls back to a file. The MCP document stores environment variable names, never values.",
      },
    ],
    footnote:
      "Privacy & Control states the same boundary rule by rule, including what the node cannot promise.",
  },

  extensions: {
    heading: "Two local extensions, one approval boundary",
    sub:
      "Build 4 adds a private assistant that reads, proposes and waits, and a bridge to a 3D globe you install yourself. Both are off by default, both keep their state on this Mac, and neither one turns a model's suggestion into a write without an approval receipt.",
    assistantTitle: "Private assistant and controlled automation",
    assistantSub:
      "One manager composes four pieces: a scheduler, a mail bridge that reads read-only and sends only after approval, a home-device sentinel and the approval gate every write must pass.",
    assistantFeatures: [
      {
        title: "Four connector permissions",
        body:
          "Every connector reports one of four levels — read, propose, write or admin. The default is read plus propose; a write or admin action is checked again at the executor entrance, not in the model prompt.",
      },
      {
        title: "A scheduler you switch on",
        body:
          "A daily briefing at 08:00 local time and a home health patrol every 30 minutes. Both are off by default and only the owner can enable them; every run and state change is written to ledger/assistant.sqlite3.",
      },
      {
        title: "Mail stays read-only until you approve",
        body:
          "IMAPS 993 opens the mailbox with EXAMINE and BODY.PEEK, classifies recent mail into needs reply, bill, invitation and notification, and drafts replies. SMTPS 465 sends only after you approve on the phone card or in the console; the passwords are Keychain references, never settings.",
      },
      {
        title: "A sentinel that proposes, then stops",
        body:
          "The patrol reads only the Home Assistant entities you exposed. An entity that stays unavailable past its threshold (15 minutes by default) becomes a repair proposal bound to the action, entity and payload digest; the repair runs once, after approval, and a read-only bridge refuses it even with a valid receipt.",
      },
    ],
    godsEyeTitle: "God's Eye View, on a loop",
    godsEyeSub:
      "A separate third-party program you install and manage on this Mac. The node ships only the Swift bridge: no JavaScript, no map tiles and no data.",
    godsEyeFeatures: [
      {
        title: "Installed by you, verified by the node",
        body:
          "Existing install or one-click clone of a pinned commit — the clone is opt-in, never on a timer. The package name, pinned version, package.json size and both entry scripts are checked, and the entry scripts' SHA-256 is recorded; a path that resolves outside the install root, including through a symlink, is refused.",
      },
      {
        title: "Constant loopback address",
        body:
          "The bind host is the literal 127.0.0.1 and is not configurable; the default port is 18931. System directories, ~/.ssh, ~/.gnupg, the Keychain folder and the node's own data root are refused as install targets.",
      },
      {
        title: "MCPToolGate only tightens",
        body:
          "Read-only geographic tools can run inside the MCP allow-list. A tool classified as mutating — canvas marks, draws, report export, or any name that is not recognisably a read — becomes pending_user_approval even when the server advertises it as read-only. The gate can tighten a tier, never loosen one.",
      },
    ],
    boundaryHeading: "What the approval receipt covers",
    boundaryItems: [
      {
        title: "Nine hundred seconds, one use",
        body:
          "An assistant write carries a 32-character HMAC-SHA256 receipt bound to the operation kind, target, content digest and expiry. It is valid for 900 seconds, compared in constant time, consumed by the executor before any I/O, and refused if the payload changes, expires, is replayed or is bound to another proposal.",
      },
      {
        title: "The globe stays on the loop",
        body:
          "God's Eye View binds the literal 127.0.0.1 and nothing else; sensitive directories, the Keychain folder and the node's own data root are refused as install targets, including after symlink resolution. Live feeds are fetched by your own local program under each provider's terms — this node only holds optional Keychain references and never proxies or caches the data. Canvas writes and report exports become pending_user_approval even when the server calls them read-only.",
      },
    ],
    footnote:
      "Privacy & Control states the same boundaries for the assistant, the globe and the four LAN bridges, including what none of them can promise.",
  },

  engines: {
    heading: "Ten sovereign engines",
    sub:
      "Three shelves and ten official service accounts. Every card below prints its own price: a flat number of Compute Credits for one 30-day cycle, or, for the compute mesh, a settlement per job with a 10% protocol fee. Every one of them executes on hardware you already own.",
    filterAll: "All",
    substrateLabel: "Substrate",
    quickMenuLabel: "iOS quick menu",
    quickMenuHint:
      "Each button sends ::popopx_sys::NODE_CMD::<service>::<action>::{} to your paired node.",
    deterministicBadge: "Deterministic — no model in the path",
    modelBadge: "Local model in the loop",
    offlineBadge: "Runs without local model weights",
    openDetails: "Open",
    closeDetails: "Close",
    shelfCount: "engines",
    creditsUnit: "Compute Credits",
  },

  hardware: {
    heading: "The tier follows the memory",
    sub:
      "On launch the node reads sysctl — chip model, CPU core count, physical unified memory, free SSD — and picks a tier automatically. Move the app to another Mac and the tier moves with it; there is nothing to reconfigure.",
    columns: [
      "Unified memory",
      "Typical chip",
      "Text model",
      "Video model",
      "First token*",
      "Throughput*",
      "Resident peak*",
      "Mode",
    ],
    modes: {
      lightweight: "Lightweight inference",
      balanced: "Balanced",
      full: "Full weights",
    },
    footnote:
      "* Those three columns are engineering estimates, not laboratory measurements. They come from memory-bandwidth-bound decode of a dense 27B model plus a quantisation-ratio reading of the LTX-2.5 weight footprint. Sustained thermals, chip generation, background load, clip length and concurrent jobs move the real numbers by two to three times. Use them to pick a tier, not as a performance promise.",
    rules: [
      "96 GB and above — LTX-2.5 original BF16 full weights with Qwen3.8-27B at Q8_0.",
      "48 to 95 GB — LTX-2.5 MLX quantised to 8-bit with Qwen3.8-27B at Q4_K_M.",
      "Below 48 GB — a 9B model at Q4_K_M, short renders only, heavy video offered to the Edge Compute Mesh.",
    ],
    plansHeading: "What each tier actually deploys",
    plansSub:
      "The table above is the guide you read before buying. This one is what the node writes down for itself after it has measured the machine, straight out of the recommendation function, including the model tag it pulls.",
    plansColumns: [
      "Memory band",
      "Text model",
      "Video stack",
      "Resident ceiling",
      "Heavy video",
      "Pull command",
    ],
    heavyVideo: {
      local: "Rendered here",
      mesh: "Offered to the mesh",
    },
    plansFootnote:
      "The resident ceiling is an arithmetic rule over measured memory, not a benchmark: each tier subtracts a fixed headroom for the desktop session from the unified memory it found, capped so a very large machine does not promise more than the stack needs. The model tags and quantisations are the strings the node actually passes to Ollama.",
  },

  install: {
    heading: "One DMG, one scan, ten toggles",
    sub:
      "The node has no installer, no daemon account and nothing to register. It is one menu-bar app that binds to loopback, and the first run does the profiling itself.",
    prereqsHeading: "Before you download",
    prereqNotes: {
      system: "The package targets macOS 14 and the app is a menu-bar agent.",
      memory:
        "Metal, MLX and the whole tier ladder assume unified memory. The DMG carries an x86_64 slice, but no part of the stack is tuned for Intel.",
      disk:
        "Model weights are refused while free space is at or below 40 GB, so the ladder's own ceiling is also your disk's.",
      media:
        "Five of the ten engines call FFmpeg. The install wizard can put it there through Homebrew.",
      inference:
        "Ollama for quantised text models, the LTX-2.5 MLX workspace for video. Both are local tools; neither is a service.",
      bridge:
        "Needed only for the SMP pairing step and the phone-driven path. The engines themselves run without it.",
    },
    prereqRequired: {
      hard: "Required",
      wizard: "The wizard installs it",
      optional: "Only for pairing",
    },
    steps: [
      {
        title: "Verify and open the DMG",
        body:
          "Take POPOPX-Mac-Node-Universal.dmg and the release digest file into the same folder and check them before you open anything; Releases & GitHub prints the two commands for the current release. Drag POPOPX Mac Node.app to /Applications. The published build carries a Developer ID signature and a stapled notarization ticket, so Gatekeeper accepts it without help — spctl -a -vv -t install answers accepted with source=Notarized Developer ID. A build you make yourself with Scripts/build_dmg.sh is ad-hoc signed instead, and that one does want a right-click Open the first time.",
      },
      {
        title: "Let it profile the machine",
        body:
          "Launch it and open the console from the menu bar. Step one reads chip, core count, unified memory and free SSD from sysctl, prints the tier it selected and the model tag that tier implies, and shows the numbers it sampled rather than the ones you declared.",
      },
      {
        title: "Deploy the local engines",
        body:
          "The wizard works down the list: Homebrew, FFmpeg, uv, Ollama, the Qwen quantisation that fits your tier, the LTX-2.5 workspace, then a self-check. The install log streams to the console page as it runs, and it is written to logs/install.log so a failure can be read after the fact.",
      },
      {
        title: "Pair the iPhone",
        body:
          "Generate the pairing QR — from the console, or from the menu bar's new-code item — and scan it with the POPOPX iOS client. Since 040ef25 the QR and the copy button carry a sealed https://popopx.chat/i/v1/… link rather than the raw credential, so a screenshot or a chat preview does not expose the queue address. The code inside is still signed, single-use and expires in fifteen minutes; the raw PPXNODE1 code and the invitation URI stay in the console's diagnostics drawer. The device appears in the paired list with its model, its pairing time and its last sighting.",
      },
      {
        title: "Switch the engines on",
        body:
          "Ten toggles in the menu bar and in the console. An engine only runs if you enable it, and the four that need no local model — the physical lockdown, the time-locked vault, the watermark tracer, the lab-report reader — work before a single weight is downloaded. FFmpeg is still called; the model stack is not.",
      },
    ],
    buildHeading: "Or build it from the same tag",
    buildBody:
      "The release images are packaged from the tree you can check out. swift build, swift test, swift build -c release, then bash Scripts/build_dmg.sh --output dist --version v1.0.2 --build 4 writes the universal DMG, ad-hoc signs it, and emits the sidecar with it. The published artifact is the other script: Scripts/build-release.sh adds the Developer ID signature, the notarization submission and the ZIP, which is why a downloaded image passes spctl and your own build does not. Both run only on macOS, because hdiutil and codesign are what they are made of.",
    lifecycleHeading: "After the first run",
    lifecycle: [
      {
        title: "Upgrading",
        body:
          "Build 4 adds an owner-configured update gate, not an automatic installer. It reads only the manifest host you name, verifies an Ed25519 signature from the key you pinned over a strictly newer version, and installs nothing until you approve a receipt-bound download; a digest mismatch drops the offer. There is no vendor endpoint and no default check. You can still upgrade by downloading and verifying the newer DMG and replacing the app. Settings, pairing state, the node key, the vault and every artifact live under Application Support rather than inside the bundle, so a replaced app inherits the machine it lands on.",
      },
      {
        title: "Backing up and moving machines",
        body:
          "The app marks its own data root as excluded from Time Machine, which protects your backups from model weights and keeps a surprise out of your restore. It also means the folder is not in your backup. To move a node, quit it, copy ~/Library/Application Support/PopopxMacNode to the same path on the new Mac, and let it re-profile: the tier may change, and pairing/node.key comes with the folder, which is the whole reason the copy needs to be as private as the original.",
      },
      {
        title: "Removing it completely",
        body:
          "Turn off Launch at Login first, then Quit from the menu bar — that closes the listener and releases the login item. Delete /Applications/POPOPX Mac Node.app, then the data root at ~/Library/Application Support/PopopxMacNode if you want the sealed vault, the ledgers and the artifacts gone as well. There is no uninstaller and no receipt to forget: nothing was installed outside those two paths. The one thing those two paths do not cover is a Keychain item — if you configured a hub bridge, its credential under im.popopx.macnode.hub survives both deletions, because the Keychain is not a folder; remove it in Keychain Access, or from the bridge's own disconnect button.",
      },
    ],
    bridgeTitle: "Drive the engines from your own script",
    bridgeBody:
      "The integrations folder ships a TypeScript bridge plus two agent adapters. It opens no new port and starts no second daemon: it reuses the console on 127.0.0.1:18920 and the one-time per-process token, and it sends the same NODE_CMD signalling the phone sends. The lockdown action is double opt-in — allowLockdown must be true and PPX_BRIDGE_SECRET must be at least sixteen characters — and a refusal is written to the plugin log so you can see it happened.",
    requirementTitle: "One honest prerequisite",
    requirementBody:
      "Step 2 of the node's own wizard, the pairing QR, and the SMP bridge all need a popopx-chat chat daemon on your PATH. The node probes exactly one executable and has no fallback, because an upstream build answers a version line and then fails every command after it. The ten engines themselves do not need it.",
    signHeading: "How the published build is signed",
    signBody:
      "The application bundle inside the image carries a Developer ID Application signature, the hardened runtime flag and a secure timestamp, and a notarization ticket is stapled into it. That is why Gatekeeper lets it run with no help: spctl -a -vv -t install answers accepted with source=Notarized Developer ID. The block below was read off the exact bytes v1.0.2 build 4 publishes on 2026-11-27 — run the first two commands against the app in /Applications and you should get the same identity back. No Apple account is consulted and nothing is checked against a server, because the ticket travels on the disk with the app.",
    containerTitle: "The image itself is not signed",
    containerBody:
      "Run spctl on the downloaded .dmg and it answers rejected with source=no usable signature; codesign -dvv says the same file is not signed at all. That is the expected answer, not a tamper alarm. Apple's code signature is on the application bundle, while the notarization ticket is stapled to the bundle and to the disk image around it. The image's one integrity control is its SHA-256, which is the check further down this page.",
    provenanceTitle: "Which script produced which artifact",
    provenanceBody:
      "Two scripts package this app and they do not end at the same place. Scripts/build_dmg.sh is the local packer: it assembles the bundle, signs ad-hoc with --sign - --timestamp=none and no hardened runtime, and writes the DMG plus its sidecar, so a build from that path does want a right-click Open the first time. Scripts/build-release.sh is the Developer ID path: it signs with the hardened runtime, submits to notarization, staples the ticket to both the bundle and the image, and writes the ZIP beside a SHA256SUMS.txt manifest. The build 4 image you download is the second kind — Developer ID signed, notarized and stapled — which only that script produces. The node's tag workflow at 6de6eb8 still runs Scripts/build_dmg.sh, so the workflow alone cannot account for the signed assets; a runner that has never held the certificate cannot produce them.",
    digestHeading: "Check the digest before you open anything",
    digestBody:
      "Two commands, run in the folder you saved the files to. The release manifest is the file to check against, because it names every artifact in the release and is written by the same step that packaged them. In build 4 the .dmg.sha256 sidecar and SHA256SUMS.txt name the same digest, so either check agrees. Releases & GitHub prints the pair for whatever release it resolved, which may be newer than the one below.",
    copyCommand: "Copy command",
    commandCopied: "Copied",
  },

  security: {
    heading: "What stays, what leaves, and how to stop it",
    sub:
      "A privacy page that only lists what stays local is a marketing page. This one lists the traffic too, because the honest version of \"your data never leaves the device\" is longer and more useful than the slogan.",
    localHeading: "Stays on your disk",
    localSub:
      "Under one data root, in a folder the app creates and excludes from Time Machine, with the secrets written atomically at mode 0600 and complete file protection.",
    localItems: [
      {
        title: "Every artifact",
        body:
          "Rendered clips, briefings, watermarked exports, sealed archives, decoded reports and quarantined inputs all land under the data root and stay there. The node keeps an outbox only for results that are waiting for your phone to come back online.",
      },
      {
        title: "The models and their weights",
        body:
          "The Qwen quantisation lives in Ollama's own store; the LTX-2.5 weights live in the node's engines directory. Both are local files on local disk, pulled once, and the pull is refused while free space is at or below 40 GB.",
      },
      {
        title: "Keys and pairing state",
        body:
          "The node's Ed25519 signing key, the list of paired devices and the current offer are plain files under pairing/. There is no cloud backup of the key and no escrow anywhere — which cuts both ways, as the loss paragraph below says. The exceptions are credentials: a hub bridge's token or password, the assistant's IMAP and SMTP passwords, and the God's Eye View feed keys are Keychain items, and settings.json carries only the references that fetch them.",
      },
      {
        title: "The evidence trail",
        body:
          "The lockdown and mesh ledgers are hash-appended locally, and the audit log records what ran, on which engine, with what outcome. It is written for you to read: logs/node.log is the fastest answer to \"what did this thing do at 03:14\".",
      },
    ],
    transitHeading: "Leaves the machine",
    transitSub:
      "Four kinds of traffic leave for the wider network, and every one of them is your own device or something you configured. The assistant's mail account adds a fifth when you enable it, and a LAN bridge adds local traffic on loopback, RFC 1918 and .local addresses. There is no analytics endpoint in any of them to send anything to.",
    transitItems: [
      {
        title: "Results, back to your own phone",
        body:
          "A finished job returns a card of at most 1024 characters plus one message per artifact file, over your own popopx-chat queue with SMP relaying and XFTP carrying. The relay sees ciphertext. If the phone is offline the result waits in outbox/ and keeps retrying for up to thirty days.",
      },
      {
        title: "Feeds you asked it to read",
        body:
          "Morning TV fetches the RSS sources you configured, capped at three megabytes per response, and that is an ordinary outbound HTTPS request to whoever hosts your feeds.",
      },
      {
        title: "A webhook you configured",
        body:
          "The physical lockdown can POST a signed event to a home-automation or presence endpoint. It is best effort, it is opt-in, and the URL is yours — the node has no default destination.",
      },
      {
        title: "Installs and model pulls",
        body:
          "The wizard downloads Homebrew formulae, FFmpeg, uv, Ollama and the quantisation you picked. That traffic is the point of an install step, and it happens once, in front of you, with the log on screen.",
      },
      {
        title: "The assistant's mail account",
        body:
          "Off until you enable it and type the server. IMAPS 993 reads with EXAMINE and BODY.PEEK, which never marks a message read; SMTPS 465 sends only a draft you approved with a receipt. The host is a literal in your settings and is never discovered; the two passwords are Keychain references. No other assistant action leaves the machine.",
      },
    ],
    keysHeading: "Where the secrets actually live",
    keysBody:
      "Pairing and vault material are files under the data root, written with an atomic write, POSIX mode 0600, and complete file protection, so they are unreadable at rest while the machine is locked. The trade you make is real — file permissions are auditable and portable, and they are also nothing between your user account and a reader that already has your user account. Treat the data root as the secret it is: it is not in Time Machine, and it is the only copy of the node key there is. Credentials take the other path. The Home Assistant token, the MQTT password, the CalDAV password, the assistant's IMAP and SMTP passwords, and the God's Eye View feed keys are generic-password items under the service im.popopx.macnode.hub, created with kSecAttrAccessibleWhenUnlockedThisDeviceOnly, and the settings document stores only a reference. A process without the app's bundle identity — swift run, a test harness — gets an in-memory store instead; there is deliberately no plaintext file fallback, so a credential that cannot reach the Keychain is not saved at all.",
    dataNote: {
      output: "Generated artifacts, and the outbox queue holding results that are waiting for the phone.",
      vault: "Time-locked sealed archives and the succession material that opens them.",
      pairing: "The Ed25519 node key, the paired device list, and the current one-time offer.",
      weights: "Model weights and the LTX-2.5 MLX workspace the video engines call.",
      ledger: "Hash-appended lockdown and mesh ledgers, plus the assistant's bounded SQLite audit ledger.",
      logs: "The install log and the audit log, written for the operator to read.",
      config: "Settings, engine switches, and the config the bridges, the assistant and the God's Eye View card share.",
    },
    rootLabel: "Data root",
    hubHeading: "The edge hub's own boundary",
    hubSub:
      "The four LAN bridges added in build 4, the private assistant and the God's Eye View bridge are held to the rules above and to these. They are written down here rather than on a feature card because they are the claims a reader should be able to falsify from the code.",
    hubItems: [
      {
        title: "One admission point",
        body:
          "Every bridge target — MCP over HTTP, Home Assistant, MQTT, CalDAV — passes the same EdgeBoundary check before a socket exists: loopback, RFC 1918, ULA or .local, with no DNS lookup to discover whether a name is public, no credentials in the URL, and no redirect followed. A refusal is a row in the console, not a silent retry somewhere else.",
      },
      {
        title: "A receipt, not a prompt",
        body:
          "A mutating action is not gated by a text box in the console. It becomes a proposal in state pending_user_approval, approved with a 24-character HMAC-SHA256 receipt bound to the proposal id and verb, valid for fifteen minutes, and recorded in the local audit log. The payload the executor runs is the one the owner saw, and turning the bridge off voids pending proposals.",
      },
      {
        title: "Keychain, or memory, never a file",
        body:
          "Bridge credentials live in Keychain items addressed by a reference, or in process memory for an unpackaged run. There is no third option: not settings.json, not a log, not a DMG. The MCP document stores environment-variable names, so a token handed to an MCP server over stdio is read from the environment the owner set, not from a file the node wrote.",
      },
      {
        title: "Learn the minimum",
        body:
          "CalDAV parses DTSTART and DTEND and discards titles, descriptions, locations and attendees inside the parser, so the busiest fields never enter the model at all. A proposal preview shows short scalar arguments and hides every value whose key is on the redaction list — content, token, password, payload and more. Discovery is a read-only GET that reports the machine's own state.",
      },
      {
        title: "The assistant and the globe",
        body:
          "A mail send or a home repair reaches the executor only with a 32-character HMAC-SHA256 receipt bound to kind, target, digest and expiry, valid for 900 seconds and consumed once. Mail is the assistant's one named egress exception, and its passwords are Keychain references. God's Eye View is loopback-only, verifies its install after symlink resolution, and its MCP gate can only tighten a tool: canvas writes and report exports become pending_user_approval even when the server calls them read-only. The repository contains only the Swift bridge.",
      },
    ],
    controlHeading: "Your side of the off switch",
    controlSub:
      "Four controls, all of them local, all of them visible in the app rather than buried in a settings screen. None of them need the network, which is what makes them work when the network is the problem.",
    controls: [
      {
        title: "Stop one engine",
        body:
          "Ten independent toggles in the menu bar and in the console. Turning one off takes effect on the next command, and a command for a disabled engine is refused rather than queued.",
      },
      {
        title: "Stop lending cycles",
        body:
          "Pause Mesh Sharing takes the node out of the edge-compute pool immediately; the menu bar reads Paused and it stops accepting jobs. This is the one control with the word pause in it, and it is about mesh capacity, not the whole node.",
      },
      {
        title: "Burn the current pairing code",
        body:
          "New Pairing QR retires the outstanding offer and mints a replacement. Anyone holding a photograph of the old code has an expired signature, not a second chance.",
      },
      {
        title: "Stop everything",
        body:
          "Quit is the actual kill switch: it closes the loopback listener, releases the login item and drops the per-launch token with the process. A node that is not running answers nothing, from anyone, about anything.",
      },
    ],
    revokeHeading: "And revoking a device",
    revokeBody:
      "The console's paired-device list has a Revoke button on every row. It marks that device revoked, removes its contact mapping and drops its commands from then on — but it does not tear down the SMP connection, and the app says so in the same message it shows you. To finish the job, delete the contact in the chat client. Anything already written to your disk stays on your disk; revocation stops future commands, it is not a remote wipe, and the node has never had a remote-wipe capability to remove.",
    limitsHeading: "What this page will not promise",
    limitsBody:
      "The secure destroy is a random overwrite, a sync and an unlink. On APFS a modified file is written to new blocks and the SSD remaps logical ones, so that removes the file and defeats ordinary recovery tools and does not prove the old physical bytes are gone. It is the best a userspace file API can do, and the code says so in the result it returns. Beyond that: no global pause short of quitting, no remote wipe, no key escrow and therefore no recovery if you lose the machine and the data root together, and no silent updater. Build 4 adds an update gate that reads only the manifest host you name, accepts only a signature from the key you pinned over a strictly newer version, and requires a receipt before it downloads or installs; there is no vendor endpoint and no default destination.",
  },

  troubleshooting: {
    heading: "When it does not do what you expected",
    sub:
      "The failures that actually happen on this architecture, in the order people hit them. Each one names what to look at first, because on a machine with no server side, the log is always the shortest path.",
    columns: ["Symptom", "What is going on", "What to do"],
    items: [
      {
        symptom: "The console page will not open",
        cause:
          "The port is fixed at 127.0.0.1:18920 with no fallback, so a second running instance — or anything else that got there first — keeps the listener. The token is also per-launch: an old tab from before a restart has a dead credential.",
        fix:
          "Check for a listener on 18920 and quit the other instance, then use Open Web Console from the menu bar, which builds the current URL with the current token instead of a stale one.",
      },
      {
        symptom: "Nothing answers on 11434",
        cause:
          "The engines that need a model talk to Ollama on loopback only. If Ollama is not running, or was installed without the wizard, the engine fails rather than falling back to anything hosted.",
        fix:
          "Start Ollama, confirm OLLAMA_HOST is loopback, and pull the quantisation the tier table names for your machine. The failure text quotes the command that would have worked.",
      },
      {
        symptom: "Weights were never downloaded",
        cause:
          "The installer skips weight downloads unless weightSources is declared in config/engines.json, and refuses outright while free space is at or below 40 GB.",
        fix:
          "Add the source you want to fetch, or copy the weights into engines/weights and point the config at it. Clear disk first; the guard is a threshold, not a warning.",
      },
      {
        symptom: "A render came back as a command line",
        cause:
          "Video work needs the LTX-2.5 workspace and its weights. Without them the engine returns the exact command it would have run instead of pretending to have produced a file.",
        fix:
          "Finish the workspace step of the wizard, or clone the LTX-2-MLX workspace it names, then re-run. This is deliberate: a stubbed success is worse than an honest refusal.",
      },
      {
        symptom: "The pairing code is rejected",
        cause:
          "An offer is single-use and lives for fifteen minutes. A second scan of the same code, or a code from a screen that has since rotated, is correctly refused.",
        fix:
          "Generate a new code and scan it once. If the phone retries on its own after a success, the first claim already won and the refusal is the expected answer.",
      },
      {
        symptom: "Commands from the phone do nothing",
        cause:
          "The bridge needs a popopx-chat daemon on the PATH and the node probes exactly one executable with no fallback. The menu bar reads popopx-chat not installed when it is missing, and an engine that is switched off answers nothing regardless.",
        fix:
          "Read the bridge line in the menu bar first, then the engine toggles, then the audit log. A command that was refused and a command that never arrived look identical from the phone.",
      },
      {
        symptom: "Results stop arriving while the phone is away",
        cause:
          "Outbound delivery goes through your own daemon and relay, so an outbound-blocking firewall, a VPN that does not carry the relay, or a daemon that exited all look the same from here. Results are not lost: they queue in outbox/ and retry for up to thirty days.",
        fix:
          "Confirm the daemon is running, then allow the node's outbound connections in whatever is filtering them, then wait for the queue to drain rather than re-running the job.",
      },
      {
        symptom: "The download card says showing the pinned release",
        cause:
          "api.github.com was unreachable, blocked, rate-limited, or answered without a downloadable asset. The page then renders the release compiled into the bundle rather than guessing.",
        fix:
          "Open the releases page directly. Nothing else on the site needs that call, and no part of the page is blank because of a failed one.",
      },
    ],
    escalation:
      "Two files answer most of the rest: logs/install.log for anything the wizard did, and logs/node.log for everything after it. Both are plain text under the data root, and the console's own log channel shows the same events live. If a failure survives reading them, the contract the node and the integrations both test against is in the repository, and issues belong on popopx-mac-node.",
  },

  releases: {
    heading: "Releases, digests, and the whole tree",
    sub:
      "Everything the node is built from is in one AGPL-3.0-only repository, and every published image can be checked against a digest before it is opened. This section is where the site stops describing and starts pointing.",
    assetsHeading: "Published assets",
    assetsColumns: ["File", "What it is", "Size"],
    assetKinds: {
      dmg: "Drag-to-Applications disk image, universal arm64 and x86_64. This is the one to take.",
      sidecar: "A digest for one file, written by the packaging step that built it.",
      zip: "The signed application bundle as a ZIP payload, for an archive rather than a volume.",
      sums: "A manifest listing every artifact in the release with its digest.",
    },
    missingAsset:
      "Not every release publishes every asset. Older releases carry the disk image and its sidecar only, which is why the check below reads the release you actually opened.",
    verifyHeading: "Verify before you open anything",
    verifyBody:
      "Two commands, run in the folder you downloaded into. The manifest form is preferred and is what the current release publishes.",
    verifySumsBody:
      "A release manifest lists every artifact, so a file you did not download is expected rather than missing: pass --ignore-missing, and read the line that matches the file you took. The manifest is written in the same step that packages the payload it names.",
    verifySidecarBody:
      "An older release publishes a single-asset sidecar instead, and that is the file to check against. Build 4 publishes both and they name the same digest; where a release's files disagree, believe the manifest, because the sidecar can come from a different build of the same version.",
    pipelineHeading: "How a version gets here",
    pipelineBody:
      "Pushing a tag runs the release workflow on a macOS runner: it builds the tree, runs the contract tests, packages the universal image with Scripts/build_dmg.sh, refuses to publish a checksum file containing an absolute path, and uploads the DMG and its sidecar. That is the ad-hoc path. The signed build 4 image, its ZIP and SHA256SUMS.txt come from Scripts/build-release.sh, which signs with the Developer ID identity, the hardened runtime and a secure timestamp, submits to Apple's notary service, and staples the ticket to the bundle and the image. The tag workflow at 6de6eb8 does not invoke that script, so the signed assets cannot be the workflow's output. Both paths end at the same place: a digest you can check without trusting this page.",
    supportedHeading: "Running today",
    supportedItems: [
      "All ten engines, each with its own action set and refusal paths, switched on individually.",
      "Automatic tier selection from sysctl, with the model pull each tier implies.",
      "Signed, single-use, fifteen-minute pairing, and a console that binds loopback only.",
      "The TypeScript bridge and two agent adapters over the same console and the same token.",
      "The private assistant and the God's Eye View bridge: receipt-gated writes, a loopback-only tool gate, and both off by default.",
    ],
    roadmapHeading: "Not yet",
    roadmapSub:
      "Written down as plans in the repository, not as promises on a page. None of it is running today.",
    roadmap: [
      {
        title: "Per-engine measurements on your own machine",
        body:
          "A usage dashboard and failure timelines carried back to the phone: token and watt readings from the box in front of you, replacing the estimates in the hardware table.",
      },
      {
        title: "Harder mesh isolation and an exportable ledger",
        body:
          "Stronger containment for lent capacity and a ledger you can take out of the app rather than read inside it.",
      },
      {
        title: "Sharded custody for more than one heir",
        body:
          "Multi-heir splitting of succession material, and more report layouts in the health engine.",
      },
      {
        title: "Signed distribution channels and more video tiers",
        body:
          "Evaluation of a store channel beyond notarization, and additional LTX tiers for memory bands the ladder does not cover yet.",
      },
    ],
    sourceHeading: "The source, and what the licence obliges",
    sourceBody:
      "One repository, AGPL-3.0-only, no closed core: the engines, the console, the watermarking and the ledger are all in it, and the blind-signature credential code and cryptographic parameter registry are open in popopxmq beside it. Section 13 applies in the ordinary way: run it, study it, modify it freely, and if you offer a modified node as a service to other people, offer them your corresponding source. That is the entire compliance cost.",
    licenceHeading: "What is not covered",
    licenceBody:
      "AGPL-3.0 grants no licence to the POPOPX name or logo. A fork may take everything except the marks: rename the software, replace the marks, keep the code.",
  },

  faq: {
    heading: "Questions people actually ask",
    sub: "Short answers, with the part we cannot guarantee left visible.",
    items: [
      {
        q: "Does any of this run on your servers?",
        a: "No. Commands for the ten engines arrive from the iOS client over your own popopx-chat queue, end to end encrypted, and the inference, rendering, storage and physical execution all happen on your Mac. Not one step needs our infrastructure, and there is no code path in the node that reaches a hosted inference API — the model client is pinned to 127.0.0.1.",
      },
      {
        q: "What do I have to register?",
        a: "Nothing. There is no account, no phone number, no email address and no advertising identifier anywhere in the product. Pairing the phone to the node is one QR scan, and the web console binds to loopback only, rotates a random token on every launch and is unreachable from the rest of your LAN.",
      },
      {
        q: "Does the node scan my LAN for devices?",
        a: "No. Discovery is a read-only GET /v1/discovery/capabilities that reports what this Mac already has: Ollama on loopback, the workspace folders you authorised, the EventKit permission state, and whether a TCP connection succeeds to a LAN host you typed into the settings. There is no mDNS advertiser, no port sweep and no subnet walk in the code. A target is admitted only if it is loopback, an RFC 1918 literal, a ULA address or a .local name; a public address is refused before a socket is opened, and the signed build does not accept hostnames that would need a DNS lookup. Build 4's LAN Discover is off by default and watches only the folders, feeds and MCP servers you configure, with a sixty-second floor between refreshes.",
      },
      {
        q: "Can an MCP tool or a smart-home command run without me?",
        a: "A read-only one can, inside the boundary the owner configured. A mutating one cannot: it becomes a proposal in pending_user_approval and needs an approval that mints a 24-character HMAC-SHA256 receipt bound to the proposal id and verb, valid for fifteen minutes. The executor runs exactly the payload that was shown, the action is booked in the local audit log, and switching the bridge off voids what was pending. A lock, alarm, siren, camera or vacuum action is treated as high risk even inside an otherwise permissive configuration.",
      },
      {
        q: "Is the pairing QR encrypted?",
        a: "Sealed, and the distinction matters. The QR and the copy button carry https://popopx.chat/i/v1/ followed by a ChaCha20-Poly1305 box whose key is derived with HKDF-SHA256 from an input published in the app's own source. That hides the SMP queue address from link previews, screenshots and forwards; it does not keep the contents from anyone who has the app. What authorises the device is the signed, single-use, fifteen-minute credential inside, and the raw PPXNODE1 code and the invitation URI remain in the console's diagnostics drawer rather than on the wizard's face.",
      },
      {
        q: "Why AGPL-3.0, and what does section 13 oblige me to do?",
        a: "Every source file in the node is AGPL-3.0-only, which means you may run, study, modify and redistribute it freely. Section 13 adds the network clause: if you offer a modified node as a service to other people, you have to offer them your corresponding source. That is the whole compliance cost, and it is the reason the project can be free to run.",
      },
      {
        q: "Is the watermarking or the compute-point protocol kept closed?",
        a: "No, and that claim is the one we would most expect to be checked. The BBS+ and BLS12-381 credential code, the entitlement logic and the cryptographic parameter registry are open in popopxmq; the GOP and frequency-domain watermarking and its blind decoder are in this repository. What the commercial track sells is the datacentre, the on-call rota, the distribution channel and the compliance paperwork — never a source-code gate.",
      },
      {
        q: "Can I ship a fork under the POPOPX name and logo?",
        a: "No. The marks are not licensed by AGPL-3.0 and no support tier grants them. The policy asks for the one remedy that costs a fork nothing: rename the software, replace the marks, keep the code. Brand use needs a separate written licence.",
      },
      {
        q: "How much should I trust the numbers in the hardware table?",
        a: "As much as the sentence underneath it says. They are back-of-the-envelope figures, not measurements of your machine, and real throughput moves by two to three times with thermals and load. The next version of the node replaces them with per-engine token and watt readings measured on the box you are actually using.",
      },
      {
        q: "Which machines are supported?",
        a: "macOS 14 or later on Apple Silicon. The tier ladder, Metal and MLX all assume unified memory, and MLX does not run on Intel, so an Intel Mac is not a host this project targets even though the universal DMG still carries an x86_64 slice. The app itself links no third-party library: Apple frameworks only. What it drives is separate by design — Ollama, FFmpeg and the LTX-2.5 weights are local tools the engines call, and every engine states which ones it needs.",
      },
      {
        q: "Can the assistant send mail or switch a device without me?",
        a: "No. Reading and drafting are local and read-only; a send or a repair is a proposal in pending_user_approval. The executor accepts only a 32-character HMAC-SHA256 receipt bound to the operation, target, digest and expiry, valid for 900 seconds and usable once. Mail credentials live in the macOS Keychain, and a read-only Home Assistant bridge refuses the repair even with a valid receipt.",
      },
      {
        q: "Does the God's Eye View bridge call the cloud or scan my network?",
        a: "No. It launches a program you installed on this Mac, pins it to 127.0.0.1, verifies its entry scripts after symlink resolution, and pulls source only if you switch that on. The node holds optional Keychain references for feed keys; your local program fetches the feeds under each provider's terms, and the node never proxies or caches them. Canvas writes and report exports become pending_user_approval even if the server calls them read-only.",
      },
    ],
  },

  footer: {
    tagline: "Local compute for the POPOPX ecosystem. Yours to run, yours to read.",
    licenceHeading: "Licence",
    licenceBody:
      "The node source is AGPL-3.0-only. The graphic assets this project created are AGPL-3.0-only or, at your option, CC0-1.0.",
    trademarkHeading: "Trademark",
    trademarkBody:
      "POPOPX, POPOPX Chat and the POPOPX logo are marks of the POPOPX Chat project. The icon used on this site is the unmodified POPOPX iOS application icon. See TRADEMARK-POPOPX.md in the popopx-chat repository for the policy.",
    privacyHeading: "This page",
    privacyBody:
      "No analytics, no cookies, no fingerprinting, no third-party scripts and no external CDN. The only outbound request the page can make is to api.github.com for the release asset list, and it degrades to a pinned link when that call fails.",
    appleNotice:
      "Not affiliated with Apple. macOS, iOS, Apple Silicon and Metal are trademarks of Apple Inc.",
    sourceRepo: "Mac Node source",
    iosRepo: "iOS client source",
    backToTop: "Back to top",
  },
};
