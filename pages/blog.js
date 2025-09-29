import Layout from "../components/Layout";

import { BLOG_POSTS } from "../content/pages/blog";

export default function Blog() {
  return (
    <Layout
      title="Blog & approfondimenti"
      eyebrow="Editoriale"
      intro="Articoli divulgativi, casi studio e rubriche mensili per avvicinare la scienza attuariale a un pubblico più ampio. Nessuna consulenza, solo condivisione di conoscenza."
    >
      <section className="card-grid">
        {BLOG_POSTS.map(({ title, summary }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{summary}</p>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Newsletter “Spiegato semplice”</h2>
        <p>
          Una email al mese con il riassunto degli articoli pubblicati, link agli eventi e anticipazioni sui nuovi
          strumenti.
        </p>
        <a className="button" href="/newsletter">
          Iscriviti
        </a>
      </section>

      <section className="section info-panel">
        <h2>Mini-corso gratuito: IFRS 17 Essentials</h2>
        <p>
          Tre lezioni on-demand per ripercorrere il framework IASB, esempi numerici e materiali di approfondimento
          consigliati da EFRAG e actuarial task force internazionali.
        </p>
        <a className="button" href="/risorse/ifrs17-essentials">
          Accedi al mini-corso
        </a>
      </section>
    </Layout>
  );
}
