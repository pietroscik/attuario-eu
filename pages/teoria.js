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
    </Layout>
  );
}
