"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, ChevronLeft, Send, CheckCircle2, Loader2 } from "lucide-react";

// Tipi per strutturare le risposte divise in step
type FormState = Record<string, Record<string, string | string[]>>;

const STEPS = [
    {
        title: "1️⃣ Dati personali",
        fields: [
            { name: "Nome e cognome", type: "text", required: true },
            { name: "Età", type: "number", required: true },
            { name: "Altezza (cm)", type: "number", required: true },
            { name: "Peso attuale (kg)", type: "number", required: true },
            { name: "Professione / stile di vita", type: "text", placeholder: "sedentario, attivo, molto attivo", required: true },
            { name: "Città di residenza", type: "text", required: true },
            { name: "Contatto email / telefono", type: "text", required: true },
        ]
    },
    {
        title: "2️⃣ Obiettivi principali",
        fields: [
            {
                name: "Qual è il tuo obiettivo principale?",
                type: "checkbox",
                options: ["Dimagrimento", "Aumento massa muscolare", "Tonificazione", "Ricomposizione corporea", "Miglioramento salute", "Miglioramento performance", "Altro"]
            },
            { name: "Entro quanto tempo vuoi raggiungere il tuo obiettivo?", type: "text" },
            { name: "Perché questo obiettivo è importante per te?", type: "textarea" },
            { name: "Cosa ti ha impedito finora di raggiungerlo?", type: "textarea" },
        ]
    },
    {
        title: "3️⃣ Situazione attuale",
        fields: [
            { name: "Come valuti la tua forma fisica attuale? (1-10)", type: "number", min: 1, max: 10 },
            {
                name: "Quali sono le tue principali difficoltà?",
                type: "checkbox",
                options: ["Mancanza di costanza", "Alimentazione disordinata", "Poco tempo", "Mancanza di risultati", "Scarsa motivazione", "Problemi metabolici", "Altro"]
            },
            { name: "Quali parti del corpo vuoi migliorare maggiormente?", type: "text" },
            { name: "Hai aumentato di peso negli ultimi 12 mesi?", type: "radio", options: ["Sì", "No"] },
        ]
    },
    {
        title: "4️⃣ Esperienza di allenamento",
        fields: [
            { name: "Ti alleni attualmente?", type: "radio", options: ["No", "1-2 volte a settimana", "3-4 volte a settimana", "5+ volte a settimana"] },
            { name: "Da quanto tempo ti alleni?", type: "text" },
            { name: "Che tipo di allenamento hai svolto finora?", type: "text" },
            { name: "Hai mai lavorato con un personal trainer? Com'è stata l'esperienza?", type: "textarea" },
        ]
    },
    {
        title: "5️⃣ Stato di salute",
        fields: [
            { name: "Hai patologie diagnosticate? (specificare o 'No')", type: "text" },
            { name: "Assumi farmaci? (specificare o 'No')", type: "text" },
            { name: "Hai avuto infortuni o interventi chirurgici?", type: "textarea" },
            { name: "Hai dolori articolari o limitazioni nei movimenti?", type: "text" },
            { name: "Problemi specifici in aree", type: "checkbox", options: ["Schiena", "Ginocchia", "Spalle", "Nessuno", "Altro"] },
        ]
    },
    {
        title: "6️⃣ Alimentazione e stile di vita",
        fields: [
            { name: "Come valuti la tua alimentazione attuale? (1-10)", type: "number", min: 1, max: 10 },
            { name: "Segui una dieta specifica?", type: "radio", options: ["No", "Iperproteica", "Vegetariana", "Vegana", "Altro"] },
            { name: "Quanti pasti fai al giorno?", type: "number" },
            { name: "Hai fame frequente o attacchi di fame?", type: "radio", options: ["Sì", "No, raramente"] },
            { name: "Quante ore dormi mediamente?", type: "number" },
            { name: "Livello di stress quotidiano (1-10)", type: "number", min: 1, max: 10 },
        ]
    },
    {
        title: "7️⃣ Disponibilità e impegno",
        fields: [
            { name: "Quante volte a settimana puoi allenarti realmente?", type: "number" },
            { name: "Quanto tempo puoi dedicare a ogni allenamento? (es: 1 ora)", type: "text" },
            { name: "Dove ti allenerai?", type: "radio", options: ["Casa", "Palestra", "Entrambi"] },
            { name: "Attrezzatura disponibile? (se a casa, es: manubri, elastici)", type: "text" },
            { name: "Quanto sei disposto a impegnarti per raggiungere il risultato? (1-10)", type: "number", min: 1, max: 10 },
        ]
    }
];

export function QuestionnaireForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<FormState>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (stepTitle: string, fieldName: string, value: string | string[]) => {
        setFormData(prev => ({
            ...prev,
            [stepTitle]: {
                ...(prev[stepTitle] || {}),
                [fieldName]: value
            }
        }));
    };

    const handleCheckboxChange = (stepTitle: string, fieldName: string, option: string, checked: boolean) => {
        const currentVals = (formData[stepTitle]?.[fieldName] as string[]) || [];
        const newVals = checked
            ? [...currentVals, option]
            : currentVals.filter(v => v !== option);

        handleInputChange(stepTitle, fieldName, newVals);
    };

    const nextStep = () => {
        if (currentStep < STEPS.length - 1) setCurrentStep(c => c + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const prevStep = () => {
        if (currentStep > 0) setCurrentStep(c => c - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Se non è l'ultimo step, procedi al prossimo senza inviare form
        if (currentStep < STEPS.length - 1) {
            nextStep();
            return;
        }

        setIsSubmitting(true);
        setError(null);

        try {
            const res = await fetch('/api/send-questionnaire', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if (result.success) {
                setIsSuccess(true);
            } else {
                setError("C'è stato un errore nell'invio. Riprova più tardi.");
            }
        } catch (err) {
            setError("Impossibile connettersi al server. Controlla la connessione e riprova.");
        } finally {
            setIsSubmitting(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-20 px-6 bg-[#2a2018] rounded-2xl border border-primary/20 max-w-2xl mx-auto shadow-2xl">
                <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-[family-name:var(--font-anton)] text-white mb-4 uppercase">Candidatura Inviata!</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    Grazie per aver compilato il questionario. Esamineremo attentamente le tue risposte e ti contatteremo a breve per fissare una chiamata conoscitiva se riteniamo che il nostro percorso faccia al caso tuo.
                </p>
                <Button onClick={() => window.location.href = "/"} className="bg-primary text-[#2a2018] font-bold h-12 px-8 rounded-full">
                    Torna alla Home
                </Button>
            </div>
        );
    }

    const step = STEPS[currentStep];
    const progressPercentage = ((currentStep + 1) / STEPS.length) * 100;

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2 font-mono">
                    <span>Step {currentStep + 1} di {STEPS.length}</span>
                    <span>{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-2">
                    <div
                        className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#2a2018] p-6 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                    {step.title}
                </h2>

                <div className="space-y-8">
                    {step.fields.map((fieldBase, idx) => {
                        const field = fieldBase as any;
                        const val = formData[step.title]?.[field.name] || "";

                        return (
                            <div key={idx} className="space-y-3">
                                <Label className="text-lg text-gray-200">{field.name}</Label>

                                {field.type === 'textarea' ? (
                                    <Textarea
                                        required={field.required}
                                        value={val as string}
                                        onChange={(e) => handleInputChange(step.title, field.name, e.target.value)}
                                        className="bg-[#221910] border-white/10 text-white min-h-[120px] focus:border-primary/50 text-base"
                                    />
                                ) : field.type === 'checkbox' ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                        {field.options?.map((opt: string, oIdx: number) => (
                                            <label key={oIdx} className="flex items-center space-x-3 cursor-pointer p-4 rounded-xl border border-white/5 bg-[#221910] hover:border-primary/30 transition-colors">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 accent-primary bg-black/50 border-white/20 rounded"
                                                    checked={Boolean((formData[step.title]?.[field.name] as string[])?.includes(opt))}
                                                    onChange={(e) => handleCheckboxChange(step.title, field.name, opt, e.target.checked)}
                                                />
                                                <span className="text-gray-300">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                ) : field.type === 'radio' ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                        {field.options?.map((opt: string, oIdx: number) => (
                                            <label key={oIdx} className="flex items-center space-x-3 cursor-pointer p-4 rounded-xl border border-white/5 bg-[#221910] hover:border-primary/30 transition-colors">
                                                <input
                                                    type="radio"
                                                    name={`radio-${step.title}-${field.name}`}
                                                    className="w-5 h-5 accent-primary bg-black/50 border-white/20"
                                                    checked={val === opt}
                                                    onChange={() => handleInputChange(step.title, field.name, opt)}
                                                />
                                                <span className="text-gray-300">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <Input
                                        type={field.type}
                                        min={field.min ?? (field.type === 'number' ? 0 : undefined)}
                                        max={field.max}
                                        required={field.required}
                                        placeholder={field.placeholder}
                                        value={val as string}
                                        onChange={(e) => handleInputChange(step.title, field.name, e.target.value)}
                                        className="bg-[#221910] border-white/10 text-white focus:border-primary/50 text-base h-12"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {error && (
                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm">
                        {error}
                    </div>
                )}

                <div className="mt-12 flex items-center justify-between pt-6 border-t border-white/10">
                    <Button
                        type="button"
                        variant="outline"
                        className={`h-12 px-6 rounded-xl border-white/10 text-white hover:text-white bg-white/5 hover:bg-white/10 ${currentStep === 0 ? 'invisible' : ''}`}
                        onClick={prevStep}
                        disabled={isSubmitting}
                    >
                        <ChevronLeft className="w-5 h-5 mr-2" /> Indietro
                    </Button>

                    <Button
                        type="submit"
                        className="h-12 px-8 rounded-xl bg-primary text-[#2a2018] font-bold hover:bg-primary/90 min-w-[140px]"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Invio...</>
                        ) : currentStep === STEPS.length - 1 ? (
                            <><Send className="w-5 h-5 mr-2" /> Invia Candidatura</>
                        ) : (
                            <>Avanti <ChevronRight className="w-5 h-5 ml-2" /></>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
