import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-[#1a140e] py-12 md:py-16 text-gray-400">
            <div className="container flex flex-col items-center justify-between gap-10 md:gap-6 md:flex-row max-w-screen-xl px-4 mx-auto">
                <div className="flex flex-col items-center gap-4 md:items-start text-center md:text-left">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-40 h-10 transition-transform group-hover:scale-105">
                            <Image
                                src="/Logo_Domcast-3.png"
                                alt="Domcast Training — Torna alla homepage"
                                fill
                                sizes="160px"
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>
                    <p className="text-sm leading-relaxed max-w-xs mt-2">
                        Trasforma il tuo corpo, sblocca il tuo potenziale. Allenamento d&apos;élite per risultati reali.
                    </p>
                </div>

                <nav aria-label="Social media">
                    <div className="flex gap-6">
                        <Link href="https://www.instagram.com/domcast.coach/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://www.facebook.com/domcastfit/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Facebook className="h-6 w-6" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="mailto:info@domcast.it" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </Link>
                        <Link href="https://maps.google.com/?q=Via+Massimo+Stanzione,+4,+80027,+Frattamaggiore,+NA,+Italia" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full">
                            <MapPin className="h-6 w-6" />
                            <span className="sr-only">Posizione</span>
                        </Link>
                    </div>
                </nav>
            </div>

            <div className="container mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 max-w-screen-xl px-4 mx-auto gap-4">
                <p>&copy; {new Date().getFullYear()} Domcast Training. Tutti i diritti riservati. <span className="opacity-50 ml-2 text-[10px]">Ultimo aggiornamento: {new Date().toLocaleString('it-IT', { month: 'long', year: 'numeric' })}</span></p>
                <nav aria-label="Link legali">
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Termini di Servizio</Link>
                    </div>
                </nav>
            </div>
        </footer>
    );
}
