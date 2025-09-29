import Link from "next/link";

import Layout from "../components/Layout";

import { RESOURCE_SECTIONS } from "../content/pages/risorse";

export default function Risorse() {
  return (
    <Layout
      title="Risorse attuariali consigliate"
      eyebrow="Directory curata"
      intro="Una raccolta di portali, blog e community da esplorare per approfondire la professione attuariale. Ogni link rimanda a contenuti esterni affidabili: verifica sempre termini di utilizzo e diritti di autore."
    >
      <section className="card-grid">
        {RESOURCE_SECTIONS.map(({ title, description, items }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list resource-list">
              {items.map(({ name, url, note }) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                  <span className="resource-note">{note}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Come contribuire</h2>
        <p>
          Hai scoperto un sito, un dataset o un progetto open source utile alla community attuariale? Scrivici dalla pagina{" "}
          <Link href="/contatti">Contatti</Link> e lo valuteremo per l’inserimento in questa directory.
        </p>
        <p className="small-print">
          Le risorse elencate sono fornite a titolo informativo; attuario.eu non fornisce consulenza né garantisce l’aggiornamento continuo dei contenuti esterni.
        </p>
      </section>
    </Layout>
  );
}
