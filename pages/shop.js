import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Page() {
  const prodotti = [
    [
      "Template report IFRS 17",
      "Pacchetto PowerPoint + Excel con disclosure base e note esplicative personalizzabili.",
    ],
    [
      "Script riserve IBNR",
      "Notebook Python con metodi Chain-Ladder e Bornhuetter-Ferguson, incluse funzioni di sensitività.",
    ],
    [
      "Calcolatore pricing",
      "Modello web exportabile in CSV con scenari frequenza × severità e analisi marginalità.",
    ],
  ];
  const dettagli = [
    ["Licenza business", "Utilizzo interno illimitato, aggiornamenti per 12 mesi."],
    ["Supporto", "Onboarding via video tutorial + canale dedicato per Q&A."],
    ["Integrazione", "Esportazione dati verso BI (Power BI, Tableau) e API REST."],
  ];

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 16px" }}>
        <section style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Shop</h1>
          <p style={{ maxWidth: 640, margin: "0 auto", opacity: 0.85 }}>
            Strumenti pronti all’uso per velocizzare analisi attuariali e compliance. Acquisto digitale con fatturazione automatica.
          </p>
          <div style={{ marginTop: 16 }}>
            <a
              href="https://example.com/shop"
              style={{ padding: "10px 16px", background: "#000", color: "#fff", borderRadius: 999 }}
            >
              Vai allo store
            </a>
          </div>
        </section>
        <section style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {prodotti.map(([title, description], index) => (
            <div key={index} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
              <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>{description}</p>
            </div>
          ))}
        </section>
        <section style={{ marginTop: 32, display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {dettagli.map(([title, description], index) => (
            <div key={index} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16, background: "#fafafa" }}>
              <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>{description}</p>
            </div>
          ))}
        </section>
        <section style={{ marginTop: 32, border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 12px" }}>Come funziona l’acquisto</h2>
          <ol style={{ margin: "0 0 0 18px", opacity: 0.85 }}>
            <li>Scegli il prodotto e completa il checkout sulla piattaforma partner (Paddle/Lemon Squeezy).</li>
            <li>Ricevi il link di download e la fattura elettronica immediata.</li>
            <li>Accedi all’area clienti per aggiornamenti e roadmap dei rilasci.</li>
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
