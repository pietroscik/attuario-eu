import Layout from "../components/Layout";

const sections = [
  {
    title: "Istituzioni e formazione",
    description: "Portali ufficiali e accademici da cui attingere documenti tecnici, normativa e percorsi di studio.",
    items: [
      {
        name: "Ordine Nazionale degli Attuari",
        url: "https://www.ordineattuari.it",
        note: "Sezioni su chi è l'attuario, linee guida e documenti professionali.",
      },
      {
        name: "Scuola di Attuariato",
        url: "https://www.scuoladiattuariato.it",
        note: "Calendario di corsi, aggiornamenti formativi e seminari italiani.",
      },
      {
        name: "Institute and Faculty of Actuaries – Blog",
        url: "https://blog.actuaries.org.uk",
        note: "Approfondimenti professionali e riflessioni dei membri IFoA.",
      },
    ],
  },
  {
    title: "Blog e magazine attuariali",
    description: "Siti divulgativi e tecnici con articoli su carriera, modelli quantitativi e tendenze InsurTech.",
    items: [
      {
        name: "ProActuary",
        url: "https://www.proactuary.com",
        note: "Guide su carriera, tecnologia attuariale e analisi delle competenze richieste.",
      },
      {
        name: "Inspiring Actuaries",
        url: "https://www.inspiringactuaries.com",
        note: "Storie personali e consigli per studenti e professionisti emergenti.",
      },
      {
        name: "The Actuarial Club",
        url: "https://theactuarialclub.com",
        note: "Tutorial pratici su reserving, GLM, esami e strumenti software.",
      },
    ],
  },
  {
    title: "Community e risorse collaborative",
    description: "Spazi per confrontarsi, reperire dataset e partecipare a progetti divulgativi.",
    items: [
      {
        name: "Actuarial Outpost",
        url: "https://www.actuarialoutpost.com",
        note: "Forum internazionale per scambio di materiali, discussioni e supporto agli esami.",
      },
      {
        name: "SSRN – Actuarial Science",
        url: "https://www.ssrn.com/index.cfm/en/actuarial-science/",
        note: "Working paper e ricerche emergenti su rischio, solvibilità e longevità.",
      },
      {
        name: "Human Mortality Database",
        url: "https://www.mortality.org",
        note: "Dataset demografici open source per analisi di longevità e demografia.",
      },
    ],
  },
];

export default function Risorse() {
  return (
    <Layout
      title="Risorse attuariali consigliate"
      eyebrow="Directory curata"
      intro="Una raccolta di portali, blog e community da esplorare per approfondire la professione attuariale. Ogni link rimanda a contenuti esterni affidabili: verifica sempre termini di utilizzo e diritti di autore."
    >
      <section className="card-grid">
        {sections.map(({ title, description, items }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list resource-list">
              {items.map(({ name, url, note }) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                  <span className="resource-note">{note}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Come contribuire</h2>
        <p>
          Hai scoperto un sito, un dataset o un progetto open source utile alla community attuariale? Scrivici dalla pagina
          <a href="/contatti"> Contatti</a> e lo valuteremo per l'inserimento in questa directory.
        </p>
        <p className="small-print">
          Le risorse elencate sono fornite a titolo informativo; attuario.eu non fornisce consulenza né garantisce l'aggiornamento continuo dei contenuti esterni.
        </p>
      </section>
    </Layout>
  );
}
