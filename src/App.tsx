import { useEffect } from "react";
import { FaqSection } from "./components/FaqSection";
import { Navbar } from "./components/Navbar";
import { SiteFooter } from "./components/SiteFooter";
import { FeaturesPage } from "./pages/FeaturesPage";
import { InstallPage } from "./pages/InstallPage";
import { NodePage } from "./pages/NodePage";
import { OverviewPage } from "./pages/OverviewPage";
import { ReleasesPage } from "./pages/ReleasesPage";
import { SecurityPage } from "./pages/SecurityPage";
import { TroubleshootingPage } from "./pages/TroubleshootingPage";
import { RouterProvider, useRouter } from "./router";
import type { RoutePath } from "./router";
import { useI18n } from "./i18n/translations";

const PAGES: Record<RoutePath, () => React.JSX.Element> = {
  "/": OverviewPage,
  "/node": NodePage,
  "/features": FeaturesPage,
  "/install": InstallPage,
  "/security": SecurityPage,
  "/troubleshooting": TroubleshootingPage,
  "/releases": ReleasesPage,
};

export function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}

/**
 * One chrome for all seven destinations. `#top` belongs here rather than on the hero so
 * the footer's back-to-top link resolves on every route: a page-level anchor that only
 * exists on the overview is a dead link everywhere else.
 */
function Shell() {
  const { path } = useRouter();
  const { dict, locale } = useI18n();
  const Page = PAGES[path];

  useEffect(() => {
    document.title = dict.routes[path].title;
  }, [dict, path, locale]);

  return (
    <div className="min-h-screen bg-void text-ink">
      <Navbar />
      <main id="top">
        <Page />
        {path === "/" ? <FaqSection /> : null}
      </main>
      <SiteFooter />
    </div>
  );
}
