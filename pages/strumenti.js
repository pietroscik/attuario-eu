import Layout from "../components/Layout";

const resources = [
  {
    title: "Excel e fogli di calcolo",
    details: [
      "Template per valore attuale di rendite e premi unici",
      "Dashboard per analisi sinistri con pivot e grafici dinamici",
      "Modelli di duration e immunizzazione con esempi passo-passo",
    ],
  },
  {
    title: "R e Python",
    details: [
      "Notebook su pacchetti lifecontingencies, actuar e ChainLadder",
      "Esempi di simulazioni Monte Carlo per rischi demografici",
      "Script per calcolare riserve con metodi stocastici",
    ],
  },
  {
    title: "Dataset e repository",
    details: [
      "Collezione curata di dataset pubblici: HMD, CAS Loss Reserving, Eurostat",
      "Guide per pulizia dati e anonimizzazione",
      "Suggerimenti per presentare insight a stakeholder non tecnici",
    ],
  },
];

export default function Strumenti() {
  return (
    <Layout
      title="Strumenti & calcolatori"
      eyebrow="Toolkit operativo"
      intro="Tutorial, esempi di codice e risorse aperte per esercitarsi con modelli attuariali. Gli strumenti sono pensati a fini educativi e non sostituiscono attività professionale."
    >
      <section className="card-grid">
        {resources.map(({ title, details }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <ul className="list">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Calcolatori online</h2>
        <p>Prova i tool interattivi per calcolare premi puri, riserve semplificate e indicatori di sopravvivenza.</p>
        <a className="button secondary" href="/calcolatori">
          Vai ai calcolatori
        </a>
        <p className="small-print">
          Uso consentito solo per studio e divulgazione. Nessuna garanzia di accuratezza per applicazioni commerciali.
        </p>
      </section>
    </Layout>
  );
}
