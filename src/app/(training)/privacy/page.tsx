import type { Metadata } from "next";
import { site, fullAddress } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Privacy e cookie",
  description: "Informativa sul trattamento dei dati personali e sui cookie del sito Domcast.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy e cookie" updated="ottobre 2026">
      <p>
        Informativa sul trattamento dei dati personali ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679
        (GDPR).
      </p>

      <h2>1. Titolare del trattamento</h2>
      <p>
        {site.coach}
        <br />
        {fullAddress}
        <br />
        {site.vatNumber && (
          <>
            P.IVA {site.vatNumber}
            <br />
          </>
        )}
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>

      <h2>2. Quali dati raccogliamo</h2>
      <ul>
        <li>
          <strong>Dati tecnici di navigazione:</strong> l&apos;hosting del sito (Vercel) registra dati tecnici come
          indirizzo IP e tipo di browser, necessari al funzionamento e alla sicurezza del sito.
        </li>
        <li>
          <strong>Dati statistici:</strong> solo se lo accetti dal banner cookie, Google Analytics 4 raccoglie dati
          aggregati sull&apos;utilizzo del sito (pagine visitate, durata della visita, tipo di dispositivo).
        </li>
        <li>
          <strong>Dati che ci invii tu:</strong> compilando il questionario per il coaching online inserisci dati
          anagrafici (nome, età), fisici (altezza, peso), abitudini di vita e dati relativi alla salute (patologie,
          infortuni, farmaci).
        </li>
      </ul>
      <p>
        <strong>Dati sulla salute (art. 9 GDPR).</strong> Il sito <strong>non</strong> salva le risposte del questionario
        in alcun database. Alla fine della compilazione viene preparato un messaggio WhatsApp che puoi rileggere e
        decidere di inviare direttamente al Titolare. Prima dell&apos;invio ti chiediamo un consenso esplicito.
      </p>

      <h2>3. Perché li trattiamo e su quale base</h2>
      <ul>
        <li>
          <strong>Valutare la candidatura ed erogare il coaching:</strong> esecuzione di misure precontrattuali e del
          contratto (art. 6.1.b GDPR).
        </li>
        <li>
          <strong>Adattare l&apos;allenamento al tuo stato di salute:</strong> consenso esplicito (art. 9.2.a GDPR),
          espresso con l&apos;apposita casella del questionario e con l&apos;invio del messaggio.
        </li>
        <li>
          <strong>Statistiche di utilizzo del sito:</strong> consenso (art. 6.1.a GDPR), espresso dal banner cookie e
          revocabile in qualsiasi momento.
        </li>
        <li>
          <strong>Sicurezza del sito e difesa in giudizio:</strong> legittimo interesse del Titolare (art. 6.1.f GDPR).
        </li>
      </ul>

      <h2 id="cookie">4. Cookie e strumenti simili</h2>
      <p>Il sito usa due tipi di strumenti:</p>
      <ul>
        <li>
          <strong>Tecnici:</strong> la tua scelta sul banner cookie viene salvata nel browser (localStorage,
          chiave <code>domcast-consent-v1</code>) per non riproportelo a ogni visita. Non richiede consenso.
        </li>
        <li>
          <strong>Statistici (Google Analytics 4, Google Ireland Limited):</strong> cookie <code>_ga</code> e{" "}
          <code>_ga_*</code>, attivati <strong>solo dopo il tuo consenso</strong>. Senza consenso Google Analytics non
          viene nemmeno caricato.
        </li>
      </ul>
      <p>
        Puoi cambiare idea quando vuoi: <CookiePreferencesButton />. Se revochi il consenso, i cookie di Google
        Analytics vengono eliminati.
      </p>

      <h2>5. Dove vengono trattati i dati</h2>
      <p>
        I dati sono trattati dal Titolare con i propri dispositivi (smartphone e computer protetti da password). Alcuni
        fornitori (WhatsApp/Meta, Google, Vercel) possono trasferire dati fuori dall&apos;Unione Europea, sulla base
        delle garanzie previste dal Capo V del GDPR (decisioni di adeguatezza o clausole contrattuali standard).
      </p>

      <h2>6. Per quanto tempo</h2>
      <ul>
        <li>
          Se dopo la candidatura il percorso <strong>non inizia</strong>, la chat con le risposte del questionario viene
          eliminata entro 60 giorni.
        </li>
        <li>
          Se il percorso <strong>inizia</strong>, i dati necessari sono conservati per tutta la durata del rapporto e,
          dopo, per 10 anni per obblighi civilistici e fiscali e per l&apos;eventuale difesa in giudizio (art. 2946
          c.c.).
        </li>
        <li>I dati statistici di Google Analytics sono conservati al massimo per 14 mesi.</li>
      </ul>

      <h2>7. I tuoi diritti</h2>
      <p>
        Scrivendo a <a href={`mailto:${site.email}`}>{site.email}</a> puoi chiedere in qualsiasi momento di accedere ai
        tuoi dati, rettificarli, cancellarli, limitarne il trattamento, opporti, riceverli in un formato portabile e
        revocare il consenso, senza che questo pregiudichi il trattamento fatto prima della revoca. Puoi anche proporre
        reclamo al Garante per la protezione dei dati personali (
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
          garanteprivacy.it
        </a>
        ).
      </p>

      <h2>8. Servizi di terze parti</h2>
      <ul>
        <li>
          <strong>WhatsApp (Meta Platforms Ireland Limited):</strong> canale per questionario, comunicazioni e invio dei
          programmi.{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer">
            Informativa WhatsApp
          </a>
          .
        </li>
        <li>
          <strong>Google Analytics 4 (Google Ireland Limited):</strong> statistiche, solo con consenso.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Informativa Google
          </a>
          .
        </li>
        <li>
          <strong>Vercel Inc.:</strong> hosting del sito.{" "}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Informativa Vercel
          </a>
          .
        </li>
        <li>
          <strong>Recensioni Google:</strong> il sito riporta recensioni pubblicate dagli utenti sul profilo Google di
          Domcast, già pubbliche per scelta dei loro autori.
        </li>
      </ul>
    </LegalPage>
  );
}
