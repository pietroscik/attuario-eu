# attuario-eu-starter (Next.js)

Sito starter per `attuario.eu` con sezioni: Home, Community, Shop, Wiki, Calcolatori, Blog, Contatti.

## Avvio locale
```bash
npm i
npm run dev
```
Apri http://localhost:3000

## Deploy su Vercel
1) Crea un repo GitHub e carica questi file.  
2) In Vercel: **New Project → Import Git Repository** e seleziona il repo.  
3) Framework: **Next.js** (auto). Build: `next build` (auto). Output: `.next` (auto).  
4) Deploy.

## Newsletter
- Il modulo in `pages/newsletter.js` invia i dati a Formspree.
- Imposta la variabile d'ambiente `NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID` con l'ID del tuo form Formspree (es. `abcd1234`).
- In locale aggiungila a `.env.local`; su Vercel inseriscila nella sezione **Project → Settings → Environment Variables**.
- Se la variabile manca il modulo resta disabilitato per evitare invii verso l'endpoint placeholder.

## Dominio personalizzato
Aggiungi `attuario.eu` in **Project → Settings → Domains** e segui le istruzioni per i record DNS (A su 76.76.21.21 per l'apex; CNAME per www).

## Note
- Footer include il disclaimer legale pre-abilitazione.
- Le pagine sono “placeholder” pronte da personalizzare.
