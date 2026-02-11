import Link from "next/link";

import Layout from "../components/Layout";
import { SHOP_BUNDLES, SHOP_FAQ, SHOP_STEPS } from "../content/pages/shop";

export default function Shop() {
  return (
    <Layout
      title="Shop attuario.eu"
      eyebrow="Kit digitali"
      intro="Template, script e tool attuariali pronti all’uso. I kit sono pacchetti digitali scaricabili che combinano materiali pratici e aggiornamenti continui: qui trovi le proposte editoriali e il flusso di acquisto."
    >
      <section className="section info-panel" aria-labelledby="shop-definition">
        <h2 id="shop-definition">Che cos’è un kit digitale</h2>
        <p>
          Ogni kit raccoglie risorse coordinate su un tema attuariale: template modificabili, notebook con codice commentato, checklist operative e guide per applicare i contenuti in autonomia o in team.
        </p>
        <ul className="list">
          <li>Download immediato in formato ZIP con file organizzati per argomento.</li>
          <li>Aggiornamenti gratuiti ogni volta che pubblichiamo nuove versioni o correzioni.</li>
          <li>Accesso a un canale dedicato nella community per confrontarti con altri utilizzatori.</li>
        </ul>
      </section>

      <section className="section" aria-labelledby="shop-bundle">
        <h2 id="shop-bundle">Kit disponibili</h2>
        <div className="card-grid">
          {SHOP_BUNDLES.map(({ title, price, description, includes }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p className="small-print">{price} · download digitale</p>
              <p>{description}</p>
              <ul className="list">
                {includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="button secondary" href="/contatti">
                Richiedi anteprima
              </Link>

            </article>
          ))}
        </div>
      </section>

      <section className="section info-panel" aria-labelledby="shop-come-funziona">
        <h2 id="shop-come-funziona">Come funziona il checkout</h2>
        <ol className="list">
          {SHOP_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="small-print">
          I pagamenti sono gestiti da provider esterni con conformità PSD2 e ricevute automatiche. attuario.eu non memorizza dati di carta di credito.
        </p>
      </section>

      <section className="section" aria-labelledby="shop-faq">
        <h2 id="shop-faq">Domande frequenti</h2>
        <div className="card-grid">
          {SHOP_FAQ.map(({ question, answer }) => (
            <article key={question} className="card">
              <h3>{question}</h3>
              <p>{answer}</p>
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
          Per assistenza sugli acquisti o per ricevere fattura puoi anche contattarci via email a{" "}
          <a href="mailto:shop@attuario.eu">shop@attuario.eu</a>.
        </p>
        <p className="small-print">
          Tutti i materiali sono pensati per fini educativi e divulgativi. Non costituiscono consulenza professionale né sostituiscono le verifiche richieste da regolatori o auditor.
        </p>
      </section>
    </Layout>
  );
}
