import Link from "next/link";
import { useMemo, useState } from "react";

import Layout from "../components/Layout";
import { TOOL_RESOURCES } from "../content/pages/strumenti";

const LANGUAGE_OPTIONS = ["R", "Python"];

export default function Strumenti() {
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const filteredSections = useMemo(() => {
    return TOOL_RESOURCES.map((section) => {
      const matchingResources = section.resources.filter((resource) => {
        if (selectedLanguages.length === 0) {
          return true;
        }
        if (!resource.languages || resource.languages.length === 0) {
          return false;
        }
        return resource.languages.some((language) =>
          selectedLanguages.includes(language)
        );
      });
      return { ...section, resources: matchingResources };
    }).filter((section) => section.resources.length > 0);
  }, [selectedLanguages]);

  const hasResults = filteredSections.length > 0;

  const toggleLanguage = (language) => {
    setSelectedLanguages((current) => {
      if (current.includes(language)) {
        return current.filter((item) => item !== language);
      }
      return [...current, language];
    });
  };

  return (
    <Layout
      title="Strumenti & calcolatori"
      eyebrow="Toolkit operativo"
      intro="Tutorial, esempi di codice e risorse aperte per esercitarsi con modelli attuariali. Gli strumenti sono pensati a fini educativi e non sostituiscono attività professionale."
    >
      <section className="filter-bar" aria-label="Filtra le risorse per linguaggio">
        <fieldset>
          <legend>Filtra per linguaggio</legend>
          <div className="filter-options">
            {LANGUAGE_OPTIONS.map((language) => {
              const id = `language-${language.toLowerCase()}`;
              const isChecked = selectedLanguages.includes(language);

              return (
                <label
                  key={language}
                  className={`filter-pill ${isChecked ? "is-active" : ""}`}
                >
                  <input
                    id={id}
                    type="checkbox"
                    value={language}
                    checked={isChecked}
                    onChange={() => toggleLanguage(language)}
                  />
                  <span aria-hidden="true">{language}</span>
                  <span className="sr-only">{`Filtra per ${language}`}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </section>

      <section className="card-grid">
        {(selectedLanguages.length === 0 ? TOOL_RESOURCES : filteredSections).map(
          ({ title, description, resources }) => (
            <article key={title} className="card toolkit-card">
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className="list">
                {resources.map(({ label, summary, href, external, languages }) => (
                  <li key={label}>
                    <details>
                      <summary>
                        <span className="summary-content">
                          <span className="resource-label">{label}</span>
                          {Array.isArray(languages) && languages.length > 0 && (
                            <span className="language-badges">
                              {languages.map((language) => (
                                <span
                                  key={`${label}-${language}`}
                                  className="language-badge"
                                >
                                  {language}
                                </span>
                              ))}
                            </span>
                          )}
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
          )
        )}
        {!hasResults && (
          <p className="empty-state">
            Nessuna risorsa corrisponde ai filtri selezionati. Prova a modificare le opzioni.
          </p>
        )}
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
        .filter-bar {
          background: rgba(148, 163, 184, 0.18);
          border-radius: 14px;
          margin-bottom: 2rem;
          padding: 1rem 1.25rem;
        }

        .filter-bar fieldset {
          border: 0;
          margin: 0;
          padding: 0;
        }

        .filter-bar legend {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .filter-options {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .filter-pill {
          align-items: center;
          background: white;
          border: 1px solid rgba(15, 23, 42, 0.15);
          border-radius: 999px;
          color: #0f172a;
          cursor: pointer;
          display: inline-flex;
          font-weight: 600;
          letter-spacing: 0.01em;
          padding: 0.35rem 0.9rem;
          position: relative;
          transition: all 0.2s ease;
        }

        .filter-pill input {
          appearance: none;
          height: 100%;
          left: 0;
          margin: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .filter-pill span:first-of-type {
          pointer-events: none;
        }

        .filter-pill:is(:hover, :focus-within) {
          border-color: rgba(37, 99, 235, 0.5);
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .filter-pill.is-active {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: white;
          box-shadow: 0 0 0 4px rgba(29, 78, 216, 0.25);
        }

        .sr-only {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
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

        .resource-label {
          flex: 1;
          min-width: 0;
        }

        .language-badges {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          justify-content: flex-end;
        }

        .language-badge {
          background: rgba(37, 99, 235, 0.1);
          border: 1px solid rgba(37, 99, 235, 0.25);
          border-radius: 999px;
          color: #1d4ed8;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 0.2rem 0.55rem;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .empty-state {
          color: #475569;
          font-style: italic;
          padding: 1.5rem 0;
          text-align: center;
          width: 100%;
        }

        @media (max-width: 640px) {
          .summary-content {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.5rem;
          }

          .language-badges {
            justify-content: flex-start;
          }
        }
      `}</style>
    </Layout>
  );
}
