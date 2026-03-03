export interface GoogleReview {
    author_name: string;
    profile_photo_url?: string;
    rating: number;
    text: string;
    relative_time_description: string;
}

// 1. Recensioni specifiche per i pacchetti
export const productReviewMap: Record<number, GoogleReview[]> = {
    1: [ // Definizione 4 Settimane (Dimagrimento)
        {
            author_name: "Gabriele Russo",
            rating: 5,
            text: "Domenico mi segue da circa 3 anni, arrivai da lui che pesavo 59kg... abbiamo fatto una nutrizione funzionale sul migliorare la qualità degli alimenti dove ho ottenuto una grande definizione muscolare. Se volete essere seguiti da un professionista, ve lo consiglio.",
            relative_time_description: "una settimana fa",
        },
        {
            author_name: "Nina Lidia Moccia",
            rating: 5,
            text: "Ho iniziato questo percorso con Domenico a settembre, perchè non mi piaceva più il mio fisico e non mi sentivo in forma. Grazie a lui ho perso 14kg e ora sono una persona diversa, mi sento in forma e in salute. Se volete iniziare un percorso di dimagrimento o posturale Ve lo consiglio.",
            relative_time_description: "una settimana fa",
        },
        {
            author_name: "Arianna Rubino",
            rating: 5,
            text: "Domcast coach…é uno dei ragazzi più precisi, professionali e seri che abbia mai conosciuto. É stato l’unico con cui ho ottenuto risultati: ho perso 8 kg in poco tempo e col giusto allenamento. Estremamente educato. Insomma un vero Professionista.",
            relative_time_description: "una settimana fa",
        }
    ],
    2: [ // Allenamento Forza (Massa)
        {
            author_name: "Gregorio Gondola",
            rating: 5,
            text: "Mi sono affidato a Domenico per intraprendere un percorso per l’acquisizione di massa muscolare circa un’anno fa, grazie alla sua professionalità e bravura non solo come Personal Trainer ma anche come persona siamo riusciti insieme a raggiungere grandi obbiettivi di cui entrambi andiamo molto fieri. Nulla da aggiungere, il migliore!",
            relative_time_description: "5 mesi fa",
        }
    ],
    3: [ // Costruzione Glutei
        {
            author_name: "Barbara Bruno",
            rating: 5,
            text: "Finalmente dopo tanti anni sono riuscita a migliorare i miei glutei, per anni li ho allenati in maniera sbagliata, in poco tempo sono riuscita a raggiungere un risultato che mi appagasse ! Grazie Domcast.",
            relative_time_description: "una settimana fa",
        }
    ],
    4: [ // Guida Allenamento a Casa / Online Coaching
        {
            author_name: "Ferdinando de Blasio",
            rating: 5,
            text: "Ho iniziato questo percorso online con Domenico, mi sono trovato bene e continuerò a farlo. Mi motiva, sempre sul pezzo e ottengo risultati. Ve lo consiglio.",
            relative_time_description: "una settimana fa",
        }
    ]
};

// 2. Recensioni Generali (Per Homepage e Studio)
export const generalReviews: GoogleReview[] = [
    {
        author_name: "luigi russo",
        rating: 5,
        text: "È da un po' che frequento questo studio di personal, ne ho girati vari ma quì ho trovato professionalità e serietà! Il coach Domenico è una persona molto preparata e sempre disponibile nel consigliarti il giusto allenamento e dieta personalizzata. Consigliatissimo.",
        relative_time_description: "6 mesi fa",
    },
    {
        author_name: "Rocco Saviano",
        rating: 5,
        text: "Esperienza super positiva. Programmi personalizzati, spiegazioni chiare e massima attenzione al cliente. Finalmente ho trovato un metodo efficace e sostenibile. Ottimo personal trainer.",
        relative_time_description: "una settimana fa",
    },
    {
        author_name: "Luigi Maddaluno",
        rating: 5,
        text: "Professionalità e costanza, sono queste le caratteristiche che contraddistinguono questo studio e chi lo dirige, dalla concorrenza. Da 3 anni a questa parte mi affido costantemente a questo studio che è stato in grado di portarmi sempre ai risultati prefissati. Lo consiglio vivamente.",
        relative_time_description: "3 anni fa",
    },
    {
        author_name: "Samuele Pisano",
        rating: 5,
        text: "Mi ha aiutato a rimettermi in forma dopo anni di inattività. Allenamenti mirati, progressivi e mai improvvisati. Grande competenza e passione per il suo lavoro. Consiglio a chi cerca un servizio professionale.",
        relative_time_description: "una settimana fa",
    }
];

// 3. Tutte le recensioni combinate (utili per il carosello in Homepage)
export const allGoogleReviews: GoogleReview[] = [
    ...Object.values(productReviewMap).flat(),
    ...generalReviews
];

/** Media aggregata generale (dal profilo Google Maps: 38 recensioni totali) */
export const aggregateGoogleRating = {
    ratingValue: 5.0,
    reviewCount: 38,
};

/** 
 * Restituisce le recensioni specifiche per un dato prodotto.
 * Se un prodotto ha meno di 3 recensioni specifiche, aggiunge alcune 
 * recensioni generali per evitare che la sezione sembri vuota.
 */
export function getProductReviews(productId: number): GoogleReview[] {
    const specific = productReviewMap[productId] || [];
    if (specific.length >= 3) return specific;

    // Riempiamo con recensioni generali fino ad averne almeno 3
    const needed = 3 - specific.length;
    return [...specific, ...generalReviews.slice(0, needed)];
}
