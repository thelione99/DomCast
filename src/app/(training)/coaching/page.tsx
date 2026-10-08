import type { Metadata } from "next";
import { breadcrumbJsonLd, trainingOpenGraph } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { coaching, coachingQuote, type CoachingDuration } from "@/content/offer";
import { faqs } from "@/content/coach";
import { reviewBy } from "@/content/reviews";
import { formatEUR, formatEURRounded } from "@/lib/format";
import { Faq } from "@/components/site/Faq";

const description =
  "Coaching online con Domenico Castaldo: programma di allenamento su misura, indicazioni alimentari, check settimanali e correzione della tecnica sui tuoi video.";

export const metadata: Metadata = {
  title: "Personal trainer online · Coaching su misura",
  description,
  alternates: { canonical: "/coaching" },
  openGraph: trainingOpenGraph("/coaching", "Personal trainer online · Coaching su misura · Domcast", description),
};

const steps = [
  {
    title: "Compili il questionario",
    text: "Sette sezioni brevi su obiettivi, abitudini, salute e disponibilità. Più sei preciso, meglio ti conosco.",
  },
  {
    title: "Ne parliamo",
    text: "Leggo le tue risposte e ti ricontatto per capire se e come posso aiutarti. Se non è il momento giusto, te lo dico.",
  },
  {
    title: "Ricevi il tuo programma",
    text: "Allenamento costruito su di te e indicazioni alimentari che puoi seguire davvero, a casa o in palestra.",
  },
  {
    title: "Ogni settimana facciamo il punto",
    text: "Mi mandi progressi e video degli esercizi: correggo la tecnica e adatto il programma a come stai andando.",
  },
];

const durations: CoachingDuration[] = [1, 3, 6];

export default async function CoachingPage({ searchParams }: { searchParams: Promise<{ durata?: string }> }) {
  const { durata } = await searchParams;
  const selected = durations.find((d) => String(d) === durata);
  const ferdinando = reviewBy("Ferdinando de Blasio");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Coaching online",
    serviceType: "Personal trainer online",
    description,
    url: `${site.url}/coaching`,
    provider: { "@id": `${site.url}/#studio` },
    areaServed: "IT",
    offers: durations.map((months) => ({
      "@type": "Offer",
      name: months === 1 ? "1 mese" : `${months} mesi`,
      price: coaching.prices[months].toFixed(2),
      priceCurrency: "EUR",
    })),
  };

  return (
    <div>
      <section className="pb-16 pt-36 sm:pt-44">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <h1 className="t-display fit-heading lg:col-span-8" style={{ "--fit-chars": 8, "--fit-span": 0.64 } as React.CSSProperties}>Coaching online</h1>
          <div className="lg:col-span-7">
            <p className="t-lead max-w-[46ch] text-ink/85">
              Ti seguo a distanza con lo stesso metodo che uso in studio: programma su misura, alimentazione, un check
              ogni settimana e la correzione della tecnica sui tuoi video.
            </p>
            <Link href={`/coaching/questionario${selected ? `?durata=${selected}` : ""}`} className="btn btn-primary mt-9">
              Compila il questionario
              <ArrowRight aria-hidden className="size-[1.1rem]" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <h2 className="t-display text-[clamp(2rem,3.6vw,3.25rem)] lg:col-span-5">Come funziona</h2>
          <ol className="border-b border-line lg:col-span-7">
            {steps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-8">
                <span className="t-title tabular text-[1.5rem] text-accent">{i + 1}</span>
                <div>
                  <h3 className="t-title text-[1.375rem]">{step.title}</h3>
                  <p className="mt-2 max-w-[52ch] text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y border-t border-line bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="t-display text-[clamp(2rem,3.6vw,3.25rem)]">Quanto costa</h2>
            <ul className="mt-8 space-y-2 leading-[1.625rem]">
              {coaching.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-3 h-0.5 w-3 shrink-0 bg-spark" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <ul className="border-b border-line lg:col-span-7">
            {durations.map((months) => {
              const quote = coachingQuote(months);
              const isSelected = selected === months;
              return (
                <li
                  key={months}
                  className="grid items-center gap-4 border-t border-line py-7 sm:grid-cols-[1fr_auto_auto] sm:gap-8"
                >
                  <div>
                    <p className="t-title text-[1.5rem]">{months === 1 ? "1 mese" : `${months} mesi`}</p>
                    <p className="tabular mt-1 text-[0.9375rem] text-muted">
                      {months === 1 ? "Rinnovabile mese per mese" : `${formatEUR(quote.perMonth)} al mese`}
                      {quote.savings > 0 && <span className="text-ink"> · risparmi {formatEURRounded(quote.savings)}</span>}
                    </p>
                  </div>
                  <p className="t-title tabular text-[1.75rem]">{formatEUR(quote.total)}</p>
                  <Link
                    href={`/coaching/questionario?durata=${months}`}
                    aria-label={`Candidati per ${months === 1 ? "1 mese" : `${months} mesi`}`}
                    className={isSelected ? "btn btn-primary" : "btn btn-secondary"}
                  >
                    Candidati
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-y border-t border-line">
        <figure className="container-x max-w-5xl">
          <blockquote className="t-quote text-[clamp(1.5rem,3.2vw,2.5rem)] leading-[1.22]">
            &ldquo;{ferdinando.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-muted">
            <span className="font-semibold text-ink">{ferdinando.author}</span> · cliente del coaching online, recensione Google
          </figcaption>
        </figure>
      </section>

      <Faq items={faqs} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Coaching online", path: "/coaching" }])) }}
      />
    </div>
  );
}
