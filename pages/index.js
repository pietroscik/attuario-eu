import Layout from "../components/Layout";

const highlights = [
  {
    title: "Teoria attuariale chiara",
    text: "Formule spiegate con esempi numerici, grafici interattivi e mini-quiz per fissare i concetti chiave.",
    link: "/teoria",
  },
  {
    title: "Applicazioni pratiche",
    text: "Dalla tariffazione vita e danni alla gestione delle riserve: casi studio e workflow replicabili.",
    link: "/applicazioni",
  },
  {
    title: "Risorse autorevoli",
    text: "Raccolta curata di siti, blog e community attuariali per ispirarti e restare aggiornato.",
    link: "/risorse",
  },
  {
    title: "Strumenti e dataset",
    text: "Tutorial su Excel, R e Python, template scaricabili e calcolatori online per esercitarsi.",
    link: "/strumenti",
  },
  {
    title: "Radar normativo",
    text: "Aggiornamenti su Solvency II, IFRS 17 e ricerca accademica con sintesi divulgative.",
    link: "/notizie",
  },
];

const personas = [
  {
    title: "Studente",
    copy:
      "Ripassa le basi matematiche, prova i calcolatori e consulta le guide sugli esami universitari e sulle certificazioni professionali.",
  },
  {
    title: "Professionista",
    copy:
      "Approfondisci ALM, risk management e novità regolamentari con schede sintetiche e riferimenti alla letteratura di settore.",
  },
  {
    title: "Curioso",
    copy:
      "Scopri come gli attuari analizzano rischi assicurativi e finanziari attraverso esempi concreti e articoli spiegati semplice.",
  },
];

const updates = [
  "Nuove schede su IFRS 17 e interazione con Solvency II nella sezione Notizie.",
  "Script Python per simulare tavole di mortalità generazionali nella sezione Strumenti.",
  "Serie “Attuario nel mondo reale”: focus su ruoli in previdenza complementare.",
];

export default function Home() {
  return (
    <Layout
      title="attuario.eu"
      intro="attuario.eu è una piattaforma italiana dedicata a studenti, professionisti e curiosi del mondo attuariale. Qui trovi spiegazioni rigorose ma leggibili, strumenti didattici e aggiornamenti per orientarti tra teoria, pratica e normative."
      metaDescription="Divulgazione attuariale indipendente con teoria, applicazioni, risorse e strumenti didattici. Nessuna consulenza professionale, solo conoscenza condivisa."
      hideHeader
    >
      <section className="hero">
        <span className="tagline">Divulgazione attuariale indipendente</span>
        <h1>La scienza del rischio, raccontata in modo accessibile</h1>
        <p>
          attuario.eu è una piattaforma italiana dedicata a studenti, professionisti e curiosi del mondo attuariale. Qui trovi
          spiegazioni rigorose ma leggibili, strumenti didattici e aggiornamenti per orientarti tra teoria, pratica e normative.
        </p>
        <div className="hero-actions">
          <a className="button" href="/newsletter">
            Iscriviti alla newsletter
          </a>
          <a className="button secondary" href="#sezioni">
            Esplora le sezioni
          </a>
        </div>
      </section>

      <section id="sezioni" className="section">
        <div className="card-grid">
          {highlights.map(({ title, text, link }) => (
            <a key={title} className="link-card" href={link}>
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Percorsi consigliati</h2>
        <div className="persona-grid">
          {personas.map(({ title, copy }) => (
            <div key={title} className="card">
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Aggiornamenti recenti</h2>
        <ul className="list">
          {updates.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section info-panel">
        <h2>Community & collaborazioni</h2>
        <p>
          attuario.eu accoglie contributi accademici, segnalazioni di eventi e richieste di collaborazione su progetti divulgativi.
          Non vengono erogate consulenze professionali, ma siamo felici di raccontare e condividere esperienze del settore.
        </p>
        <a className="button secondary" href="/contatti">
          Scrivici un messaggio
        </a>
      </section>
    </Layout>
  );
}
