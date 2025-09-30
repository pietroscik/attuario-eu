import Link from "next/link";

import Layout from "../../components/Layout";

const CASES = [
  {
    slug: "assicurazioni-vita",
    title: "Assicurazioni vita",
    summary:
      "Pricing, riserve e comunicazione regolamentare per prodotti caso morte, caso vita e partecipazioni agli utili.",
    highlights: [
      "Template per premi puri e analisi sensitività tassi",
      "Linee guida IDD/POG per la documentazione",
      "Suggerimenti per deliverable verso attuari incaricati e funzioni finance",
    ],
  },
  {
    slug: "assicurazioni-danni",
    title: "Assicurazioni danni e salute",
    summary:
      "Segmentazione portafogli, stress test catastrofali e uso di variabili telematiche in ottica data-driven.",
    highlights: [
      "Workflow frequenza × severità in R",
      "Check-list per stress e riassicurazione",
      "Spunti per pricing dinamico e governance dei dati",
    ],
  },
  {
    slug: "previdenza",
    title: "Previdenza complementare",
    summary:
      "Valutazioni IAS 19, scenari di contribuzione e comunicazioni agli aderenti di fondi pensione e casse.",
    highlights: [
      "Dataset sintetici per passività attuariali",
      "Proiezioni scenari rendimento/costo",
      "Indicatori ESG e di adeguatezza per i report",
    ],
  },
  {
    slug: "finanza-risk",
    title: "Finanza e risk management",
    summary:
      "ORSA, misurazione del capitale economico e integrazione del rischio climatico nei framework di governance.",
    highlights: [
      "Template ORSA semplificato",
      "Calcolo VaR/TVaR multi-linea",
      "KPI climatici per reporting periodico",
    ],
  },
  {
    slug: "data-science",
    title: "Data science attuariale",
    summary:
      "Automazione dei processi, MLOps e monitoraggio modelli per team attuariali e di advanced analytics.",
    highlights: [
      "Pipeline ETL con Airflow",
      "Monitoraggio drift con Evidently",
      "Requisiti di governance per registri modello",
    ],
  },
  {
    slug: "insurtech",
    title: "Innovazione prodotti e InsurTech",
    summary:
      "Canvas strategici, backlog MVP e valutazione partner tecnologici per soluzioni parametriche e on-demand.",
    highlights: [
      "Modelli di discovery prodotto",
      "Metriche di adozione e retention",
      "Questionari vendor assessment",
    ],
  },
];

export default function Casi() {
  return (
    <Layout
      title="Case study operativi"
      eyebrow="Esempi guidati"
      intro="Una raccolta di percorsi pratici per applicare la teoria attuariale. Ogni case study include dataset di supporto, note metodologiche e deliverable pronti per essere adattati al proprio contesto."
    >
      <section className="card-grid">
        {CASES.map(({ slug, title, summary, highlights }) => (
          <article key={slug} className="card">
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul className="list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button secondary" href={`/casi/${slug}`}>
              Apri il case study
            </Link>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Come usare i materiali</h2>
        <p>
          Ogni pagina include suggerimenti su dataset, strumenti digitali e indicatori da comunicare a stakeholder tecnici e non tecnici. Personalizza i template con i tuoi dati, cita sempre le fonti e tieni conto dei vincoli normativi del tuo settore.
        </p>
        <p className="small-print">
          I contenuti sono pensati per studio e divulgazione: non costituiscono consulenza professionale né sostituiscono il giudizio di un attuario abilitato.
        </p>
      </section>
    </Layout>
  );
}
