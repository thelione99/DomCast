import type { Metadata } from "next";
import { trainingOpenGraph } from "@/lib/seo";
import { faqs } from "@/content/coach";
import { Hero } from "@/components/training/Hero";
import { About } from "@/components/training/About";
import { Plans } from "@/components/training/Plans";
import { PilatesBridge } from "@/components/training/PilatesBridge";
import { Reviews } from "@/components/training/Reviews";
import { Faq } from "@/components/site/Faq";
import { Closing } from "@/components/training/Closing";

export const metadata: Metadata = {
  title: { absolute: "Domcast · Personal trainer a Frattamaggiore e online" },
  alternates: { canonical: "/" },
  openGraph: trainingOpenGraph(
    "/",
    "Domcast · Personal trainer a Frattamaggiore e online",
    "Allenamento su misura in studio a Frattamaggiore o con il coaching online. Con Domenico Castaldo.",
  ),
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Plans />
      <PilatesBridge />
      <Reviews />
      <Faq items={faqs} />
      <Closing />
    </div>
  );
}
