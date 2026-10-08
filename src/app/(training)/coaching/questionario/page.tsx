import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { QuestionnaireForm } from "@/components/forms/QuestionnaireForm";

export const metadata: Metadata = {
  title: "Questionario per il coaching online",
  description:
    "Candidati al coaching online con Domenico Castaldo: sette sezioni brevi su obiettivi, abitudini e salute per costruire il tuo percorso.",
  alternates: { canonical: "/coaching/questionario" },
};

export default async function QuestionnairePage({ searchParams }: { searchParams: Promise<{ durata?: string }> }) {
  const { durata } = await searchParams;
  const valid = ["1", "3", "6"].includes(durata ?? "") ? durata : undefined;

  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 [container-type:inline-size]">
          <Link href="/coaching" className="inline-flex items-center gap-2 text-[0.9375rem] text-muted no-underline hover:text-ink">
            <ArrowLeft aria-hidden className="size-4" />
            Coaching online
          </Link>
          <h1 className="t-display mt-6 text-[min(3.75rem,10.4cqi)]">Raccontami di te</h1>
          <p className="mt-6 max-w-[38ch] text-muted">
            Rispondi con sincerità: più dettagli mi dai, più il programma sarà tuo. Alla fine le risposte partono in un
            messaggio WhatsApp che puoi rileggere prima di inviarlo. Il sito non le salva da nessuna parte.
          </p>
        </div>
        <div className="lg:col-span-8">
          <QuestionnaireForm durata={valid} />
        </div>
      </div>
    </div>
  );
}
