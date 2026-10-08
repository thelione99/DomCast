import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site, fullAddress } from "@/content/site";
import { whatsappLink, messages } from "@/lib/links";
import type { World } from "@/components/world/WorldSwitch";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";
import { LogoFull } from "./Logo";

const explore = [
  { label: "Training", href: "/" },
  { label: "Pilates Reformer", href: "/pilates" },
  { label: "Coaching online", href: "/coaching" },
  { label: "Schede di allenamento", href: "/shop" },
  { label: "Chi sono", href: "/qualifiche" },
  { label: "Contatti", href: "/contact" },
];

export function Footer({ world }: { world: World }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 md:py-20 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-5">
          <LogoFull className="h-9 sm:h-10" />
          <p className="mt-6 max-w-[34ch] text-muted">
            Personal training, coaching online e Pilates Reformer con {site.coach}.
          </p>
        </div>

        <div className="lg:col-span-3">
          <h2 className="t-label text-muted">Studio</h2>
          <address className="mt-4 not-italic leading-relaxed">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city} ({site.address.province})
            </a>
          </address>
          {site.openingHours && <p className="mt-3 text-muted">{site.openingHours}</p>}
          <ul className="mt-6 space-y-2">
            <li>
              <a
                href={whatsappLink(world === "pilates" ? messages.pilates : messages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:underline"
              >
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="no-underline hover:underline">
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Pagine" className="lg:col-span-2">
          <h2 className="t-label text-muted">Pagine</h2>
          <ul className="mt-4 space-y-2">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="no-underline hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-2">
          <h2 className="t-label text-muted">Social</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 no-underline hover:underline">
                Instagram <ArrowUpRight aria-hidden className="size-4 text-muted" />
              </a>
            </li>
            <li>
              <a href={site.facebook.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 no-underline hover:underline">
                Facebook <ArrowUpRight aria-hidden className="size-4 text-muted" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-3 py-6 text-[0.875rem] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.coach}
            {site.vatNumber && <> · P.IVA {site.vatNumber}</>}
            <span className="sr-only"> · {fullAddress}</span>
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="no-underline hover:text-ink hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="no-underline hover:text-ink hover:underline">
                Termini
              </Link>
            </li>
            <li>
              <CookiePreferencesButton />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
