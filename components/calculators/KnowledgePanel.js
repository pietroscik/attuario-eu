import PropTypes from "prop-types";

const LEVEL_COPY = {
  base: "Livello base",
  intermedio: "Livello intermedio",
  avanzato: "Livello avanzato",
};

export default function KnowledgePanel({ metadata }) {
  if (!metadata) {
    return null;
  }

  const {
    level,
    levelLabel,
    languages,
    hypotheses,
    academicSources,
    validity,
    connections,
  } = metadata;

  const levelText = levelLabel || LEVEL_COPY[level] || "Livello tecnico";

  return (
    <section className="knowledge-panel info-panel" aria-labelledby="knowledge-heading">
      <header className="knowledge-header">
        <div className="knowledge-level">
          <span className={`level-badge level-${level || "base"}`}>{levelText}</span>
        </div>
        {Array.isArray(languages) && languages.length > 0 && (
          <div className="language-badges" aria-label="Linguaggi di riferimento">
            {languages.map((language) => (
              <span key={language} className="language-badge">
                {language}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="knowledge-content">
        {Array.isArray(hypotheses) && hypotheses.length > 0 && (
          <section className="knowledge-section">
            <h3 id="knowledge-heading">Ipotesi utilizzate</h3>
            <ul className="bullet-list">
              {hypotheses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {Array.isArray(academicSources) && academicSources.length > 0 && (
          <section className="knowledge-section">
            <h3>Fonti accademiche</h3>
            <ul className="resource-list">
              {academicSources.map(({ label, detail, href }) => (
                <li key={label}>
                  <strong>{label}</strong>
                  <p>{detail}</p>
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      Consulta la fonte
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        )}

        {Array.isArray(validity) && validity.length > 0 && (
          <section className="knowledge-section">
            <h3>Limiti e ambiti di validità</h3>
            <ul className="bullet-list">
              {validity.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {Array.isArray(connections) && connections.length > 0 && (
          <section className="knowledge-section">
            <h3>Collegamenti teoria ↔ pratica ↔ normativa</h3>
            <ul className="connection-list">
              {connections.map(({ type, description, href }) => (
                <li key={`${type}-${description.slice(0, 30)}`}>
                  <span className="connection-type">{type}</span>
                  <p>
                    {description}
                    {href && (
                      <>
                        {" "}
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          Approfondisci
                        </a>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <style jsx>{`
        .knowledge-panel {
          display: grid;
          gap: 1.5rem;
        }

        .knowledge-header {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: space-between;
        }

        .level-badge {
          border-radius: 999px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          padding: 0.35rem 0.9rem;
        }

        .level-base {
          background: rgba(59, 130, 246, 0.15);
          color: #1d4ed8;
        }

        .level-intermedio {
          background: rgba(124, 58, 237, 0.15);
          color: #6d28d9;
        }

        .level-avanzato {
          background: rgba(220, 38, 38, 0.15);
          color: #b91c1c;
        }

        .language-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .language-badge {
          background: rgba(15, 23, 42, 0.08);
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.25rem 0.6rem;
          text-transform: uppercase;
        }

        .knowledge-section h3 {
          font-size: 1.05rem;
          margin-bottom: 0.65rem;
        }

        .bullet-list {
          display: grid;
          gap: 0.5rem;
          margin: 0;
          padding-left: 1.2rem;
        }

        .resource-list,
        .connection-list {
          display: grid;
          gap: 0.9rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .resource-list li a,
        .connection-list li a {
          color: #1d4ed8;
          font-weight: 600;
        }

        .resource-list li p,
        .connection-list li p {
          margin: 0.35rem 0 0;
        }

        .connection-type {
          background: rgba(15, 23, 42, 0.08);
          border-radius: 999px;
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.55rem;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .knowledge-panel {
            gap: 1.25rem;
          }

          .knowledge-header {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}

KnowledgePanel.propTypes = {
  metadata: PropTypes.shape({
    level: PropTypes.oneOf(["base", "intermedio", "avanzato"]),
    levelLabel: PropTypes.string,
    languages: PropTypes.arrayOf(PropTypes.string),
    hypotheses: PropTypes.arrayOf(PropTypes.string),
    academicSources: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        detail: PropTypes.string.isRequired,
        href: PropTypes.string,
      })
    ),
    validity: PropTypes.arrayOf(PropTypes.string),
    connections: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        href: PropTypes.string,
      })
    ),
  }),
};
