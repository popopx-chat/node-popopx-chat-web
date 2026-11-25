/**
 * Fixtures for the console preview card on `/`.
 *
 * This file is the only place the preview invents anything, and it invents as little as
 * possible: the machine rows are the published ladder rows with a numeric size attached,
 * the ceilings are the node's own arithmetic, and the device rows are fixtures in the real
 * `PairedDevice` shape. Nothing here is a measurement of a running node, and the card says
 * so on its face.
 *
 * The tier rule and the two ceilings are ports of shipping code, so they must move only when
 * that code moves:
 *   `ComputeTier(memoryGB:)` and `ModelPlan.recommend(memoryGB:)` —
 *     ../PopopxMacNode/Sources/PopopxMacNode/Models/MacNodeModels.swift:531-570, :698-752
 *   `MacHardwareProfile.meshMemoryCeilingGB` — same file, :638
 *   `PairedDevice` — same file, :1080-1104; the key truncation is the console's own,
 *     ../PopopxMacNode/Sources/PopopxMacNode/WebConsole/LocalWebConsoleServer.swift:2202
 * Re-check the ceiling arithmetic against `TIER_PLANS` in `nodeRuntime.ts`, which spells the
 * same three rules as formula strings, and against the ladder cells in `hardwareLadder.ts`.
 */

import { LADDER } from "./hardwareLadder";
import type { LadderRow } from "./hardwareLadder";
import { TIER_PLANS } from "./nodeRuntime";
import type { TierPlan } from "./nodeRuntime";

/** One representative size per `LADDER` row, in `LADDER`'s order. */
const SAMPLE_GB: [number, number, number, number, number] = [32, 48, 64, 96, 128];

export interface SampleMachine extends LadderRow {
  /**
   * The size the card computes with. Only the open-ended `< 48 GB` row needs a stand-in,
   * and 32 GB is the most common configuration in that band; every other row's number is
   * the one its own label already prints.
   */
  memoryGB: number;
}

export const SAMPLE_MACHINES: SampleMachine[] = LADDER.map((row, i) => ({
  ...row,
  memoryGB: SAMPLE_GB[i],
}));

/**
 * `ComputeTier` — the bands are the ones `MacNodeModels.swift:531-570` declares, and they
 * are the same three cuts the tier-plan table prints.
 */
export type PreviewTier = TierPlan["tier"];

export function tierForMemoryGB(memoryGB: number): PreviewTier {
  if (memoryGB >= 96) return "flagship";
  if (memoryGB >= 48) return "high";
  return "light";
}

/**
 * `min(memory − headroom, cap)` from `ModelPlan.recommend`: 12/84 on `.flagship`,
 * 10/52 on `.high`, 8/28 on `.light`. The subtraction is the desktop session the node
 * refuses to evict, the cap is the point past which the stack needs no more.
 */
const RESIDENT_RULE: Record<PreviewTier, [number, number]> = {
  flagship: [12, 84],
  high: [10, 52],
  light: [8, 28],
};

/** `meshMemoryCeilingGB`, which is `max(8, Int(memoryGB × 0.55))` — `Int()` truncates. */
export function meshCeilingGB(memoryGB: number): number {
  return Math.max(8, Math.floor(memoryGB * 0.55));
}

export interface PreviewPlan {
  tier: PreviewTier;
  residentCeiling: number;
  meshCeiling: number;
  /** What the plan leaves outside the resident ceiling, for the session at the keyboard. */
  desktopHeadroom: number;
  band: string;
  pull: string;
}

export function planFor(machine: SampleMachine): PreviewPlan {
  const tier = tierForMemoryGB(machine.memoryGB);
  const [subtract, cap] = RESIDENT_RULE[tier];
  const residentCeiling = Math.min(machine.memoryGB - subtract, cap);
  const match = TIER_PLANS.find((plan) => plan.tier === tier);
  return {
    tier,
    residentCeiling,
    meshCeiling: meshCeilingGB(machine.memoryGB),
    desktopHeadroom: machine.memoryGB - residentCeiling,
    band: match?.band ?? "",
    pull: match?.pull ?? "",
  };
}

/**
 * Three fixtures, not observations: no node was queried for these. Field names and the
 * twenty-six-character key prefix are the ones the real console prints, so the picture
 * matches the product rather than a designer's idea of it. Timestamps are printed as the
 * console stamps them rather than as relative ages, because a relative age would have to
 * be computed against a clock this card does not have.
 */
export interface SampleDevice {
  id: string;
  label: string;
  keyPrefix: string;
  model: string;
  pairedAt: string;
  /** `null` renders as the catalog's "never seen", which is a state the app really has. */
  lastSeen: string | null;
  revoked: boolean;
}

export const SAMPLE_DEVICES: SampleDevice[] = [
  {
    id: "d1",
    label: "POPOPX iOS",
    keyPrefix: "9fK2mQ4xT7vL0pR3sW8bN1cD6e",
    model: "iPhone 16 Pro",
    pairedAt: "2026-11-24 21:04",
    lastSeen: "2026-11-25 09:12",
    revoked: false,
  },
  {
    id: "d2",
    label: "POPOPX iOS",
    keyPrefix: "Ht5Vn8Zr2Cy6Jd0Gk4Xb7Mq1Su",
    model: "iPhone 16",
    pairedAt: "2026-11-25 08:40",
    lastSeen: null,
    revoked: false,
  },
  {
    id: "d3",
    label: "POPOPX iOS",
    keyPrefix: "Pw1Ej7Ad4Rf9Ls3Tn6Vb0Yc8Hk",
    model: "iPad mini",
    pairedAt: "2026-11-23 19:22",
    lastSeen: "2026-11-23 19:31",
    revoked: true,
  },
];
