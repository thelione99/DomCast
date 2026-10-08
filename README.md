# Domcast · domcast.it

Sito di Domenico Castaldo, personal trainer a Frattamaggiore: training in studio, coaching online e Pilates Reformer.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · hosting su Vercel.

## Avvio in locale

```bash
npm install
npm run dev
```

Il sito gira su http://localhost:3000. Prima di pubblicare: `npm run lint`, `npx tsc --noEmit` e `npm run build`.

> Il progetto vive su un disco exFAT: macOS crea file `._*` accanto a ogni file. Sono ignorati da git, ESLint e TypeScript. In sviluppo (`next.config.ts`) l'ottimizzazione immagini e la cache su disco di Turbopack sono disattivate per lo stesso motivo; in produzione su Vercel funzionano normalmente.

## Due mondi

Il sito ha due "mondi" con la stessa struttura e token diversi:

| | Training (`/`) | Pilates (`/pilates`) |
|---|---|---|
| Sfondo / testo | nero caldo / avorio | rosa peonia / prugna |
| Accento | arancio di brand | prugna, molle colorate |
| Titoli | Archivo largo (125%) e pesante, maiuscolo | Archivo stretto (68%) e leggero |

- I colori stanno in `src/app/globals.css` sotto `[data-world="training"]` e `[data-world="pilates"]`. I componenti usano solo i token (`bg-bg`, `text-ink`, `text-muted`, `bg-accent`…), mai colori fissi.
- Il mondo dipende dalla cartella: `src/app/(training)/…` e `src/app/(pilates)/pilates/…`.
- L'interruttore Training · Pilates (`src/components/world/`) cambia pagina con una View Transition: il colore del nuovo mondo si allarga a cerchio dal punto del click.
- Il font è Archivo variabile, servito dal progetto (`src/fonts/`), usato sull'asse della larghezza.

## Dove si cambiano i contenuti

Tutti i dati stanno in `src/content/`, così non serve toccare i componenti:

| File | Cosa contiene |
|---|---|
| `site.ts` | indirizzo, WhatsApp, email, social, rating Google, anni di esperienza, **P.IVA e orari** |
| `offer.ts` | prezzi del coaching, piano scheda, personal training, le 4 schede dello shop |
| `reviews.ts` | recensioni Google (parola per parola) |
| `coach.ts` | qualifiche e FAQ del training |
| `pilates.ts` | testi Pilates, FAQ, **formati e pacchetti** (vuoti = sezione nascosta) |

## Da confermare con Domenico prima di pubblicare

**Dati mancanti** (oggi non compaiono sul sito):
- [ ] **Partita IVA**, obbligatoria sul sito di un'attività: `site.vatNumber`.
- [ ] Orari dello studio: presi dal profilo Google Maps il 7 ottobre 2026 (lun–ven 9–21, sab e dom chiuso), da confermare. Sono in `site.openingHours`.
- [ ] Pilates: formati (individuale/duo…), durata, pacchetti e prezzi: `pilates.formats` / `pilates.packages`.

**Foto:**
- [ ] Il reformer, Domenico che fa lezione di Pilates e lo studio in orizzontale.
- [ ] Le clip in `DomCast/video` e `DomCast/Black`, se sono dello studio, si possono usare per un video in apertura.

**Affermazioni da verificare:**
- [ ] "Più di 500 persone allenate", "13 anni".
- [ ] Rating Google: 5,0 su 39 recensioni al 7 ottobre 2026; aggiornare `site.google` ogni tanto.
- [ ] Coaching: "Supporto su WhatsApp, risposta entro 24 ore".
- [ ] Schede: "blocco di 4 settimane", "video di esecuzione", "supporto via email", e cosa contiene ognuna delle 4 schede.
- [ ] Personal training in studio: "sessioni da 60 minuti", "lista d'attesa".
- [ ] Pilates: "calze antiscivolo", descrizione dei tre momenti della lezione.
- [ ] La frase della bio "Non è mai troppo tardi…" (dal vecchio sito): resta senza attribuzione, va bene così?

**Rimossi perché non verificabili:** "App per tracciare i progressi" e "Accesso alla community privata". Se esistono, si rimettono in `offer.ts`.

**Testi legali:** privacy e termini sono stati aggiornati (consenso cookie, dati sanitari, segnaposti rimossi). Conviene comunque farli rivedere da un consulente.

## Pubblicazione

Il repository è `thelione99/DomCast`. Vercel pubblica `main` su domcast.it.

1. Lavora su un branch (es. `redesign-2026`) e apri una pull request.
2. Vercel crea un'anteprima: controllala con Domenico.
3. Unisci su `main` per andare online.

I vecchi indirizzi vengono reindirizzati (`/shop/1` → `/shop/definizione-4-settimane`, `/transformations` → `/#risultati`, `/login` → `/`).

## Design

Il redesign segue la skill **impeccable** (`.claude/skills/impeccable/`, licenza Apache 2.0). La verità di prodotto per i lavori futuri è in `PRODUCT.md`.
