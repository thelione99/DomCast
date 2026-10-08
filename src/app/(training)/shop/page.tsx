import type { Metadata } from "next";
import { trainingOpenGraph } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { programs, workoutPlan } from "@/content/offer";
import { formatEUR } from "@/lib/format";
import { ProgramCover } from "@/components/training/ProgramCover";

const description =
  "Schede di allenamento da 4 settimane scritte da Domenico Castaldo: definizione, forza, glutei e allenamento a casa.";

export const metadata: Metadata = {
  title: "Schede di allenamento",
  description,
  alternates: { canonical: "/shop" },
  openGraph: trainingOpenGraph("/shop", "Schede di allenamento · Domcast", description),
};

export default function ShopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Schede di allenamento Domcast",
    itemListElement: programs.map((program, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${site.url}/shop/${program.slug}`,
      name: program.name,
    })),
  };

  return (
    <div>
      <section className="pb-16 pt-36 sm:pt-44">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <h1 className="t-display fit-heading lg:col-span-9" style={{ "--fit-chars": 11, "--fit-span": 0.73 } as React.CSSProperties}>Schede di allenamento</h1>
          <p className="t-lead max-w-[46ch] text-ink/85 lg:col-span-7">
            Programmi già pronti, scritti da me. Scegli l&apos;obiettivo e ti alleni in autonomia, con i video di ogni
            esercizio. Se vuoi qualcosa costruito su di te,{" "}
            <Link href="/coaching" className="underline decoration-line-strong underline-offset-4 hover:decoration-current">
              c&apos;è il coaching online
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="pb-[clamp(4.5rem,9vw,8.5rem)]">
        <ul className="container-x grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <li key={program.slug} className="flex">
              <Link href={`/shop/${program.slug}`} className="group flex w-full flex-col no-underline">
                <ProgramCover
                  program={program}
                  className="transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:-translate-y-1"
                />
                <h2 className="t-title mt-5 text-[1.375rem]">{program.name}</h2>
                <p className="mt-2 flex-1 text-muted">{program.description}</p>
                <p className="mt-5 flex items-center justify-between">
                  <span className="t-title tabular text-[1.375rem]">{formatEUR(program.price)}</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold underline decoration-line-strong underline-offset-4 group-hover:decoration-current">
                    Dettagli
                    <ArrowRight aria-hidden className="size-4" />
                  </span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="container-x mt-16 max-w-3xl text-muted">
          Ogni scheda include: {workoutPlan.includes.join(", ").toLowerCase()}. Pagamento e invio li concordiamo su
          WhatsApp.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
