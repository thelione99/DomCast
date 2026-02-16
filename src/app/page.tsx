import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Services } from "@/components/sections/Services";
import { Transformations } from "@/components/sections/Transformations";

export default function Home() {
  return (
    <>
      <Hero />
      <Bio />
      <Services />
      <Transformations />
    </>
  );
}
