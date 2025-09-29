import Layout from "../components/Layout";

import { APPLICATION_AREAS } from "../content/pages/applicazioni";

export default function Applicazioni() {
  return (
    <Layout
      title="Applicazioni attuariali"
      eyebrow="Dal modello all’impatto"
      intro="Come trasformare la teoria in decisioni operative. I moduli di questa sezione propongono workflow replicabili, dataset aperti e suggerimenti per presentazioni a stakeholder non tecnici."
    >
      <section className="card-grid">
        {APPLICATION_AREAS.map(({ title, description, bullet }) => (
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
