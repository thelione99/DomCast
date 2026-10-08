/**
 * Contenuti del mondo Pilates.
 * `formats` e `packages` restano vuoti finché Domenico non fornisce formati e prezzi:
 * le sezioni che dipendono da loro non vengono mostrate.
 */

export const pilates = {
  springs: [
    {
      title: "Lavori in profondità, senza carichi pesanti",
      text: "Addome, glutei, schiena e gambe lavorano insieme. Le molle danno la resistenza, il tuo corpo il controllo.",
    },
    {
      title: "Postura e mobilità, lezione dopo lezione",
      text: "Movimenti lenti e precisi che allungano, rinforzano e ti insegnano a stare meglio anche fuori dallo studio.",
    },
    {
      title: "Si adatta a te, non il contrario",
      text: "Cambiando una molla lo stesso esercizio diventa più leggero o più intenso. Si parte da dove sei.",
    },
  ],
  lesson: [
    {
      title: "Ci conosciamo",
      text: "Mi racconti obiettivi, abitudini ed eventuali fastidi. Da lì scelgo da dove partire.",
    },
    {
      title: "Sul reformer, insieme",
      text: "Ti guido esercizio per esercizio, correggo la posizione e regolo le molle.",
    },
    {
      title: "Un passo alla volta",
      text: "Quando un movimento diventa tuo, aggiungiamo difficoltà. Senza fretta e senza strappi.",
    },
  ],
  formats: [] as { name: string; detail: string }[],
  packages: [] as { name: string; price: number; note?: string }[],
  faqs: [
    {
      q: "Devo essere già allenata?",
      a: "No. Il reformer si regola sul tuo livello: con le molle giuste anche chi parte da zero lavora in sicurezza, e chi è già allenata trova tutta l'intensità che cerca.",
    },
    {
      q: "Cosa devo portare?",
      a: "Abbigliamento comodo e aderente, così posso vedere bene la tua posizione, e un paio di calze antiscivolo.",
    },
    {
      q: "Posso farlo in gravidanza o dopo il parto?",
      a: "Parlane prima con il tuo medico o la tua ostetrica. Con il loro via libera adattiamo gli esercizi insieme.",
    },
    {
      q: "Quanto costa?",
      a: "Scrivimi su WhatsApp: ti mando pacchetti e orari liberi in questo periodo.",
    },
  ],
} as const;
