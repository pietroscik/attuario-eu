import Layout from "../components/Layout";

import {
  THEORY_RESEARCH_HIGHLIGHTS,
  THEORY_TOPICS,
} from "../content/pages/teoria";

const RESEARCH_CARDS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => !item.slug);
const RESEARCH_LINKS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => item.slug);

export default function Teoria() {
  return (
    <Layout
      title="Teoria attuariale"
      eyebrow="Libreria didattica"
      intro="Una libreria digitale per consolidare le basi quantitative dell’attuario. Ogni modulo offre spiegazioni progressive, esempi numerici scaricabili e quiz auto-valutativi per monitorare il livello di comprensione."
    >
      <section className="card-grid">
        {THEORY_TOPICS.map(({ title, items }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <ul className="list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section">
        <h2>Quadri teorici fondamentali</h2>
        <div className="card-grid">
          {RESEARCH_CARDS.map(({ title, description }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-panel">
        <h2>Approfondimenti multimediali</h2>
        <p>Ogni capitolo integra note teoriche con:</p>
        <ul className="list">
          <li>Animazioni con MathJax e grafici interattivi in Python o R.</li>
          <li>Workbook Excel / Sheets con esercizi guidati e soluzioni.</li>
          <li>Mini-quiz autogenerati per verificare la comprensione immediata.</li>
        </ul>
        <p className="small-print">
          Materiale didattico open-source con licenza CC BY-SA, ideale per corsi
          universitari e gruppi di studio.
        </p>
      </section>

      <section className="section info-panel">
        <h2>Ricerche consigliate</h2>
        {RESEARCH_LINKS.map(({ title, description, slug }) => (
          <div
            key={slug}
            style={{
              background: "#eef6ff",
              padding: "1rem",
              borderLeft: "4px solid #0066cc",
              margin: "1rem 0",
            }}
          >
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={slug} target="_blank" rel="noopener noreferrer">
              Apri la scheda completa
            </a>
          </div>
        ))}
      </section>
    </Layout>
  );
}
