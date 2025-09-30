import Link from "next/link";
import { useMemo, useState } from "react";

export const SECTION_STATUS_LABELS = {
  verified: "Contenuti verificati",
  "needs-review": "Da verificare",
  upcoming: "In sviluppo",
};

const STATUS_FILTERS = [
  { value: "all", label: "Tutte" },
  { value: "verified", label: SECTION_STATUS_LABELS.verified },
  { value: "needs-review", label: SECTION_STATUS_LABELS["needs-review"] },
  { value: "upcoming", label: SECTION_STATUS_LABELS.upcoming },
];

function getStatusClass(status) {
  switch (status) {
    case "verified":
      return "status-pill status-pill--verified";
    case "needs-review":
      return "status-pill status-pill--needs-review";
    case "upcoming":
      return "status-pill status-pill--upcoming";
    default:
      return "status-pill";
  }
}

export default function SectionAuditBoard({ sections }) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredSections = useMemo(() => {
    return sections.filter((section) => {
      const matchesStatus =
        statusFilter === "all" || section.status === statusFilter;

      if (!matchesStatus) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        section.label,
        section.summary,
        section.statusNote,
        ...(section.metrics?.map(({ label, value }) => `${label} ${value}`) ?? []),
        ...(section.sources?.map(({ label, description }) => `${label} ${description ?? ""}`) ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery, sections, statusFilter]);

  return (
    <div className="section-audit" aria-live="polite">
      <form className="section-audit__controls" role="search" aria-label="Filtro sezioni">
        <label className="visually-hidden" htmlFor="section-audit-search">
          Cerca per titolo o contenuto
        </label>
        <input
          id="section-audit-search"
          type="search"
          placeholder="Cerca per titolo, fonti o note"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <fieldset>
          <legend className="visually-hidden">Filtra per stato di verifica</legend>
          <div role="radiogroup" aria-label="Stato della sezione" className="status-filter">
            {STATUS_FILTERS.map(({ value, label }) => {
              const isActive = statusFilter === value;

              return (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={isActive}
                  className={`status-filter__button${isActive ? " is-active" : ""}`}
                  onClick={() => setStatusFilter(value)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </fieldset>
      </form>

      <p className="section-audit__count" role="status">
        {filteredSections.length} sezione{filteredSections.length === 1 ? "" : "i"} trovate
      </p>

      <div className="section-audit__grid">
        {filteredSections.map(({
          label,
          href,
          summary,
          status,
          statusNote,
          metrics,
          sources,
        }) => (
          <article key={label} className="section-audit__card" data-status={status}>
            <div className="section-audit__card-header">
              <h3>{label}</h3>
              <span className={getStatusClass(status)}>{SECTION_STATUS_LABELS[status] ?? status}</span>
            </div>
            <p className="section-audit__summary">{summary}</p>
            {statusNote ? <p className="section-audit__note">{statusNote}</p> : null}
            {metrics?.length ? (
              <dl className="section-audit__metrics">
                {metrics.map(({ label: metricLabel, value }) => (
                  <div key={`${label}-${metricLabel}`} className="section-audit__metric">
                    <dt>{metricLabel}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {sources?.length ? (
              <div className="section-audit__sources">
                <h4>Fonti e collegamenti</h4>
                <ul>
                  {sources.map(({ label: sourceLabel, href: sourceHref, verified, type, description }) => (
                    <li key={`${label}-${sourceLabel}`}>
                      {sourceHref ? (
                        sourceHref.startsWith("http") ? (
                          <a href={sourceHref} target="_blank" rel="noopener noreferrer">
                            {sourceLabel}
                          </a>
                        ) : (
                          <Link href={sourceHref}>{sourceLabel}</Link>
                        )
                      ) : (
                        <span>{sourceLabel}</span>
                      )}
                      <span className="section-audit__source-meta">
                        {type === "internal" ? "Percorso interno" : "Fonte esterna"}
                        {verified === false ? " · da verificare" : ""}
                        {description ? ` · ${description}` : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div className="section-audit__footer">
              <Link className="button secondary" href={href}>
                Apri sezione
              </Link>
            </div>
          </article>
        ))}
      </div>

      <style jsx>{`
        .section-audit__controls {
          align-items: center;
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .section-audit__controls input[type="search"] {
          flex: 1 1 220px;
          border: 1px solid rgba(148, 163, 184, 0.5);
          border-radius: 12px;
          padding: 0.65rem 1rem;
          font-size: 1rem;
        }

        fieldset {
          border: none;
          margin: 0;
          padding: 0;
        }

        .status-filter {
          display: inline-flex;
          background: rgba(15, 23, 42, 0.05);
          border-radius: 999px;
          padding: 0.25rem;
          gap: 0.25rem;
        }

        .status-filter__button {
          background: transparent;
          border: none;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 600;
          padding: 0.45rem 0.9rem;
          color: #0f172a;
        }

        .status-filter__button.is-active {
          background: #1d4ed8;
          color: #fff;
        }

        .status-filter__button:focus-visible {
          outline: 2px solid #1d4ed8;
          outline-offset: 2px;
        }

        .section-audit__count {
          font-weight: 600;
          margin: 0 0 1rem;
        }

        .section-audit__grid {
          display: grid;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .section-audit__grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        .section-audit__card {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.4);
          border-radius: 16px;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.25rem;
        }

        .section-audit__card-header {
          align-items: center;
          display: flex;
          gap: 0.75rem;
          justify-content: space-between;
        }

        .section-audit__summary {
          margin: 0;
        }

        .section-audit__note {
          background: rgba(250, 204, 21, 0.18);
          border-left: 4px solid #d97706;
          border-radius: 8px;
          font-size: 0.9rem;
          margin: 0;
          padding: 0.5rem 0.75rem;
        }

        .section-audit__metrics {
          display: grid;
          gap: 0.25rem 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          margin: 0;
        }

        .section-audit__metric {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .section-audit__metric dt {
          color: rgba(15, 23, 42, 0.65);
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .section-audit__metric dd {
          margin: 0;
          font-weight: 600;
        }

        .section-audit__sources ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 0.35rem;
        }

        .section-audit__sources a {
          color: #1d4ed8;
          font-weight: 600;
        }

        .section-audit__source-meta {
          display: block;
          font-size: 0.8rem;
          color: rgba(71, 85, 105, 0.9);
        }

        .section-audit__footer {
          margin-top: auto;
        }

        .status-pill {
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          text-transform: uppercase;
          background: rgba(148, 163, 184, 0.2);
          color: #1f2937;
        }

        .status-pill--verified {
          background: rgba(34, 197, 94, 0.18);
          color: #047857;
        }

        .status-pill--needs-review {
          background: rgba(250, 204, 21, 0.18);
          color: #b45309;
        }

        .status-pill--upcoming {
          background: rgba(59, 130, 246, 0.15);
          color: #1d4ed8;
        }

        .visually-hidden {
          clip: rect(0 0 0 0);
          border: 0;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      `}</style>
    </div>
  );
}
