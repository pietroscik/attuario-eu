import Link from "next/link";

import Layout from "../../components/Layout";

const ASSETS = [
  {
    label: "Canvas value proposition",
    href: "https://github.com/attuario-eu/templates/blob/main/canvas-insurtech.pdf",
    description:
      "Modello compilabile per definire segmenti di clientela, problemi da risolvere, metriche di successo e canali.",
  },
  {
    label: "Backlog MVP parametrici",
    href: "https://github.com/attuario-eu/templates/blob/main/backlog-mvp.xlsx",
    description:
      "Foglio di calcolo con epiche, user story e criteri di accettazione per prototipi di polizze parametriche.",
  },
  {
    label: "Questionario vendor assessment",
    href: "https://github.com/attuario-eu/templates/blob/main/vendor-assessment.docx",
    description:
      "Checklist per valutare fornitori tecnologici su sicurezza, SLA, compliance e capacità di integrazione.",
  },
];

const STREAMS = [
  {
    title: "Ricerca cliente e mercato",
    body:
      "Interviste qualitative, analisi concorrenti e studio delle normative per individuare pain point reali e vincoli regolamentari.",
  },
  {
    title: "Prototipazione e test",
    body:
      "Sviluppo rapido di mock-up, calcolo del premio parametrico e simulazione dell’onboarding con stakeholder pilota.",
  },
  {
    title: "Go-to-market e partnership",
    body:
      "Definizione di pricing, canali distributivi, accordi con provider dati e pianificazione campagne di lancio.",
  },
];

const MVP_ITEMS = [
  {
    label: "Story map MVP",
    detail:
      "Sequenza di funzionalità must-have, should-have e nice-to-have per rilasciare un prototipo usabile in 6 settimane.",
  },
  {
    label: "Piano test sandbox",
    detail:
      "Elenco di casi limite, metriche di monitoraggio e documentazione necessaria per l’accesso alla sandbox regolamentare.",
  },
  {
    label: "Roadmap integrazione",
    detail:
      "Timeline di integrazione con sistemi core (policy administration, sinistri, billing) e milestone di sicurezza.",
  },
];

const PARTNER_CHECKS = [
  "Verifica requisiti di sicurezza (ISO 27001, penetration test recenti) e politiche di business continuity.",
  "Analizza la compatibilità delle API con l’architettura esistente e i vincoli di latency.",
  "Assicurati che il vendor consenta audit, export dei dati e processi di off-boarding documentati.",
];

export default function CaseInsurtech() {
  return (
    <Layout
      title="Case study · Innovazione InsurTech"
      eyebrow="Applicazioni attuariali"
      intro="Framework per progettare un prodotto assicurativo parametrico, strutturare il backlog MVP e valutare partner tecnologici in ottica di governance."
    >
      <section className="info-panel">
        <h2>Scenario di riferimento</h2>
        <p>
          Una compagnia vuole lanciare un prodotto parametric travel legato a ritardi aerei. Il team cross-funzionale (attuari, product manager, IT, compliance) deve disegnare la value proposition, preparare test in sandbox regolamentare e selezionare partner dati affidabili.
        </p>
      </section>

      <section className="section" aria-labelledby="asset-heading">
        <h2 id="asset-heading">Strumenti operativi</h2>
        <ul className="list">
          {ASSETS.map(({ label, href, description }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
              <p>{description}</p>
            </li>
          ))}
          <li>
            <Link href="/strumenti">Toolkit attuario.eu</Link>
            <p>
              Accedi a template aggiuntivi per business plan, metriche di prodotto e storytelling verso stakeholder.
            </p>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="stream-heading">
        <h2 id="stream-heading">Flussi di lavoro principali</h2>
        <div className="card-grid">
          {STREAMS.map(({ title, body }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-panel" id="backlog-mvp" aria-labelledby="backlog-heading">
        <h2 id="backlog-heading">Backlog MVP</h2>
        <ul className="list">
          {MVP_ITEMS.map(({ label, detail }) => (
            <li key={label}>
              <strong>{label}.</strong> {detail}
            </li>
          ))}
        </ul>
        <p className="small-print">
          Assegna owner chiari a ogni epica, definisci dipendenze e aggiorna lo stato settimanalmente per mantenere allineati team e stakeholder.
        </p>
      </section>

      <section className="section" aria-labelledby="partner-heading">
        <h2 id="partner-heading">Valutazione partner tecnologici</h2>
        <ul className="list">
          {PARTNER_CHECKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
