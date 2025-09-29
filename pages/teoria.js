import Layout from "../components/Layout";

const topics = [
  {
    title: "Matematica attuariale di base",
    items: [
      "Valore attuale atteso e criteri di equivalenza",
      "Tavole di mortalità discrete e continue",
      "Rendite temporanee, vitalizie e differite",
    ],
  },
  {
    title: "Modelli di sopravvivenza e rischio",
    items: [
      "Leggi di mortalità (Makeham, Gompertz)",
      "Model point e costruzione di tavole generazionali",
      "Probabilità congiunte e copule per rischi multipli",
    ],
  },
  {
    title: "Teoria delle assicurazioni",
    items: [
      "Premi puri, caricamenti e equilibrio tecnico",
      "Metodi di credibilità classici e Bayesiani",
      "Distribuzioni per sinistri danni e riassicurazione",
    ],
  },
  {
    title: "Riserve tecniche",
    items: [
      "Catene di Markov per sinistri vita",
      "Triangoli (Chain Ladder, Bornhuetter-Ferguson)",
      "Approccio stocastico con Bootstrap e Mack",
    ],
  },
  {
    title: "Finanza attuariale",
    items: [
      "Duration, convexity e immunizzazione",
      "Asset Liability Management (ALM)",
      "Gestione integrata del rischio con metriche VaR / TVaR",
    ],
  },
];

const researchHighlights = [
  {
    title: "📌 Micro-level stochastic loss reserving for general insurance",
    description:
      "Propone modelli granulari su singolo sinistro che combinano componenti di frequenza e severità con covariate assicurative, riducendo la dipendenza da assunzioni aggregate.",
    slug: "/wiki/ricerche-attuariali.html#antonio-plat-2014",
  },
  {
    title: "📊 The cost of financial frictions for life insurers",
    description:
      "Analizza come le restrizioni di capitale e le frizioni finanziarie influenzino prezzi, offerta di prodotti vita e allocazioni di portafoglio nel lungo periodo.",
    slug: "/wiki/ricerche-attuariali.html#koijen-yogo-2016",
  },
  {
    title:
      "🧮 On the calculation of the Solvency Capital Requirement based on nested simulations",
    description:
      "Approfondisce tecniche di simulazione annidata per il calcolo dello SCR, con focus su efficienza computazionale e accuratezza statistica.",
    slug: "/wiki/ricerche-attuariali.html#bauer-reuss-singer-2012",
  },
];

export default function Teoria() {
  return (
    <Layout
      title="Teoria attuariale"
      eyebrow="Libreria didattica"
      intro="Una libreria digitale per consolidare le basi quantitative dell’attuario. Ogni modulo offre spiegazioni progressive, esempi numerici scaricabili e quiz auto-valutativi per monitorare il livello di comprensione."
    >
      <section className="card-grid">
        {topics.map(({ title, items }) => (
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

      <section className="section info-panel">
        <h2>Approfondimenti multimediali</h2>
        <p>Ogni capitolo integra note teoriche con:</p>
        <ul className="list">
          <li>Animazioni con MathJax e grafici interattivi in Python o R.</li>
          <li>Workbook Excel / Sheets con esercizi guidati e soluzioni.</li>
          <li>Mini-quiz autogenerati per verificare la comprensione immediata.</li>
        </ul>
        <p className="small-print">
          Materiale didattico open-source con licenza CC BY-SA, ideale per corsi universitari e gruppi di studio.
        </p>
      </section>

      <section className="section info-panel">
        <h2>Ricerche consigliate</h2>
        {researchHighlights.map(({ title, description, slug }) => (
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
