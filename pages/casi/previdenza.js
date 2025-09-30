import Link from "next/link";

import Layout from "../../components/Layout";

import CaseNavigation from "../../components/casi/CaseNavigation";

const RELATED_CASES = ["assicurazioni-vita", "finanza-risk", "data-science"];

const DATASETS = [
  {
    label: "Dataset IAS 19 sintetico",
    href: "https://github.com/attuario-eu/dataset/tree/main/ias19",
    description:
      "Anagrafiche anonime con età, anzianità di servizio, retribuzioni e ipotesi economiche per calcolare l’obbligazione attuariale.",
  },
  {
    label: "Serie storiche tasso inflazione e rendimento",
    href: "https://www.bancaditalia.it/statistiche/tematiche/mercati-finanziari/",
    description:
      "Dati macroeconomici utili per calibrare scenari ottimistici, neutri e pessimistici di rendimento del fondo.",
  },
  {
    label: "Template report aderenti",
    href: "https://github.com/attuario-eu/templates/blob/main/report-aderenti.docx",
    description:
      "Modello di relazione periodica con KPI di adeguatezza, indicatori ESG e spazi per raccomandazioni personalizzate.",
  },
];

const WORKFLOW = [
  {
    title: "Raccolta input",
    copy:
      "Verifica consistenza dei dati HR, definisci ipotesi demografiche (turnover, mortalità) e parametri economici (tasso di attualizzazione, inflazione).",
  },
  {
    title: "Calcolo obbligazioni IAS 19",
    copy:
      "Utilizza il calcolatore dedicato per stimare DB0, Costo del servizio e sensitività alle ipotesi economiche chiave.",
  },
  {
    title: "Scenari di contribuzione",
    copy:
      "Proietta la posizione individuale e collettiva con scenari di rendimento e volatilità diversi, stimando gap pensionistici.",
  },
  {
    title: "Comunicazione agli aderenti",
    copy:
      "Trasforma i risultati in KPI comprensibili, accompagnati da note metodologiche e call to action sulle scelte di contribuzione.",
  },
];

const DELIVERABLES = [
  {
    label: "Nota metodologica IAS 19",
    detail:
      "Documento con assunzioni, risultati numerici, sensitività e riconciliazione con i valori a bilancio.",
  },
  {
    label: "Dashboard scenari contribuzione",
    detail:
      "Visualizzazione interattiva (Excel/BI) delle proiezioni ottimistiche, base e conservative con indicatori di adeguatezza.",
  },
  {
    label: "Lettera agli aderenti",
    detail:
      "Comunicazione chiara con riepilogo delle performance, focus su sostenibilità ESG e suggerimenti personalizzati.",
  },
];

const CHECKS = [
  "Confronta le ipotesi con le ultime comunicazioni IVASS/COVIP e documenta eventuali scostamenti.",
  "Coordina i messaggi con l’ufficio HR e la comunicazione interna per garantire coerenza con policy aziendali.",
  "Archivia le basi dati in ambiente sicuro rispettando GDPR e policy di retention aziendale.",
];

export default function CasePrevidenza() {
  return (
    <Layout
      title="Case study · Previdenza complementare"
      eyebrow="Applicazioni attuariali"
      intro="Guida operativa per valutare obbligazioni IAS 19, costruire scenari di contribuzione e predisporre la comunicazione verso aderenti e stakeholder interni."
      metaDescription="Case study previdenza: dataset IAS 19, workflow di calcolo, scenari di contribuzione, proiezioni sintetiche e checklist di governance per fondi e casse."
    >
      <section className="info-panel">
        <h2>Scenario di riferimento</h2>
        <p>
          Un’azienda vuole aggiornare la valutazione IAS 19 e fornire ai dipendenti un report personalizzato sulla posizione previdenziale. Il team attuariale deve integrare ipotesi economiche aggiornate, proiettare scenari di contribuzione e coordinare la comunicazione con HR e sostenibilità.
        </p>
      </section>

      <section className="section" aria-labelledby="dataset-supporto">
        <h2 id="dataset-supporto">Dataset e template</h2>
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
            <Link href="/calcolatori/pensione-indicizzata">Calcolatore pensione indicizzata</Link>
            <p>
              Stima il montante atteso con rivalutazione annuale e confronta scenari di contribuzione.
            </p>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="workflow-operativo">
        <h2 id="workflow-operativo">Workflow operativo</h2>
        <div className="card-grid">
          {WORKFLOW.map(({ title, copy }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section info-panel"
        id="proiezioni-sintetiche"
        aria-labelledby="proiezioni-sintetiche-heading"
      >
        <h2 id="proiezioni-sintetiche-heading">Proiezioni sintetiche</h2>
        <p>
          Utilizza tre scenari di rendimento (ottimistico, base, pessimistico) e rappresenta gli intervalli di confidenza in modo intuitivo. Evidenzia l’effetto delle ipotesi di inflazione e delle rivalutazioni retributive sulla posizione finale.
        </p>
        <ul className="list">
          <li>
            <strong>Scenario ottimistico:</strong> rendimento medio annuo +150 bps rispetto al base, inflazione controllata.
          </li>
          <li>
            <strong>Scenario base:</strong> parametri coerenti con curve risk-free EIOPA + spread coerente con la politica di investimento.
          </li>
          <li>
            <strong>Scenario pessimistico:</strong> shock -200 bps nei primi tre anni, inflazione alta e aumento del turnover.
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="output-attesi-heading">
        <h2 id="output-attesi-heading">Deliverable finali</h2>
        <ul className="list">
          {DELIVERABLES.map(({ label, detail }) => (
            <li key={label}>
              <strong>{label}.</strong> {detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="controlli-heading">
        <h2 id="controlli-heading">Controlli e governance</h2>
        <ul className="list">
          {CHECKS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <CaseNavigation currentSlug="previdenza" relatedSlugs={RELATED_CASES} />
    </Layout>
  );
}
