import Layout from "../../components/Layout";
import Annuity from "../../components/calculators/annuity";
import KnowledgePanel from "../../components/calculators/KnowledgePanel";
import { CALCULATOR_METADATA } from "../../content/calculators/metadata";

export default function AnnuityPage() {
  return (
    <Layout
      title="Calcolatore rendite attuariali"
      eyebrow="Trasformazione in rendita"
      intro="Ottieni coefficienti e valori attuali/futuri di rendite immediate o anticipate per supportare pricing, conversioni e note tecniche di fondi pensione."
      metaDescription="Calcolatore rendite attuariali: coefficienti a_n|i, ä_n|i, s_n|i e ś_n|i con valore attuale e futuro per modelli vita e previdenza."
      width="narrow"
    >
      <Annuity />
      <KnowledgePanel metadata={CALCULATOR_METADATA.annuity} />
      <section className="section info-panel">
        <h2>Come usare i coefficienti</h2>
        <p>
          I fattori a<sub>n|i</sub> e ä<sub>n|i</sub> permettono di convertire montanti accumulati in rendite periodiche,
          documentando la coerenza con i tassi di trasformazione ufficiali. I coefficienti s<sub>n|i</sub> e ś<sub>n|i</sub>
          sono utili per valutare piani di accumulo e rendite differite.
        </p>
        <p>
          Inserisci i risultati nelle note tecniche e nelle schede POG, allegando il confronto con le basi demografiche e i
          tassi di riferimento scelti dall’attuario incaricato.
        </p>
      </section>
      <section className="section">
        <h2>Documentazione da allegare</h2>
        <ul className="list">
          <li>Tavole di mortalità utilizzate e metodologia di proiezione (annuali vs generazionali).</li>
          <li>Giustificazione del tasso tecnico alla luce delle politiche di investimento e delle norme COVIP.</li>
          <li>Verifica di sensitività a ±50 bps per dimostrare la robustezza delle prestazioni offerte.</li>
        </ul>
      </section>
    </Layout>
  );
}
