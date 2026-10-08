/**
 * Servizi e prezzi. Le voci con "DA CONFERMARE" vanno verificate con Domenico
 * prima della pubblicazione (vedi elenco nel README del redesign).
 */

export type CoachingDuration = 1 | 3 | 6;

export const coaching = {
  name: "Coaching online",
  summary:
    "Ti seguo a distanza, settimana dopo settimana: allenamento e alimentazione costruiti su di te, e li correggiamo insieme strada facendo.",
  monthlyPrice: 129.99,
  prices: { 1: 129.99, 3: 349.99, 6: 589.99 } satisfies Record<CoachingDuration, number>,
  includes: [
    "Programma di allenamento su misura",
    "Indicazioni alimentari personalizzate",
    "Check ogni settimana e adattamento del programma",
    "Correzione della tecnica sui tuoi video",
    "Supporto su WhatsApp",
  ],
} as const;

export function coachingQuote(months: CoachingDuration) {
  const total = coaching.prices[months];
  const listPrice = coaching.monthlyPrice * months;
  return {
    total,
    perMonth: total / months,
    savings: Math.round(listPrice - total),
  };
}

export const workoutPlan = {
  name: "Scheda di allenamento",
  summary: "Un blocco di 4 settimane già pronto, scelto in base al tuo obiettivo. Ti alleni in autonomia.",
  fromPrice: 49.99,
  includes: ["Blocco di 4 settimane", "Video di esecuzione degli esercizi", "Supporto via email"],
} as const;

export const studioTraining = {
  name: "Personal training in studio",
  summary: "Sessioni individuali nel mio studio a Frattamaggiore, con me accanto a ogni ripetizione.",
  status: "Lista d'attesa",
  includes: ["Sessioni private di 60 minuti", "Correzione in tempo reale", "Indicazioni alimentari incluse"],
} as const;

export type Program = {
  slug: string;
  /** Vecchio id numerico (/shop/1), mantenuto per i redirect. */
  legacyId: number;
  name: string;
  goal: string;
  price: number;
  description: string;
  forWho: string;
  includes: string[];
};

export const programs: Program[] = [
  {
    slug: "definizione-4-settimane",
    legacyId: 1,
    name: "Definizione 4 settimane",
    goal: "Dimagrimento",
    price: 49.99,
    description:
      "Quattro settimane intense per ridurre la massa grassa e far emergere la definizione muscolare.",
    forWho: "Per chi si allena già con una certa regolarità e vuole asciugarsi.",
    includes: ["4 settimane programmate giorno per giorno", "Video di esecuzione degli esercizi", "Indicazioni su carichi e intensità"],
  },
  {
    slug: "allenamento-forza",
    legacyId: 2,
    name: "Allenamento forza",
    goal: "Forza",
    price: 49.99,
    description:
      "Progressioni settimanali sulle alzate fondamentali per aumentare la tua forza massimale, senza improvvisare.",
    forWho: "Per chi vuole caricare di più su squat, panca e stacco.",
    includes: ["Progressione settimana per settimana", "Video di esecuzione degli esercizi", "Indicazioni su carichi e recuperi"],
  },
  {
    slug: "costruzione-glutei",
    legacyId: 3,
    name: "Costruzione glutei",
    goal: "Glutei",
    price: 59.99,
    description: "Un programma dedicato all'ipertrofia dei glutei: esercizi scelti, volume giusto, tecnica curata.",
    forWho: "Per chi vuole glutei più forti e sviluppati, e fino a oggi li ha allenati senza risultati.",
    includes: ["Programma specifico per i glutei", "Video di esecuzione degli esercizi", "Indicazioni su carichi e intensità"],
  },
  {
    slug: "allenamento-a-casa",
    legacyId: 4,
    name: "Allenamento a casa",
    goal: "Casa",
    price: 49.99,
    description: "Allenati dove vuoi, con quello che hai: nessuna attrezzatura costosa.",
    forWho: "Per chi non ha tempo o voglia di andare in palestra.",
    includes: ["Allenamenti pensati per casa", "Video di esecuzione degli esercizi", "Alternative con o senza attrezzi"],
  },
];

export const programBySlug = (slug: string) => programs.find((p) => p.slug === slug);
