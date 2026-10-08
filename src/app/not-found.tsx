import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorldShell } from "@/components/site/WorldShell";

export default function NotFound() {
  return (
    <WorldShell world="training">
      <section className="flex min-h-[80svh] items-end pb-[clamp(4rem,10vw,8rem)] pt-40">
        <div className="container-x">
          <h1 className="t-display fit-heading" style={{ "--fit-chars": 11 } as React.CSSProperties}>
            Questa ripetizione
            <br />
            non esiste
          </h1>
          <p className="t-lead mt-8 max-w-[40ch] text-ink/85">
            Errore 404: la pagina che cerchi è stata spostata o non c&apos;è mai stata. Ripartiamo da qui.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Torna alla home
              <ArrowRight aria-hidden className="size-[1.1rem]" />
            </Link>
            <Link href="/pilates" className="btn btn-secondary">
              Pilates Reformer
            </Link>
          </div>
        </div>
      </section>
    </WorldShell>
  );
}
