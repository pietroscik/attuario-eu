import Layout from "../components/Layout";

const areas = [
  {
    title: "Assicurazioni vita",
    description:
      "Pricing di polizze caso vita e caso morte, gestione delle partecipazioni agli utili e valutazione del longevity risk.",
    bullet: [
      "Esempi di tariffe per rendite e temporanee caso morte",
      "Analisi della sensitività ai tassi di interesse",
      "Check-list per documentazione Solvency II",
    ],
  },
  {
    title: "Assicurazioni danni e salute",
    description: "Segmentazione portafogli auto, property e medical con GLM e metodi di credibilità.",
    bullet: [
      "Workflow per modelli frequenza × severità in R",
      "Simulazioni di scenari catastrofali e stress test",
      "Indicatori tecnici da monitorare nei report periodici",
    ],
  },
  {
    title: "Previdenza e fondi pensione",
    description: "Valutazioni attuariali per TFR e fondi a capitalizzazione, analisi ALM e risk budgeting.",
    bullet: [
      "Esempio di calcolo delle passività IAS 19",
      "Costruzione di scenari di contribuzione e rendimento",
      "Checklist per le relazioni periodiche agli aderenti",
    ],
  },
  {
    title: "Finanza e risk management",
    description:
      "Metriche di rischio integrate per banche, assicurazioni e corporate, con focus su solvibilità e liquidità.",
    bullet: [
      "Modelli ORSA semplificati per PMI assicurative",
      "Calcolo del capitale economico con metodi VaR e TVaR",
      "KPI per la comunicazione ai comitati rischi",
    ],
  },
];

export default function Applicazioni() {
  return (
    <Layout
      title="Applicazioni attuariali"
      eyebrow="Dal modello all’impatto"
      intro="Come trasformare la teoria in decisioni operative. I moduli di questa sezione propongono workflow replicabili, dataset aperti e suggerimenti per presentazioni a stakeholder non tecnici."
    >
      <section className="card-grid">
        {areas.map(({ title, description, bullet }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list">
              {bullet.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Case study guidati</h2>
        <p>Ogni area include un caso pratico completo con:</p>
        <ul className="list">
          <li>Dataset anonimi pronti per l’analisi in Excel, R o Python.</li>
          <li>Notebook con codice commentato e visualizzazioni.</li>
          <li>Template di presentazione per raccontare i risultati a management e regulator.</li>
        </ul>
        <p className="small-print">Uso consentito esclusivamente a fini didattici e di studio.</p>
      </section>
    </Layout>
  );
}
