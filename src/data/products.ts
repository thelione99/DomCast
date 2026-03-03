export interface ProductReview {
    author: string;
    rating: number;
    body: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    alt: string;
    description: string;
    reviews: ProductReview[];
    aggregateRating: number;
    ratingCount: number;
    priceValidUntil: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Definizione 4 Settimane",
        price: 49.99,
        category: "Dimagrimento",
        image: "/products/allenamento-definizione.png",
        alt: "Programma allenamento definizione muscolare Domcast - scheda 4 settimane per dimagrimento e tonificazione",
        description: "Programma intensivo di 4 settimane per massimizzare la definizione muscolare e ridurre la massa grassa.",
        reviews: [
            { author: "Marco R.", rating: 5, body: "Risultati incredibili in sole 4 settimane. Programma ben strutturato e facile da seguire." },
            { author: "Andrea P.", rating: 5, body: "Ho perso 4kg di grasso mantenendo la massa muscolare. Consigliatissimo!" },
            { author: "Luca M.", rating: 4, body: "Ottimo programma di definizione, esercizi spiegati bene con i video." },
        ],
        aggregateRating: 4.7,
        ratingCount: 3,
        priceValidUntil: "2026-12-31",
    },
    {
        id: 2,
        name: "Allenamento Forza",
        price: 49.99,
        category: "Forza",
        image: "/products/allenamento-forza.png",
        alt: "Programma allenamento forza Domcast - scheda per aumentare forza massimale con bilanciere e pesi liberi",
        description: "Programma strutturato per lo sviluppo della forza massimale con progressioni settimanali su alzate fondamentali.",
        reviews: [
            { author: "Davide S.", rating: 5, body: "Ho aumentato il mio massimale di squat di 20kg in 8 settimane. Programmazione eccellente." },
            { author: "Fabio T.", rating: 5, body: "Finalmente un programma serio per la forza. Progressione lineare perfetta." },
            { author: "Giuseppe L.", rating: 4, body: "Ottimo per chi vuole diventare più forte. Supporto via email impeccabile." },
        ],
        aggregateRating: 4.7,
        ratingCount: 3,
        priceValidUntil: "2026-12-31",
    },
    {
        id: 3,
        name: "Costruzione Glutei",
        price: 59.99,
        category: "Specializzato",
        image: "/products/costruzione-glutei.png",
        alt: "Programma costruzione glutei Domcast - scheda specializzata per ipertrofia e sviluppo glutei",
        description: "Programma specifico focalizzato sull'ipertrofia e lo sviluppo dei glutei con tecniche avanzate.",
        reviews: [
            { author: "Sara B.", rating: 5, body: "Il miglior programma glutei che abbia mai provato. Risultati visibili già dalla terza settimana!" },
            { author: "Giulia F.", rating: 5, body: "Esercizi mirati e ben spiegati. I miei glutei sono completamente trasformati." },
            { author: "Valentina C.", rating: 4, body: "Programma impegnativo ma i risultati parlano da soli. Super consigliato." },
        ],
        aggregateRating: 4.7,
        ratingCount: 3,
        priceValidUntil: "2026-12-31",
    },
    {
        id: 4,
        name: "Guida Allenamento a Casa",
        price: 49.99,
        category: "Home Fitness",
        image: "/products/allenamento-a-casa.png",
        alt: "Guida allenamento a casa Domcast - programma fitness domestico senza attrezzi costosi",
        description: "Allenati ovunque con questa guida completa per il fitness a casa, senza bisogno di attrezzatura costosa.",
        reviews: [
            { author: "Elena D.", rating: 5, body: "Perfetta per chi non ha tempo di andare in palestra. Risultati sorprendenti anche a casa!" },
            { author: "Chiara G.", rating: 4, body: "Esercizi ben spiegati e adattabili al livello di ciascuno. Molto soddisfatta." },
            { author: "Roberto N.", rating: 5, body: "Non pensavo di poter ottenere così tanto allenandomi a casa. Programma eccellente." },
        ],
        aggregateRating: 4.7,
        ratingCount: 3,
        priceValidUntil: "2026-12-31",
    },
];

export function getProductById(id: number | string): Product | undefined {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    return products.find(p => p.id === numericId);
}
