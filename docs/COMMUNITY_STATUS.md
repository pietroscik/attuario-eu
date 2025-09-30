# Stato delle integrazioni community

## Client Telegram CLI (`vysheng/tg`)
- Il repository open source `vysheng/tg` è ancora disponibile su GitHub ma non riceve commit dal 23 marzo 2016 (`6547c0b21b977b327b3c5e8142963f4bc246187a`). Questo significa che funziona solo su distribuzioni Linux con librerie compatibili (OpenSSL < 1.1 per build native) e richiede patch manuali per versioni moderne.
- Per un utilizzo stabile conviene compilare il progetto in un container Debian/Ubuntu LTS, installare le dipendenze `libreadline-dev`, `libconfig-dev`, `libssl-dev`, `libevent-dev` e sostituire `openssl` con `libssl1.0-dev` dove necessario. In alternativa si può ricorrere ai bot ufficiali o al client Telegram Desktop.
- Se si decide di usare `tg`, predisporre un wrapper che aggiorni automaticamente il file `~/.telegram-cli/state` per evitare errori di login e documentare il flusso di autenticazione a due fattori.

## Form contatti (Getform)
- Il form ora invia i dati a un endpoint interno (`/api/contact`) che effettua la validazione dei campi e inoltra la richiesta al form endpoint Getform. In caso di errore la pagina mostra un messaggio contestuale e suggerisce di riprovare o usare l'email diretta.
- L'API server-side restituisce codici espliciti per errori di validazione (400) e per problemi di rete/upstream (502) così da poter registrare i casi critici su Vercel (tramite log) o strumenti di osservabilità.

## Stato canali community
- Il server Discord pubblico è stato messo in manutenzione mentre si revisionano automazioni e linee guida. La pagina community indirizza ora gli utenti verso la lista di attesa via email.
- Il canale Telegram resta attivo come canale principale per gli aggiornamenti. Nella pagina community sono riportate anche indicazioni per utilizzare client alternativi (es. `tg`) specificando che il progetto non è più mantenuto.

## Raccomandazioni operative
- Monitorare periodicamente le consegne Getform dalle dashboard per verificare che gli inoltri generati dall'API siano recapitati (log HTTP 200) e che non ci siano blocchi anti-spam.
- Valutare, appena pronti i nuovi workflow di moderazione, se ripristinare il link diretto a Discord oppure sostituirlo con un form di candidatura per i moderatori.
- Documentare nella knowledge base interna l'uso di client CLI deprecati (come `tg`) per evitare richieste di supporto su canali non ufficiali.
