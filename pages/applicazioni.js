import Link from "next/link";

import Layout from "../components/Layout";

import { APPLICATION_AREAS } from "../content/pages/applicazioni";

export default function Applicazioni() {
  return (
    <Layout
      title="Applicazioni attuariali"
      eyebrow="Dal modello all’impatto"
      intro="Come trasformare la teoria in decisioni operative. I moduli di questa sezione propongono workflow replicabili, dataset aperti e suggerimenti per presentazioni a stakeholder non tecnici."
    >
      <section className="card-grid">
        {APPLICATION_AREAS.map(({ title, description, cases }) => (
          <article key={title} className="card application-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list">
              {cases.map(({ label, summary, href }) => (
                <li key={label}>
                  <details>
                    <summary>{label}</summary>
                    <p>{summary}</p>
                    {href.startsWith("http") ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        Apri approfondimento
                      </a>
                    ) : (
                      <Link href={href}>Apri approfondimento</Link>
                    )}
                  </details>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Case study guidati</h2>
        <p>
          Ogni area include schede operative scaricabili con dataset di esempio, script di riferimento e indicazioni normative
          da integrare nei deliverable per stakeholder tecnici e non tecnici.
        </p>
        <ul className="list">
          <li>Dataset anonimi pronti per l’analisi in Excel, R o Python.</li>
          <li>Notebook con codice commentato e visualizzazioni.</li>
          <li>Template di presentazione per raccontare i risultati a management e regulator.</li>
        </ul>
        <p className="small-print">Uso consentito esclusivamente a fini didattici e di studio.</p>
      </section>

      <style jsx>{`
        .application-card details {
          background: rgba(59, 130, 246, 0.1);
          border-radius: 12px;
          margin: 0.75rem 0;
          padding: 0.75rem 1rem;
        }

        .application-card summary {
          cursor: pointer;
          font-weight: 600;
        }

        .application-card summary::-webkit-details-marker {
          display: none;
        }

        .application-card summary::before {
          content: "+";
          display: inline-block;
          margin-right: 0.5rem;
        }

        .application-card details[open] summary::before {
          content: "−";
        }

        .application-card p {
          margin: 0.5rem 0 0.75rem;
        }

        .application-card a {
          color: var(--link-color, #1d4ed8);
          font-weight: 600;
        }
      `}</style>
    </Layout>
  );
}
