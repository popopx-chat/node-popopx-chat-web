import { ArchitectureBentoSection } from "./components/ArchitectureBentoSection";
import { DiscoverEnginesSection } from "./components/DiscoverEnginesSection";
import { FaqAndFooter } from "./components/FaqAndFooter";
import { HardwareLadderSection } from "./components/HardwareLadderSection";
import { HeroSection } from "./components/HeroSection";
import { InstallGuideSection } from "./components/InstallGuideSection";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <div className="min-h-screen bg-void text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <ArchitectureBentoSection />
        <DiscoverEnginesSection />
        <HardwareLadderSection />
        <InstallGuideSection />
      </main>
      <FaqAndFooter />
    </div>
  );
}
