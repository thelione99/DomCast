import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Open Graph per le pagine Training. Un `openGraph` definito nella pagina sostituisce
 * quello ereditato, immagine compresa: per questo l'immagine va ripetuta qui.
 */
export function trainingOpenGraph(path: string, title: string, description: string): Metadata["openGraph"] {
  return {
    url: path,
    title,
    description,
    type: "website",
    locale: "it_IT",
    siteName: "Domcast",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Domcast · Personal trainer a Frattamaggiore e online" }],
  };
}

/** Briciole di pane per Google: la home è sempre il primo passo. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...trail].map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.name,
      item: `${site.url}${step.path}`,
    })),
  };
}
