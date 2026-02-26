import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Come funziona il servizio di coaching online?",
        answer: "Il coaching online inizia con una consulenza iniziale per capire i tuoi obiettivi. Successivamente, riceverai un piano di allenamento personalizzato e linee guida nutrizionali. Avrai accesso al supporto diretto via WhatsApp per feedback settimanali, correzione tecnica degli esercizi tramite video e aggiustamenti del programma in base ai tuoi progressi."
    },
    {
        question: "Ho bisogno di una palestra o posso allenarmi a casa?",
        answer: "I programmi sono personalizzati in base alla tua situazione. Se hai accesso a una palestra, sfrutteremo tutte le attrezzature disponibili. Se preferisci allenarti a casa, creerò un piano efficace basato sull'attrezzatura che possiedi (o a corpo libero)."
    },
    {
        question: "Quanto tempo ci vuole per vedere i risultati?",
        answer: "I primi miglioramenti in termini di energia e forza si notano spesso nelle prime 2-3 settimane. Per cambiamenti fisici visibili significativi, consigliamo un percorso di almeno 3-6 mesi. La costanza è la chiave del successo."
    },
    {
        question: "Il piano nutrizionale è una dieta rigida?",
        answer: "No. Fornisco linee guida nutrizionali flessibili basate sui macronutrienti e sulle tue preferenze alimentari. L'obiettivo è l'educazione alimentare per sostenere i risultati nel lungo termine, non una dieta privativa temporanea."
    },
    {
        question: "Posso contattarti se ho dubbi durante la settimana?",
        answer: "Assolutamente sì. Il servizio di Coaching Online Elite include supporto WhatsApp prioritario. Puoi inviare domande o video degli esercizi in qualsiasi momento e riceverai risposta entro 24 ore."
    }
];

export function FAQ() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-20 bg-[#1a140e] relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl tracking-tight text-white font-[family-name:var(--font-anton)] uppercase mb-4">
                        Domande <span className="text-primary">Frequenti</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Tutto ciò che devi sapere prima di iniziare il tuo percorso.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border border-white/10 bg-[#221910]/50 rounded-lg px-2 data-[state=open]:bg-[#221910] data-[state=open]:border-primary/50 transition-all duration-300"
                        >
                            <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline px-4 py-4 text-lg font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-300 px-4 pb-4 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
