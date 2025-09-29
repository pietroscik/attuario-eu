import Layout from "../components/Layout";

const posts = [
  {
    title: "Stress test assicurativi: cosa impariamo dal report EIOPA 2023",
    summary:
      "Analisi dei principali indicatori di resilienza tratti dall’EIOPA Insurance Stress Test 2023 e implicazioni per le funzioni attuariali.",
  },
  {
    title: "IFRS 17 in pratica: l’approccio GMM secondo l’IASB",
    summary:
      "Sintesi operativa basata sull’IFRS 17 Project Summary dell’IASB e sui recenti Transition Resource Group papers per impostare policy coerenti.",
  },
  {
    title: "Risk Appetite Framework: le best practice IAIS per il board",
    summary:
      "Riepilogo delle Insurance Core Principles dell’IAIS e del paper sulla gestione integrata dei rischi per supportare decisioni consapevoli.",
  },
  {
    title: "Climate risk e metriche ESG: insight dal network NGFS",
    summary:
      "Approccio divulgativo ai scenari climatici NGFS 2023 e alle raccomandazioni dell’UNEP FI per integrare KPI ESG nei modelli attuariali.",
  },
  {
    title: "Pricing avanzato: lezioni dal report CAS sull’uso del machine learning",
    summary:
      "Panoramica delle linee guida CAS 2022 e dei white paper SOA per coniugare algoritmi complessi, interpretabilità e governance dei dati.",
  },
];

export default function Blog() {
  return (
    <Layout
      title="Blog & approfondimenti"
      eyebrow="Editoriale"
      intro="Articoli divulgativi, casi studio e rubriche mensili per avvicinare la scienza attuariale a un pubblico più ampio. Nessuna consulenza, solo condivisione di conoscenza."
    >
      <section className="card-grid">
        {posts.map(({ title, summary }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{summary}</p>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Newsletter “Spiegato semplice”</h2>
        <p>
          Una email al mese con il riassunto degli articoli pubblicati, link agli eventi e anticipazioni sui nuovi
          strumenti.
        </p>
        <a className="button" href="/newsletter">
          Iscriviti
        </a>
      </section>

      <section className="section info-panel">
        <h2>Mini-corso gratuito: IFRS 17 Essentials</h2>
        <p>
          Tre lezioni on-demand per ripercorrere il framework IASB, esempi numerici e materiali di approfondimento
          consigliati da EFRAG e actuarial task force internazionali.
        </p>
        <a className="button" href="/risorse/ifrs17-essentials">
          Accedi al mini-corso
        </a>
      </section>
    </Layout>
  );
}
