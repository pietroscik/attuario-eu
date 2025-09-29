import Layout from "../components/Layout";

import { NEWS_UPDATES } from "../content/pages/notizie";

export default function Notizie() {
  return (
    <Layout
      title="Notizie & ricerca"
      eyebrow="Radar normativo"
      intro="Un radar sulle principali novità normative e sulla ricerca attuariale internazionale. Ogni segnalazione include link alle fonti ufficiali e una spiegazione divulgativa."
    >
      <section className="card-grid">
        {NEWS_UPDATES.map(({ title, entries }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <ul className="list">
              {entries.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Newsletter mensile</h2>
        <p>Riepilogo di articoli, paper e strumenti pubblicati sul sito con commenti degli autori e una selezione di letture extra.</p>
        <a className="button" href="/newsletter">
          Iscriviti gratuitamente
        </a>
        <p className="small-print">Riceverai solo aggiornamenti divulgativi. Nessuna proposta commerciale o consulenza.</p>
      </section>
    </Layout>
  );
}
