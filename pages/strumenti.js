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
        {TOOL_RESOURCES.map(({ title, details }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <ul className="list">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
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
    </Layout>
  );
}
