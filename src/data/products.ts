import { aggregateGoogleRating } from "@/data/google-reviews";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    alt: string;
    description: string;
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
        aggregateRating: aggregateGoogleRating.ratingValue,
        ratingCount: aggregateGoogleRating.reviewCount,
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
        aggregateRating: aggregateGoogleRating.ratingValue,
        ratingCount: aggregateGoogleRating.reviewCount,
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
        aggregateRating: aggregateGoogleRating.ratingValue,
        ratingCount: aggregateGoogleRating.reviewCount,
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
        aggregateRating: aggregateGoogleRating.ratingValue,
        ratingCount: aggregateGoogleRating.reviewCount,
        priceValidUntil: "2026-12-31",
    },
];

export function getProductById(id: number | string): Product | undefined {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    return products.find(p => p.id === numericId);
}

