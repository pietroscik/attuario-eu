import Link from "next/link";

import Layout from "../components/Layout";

import {
  THEORY_RESEARCH_HIGHLIGHTS,
  THEORY_TOPICS,
} from "../content/pages/teoria";

const RESEARCH_CARDS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => !item.slug);
const RESEARCH_LINKS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => item.slug);

export default function Teoria() {
  return (
    <Layout
      title="Teoria attuariale"
      eyebrow="Libreria didattica"
      intro="Una libreria digitale per consolidare le basi quantitative dell’attuario. Ogni modulo offre spiegazioni progressive, esempi numerici scaricabili e quiz auto-valutativi per monitorare il livello di comprensione."
    >
      <section className="card-grid">
        {THEORY_TOPICS.map(({ title, items }) => (
          <article key={title} className="card theory-card">
            <h2>{title}</h2>
            <ul className="list theory-list">
              {items.map(({ label, summary, resources }) => (
                <li key={label}>
                  <details>
                    <summary>{label}</summary>
                    <p>{summary}</p>
                    {resources?.length ? (
                      <ul className="resource-links">
                        {resources.map(({ label: resourceLabel, href, external }) => (
                          <li key={resourceLabel}>
                            {external ? (
                              <a href={href} target="_blank" rel="noopener noreferrer">
                                {resourceLabel}
                              </a>
                            ) : (
                              <Link href={href}>{resourceLabel}</Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </details>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section">
        <h2>Quadri teorici fondamentali</h2>
        <div className="card-grid">
          {RESEARCH_CARDS.map(({ title, description }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
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
          Materiale didattico open-source con licenza CC BY-SA, ideale per corsi
          universitari e gruppi di studio.
        </p>
      </section>

      <section className="section info-panel">
        <h2>Ricerche consigliate</h2>
        {RESEARCH_LINKS.map(({ title, description, slug }) => (
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
            {slug.startsWith("http") ? (
              <a href={slug} target="_blank" rel="noopener noreferrer">
                Apri la scheda completa
              </a>
            ) : (
              <Link href={slug}>Apri la scheda completa</Link>
            )}
          </div>
        ))}
      </section>

      <style jsx>{`
        .theory-card details {
          background: rgba(148, 163, 184, 0.12);
          border-radius: 12px;
          margin: 0.75rem 0;
          padding: 0.75rem 1rem;
        }

        .theory-card summary {
          cursor: pointer;
          font-weight: 600;
          outline: none;
        }

        .theory-card summary::-webkit-details-marker {
          display: none;
        }

        .theory-card summary::before {
          content: "+";
          display: inline-block;
          margin-right: 0.5rem;
          transition: transform 0.2s ease;
        }

        .theory-card details[open] summary::before {
          content: "−";
        }

        .theory-card p {
          margin: 0.5rem 0 0.75rem;
        }

        .resource-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .resource-links a {
          color: var(--link-color, #1d4ed8);
          font-weight: 600;
        }
      `}</style>
    </Layout>
  );
}
