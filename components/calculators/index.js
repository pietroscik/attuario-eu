import Layout from "../Layout";
import PremioPuro from "./PremioPuro";
import PremioUnico from "./PremioUnico";
import RiservaSemplice from "./RiservaSemplice";
import DurationConvexity from "./DurationConvexity";
import PensioneIndicizzata from "./PensioneIndicizzata";
import PortafoglioAssicurativo from "./PortafoglioAssicurativo";

export const calculatorCards = [
  {
    href: "/calcolatori/premio-puro",
    title: "Premio puro",
    desc: "Premio atteso di un contratto danni dato frequenza e severità medie, con spiegazione delle ipotesi sottostanti.",
  },
  {
    href: "/calcolatori/premio-unico",
    title: "Premio unico",
    desc: "Valutazione del premio unico per coperture vita con probabilità di sinistro, durata e caricamenti personalizzabili.",
  },
  {
    href: "/calcolatori/riserva-semplice",
    title: "Riserva semplice",
    desc: "Stima indicativa della riserva tecnica (RBNS + IBNR) a partire da sinistri aperti e costo medio residuo.",
  },
  {
    href: "/calcolatori/black-scholes",
    title: "Black–Scholes",
    desc: "Prezzo teorico, greche e sensibilità di opzioni europee Call/Put partendo da input di mercato.",
  },
  {
    href: "/calcolatori/capm",
    title: "CAPM & Sharpe",
    desc: "Rendimento atteso, premio per il rischio e indice di Sharpe per un portafoglio dato beta e volatilità.",
  },
  {
    href: "/calcolatori/annuity",
    title: "Rendite/Annuity",
    desc: "Coefficienti e valori attuali/futuri per rendite immediate e anticipate con pagamenti costanti.",
  },
  {
    href: "/calcolatori/duration-convexity",
    title: "Duration & Convexity",
    desc: "Misura sensibilità prezzo/tasso di un titolo obbligazionario con grafico prezzo-yield e riferimenti IVASS/EIOPA.",
  },
  {
    href: "/calcolatori/pensione-indicizzata",
    title: "Pensione indicizzata",
    desc: "Stima retribuzione finale, quota maturata e valore attuale di una pensione rivalutata secondo D.Lgs. 252/2005.",
  },
  {
    href: "/calcolatori/portafoglio-variabile",
    title: "Portafoglio assicurativo",
    desc: "Frontiera rischio-rendimento e VaR 99% per asset allocation miste da includere nel report ORSA.",
  },
];

export default function CalculatorDirectory() {
  const embeddedTools = [
    "/calcolatori/premio-puro",
    "/calcolatori/premio-unico",
    "/calcolatori/riserva-semplice",
  ];

  const otherTools = calculatorCards.filter(({ href }) => !embeddedTools.includes(href));

  return (
    <Layout
      title="Calcolatori attuariali"
      eyebrow="Toolkit interattivo"
      intro="Una raccolta di strumenti didattici per esplorare formule attuariali e finanziarie. Ogni calcolatore include spiegazioni basate su testi ANIA, IVASS ed EIOPA per garantire rigore metodologico."
      metaDescription="Hub dei calcolatori attuariali di attuario.eu: premio puro, premio unico, riserva semplice e altri strumenti finanziari con metodologie IVASS/EIOPA."
    >
      <section className="calculator-grid" aria-label="Calcolatori rapidi">
        <PremioPuro />
        <PremioUnico />
        <RiservaSemplice />
      </section>

      <section className="section" aria-label="Altri strumenti disponibili">
        <h2>Altri calcolatori sul sito</h2>
        <div className="card-grid">
          {otherTools.map(({ href, title, desc }) => (
            <a key={href} className="link-card" href={href}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </a>
          ))}
        </div>
        <div className="calculator-grid" style={{ marginTop: "1.5rem" }}>
          <DurationConvexity />
          <PensioneIndicizzata />
          <PortafoglioAssicurativo />
        </div>
      </section>
      <section className="section info-panel">
        <h2>Linee guida di riferimento</h2>
        <p>
          Ogni calcolatore richiama le principali normative europee e nazionali su pricing e riservazione. Prima di utilizzare i
          risultati in sede aziendale confrontali con le seguenti fonti:
        </p>
        <ul className="list">
          <li>Regolamenti IVASS n. 38/2018, 41/2018 e lettere al mercato sulla governance dei prodotti.</li>
          <li>Linee guida EIOPA su riservazione, tassi tecnici e product oversight and governance.</li>
          <li>Testi ANIA, CEA e Society of Actuaries su tariffazione, profit testing e technical provisions.</li>
        </ul>
        <p className="small-print">
          Integra questi riferimenti nel fascicolo tecnico e nei materiali di governance per prevenire lacune informative e ridurre
          gli errori operativi (come link interrotti o script incompleti) che possono emergere nei controlli interni.
        </p>
      </section>
      <p className="small-print" style={{ marginTop: "2rem" }}>
        I risultati mostrati dai calcolatori sono indicativi e utili a scopo didattico. Per applicazioni professionali è indispensabile validare dati, formule e ipotesi con un attuario abilitato e documentare il processo nel fascicolo tecnico, come previsto dal Regolamento IVASS n. 38/2018.
      </p>
    </Layout>
  );
}
