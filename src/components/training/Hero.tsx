import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { reviewBy } from "@/content/reviews";
import { whatsappLink, messages } from "@/lib/links";
import { GoogleRating } from "@/components/site/GoogleRating";
import studio from "../../../public/sfondo.webp";

export function Hero() {
  const nina = reviewBy("Nina Lidia Moccia");

  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <Image
        src={studio}
        alt="Lo studio Domcast a Frattamaggiore: rack, bilancieri e la parete gialla"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="-z-20 object-cover object-[62%_50%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,var(--bg)_0%,rgb(15_13_11/0.86)_34%,rgb(15_13_11/0.35)_68%,rgb(15_13_11/0.55)_100%)] lg:bg-[linear-gradient(to_top,var(--bg)_0%,rgb(15_13_11/0.7)_30%,rgb(15_13_11/0.1)_70%,rgb(15_13_11/0.5)_100%),linear-gradient(to_right,rgb(15_13_11/0.75)_0%,rgb(15_13_11/0)_65%)]"
      />

      <div className="container-x grid w-full gap-12 pb-[clamp(2.5rem,7vh,5rem)] pt-36 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8 [container-type:inline-size]">
          {/* Ogni riga resta intera: la dimensione segue la larghezza della colonna (cqi). */}
          <h1 className="t-display whitespace-nowrap text-[min(9cqi,6rem)] [--display-stretch:100%] sm:text-[min(7.3cqi,6rem)] sm:[--display-stretch:125%]">
            <span className="block">Personal trainer</span>
            <span className="block">a Frattamaggiore</span>
            <span className="block text-accent">e online</span>
          </h1>

          <p className="t-lead mt-7 max-w-[44ch] text-ink/85">
            Sono {site.coach}, laureato in Scienze Motorie. Da {site.yearsExperience} anni costruisco allenamenti su
            misura e seguo le persone una settimana dopo l&apos;altra, in studio o a distanza.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink(messages.consultation)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Prenota una consulenza
              <ArrowRight aria-hidden className="size-[1.1rem]" />
            </a>
            <Link href="/coaching" className="btn btn-secondary bg-bg/30">
              Coaching online
            </Link>
          </div>

          <GoogleRating className="mt-8" />

          <figure className="mt-8 max-w-[34ch] border-t border-line-strong pt-5 lg:hidden">
            <blockquote className="t-quote text-[1.125rem] text-ink">&ldquo;{nina.pull}&rdquo;</blockquote>
            <figcaption className="mt-2 text-[0.875rem] text-muted">{nina.author} · recensione Google</figcaption>
          </figure>
        </div>

        <figure className="hidden max-w-[22rem] justify-self-end border-l border-line-strong pl-6 lg:col-span-4 lg:block">
          <blockquote className="t-quote text-[1.375rem] text-ink">&ldquo;{nina.pull}&rdquo;</blockquote>
          <figcaption className="mt-4 text-[0.875rem] text-muted">{nina.author} · recensione Google</figcaption>
        </figure>
      </div>
    </section>
  );
}
