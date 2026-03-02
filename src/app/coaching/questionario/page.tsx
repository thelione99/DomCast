import type { Metadata } from "next";
import { QuestionnaireForm } from "@/components/pages/QuestionnaireForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Questionario Candidatura Coaching | Domcast Training",
    description: "Compila il questionario per candidarti al servizio di Elite Coaching Online con Domenico Castaldo. Analizzeremo il tuo profilo per creare il percorso perfetto.",
    openGraph: {
        title: "Candidati al Coaching Online | Domcast",
        description: "Compila il questionario per iniziare il tuo percorso personalizzato.",
        url: "https://domcast.it/coaching/questionario",
    },
};

export default async function QuestionnairePage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const durata = params?.durata as string | undefined;

    return (
        <div className="min-h-screen bg-[#221910] pt-24 pb-20">
            <div className="container px-4 md:px-6 max-w-screen-xl mx-auto">

                <div className="mb-8">
                    <Link href="/coaching" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Torna alla pagina Coaching
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <span className="text-primary tracking-wider uppercase text-sm font-[family-name:var(--font-anton)]">Step 1 per iniziare</span>
                    <h1 className="text-4xl md:text-5xl tracking-tight text-white mt-3 mb-4 font-[family-name:var(--font-anton)] uppercase">
                        Questionario di <span className="text-primary">Candidatura</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Rispondi alle domande in modo sincero e dettagliato. Più informazioni ci fornirai, più accurata sarà la nostra valutazione per costruire il programma perfetto per te.
                    </p>
                </div>

                <QuestionnaireForm durata={durata} />
            </div>
        </div>
    );
}
