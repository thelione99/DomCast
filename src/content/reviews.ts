/**
 * Recensioni pubblicate sul profilo Google di Domcast, riportate parola per parola.
 * `pull` è un estratto letterale usato come citazione breve.
 */
export type Review = {
  author: string;
  text: string;
  pull?: string;
  topics: ReadonlyArray<"dimagrimento" | "massa" | "glutei" | "online" | "studio" | "postura">;
};

export const reviews: Review[] = [
  {
    author: "Nina Lidia Moccia",
    text: "Ho iniziato questo percorso con Domenico a settembre, perchè non mi piaceva più il mio fisico e non mi sentivo in forma. Grazie a lui ho perso 14kg e ora sono una persona diversa, mi sento in forma e in salute. Se volete iniziare un percorso di dimagrimento o posturale Ve lo consiglio.",
    pull: "Grazie a lui ho perso 14kg e ora sono una persona diversa.",
    topics: ["dimagrimento", "postura"],
  },
  {
    author: "Gabriele Russo",
    text: "Domenico mi segue da circa 3 anni, arrivai da lui che pesavo 59kg... abbiamo fatto una nutrizione funzionale sul migliorare la qualità degli alimenti dove ho ottenuto una grande definizione muscolare. Se volete essere seguiti da un professionista, ve lo consiglio.",
    topics: ["massa"],
  },
  {
    author: "Barbara Bruno",
    text: "Finalmente dopo tanti anni sono riuscita a migliorare i miei glutei, per anni li ho allenati in maniera sbagliata, in poco tempo sono riuscita a raggiungere un risultato che mi appagasse ! Grazie Domcast.",
    topics: ["glutei"],
  },
  {
    author: "Ferdinando de Blasio",
    text: "Ho iniziato questo percorso online con Domenico, mi sono trovato bene e continuerò a farlo. Mi motiva, sempre sul pezzo e ottengo risultati. Ve lo consiglio.",
    topics: ["online"],
  },
  {
    author: "Arianna Rubino",
    text: "Che dire di Domcast coach…é uno dei ragazzi più precisi, professionali e seri che abbia mai conosciuto. Alterna la giusta serietà e simpatia negli allenamenti, dandoti la giusta stimolazione per fare sempre di più. Molto tecnico e preciso, sai perfettamente a quale scopo serve quel tipo di esercizio e quali gruppi muscolari alleni, spronandoti e motivandoti. É stato l’unico con cui ho ottenuto risultati: ho perso 8 kg in poco tempo e col giusto allenamento. Estremamente educato. Insomma un vero Professionista.",
    pull: "É stato l’unico con cui ho ottenuto risultati: ho perso 8 kg in poco tempo e col giusto allenamento.",
    topics: ["dimagrimento"],
  },
  {
    author: "Samuele Pisano",
    text: "Mi ha aiutato a rimettermi in forma dopo anni di inattività. Allenamenti mirati, progressivi e mai improvvisati. Grande competenza e passione per il suo lavoro. Consiglio a chi cerca un servizio professionale.",
    topics: ["studio"],
  },
  {
    author: "Luigi Russo",
    text: "È da un po' che frequento questo studio di personal, ne ho girati vari ma quì ho trovato professionalità e serietà! Il coach Domenico è una persona molto preparata e sempre disponibile nel consigliarti il giusto allenamento e dieta personalizzata. Consigliatissimo.",
    topics: ["studio"],
  },
  {
    author: "Gregorio Gondola",
    text: "Mi sono affidato a Domenico per intraprendere un percorso per l’acquisizione di massa muscolare circa un’anno fa, grazie alla sua professionalità e bravura non solo come Personal Trainer ma anche come persona siamo riusciti insieme a raggiungere grandi obbiettivi di cui entrambi andiamo molto fieri. Nulla da aggiungere, il migliore!",
    topics: ["massa"],
  },
  {
    author: "Rocco Saviano",
    text: "Esperienza super positiva. Programmi personalizzati, spiegazioni chiare e massima attenzione al cliente. Finalmente ho trovato un metodo efficace e sostenibile. Ottimo personal trainer.",
    topics: ["studio"],
  },
  {
    author: "Luigi Maddaluno",
    text: "Professionalità e costanza, sono queste le caratteristiche che contraddistinguono questo studio e chi lo dirige, dalla concorrenza. Da 3 anni a questa parte mi affido costantemente a questo studio che è stato in grado di portarmi sempre ai risultati prefissati. Lo consiglio vivamente.",
    topics: ["studio"],
  },
];

export const reviewBy = (author: string) => reviews.find((r) => r.author === author)!;
