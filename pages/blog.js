import Link from "next/link";

import Layout from "../components/Layout";

import { BLOG_POSTS } from "../content/pages/blog";

const formatDate = (isoDate) =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function Blog() {
  return (
    <Layout
      title="Blog & approfondimenti"
      eyebrow="Editoriale"
      intro="Articoli divulgativi, casi studio e rubriche mensili per avvicinare la scienza attuariale a un pubblico più ampio. Nessuna consulenza, solo condivisione di conoscenza."
    >
      <section className="card-grid">
        {BLOG_POSTS.map(({ title, summary, author, role, reviewedBy, updatedAt }) => {
          const isReviewed = Boolean(reviewedBy);

          return (
            <article key={title} className="card">
              <h2>{title}</h2>
              <div className="metadata">
                <p className="metadata__author">
                  <strong>{author}</strong>
                  {role && ` · ${role}`}
                </p>
                <p className="metadata__details">Aggiornato il {formatDate(updatedAt)}</p>
                {isReviewed && (
                  <p className="metadata__details">
                    <span className="review-badge">Revisionato</span> da {reviewedBy}
                  </p>
                )}
              </div>
              <p>{summary}</p>
            </article>
          );
        })}
      </section>

      <section className="section info-panel">
        <h2>Newsletter “Spiegato semplice”</h2>
        <p>
          Una email al mese con il riassunto degli articoli pubblicati, link agli eventi e anticipazioni sui nuovi
          strumenti.
        </p>
        <Link className="button" href="/newsletter">
          Iscriviti
        </Link>
      </section>

      <section className="section info-panel">
        <h2>Mini-corso gratuito: IFRS 17 Essentials</h2>
        <p>
          Tre lezioni on-demand per ripercorrere il framework IASB, esempi numerici e materiali di approfondimento
          consigliati da EFRAG e actuarial task force internazionali.
        </p>
        <Link className="button" href="/risorse/ifrs17-essentials">
          Accedi al mini-corso
        </Link>
      </section>
    </Layout>
  );
}
