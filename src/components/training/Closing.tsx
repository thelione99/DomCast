import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site, fullAddress } from "@/content/site";
import { whatsappLink, messages } from "@/lib/links";

export function Closing() {
  return (
    <section className="section-y border-t border-line bg-surface">
      <div className="container-x">
        <h2 className="t-display text-[clamp(2.5rem,8.2vw,6rem)]">
          Supera i tuoi
          <br />
          <span className="text-accent">limiti</span>
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <p className="t-lead max-w-[42ch] text-ink/85 lg:col-span-6">
            Il primo passo è una chiacchierata. Scrivimi cosa vuoi ottenere: ti rispondo io, di persona.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end lg:self-end">
            <a href={whatsappLink(messages.consultation)} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Scrivimi su WhatsApp
              <ArrowRight aria-hidden className="size-[1.1rem]" />
            </a>
            <a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              @{site.instagram.handle}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </div>
        <p className="mt-14 border-t border-line pt-6 text-[0.9375rem] text-muted">
          Studio Domcast ·{" "}
          <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-current">
            {fullAddress}
          </a>
        </p>
      </div>
    </section>
  );
}
