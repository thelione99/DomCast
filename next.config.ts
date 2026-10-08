import type { NextConfig } from "next";
import { programs } from "./src/content/offer";

const nextConfig: NextConfig = {
  experimental: {
    // Stesso motivo: la cache su disco di Turbopack in sviluppo si corrompe con i file "._*".
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: Boolean(process.env.VERCEL),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // Su dischi exFAT macOS crea file "._*" nella cache dell'ottimizzatore e Next legge quelli
    // al posto delle immagini. Fuori da Vercel serviamo gli originali; su Vercel l'ottimizzazione resta attiva.
    unoptimized: !process.env.VERCEL,
  },
  async redirects() {
    return [
      { source: "/transformations", destination: "/#risultati", permanent: true },
      { source: "/login", destination: "/", permanent: true },
      ...programs.map((program) => ({
        source: `/shop/${program.legacyId}`,
        destination: `/shop/${program.slug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
