import type { World } from "@/components/world/WorldSwitch";

export type NavItem = { label: string; href: string };

export const navByWorld: Record<World, NavItem[]> = {
  training: [
    { label: "Coaching online", href: "/coaching" },
    { label: "Schede", href: "/shop" },
    { label: "Chi sono", href: "/qualifiche" },
    { label: "Contatti", href: "/contact" },
  ],
  pilates: [
    { label: "Il reformer", href: "/pilates#reformer" },
    { label: "Le lezioni", href: "/pilates#lezione" },
    { label: "Domande", href: "/pilates#domande" },
    { label: "Dove siamo", href: "/pilates#dove" },
  ],
};
