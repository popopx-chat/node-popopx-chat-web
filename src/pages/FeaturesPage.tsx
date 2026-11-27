import { DiscoverEnginesSection } from "../components/DiscoverEnginesSection";
import { EdgeHubSection } from "../components/EdgeHubSection";
import { ExtensionsSection } from "../components/ExtensionsSection";
import { HardwareLadderSection } from "../components/HardwareLadderSection";

/**
 * The `/features` route: the ten engines and the memory ladder that decides which of
 * them a given machine can actually run.
 *
 * The sections stay separate components because they read from separate catalogs —
 * `src/data/enginesCatalog.ts` mirrors the client's Discover definitions, while
 * `hardwareLadder.ts`, `nodeRuntime.ts`, `edgeHub.ts` and `extensions.ts` mirror the
 * node's own runtime — and a page that merged them would make one source of truth
 * ambiguous.
 */
export function FeaturesPage() {
  return (
    <>
      <DiscoverEnginesSection />
      <HardwareLadderSection />
      <EdgeHubSection />
      <ExtensionsSection />
    </>
  );
}
