import { ArrowRight } from "lucide-react";
import { WorldLink } from "@/components/world/WorldLink";
import { ReformerDrawing } from "@/components/pilates/ReformerDrawing";

/** Una finestra sul mondo Pilates dentro la home Training: stessi token, colori rosa. */
export function PilatesBridge() {
  return (
    <section data-world="pilates" aria-labelledby="ponte-pilates" className="overflow-hidden bg-bg text-ink">
      <div className="container-x grid items-center gap-12 py-[clamp(4.5rem,9vw,8rem)] lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 id="ponte-pilates" className="t-display text-[clamp(2.75rem,6.4vw,5.5rem)]">
            Ora c&apos;è anche il Pilates Reformer
          </h2>
          <p className="mt-6 max-w-[40ch] text-[1.125rem] text-muted">
            Un carrello che scorre, delle molle, il tuo respiro. Un altro modo di diventare forte: più lento, più
            preciso, sempre con me accanto.
          </p>
          <WorldLink href="/pilates" className="link-arrow mt-9 text-[1.0625rem]">
            Entra nel lato Pilates
            <ArrowRight aria-hidden className="size-4" />
          </WorldLink>
        </div>
        <ReformerDrawing className="pt-10 lg:col-span-7 lg:col-start-6" />
      </div>
    </section>
  );
}
