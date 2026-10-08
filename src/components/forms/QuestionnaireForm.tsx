"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { whatsappLink } from "@/lib/links";
import { cn } from "@/lib/utils";

type FieldValue = string | string[];
type FormState = Record<string, Record<string, FieldValue>>;

type InputField = { name: string; type: "text" | "number" | "textarea"; required?: boolean; placeholder?: string; min?: number; max?: number };
type ChoiceField = { name: string; type: "checkbox" | "radio"; options: string[] };
type Field = InputField | ChoiceField;

const isChoice = (field: Field): field is ChoiceField => field.type === "checkbox" || field.type === "radio";

const STEPS: { title: string; fields: Field[] }[] = [
  {
    title: "Dati personali",
    fields: [
      { name: "Nome e cognome", type: "text", required: true },
      { name: "Età", type: "number", required: true, min: 14, max: 99 },
      { name: "Altezza (cm)", type: "number", required: true, min: 100, max: 230 },
      { name: "Peso attuale (kg)", type: "number", required: true, min: 30, max: 250 },
      { name: "Professione / stile di vita", type: "text", placeholder: "Sedentario, attivo, molto attivo", required: true },
      { name: "Città di residenza", type: "text", required: true },
      { name: "Email o telefono", type: "text", required: true },
    ],
  },
  {
    title: "Obiettivi",
    fields: [
      {
        name: "Qual è il tuo obiettivo principale?",
        type: "checkbox",
        options: ["Dimagrimento", "Aumento massa muscolare", "Tonificazione", "Ricomposizione corporea", "Miglioramento salute", "Miglioramento performance", "Altro"],
      },
      { name: "Entro quanto tempo vuoi raggiungerlo?", type: "text" },
      { name: "Perché è importante per te?", type: "textarea" },
      { name: "Cosa ti ha impedito finora di raggiungerlo?", type: "textarea" },
    ],
  },
  {
    title: "Situazione attuale",
    fields: [
      { name: "Come valuti la tua forma fisica attuale? (1–10)", type: "number", min: 1, max: 10 },
      {
        name: "Quali sono le tue principali difficoltà?",
        type: "checkbox",
        options: ["Mancanza di costanza", "Alimentazione disordinata", "Poco tempo", "Mancanza di risultati", "Scarsa motivazione", "Problemi metabolici", "Altro"],
      },
      { name: "Quali parti del corpo vuoi migliorare di più?", type: "text" },
      { name: "Sei aumentato di peso negli ultimi 12 mesi?", type: "radio", options: ["Sì", "No"] },
    ],
  },
  {
    title: "Esperienza di allenamento",
    fields: [
      { name: "Ti alleni attualmente?", type: "radio", options: ["No", "1–2 volte a settimana", "3–4 volte a settimana", "5+ volte a settimana"] },
      { name: "Da quanto tempo ti alleni?", type: "text" },
      { name: "Che tipo di allenamento hai fatto finora?", type: "text" },
      { name: "Hai mai lavorato con un personal trainer? Com'è andata?", type: "textarea" },
    ],
  },
  {
    title: "Salute",
    fields: [
      { name: "Hai patologie diagnosticate?", type: "text", placeholder: "Specifica, oppure scrivi «No»" },
      { name: "Assumi farmaci?", type: "text", placeholder: "Specifica, oppure scrivi «No»" },
      { name: "Hai avuto infortuni o interventi chirurgici?", type: "textarea" },
      { name: "Hai dolori articolari o limitazioni nei movimenti?", type: "text" },
      { name: "Fastidi in queste zone", type: "checkbox", options: ["Schiena", "Ginocchia", "Spalle", "Nessuno", "Altro"] },
    ],
  },
  {
    title: "Alimentazione e stile di vita",
    fields: [
      { name: "Come valuti la tua alimentazione? (1–10)", type: "number", min: 1, max: 10 },
      { name: "Segui una dieta specifica?", type: "radio", options: ["No", "Iperproteica", "Vegetariana", "Vegana", "Altro"] },
      { name: "Quanti pasti fai al giorno?", type: "number", min: 1, max: 10 },
      { name: "Hai fame frequente o attacchi di fame?", type: "radio", options: ["Sì", "No, raramente"] },
      { name: "Quante ore dormi in media?", type: "number", min: 2, max: 14 },
      { name: "Livello di stress quotidiano (1–10)", type: "number", min: 1, max: 10 },
    ],
  },
  {
    title: "Disponibilità e impegno",
    fields: [
      { name: "Quante volte a settimana puoi allenarti davvero?", type: "number", min: 1, max: 7 },
      { name: "Quanto tempo hai per ogni allenamento?", type: "text", placeholder: "Es. un'ora" },
      { name: "Dove ti allenerai?", type: "radio", options: ["Casa", "Palestra", "Entrambi"] },
      { name: "Che attrezzatura hai?", type: "text", placeholder: "Se a casa: manubri, elastici…" },
      { name: "Quanto sei disposto a impegnarti? (1–10)", type: "number", min: 1, max: 10 },
    ],
  },
];

const inputClass =
  "w-full rounded-[10px] border border-line-strong bg-bg px-4 text-[1.0625rem] text-ink placeholder:text-muted/70 transition-colors focus:border-ink focus:outline-none";

export function QuestionnaireForm({ durata }: { durata?: string }) {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState<FormState>({});
  const [consent, setConsent] = useState(false);
  const [sentUrl, setSentUrl] = useState<string | null>(null);
  const top = useRef<HTMLDivElement>(null);

  const step = STEPS[current];
  const isLast = current === STEPS.length - 1;

  const setValue = (field: string, value: FieldValue) =>
    setData((prev) => ({ ...prev, [step.title]: { ...(prev[step.title] ?? {}), [field]: value } }));

  const toggle = (field: string, option: string, checked: boolean) => {
    const values = (data[step.title]?.[field] as string[] | undefined) ?? [];
    setValue(field, checked ? [...values, option] : values.filter((v) => v !== option));
  };

  const goTo = (index: number) => {
    setCurrent(index);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isLast) return goTo(current + 1);

    const plan = durata ? ` (piano da ${durata} ${durata === "1" ? "mese" : "mesi"})` : "";
    let message = `Ciao Domenico, ho compilato il questionario per il coaching online${plan}.\n\n`;
    for (const { title } of STEPS) {
      const answers = Object.entries(data[title] ?? {}).filter(([, v]) => (Array.isArray(v) ? v.length : v));
      if (!answers.length) continue;
      message += `*${title}*\n`;
      for (const [field, value] of answers) message += `- ${field}: ${Array.isArray(value) ? value.join(", ") : value}\n`;
      message += "\n";
    }
    const url = whatsappLink(message.trim());
    window.open(url, "_blank", "noopener");
    setSentUrl(url);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (sentUrl) {
    return (
      <div ref={top} className="max-w-[46rem] scroll-mt-28 border-t border-line-strong pt-10">
        <h2 className="t-title text-[clamp(1.75rem,3vw,2.5rem)]">Ultimo passo: premi Invia su WhatsApp</h2>
        <p className="t-lead mt-5 max-w-[48ch] text-ink/85">
          Ho preparato un messaggio con tutte le tue risposte. Si è aperto WhatsApp: controllalo e invialo. Lo leggo io e
          ti rispondo personalmente.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            WhatsApp non si è aperto? Tocca qui
          </a>
          <Link href="/" className="btn btn-secondary">
            Torna alla home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={top} className="max-w-[46rem] scroll-mt-28">
      <div aria-hidden className="flex gap-1.5">
        {STEPS.map((s, i) => (
          <span key={s.title} className={cn("h-1 flex-1 rounded-full transition-colors duration-300", i <= current ? "bg-accent" : "bg-line-strong")} />
        ))}
      </div>
      <p className="tabular mt-4 text-[0.9375rem] text-muted">
        Sezione {current + 1} di {STEPS.length}
      </p>

      <form onSubmit={submit} className="mt-8">
        <fieldset>
          <legend className="t-title text-[clamp(1.75rem,3vw,2.5rem)]">{step.title}</legend>

          <div className="mt-10 space-y-9">
            {step.fields.map((field) => {
              const id = `f-${current}-${field.name.replace(/\W+/g, "-")}`;
              const value = data[step.title]?.[field.name];

              if (isChoice(field)) {
                return (
                  <fieldset key={field.name}>
                    <legend className="text-[1.0625rem] font-medium">{field.name}</legend>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {field.options.map((option) => {
                        const checked =
                          field.type === "checkbox" ? Boolean((value as string[] | undefined)?.includes(option)) : value === option;
                        return (
                          <label
                            key={option}
                            className={cn(
                              "flex min-h-12 cursor-pointer items-center gap-3 rounded-[10px] border px-4 transition-colors",
                              checked ? "border-ink bg-raised" : "border-line-strong hover:border-ink",
                            )}
                          >
                            <input
                              type={field.type}
                              name={id}
                              checked={checked}
                              onChange={(e) =>
                                field.type === "checkbox" ? toggle(field.name, option, e.target.checked) : setValue(field.name, option)
                              }
                              className="size-[1.1rem] shrink-0"
                            />
                            {option}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              }

              return (
                <div key={field.name}>
                  <label htmlFor={id} className="block text-[1.0625rem] font-medium">
                    {field.name}
                    {field.required && <span className="text-muted"> · obbligatorio</span>}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={id}
                      rows={4}
                      value={(value as string) ?? ""}
                      onChange={(e) => setValue(field.name, e.target.value)}
                      className={cn(inputClass, "mt-3 py-3 leading-relaxed")}
                    />
                  ) : (
                    <input
                      id={id}
                      type={field.type}
                      inputMode={field.type === "number" ? "numeric" : undefined}
                      min={field.min}
                      max={field.max}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={(value as string) ?? ""}
                      onChange={(e) => setValue(field.name, e.target.value)}
                      className={cn(inputClass, "mt-3 h-12")}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </fieldset>

        {isLast && (
          <label className="mt-10 flex cursor-pointer items-start gap-3 rounded-[10px] border border-line-strong p-4 text-[0.9375rem] leading-relaxed">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 size-[1.1rem] shrink-0"
            />
            <span>
              Acconsento al trattamento dei miei dati, compresi quelli sulla salute, per valutare la mia candidatura al
              coaching, come descritto nell&apos;
              <Link href="/privacy" target="_blank" className="underline">
                informativa privacy
              </Link>
              .
            </span>
          </label>
        )}

        <div className="mt-12 flex items-center justify-between gap-4 border-t border-line pt-6">
          {current > 0 ? (
            <button type="button" onClick={() => goTo(current - 1)} className="btn btn-secondary">
              <ArrowLeft aria-hidden className="size-[1.1rem]" />
              Indietro
            </button>
          ) : (
            <span />
          )}
          <button type="submit" className="btn btn-primary">
            {isLast ? (
              <>
                Invia su WhatsApp
                <Send aria-hidden className="size-[1.05rem]" />
              </>
            ) : (
              <>
                Avanti
                <ArrowRight aria-hidden className="size-[1.1rem]" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
