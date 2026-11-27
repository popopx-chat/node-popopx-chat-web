#!/usr/bin/env python3
"""Generate src/data/enginesCatalog.ts from the POPOPX source-of-truth catalogs.

Provenance of every value written here:
  * engine ids, sections, 30-day credit prices, menu action tokens, highlights,
    SF Symbols   -> popopx-chat: apps/ios/Shared/Features/Discover/DiscoverCatalogModels.swift
  * substrates, deterministic/model flags, zh-Hans names
    -> PopopxMacNode: Sources/PopopxMacNode/Models/MacNodeModels.swift (EngineKind)
  * localized strings -> popopx-chat: apps/ios/<locale>.lproj/Localizable.strings
  * zh-Hant names     -> Apple CFStringTransform "Hans-Hant" plus the node's 啓->啟 fix-up

Two JSON inputs, produced by extract_catalog.py and hant.swift; override with env vars
POPOPX_CATALOG / POPOPX_HANT_NAMES if you keep them somewhere other than /tmp.

Regenerating is not part of the site build: the output is committed so the portal has no
dependency on the iOS or Mac Node checkouts being present.
"""

import json
import os

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CATALOG = os.environ.get("POPOPX_CATALOG", "/tmp/popopx_catalog.json")
HANT = os.environ.get("POPOPX_HANT_NAMES", "/tmp/hant_names.json")

LOCALES = [
    "bg", "cs", "de", "en", "es", "fi", "fr", "hu", "it", "ja", "nl", "pl",
    "ru", "th", "tr", "uk", "zh-Hans", "zh-Hant",
]

NAME_EN = {
    "shadow_cos": "Shadow Chief of Staff",
    "zero_trust_warroom": "Zero-Trust War Room",
    "zerotrace_studio": "Zero-Trace Studio",
    "solo_autopilot": "Solo Autopilot",
    "creator_paywall_hub": "Creator Paywall Hub",
    "edge_compute_mesh": "Edge Compute Mesh",
    "morning_tv": "Morning TV",
    "phantom_sentinel": "Phantom Sentinel",
    "chrono_ark": "Chrono Ark",
    "health_sentinel": "Health Sentinel",
}

# id, section, 30-day credits (None = metered), SF Symbol, lucide component, substrate
ENGINES = [
    ("shadow_cos", "productivity", 200, "brain.head.profile", "BrainCircuit", "Ollama / Qwen3.8"),
    ("zero_trust_warroom", "productivity", 500, "water.waves", "Waves", "FFmpeg + GOP slicer"),
    ("zerotrace_studio", "productivity", 300, "eye.slash", "EyeOff", "FFmpeg + Vision + Ollama"),
    ("solo_autopilot", "productivity", 500, "film.stack", "Clapperboard", "LTX-2.5 MLX + FFmpeg"),
    ("creator_paywall_hub", "productivity", 300, "play.tv", "Tv", "Watermark engine + ledger"),
    ("edge_compute_mesh", "compute", None, "point.3.connected.trianglepath.dotted", "Network",
     "Sandboxed Process + CryptoKit"),
    ("morning_tv", "compute", 100, "sun.horizon", "Sunrise", "RSS + LTX-2.5 MLX"),
    ("phantom_sentinel", "sanctuary", 100, "lock.shield", "Lock", "AppKit + diskutil + Webhook"),
    ("chrono_ark", "sanctuary", 200, "hourglass", "Hourglass", "CryptoKit hash-chain lock"),
    ("health_sentinel", "sanctuary", 200, "heart.text.square", "HeartPulse",
     "Vision + waveform synthesiser"),
]

MENU = {
    "shadow_cos": [("Today's action brief", "briefing"), ("Live meeting prompts", "negotiation_prompt"),
                   ("Ask the local knowledge base", "generate")],
    "zero_trust_warroom": [("Create isolated room", "assign"), ("Trace a leaked copy", "trace"),
                           ("Audit member access", "registry")],
    "zerotrace_studio": [("Sanitise source media", "strip"), ("Switch virtual presenter", "anchor"),
                         ("Distribute to channels", "broadcast")],
    "solo_autopilot": [("Today's finished clips", "run"), ("Set trending keywords", "script"),
                       ("Generate support QR", "generate")],
    "creator_paywall_hub": [("New paid channel", "grant"), ("Send credit red packet", "red_packet"),
                            ("Channel earnings", "ledger")],
    "edge_compute_mesh": [("Publish a compute job", "offer"), ("Bond node, accept jobs", "enable"),
                          ("Earnings statement", "settle")],
    "morning_tv": [("Play today's bulletin", "broadcast"), ("Choose feeds", "digest"),
                   ("Change broadcast window", "schedule")],
    "phantom_sentinel": [("Lock down the house", "lock_all"), ("Capture a snapshot", "probe"),
                         ("Build the security brief", "status")],
    "chrono_ark": [("Confirm safety heartbeat", "heartbeat"), ("Seal a time capsule", "seal"),
                   ("Manage trusted contacts", "check")],
    "health_sentinel": [("Read a health report", "read"), ("Compose a sleep soundscape", "binaural"),
                        ("Household trend", "report")],
}

TAGLINE = {
    "shadow_cos": "Daily local briefing and live meeting prompts",
    "zero_trust_warroom": "Physically isolated team room with blind watermark tracing",
    "zerotrace_studio": "On-device fingerprint removal and presenter synthesis",
    "solo_autopilot": "From topic to finished clip, unattended",
    "creator_paywall_hub": "Subscription threshold, fingerprinted delivery and credit red packets",
    "edge_compute_mesh": "Publish metered jobs, or lend idle cycles for credit",
    "morning_tv": "A five-minute private morning bulletin, no tracking",
    "phantom_sentinel": "Deterministic one-tap lockdown and daily security brief",
    "chrono_ark": "Encrypted family vault with a time-locked capsule",
    "health_sentinel": "Offline report reading and sleep soundscapes",
}

HIGHLIGHTS = {
    "shadow_cos": ["Runs on your own Mac", "Reads only the folders you authorise", "Works with no account"],
    "zero_trust_warroom": ["Runs on your own Mac", "Blind watermark per copy", "Works with no account"],
    "zerotrace_studio": ["Removes camera fingerprints", "Runs on your own Mac", "Works with no account"],
    "solo_autopilot": ["Queues overnight, reports in the morning", "Runs on your own Mac", "Works with no account"],
    "creator_paywall_hub": ["You set the price per member", "Blind watermark per copy", "Runs on your own Mac"],
    "edge_compute_mesh": ["Settled per job, 10% protocol fee", "Your machine decides what to lend",
                          "Runs on your own Mac"],
    "morning_tv": ["No recommendation feed", "Fires on your own clock", "Works with no account"],
    "phantom_sentinel": ["No model in the path", "One tap, one state machine", "Runs on your own Mac"],
    "chrono_ark": ["Encrypted at rest on your Mac", "Opens only after the date you set", "Runs on your own Mac"],
    "health_sentinel": ["Reports are parsed offline", "Works with no account", "Runs on your own Mac"],
}

SECTIONS = {
    "productivity": ("Work & Productivity", "Productivity"),
    "compute": ("Compute & Mesh", "Edge compute"),
    "sanctuary": ("Life & Sanctuary", "Home"),
}

DETERMINISTIC = {"phantom_sentinel"}
WORKS_WITHOUT_MODELS = {"zero_trust_warroom", "phantom_sentinel", "chrono_ark", "health_sentinel"}

PRICE_KEY = "%lld Compute Credits / 30 days"
METERED_KEY = "Metered, settled per job"


def js(value):
    return json.dumps(value, ensure_ascii=False)


def ident(loc):
    return loc if "-" not in loc else js(loc)


def locale_map(strings, en_value):
    """Record<CatalogLocale, string> for one English source string.

    A locale with no catalog entry gets the English literal, which is precisely what
    NSLocalizedString does on the phone. The three portal-only locales are not in this
    map; they read `src/data/enginePortalStrings.ts` instead.
    """
    parts = []
    for loc in LOCALES:
        value = en_value if loc == "en" else (strings[loc].get(en_value) or en_value)
        parts.append("%s: %s" % (ident(loc), js(value)))
    return "{ " + ", ".join(parts) + " }"


def locale_block(strings, en_value, indent):
    pad = " " * indent
    lines = ["{"]
    for loc in LOCALES:
        value = en_value if loc == "en" else (strings[loc].get(en_value) or en_value)
        lines.append("%s  %s: %s," % (pad, ident(loc), js(value)))
    lines.append(pad + "}")
    return "\n".join(lines)


def main():
    strings = json.load(open(CATALOG, encoding="utf-8"))["locale_strings"]
    zh_names = json.load(open(HANT, encoding="utf-8"))

    assert len(strings) == len(LOCALES), "locale count moved: %d" % len(strings)
    for eid, _s, _p, _sf, _ic, _sub in ENGINES:
        assert eid in zh_names, "no zh name for " + eid
        assert eid in TAGLINE and eid in MENU and eid in HIGHLIGHTS, "missing data for " + eid

    o = []
    a = o.append
    a("/* GENERATED FILE - do not edit by hand.\n")
    a(" * Source of truth: the POPOPX iOS Discover catalog and the Mac Node EngineKind.\n")
    a(" * Engine product names carry only en/zh-Hans/zh-Hant spellings because the shipping\n")
    a(" * iOS catalogs have no name entry in any of the 21 portal locales; every other\n")
    a(" * language reads the English product name, exactly as the phone and the node do.\n")
    a(" * The catalog data itself covers the 18 official locales; the portal-only pt-BR, ko\n")
    a(" * and ar strings live in the hand-maintained overlay `enginePortalStrings.ts`.\n")
    a(" */\n\n")
    a('import type { CatalogLocale, LocaleCode } from "../i18n/types";\n\n')

    a("export type EngineId =\n  %s;\n\n" % " | ".join(js(e[0]) for e in ENGINES))
    a('export type SectionId = "productivity" | "compute" | "sanctuary";\n\n')

    a("export interface EngineMenuAction {\n")
    a("  /** The token the node accepts on the NODE_CMD wire. Never localized. */\n")
    a("  action: string;\n")
    a("  label: Record<CatalogLocale, string>;\n")
    a("}\n\n")

    a("export interface EngineName {\n")
    a('  en: string;\n  "zh-Hans": string;\n  "zh-Hant": string;\n}\n\n')

    a("export interface EngineDefinition {\n")
    a("  id: EngineId;\n  section: SectionId;\n")
    a("  /** 30-day cycle price in Compute Credits; null = metered, settled per job. */\n")
    a("  credits30d: number | null;\n")
    a("  substrate: string;\n  lucideIcon: string;\n  sfSymbol: string;\n")
    a("  deterministic: boolean;\n  worksWithoutLocalModels: boolean;\n")
    a("  name: EngineName;\n")
    a("  tagline: Record<CatalogLocale, string>;\n")
    a("  menu: EngineMenuAction[];\n")
    a("  highlights: Record<CatalogLocale, string[]>;\n")
    a("}\n\n")

    a('export const SECTIONS: SectionId[] = ["productivity", "compute", "sanctuary"];\n\n')

    a("export const SECTION_LABELS: Record<\n")
    a("  SectionId,\n")
    a("  { title: Record<CatalogLocale, string>; filter: Record<CatalogLocale, string> }\n")
    a("> = {\n")
    for sec, (title, filt) in SECTIONS.items():
        a("  %s: {\n" % sec)
        a("    title: %s,\n" % locale_map(strings, title))
        a("    filter: %s,\n" % locale_map(strings, filt))
        a("  },\n")
    a("};\n\n")

    a("export const PRICE_FORMAT: Record<CatalogLocale, string> =\n")
    a(locale_block(strings, PRICE_KEY, 2) + ";\n\n")
    a("export const PRICE_METERED: Record<CatalogLocale, string> =\n")
    a(locale_block(strings, METERED_KEY, 2) + ";\n\n")

    a("export const ENGINES: EngineDefinition[] = [\n")
    for eid, section, price, sf, lucide, substrate in ENGINES:
        zh = zh_names[eid]
        a("  {\n")
        a('    id: %s,\n' % js(eid))
        a('    section: %s,\n' % js(section))
        a("    credits30d: %s,\n" % ("null" if price is None else price))
        a('    substrate: %s,\n' % js(substrate))
        a('    lucideIcon: %s,\n' % js(lucide))
        a('    sfSymbol: %s,\n' % js(sf))
        a("    deterministic: %s,\n" % ("true" if eid in DETERMINISTIC else "false"))
        a("    worksWithoutLocalModels: %s,\n" % ("true" if eid in WORKS_WITHOUT_MODELS else "false"))
        a("    name: { en: %s, \"zh-Hans\": %s, \"zh-Hant\": %s },\n"
          % (js(NAME_EN[eid]), js(zh["zh-Hans"]), js(zh["zh-Hant"])))
        a("    tagline: %s,\n" % locale_map(strings, TAGLINE[eid]))
        a("    menu: [\n")
        for label, action in MENU[eid]:
            a("      { action: %s, label: %s },\n" % (js(action), locale_map(strings, label)))
        a("    ],\n")
        a("    highlights: {\n")
        for loc in LOCALES:
            vals = [
                h if loc == "en" else (strings[loc].get(h) or h) for h in HIGHLIGHTS[eid]
            ]
            a("      %s: [%s],\n" % (ident(loc), ", ".join(js(v) for v in vals)))
        a("    },\n")
        a("  },\n")
    a("];\n\n")

    a("export const ENGINE_BY_ID: Record<EngineId, EngineDefinition> = Object.fromEntries(\n")
    a("  ENGINES.map((engine) => [engine.id, engine]),\n")
    a(") as Record<EngineId, EngineDefinition>;\n\n")

    a("export function enginesInSection(section: SectionId): EngineDefinition[] {\n")
    a("  return ENGINES.filter((engine) => engine.section === section);\n")
    a("}\n\n")

    a("/** The node's Chinese spelling where it has one, otherwise the English product name. */\n")
    a("export function engineName(engine: EngineDefinition, locale: LocaleCode): string {\n")
    a('  if (locale === "zh-Hans" || locale === "zh-Hant") return engine.name[locale];\n')
    a("  return engine.name.en;\n")
    a("}\n\n")

    a("/** The official catalog price for an official locale; portal locales use engineLocalization. */\n")
    a("export function priceLabel(engine: EngineDefinition, locale: CatalogLocale): string {\n")
    a("  if (engine.credits30d === null) return PRICE_METERED[locale];\n")
    a('  return PRICE_FORMAT[locale].replace("%lld", String(engine.credits30d));\n')
    a("}\n")

    dest = os.path.join(REPO, "src", "data", "enginesCatalog.ts")
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    with open(dest, "w", encoding="utf-8") as fh:
        fh.write("".join(o))
    print("wrote %s (%d bytes)" % (dest, os.path.getsize(dest)))


if __name__ == "__main__":
    main()
