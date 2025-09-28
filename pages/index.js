import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const heroHighlights = [
  "Pricing tecnico con GLM, credibilità e analisi elasticità",
  "Riserve danni con metodi deterministici e overlay stocastici",
  "Progetti IFRS 17 e Solvency II con governance e data lineage",
];

const valueProps = [
  {
    pill: "Strategia",
    title: "Roadmap end-to-end",
    description:
      "Assessment, piano operativo e supporto esecutivo per trasformare gli insight attuariali in decisioni di business misurabili.",
  },
  {
    pill: "Execution",
    title: "Modelli industrializzati",
    description:
      "Modularizziamo i calcoli in tool ripetibili: script validati, calcolatori web, template documentali e controlli automatici.",
  },
  {
    pill: "Enablement",
    title: "Formazione hands-on",
    description:
      "Workshop, pair programming e coaching per team attuariali, finance e data science su use case reali della tua organizzazione.",
  },
];

const capabilityAreas = [
  {
    title: "Pricing e sottoscrizione",
    items: [
      "Analisi frequenza × severità e segmentazione portfolio",
      "GLM, elasticità prezzo e monitoraggio campagne",
      "Linee guida su caricamenti, scontistica e governance",
    ],
  },
  {
    title: "Riserve e closing",
    items: [
      "Chain-Ladder, Bornhuetter-Ferguson e metodi bootstrap",
      "Reconciliation con ERP e controlli di reasonableness",
      "Dashboard KPI con loss, combined e run-off ratio",
    ],
  },
  {
    title: "Solvibilità e normativa",
    items: [
      "Implementazione framework IFRS 17 e Solvency II",
      "Stress test, ORSA narrativo e reporting board-ready",
      "Revisione modelli e audit trail per funzioni chiave",
    ],
  },
];

const proofPoints = [
  {
    title: "Tariffa motor retail",
    description:
      "Set GLM con validazione backtesting e pacchetto dashboard interattive consegnato in 4 settimane.",
    impact: "+3,5 p.p. marginalità",
  },
  {
    title: "Programma IFRS 17",
    description:
      "Integrazione dati attuariali e finance, automazione note di disclosure e accelerazione del closing mensile.",
    impact: "-2 giorni di closing",
  },
  {
    title: "Reserving fast-check",
    description:
      "Blueprint per controlli trimestrali con triangoli, overlay stocastici e riconciliazioni con ERP aziendale.",
    impact: "IBNR allineata in 3 iterazioni",
  },
];

const deepLinks = [
  {
    href: "/calcolatori",
    title: "Calcolatori attuariali",
    description: "Widget interattivi per premio puro, riserve, rendite e indicatori tecnici.",
  },
  {
    href: "/blog",
    title: "Blog & toolkit",
    description: "Approfondimenti, casi studio e risorse da utilizzare nei tuoi cantieri.",
  },
  {
    href: "/wiki",
    title: "Wiki attuariale",
    description: "Formule, assunzioni e best practice documentate con linguaggio operativo.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="container">
        <section className="hero hero--split">
          <div className="stack">
            <p className="eyebrow">Consulenza attuariale</p>
            <h1>Soluzioni per pricing, riserve e governance normativa</h1>
            <p className="section-intro">
              Supportiamo compagnie, captive e PMI nel trasformare i dati tecnici in azioni concrete: dal modello statistico al
              board package pronto per le autorità.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/contatti">
                Prenota una call
              </Link>
              <Link className="btn secondary" href="/calcolatori">
                Esplora i calcolatori
              </Link>
            </div>
          </div>
          <ul className="hero-list">
            {heroHighlights.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section">
          <h2>Perché Attuario.eu</h2>
          <div className="grid value-grid">
            {valueProps.map(value => (
              <article key={value.title} className="card value-card stack-sm">
                <span className="pill">{value.pill}</span>
                <h3>{value.title}</h3>
                <p style={{ margin: 0, opacity: 0.85 }}>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Capacità principali</h2>
            <Link href="/servizi">Scopri tutti i servizi →</Link>
          </div>
          <div className="grid">
            {capabilityAreas.map(area => (
              <article key={area.title} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{area.title}</h3>
                <ul className="stack-list">
                  {area.items.map(voice => (
                    <li key={voice}>{voice}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Risultati recenti</h2>
            <Link href="/blog#archivio">Leggi i case study →</Link>
          </div>
          <div className="grid">
            {proofPoints.map(point => (
              <article key={point.title} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{point.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{point.description}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#2563eb" }}>
                  Impatto misurato: <strong>{point.impact}</strong>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Continua con le nostre risorse</h2>
          <p className="section-intro">
            Tool, articoli e documentazione per applicare subito le metodologie discusse durante gli engagement.
          </p>
          <div className="grid">
            {deepLinks.map(link => (
              <article key={link.href} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{link.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{link.description}</p>
                <Link href={link.href} style={{ fontWeight: 600 }}>
                  Vai alla sezione →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
