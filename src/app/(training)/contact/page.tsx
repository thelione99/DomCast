import type { Metadata } from "next";
import { breadcrumbJsonLd, trainingOpenGraph } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import { site, fullAddress } from "@/content/site";
import { whatsappLink, messages } from "@/lib/links";

const description = `Scrivi a ${site.coach} su WhatsApp o via email, oppure passa nello studio Domcast in ${site.address.street} a Frattamaggiore.`;

export const metadata: Metadata = {
  title: "Contatti · Studio a Frattamaggiore",
  description,
  alternates: { canonical: "/contact" },
  openGraph: trainingOpenGraph("/contact", "Contatti · Studio a Frattamaggiore · Domcast", description),
};

const channels = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    note: "Il modo più veloce per raggiungermi.",
    href: whatsappLink(messages.general),
    external: true,
  },
  {
    label: "Email",
    value: site.email,
    note: "Per richieste più lunghe o documenti.",
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "Instagram",
    value: `@${site.instagram.handle}`,
    note: "Allenamenti, consigli e la vita dello studio.",
    href: site.instagram.url,
    external: true,
  },
  {
    label: "Studio",
    value: fullAddress,
    note: site.openingHours ?? "Come arrivare, su Google Maps.",
    href: site.mapsUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <div className="pb-[clamp(4.5rem,9vw,8rem)] pt-36 sm:pt-44">
      <div className="container-x">
        <h1 className="t-display fit-heading" style={{ "--fit-chars": 8 } as React.CSSProperties}>Contatti</h1>
        <p className="t-lead mt-8 max-w-[44ch] text-ink/85">
          Scrivimi cosa vuoi ottenere, anche in due righe. Ti rispondo personalmente e ti dico come possiamo lavorare
          insieme.
        </p>

        <ul className="mt-16 border-b border-line">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group grid gap-2 border-t border-line py-8 no-underline sm:grid-cols-12 sm:items-baseline sm:gap-8"
              >
                <span className="t-label text-muted sm:col-span-2">{channel.label}</span>
                <span className="break-words text-[clamp(1.375rem,2.6vw,2rem)] font-semibold leading-tight tracking-[-0.01em] [font-stretch:104%] group-hover:text-accent sm:col-span-6">
                  {channel.value}
                </span>
                <span className="flex items-start justify-between gap-6 text-muted sm:col-span-4">
                  {channel.note}
                  <ArrowUpRight aria-hidden className="size-5 shrink-0 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-[60ch] text-muted">
          Lo studio è a {site.address.city}, nella zona di Napoli Nord, vicino a {site.nearbyTowns.slice(0, -1).join(", ")} e{" "}
          {site.nearbyTowns.at(-1)}. Con il coaching online ti seguo ovunque tu sia.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Contatti", path: "/contact" }])) }}
      />
    </div>
  );
}
