import Layout from "../../components/Layout";
import PortafoglioAssicurativo from "../../components/calculators/PortafoglioAssicurativo";

export default function PortafoglioVariabilePage() {
  return (
    <Layout
      title="Calcolatore portafoglio assicurativo"
      eyebrow="Asset allocation"
      intro="Analizza rendimento atteso, volatilità e VaR di un portafoglio assicurativo misto per verificare la coerenza con i limiti di rischio definiti dal framework Solvency II."
      metaDescription="Calcolatore portafoglio assicurativo: rendimento atteso, volatilità, VaR 99% e frontiera rischio-rendimento per asset allocation miste."
      width="narrow"
    >
      <PortafoglioAssicurativo />
      <section className="section info-panel">
        <h2>Impostazione del modello</h2>
        <p>
          Il modello applica la classica formula a due asset con correlazione costante per stimare rendimento e varianza del portafoglio.
          La VaR al 99% è calcolata con approssimazione normale, utile come controllo di primo livello prima dei calcoli standard formula.
        </p>
        <p>
          I parametri possono essere calibrati sui dati storici o sugli shock regolamentari previsti da EIOPA per il rischio mercato.
        </p>
      </section>
      <section className="section">
        <h2>Utilizzo in ambito ORSA</h2>
        <p>
          La frontiera rischio-rendimento supporta la definizione del rischio appetito aziendale e la verifica della coerenza con il piano strategico.
        </p>
        <p>
          È consigliabile allegare i risultati al report ORSA per dimostrare che l'impresa monitora l'effetto di variazioni di asset allocation sui requisiti di capitale.
        </p>
      </section>
      <section className="section">
        <h2>Riferimenti</h2>
        <ul className="list">
          <li>Regolamento IVASS n. 38/2018 – Allegato 5 (gestione rischi finanziari).</li>
          <li>Linee guida EIOPA sull'ORSA (EIOPA-BoS-14/259).</li>
          <li>CEIOPS, documento di consultazione sulle strategie di investimento per imprese assicurative.</li>
        </ul>
      </section>
    </Layout>
  );
}
