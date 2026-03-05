import Link from "next/link";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Termini e Condizioni di Servizio | Domcast Personal Trainer",
    description: "Termini legali, condizioni di vendita e disclaimer medico per i servizi di Domcast Training.",
    robots: {
        index: false,
        follow: true,
    }
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background text-foreground py-24 md:py-32">
            <div className="container max-w-4xl px-4 mx-auto">
                <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8 font-medium">
                    <ChevronLeft className="w-5 h-5 mr-1" />
                    Torna alla Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-anton)] text-white mb-12 uppercase tracking-wide">
                    Termini e Condizioni di Servizio
                </h1>

                <article className="prose prose-invert prose-orange max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-400 mb-8 border-l-4 border-primary pl-4">
                        Condizioni generali di fornitura dei patti di consulenza e Online Coaching. Leggere attentamente prima di procedere all'acquisto.
                    </p>

                    <p>
                        Le presenti Condizioni Generali di Servizio (di seguito, "TOS") regolano l'acquisto e la fruizione dei servizi asincroni di Online Coaching, consulenze e programmazione di allenamento erogati da Domenico Castaldo (di seguito, "il Titolare" o "Domcast").
                    </p>

                    <div className="bg-red-950/40 border-l-4 border-red-500 p-6 my-10 rounded-r-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-6 h-6 text-red-500" />
                            <h2 className="text-xl font-bold text-white m-0">ART. 1 - Disclaimer Medico e Limitazione di Responsabilità (FONDAMENTALE)</h2>
                        </div>
                        <p className="text-red-100">
                            I servizi di consulenza fitness, le schede di allenamento e i video tecnici forniti dal Titolare <strong>NON hanno alcuna finalità terapeutica, riabilitativa o diagnostica in campo medico.</strong>
                        </p>
                        <p className="text-red-100">
                            Con la compilazione del questionario conoscitivo e/o il pagamento per l'acquisto del servizio, <strong>l'Utente dichiara, sotto la propria esclusiva responsabilità civile e penale:</strong>
                        </p>
                        <ul className="list-disc pl-6 text-red-200 mt-2">
                            <li>Di essere in perfetto stato di salute.</li>
                            <li>Di essere in possesso di un certificato medico sportivo non agonistico in corso di validità attestante l'idoneità alla pratica sportiva intensa.</li>
                            <li>Di non avere patologie o condizioni mediche non chiaramente specificate ed evidenziate in via preventiva.</li>
                        </ul>
                        <p className="text-red-100 pt-4">
                            L'Utente svolge l'allenamento in autonomia e in ambienti esterni al Titolare (palestre terze, abitazioni). Pertanto, <strong>l'esecuzione tecnica e fisica degli esercizi è a totale e insindacabile rischio dell'Utente.</strong> Il Titolare (Domenico Castaldo) è integralmente ed irrevocabilmente sollevato ed esonerato da qualsivoglia responsabilità per danni a cose o persone, infortuni, malori, lesioni temporanee o permanenti, ovvero spese di natura medica, imputabili direttamente o indirettamente all'esecuzione dei programmi forniti. Nessuna revisione video o "check" effettuata a distanza presuppone una supervisione diretta esecutiva tutelabile.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">ART. 2 - Oggetto del Contratto</h2>
                    <p>
                        Il servizio venduto consiste unicamente nella prestazione di una consulenza intellettuale di programmazione per l'allenamento (schede PDF, Excel, Video, indicazioni macro, check asincroni via WhatsApp o Email).
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">ART. 3 - Assenza di Garanzia di Risultati</h2>
                    <p>
                        Il benessere fisico, il dimagrimento, l'ipertrofia e ogni altro risultato estetico o fisiologico dipendono da innumerevoli fattori soggettivi (genetica, aderenza totale ai protocolli sportivi e nutrizionali, recupero, ecc).
                        Pertanto, il Titolare fornisce mezzi e strumenti elaborati con la massima diligenza e professionalità basata su evidenze scientifiche, tuttavia, <strong>non garantisce né assume obblighi di risultato</strong> (obbligazione di mezzi).
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">ART. 4 - Eclusione del Diritto di Recesso (Importante)</h2>
                    <p>
                        L'Utente, nella sua qualità di Consumatore, è edotto del fatto che i servizi acquistati rientrano nelle eccezioni al diritto di recesso, sancite dall'<strong>art. 59 lettera a), o) ed m) del D. Lgs 206/2005 (Codice del Consumo).</strong>
                    </p>
                    <p>
                        Nello specifico, trovandosi in presenza di una prestazione d'opera personalizzata (la scheda di allenamento è un bene "confezionato su misura e chiaramente personalizzato") ed essendo qualificabile anche come fornitura di "contenuto digitale mediante supporto non materiale", <strong>l'Utente accetta espressamente di perdere il diritto di recesso di 14 giorni non appena il Titolare inizia l'esecuzione del servizio</strong> (es. al ricevimento del bonifico e contestuale ricezione del questionario completato su cui il Titolare comincia a elaborare intellettualmente il piano, oppure al momento dell'invio del primo contenuto PDF/Digitale). Di conseguenza, <strong>nessun rimborso, né parziale né totale, sarà erogato in caso di interruzione volontaria del percorso (abbandono, "ripensamento", "mancanza di tempo") da parte dell'Utente.</strong>
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">ART. 5 - Proprietà Intellettuale e Divieto di Cessione ed Uso Terzi</h2>
                    <p>
                        L'Utente riconosce che il "Metodo" Domcast e l'intero contenuto digitalmente fornito (programmazione, PDF, file Excel, guide video inviate) sono protetti da copyright e proprietà intellettuale riservata a Domenico Castaldo.
                    </p>
                    <p>
                        Il contratto è strettamente <strong>intuitu personae</strong>. L'Utente si impegna a utilizzare il materiale esclusivamente a uso personale e privato. <strong>È severamente vietata e perseguibile legalmente</strong> qualsivoglia forma di diffusione (pubblicazione online, caricamento su cloud pubblici) o cessione a terzi, a titolo gratuito od oneroso. In caso di violazione, il contratto si intenderà automaticamente risolto trattenendo i corrispettivi pagati e procedendo legalmente per danni, lucro cessante e concorrenza sleale.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">ART. 6 - Piattaforme di Comunicazione</h2>
                    <p>
                        L'Utente accetta esplicitamente di comunicare, scambiare file e dati personali (incluse ma non limitate a: foto progressi fisici in biancheria) mediante l'uso di piattaforme di terze parti specificamente concordate, ad esempio "WhatsApp". L'Utente dichiara di averne letto e accettato i rispettivi Termini d'Uso e Privacy Policy (ad es. Meta Platforms, LLC) assumendosi le correlate esenzioni su potenziali instabilità della sicurezza derivanti dall'integrità limitata dal provider stesso.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">ART. 7 - Sospensione e Pausa dei Servizi</h2>
                    <p>
                        Nel caso in cui vi sian ostacoli oggettivamente impedienti alla fruizione del servizio (es. infortuni prolungati diagnosticati), e <strong>solo se tempestivamente comunicati prima dell'invio di eventuali blocchi (schede) per i mesi successivi</strong>, i servizi (gli abbonamenti a lungo termine) possono subire un unico congelamento ("freeze") per un massimo di mesi 1 (uno), a insindacabile parere ed approvazione del Titolare, previa esibizione di comprova documentazione di effettivo blocco oggettivo, oltre il quale si intenderanno consumati.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-4 border-b border-white/10 pb-2">ART. 8 - Foro Competente Esclusivo</h2>
                    <p>
                        Per qualsivoglia controversia nascente dal presente contratto, dall'interpretazione e/o dall'esecuzione dello stesso che dovesse sorgere tra Titolare e Utente non qualificabile come consumatore, il <strong>Foro Competente esclusivo sarà [INSERIRE FORO COMPETENTE]</strong> (Italia). Nel caso in cui l'Utente sia effettivamente coperto da tutele consumeristiche esplicite ed insuperabili in deroga preventiva, foro competente sarà quello di residenza del consumatore, fermo restando l'obbligo del tentativo di mediazione stragiudiziale concilitativa come per legge.
                    </p>

                    <p className="mt-12 text-sm text-gray-500 italic border-t border-white/10 pt-4">
                        Il presente accordo si ritiene implicitamente e validamente concluso con la compilazione dell'istanza conoscitiva e il successivo invio del primo saldo della prestazione su coordinate fornite dal Titolare (bonifico/fattura), ai sensi delle norme del Codice Civile italiano sui contratti.
                        Ultimo aggiornamento: Marzo 2026.
                    </p>
                </article>
            </div>
        </div>
    );
}
