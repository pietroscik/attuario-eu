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

## Dominio personalizzato
Aggiungi `attuario.eu` in **Project → Settings → Domains** e segui le istruzioni per i record DNS (A su 76.76.21.21 per l'apex; CNAME per www).

## Note
- Footer include il disclaimer legale pre-abilitazione.
- Le pagine sono “placeholder” pronte da personalizzare.
