import Link from "next/link";

import Layout from "../components/Layout";

import { NEWS_UPDATES } from "../content/pages/notizie";

export default function Notizie() {
  return (
    <Layout
      title="Notizie & ricerca"
      eyebrow="Radar normativo"
      intro="Un radar sulle principali novità normative e sulla ricerca attuariale internazionale. Ogni segnalazione include link alle fonti ufficiali e una spiegazione divulgativa per aiutarti a collegare aggiornamenti e casi pratici."
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
            <p className="small-print">
              Per esempi numerici e workflow collegati a questo tema puoi esplorare le sezioni{" "}
              <Link href="/casi">Case study</Link> e{" "}
              <Link href="/strumenti">Strumenti</Link>.
            </p>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Newsletter mensile</h2>
        <p>Riepilogo di articoli, paper e strumenti pubblicati sul sito con commenti degli autori e una selezione di letture extra.</p>
        <Link className="button" href="/newsletter">
          Iscriviti gratuitamente
        </Link>
        <p className="small-print">
          Riceverai solo aggiornamenti divulgativi. Nessuna proposta commerciale o consulenza. Puoi annullare l&apos;iscrizione in qualsiasi momento tramite il link presente in ogni email.
        </p>
      </section>
    </Layout>
  );
}
