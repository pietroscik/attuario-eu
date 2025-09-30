import Layout from "../../components/Layout";

import CaseNavigation from "../../components/casi/CaseNavigation";

const RELATED_CASES = ["assicurazioni-danni", "finanza-risk", "insurtech"];

const RESOURCES = [
  {
    label: "Repository pipeline Airflow",
    href: "https://github.com/attuario-eu/pipeline-airflow",
    description:
      "Esempio di DAG per ingestione giornaliera, validazione dati e popolamento feature store su infrastruttura cloud.",
  },
  {
    label: "Template monitoraggio Evidently",
    href: "https://github.com/attuario-eu/templates/blob/main/evidently-dashboard.ipynb",
    description:
      "Notebook per configurare report periodici di data e prediction drift con alert automatici.",
  },
  {
    label: "Registro modelli attuariali",
    href: "https://github.com/attuario-eu/templates/blob/main/model-registry.xlsx",
    description:
      "Schema di tracciamento versioni, metriche e validazioni per soddisfare requisiti EIOPA e audit interni.",
  },
];

const PHASES = [
  {
    title: "Discovery & data ingestion",
    detail:
      "Censisci le fonti dati (core assicurativo, CRM, data lake), mappa i permessi e definisci KPI di qualità.",
  },
  {
    title: "Feature store e versioning",
    detail:
      "Configura pipeline per trasformazioni riproducibili, gestisci cataloghi di feature condivise e versioni tramite Git/MLflow.",
  },
  {
    title: "Deploy e monitoraggio",
    detail:
      "Implementa CI/CD per i modelli, definisci soglie di alert e integra dashboard Evidently o Grafana per il monitoraggio continuo.",
  },
];

const COMPONENTS = [
  {
    name: "Ingestion",
    description:
      "Airflow o Prefect per orchestrare estrazioni giornaliere con controlli di completezza e deduplicazione.",
  },
  {
    name: "Feature store",
    description:
      "Feast o Tecton per pubblicare feature approvate con metadata e controlli di accesso granulari.",
  },
  {
    name: "Model serving",
    description:
      "Servizi containerizzati (FastAPI, SageMaker) con deployment blue/green o canary e log centralizzati.",
  },
  {
    name: "Monitoraggio",
    description:
      "Evidently, Prometheus/Grafana o Datafold per drift, quality check e alerting integrato con incident management.",
  },
];

const DELIVERABLES = [
  {
    label: "Runbook MLOps",
    text:
      "Documento operativo con checklist di deploy, gestione incidenti e ruoli coinvolti nelle escalation.",
  },
  {
    label: "Dashboard drift",
    text:
      "Visualizzazione condivisa con indicatori di data/prediction drift, soglie e log delle azioni correttive.",
  },
  {
    label: "Registro modelli",
    text:
      "Archivio centralizzato delle versioni con metriche, dataset di training e validazioni indipendenti.",
  },
];

export default function CaseDataScience() {
  return (
    <Layout
      title="Case study · Data science attuariale"
      eyebrow="Applicazioni attuariali"
      intro="Blueprint per industrializzare modelli attuariali con pipeline dati affidabili, MLOps e monitoraggio continuo del drift."
      metaDescription="Case study data science attuariale: repository Airflow, template Evidently, model registry e deliverable per orchestrare pipeline, deploy e monitoraggio dei modelli."
    >
      <section className="info-panel">
        <h2>Scenario di riferimento</h2>
        <p>
          Un team attuariale vuole automatizzare il processo di pricing e reserving sfruttando pipeline dati e modelli machine learning. L’obiettivo è garantire riproducibilità, controllo delle versioni e monitoraggio costante di drift e performance.
        </p>
      </section>

      <section className="section" aria-labelledby="risorse-heading">
        <h2 id="risorse-heading">Risorse di progetto</h2>
        <ul className="list">
          {RESOURCES.map(({ label, href, description }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="fasi-heading">
        <h2 id="fasi-heading">Fasi del percorso</h2>
        <div className="card-grid">
          {PHASES.map(({ title, detail }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-panel" id="componenti-principali" aria-labelledby="componenti-heading">
        <h2 id="componenti-heading">Componenti principali</h2>
        <div className="card-grid">
          {COMPONENTS.map(({ name, description }) => (
            <article key={name} className="card">
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="small-print">
          Ogni componente deve avere owner chiari, log di esecuzione e controlli automatizzati documentati in modo da soddisfare audit e linee guida EIOPA.
        </p>
      </section>

      <section className="section" aria-labelledby="deliverable-heading">
        <h2 id="deliverable-heading">Deliverable finali</h2>
        <ul className="list">
          {DELIVERABLES.map(({ label, text }) => (
            <li key={label}>
              <strong>{label}.</strong> {text}
            </li>
          ))}
        </ul>
      </section>

      <CaseNavigation currentSlug="data-science" relatedSlugs={RELATED_CASES} />
    </Layout>
  );
}
