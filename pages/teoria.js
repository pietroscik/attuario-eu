import Link from "next/link";
import { useRef, useState } from "react";

import Layout from "../components/Layout";

import {
  THEORY_RESEARCH_HIGHLIGHTS,
  THEORY_TOPICS,
} from "../content/pages/teoria";

const RESEARCH_CARDS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => !item.slug);
const RESEARCH_LINKS = THEORY_RESEARCH_HIGHLIGHTS.filter((item) => item.slug);

const DIFFICULTY_LABELS = {
  all: "Tutti i livelli",
  base: "Base",
  intermedio: "Intermedio",
  avanzato: "Avanzato",
};

const DIFFICULTY_OPTIONS = [
  { value: "all", label: DIFFICULTY_LABELS.all },
  { value: "base", label: DIFFICULTY_LABELS.base },
  { value: "intermedio", label: DIFFICULTY_LABELS.intermedio },
  { value: "avanzato", label: DIFFICULTY_LABELS.avanzato },
];

export function TheoryTopicsContent() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const tabRefs = useRef([]);

  const handleKeyDown = (event, index) => {
    if (!tabRefs.current.length) return;
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex =
      (index + direction + DIFFICULTY_OPTIONS.length) % DIFFICULTY_OPTIONS.length;
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section aria-labelledby="difficulty-tablist" className="section">
      <div className="difficulty-filter" role="navigation">
        <div
          id="difficulty-tablist"
          role="tablist"
          aria-label="Livelli di difficoltà"
          aria-orientation="horizontal"
          className="difficulty-tabs"
        >
          {DIFFICULTY_OPTIONS.map((option, index) => {
            const isActive = selectedDifficulty === option.value;
            return (
              <button
                key={option.value}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`difficulty-tab-${option.value}`}
                aria-selected={isActive}
                aria-controls={`difficulty-panel-${option.value}`}
                tabIndex={isActive ? 0 : -1}
                className={`difficulty-tab${isActive ? " is-active" : ""}`}
                onClick={() => setSelectedDifficulty(option.value)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {DIFFICULTY_OPTIONS.map(({ value }) => {
        const isActive = selectedDifficulty === value;
        const topics =
          value === "all"
            ? THEORY_TOPICS
            : THEORY_TOPICS.filter(({ difficulty }) => difficulty === value);

        return (
          <div
            key={value}
            role="tabpanel"
            id={`difficulty-panel-${value}`}
            aria-labelledby={`difficulty-tab-${value}`}
            hidden={!isActive}
            tabIndex={isActive ? 0 : -1}
          >
            {isActive && (
              <div className="card-grid">
                {topics?.map(({ title, items, difficulty }) => (
                  <article
                    key={title}
                    className="card theory-card"
                    data-difficulty={difficulty}
                  >
                    <h2>{title}</h2>
                    <ul className="list theory-list">
                      {items
                        .filter(({ difficulty: d }) =>
                          value === "all" ? true : d === value
                        )
                        .map(({ label, summary, resources, difficulty: d }) => (
                          <li key={label}>
                            <details>
                              <summary>
                                <span className="summary-content">
                                  <span>{label}</span>
                                  <span
                                    className={`difficulty-badge difficulty-${d}`}
                                    aria-label={`Difficoltà ${DIFFICULTY_LABELS[d]}`}
                                  >
                                    {DIFFICULTY_LABELS[d]}
                                  </span>
                                </span>
                              </summary>
                              <p>{summary}</p>
                              {resources?.length ? (
                                <ul className="resource-links">
                                  {resources.map(
                                    ({ label: rLabel, href, external }) => (
                                      <li key={rLabel}>
                                        {external ? (
                                          <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            {rLabel}
                                          </a>
                                        ) : (
                                          <Link href={href}>{rLabel}</Link>
                                        )}
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : null}
                            </details>
                          </li>
                        ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default function Teoria() {
  return (
    <Layout
      title="Teoria attuariale"
      eyebrow="Libreria didattica"
      intro="Una libreria digitale per consolidare le basi quantitative dell’attuario. Ogni modulo offre spiegazioni progressive, esempi numerici scaricabili e quiz auto-valutativi per monitorare il livello di comprensione."
    >
      <TheoryTopicsContent />

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
        .difficulty-filter {
          margin-bottom: 2rem;
        }

        .difficulty-tabs {
          display: inline-flex;
          gap: 0.5rem;
          border: 1px solid rgba(15, 23, 42, 0.1);
          border-radius: 999px;
          padding: 0.25rem;
          background: rgba(15, 23, 42, 0.05);
        }

        .difficulty-tab {
          border: none;
          background: transparent;
          color: #0f172a;
          padding: 0.5rem 1rem;
          border-radius: 999px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .difficulty-tab.is-active {
          background: #2563eb;
          color: #fff;
        }

        .card-grid {
          display: grid;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .card-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
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
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
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
          border-radius: 999px;
          display: inline-flex;
          font-size: 0.75rem;
          font-weight: 700;
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
