import type { Metadata } from "next";
import { trainingOpenGraph } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { programBySlug, programs } from "@/content/offer";
import { formatEUR } from "@/lib/format";
import { whatsappLink, messages } from "@/lib/links";
import { ProgramCover } from "@/components/training/ProgramCover";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) return {};
  return {
    title: `${program.name} · Scheda di allenamento`,
    description: program.description,
    alternates: { canonical: `/shop/${program.slug}` },
    openGraph: trainingOpenGraph(`/shop/${program.slug}`, `${program.name} · Domcast`, program.description),
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programBySlug(slug);
  if (!program) notFound();

  const others = programs.filter((p) => p.slug !== program.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Scheda ${program.name}`,
    description: program.description,
    brand: { "@type": "Brand", name: "Domcast" },
    offers: {
      "@type": "Offer",
      price: program.price.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${site.url}/shop/${program.slug}`,
    },
  };

  return (
    <div>
      <section className="pb-[clamp(4.5rem,9vw,8rem)] pt-32 sm:pt-40">
        <div className="container-x">
          <Link href="/shop" className="inline-flex items-center gap-2 text-[0.9375rem] text-muted no-underline hover:text-ink">
            <ArrowLeft aria-hidden className="size-4" />
            Tutte le schede
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ProgramCover program={program} className="lg:col-span-5" />

            <div className="lg:col-span-7 lg:pt-4">
              <h1 className="t-display text-[clamp(2.25rem,5vw,4.5rem)]">{program.name}</h1>
              <p className="t-title tabular mt-6 text-[2rem]">{formatEUR(program.price)}</p>
              <p className="t-lead mt-8 max-w-[44ch] text-ink/85">{program.description}</p>
              <p className="mt-4 max-w-[48ch] text-muted">{program.forWho}</p>

              <h2 className="t-label mt-12 text-muted">Cosa ricevi</h2>
              <ul className="mt-4 border-b border-line">
                {program.includes.map((item) => (
                  <li key={item} className="border-t border-line py-4">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappLink(messages.program(program.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Richiedi la scheda su WhatsApp
                  <ArrowRight aria-hidden className="size-[1.1rem]" />
                </a>
                <p className="text-[0.9375rem] text-muted">Pagamento e invio li concordiamo in chat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-surface">
        <div className="container-x">
          <h2 className="t-title text-[clamp(1.5rem,2.6vw,2.25rem)]">Altre schede</h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/shop/${p.slug}`} className="group block no-underline">
                  <ProgramCover program={p} />
                  <p className="mt-4 flex items-baseline justify-between gap-4">
                    <span className="font-semibold group-hover:underline">{p.name}</span>
                    <span className="tabular text-muted">{formatEUR(p.price)}</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
