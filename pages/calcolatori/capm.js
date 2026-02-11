import Layout from "../../components/Layout";
import CAPM from "../../components/calculators/capm";
import KnowledgePanel from "../../components/calculators/KnowledgePanel";
import { CALCULATOR_METADATA } from "../../content/calculators/metadata";

export default function CapmPage() {
  return (
    <Layout
      title="Calcolatore CAPM & Sharpe"
      eyebrow="Costo del capitale"
      intro="Calcola rendimento atteso e indice di Sharpe di un portafoglio assicurativo per documentare ipotesi di costo del capitale e scenari ORSA."
      metaDescription="Calcolatore CAPM: rendimento atteso, premio per il rischio e Sharpe ratio con parametri personalizzabili per analisi Solvency II."
      width="narrow"
    >
      <div className="alert alert-info">
        <p>
          ⚠️ Questo strumento è una simulazione didattica a scopo formativo. I risultati non costituiscono consulenza professionale e non devono essere utilizzati per decisioni finanziarie reali.
        </p>
      </div>
      <CAPM />
      <KnowledgePanel metadata={CALCULATOR_METADATA.capm} />
      <section className="section info-panel">
        <h2>Dal modello ai KPI gestionali</h2>
        <p>
          Il rendimento atteso ottenuto dal CAPM può essere confrontato con il costo del capitale interno (CoC) utilizzato nel
          calcolo del Risk Margin Solvency II. Mantieni allineati i parametri con il piano industriale e con il framework di
          investimento approvato dal consiglio.
        </p>
        <p>
          Lo Sharpe ratio aiuta a presidiare la redditività corretta per il rischio dei portafogli di copertura e può essere
          utilizzato come KPI nella reportistica trimestrale verso il comitato investimenti.
        </p>
      </section>
      <section className="section">
        <h2>Checklist di validazione</h2>
        <ul className="list">
          <li>Confronta le ipotesi di beta con stime di mercato e con eventuali regressioni interne su serie storiche.</li>
          <li>Documenta la metodologia di stima della volatilità (storica vs implied) e aggiorna il parametro almeno annualmente.</li>
          <li>Archivia scenari alternativi (multi-factor) per dimostrare la robustezza dell’analisi in sede di revisione attuariale.</li>
        </ul>
      </section>
    </Layout>
  );
}
