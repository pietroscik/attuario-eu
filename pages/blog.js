import Link from "next/link";

import Layout from "../components/Layout";

import { BLOG_POSTS } from "../content/pages/blog";

const DATE_FORMATTER = new Intl.DateTimeFormat("it-IT", {
  dateStyle: "long",
});

const formatUpdatedAt = (value) => {
  if (!value) {
    return "";
  }
  try {
    return DATE_FORMATTER.format(new Date(value));
  } catch (error) {
    return value;
  }
};

export default function Blog() {
  return (
    <Layout
      title="Blog & approfondimenti"
      eyebrow="Editoriale"
      intro="Articoli divulgativi, casi studio e rubriche mensili per avvicinare la scienza attuariale a un pubblico più ampio. Nessuna consulenza, solo condivisione di conoscenza."
    >
      <section className="card-grid">
        {BLOG_POSTS.map(({ title, summary, author, role, reviewedBy, updatedAt }) => (
          <article key={title} className="card blog-card">
            <h2>{title}</h2>
            <p>{summary}</p>
            <div className="post-meta">
              <p className="post-author">
                <span className="post-author__name">{author}</span>
                <span className="post-author__role">{role}</span>
              </p>
              {reviewedBy && <p className="post-review">Revisionato da {reviewedBy}</p>}
              {updatedAt && (
                <p className="post-date">Aggiornato il {formatUpdatedAt(updatedAt)}</p>
              )}
            </div>
          </article>
        ))}
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

      <style jsx>{`
        .blog-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .post-meta {
          border-top: 1px solid rgba(15, 23, 42, 0.08);
          display: grid;
          gap: 0.35rem;
          margin-top: 0.5rem;
          padding-top: 0.75rem;
        }

        .post-author {
          align-items: baseline;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          font-weight: 600;
        }

        .post-author__name {
          color: #0f172a;
        }

        .post-author__role {
          background: rgba(99, 102, 241, 0.12);
          border-radius: 999px;
          color: #3730a3;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.15rem 0.6rem;
          text-transform: uppercase;
        }

        .post-review,
        .post-date {
          color: #334155;
          font-size: 0.9rem;
          margin: 0;
        }
      `}</style>
    </Layout>
  );
}
