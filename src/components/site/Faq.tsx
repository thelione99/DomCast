import { Plus } from "lucide-react";

type Item = { q: string; a: string };

/** `structuredData={false}` quando le stesse domande sono già marcate su un'altra pagina: Google ne vuole una copia sola. */
export function Faq({
  items,
  title = "Domande frequenti",
  id = "domande",
  structuredData = true,
}: {
  items: readonly Item[];
  title?: string;
  id?: string;
  structuredData?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id={id} className="section-y border-t border-line">
      {structuredData && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <h2 className="t-display t-section lg:col-span-5">{title}</h2>
        <div className="border-b border-line lg:col-span-7">
          {items.map((item) => (
            <details key={item.q} className="faq group border-t border-line">
              <summary className="flex min-h-16 items-center justify-between gap-6 py-5 text-[1.1875rem] font-medium [font-stretch:104%]">
                {item.q}
                <Plus aria-hidden className="faq-icon size-5 shrink-0 text-muted group-hover:text-ink" />
              </summary>
              <p className="max-w-[60ch] pb-7 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
