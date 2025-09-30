import Link from "next/link";
import { useMemo, useState } from "react";

import Layout from "../components/Layout";

import {
  THEORY_RESEARCH_HIGHLIGHTS,
  THEORY_TOPICS,
} from "../content/pages/teoria";

const RESEARCH_CARDS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => !item.slug);
const RESEARCH_LINKS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => item.slug);

const DIFFICULTY_LABELS = {
  base: "Base",
  intermedio: "Intermedio",
  avanzato: "Avanzato",
};

const DIFFICULTY_OPTIONS = [
  { value: "all", label: "Tutti i livelli" },
  { value: "base", label: "Livello base" },
  { value: "intermedio", label: "Livello intermedio" },
  { value: "avanzato", label: "Livello avanzato" },
];

export default function Teoria() {
  const [activeDifficulty, setActiveDifficulty] = useState("all");

  const filteredTopics = useMemo(
    () =>
      THEORY_TOPICS.map((topic) => ({
        ...topic,
        items: topic.items.filter((item) =>
          activeDifficulty === "all" ? true : item.difficulty === activeDifficulty
        ),
      })).filter((topic) => topic.items.length > 0),
    [activeDifficulty]
  );

  return (
    <Layout
      title="Teoria attuariale"
      eyebrow="Libreria didattica"
      intro="Una libreria digitale per consolidare le basi quantitative dell’attuario. Ogni modulo offre spiegazioni progressive, esempi numerici scaricabili e quiz auto-valutativi per monitorare il livello di comprensione."
    >
      <section className="section">
        <h2 className="visually-hidden">Filtra per livello di difficoltà</h2>
        <div
          className="difficulty-controls"
          role="group"
          aria-label="Filtra contenuti per livello di difficoltà"
        >
          {DIFFICULTY_OPTIONS.map(({ value, label }) => {
            const isActive = value === activeDifficulty;
            return (
              <button
                key={value}
                type="button"
                className={`difficulty-button${isActive ? " is-active" : ""}`}
                aria-pressed={isActive}
                onClick={() => setActiveDifficulty(value)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="card-grid">
        {filteredTopics.map(({ title, items, level }) => (
          <article key={title} className="card theory-card">
            <div className="theory-card__header">
              <h2>{title}</h2>
              {level ? (
                <span className={`difficulty-badge difficulty-${level}`}>
                  {DIFFICULTY_LABELS[level] ?? level}
                </span>
              ) : null}
            </div>
            <ul className="list theory-list">
              {items.map(({ label, summary, resources, difficulty }) => (
                <li key={label}>
                  <details>
                    <summary>
                      <span className="summary-content">
                        <span>{label}</span>
                        {difficulty ? (
                          <span className={`difficulty-badge difficulty-${difficulty}`}>
                            {DIFFICULTY_LABELS[difficulty] ?? difficulty}
                          </span>
                        ) : null}
                      </span>
                    </summary>
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
        .visually-hidden {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }

        .difficulty-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .difficulty-button {
          background: #fff;
          border: 1px solid rgba(15, 23, 42, 0.2);
          border-radius: 999px;
          color: #0f172a;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.5rem 1rem;
          transition: all 0.2s ease;
        }

        .difficulty-button:focus-visible {
          outline: 3px solid rgba(37, 99, 235, 0.45);
          outline-offset: 2px;
        }

        .difficulty-button.is-active {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: #fff;
        }

        .theory-card__header {
          align-items: center;
          display: flex;
          gap: 0.75rem;
          justify-content: space-between;
          margin-bottom: 0.75rem;
        }

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

        .summary-content {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: space-between;
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

        .difficulty-badge {
          align-items: center;
          border-radius: 999px;
          display: inline-flex;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 0.2rem 0.65rem;
          text-transform: uppercase;
        }

        .difficulty-base {
          background: rgba(16, 185, 129, 0.15);
          color: #047857;
        }

        .difficulty-intermedio {
          background: rgba(59, 130, 246, 0.15);
          color: #1d4ed8;
        }

        .difficulty-avanzato {
          background: rgba(139, 92, 246, 0.15);
          color: #6d28d9;
        }
      `}</style>
    </Layout>
  );
}
