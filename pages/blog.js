import Layout from "../components/Layout";

const posts = [
  {
    title: "Spiegato semplice: cos’è il valore attuale atteso",
    summary: "Un’introduzione illustrata con esempi numerici e grafici interattivi per studenti e curiosi.",
  },
  {
    title: "Case study: modellare una riserva IBNR con Chain Ladder",
    summary: "Workflow completo con dataset open source, codice in R e suggerimenti di visualizzazione.",
  },
  {
    title: "IFRS 17 vs Solvency II: cosa cambia davvero",
    summary: "Guida pratica per comprendere differenze, punti di contatto e impatti sui processi attuariali.",
  },
];

export default function Blog() {
  return (
    <Layout
      title="Blog & approfondimenti"
      eyebrow="Editoriale"
      intro="Articoli divulgativi, casi studio e rubriche mensili per avvicinare la scienza attuariale a un pubblico più ampio. Nessuna consulenza, solo condivisione di conoscenza."
    >
      <section className="card-grid">
        {posts.map(({ title, summary }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{summary}</p>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Newsletter “Spiegato semplice”</h2>
        <p>Una email al mese con il riassunto degli articoli pubblicati, link agli eventi e anticipazioni sui nuovi strumenti.</p>
        <a className="button" href="/newsletter">
          Iscriviti
        </a>
      </section>
    </Layout>
  );
}
