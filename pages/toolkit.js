import Link from "next/link";

import Layout from "../components/Layout";
import { SHOP_BUNDLES } from "../content/pages/toolkit";

export default function Toolkit() {
  return (
    <Layout
      title="Toolkit Open Source"
      eyebrow="Risorse gratuite"
      intro="Raccolta di risorse gratuite a scopo didattico. Tutti i file sono accompagnati da disclaimer di utilizzo formativo."
    >
      <section className="section" aria-labelledby="shop-bundle">
        <h2 id="shop-bundle">Kit disponibili</h2>
        <div className="card-grid">
          {SHOP_BUNDLES.map(({ title, description, includes }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="list">
                {includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-panel" aria-labelledby="shop-supporto">
        <h2 id="shop-supporto">Supporto e aggiornamenti</h2>
        <p>
          Ogni kit include una bacheca changelog e un canale dedicato nella community. Se hai suggerimenti o vuoi proporre un nuovo strumento scrivici da{" "}
          <Link href="/contatti">Contatti</Link>{" "}
          indicando obiettivi e requisiti funzionali.
        </p>
        <p>
          Per assistenza puoi anche contattarci via email a{" "}
          <a href="mailto:info@attuario.eu">info@attuario.eu</a>.
        </p>
        <p className="small-print">
          Tutti i materiali sono pensati per fini educativi e divulgativi. Non costituiscono consulenza professionale né sostituiscono le verifiche richieste da regolatori o auditor.
        </p>
      </section>
    </Layout>
  );
}
