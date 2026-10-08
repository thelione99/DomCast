import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site, fullAddress } from "@/content/site";
import { pilates } from "@/content/pilates";
import { reviewBy } from "@/content/reviews";
import { whatsappLink, messages } from "@/lib/links";
import { formatEUR } from "@/lib/format";
import { ReformerDrawing } from "@/components/pilates/ReformerDrawing";
import { SpringGlyph, springColors } from "@/components/pilates/SpringGlyph";
import { ReviewRail } from "@/components/site/ReviewRail";
import { Faq } from "@/components/site/Faq";
import { WorldLink } from "@/components/world/WorldLink";
import portrait from "../../../../public/Dom.jpeg";

const description =
  "Pilates Reformer a Frattamaggiore con Domenico Castaldo, istruttore certificato e laureato in Scienze Motorie: postura, forza profonda e mobilità, al ritmo del tuo respiro.";

export const metadata: Metadata = {
  title: "Pilates Reformer a Frattamaggiore",
  description,
  alternates: { canonical: "/pilates" },
  openGraph: { url: "/pilates", title: "Pilates Reformer a Frattamaggiore · Domcast", description, type: "website", locale: "it_IT", siteName: "Domcast" },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pilates Reformer",
  serviceType: "Lezioni di Pilates Reformer",
  description,
  url: `${site.url}/pilates`,
  areaServed: { "@type": "City", name: site.address.city },
  provider: { "@id": `${site.url}/#studio` },
};

export default function PilatesPage() {
  const women = ["Nina Lidia Moccia", "Barbara Bruno", "Arianna Rubino"].map(reviewBy);

  return (
    <div>
      {/* Apertura: il reformer è il protagonista, a tutta larghezza */}
      <section className="overflow-x-clip pb-[clamp(3rem,7vw,5.5rem)] pt-32 sm:pt-36">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
            <div className="lg:col-span-7 [container-type:inline-size]">
              <h1 className="t-display exhale whitespace-nowrap text-[min(6.5rem,17cqi)] lg:text-[min(6.5rem,13.5cqi)]">
                <span className="block">
                  Pilates <br className="lg:hidden" />
                  Reformer
                </span>
                <span className="block text-muted">a Frattamaggiore</span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-2">
              <p className="t-lead max-w-[40ch]">
                Lezioni sul reformer nel mio studio, seguite da me dall&apos;inizio alla fine. Forza profonda, postura e
                mobilità, al ritmo del tuo respiro.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink(messages.pilates)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Chiedi orari e pacchetti
                  <ArrowRight aria-hidden className="size-[1.1rem]" />
                </a>
                <a href="#lezione" className="btn btn-secondary">
                  Com&apos;è una lezione
                </a>
              </div>
            </div>
          </div>
          <ReformerDrawing className="-mx-4 mt-14 sm:mx-0 lg:mt-16" />
        </div>
      </section>

      {/* Cos'è */}
      <section id="reformer" className="section-y border-t border-line bg-surface">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 className="t-display text-[clamp(2.5rem,6vw,5rem)] lg:col-span-6">
              Un carrello, delle molle, il tuo respiro
            </h2>
            <p className="max-w-[48ch] text-[1.125rem] text-muted lg:col-span-5 lg:col-start-8 lg:self-end">
              Il reformer è un lettino con un carrello che scorre su binari, collegato a molle di resistenza diversa.
              Spingi, tiri, allunghi: le molle ti aiutano o ti mettono alla prova, e ogni movimento resta controllato.
            </p>
          </div>
          <ul className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {pilates.springs.map((item, i) => (
              <li key={item.title} className="border-t border-line-strong pt-6">
                <SpringGlyph color={springColors[i]} />
                <h3 className="t-title mt-5 text-[1.625rem]">{item.title}</h3>
                <p className="mt-3 max-w-[38ch] text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* La lezione */}
      <section id="lezione" className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="t-display text-[clamp(2.5rem,6vw,5rem)]">Com&apos;è una lezione</h2>
            <div className="relative mt-10 overflow-hidden rounded-[18px] bg-raised">
              <Image
                src={portrait}
                alt={`${site.coach}, istruttore Pilates Reformer`}
                sizes="(min-width: 1024px) 36vw, 100vw"
                placeholder="blur"
                className="aspect-[4/5] w-full object-cover object-[50%_20%]"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-4">
            <p className="t-lead max-w-[40ch]">
              Ti segue {site.coach}: istruttore Pilates Reformer certificato e laureato in Scienze Motorie. Con calma,
              guardandoti, correggendo e regolando le molle per te.
            </p>
            <ol className="mt-12 border-b border-line">
              {pilates.lesson.map((step, i) => (
                <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-8">
                  <span className="t-title tabular text-[1.625rem] text-spark">{i + 1}</span>
                  <div>
                    <h3 className="t-title text-[1.625rem]">{step.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            {pilates.formats.length > 0 && (
              <ul className="mt-10 space-y-3">
                {pilates.formats.map((format) => (
                  <li key={format.name}>
                    <strong className="font-semibold">{format.name}</strong> <span className="text-muted">{format.detail}</span>
                  </li>
                ))}
              </ul>
            )}

            {pilates.packages.length > 0 && (
              <ul className="mt-10 border-b border-line">
                {pilates.packages.map((pkg) => (
                  <li key={pkg.name} className="flex items-baseline justify-between gap-6 border-t border-line py-5">
                    <span>
                      {pkg.name}
                      {pkg.note && <span className="block text-[0.9375rem] text-muted">{pkg.note}</span>}
                    </span>
                    <span className="t-title tabular text-[1.5rem]">{formatEUR(pkg.price)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Recensioni */}
      <section className="section-y overflow-hidden border-t border-line bg-surface">
        <div className="container-x mb-14 grid gap-6 lg:grid-cols-12">
          <h2 className="t-display text-[clamp(2.5rem,6vw,5rem)] lg:col-span-6">Cosa dicono di lui</h2>
          <p className="max-w-[44ch] text-muted lg:col-span-5 lg:col-start-8 lg:self-end">
            Recensioni Google delle clienti che si allenano con Domenico, in studio e online.
          </p>
        </div>
        <ReviewRail reviews={women} label="Recensioni Google delle clienti" />
      </section>

      <Faq items={pilates.faqs} />

      {/* Dove */}
      <section id="dove" className="section-y border-t border-line">
        <div className="container-x">
          <h2 className="t-display text-[clamp(2.75rem,8vw,6rem)]">Ti aspetto in studio</h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="t-lead inline-flex items-start gap-2 underline decoration-line-strong underline-offset-4 hover:decoration-current"
              >
                {fullAddress}
                <ArrowUpRight aria-hidden className="mt-1 size-5 shrink-0" />
              </a>
              {site.openingHours && <p className="mt-3 text-muted">{site.openingHours}</p>}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end lg:self-end">
              <a href={whatsappLink(messages.pilates)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Scrivimi su WhatsApp
                <ArrowRight aria-hidden className="size-[1.1rem]" />
              </a>
            </div>
          </div>
          <p className="mt-16 border-t border-line pt-6 text-muted">
            Preferisci bilancieri e manubri?{" "}
            <WorldLink href="/" className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-current">
              Torna al lato Training
            </WorldLink>
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
    </div>
  );
}
