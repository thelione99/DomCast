import type { World } from "@/components/world/WorldSwitch";
import { ConsentBanner } from "@/components/consent/ConsentBanner";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function WorldShell({ world, children }: { world: World; children: React.ReactNode }) {
  return (
    <div data-world={world} className="world-root">
      <a
        href="#contenuto"
        className="btn btn-primary fixed left-3 top-3 z-[70] -translate-y-24 focus:translate-y-0"
      >
        Vai al contenuto
      </a>
      <Header world={world} />
      <main id="contenuto" className="flex-1">
        {children}
      </main>
      <Footer world={world} />
      <ConsentBanner />
    </div>
  );
}
