import type { Metadata } from "next";
import { breadcrumbJsonLd, trainingOpenGraph } from "@/lib/seo";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { credentials } from "@/content/coach";
import { whatsappLink, messages } from "@/lib/links";
import portrait from "../../../../public/Dom.jpeg";

const description =
  "Domenico Castaldo, personal trainer: laurea in Scienze Motorie, Master in esercizio fisico per il benessere, certificazioni ISSA, FIPL e Pilates Reformer.";

export const metadata: Metadata = {
  title: "Domenico Castaldo, personal trainer · Chi sono",
  description,
  alternates: { canonical: "/qualifiche" },
  openGraph: trainingOpenGraph("/qualifiche", "Domenico Castaldo · Formazione e certificazioni", description),
};

export default function QualifichePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": `${site.url}/#domenico`,
      name: site.coach,
      jobTitle: "Personal trainer",
      image: `${site.url}/Dom.jpeg`,
      worksFor: { "@id": `${site.url}/#studio` },
      hasCredential: credentials.flatMap((group) =>
        group.items.map((item) => ({
          "@type": "EducationalOccupationalCredential",
          name: item,
          credentialCategory: group.group,
        })),
      ),
    },
  };

  return (
    <div>
      <section className="pb-[clamp(4.5rem,9vw,8rem)] pt-36 sm:pt-44">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h1 className="t-display fit-heading" style={{ "--fit-chars": 8, "--fit-span": 0.56 } as React.CSSProperties}>
              Domenico
              <br />
              Castaldo
            </h1>
            <div className="mt-10 max-w-[58ch] space-y-5 text-[1.125rem] text-ink/85">
              <p>
                Sono un personal trainer di Frattamaggiore. Mi occupo di allenamento da {site.yearsExperience} anni e ho
                seguito più di {site.peopleTrained} persone, in studio e online.
              </p>
              <p>
                Credo in un allenamento fatto di metodo e di ascolto: niente improvvisazione, niente schede uguali per
                tutti. Per questo continuo a studiare. Qui sotto trovi il mio percorso, dalla laurea alle ultime
                certificazioni.
              </p>
            </div>
            <a
              href={whatsappLink(messages.consultation)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-10"
            >
              Prenota una consulenza
              <ArrowRight aria-hidden className="size-[1.1rem]" />
            </a>
          </div>
          <div className="lg:col-span-5">
            <Image
              src={portrait}
              alt={site.coach}
              priority
              sizes="(min-width: 1024px) 38vw, 100vw"
              placeholder="blur"
              className="aspect-[4/5] w-full rounded-[6px] object-cover object-[50%_20%]"
            />
          </div>
        </div>
      </section>

      <section className="section-y border-t border-line bg-surface">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <h2 className="t-display text-[clamp(1.75rem,2.6vw,2.5rem)] lg:col-span-5">Formazione e certificazioni</h2>
          <dl className="border-b border-line lg:col-span-7">
            {credentials.map((group) => (
              <div key={group.group} className="grid gap-3 border-t border-line py-7 sm:grid-cols-[13rem_1fr] sm:gap-8">
                <dt className="t-label pt-1 text-muted">{group.group}</dt>
                <dd className="space-y-2 text-[1.125rem]">
                  {group.items.map((item) => (
                    <span key={item} className="block">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Chi sono", path: "/qualifiche" }])) }}
      />
    </div>
  );
}
