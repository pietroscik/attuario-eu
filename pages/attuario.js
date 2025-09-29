import Layout from "../components/Layout";

const roles = [
  {
    title: "Assicurazioni vita e danni",
    description: "Dalla tariffazione alle riserve, gli attuari supportano le compagnie nel valutare prodotti e rischi.",
    bullets: [
      "Organizzazione tipica di un reparto attuariale",
      "KPI di monitoraggio per ramo vita e danni",
      "Skill richieste: modellistica, regolamentazione, comunicazione",
    ],
  },
  {
    title: "Previdenza e welfare",
    description: "Gestione di fondi pensione e casse professionali con attenzione a sostenibilità e governance.",
    bullets: [
      "Ruoli chiave: attuario incaricato, risk manager, consulente del fondo",
      "Come leggere una valutazione attuariale di TFR e piani a benefici definiti",
      "Percorsi di carriera e certificazioni richieste in Italia",
    ],
  },
  {
    title: "Finanza, banche e risk management",
    description: "Gli attuari portano competenze quantitative nei modelli interni, IFRS 17/9, gestione rischi e ALM.",
    bullets: [
      "Come interagire con funzioni CRO, CFO e audit interno",
      "Esempi di progetti: ORSA, stress test, capital modelling",
      "Strumenti analitici più usati: R, Python, SAS, SQL",
    ],
  },
];

const pathways = [
  {
    title: "Percorsi formativi",
    content:
      "Panoramica su lauree magistrali in scienze attuariali, master specialistici, certificazioni SOA, CAS e Istituto Italiano degli Attuari.",
  },
  {
    title: "Competenze trasversali",
    content:
      "Project management, data visualization, storytelling con dati e conoscenza dei framework normativi europei (Solvency II, IDD, PRIIPs).",
  },
  {
    title: "Risorse per studenti",
    content: "Guide agli esami, suggerimenti per tirocini, community online e programmi di mentoring.",
  },
];

export default function Attuario() {
  return (
    <Layout
      title="Attuari nel mondo reale"
      eyebrow="Professione"
      intro="Ruoli, responsabilità e percorsi professionali di chi applica la scienza attuariale ogni giorno. Interviste, testimonianze e materiali pubblici aiutano a comprendere come si evolvono le competenze richieste dal mercato."
    >
      <section className="card-grid">
        {roles.map(({ title, description, bullets }) => (
          <article key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="list">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section">
        <h2>Percorsi e competenze</h2>
        <div className="card-grid">
          {pathways.map(({ title, content }) => (
            <div key={title} className="card">
              <h3>{title}</h3>
              <p>{content}</p>
            </div>
          ))}
        </div>
        <p className="small-print">
          Contenuti basati su fonti pubbliche (seminari, webinar, job description) con citazione degli autori originali.
        </p>
      </section>
    </Layout>
  );
}
