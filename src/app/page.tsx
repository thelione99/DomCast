import { Hero } from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const Bio = dynamic(() => import("@/components/sections/Bio").then(mod => ({ default: mod.Bio })));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => ({ default: mod.Services })));
const Transformations = dynamic(() => import("@/components/sections/Transformations").then(mod => ({ default: mod.Transformations })));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(mod => ({ default: mod.FAQ })));

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Services />
      <Transformations />
      <FAQ />
    </>
  );
}
