import Link from "next/link";
import Layout from "../components/Layout";

import { ATTUARIO_PATHWAYS, ATTUARIO_ROLES } from "../content/pages/attuario";

export default function Attuario() {
  return (
    <Layout
      title="Attuari nel mondo reale"
      eyebrow="Professione"
      intro="Ruoli, responsabilità e percorsi professionali di chi applica la scienza attuariale ogni giorno. Questa pagina si collega alle sezioni Teoria, Casi e Strumenti per mostrare come le competenze quantitative diventano scelte concrete in azienda."
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
            <p className="small-print">
              Vuoi vedere un esempio numerico o un workflow collegato a questo ruolo? Dai uno sguardo ai{" "}
              <Link href="/casi">Case study operativi</Link> e alla sezione{" "}
              <Link href="/strumenti">Strumenti &amp; calcolatori</Link>.
            </p>
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
          Contenuti basati su fonti pubbliche (seminari, webinar, job description) con citazione degli autori originali. Per esempi più
          tecnici su formule, casi reali e toolkit operativi puoi navigare tra le sezioni{" "}
          <Link href="/corso">Corso</Link>,{" "}
          <Link href="/teoria">Teoria</Link>,{" "}
          <Link href="/casi">Case study</Link> e{" "}
          <Link href="/strumenti">Strumenti</Link>.
        </p>
      </section>
    </Layout>
  );
}
