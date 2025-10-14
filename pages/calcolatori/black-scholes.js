import Layout from "../../components/Layout";
import BlackScholes from "../../components/calculators/black-scholes";
import KnowledgePanel from "../../components/calculators/KnowledgePanel";
import { CALCULATOR_METADATA } from "../../content/calculators/metadata";

export default function BlackScholesPage() {
  return (
    <Layout
      title="Calcolatore Black–Scholes"
      eyebrow="Opzioni europee"
      intro="Stima prezzi teorici e greche di opzioni europee Call/Put assumendo moto browniano geometrico, utili per il risk management di prodotti unit-linked con garanzie."
      metaDescription="Calcolatore Black-Scholes in italiano: prezzi Call/Put, delta, gamma, vega, theta e rho per scenari Solvency II e IFRS 17."
      width="narrow"
    >
      <BlackScholes />
      <KnowledgePanel metadata={CALCULATOR_METADATA["black-scholes"]} />
      <section className="section info-panel">
        <h2>Utilizzo pratico delle greche</h2>
        <p>
          Delta e gamma aiutano a dimensionare le strategie di copertura dinamica in portafogli con garanzie finanziarie, mentre
          vega e theta supportano la definizione dei limiti di esposizione in policy ORSA. Documenta le ipotesi adottate nelle note
          metodologiche per la Funzione Risk Management.
        </p>
        <p>
          I risultati possono essere confrontati con le misure di sensibilità richieste dall’IFRS 17 per le garanzie finanziarie
          e dai QRT Solvency II (S.06.03) per verificare coerenza tra pricing e capital management.
        </p>
      </section>
      <section className="section">
        <h2>Approfondimenti consigliati</h2>
        <ul className="list">
          <li>
            Manuale <em>Derivative Markets</em> di McDonald per esempi numerici sulle strategie di copertura delta-gamma.
          </li>
          <li>
            Linee guida IVASS sulla valutazione delle opzioni finanziarie nelle imprese di assicurazione vita.
          </li>
          <li>
            Materiali EIOPA sul trattamento delle garanzie finanziarie nei modelli interni parziali.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
