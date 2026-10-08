import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Domcast · Personal trainer e Pilates Reformer",
    short_name: "Domcast",
    description: "Personal training, coaching online e Pilates Reformer con Domenico Castaldo a Frattamaggiore.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0d0b",
    theme_color: "#0f0d0b",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
