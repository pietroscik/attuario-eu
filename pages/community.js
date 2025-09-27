import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Page() {
  const canali = [
    ["Forum", "Thread tematici su pricing, riserve, capitale e normativa."],
    ["Slack/Discord", "Chat veloci per domande operative e networking."],
    ["Office hour", "Sessioni mensili su casi reali e revisioni modellistiche."],
  ];
  const risorse = [
    ["Template condivisi", "Checklist, modelli Excel/R, documentazione."],
    ["Opportunità", "Call per progetti, job board e partnership."],
    ["Mentorship", "Abbinamento junior-senior su temi specifici."],
  ];

  return (
    <>
      <Nav />
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 16px" }}>
        <section style={{ textAlign: "center", marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Community</h1>
          <p style={{ maxWidth: 640, margin: "0 auto", opacity: 0.85 }}>
            Uno spazio professionale per attuari, data scientist e risk manager. Condividi casi, strumenti e best practice per crescere insieme.
          </p>
          <div style={{ marginTop: 16 }}>
            <a
              href="https://example.com/community"
              style={{ padding: "10px 16px", background: "#000", color: "#fff", borderRadius: 999 }}
            >
              Entra ora
            </a>
          </div>
        </section>
        <section style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {canali.map(([title, description], index) => (
            <div key={index} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
              <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>{description}</p>
            </div>
          ))}
        </section>
        <section style={{ marginTop: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, margin: "0 0 12px" }}>Cosa trovi dentro</h2>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
            {risorse.map(([title, description], index) => (
              <div key={index} style={{ border: "1px solid #eee", borderRadius: 16, padding: 16, background: "#fafafa" }}>
                <h3 style={{ margin: "0 0 6px" }}>{title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{description}</p>
              </div>
            ))}
          </div>
        </section>
        <section style={{ marginTop: 32, border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
          <h2 style={{ margin: "0 0 8px" }}>Come partecipare</h2>
          <ol style={{ margin: "0 0 0 18px", opacity: 0.85 }}>
            <li>Compila il form di ingresso per dirci interessi e strumenti che usi.</li>
            <li>Ricevi l’invito entro 24 ore con linee guida e calendario eventi.</li>
            <li>Condividi casi, fai domande e proponi contenuti da co-creare.</li>
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}
