import { DiscoverEnginesSection } from "../components/DiscoverEnginesSection";
import { EdgeHubSection } from "../components/EdgeHubSection";
import { HardwareLadderSection } from "../components/HardwareLadderSection";

/**
 * The `/features` route: the ten engines and the memory ladder that decides which of
 * them a given machine can actually run.
 *
 * The two sections stay separate components because they read from separate catalogs —
 * `src/data/enginesCatalog.ts` mirrors the client's Discover definitions, while
 * `hardwareLadder.ts` and `nodeRuntime.ts` mirror the node's own tier selection — and a
 * page that merged them would make one source of truth ambiguous.
 */
export function FeaturesPage() {
  return (
    <>
      <DiscoverEnginesSection />
      <HardwareLadderSection />
      <EdgeHubSection />
    </>
  );
}
