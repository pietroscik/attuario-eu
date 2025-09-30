import Link from "next/link";

import Layout from "../components/Layout";

import { TOOL_RESOURCES } from "../content/pages/strumenti";

export default function Strumenti() {
  return (
    <Layout
      title="Strumenti & calcolatori"
      eyebrow="Toolkit operativo"
      intro="Tutorial, esempi di codice e risorse aperte per esercitarsi con modelli attuariali. Gli strumenti sono pensati a fini educativi e non sostituiscono attività professionale."
    >
      <section className="card-grid">
        {TOOL_RESOURCES.map(({ title, description, resources }) => (
          <article key={title} className="card toolkit-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list">
              {resources.map(({ label, summary, href, external }) => (
                <li key={label}>
                  <details>
                    <summary>{label}</summary>
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

        .toolkit-card p {
          margin: 0.5rem 0 0.75rem;
        }

        .toolkit-card a {
          color: var(--link-color, #1d4ed8);
          font-weight: 600;
        }
      `}</style>
    </Layout>
  );
}
