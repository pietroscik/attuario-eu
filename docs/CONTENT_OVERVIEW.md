# Mappa dei contenuti

La cartella `content/` centralizza i testi statici usati dalle pagine Next.js per facilitare la manutenzione editoriale.

## Navigazione

- `content/navigation.js` esporta `NAV_LINKS`, l'elenco delle voci del menu principale.

## Pagine

Ogni file sotto `content/pages/` espone costanti tematiche richiamate dalla pagina omonima:

- `applicazioni.js` → `APPLICATION_AREAS`
- `attuario.js` → `ATTUARIO_ROLES`, `ATTUARIO_PATHWAYS`
- `blog.js` → `BLOG_POSTS`
- `home.js` → `HOME_HIGHLIGHTS`, `HOME_PERSONAS`, `HOME_UPDATES`
- `sections-audit.js` → `SECTION_AUDIT` (sintesi dello stato delle principali sezioni del sito)
- `notizie.js` → `NEWS_UPDATES`
- `risorse.js` → `RESOURCE_SECTIONS`
- `servizi.js` → `SERVICE_REDIRECTS`
- `strumenti.js` → `TOOL_RESOURCES`
- `teoria.js` → `THEORY_TOPICS`, `THEORY_RESEARCH_HIGHLIGHTS`. `THEORY_TOPICS` raccoglie i moduli per livello (`difficulty: "base" | "intermedio" | "avanzato"`) e ogni item riporta il campo per alimentare i filtri di difficoltà della pagina.

La suddivisione rende più rapido:

1. Aggiornare copy e link senza scrollare JSX lungo.
2. Riutilizzare gli stessi blocchi in API o future pagine dinamiche.
3. Aggiungere test (es. snapshot) sui contenuti editoriali.
4. Alimentare il componente `SectionAuditBoard` con dati aggiornati per mantenere trasparenza sulla copertura dei contenuti.

Per aggiungere una nuova sezione:

1. Crea o aggiorna il file in `content/pages/` con le costanti esportate.
2. Importa le costanti nella relativa pagina in `pages/`.
3. Aggiorna eventuali componenti se il contenuto introduce nuove strutture.

## Linee guida editoriali

- Scrivi in italiano, con tono divulgativo ma preciso: cita norme, standard e riferimenti quando disponibili.
- Mantieni i testi autoesplicativi: includi contesto, esempi pratici e call to action utili senza rimandare forzatamente ad altre pagine.
- Quando elenchi risorse esterne, aggiungi una nota sintetica che spieghi perché il link è utile alla community attuariale.
- Verifica periodicamente che gli URL esterni siano attivi; in caso contrario sostituiscili o rimuovili.
- Preferisci array ordinati alfabeticamente o per importanza crescente; commenta direttamente nel file se scegli un ordinamento differente.
