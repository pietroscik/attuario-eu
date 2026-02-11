import Link from "next/link";

import Layout from "../../components/Layout";

import CaseNavigation from "../../components/casi/CaseNavigation";

const RELATED_CASES = ["finanza-risk", "previdenza", "data-science"];

const DATASETS = [
  {
    label: "Tavole IPS55 e proiezioni generazionali",
    href: "https://www.mortality.org/",
    description:
      "File CSV con basi demografiche annuali e generazionali per confrontare premi puri sotto ipotesi differenti.",
  },
  {
    label: "Curva risk-free EIOPA",
    href: "https://www.eiopa.europa.eu/tools-and-data/risk-free-interest-rate-term-structures_it",
    description:
      "Serie storica dei tassi privi di rischio da utilizzare per analisi di sensitività e scenari di stress.",
  },

];

const STEPS = [
  {
    title: "Impostazione delle ipotesi",
    copy:
      "Documenta basi demografiche, tassi tecnici, spese di caricamento e politiche di retrocessione. Evidenzia differenze tra prodotto puro rischio e misto.",
  },
  {
    title: "Calcolo premi e riserve",
    copy:
      "Utilizza il calcolatore dedicato per premi unici o periodici e integra l’analisi Duration/Convexity per valutare l’impatto dei movimenti di tasso.",
  },
  {
    title: "Sensitività e scenari",
    copy:
      "Simula variazioni ±50 bps sulla curva risk-free e confronta i risultati con tavole generazionali per misurare la volatilità del premio puro.",
  },
  {
    title: "Comunicazione regolamentare",
    copy:
      "Prepara una nota metodologica per attuario incaricato e funzioni di controllo descrivendo ipotesi, fonti dati e coerenza con IDD/POG.",
  },
];

const DELIVERABLES = [
  {
    label: "Memorandum tecnico",
    detail:
      "Documento sintetico con razionali delle ipotesi, risultati numerici principali e commento sulle sensitività svolte.",
  },
  {
    label: "Workbook premi e riserve",
    detail:
      "Foglio di calcolo con formule auditabili e scenari separati per basi IPS55 e generazionali.",
  },
  {
    label: "Slide per stakeholder non tecnici",
    detail:
      "Presentazione con grafici di sensitività, focus su impatti economici e timeline di implementazione.",
  },
];

const COMPLIANCE = [
  "Verifica la coerenza con linee guida IVASS n. 38/2018 e con i requisiti IDD sulla product oversight governance.",
  "Aggiorna il fascicolo informativo recependo le modifiche di premio e riserva e condividi l’addendum con il marketing.",
  "Conserva il tracciato dei dati utilizzati per audit interni e riesami dell’attuario incaricato.",
];

export default function CaseAssicurazioniVita() {
  return (
    <Layout
      title="Case study · Assicurazioni vita"
      eyebrow="Applicazioni attuariali"
      intro="Esempio operativo per aggiornare premi, riserve e documentazione di un portafoglio temporanee caso morte con partecipazione agli utili."

      metaDescription="Case study vita: dataset IPS55, workflow di calcolo premi e riserve, analisi di sensitività ai tassi e checklist IDD/POG da adattare alla propria compagnia."
    >
      <section className="info-panel">
        <h2>Scenario di riferimento</h2>
        <p>
          Una compagnia vita intende aggiornare tariffe e nota tecnica di una temporanea caso morte a premio annuo. Il team attuariale deve confrontare basi IPS55 con proiezioni generazionali, verificare l’impatto dei movimenti di tasso e predisporre la documentazione IDD/POG.
        </p>
        <p className="small-print">
          I numeri forniti sono dimostrativi: sostituiscili con le tue basi dati e valida ogni ipotesi con l’attuario incaricato.
        </p>
      </section>

      <section className="section" aria-labelledby="dataset-supporto">
        <h2 id="dataset-supporto">Dataset e strumenti di supporto</h2>
        <ul className="list">
          {DATASETS.map(({ label, href, description }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
              <p>{description}</p>
            </li>
          ))}
          <li>
            <Link href="/calcolatori/premio-puro">Calcolatore premio puro</Link>
            <p>
              Imposta età, durata, tassi tecnici e spese per ottenere il premio puro di riferimento.
            </p>
          </li>
          <li>
            <Link href="/calcolatori/duration-convexity">Analisi Duration & Convexity</Link>
            <p>
              Valuta la sensibilità della riserva matematica a shock di tasso per supportare il comitato investimenti.
            </p>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="workflow-operativo">
        <h2 id="workflow-operativo">Workflow operativo</h2>
        <div className="card-grid">
          {STEPS.map(({ title, copy }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="small-print">
          Per ogni fase puoi tornare alle sezioni <Link href="/teoria">Teoria</Link> e{" "}
          <Link href="/applicazioni">Applicazioni</Link> per rivedere formule, ipotesi e schemi di comunicazione che supportano le scelte del case study.
        </p>
      </section>

      <section className="section info-panel" id="output-attesi" aria-labelledby="output-attesi-heading">
        <h2 id="output-attesi-heading">Output attesi</h2>
        <ul className="list">
          {DELIVERABLES.map(({ label, detail }) => (
            <li key={label}>
              <strong>{label}.</strong> {detail}
            </li>
          ))}
        </ul>
        <p className="small-print">
          Prevedi un check incrociato con attuario incaricato e funzione risk management prima di comunicare gli esiti esternamente.
        </p>
      </section>

      <section className="section" aria-labelledby="compliance-normativa">
        <h2 id="compliance-normativa">Note di compliance</h2>
        <ul className="list">
          {COMPLIANCE.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="small-print">
          Le indicazioni riportate sono sintetiche e non sostituiscono la normativa ufficiale né i pareri richiesti dalle funzioni di controllo interne.
        </p>
      </section>

      <CaseNavigation currentSlug="assicurazioni-vita" relatedSlugs={RELATED_CASES} />
    </Layout>
  );
}
