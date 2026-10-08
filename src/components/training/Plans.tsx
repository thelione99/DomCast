"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { coaching, coachingQuote, studioTraining, workoutPlan, type CoachingDuration } from "@/content/offer";
import { formatEUR, formatEURRounded } from "@/lib/format";
import { whatsappLink, messages } from "@/lib/links";
import { cn } from "@/lib/utils";

const durations: { months: CoachingDuration; label: string }[] = [
  { months: 1, label: "1 mese" },
  { months: 3, label: "3 mesi" },
  { months: 6, label: "6 mesi" },
];

export function Plans() {
  const [months, setMonths] = useState<CoachingDuration>(3);
  const quote = coachingQuote(months);

  return (
    <section id="percorsi" className="section-y border-t border-line bg-surface">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="t-display text-[clamp(2rem,3.6vw,3.25rem)] lg:col-span-7">Come ci alleniamo</h2>
          <p className="max-w-[46ch] text-[1.125rem] text-muted lg:col-span-5 lg:self-end">
            Tre modi di lavorare insieme. Se non sai quale fa per te, scrivimi: te lo dico io, senza impegno.
          </p>
        </div>

        <ul className="mt-16 border-b border-line">
          <PlanRow
            name={coaching.name}
            summary={coaching.summary}
            includes={coaching.includes}
            price={
              <>
                <fieldset>
                  <legend className="sr-only">Durata del coaching</legend>
                  <div className="inline-flex rounded-full border border-line-strong p-1">
                    {durations.map((d) => (
                      <label
                        key={d.months}
                        className={cn(
                          "relative inline-flex min-h-9 cursor-pointer items-center rounded-full px-3.5 text-[0.875rem] font-semibold transition-colors",
                          "has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-spark",
                          months === d.months ? "bg-ink text-bg" : "text-muted hover:text-ink",
                        )}
                      >
                        <input
                          type="radio"
                          name="durata"
                          value={d.months}
                          checked={months === d.months}
                          onChange={() => setMonths(d.months)}
                          className="sr-only"
                        />
                        {d.label}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <p className="t-title tabular mt-5 text-[2.25rem]" aria-live="polite">
                  {formatEUR(quote.total)}
                </p>
                <p className="tabular mt-1 text-[0.9375rem] text-muted">
                  {months === 1 ? "al mese" : `${formatEUR(quote.perMonth)} al mese`}
                  {quote.savings > 0 && <span className="text-ink"> · risparmi {formatEURRounded(quote.savings)}</span>}
                </p>
              </>
            }
            action={
              <Link href={`/coaching?durata=${months}`} className="btn btn-primary w-full">
                Candidati
                <ArrowRight aria-hidden className="size-[1.1rem]" />
              </Link>
            }
          />

          <PlanRow
            name={workoutPlan.name}
            summary={workoutPlan.summary}
            includes={workoutPlan.includes}
            price={
              <p className="t-title tabular text-[2.25rem]">
                <span className="mr-2 align-middle text-[1rem] font-medium normal-case text-muted [font-stretch:100%]">da</span>
                {formatEUR(workoutPlan.fromPrice)}
              </p>
            }
            action={
              <Link href="/shop" className="btn btn-secondary w-full">
                Vedi le schede
              </Link>
            }
          />

          <PlanRow
            name={studioTraining.name}
            summary={studioTraining.summary}
            includes={studioTraining.includes}
            price={<p className="t-title text-[1.75rem]">{studioTraining.status}</p>}
            action={
              <a href={whatsappLink(messages.waitlist)} target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full">
                Mettimi in lista
              </a>
            }
          />
        </ul>
      </div>
    </section>
  );
}

function PlanRow({
  name,
  summary,
  includes,
  price,
  action,
}: {
  name: string;
  summary: string;
  includes: readonly string[];
  price: React.ReactNode;
  action: React.ReactNode;
}) {
  return (
    <li className="grid gap-8 border-t border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-12">
      <div className="lg:col-span-4">
        <h3 className="t-title text-[clamp(1.5rem,2.4vw,2rem)]">{name}</h3>
        <p className="mt-3 max-w-[40ch] text-muted">{summary}</p>
      </div>
      <ul className="space-y-2 text-base leading-[1.625rem] lg:col-span-4">
        {includes.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-3 h-0.5 w-3 shrink-0 bg-spark" />
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-between gap-6 lg:col-span-4">
        <div>{price}</div>
        <div className="sm:max-w-xs lg:max-w-none">{action}</div>
      </div>
    </li>
  );
}
