import Layout from "../../components/Layout";
import RiservaSemplice from "../../components/calculators/RiservaSemplice";
import KnowledgePanel from "../../components/calculators/KnowledgePanel";
import { CALCULATOR_METADATA } from "../../content/calculators/metadata";

export default function RiservaSemplicePage() {
  return (
    <Layout
      title="Calcolatore riserva semplice"
      eyebrow="RBNS + IBNR"
      intro="Stima rapida della riserva tecnica combinando il costo residuo dei sinistri aperti con una quota IBNR impostata dall’utente, includendo inflazione e sconto attuariale."
      metaDescription="Riserva tecnica semplificata: RBNS, IBNR, inflazione e attualizzazione in linea con le raccomandazioni IVASS e Solvency II."
      width="narrow"
    >
      <RiservaSemplice />
      <KnowledgePanel metadata={CALCULATOR_METADATA["riserva-semplice"]} />
      <section className="section info-panel">
        <h2>Come interpretare i risultati</h2>
        <p>
          La riserva totale è data dalla somma tra RBNS (sinistri già noti ma non liquidati) e IBNR (sinistri avvenuti ma non ancora denunciati). Il calcolatore applica un fattore inflattivo e un tasso di attualizzazione, seguendo le buone pratiche descritte nel <em>Manuale IVASS sulla riservazione danni</em> e nei principi Solvency II.
        </p>
        <p className="small-print">
          Puoi utilizzare il risultato come punto di partenza per confronti what-if, stress test o per validare output ottenuti con software dedicati.
        </p>
        <p>
          Per valutazioni IFRS 17 è necessario calcolare anche il Risk Adjustment e la Contractual Service Margin; questa pagina si concentra sulla best estimate liability, utile per comunicazioni rapide con gli stakeholder tecnici.
        </p>
      </section>
      <section className="section">
        <h2>Consigli operativi</h2>
        <ul className="list">
          <li>Verifica che il costo medio residuo rifletta la severità attesa al netto di franchigie e recuperi.</li>
          <li>Stima l’IBNR tramite triangoli Chain-Ladder o metodi Bayesian come suggerito da Klugman–Panjer–Willmot.</li>
          <li>Documenta ipotesi e parametri nel fascicolo tecnico, in conformità al Regolamento IVASS n. 38/2018.</li>
        </ul>
        <p>
          Per portafogli con forte stagionalità valuta l’utilizzo di modelli a calendario (Cape Cod, Bootstrap) e confronta il
          risultato con i requisiti di capitale Solvency II (SCR). Ricorda che gli aggiustamenti per inflazione possono essere
          derivati da indici ISTAT o da curve forward interne approvate dal comitato rischi.
        </p>
      </section>
      <section className="section info-panel">
        <h2>Fonti istituzionali</h2>
        <ul className="list">
          <li>
            <strong>IVASS</strong>, Regolamento n. 38/2018 – Governance e controllo sulla riservazione nei rami danni.
          </li>
          <li>
            <strong>EIOPA</strong>, Guidelines on Reserving – principi su best estimate, margine di rischio e disclosure.
          </li>
          <li>
            <strong>Casualty Actuarial Society</strong>, <em>Estimating Unpaid Claims</em> – testi di riferimento per Chain-Ladder,
            Bornhuetter-Ferguson e metodi stocastici.
          </li>
        </ul>
        <p className="small-print">
          Inserisci i riferimenti nella documentazione interna per dimostrare l’allineamento con le prassi di settore e ridurre
          la probabilità di contestazioni durante gli audit interni o le ispezioni IVASS.
        </p>
      </section>
    </Layout>
  );
}
