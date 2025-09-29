import Layout from "../components/Layout";

const SHOP_BUNDLES = [
  {
    title: "Kit esami di matematica attuariale",
    price: "€29",
    description:
      "Workbook interattivi, mappe concettuali e simulatori di quiz per preparare gli esami universitari e professionali.",
    includes: [
      "Notebook Jupyter con esercizi svolti in R e Python",
      "Template Excel con formule commentate",
      "Checklist di teoria con riferimenti bibliografici",
      "Soluzioni passo-passo in PDF",
    ],
  },
  {
    title: "Pacchetto risk management",
    price: "€39",
    description:
      "Dashboard, scenari ORSA e modelli per stress test pronti da personalizzare sulle esigenze della tua organizzazione.",
    includes: [
      "Modello ORSA semplificato con indicatori chiave",
      "Template per reportistica verso CdA e funzione rischi",
      "Script per simulazioni Monte Carlo su capitale economico",
      "Linee guida per la documentazione del modello",
    ],
  },
  {
    title: "Toolkit data science attuariale",
    price: "€34",
    description:
      "Pipeline di machine learning, esempi di feature engineering e notebook per analisi sinistri vita/danni.",
    includes: [
      "Script di data cleaning con controlli di qualità",
      "Notebook GLM/GBM con interpretabilità e metriche",
      "Template per documentare i dataset (Data Card)",
      "Guida rapida a MLOps e monitoraggio drift",
    ],
  },
];

const SHOP_FAQ = [
  {
    question: "Come ricevo i materiali?",
    answer:
      "Dopo l'acquisto ricevi un link via email con accesso immediato ai file in formato ZIP. Gli aggiornamenti futuri vengono inviati automaticamente alla stessa casella.",
  },
  {
    question: "Che licenza si applica?",
    answer:
      "Tutti i kit sono distribuiti con licenza personale. Puoi usarli per studio o formazione interna, ma non rivenderli o ripubblicarli online senza autorizzazione scritta.",
  },
  {
    question: "Posso richiedere la fattura?",
    answer:
      "Sì. Una volta completato il checkout riceverai le istruzioni per inserire i dati di fatturazione e ottenere il documento fiscale conforme.",
  },
];

const SHOP_STEPS = [
  "Scegli il kit che ti interessa e aggiungilo al carrello.",
  "Completa il pagamento sulla piattaforma partner (Stripe, Paddle o Lemon Squeezy).",
  "Ricevi il link di download e accedi agli aggiornamenti futuri dal tuo account personale.",
];

export default function Shop() {
  return (
    <Layout
      title="Shop attuario.eu"
      eyebrow="Kit digitali"
      intro="Template, script e tool attuariali pronti all'uso. Questa pagina descrive le proposte editoriali e il flusso di acquisto: collega qui la tua piattaforma di e-commerce preferita per completare il checkout."
    >
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
              <a className="button secondary" href="/contatti">
                Richiedi anteprima
              </a>
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
          Ogni kit include una bacheca changelog e un canale dedicato nella community. Se hai suggerimenti o vuoi proporre un nuovo strumento scrivici da <a href="/contatti">Contatti</a> indicando obiettivi e requisiti funzionali.
        </p>
        <p className="small-print">
          Tutti i materiali sono pensati per fini educativi e divulgativi. Non costituiscono consulenza professionale né sostituiscono le verifiche richieste da regolatori o auditor.
        </p>
      </section>
    </Layout>
  );
}
