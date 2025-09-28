import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const featured = {
  title: "IFRS 17: dalla teoria al closing",
  summary: "Roadmap trimestrale per ridurre tempi di chiusura, con checklist per attuario, finance e IT.",
  readingTime: "8 minuti",
  tags: ["IFRS17", "Governance", "Reporting"],
};

const latest = [
  {
    title: "GLM nel pricing motor: come leggere i coefficienti",
    summary: "Dalla scelta della link function al test di significatività: guida pratica con esempio in R.",
    date: "Aprile 2024",
    tags: ["Pricing", "GLM"],
  },
  {
    title: "Monitoraggio riserve: KPI e soglie di allerta",
    summary: "Dashboard mensile con loss ratio, run-off e sensitività sui triangoli di sinistri.",
    date: "Marzo 2024",
    tags: ["Riserve", "Controlli"],
  },
  {
    title: "Life analytics: modellare il lapse rate",
    summary: "Segmentazione comportamentale e regressioni logistiche per prevedere i riscatti.",
    date: "Febbraio 2024",
    tags: ["Life", "Persistency"],
  },
  {
    title: "Orizzontare l'ALM in contesti inflattivi",
    summary: "Strategie di duration matching e stress sui flussi per portafogli misti danni/vita.",
    date: "Gennaio 2024",
    tags: ["ALM", "Risk Management"],
  },
  {
    title: "Embedded value: aggiornare le ipotesi di decadenza",
    summary: "Come calibrare i tassi di riscatto con basi dati granulari e segmentazioni geo-demografiche.",
    date: "Dicembre 2023",
    tags: ["Life", "Valuation"],
  },
  {
    title: "Solvency II: ORSA narrativo con KPI quantitativi",
    summary: "Unire storytelling e numeri per board e funzioni chiave. Inclusi template e grafici commentati.",
    date: "Novembre 2023",
    tags: ["SolvencyII", "Governance"],
  },
];

const resources = [
  {
    title: "Playbook Solvency II",
    description: "Template per ORSA, capital management e analisi di sensitività.",
  },
  {
    title: "Modelli e dataset",
    description: "File Excel/CSV di esempio per triangoli, GLM e tavole demografiche.",
  },
  {
    title: "Guide rapide",
    description: "Step-by-step per audit trail, pricing rapido e validazioni ad hoc.",
  },
];

const categorie = [
  {
    title: "Pricing",
    description: "Tecniche GLM, segmentazione clienti, elasticità prezzo e gestione portafoglio.",
  },
  {
    title: "Riserve",
    description: "Triangoli, metodi stocastici e controlli di reasonableness per danni e vita.",
  },
  {
    title: "Regolamentazione",
    description: "IFRS 17, Solvency II, IVASS: sintesi operative e checklist di conformità.",
  },
  {
    title: "Data & Tech",
    description: "Tooling, automazioni, stack dati e collaborazioni tra attuario e data engineer.",
  },
];

const caseStudies = [
  {
    title: "Validazione tariffaria auto",
    description:
      "Processo end-to-end con controlli di qualità, grafici di lift e confronto con benchmark di mercato.",
    outcome: "Riduzione del tempo di rilascio da 6 a 2 settimane.",
  },
  {
    title: "Raffronto metodi reserving",
    description:
      "Analisi Chain-Ladder vs Bornhuetter-Ferguson con scenari di sensitività e overlay stocastico.",
    outcome: "Identificazione di +3 p.p. di IBNR nascosta.",
  },
  {
    title: "Programma IFRS 17",
    description:
      "Implementazione modelli BBA e VFA con controllo data lineage e automazione dei disclosure package.",
    outcome: "Chiusura mensile ridotta di 2 giorni lavorativi.",
  },
];

const normative = [
  {
    title: "Aggiornamenti IVASS",
    points: [
      "Nuove linee guida sugli algoritmi di pricing e requisiti di explainability.",
      "Chiarimenti sulla gestione esternalizzata delle attività attuariali critiche.",
    ],
  },
  {
    title: "Calendario vigilanza 2024",
    points: [
      "Scadenze per QRT trimestrali e submission ORSA.",
      "Focus tematici su climate risk, outsourcing e qualità dati.",
    ],
  },
  {
    title: "Normativa internazionale",
    points: [
      "Aggiornamento direttiva IDD e impatti sui prodotti protection.",
      "ESG disclosure: best practice per integrare metriche in bilancio.",
    ],
  },
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog attuariale | Attuario.eu</title>
        <meta
          name="description"
          content="Approfondimenti attuariali su pricing, riserve, normativa e data analytics con checklist operative e toolkit scaricabili."
        />
      </Head>
      <Nav />
      <main id="top" className="container">
        <section className="hero hero--stack">
          <p className="eyebrow">Attuarial insight hub</p>
          <h1>Blog & risorse pratiche</h1>
          <p className="section-intro">
            Approfondimenti operativi su pricing, riserve, capital management e trasformazione digitale. Ogni articolo contiene
            checklist scaricabili, snippet di codice e casi d'uso reali.
          </p>
        </section>

        <section className="section">
          <div className="grid" style={{ alignItems: "stretch" }}>
            <article className="card stack">
              <span className="eyebrow" style={{ color: "#2563eb" }}>
                In evidenza
              </span>
              <h2 style={{ margin: 0 }}>{featured.title}</h2>
              <p className="section-intro" style={{ margin: 0 }}>{featured.summary}</p>
              <div className="article-meta">
                <span>{featured.readingTime}</span>
                {featured.tags.map(tag => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            <div className="stack">
              <article className="card stack-sm">
                <h3 style={{ margin: 0 }}>Newsletter attuariale</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>
                  Un recap mensile con alert normativi, script pronti e benchmark di mercato.
                </p>
                <a className="btn primary" href="#iscrizione-newsletter">
                  Iscriviti ora
                </a>
              </article>
              <article className="card stack-sm">
                <h3 style={{ margin: 0 }}>Invia un contributo</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>
                  Vuoi condividere un case study o un modello? Invia la proposta: revisione in 48 ore.
                </p>
                <a href="mailto:info@attuario.eu" style={{ fontWeight: 600 }}>
                  Proponi un articolo →
                </a>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Ultimi articoli</h2>
            <a href="#archivio">Archivio completo</a>
          </div>
          <div className="stack">
            {latest.map(post => (
              <article key={post.title} className="card stack-sm">
                <div className="article-meta">
                  <span>{post.date}</span>
                  {post.tags.map(tag => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ margin: 0 }}>{post.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{post.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Sezioni editoriali</h2>
          <p className="section-intro">Le aree tematiche principali del blog, utili per navigare per disciplina attuariale.</p>
          <div className="grid">
            {categorie.map(category => (
              <article key={category.title} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{category.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{category.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Toolkit del mese</h2>
          <p className="section-intro">
            Risorse scaricabili per mettere in pratica gli articoli: modelli, template e checklist operative.
          </p>
          <div className="resource-grid">
            {resources.map(resource => (
              <article key={resource.title} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{resource.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{resource.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>Casi di studio attuariali</h2>
            <span className="section-intro" style={{ maxWidth: 540 }}>
              Selezione di progetti reali con lezioni apprese, indicatori misurabili e materiale di accompagnamento da
              riutilizzare nei tuoi cantieri.
            </span>
          </div>
          <div className="grid">
            {caseStudies.map(caso => (
              <article key={caso.title} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{caso.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{caso.description}</p>
                <p style={{ margin: 0, fontSize: 13, color: "#2563eb" }}>
                  Risultato: <strong>{caso.outcome}</strong>
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Focus regolamentare</h2>
          <p className="section-intro">
            Raccogliamo i principali aggiornamenti normativi e gli impatti operativi per attuari, risk manager e funzioni
            chiave.
          </p>
          <div className="grid">
            {normative.map(item => (
              <article key={item.title} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <ul className="stack-list" style={{ margin: 0 }}>
                  {item.points.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="archivio" className="section">
          <h2>Archivio articoli</h2>
          <p className="section-intro">
            Una selezione dei contributi pubblicati negli ultimi mesi, utile per recuperare rapidamente analisi e casi studio.
          </p>
          <div className="stack">
            {latest.map(post => (
              <article key={`${post.title}-archivio`} className="card stack-sm">
                <div className="article-meta">
                  <span>{post.date}</span>
                  {post.tags.map(tag => (
                    <span key={`${post.title}-${tag}`} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ margin: 0 }}>{post.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{post.summary}</p>
                <a href="#top" style={{ fontWeight: 600 }}>
                  Torna all'inizio ↑
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="iscrizione-newsletter" className="section">
          <h2>Iscrizione newsletter</h2>
          <p className="section-intro">
            Lasciaci la tua e-mail per ricevere una volta al mese gli aggiornamenti più rilevanti su normativa, modelli e casi
            di studio.
          </p>
          <article className="card stack-sm">
            <p style={{ margin: 0, opacity: 0.85 }}>
              Compila il modulo dedicato indicando nome, cognome e società. Ti invieremo un link di conferma entro 24 ore e,
              da quel momento, riceverai solo comunicazioni attuariali essenziali.
            </p>
            <a className="btn primary" href="https://attuario.eu/newsletter" rel="noopener noreferrer">
              Apri il modulo di iscrizione
            </a>
            <p className="calculator-note" style={{ marginTop: 0 }}>
              Puoi disiscriverti in qualsiasi momento rispondendo alla mail o scrivendo a info@attuario.eu.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
