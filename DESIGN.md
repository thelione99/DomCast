# Domcast — design system

Un brand, due corpi. Il **Training** è compressione e carico; il **Pilates** è allungamento e respiro. Una sola famiglia tipografica, usata sul suo asse della larghezza, li tiene insieme.

## Mondi e token

Tutti i colori passano dai token in `src/app/globals.css`. Il mondo si sceglie con `data-world` sul contenitore (`.world-root`, o una singola sezione come il ponte Pilates in home).

| Token | Training | Pilates | Uso |
|---|---|---|---|
| `--bg` | `#0f0d0b` nero caldo | `#f4c4cd` petalo | fondo pagina |
| `--surface` | `#171411` | `#f8d6dc` | fasce alternate |
| `--raised` | `#221e1a` | `#fbe6ea` | copertine, campi, riempimento del disegno |
| `--ink` | `#f3ede5` avorio | `#3b0d23` prugna | testo |
| `--muted` | `#aaa093` | `#6b3049` | testo secondario (AA su tutti i fondi) |
| `--line` / `--line-strong` | avorio 12% / 28% | prugna 16% / 34% | filetti, bordi |
| `--accent` / `--accent-ink` | arancio `#f48c25` / `#1c0f03` | prugna / petalo | azione primaria |
| `--spark` | arancio | lampone `#c4245a` | marcatori, numeri, focus |

**Regole sull'arancio:** azioni primarie, l'ultima riga di alcuni titoli, marcatori degli elenchi e numeri dei passaggi. Mai come fondo di sezione.

**Molle del reformer:** rosso `#c4245a`, ocra `#d9971f`, blu `#3f67ad`. Sono gli unici accenti cromatici del mondo Pilates.

## Tipografia

Archivo variabile (Fontsource, `font-stretch` 62–125%, peso 100–900).

| Ruolo | Training | Pilates |
|---|---|---|
| `.t-display` | 125% · 820 · maiuscolo · interlinea 0,94 | 68% · 300 · frase normale · interlinea 0,98 |
| `.t-title` | 118% · 760 · maiuscolo | 74% · 380 |
| `.t-section` | `clamp(2rem, 3.6vw, 3.25rem)` | `clamp(2.5rem, 6vw, 5rem)` |
| corpo | 100% · 400 · 17px · interlinea 1,6 | uguale |
| `.t-label` | 112% · 600 · 13px · maiuscolo | uguale |

- I titoli che non devono mai sforare usano `.fit-heading`: la dimensione nasce dalla parola più lunga (`--fit-chars`) e dalla quota di colonna su desktop (`--fit-span`). I contenitori sono query container (`.container-x`).
- Vietati: eyebrow sopra i titoli, testo in gradiente, emoji come icone, numerazione delle sezioni (salvo sequenze vere, come i passaggi di una lezione).

## Componenti

- **Bottoni a pillola**, che riprendono le barre arrotondate del logo DC: `.btn-primary`, `.btn-secondary` e il link con freccia `.link-arrow`.
- **Filetti al posto delle card:** piani, recensioni, FAQ, credenziali e contatti sono righe separate da `--line`. Le uniche superfici rialzate sono le copertine delle schede.
- **Copertine delle schede:** tipografiche, l'obiettivo a tutta larghezza (`ProgramCover`).
- **Logo:** PNG bianco usato come maschera (`.logo-mask`), quindi prende il colore del testo in entrambi i mondi.
- **FAQ:** `<details>` nativo con apertura animata tramite `interpolate-size`.

## Movimento

- **Momento firma — il passaggio tra i mondi:** View Transition, con il nuovo colore che si allarga a cerchio dal punto del click (820 ms, `cubic-bezier(0.7,0,0.2,1)`).
- **Arrivo nel mondo Pilates:** il titolo "espira" da 125%/820 a 68%/300 (1,6 s).
- **Reformer:** carrello e molle respirano in un ciclo di 9 s, e "espira/inspira" stanno sopra le molle.
- Tutto si ferma con `prefers-reduced-motion`.

## Composizione

- **Training, prima schermata:** foto reale dello studio a tutta pagina con un solo velo; H1 su tre righe in basso a sinistra; citazione verbatim da Google (a destra su desktop, sotto il rating su mobile).
- **Pilates, prima schermata:** H1 su due righe a sinistra (tre su mobile), testo e CTA a destra, il reformer **a tutta larghezza** sotto. *Adattamento voluto:* la prima revisione ha chiesto il reformer circa due volte più grande per farne l'elemento focale, e la colonna destra non bastava.
- **Ritmo delle sezioni:** `--bg` e `--surface` alternati, filetto superiore, padding `clamp(4.5rem, 9vw, 8.5rem)`.

## Superfici del browser

Sono tutte legate ai token: selezione, caret, `accent-color`, colore della scrollbar, outline di focus (`--spark`, 2px, offset 3px) e offset delle sottolineature.
