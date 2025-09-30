import Link from "next/link";
import { useMemo, useState } from "react";

import Layout from "../components/Layout";

import { TOOL_RESOURCES } from "../content/pages/strumenti";

const LANGUAGE_LABELS = {
  R: "R",
  Python: "Python",
};

const LANGUAGE_OPTIONS = [
  { value: "R", label: "Risorse R" },
  { value: "Python", label: "Risorse Python" },
];

export default function Strumenti() {
  const [activeLanguages, setActiveLanguages] = useState(() => new Set());

  const toggleLanguage = (language) => {
    setActiveLanguages((prev) => {
      const next = new Set(prev);
      if (next.has(language)) {
        next.delete(language);
      } else {
        next.add(language);
      }
      return next;
    });
  };

  const clearFilters = () => {
    setActiveLanguages(new Set());
  };

  const filteredSections = useMemo(() => {
    const hasFilter = activeLanguages.size > 0;
    return TOOL_RESOURCES.map((section) => ({
      ...section,
      resources: section.resources.filter(({ languages = [] }) => {
        if (!hasFilter) {
          return true;
        }
        if (!languages.length) {
          return false;
        }
        return languages.some((language) => activeLanguages.has(language));
      }),
    })).filter((section) => section.resources.length > 0);
  }, [activeLanguages]);

  const hasActiveFilter = activeLanguages.size > 0;

  return (
    <Layout
      title="Strumenti & calcolatori"
      eyebrow="Toolkit operativo"
      intro="Tutorial, esempi di codice e risorse aperte per esercitarsi con modelli attuariali. Gli strumenti sono pensati a fini educativi e non sostituiscono attività professionale."
    >
      <section className="section">
        <h2 className="visually-hidden">Filtra risorse per linguaggio</h2>
        <div
          className="language-controls"
          role="group"
          aria-label="Filtra le risorse per linguaggio di scripting"
        >
          <button
            type="button"
            className={`language-button reset${hasActiveFilter ? "" : " is-disabled"}`}
            onClick={clearFilters}
            disabled={!hasActiveFilter}
          >
            Mostra tutte
          </button>
          {LANGUAGE_OPTIONS.map(({ value, label }) => {
            const isActive = activeLanguages.has(value);
            return (
              <button
                key={value}
                type="button"
                className={`language-button${isActive ? " is-active" : ""}`}
                aria-pressed={isActive}
                onClick={() => toggleLanguage(value)}
              >
                {label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="card-grid">
        {filteredSections.map(({ title, description, resources }) => (
          <article key={title} className="card toolkit-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list">
              {resources.map(({ label, summary, href, external, languages = [] }) => (
                <li key={label}>
                  <details>
                    <summary>
                      <span className="summary-content">
                        <span>{label}</span>
                        <span className="language-badges">
                          {languages.map((language) => (
                            <span
                              key={`${label}-${language}`}
                              className={`language-badge language-${language.toLowerCase()}`}
                            >
                              {LANGUAGE_LABELS[language] ?? language}
                            </span>
                          ))}
                        </span>
                      </span>
                    </summary>
                    <p>{summary}</p>
                    {external ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        Apri la risorsa
                      </a>
                    ) : (
                      <Link href={href}>Apri la risorsa</Link>
                    )}
                  </details>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Calcolatori online</h2>
        <p>Prova i tool interattivi per calcolare premi puri, riserve semplificate e indicatori di sopravvivenza.</p>
        <Link className="button secondary" href="/calcolatori">
          Vai ai calcolatori
        </Link>
        <p className="small-print">
          Uso consentito solo per studio e divulgazione. Nessuna garanzia di accuratezza per applicazioni commerciali.
        </p>
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

        .language-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .language-button {
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

        .language-button.reset {
          background: rgba(15, 23, 42, 0.05);
        }

        .language-button.is-disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        .language-button:focus-visible {
          outline: 3px solid rgba(14, 116, 144, 0.4);
          outline-offset: 2px;
        }

        .language-button.is-active {
          background: #0ea5e9;
          border-color: #0ea5e9;
          color: #fff;
        }

        .toolkit-card details {
          background: rgba(148, 163, 184, 0.12);
          border-radius: 12px;
          margin: 0.75rem 0;
          padding: 0.75rem 1rem;
        }

        .toolkit-card summary {
          cursor: pointer;
          font-weight: 600;
        }

        .toolkit-card summary::-webkit-details-marker {
          display: none;
        }

        .toolkit-card summary::before {
          content: "+";
          display: inline-block;
          margin-right: 0.5rem;
        }

        .toolkit-card details[open] summary::before {
          content: "−";
        }

        .summary-content {
          align-items: center;
          display: flex;
          gap: 0.75rem;
          justify-content: space-between;
        }

        .summary-content span:first-child {
          flex: 1;
        }

        .language-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          justify-content: flex-end;
        }

        .toolkit-card p {
          margin: 0.5rem 0 0.75rem;
        }

        .toolkit-card a {
          color: var(--link-color, #1d4ed8);
          font-weight: 600;
        }

        .language-badge {
          align-items: center;
          border-radius: 999px;
          display: inline-flex;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          padding: 0.2rem 0.65rem;
          text-transform: uppercase;
        }

        .language-r {
          background: rgba(59, 130, 246, 0.15);
          color: #1d4ed8;
        }

        .language-python {
          background: rgba(234, 179, 8, 0.18);
          color: #b45309;
        }
      `}</style>
    </Layout>
  );
}
