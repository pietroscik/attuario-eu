import Layout from "../components/Layout";

const updates = [
  {
    title: "Regolamentazione",
    entries: [
      "Sintesi mensile delle novità su Solvency II, IDD e regolamenti IVASS.",
      "Schede IFRS 17 con esempi di contabilizzazione semplificata.",
      "Alert su consultazioni pubbliche europee e call for papers.",
    ],
  },
  {
    title: "Ricerca accademica",
    entries: [
      "Rassegna ASTIN Bulletin e European Actuarial Journal con highlight in italiano.",
      "Working paper selezionati da SSRN e arXiv su rischio climatico e longevity.",
      "Dataset aperti per esercitazioni (es. CAS Loss Reserving, Human Mortality Database).",
    ],
  },
  {
    title: "Eventi e community",
    entries: [
      "Calendario di seminari universitari, webinar professionali e conferenze attuariali.",
      "Recap delle iniziative degli ordini professionali e associazioni studentesche.",
      "Opportunità di call for speaker e progetti divulgativi collaborativi.",
    ],
  },
];

export default function Notizie() {
  return (
    <Layout
      title="Notizie & ricerca"
      eyebrow="Radar normativo"
      intro="Un radar sulle principali novità normative e sulla ricerca attuariale internazionale. Ogni segnalazione include link alle fonti ufficiali e una spiegazione divulgativa."
    >
      <section className="card-grid">
        {updates.map(({ title, entries }) => (
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
