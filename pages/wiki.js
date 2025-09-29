import Layout from "../components/Layout";

export default function Wiki() {
  return (
    <Layout
      title="Wiki attuariale"
      eyebrow="Knowledge base"
      intro="Sezione dedicata a glossari, FAQ e snippet normativi riutilizzabili. Popola questa pagina con articoli o collegamenti alla tua base di conoscenza."
    >
      <section className="info-panel" aria-labelledby="glossario-attuariale">
        <h2 id="glossario-attuariale">Glossario attuariale</h2>
        <p>
          Sintesi di termini chiave utili nella pratica assicurativa, con riferimenti alle definizioni raccolte da <abbr title="International Actuarial Association">IAA</abbr>
          e Ordine Nazionale degli Attuari.
        </p>
        <h3>Definizioni chiave</h3>
        <dl>
          <dt>Premio puro</dt>
          <dd>
            Quota del premio destinata a coprire esclusivamente il rischio assicurato, calcolata come valore atteso del danno.
            Fonte: IAA Actuarial Glossary 2022.
          </dd>
          <dt>Valore attuale delle prestazioni (VAP)</dt>
          <dd>
            Attualizzazione delle prestazioni future attese utilizzando un tasso tecnico o risk-free coerente con Solvency II.
            Fonte: EIOPA, Solvency II Delegated Acts 2015.
          </dd>
          <dt>Asset Liability Management (ALM)</dt>
          <dd>
            Processo di coordinamento tra attivi e passivi per minimizzare rischi di disallineamento in base a IFRS 17 e regolamentazione IVASS.
            Fonte: IVASS Regolamento n. 38/2018.
          </dd>
        </dl>
      </section>
      <section className="info-panel" aria-labelledby="normativa-spiegata-semplice">
        <h2 id="normativa-spiegata-semplice">Normativa spiegata semplice</h2>
        <p>
          Riepilogo delle principali cornici regolamentari con collegamenti alle fonti europee e internazionali per approfondimenti.
        </p>
        <h3>Solvency II in pillole</h3>
        <p>
          Tre pilastri: requisiti quantitativi (SCR/MCR), governance e gestione dei rischi, disciplina di mercato tramite disclosure.
          Fonte: Direttiva 2009/138/CE e aggiornamenti EIOPA 2020.
        </p>
        <h3>IFRS 17 per i bilanci assicurativi</h3>
        <p>
          Introduce la misurazione corrente delle passività assicurative con Building Block Approach e Contractual Service Margin.
          Fonte: IASB, IFRS 17 Insurance Contracts 2021.
        </p>
        <h3>Confronto MCEV vs IFRS 17</h3>
        <p>
          MCEV misura il valore economico per gli azionisti includendo valore temporale delle opzioni, IFRS 17 privilegia la rappresentazione
          contabile delle passività con margini differiti. Fonte: CFO Forum, Market Consistent Embedded Value Principles 2016.
        </p>
      </section>
      <section className="info-panel" aria-labelledby="teoria-attuariale-base">
        <h2 id="teoria-attuariale-base">Teoria attuariale base</h2>
        <p>
          Esempi operativi per la valutazione dei flussi assicurativi e per la modellizzazione dei rischi biometrici.
        </p>
        <h3>Formula del valore attuale atteso</h3>
        <p>
          <code>VAA = Σ<sub>t=1</sub><sup>n</sup> Pr(evento<sub>t</sub>) × importo<sub>t</sub> / (1 + i)<sup>t</sup></code> con tasso <code>i</code> coerente con curve
          <abbr title="European Insurance and Occupational Pensions Authority">EIOPA</abbr>.
          Esempio: una prestazione attesa di 1.000 € tra 3 anni con probabilità 0,2 e tasso risk-free 1% vale circa 197 € oggi.
          Fonte: McCutcheon & Scott, An Introduction to Actuarial Mathematics 2013.
        </p>
        <h3>Cenni su modelli di rischio e sopravvivenza</h3>
        <p>
          Modelli classici includono distribuzioni di frequenza/severità (Poisson-Gamma) e tavole di mortalità (modello di Makeham) per stimare
          le probabilità di sinistro o sopravvivenza. Fonte: Bowers et al., Actuarial Mathematics for Life Contingent Risks 2015.
        </p>
      </section>
    </Layout>
  );
}
