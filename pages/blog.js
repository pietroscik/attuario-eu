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

export default function Blog() {
  return (
    <>
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
