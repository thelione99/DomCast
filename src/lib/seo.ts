import type { Metadata } from "next";

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
