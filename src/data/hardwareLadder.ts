/**
 * The Apple Silicon memory tier ladder the node selects on launch.
 *
 * Cells are deliberately language-neutral: chip identifiers, model names and
 * quantisation tags are product literals, and the prose that used to sit in them
 * ("not rendered locally, routed to…") is carried instead by the localized `Mode`
 * column and by `hardware.rules`. That keeps one table honest in 21 languages
 * without re-translating a spec sheet.
 *
 * Source: PopopxMacNode README.md "Apple Silicon memory tier ladder", selected at
 * launch by `HardwareProfilerAndInstaller` from `sysctl`, and defined in
 * `MacNodeModels.swift` as `ComputeTier`: `.light` below 48 GB, `.high` from 48 to
 * 95 GB, `.flagship` from 96 GB. `lightweight` / `balanced` / `full` are those three
 * cases in the order the dictionary declares them.
 */

export type LadderMode = "lightweight" | "balanced" | "full";

export interface LadderRow {
  memory: string;
  chip: string;
  textModel: string;
  videoModel: string;
  firstToken: string;
  throughput: string;
  residentPeak: string;
  mode: LadderMode;
}

/**
 * The `< 48 GB` row names the 9B quantisation and the 4-bit short-clip stack because
 * that is what `ModelPlan.recommend` deploys on that band; the hand-off of heavy video
 * to the mesh is a policy, so it lives in `hardware.rules` and in the
 * `Heavy video` column of the tier-plan table rather than in a spec cell.
 */
export const LADDER: LadderRow[] = [
  {
    memory: "< 48 GB",
    chip: "M1 / M2 Max · Pro class",
    textModel: "Qwen3.8-9B Q4_K_M",
    videoModel: "LTX-2.5 MLX 4-bit · short clips",
    firstToken: "~0.6–1.5 s",
    throughput: "25–45 tok/s",
    residentPeak: "~10–18 GB",
    mode: "lightweight",
  },
  {
    memory: "48 GB",
    chip: "M1 Max / M2 Max · 64-core GPU",
    textModel: "Qwen3.8-27B Q4_K_M",
    videoModel: "LTX-2.5 MLX 8-bit",
    firstToken: "~1.5–3 s",
    throughput: "18–26 tok/s",
    residentPeak: "~20–26 GB",
    mode: "balanced",
  },
  {
    memory: "64 GB",
    chip: "M3 Max / M4 Max · 64 GB",
    textModel: "Qwen3.8-27B Q4_K_M",
    videoModel: "LTX-2.5 MLX 8-bit",
    firstToken: "~1.2–2.5 s",
    throughput: "20–28 tok/s",
    residentPeak: "~24–30 GB",
    mode: "balanced",
  },
  {
    memory: "96 GB",
    chip: "M2 Ultra / M3 Max · 96–128 GB",
    textModel: "Qwen3.8-27B Q8_0",
    videoModel: "LTX-2.5 BF16",
    firstToken: "~2.5–5 s",
    throughput: "12–18 tok/s",
    residentPeak: "~40–52 GB",
    mode: "full",
  },
  {
    memory: "128 GB",
    chip: "M3 Max / M4 Max / M5 Max · 128 GB",
    textModel: "Qwen3.8-27B Q8_0 ×2",
    videoModel: "LTX-2.5 BF16",
    firstToken: "~2–4 s",
    throughput: "12–20 tok/s",
    residentPeak: "~52–68 GB",
    mode: "full",
  },
];

/**
 * The browser cannot tell us which row a visitor is on: `navigator.deviceMemory`
 * is capped at 8 by every implementation, so any client-side tier highlight would
 * always select the "< 48 GB" row and be wrong. The node reads the real figure from
 * `sysctl` and shows it in the app; this page only presents the ladder.
 */
