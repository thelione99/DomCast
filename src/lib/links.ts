import { site } from "@/content/site";

/** Link wa.me con messaggio precompilato. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const messages = {
  consultation: "Ciao Domenico, vorrei prenotare una consulenza.",
  waitlist: "Ciao Domenico, vorrei entrare in lista d'attesa per il personal training in studio.",
  pilates: "Ciao Domenico, vorrei informazioni sul Pilates Reformer: orari e pacchetti.",
  general: "Ciao Domenico, ",
  program: (name: string) => `Ciao Domenico, mi interessa la scheda "${name}".`,
};
