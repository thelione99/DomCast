import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Domcast Personal Trainer",
    description: "Informativa sulla Privacy e trattamento dei dati personali di Domcast Training.",
    robots: {
        index: false,
        follow: true,
    }
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-24 md:py-32">
            <div className="container max-w-4xl px-4 mx-auto">
                <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 font-medium">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Torna alla Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-anton)] text-white mb-12 uppercase tracking-wide">
                    Privacy Policy
                </h1>

                <article className="prose prose-invert prose-orange max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-400 mb-8 border-l-4 border-primary pl-4">
                        Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR).
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">1. Titolare del Trattamento</h2>
                    <p>
                        Domenico Castaldo<br />
                        Via Massimo Stanzione, 4 - 80027 Frattamaggiore (NA)<br />
                        P.IVA: [INSERIRE PARTITA IVA EVENTUALE]<br />
                        Email di contatto: <a href="mailto:info@domcast.it" className="text-primary hover:underline">info@domcast.it</a>
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">2. Tipologia dei Dati Raccolti e Modalità di Raccolta</h2>
                    <p>
                        Il Sito raccoglie i seguenti Dati Personali dell'Utente:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Dati di navigazione e statistici:</strong> Dati di utilizzo (indirizzi IP anonimizzati, tipo di browser, orario di visita) raccolti tramite Google Analytics 4.</li>
                        <li><strong>Dati forniti volontariamente dall'Utente:</strong> Dati anagrafici (Nome, Cognome, Età), dati fisici (Altezza, Peso), abitudini di vita e dati relativi allo stato di salute (Patologie, Infortuni, Farmaci assumibili).</li>
                    </ul>
                    <p className="text-orange-200/80 bg-orange-950/30 p-4 rounded-lg border border-orange-500/20">
                        <strong>Nota Importante sui Dati Sanitari (Art. 9 GDPR):</strong> Il Sito <strong>non</strong> conserva i dati immessi nel questionario di candidatura all'interno del proprio database o hosting.
                        La compilazione del questionario genera un messaggio pre-compilato che l'Utente invia volontariamente in modo diretto al dispositivo del Titolare tramite l'applicazione <strong>WhatsApp</strong>.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">3. Finalità del Trattamento e Base Giuridica</h2>
                    <p>I Dati dell'Utente sono raccolti e trattati per le seguenti finalità:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Erogazione dei Servizi di Coaching:</strong> Valutazione della candidatura, formulazione dei programmi di allenamento personalizzati e monitoraggio (Base giuridica: <em>Esecuzione del contratto</em> - Art. 6, lett. b, GDPR).</li>
                        <li><strong>Trattamento dei dati particolari (salute):</strong> Adeguamento del piano di allenamento alle specifiche fisiche indicate dall'Utente. (Base giuridica: <em>Consenso Esplicito</em> - Art. 9, comma 2, lett. a, GDPR. L'invio spontaneo del messaggio tramite WhatsApp costituisce espressione inequivocabile del consenso per tale specifica finalità).</li>
                        <li><strong>Sicurezza e Statistica:</strong> Monitoraggio del corretto funzionamento del sito e analisi aggregata del traffico (Base giuridica: <em>Legittimo interesse</em> del Titolare - Art. 6 lett. f GDPR).</li>
                        <li><strong>Difesa in giudizio:</strong> Necessità di tutela dei diritti del Titolare in caso di abusi o violazioni contrattuali da parte dell'Utente (Base giuridica: <em>Legittimo interesse</em>).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">4. Luogo del Trattamento e Trasferimento Extra-UE</h2>
                    <p>
                        I trattamenti connessi vengono curati direttamente ed esclusivamente dal Titolare tramite i propri dispositivi informatici (es. smartphone e PC protetti da password).
                    </p>
                    <p>
                        Data l'infrastruttura di comunicazione scelta dall'Utente per la fruizione del servizio (WhatsApp, gestito da Meta Platforms Ireland Limited), si informa che potrebbe avvenire un trasferimento di Dati verso paesi extra-europei (es. USA). Tale trasferimento è garantito dalle Clausole Contrattuali Tipo (SCC) stipulate dal fornitore del servizio di messaggistica, ai sensi del Capitolo V del GDPR.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">5. Periodo di Conservazione dei Dati</h2>
                    <p>
                        I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti. Nello specifico:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>In caso di <strong>mancata attivazione</strong> del servizio di coaching in seguito alla candidatura, i dati (la chat WhatsApp) verranno eliminati entro 60 giorni.</li>
                        <li>In caso di <strong>inizio del percorso</strong> (Esecuzione del Contratto), i dati necessari (anagrafici, check fisici, programmazione) saranno conservati per tutta la durata del rapporto contrattuale e, successivamente, per 10 anni dalla cessazione del rapporto per ottemperare a obblighi civilistico-fiscali e per eventuale difesa in giudizio del Titolare (Art. 2946 C.c.).</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">6. Diritti dell'Utente (Art. 15-22 GDPR)</h2>
                    <p>
                        L'Utente, rivolgendosi al Titolare via email all'indirizzo <a href="mailto:info@domcast.it" className="text-primary hover:underline">info@domcast.it</a>, ha diritto di ottenere in qualsiasi momento:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>La conferma dell'esistenza o meno di Dati Personali che lo riguardano e l'accesso agli stessi (Diritto di accesso).</li>
                        <li>L'aggiornamento, la rettifica o l'integrazione dei dati (Diritto di rettifica).</li>
                        <li>La cancellazione dei dati (Diritto all'oblio), la trasformazione in forma anonima o il blocco dei dati trattati in violazione di legge, nei limiti concessi dalla normativa vigente.</li>
                        <li>La limitazione del trattamento o l'opposizione per motivi legittimi.</li>
                        <li>La portabilità dei dati in un formato strutturato e leggibile da dispositivo automatico.</li>
                    </ul>
                    <p>
                        L'Utente ha inoltre il diritto di proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>) qualora ritenga che il trattamento violi il Regolamento.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">7. Servizi di Terze Parti Impiegati</h2>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li><strong>Google Analytics 4:</strong> Servizio di analisi web fornito da Google Ireland Limited. Utilizzato per analizzare il traffico del sito. <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy Google</a>.</li>
                        <li><strong>Recensioni Google:</strong> Il sito integra la visualizzazione pubblica di recensioni rilasciate dagli utenti sulla piattaforma Google Maps. Tali dati sono già pubblici per esplicita azione dell'utente sulla piattaforma di origine.</li>
                        <li><strong>WhatsApp / Meta:</strong> Piattaforma principale per lo scambio del contratto, del questionario, delle schede PDF/Video e dei check fotografici. <a href="https://www.whatsapp.com/legal/privacy-policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy WhatsApp</a>.</li>
                    </ul>

                    <p className="mt-12 text-sm text-gray-500 italic border-t border-white/10 pt-4">
                        Ultimo aggiornamento: Marzo 2026. Il Titolare si riserva il diritto di apportare modifiche alla presente Privacy Policy in qualunque momento dandone pubblicità agli Utenti su questa pagina.
                    </p>
                </article>
            </div>
        </div>
    );
}
