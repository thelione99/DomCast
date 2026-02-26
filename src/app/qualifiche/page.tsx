import { Metadata } from "next";
import { CheckCircle2, GraduationCap, Award, Medal, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Qualifiche e Titoli | Domenico Castaldo Personal Trainer",
    description: "Scopri le qualifiche, le certificazioni e il percorso formativo di Domenico Castaldo: Laurea in Scienze Motorie, Personal Trainer ISSA, Master in esercizio fisico e molto altro.",
};

const qualifications = [
    {
        category: "Titoli Accademici",
        icon: <GraduationCap className="w-6 h-6 text-primary" />,
        items: [
            "Laurea in Scienze Motorie",
            "Master in esercizio fisico per il benessere",
        ]
    },
    {
        category: "Certificazioni ISSA",
        icon: <Award className="w-6 h-6 text-primary" />,
        items: [
            "Personal Trainer ISSA",
            "Functional Trainer ISSA",
        ]
    },
    {
        category: "Specializzazioni",
        icon: <BookOpen className="w-6 h-6 text-primary" />,
        items: [
            "Body Recomposition Specialist",
            "Glute Specialist",
        ]
    },
    {
        category: "Forza e Condizionamento",
        icon: <Medal className="w-6 h-6 text-primary" />,
        items: [
            "Istruttore Avanzato Accademia Italiana della Forza FIPL",
            "STRENGHT Trainer",
            "Kettlebell Trainer",
            "TRX Trainer",
        ]
    },
    {
        category: "Posturale e Benessere",
        icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
        items: [
            "Istruttore Pilates Reformer",
        ]
    }
];

export default function QualifichePage() {
    // Generative Engine Optimization (GEO) & SEO Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Domenico Castaldo",
        "jobTitle": "Personal Trainer",
        "url": "https://domcast.it/qualifiche",
        "knowsAbout": [
            "Personal Training",
            "Scienze Motorie",
            "Esercizio Fisico per il benessere",
            "Body Recomposition",
            "Forza e Condizionamento"
        ],
        "hasCredential": [
            ...qualifications.flatMap(q => q.items.map(item => ({
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "certification",
                "name": item
            })))
        ]
    };

    return (
        <main className="min-h-screen bg-[#221910] text-white pt-24 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="container px-4 md:px-6 max-w-screen-xl mx-auto relative z-10">
                <div className="text-center space-y-4 mb-16">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-anton)] uppercase tracking-tight text-white">
                        Qualifiche e <span className="text-primary">Titoli</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Il mio percorso formativo e le certificazioni professionali per garantirti un allenamento sicuro, scientifico ed efficace.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {qualifications.map((group, idx) => (
                        <div
                            key={idx}
                            className="bg-[#2a2018] border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-colors duration-300 shadow-xl shadow-black/20 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                                    {group.icon}
                                </div>
                                <h3 className="text-2xl font-[family-name:var(--font-anton)] tracking-wide text-white">
                                    {group.category}
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {group.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-3">
                                        <div className="mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-primary/70" />
                                        </div>
                                        <span className="text-gray-300 font-medium leading-relaxed">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
                        L&apos;aggiornamento continuo è fondamentale nel mio approccio. Studiare e approfondire le Scienze Motorie mi permette di offrirti sempre il massimo nei tuoi percorsi di fitness e wellness.
                    </p>
                </div>
            </section>

            {/* Background decorative elements */}
            <div className="fixed top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />
            <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0" />
        </main>
    );
}
