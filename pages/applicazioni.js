import Link from "next/link";

import Layout from "../components/Layout";

import { APPLICATION_AREAS } from "../content/pages/applicazioni";

export default function Applicazioni() {
  return (
    <Layout
      title="Applicazioni attuariali"
      eyebrow="Dal modello all’impatto"
      intro="Come trasformare la teoria in decisioni operative end‑to‑end. I moduli di questa sezione propongono workflow replicabili, dataset aperti e suggerimenti per presentazioni a stakeholder tecnici e non tecnici."
    >
      <section className="card-grid">
        {APPLICATION_AREAS.map(({ title, description, cases }) => (
          <article key={title} className="card application-card">
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="small-print">
              Ogni blocco collega i concetti teorici alle sezioni{" "}
              <Link href="/teoria">Teoria</Link>,{" "}
              <Link href="/casi">Case study</Link> e{" "}
              <Link href="/calcolatori">Calcolatori</Link>, così puoi vedere la stessa idea declinata in formule, esempi numerici e workflow operativi.
            </p>
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
        <p className="small-print">
          I materiali sono pensati per studio e divulgazione: non sostituiscono in alcun modo valutazioni ufficiali di bilancio, pareri professionali o policy aziendali.
        </p>
        <div className="cta-row">
          <Link className="button" href="/casi">
            Esplora i case study operativi
          </Link>
          <Link className="button secondary" href="/strumenti">
            Apri i calcolatori
          </Link>
        </div>
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

        .cta-row {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
      `}</style>
    </Layout>
  );
}
