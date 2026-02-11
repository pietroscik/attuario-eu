import Link from "next/link";

import Layout from "../../components/Layout";
import CaseNavigation from "../../components/casi/CaseNavigation";

const RELATED_CASES = ["assicurazioni-danni", "assicurazioni-vita", "previdenza"];

const RESOURCES = [
  {
    label: "Scenario NGFS climate",
    href: "https://www.ngfs.net/ngfs-scenarios-portal/",
    description:
      "Portale ufficiale con dataset di scenari climatici utilizzabili per analizzare impatti su asset e passività.",
  },
];

const STEPS = [
  {
    title: "Raccolta input di rischio",
    copy:
      "Mappa rischi assicurativi, di mercato, di credito e operativi; consolida dati storici e scenari prospettici dal risk register aziendale.",
  },
  {
    title: "Valutazione capitale economico",
    copy:
      "Esegui simulazioni Monte Carlo/analitiche utilizzando il calcolatore Portafoglio variabile e confronta i risultati con SCR/ORSA.",
  },
  {
    title: "Analisi scenari climatici",
    copy:
      "Integra i dataset NGFS per valutare l’effetto su asset allocation, sinistri catastrofali e metriche di liquidità.",
  },
  {
    title: "Piano di intervento",
    copy:
      "Definisci trigger quantitativi e qualitativi, responsabilità operative e tempistiche di attuazione in caso di superamento soglie.",
  },
];

const ACTIONS = [
  {
    label: "Report ORSA sintetico",
    detail:
      "Documento di massimo 15 pagine con sintesi dei rischi materiali, risultati quantitativi e piano di intervento approvato dal board.",
  },
  {
    label: "Dashboard capitale economico",
    detail:
      "Visualizzazione interattiva con serie storiche di capitale disponibile/requisito e breakdown per rischio.",
  },
  {
    label: "Matrice responsabilità",
    detail:
      "RACI chart con azioni correttive, owner e tempistiche di revisione.",
  },
];

const KPI = [
  {
    name: "Copertura capitale",
    description:
      "Rapporto tra capitale disponibile e requisito; monitora soglie early warning e target board.",
  },
  {
    name: "Liquidity Coverage Ratio attuariale",
    description:
      "Valuta la capacità di fronteggiare deflussi inattesi considerando riserve tecniche e disponibilità liquide.",
  },
  {
    name: "Exposure a rischio climatico",
    description:
      "Quota di portafoglio esposta a settori ad alta intensità carbonica o eventi fisici ricorrenti.",
  },
  {
    name: "Sensitivity Solvency II",
    description:
      "Impatti percentuali di shock standard (tassi, spread, mortalità) sul capitale di solvibilità richiesto.",
  },
];

export default function CaseFinanzaRisk() {
  return (
    <Layout
      title="Case study · Finanza e risk management"
      eyebrow="Applicazioni attuariali"
      intro="Percorso per costruire un ORSA sintetico, stimare il capitale economico e integrare indicatori climatici nel framework di monitoraggio."
      metaDescription="Case study risk management: template ORSA, simulazioni VaR/TVaR, scenari climatici NGFS, deliverable e KPI da monitorare per board e funzioni di controllo."
    >
      <section className="info-panel">
        <h2>Scenario di riferimento</h2>
        <p>
          Un gruppo assicurativo vuole aggiornare la valutazione di rischio integrato in vista della riunione annuale del board. L’obiettivo è presentare un ORSA condensato con analisi di capitale economico, scenari climatici e un piano di intervento tracciabile.
        </p>
        <p className="small-print">
          I concetti teorici richiamati (VaR/TVaR, ORSA, moduli Solvency II) sono descritti in maggiore dettaglio nelle sezioni{" "}
          <Link href="/teoria">Teoria</Link> e{" "}
          <Link href="/applicazioni">Applicazioni</Link>.
        </p>
      </section>

      <section className="section" aria-labelledby="risorse-heading">
        <h2 id="risorse-heading">Risorse utili</h2>
        <ul className="list">
          {RESOURCES.map(({ label, href, description }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
              <p>{description}</p>
            </li>
          ))}
          <li>
            <Link href="/calcolatori/portafoglio-variabile">Calcolatore portafoglio variabile</Link>
            <p>
              Stima VaR e TVaR per confrontare capitale economico e soglie di risk appetite definite nel RAF.
            </p>
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="workflow-heading">
        <h2 id="workflow-heading">Workflow operativo</h2>
        <div className="card-grid">
          {STEPS.map(({ title, copy }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-panel" aria-labelledby="azioni-heading">
        <h2 id="azioni-heading">Deliverable chiave</h2>
        <ul className="list">
          {ACTIONS.map(({ label, detail }) => (
            <li key={label}>
              <strong>{label}.</strong> {detail}
            </li>
          ))}
        </ul>
        <p className="small-print">
          Utilizza questi deliverable come base di lavoro: adattali al perimetro di rischio della tua compagnia e condividi la documentazione con le funzioni Risk, Compliance e Attuariato per le valide approvazioni interne.
        </p>
      </section>

      <section className="section" id="kpi-da-monitorare" aria-labelledby="kpi-heading">
        <h2 id="kpi-heading">KPI da monitorare</h2>
        <div className="card-grid">
          {KPI.map(({ name, description }) => (
            <article key={name} className="card">
              <h3>{name}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="small-print">
          I KPI proposti non sono esaustivi: integra sempre le metriche richieste dal tuo RAF e dagli orientamenti IVASS/EIOPA, documentando in modo tracciabile soglie, frequenza di monitoraggio e responsabilità.
        </p>
      </section>

      <CaseNavigation currentSlug="finanza-risk" relatedSlugs={RELATED_CASES} />
    </Layout>
  );
}
