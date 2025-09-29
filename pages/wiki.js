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
          <dt>Best Estimate Liability (BEL)</dt>
          <dd>
            Valore attuale atteso delle passività assicurative calcolato con ipotesi best estimate e curve risk-free coerenti con Solvency II.
            Fonte: EIOPA, Solvency II Technical Specifications for Preparatory Phase 2023.
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
          <dt>Premio lordo</dt>
          <dd>
            Importo complessivo versato dal contraente che comprende premio puro, caricamenti e imposte secondo le direttive di distribuzione assicurativa.
            Fonte: IVASS Regolamento n. 41/2018 su informativa, pubblicità e realizzazione dei prodotti assicurativi.
          </dd>
          <dt>Tavole di mortalità generazionali</dt>
          <dd>
            Tabelle demografiche che proiettano le probabilità di sopravvivenza per coorti di nascita incorporando trend di longevità e rischi sistemici.
            Fonte: Ordine degli Attuari, Linee guida sull&apos;utilizzo delle basi demografiche generazionali 2022.
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
      <section className="info-panel" aria-labelledby="ricerche-attuariali">
        <h2 id="ricerche-attuariali">Ricerche attuariali selezionate e approfondimenti</h2>
        <p>
          Questa rassegna mette in evidenza studi peer-reviewed o working paper utili alla pratica attuariale. ⚠️{" "}
          <strong>Disclaimer:</strong> le note seguenti sono pensate per orientare l&apos;approfondimento personale e non sostituiscono
          pareri professionali né linee guida regolamentari ufficiali.
        </p>
        <h3>Paper e studi da tenere d&apos;occhio</h3>
        <ol>
          <li>
            <h4>Antonio &amp; Plat (2014) — Micro-level stochastic loss reserving for general insurance</h4>
            <p>
              <strong>Fonte:</strong>{" "}
              <a
                href="https://onlinelibrary.wiley.com/doi/10.1111/jori.12029"
                rel="noopener noreferrer"
                target="_blank"
              >
                Journal of Risk and Insurance
              </a>
            </p>
            <p>
              <strong>Sintesi:</strong> propone modelli granulari su singolo sinistro che combinano componenti di frequenza e severità con
              covariate assicurative, riducendo la dipendenza da assunzioni aggregate.
            </p>
            <p>
              <strong>Applicazioni pratiche:</strong> utile per compagnie con data warehouse strutturati che vogliono raffinare i triangoli di
              riserva tradizionali con tecniche micro-level e gradient boosting.
            </p>
          </li>
          <li>
            <h4>Koijen &amp; Yogo (2016) — The cost of financial frictions for life insurers</h4>
            <p>
              <strong>Fonte:</strong>{" "}
              <a
                href="https://www.aeaweb.org/articles?id=10.1257/aer.20130876"
                rel="noopener noreferrer"
                target="_blank"
              >
                American Economic Review
              </a>
            </p>
            <p>
              <strong>Sintesi:</strong> analizza come le restrizioni di capitale e le frizioni finanziarie influenzino prezzi, offerta di
              prodotti vita e allocazioni di portafoglio nel lungo periodo.
            </p>
            <p>
              <strong>Applicazioni pratiche:</strong> supporta stress test interni IFRS 17 e ORSA nel valutare scenari di liquidità e
              compressione dei margini in contesti di tassi bassi.
            </p>
          </li>
          <li>
            <h4>Bauer, Reuss &amp; Singer (2012) — On the calculation of the Solvency Capital Requirement based on nested simulations</h4>
            <p>
              <strong>Fonte:</strong>{" "}
              <a
                href="https://www.cambridge.org/core/journals/astin-bulletin/article/on-the-calculation-of-the-solvency-capital-requirement-based-on-nested-simulations/"
                rel="noopener noreferrer"
                target="_blank"
              >
                ASTIN Bulletin
              </a>
            </p>
            <p>
              <strong>Sintesi:</strong> approfondisce tecniche di simulazione annidata per il calcolo dello SCR, con focus su efficienza
              computazionale e accuratezza statistica.
            </p>
            <p>
              <strong>Applicazioni pratiche:</strong> rilevante per i team di risk management che valutano modelli interni parziali o completi
              in contesti Solvency II.
            </p>
          </li>
        </ol>
        <h3>Approfondimenti disponibili</h3>
        <ul>
          <li>
            Schede riassuntive con formule chiave e indicatori da monitorare (SCR ratio, variazioni best estimate liabilities).
          </li>
          <li>
            Template di lettura critica per confrontare metodologie statistiche e requisiti IVASS/EIOPA.
          </li>
          <li>
            Collegamenti a talk, podcast e webinar per continuare l&apos;aggiornamento professionale.
          </li>
        </ul>
        <h3>Roadmap editoriale</h3>
        <ol>
          <li>Pubblicazione di schede sintetiche sui principali filoni di ricerca vita, danni e previdenza.</li>
          <li>Sviluppo di casi applicativi con dataset anonimizzati per sperimentare le tecniche descritte.</li>
          <li>Interviste con ricercatori italiani ed europei su innovazioni in risk management e fintech attuariale.</li>
        </ol>
        <h3>Tag tematici</h3>
        <ul>
          <li>
            <strong>#RiskManagement</strong> — metriche di capitale, ORSA e governance prudenziale.
          </li>
          <li>
            <strong>#DataAnalytics</strong> — uso di ML, gradient boosting e Bayesian updating nei modelli attuariali.
          </li>
          <li>
            <strong>#Regolamentazione</strong> — riferimenti a Solvency II, IFRS 17 e best practice EIOPA/IVASS.
          </li>
        </ul>
        <p>
          🔍{" "}
          <strong>Nota finale:</strong> le risorse indicate sono a scopo divulgativo; verifica sempre gli aggiornamenti normativi e le
          politiche interne della tua organizzazione prima di implementare modifiche operative.
        </p>
      </section>
    </Layout>
  );
}
