import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { programs } from "@/content/offer";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/pilates", priority: 0.9 },
    { path: "/coaching", priority: 0.8 },
    { path: "/qualifiche", priority: 0.7 },
    { path: "/shop", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/coaching/questionario", priority: 0.5 },
    ...programs.map((program) => ({ path: `/shop/${program.slug}`, priority: 0.5 })),
    { path: "/privacy", priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    priority,
  }));
}
