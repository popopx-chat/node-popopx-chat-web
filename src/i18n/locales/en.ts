import type { Dictionary } from "../types";

export const en: Dictionary = {
  dir: "ltr",

  nav: {
    engines: "Engines",
    architecture: "Architecture",
    hardware: "Hardware",
    install: "Install",
    faq: "FAQ",
    github: "GitHub",
    download: "Download",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    chooseLanguage: "Language",
  },

  hero: {
    badge: "macOS 14+ · Apple Silicon · AGPL-3.0",
    titleLead: "Your Mac becomes",
    titleAccent: "the compute layer",
    subtitle:
      "POPOPX Mac Node runs the local compute and deterministic execution behind the ten Discover engines of the POPOPX iOS client. Zero cloud, no account, no telemetry, end-to-end encrypted.",
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
      "Save the .dmg and its .sha256 sidecar in the same folder, then run shasum -a 256 -c against the sidecar, not the image. It holds one digest and one relative filename; the expected answer is POPOPX-Mac-Node-Universal.dmg: OK.",
    iosLabel: "POPOPX iOS",
    nodeLabel: "POPOPX Mac Node",
    localLabel: "Your own hardware",
    statStorage: "Physical local storage",
    statIdentity: "No account, no ID",
    statSource: "AGPL-3.0 end to end",
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
      "Below 48 GB — lightweight inference; heavy video work is offered to the Edge Compute Mesh instead of being rendered locally.",
    ],
  },

  install: {
    heading: "Three minutes, then it is yours",
    sub:
      "The node has no installer, no daemon account and nothing to register. It is one menu-bar app that binds to loopback.",
    steps: [
      {
        title: "Verify and open the DMG",
        body:
          "Take POPOPX-Mac-Node-Universal.dmg and its .sha256 from Releases, both into the same folder, and check them before you open anything: shasum -a 256 -c POPOPX-Mac-Node-Universal.dmg.sha256 must print OK. Drag the app to /Applications.",
      },
      {
        title: "Deploy the local engines",
        body:
          "Open the menu-bar item and start the console wizard. Step one profiles the chip, the unified memory and the SSD, pulls the Qwen3.8 quantisation that fits the tier, initialises the ltx2 workspace and streams the install log to the page as it runs.",
      },
      {
        title: "Pair the iPhone",
        body:
          "Scan the pairing QR from the console with the POPOPX iOS client. That one scan establishes the SMP bridge; from then on the Discover service accounts talk to your node and nothing else.",
      },
      {
        title: "Switch the engines on",
        body:
          "Ten toggles. An engine only runs if you enable it, and the four that need no local model — the physical lockdown, the time-locked vault, the watermark tracer, the lab-report reader — work before a single weight is downloaded. FFmpeg is still called; the model stack is not.",
      },
    ],
    bridgeTitle: "Drive the engines from your own script",
    bridgeBody:
      "The integrations folder ships a TypeScript bridge plus two agent adapters. It opens no new port and starts no second daemon: it reuses the console on 127.0.0.1:18920 and the one-time per-process token, and it sends the same NODE_CMD signalling the phone sends. The lockdown action is double opt-in — allowLockdown must be true and PPX_BRIDGE_SECRET must be at least sixteen characters — and a refusal is written to the plugin log so you can see it happened.",
    requirementTitle: "One honest prerequisite",
    requirementBody:
      "Step 2 of the node's own wizard, the pairing QR, and the SMP bridge all need a popopx-chat chat daemon on your PATH. The node probes exactly one executable and has no fallback, because an upstream build answers a version line and then fails every command after it. The ten engines themselves do not need it.",
    copyCommand: "Copy command",
    commandCopied: "Copied",
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
        a: "As much as the sentence underneath it says. They are back-of-the-envelope figures, not measurements of your machine, and real throughput moves by two to three times with thermals and load. Version 1.1 of the node replaces them with per-engine token and watt readings measured on the box you are actually using.",
      },
      {
        q: "Which machines are supported?",
        a: "macOS 14 or later on Apple Silicon. The tier ladder, Metal and MLX all assume unified memory, and MLX does not run on Intel, so an Intel Mac is not a host this project targets even though the universal DMG still carries an x86_64 slice. The app itself links no third-party library: Apple frameworks only. What it drives is separate by design — Ollama, FFmpeg and the LTX-2.5 weights are local tools the engines call, and every engine states which ones it needs.",
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
