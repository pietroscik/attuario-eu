import Layout from "../../components/Layout";
import DurationConvexity from "../../components/calculators/DurationConvexity";
import KnowledgePanel from "../../components/calculators/KnowledgePanel";
import { CALCULATOR_METADATA } from "../../content/calculators/metadata";

export default function DurationConvexityPage() {
  return (
    <Layout
      title="Calcolatore duration e convexity"
      eyebrow="Sensibilità obbligazionarie"
      intro="Stima la duration di Macaulay, la duration modificata e la convexity di un titolo a cedola costante per valutarne l’esposizione a shock di tasso secondo Solvency II."
      metaDescription="Strumento interattivo per calcolare prezzo, duration e convexity di un’obbligazione con grafico prezzo-yield in italiano."
      width="narrow"
    >
      <DurationConvexity />
      <KnowledgePanel metadata={CALCULATOR_METADATA["duration-convexity"]} />
      <section className="section info-panel">
        <h2>Formula e ipotesi utilizzate</h2>
        <p>
          Le metriche derivano dalla somma dei valori attuali delle cedole e del rimborso finale: la duration di Macaulay è la
          media ponderata delle scadenze dei flussi, mentre la duration modificata misura l’elasticità del prezzo rispetto al rendimento.
        </p>
        <p>
          La convexity integra il secondo ordine nella relazione prezzo-tasso e consente di approssimare i movimenti di prezzo
          per shock di ±200 punti base come previsto dai test di sensitività dei bilanci assicurativi (Regolamento IVASS n. 38/2018).
        </p>
      </section>
      <section className="section">
        <h2>Perché monitorare duration e convexity</h2>
        <p>
          Le metriche sono fondamentali per le proiezioni del modulo tasso di interesse nel calcolo del Solvency Capital Requirement e per l’Asset-Liability Management.
        </p>
        <p>
          Duration e convexity aiutano a documentare nel report ORSA gli impatti di scenari avversi sui portafogli obbligazionari, come richiesto dalle linee guida EIOPA sulla gestione dei rischi finanziari.
        </p>
      </section>
      <section className="section">
        <h2>Riferimenti normativi</h2>
        <ul className="list">
          <li>Regolamento IVASS n. 38/2018 e Allegato 4 – requisiti per il calcolo delle riserve e la sensibilità ai tassi.</li>
          <li>Linee guida EIOPA su ALM e gestione dei rischi di mercato (EIOPA-BoS-14/253).</li>
          <li>Manuale ANIA “Gestione Finanziaria delle Imprese di Assicurazione” per esempi pratici di duration matching.</li>
        </ul>
      </section>
    </Layout>
  );
}
