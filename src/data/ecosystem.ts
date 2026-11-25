/**
 * The other POPOPX portals, for the ecosystem row in the navigation and the footer.
 *
 * These are the project's own sites, not third parties. Nothing is loaded from them —
 * no image, no script, no stylesheet, no font — and no request is ever made to them,
 * so a reader only leaves this origin by clicking one with a mouse.
 *
 * Each address was checked on 2026-11-25 with `curl -sIL --max-time 25`, and the
 * document title of each is quoted below because it is what says the link is aimed at
 * the right product rather than at a parked host:
 *
 *   popopx.chat      → "POPOPX · 无全局 ID 的端到端加密通讯与自托管商业网络"
 *   bot.popopx.chat  → "POPOPX Bot Studio — Run your own POPOPX bots on a server you control"
 *   mp.popopx.chat   → "POPOPX 服务号 · 零知识加密频道生态门户"
 *
 * Adding a portal therefore means one entry here and one pair of strings in every
 * catalog; nothing else has to know the address exists.
 */
export interface EcosystemLink {
  /** Which pair of `dict.ecosystem` strings labels this entry. */
  key: "chat" | "botStudio" | "serviceSuite";
  href: string;
  /** Printed under the label so the destination is readable before it is clicked. */
  host: string;
}

export const ECOSYSTEM_LINKS: EcosystemLink[] = [
  { key: "chat", href: "https://popopx.chat/", host: "popopx.chat" },
  { key: "botStudio", href: "https://bot.popopx.chat/", host: "bot.popopx.chat" },
  { key: "serviceSuite", href: "https://mp.popopx.chat/", host: "mp.popopx.chat" },
];
