export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Definizione 4 Settimane",
        price: 49.00,
        category: "Dimagrimento",
        image: "placeholder-1",
        description: "Programma intensivo di 4 settimane per massimizzare la definizione muscolare e ridurre la massa grassa."
    },
    {
        id: 3,
        name: "Costruzione Glutei",
        price: 59.00,
        category: "Specializzato",
        image: "placeholder-3",
        description: "Programma specifico focalizzato sull'ipertrofia e lo sviluppo dei glutei con tecniche avanzate."
    },
    {
        id: 4,
        name: "Guida Allenamento a Casa",
        price: 49.00,
        category: "Home Fitness",
        image: "placeholder-4",
        description: "Allenati ovunque con questa guida completa per il fitness a casa, senza bisogno di attrezzatura costosa."
    },
];

export function getProductById(id: number | string): Product | undefined {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    return products.find(p => p.id === numericId);
}
