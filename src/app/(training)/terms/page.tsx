import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";

export const metadata: Metadata = {
  title: "Termini e condizioni",
  description: "Condizioni generali dei servizi di coaching online e delle schede di allenamento Domcast, con disclaimer medico.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termini e condizioni" updated="ottobre 2026">
                    <p>
                        Condizioni generali di fornitura dei patti di consulenza e Online Coaching. Leggere attentamente prima di procedere all’acquisto.
                    </p>

                    <p>
                        Le presenti Condizioni Generali di Servizio (di seguito, “TOS”) regolano l’acquisto e la fruizione dei servizi asincroni di Online Coaching, consulenze e programmazione di allenamento erogati da Domenico Castaldo (di seguito, “il Titolare” o “Domcast”).
                    </p>

                    <h2>ART. 1 - Disclaimer Medico e Limitazione di Responsabilità </h2>
                        <p>
                            I servizi di consulenza fitness, le schede di allenamento e i video tecnici forniti dal Titolare <strong>NON hanno alcuna finalità terapeutica, riabilitativa o diagnostica in campo medico.</strong>
                        </p>
                        <p>
                            Con la compilazione del questionario conoscitivo e/o il pagamento per l’acquisto del servizio, <strong>l’Utente dichiara, sotto la propria esclusiva responsabilità civile e penale:</strong>
                        </p>
                        <ul>
                            <li>Di essere in perfetto stato di salute.</li>
                            <li>Di essere in possesso di un certificato medico sportivo non agonistico in corso di validità attestante l’idoneità alla pratica sportiva intensa.</li>
                            <li>Di non avere patologie o condizioni mediche non chiaramente specificate ed evidenziate in via preventiva.</li>
                        </ul>
                        <p>
                            L’Utente svolge l’allenamento in autonomia e in ambienti esterni al Titolare (palestre terze, abitazioni). Pertanto, <strong>l’esecuzione tecnica e fisica degli esercizi è a totale e insindacabile rischio dell’Utente.</strong> Il Titolare (Domenico Castaldo) è integralmente ed irrevocabilmente sollevato ed esonerato da qualsivoglia responsabilità per danni a cose o persone, infortuni, malori, lesioni temporanee o permanenti, ovvero spese di natura medica, imputabili direttamente o indirettamente all’esecuzione dei programmi forniti. Nessuna revisione video o “check” effettuata a distanza presuppone una supervisione diretta esecutiva tutelabile.
                        </p>

                    <h2>ART. 2 - Oggetto del Contratto</h2>
                    <p>
                        Il servizio venduto consiste unicamente nella prestazione di una consulenza intellettuale di programmazione per l’allenamento (schede PDF, Excel, Video, indicazioni macro, check asincroni via WhatsApp o Email).
                    </p>

                    <h2>ART. 3 - Assenza di Garanzia di Risultati</h2>
                    <p>
                        Il benessere fisico, il dimagrimento, l’ipertrofia e ogni altro risultato estetico o fisiologico dipendono da innumerevoli fattori soggettivi (genetica, aderenza totale ai protocolli sportivi e nutrizionali, recupero, ecc).
                        Pertanto, il Titolare fornisce mezzi e strumenti elaborati con la massima diligenza e professionalità basata su evidenze scientifiche, tuttavia, <strong>non garantisce né assume obblighi di risultato</strong> (obbligazione di mezzi).
                    </p>

                    <h2>ART. 4 - Esclusione del Diritto di Recesso </h2>
                    <p>
                        L’Utente, nella sua qualità di Consumatore, è edotto del fatto che i servizi acquistati rientrano nelle eccezioni al diritto di recesso, sancite dall’<strong>art. 59 lettera a), o) ed m) del D. Lgs 206/2005 (Codice del Consumo).</strong>
                    </p>
                    <p>
                        Nello specifico, trovandosi in presenza di una prestazione d’opera personalizzata (la scheda di allenamento è un bene “confezionato su misura e chiaramente personalizzato”) ed essendo qualificabile anche come fornitura di “contenuto digitale mediante supporto non materiale”, <strong>l’Utente accetta espressamente di perdere il diritto di recesso di 14 giorni non appena il Titolare inizia l’esecuzione del servizio</strong> (es. al ricevimento del bonifico e contestuale ricezione del questionario completato su cui il Titolare comincia a elaborare intellettualmente il piano, oppure al momento dell’invio del primo contenuto PDF/Digitale). Di conseguenza, <strong>nessun rimborso, né parziale né totale, sarà erogato in caso di interruzione volontaria del percorso (abbandono, “ripensamento”, “mancanza di tempo”) da parte dell’Utente.</strong>
                    </p>

                    <h2>ART. 5 - Proprietà Intellettuale e Divieto di Cessione ed Uso Terzi</h2>
                    <p>
                        L’Utente riconosce che il “Metodo” Domcast e l’intero contenuto digitalmente fornito (programmazione, PDF, file Excel, guide video inviate) sono protetti da copyright e proprietà intellettuale riservata a Domenico Castaldo.
                    </p>
                    <p>
                        Il contratto è strettamente <strong>intuitu personae</strong>. L’Utente si impegna a utilizzare il materiale esclusivamente a uso personale e privato. <strong>È severamente vietata e perseguibile legalmente</strong> qualsivoglia forma di diffusione (pubblicazione online, caricamento su cloud pubblici) o cessione a terzi, a titolo gratuito od oneroso. In caso di violazione, il contratto si intenderà automaticamente risolto trattenendo i corrispettivi pagati e procedendo legalmente per danni, lucro cessante e concorrenza sleale.
                    </p>

                    <h2>ART. 6 - Piattaforme di Comunicazione</h2>
                    <p>
                        L’Utente accetta esplicitamente di comunicare, scambiare file e dati personali (incluse ma non limitate a: foto progressi fisici in biancheria) mediante l’uso di piattaforme di terze parti specificamente concordate, ad esempio “WhatsApp”. L’Utente dichiara di averne letto e accettato i rispettivi Termini d’Uso e Privacy Policy (ad es. Meta Platforms, LLC) assumendosi le correlate esenzioni su potenziali instabilità della sicurezza derivanti dall’integrità limitata dal provider stesso.
                    </p>

                    <h2>ART. 7 - Sospensione e Pausa dei Servizi</h2>
                    <p>
                        Nel caso in cui vi siano ostacoli oggettivamente impedienti alla fruizione del servizio (es. infortuni prolungati diagnosticati), e <strong>solo se tempestivamente comunicati prima dell’invio di eventuali blocchi (schede) per i mesi successivi</strong>, i servizi (gli abbonamenti a lungo termine) possono subire un unico congelamento (“freeze”) per un massimo di mesi 1 (uno), a insindacabile parere ed approvazione del Titolare, previa esibizione di documentazione di effettivo blocco oggettivo, oltre il quale si intenderanno consumati.
                    </p>

                    <h2>ART. 8 - Foro Competente Esclusivo</h2>
                    <p>
                        Per qualsivoglia controversia nascente dal presente contratto, dall’interpretazione e/o dall’esecuzione dello stesso che dovesse sorgere tra Titolare e Utente non qualificabile come consumatore, il <strong>Foro competente esclusivo sarà quello del luogo in cui ha sede il Titolare</strong>. Nel caso in cui l’Utente sia effettivamente coperto da tutele consumeristiche esplicite ed insuperabili in deroga preventiva, foro competente sarà quello di residenza del consumatore, fermo restando l’obbligo del tentativo di mediazione stragiudiziale conciliativa come per legge.
                    </p>

                    <p>
                        Il presente accordo si ritiene implicitamente e validamente concluso con la compilazione dell’istanza conoscitiva e il successivo invio del primo saldo della prestazione su coordinate fornite dal Titolare (bonifico/fattura), ai sensi delle norme del Codice Civile italiano sui contratti.
                    </p>
    </LegalPage>
  );
}
