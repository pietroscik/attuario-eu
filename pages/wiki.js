import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Page() {
  const sezioni = [
    [
      "Metodologie",
      "Sintesi di tecniche attuariali: catene di Markov, GLM, metodi di riserva deterministici e stocastici.",
    ],
    [
      "Normativa",
      "Estratti commentati da IVASS, EIOPA, IASB con note operative e scadenze chiave.",
    ],
    ["Tool & Codice", "Snippet in R/Python, modelli Excel e notebook pronti da adattare."],
  ];
  const contributo = [
    "Usa il template Markdown condiviso per creare o aggiornare voci.",
    "Cita sempre fonti e riferimenti normativi con versione/data.",
    "Apri una pull request o invia il contenuto al team editoriale.",
  ];
  const approfondimenti = [
    {
      id: "teoria-premio-puro",
      titolo: "Premio puro",
      formula: "E[S] = \u03bb \u00d7 s",
      contenuto: [
        "Il premio puro (o attuariale) deriva dal valore atteso del costo sinistri: frequenza \u03bb moltiplicata per la severit\u00e0 media s.",
        "In assenza di caricamenti si ottiene l'equilibrio tecnico. Gli aggiustamenti per spese, profitto e rischio vengono aggiunti in seguito come caricamenti proporzionali o additivi.",
      ],
      riferimenti: [
        {
          href: "/calcolatori#premio-puro",
          label: "Calcolatore premio puro",
        },
      ],
    },
    {
      id: "teoria-riserva-semplice",
      titolo: "Riserva sinistri RBNS + IBNR",
      formula: "RBNS = N_{aperti} \u00d7 costo medio residuo - recuperi",
      contenuto: [
        "La stima deterministica delle riserve si compone di due blocchi: RBNS per sinistri denunciati e IBNR per eventi non ancora emersi.",
        "Metodi pi\u00f9 raffinati includono chain-ladder, Bornhuetter-Ferguson e GLM. La versione semplificata \u00e8 utile per controlli di coerenza e test di materialit\u00e0.",
      ],
      riferimenti: [
        {
          href: "/calcolatori#riserva-semplice",
          label: "Calcolatore riserva semplificata",
        },
      ],
    },
    {
      id: "teoria-rendite",
      titolo: "Valore attuale di rendite certe",
      formula: "a_{n|}(i) = \frac{1 - (1 + i)^{-n}}{i}",
      contenuto: [
        "Il fattore a_{n|}(i) rappresenta il valore attuale della rendita immediata pagabile in anticipo di periodo, ipotizzando pagamenti costanti.",
        "Per rendite vitalizie occorre moltiplicare per le probabilit\u00e0 di sopravvivenza tratte da tavole demografiche e considerare eventuali rivalutazioni.",
      ],
      riferimenti: [
        {
          href: "/calcolatori#valore-attuale-rendita",
          label: "Calcolatore valore attuale",
        },
      ],
    },
    {
      id: "teoria-loss-ratio",
      titolo: "Indicatori loss e combined ratio",
      formula: "LR = \frac{Sinistri}{Premi}; CR = \frac{Sinistri + Spese}{Premi}",
      contenuto: [
        "Il loss ratio misura la sola esperienza sinistri, mentre il combined ratio include anche le spese tecniche e indica la redditivit\u00e0 tecnica complessiva.",
        "Valori inferiori al 100% indicano margine positivo: l'analisi per coorti temporali e per linea di business \u00e8 fondamentale per cogliere trend e necessit\u00e0 di azioni correttive.",
      ],
      riferimenti: [
        {
          href: "/calcolatori#loss-ratio",
          label: "Calcolatore indicatori tecnici",
        },
      ],
    },
  ];

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 16px" }}>
        <section style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Wiki</h1>
          <p style={{ maxWidth: 640, margin: "0 auto", opacity: 0.85 }}>
            La knowledge base dell’ecosistema attuariale: concetti, formule e riferimenti sempre aggiornati, pensati per l’operatività quotidiana.
          </p>
        </section>
        <section style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {sezioni.map(([title, description], index) => (
            <div key={index} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
              <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>{description}</p>
            </div>
          ))}
        </section>
        <section id="teoria-modelli" style={{ marginTop: 32, display: "grid", gap: 16 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>Teoria attuariale dei modelli</h2>
          <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
            {approfondimenti.map((item) => (
              <article
                key={item.id}
                id={item.id}
                style={{ border: "1px solid #eee", borderRadius: 18, padding: 18, display: "grid", gap: 12, background: "#fafafa" }}
              >
                <header style={{ display: "grid", gap: 4 }}>
                  <h3 style={{ margin: 0 }}>{item.titolo}</h3>
                  <p style={{ margin: 0, fontSize: 13, opacity: 0.75 }}><strong>Formula:</strong> {item.formula}</p>
                </header>
                <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 6, fontSize: 13, opacity: 0.85 }}>
                  {item.contenuto.map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, fontSize: 13 }}>
                  {item.riferimenti.map((ref) => (
                    <Link key={ref.href} href={ref.href} style={{ textDecoration: "none", color: "#2563eb" }}>
                      {ref.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section style={{ marginTop: 32, border: "1px solid #eee", borderRadius: 16, padding: 16, background: "#fafafa" }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 12px" }}>Come contribuire</h2>
          <ul style={{ margin: "0 0 0 18px", opacity: 0.85 }}>
            {contributo.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </section>
        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 12px" }}>Risorse collegate</h2>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {["Community", "Calcolatori", "Blog"].map((label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase()}`}
                style={{ border: "1px solid #eee", borderRadius: 16, padding: 16, textDecoration: "none", color: "inherit" }}
              >
                <h3 style={{ margin: "0 0 6px" }}>{label}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>Approfondimenti e strumenti collegati alla voce selezionata.</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
