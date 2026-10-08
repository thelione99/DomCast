import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { credentials } from "@/content/coach";
import portrait from "../../../public/Dom.jpeg";

export function About() {
  return (
    <section id="chi-sono" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[6px] bg-surface lg:sticky lg:top-28">
            <Image
              src={portrait}
              alt={`${site.coach} nel suo studio`}
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="aspect-[4/5] w-full object-cover object-[50%_20%]"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <h2 className="t-display text-[clamp(2.5rem,5.6vw,4.75rem)]">
            Domenico
            <br />
            Castaldo
          </h2>

          <div className="mt-10 max-w-[60ch] space-y-5 text-[1.125rem] text-ink/85">
            <p>
              Alleno persone da {site.yearsExperience} anni e ne ho seguite più di {site.peopleTrained}: chi voleva
              perdere peso, chi mettere massa, chi semplicemente tornare a stare bene nel proprio corpo. Ogni programma
              parte da una domanda sola: <em className="not-italic text-ink">di cosa hai bisogno, davvero?</em>
            </p>
            <p>
              Mi sono laureato in Scienze Motorie e non ho mai smesso di studiare: forza, ricomposizione corporea,
              alimentazione e oggi anche il Pilates Reformer. Nel mio studio a Frattamaggiore lavoro uno a uno; online
              ti seguo con lo stesso metodo, ovunque tu sia.
            </p>
          </div>

          <figure className="mt-12 max-w-[34ch]">
            <blockquote className="t-quote text-[clamp(1.375rem,2.4vw,1.75rem)] text-ink">
              &ldquo;Non è mai troppo tardi per essere ciò che avresti voluto essere.&rdquo;
            </blockquote>
          </figure>

          <dl className="mt-14 grid gap-x-10 gap-y-7 border-t border-line pt-10 sm:grid-cols-2">
            {credentials.map((group) => (
              <div key={group.group}>
                <dt className="t-label text-muted">{group.group}</dt>
                <dd className="mt-2 space-y-1">
                  {group.items.map((item) => (
                    <span key={item} className="block">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>

          <Link href="/qualifiche" className="link-arrow mt-10">
            Formazione e certificazioni
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
