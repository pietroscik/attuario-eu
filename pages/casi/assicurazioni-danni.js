import Link from "next/link";

import Layout from "../../components/Layout";

import CaseNavigation from "../../components/casi/CaseNavigation";

const RELATED_CASES = ["data-science", "finanza-risk", "insurtech"];



const RESOURCES = [
  {
    label: "Dataset sinistri auto anonimizzati",
    href: "https://github.com/attuario-eu/dataset/tree/main/sinistri-auto",
    description:
      "Base dati sintetica con variabili frequenza/severità, esposizioni e indicatori telematici per esercitarsi con GLM.",
  },
  {
    label: "Script GLM in R",
    href: "https://github.com/attuario-eu/notebook/blob/main/glm-auto.Rmd",
    description:
      "Notebook RMarkdown con stima passo-passo, diagnostiche e grafici delle principali variabili esplicative.",
  },
  {
    label: "Template stress test catastrofali",
    href: "https://github.com/attuario-eu/templates/blob/main/stress-test-cat.xlsx",
    description:
      "Foglio di lavoro per applicare scenari vento e alluvione, con sezioni dedicate alla definizione della retention.",
  },
];

const STEPS = [
  {
    title: "Data quality e feature engineering",
    copy:
      "Pulizia dei dati sinistri e costruzione di esposizioni coerenti con la periodicità dei premi; ingegnerizza variabili telematiche e indicatori di antifrode.",
  },
  {
    title: "Modellazione frequenza × severità",
    copy:
      "Stima modelli GLM (Poisson/NegBin e Gamma/IG) e combina i risultati per ottenere il premio tecnico per segmento.",
  },
  {
    title: "Stress catastrofali e riassicurazione",
    copy:
      "Applica scenari vento 1/100 sul portafoglio property, valuta la capacità riassicurativa e aggiorna il piano di ritenzione.",
  },
  {
    title: "Pricing dinamico e governance",
    copy:
      "Definisci policy per l’uso di variabili telematiche, soglie di monitoraggio e criteri di fairness per tariffe personalizzate.",
  },
];

const DELIVERABLES = [
  {
    label: "Report tecnico GLM",
    detail:
      "Documento con ipotesi, risultati dei modelli, confronti tra segmenti e implicazioni sui premi.",
  },
  {
    label: "Matrice azioni riassicurative",
    detail:
      "Sintesi degli scenari catastrofali, livelli di perdita attesi e decisioni proposte per trattati quota-parte o stop-loss.",
  },
  {
    label: "Linee guida pricing dinamico",
    detail:
      "Checklist con variabili autorizzate, metriche di monitoraggio e piano di revisione periodica con compliance e legal.",
  },
];

const CONTROLS = [
  "Assicurati che l’utilizzo di dati telematici rispetti GDPR e linee guida IVASS sulla protezione del consumatore.",
  "Documenta i controlli di qualità sui dati e mantieni evidenza delle trasformazioni applicate.",
  "Allinea il piano di monitoraggio con funzione risk management e anti-frode per escalation tempestive.",
];

export default function CaseAssicurazioniDanni() {
  return (
    <Layout
      title="Case study · Assicurazioni danni"
      eyebrow="Applicazioni attuariali"
      intro="Percorso guidato per costruire tariffe auto/property data-driven, valutare scenari catastrofali e impostare un framework di pricing dinamico conforme."
      metaDescription="Case study danni: dataset sinistri anonimizzati, script GLM, stress test catastrofali, deliverable e controlli di governance per pricing dinamico e riassicurazione."
    >
      <section className="info-panel">
        <h2>Scenario di riferimento</h2>
        <p>
          Una compagnia danni vuole aggiornare la tariffa auto introducendo variabili telematiche e verificare la resilienza del piano riassicurativo a scenari vento. Il team deve produrre analisi GLM trasparenti, stress test documentati e linee guida per l’utilizzo dei dati.
        </p>
        <p className="small-print">
          Per i richiami teorici su GLM, stress test e riassicurazione puoi consultare le sezioni{" "}
          <Link href="/teoria">Teoria</Link> e{" "}
          <Link href="/applicazioni">Applicazioni</Link>, mentre i dettagli su ALM e rischio climatico sono collegati al case{" "}
          <Link href="/casi/finanza-risk">Finanza e risk management</Link>.
        </p>
      </section>

      <section className="section" aria-labelledby="risorse-supporto">
        <h2 id="risorse-supporto">Risorse di supporto</h2>
        <ul className="list">
          {RESOURCES.map(({ label, href, description }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
              <p>{description}</p>
            </li>
          ))}
          <li>
            <Link href="/calcolatori/portafoglio-variabile">Calcolatore portafoglio variabile</Link>
            <p>
              Stima VaR e TVaR multi-linea per misurare il capitale economico dopo gli stress catastrofali.
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
      </section>

      <section className="section" aria-labelledby="controlli-governance">
        <h2 id="controlli-governance">Controlli di governance</h2>
        <ul className="list">
          {CONTROLS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="small-print">
          Le indicazioni riportate non sostituiscono i requisiti formali dei regolatori né le policy interne: usale come guida operativa e allineale ai processi di product governance e vendor risk management del tuo gruppo.
        </p>
      </section>

      <CaseNavigation currentSlug="assicurazioni-danni" relatedSlugs={RELATED_CASES} />
    </Layout>
  );
}
