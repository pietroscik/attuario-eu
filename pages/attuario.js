import Layout from "../components/Layout";

import { ATTUARIO_PATHWAYS, ATTUARIO_ROLES } from "../content/pages/attuario";

export default function Attuario() {
  return (
    <Layout
      title="Attuari nel mondo reale"
      eyebrow="Professione"
      intro="Ruoli, responsabilità e percorsi professionali di chi applica la scienza attuariale ogni giorno. Interviste, testimonianze e materiali pubblici aiutano a comprendere come si evolvono le competenze richieste dal mercato."
    >
      <section className="card-grid">
        {ATTUARIO_ROLES.map(({ title, description, bullets }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section">
        <h2>Percorsi e competenze</h2>
        <div className="card-grid">
          {ATTUARIO_PATHWAYS.map(({ title, content }) => (
            <div key={title} className="card">
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          ))}
        </div>
        <p className="small-print">
          Contenuti basati su fonti pubbliche (seminari, webinar, job description) con citazione degli autori originali.
        </p>
      </section>
    </Layout>
  );
}
