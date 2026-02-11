# attuario.eu (Next.js)

Sito divulgativo per `attuario.eu` dedicato alla scienza attuariale con sezioni:
- Home con panoramica, percorsi consigliati e call-to-action per newsletter e collaborazioni.
- Teoria attuariale con moduli su matematica, riserve, finanza e quiz.
- Applicazioni pratiche in assicurazioni, previdenza e risk management.
- Attuari nel mondo reale con ruoli professionali, competenze e percorsi.
- Notizie & ricerca con aggiornamenti normativi, paper e eventi.
- Risorse esterne con directory curata di siti istituzionali, blog e community attuariali.
- Strumenti & calcolatori con tutorial su Excel/R/Python e tool online.
- Blog, Newsletter e Contatti (senza offerta di consulenza professionale).

## Struttura del codice
- `components/Layout.js` centralizza header, meta tag, navigazione e footer mantenendo il disclaimer divulgativo su ogni pagina.
- Il menu principale usa i link dichiarati in `content/navigation.js`, così l'ordine di navigazione è configurabile senza toccare il componente.
- I contenuti statici delle principali pagine editoriali sono raccolti in `content/pages/*.js`, rendendo più semplice aggiornare testi e liste senza scorrere JSX lungo.
- Gli stili principali vivono in `styles/globals.css` con utility per griglie, card, bottoni e form coerenti fra le sezioni.

## SEO, sitemap e robots
- `public/robots.txt` espone la sitemap all'URL `https://attuario.eu/sitemap.xml`.
- La sitemap è generata da `pages/sitemap.xml.js`, che include le principali pagine editoriali, i case study, i calcolatori e le pagine legali.

## Processo editoriale blog
- I post del blog sono definiti in `content/pages/blog.js` con i campi `title`, `summary`, `author`, `role`, `reviewedBy` e `updatedAt` concordati con la redazione.
- `updatedAt` è espresso in formato ISO (`YYYY-MM-DD`) ed è utilizzato in pagina per mostrare la data localizzata e un badge "Revisionato" quando è valorizzato `reviewedBy`.
- L'endpoint `pages/api/blog-feed.js` esporta lo stesso payload (`posts: BLOG_POSTS`) per alimentare feed JSON esterni senza duplicare i contenuti.
- Per pubblicare un nuovo articolo:
  1. Aggiungi l'oggetto in `BLOG_POSTS` indicando autore, ruolo e revisore.
  2. Aggiorna la data `updatedAt` alla chiusura della revisione.
  3. Verifica localmente (`npm run dev`) che il badge e le informazioni di metadato vengano visualizzate correttamente.

## Avvio locale
```bash
npm i
npm run dev
```
Apri http://localhost:3000

## Deploy su Vercel
1. Crea un repo GitHub e carica questi file.
2. In Vercel: **New Project → Import Git Repository** e seleziona il repo.
3. Framework: **Next.js** (auto). Build: `next build` (auto). Output: `.next` (auto).
4. Deploy.
5. 
## Note
- La pagina `pages/risorse/ifrs17-essentials.js` raccoglie il mini-corso IFRS 17 Essentials linkato dal blog: i contenuti sono esclusivamente divulgativi e non costituiscono consulenza professionale.
- Footer include il disclaimer legale per l'uso divulgativo dei contenuti.
- Le pagine sono pronte per essere popolate con contenuti didattici, dataset e calcolatori aggiuntivi.
