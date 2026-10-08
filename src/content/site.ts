/**
 * Dati reali dell'attività. Unica fonte: ogni pagina legge da qui.
 * I campi a `null` mancano ancora da Domenico e non vengono mostrati finché restano vuoti.
 */
export const site = {
  brand: "Domcast",
  coach: "Domenico Castaldo",
  url: "https://domcast.it",
  email: "info@domcast.it",
  whatsapp: "393924683142",
  phoneDisplay: "+39 392 468 3142",
  address: {
    street: "Via Massimo Stanzione, 4",
    postalCode: "80027",
    city: "Frattamaggiore",
    province: "NA",
    country: "IT",
  },
  mapsUrl: "https://maps.app.goo.gl/5Hx7iDc31yjmsKGd6",
  /** Nome, scheda e posizione del profilo Google Maps: nei dati strutturati devono coincidere con il profilo. */
  googleBusinessName: "Domcast Studio Personal Training",
  mapsCidUrl: "https://www.google.com/maps?cid=18400543232117769871",
  geo: { latitude: 40.9417192, longitude: 14.2778041 },
  /** Comuni vicini allo studio, nella zona di Napoli Nord. */
  nearbyTowns: ["Grumo Nevano", "Frattaminore", "Cardito", "Crispano", "Arzano", "Casandrino"],
  instagram: { handle: "domcast.coach", url: "https://www.instagram.com/domcast.coach/" },
  facebook: { handle: "domcastfit", url: "https://www.facebook.com/domcastfit/" },
  /** Profilo Google Maps "Domcast Studio Personal Training": verificato il 7 ottobre 2026 (aggiornare a mano). */
  google: { rating: 5, reviewCount: 39 },
  yearsExperience: 13,
  peopleTrained: 500,
  /** Da Domenico: obbligatoria sul sito di un'attività con partita IVA. */
  vatNumber: null as string | null,
  /** Dal profilo Google Maps, verificato il 7 ottobre 2026. */
  openingHours: "Lun–Ven 9–21 · Sab e Dom chiuso" as string | null,
  openingHoursSpec: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "21:00" },
} as const;

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;
