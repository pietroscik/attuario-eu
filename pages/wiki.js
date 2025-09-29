import { useState } from "react";
import Layout from "../components/Layout";

export default function Wiki() {
  const researchPapers = [
    {
      id: "antonio-plat-2014",
      title: "Micro-level stochastic loss reserving for general insurance",
      authors: "Antonio & Plat (2014)",
      sourceLabel: "Journal of Risk and Insurance",
      sourceHref: "https://onlinelibrary.wiley.com/doi/10.1111/jori.12029",
      summary:
        "Propone modelli granulari su singolo sinistro che combinano componenti di frequenza e severità con covariate assicurative, riducendo la dipendenza da assunzioni aggregate.",
      applications:
        "Utile per compagnie con data warehouse strutturati che vogliono raffinare i triangoli di riserva tradizionali con tecniche micro-level e gradient boosting.",
    },
    {
      id: "koijen-yogo-2016",
      title: "The cost of financial frictions for life insurers",
      authors: "Koijen & Yogo (2016)",
      sourceLabel: "American Economic Review",
      sourceHref: "https://www.aeaweb.org/articles?id=10.1257/aer.20130876",
      summary:
        "Analizza come le restrizioni di capitale e le frizioni finanziarie influenzino prezzi, offerta di prodotti vita e allocazioni di portafoglio nel lungo periodo.",
      applications:
        "Supporta stress test interni IFRS 17 e ORSA nel valutare scenari di liquidità e compressione dei margini in contesti di tassi bassi.",
    },
    {
      id: "bauer-reuss-singer-2012",
      title:
        "On the calculation of the Solvency Capital Requirement based on nested simulations",
      authors: "Bauer, Reuss & Singer (2012)",
      sourceLabel: "ASTIN Bulletin",
      sourceHref:
        "https://www.cambridge.org/core/journals/astin-bulletin/article/on-the-calculation-of-the-solvency-capital-requirement-based-on-nested-simulations/",
      summary:
        "Approfondisce tecniche di simulazione annidata per il calcolo dello SCR, con focus su efficienza computazionale e accuratezza statistica.",
      applications:
        "Rilevante per i team di risk management che valutano modelli interni parziali o completi in contesti Solvency II.",
    },
  ];

  const [openCards, setOpenCards] = useState(() =>
    researchPapers.reduce((acc, paper) => ({ ...acc, [paper.id]: false }), {})
  );

  const handleToggle = (paperId) => {
    setOpenCards((prev) => ({ ...prev, [paperId]: !prev[paperId] }));
  };

  return (
    <Layout
      title="Wiki attuariale"
      eyebrow="Knowledge base"
      intro="Sezione dedicata a glossari, FAQ e snippet normativi riutilizzabili. Popola questa pagina con articoli o collegamenti alla tua base di conoscenza."
    >
      <style jsx>{`
        .research-grid {
          display: grid;
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .research-card {
          background: var(--card-background, #fff);
          border: 1px solid rgba(148, 163, 184, 0.35);
          border-radius: 16px;
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
          padding: 1.5rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .research-card:hover,
        .research-card:focus-within {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
        }

        .research-card h4 {
          font-size: 1.1rem;
          line-height: 1.4;
          margin: 0 0 0.75rem;
        }

        .research-card__authors {
          color: rgb(71, 85, 105);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .research-card__source,
        .research-card__summary {
          margin: 0 0 0.75rem;
        }

        .research-card__source a {
          color: inherit;
          text-decoration: underline;
          text-decoration-color: rgba(59, 130, 246, 0.6);
        }

        .toggle-button {
          background: linear-gradient(135deg, #2563eb, #1e3a8a);
          border: none;
          border-radius: 9999px;
          color: #fff;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.55rem 1.5rem;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .toggle-button:hover,
        .toggle-button:focus-visible {
          background: linear-gradient(135deg, #1d4ed8, #172554);
          outline: none;
          transform: translateY(-1px);
        }

        .toggle-details {
          border-top: 1px solid rgba(148, 163, 184, 0.3);
          display: none;
          margin-top: 1rem;
          padding-top: 1rem;
        }

        .toggle-details.is-visible {
          display: block;
        }

        .toggle-details p {
          margin: 0;
        }
      `}</style>
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
        <h3>Obblighi IDD e requisiti POG</h3>
        <p>
          La Direttiva (UE) 2016/97 e il Regolamento Delegato (UE) 2017/2358 richiedono presidi sul Product Oversight and Governance con
          recepimento locale IVASS (Reg. n. 45/2020) per documentare target market, test di valore e sorveglianza continua sui prodotti.
        </p>
        <ul>
          <li>Formalizzare la policy POG con ruoli, responsabilità e metriche di monitoraggio.</li>
          <li>Validare almeno annualmente il target market e gli scenari di detrimento della clientela.</li>
          <li>Archiviare evidenze dei comitati di product approval e delle verifiche di value for money.</li>
        </ul>
        <h3>Reporting SFCR e obblighi di trasparenza</h3>
        <p>
          Il Regolamento Delegato (UE) 2015/35, le Linee guida EIOPA sul reporting (2020) e il Regolamento IVASS n. 33/2016 impongono la
          pubblicazione annuale dello SFCR, il deposito dei QRT e il coordinamento con l&apos;Autorità di vigilanza per eventuali richieste di
          approfondimento.
        </p>
        <p>
          La Relazione della Funzione Attuariale e l&apos;attestazione sulle riserve tecniche devono essere allineate con il perimetro SFCR,
          recependo i rimandi del Regolamento IVASS n. 38/2018 e delle EIOPA ORSA/SFCR Guidelines su governance, coerenza tra informativa
          quantitativa e narrativa e follow-up delle raccomandazioni.
        </p>
        <ul>
          <li>Preparare perimetro dati e controlli qualità per QRT trimestrali/annuali e narrativo SFCR.</li>
          <li>Validare i dataset tecnici (portafoglio, sinistri, riassicurazione) con log di qualità condivisi tra attuario e funzione dati.</li>
          <li>Eseguire riconciliazioni puntuali tra BEL, SCR e disclosure quantitative per evitare incoerenze nei template.</li>
          <li>Approvare lo SFCR in CdA, pubblicarlo entro i termini e conservarne l&apos;edizione digitale firmata.</li>
          <li>Coordinare funzioni Risk, Compliance e Attuariato per il processo di attestazione Solvency II e tracciarne le raccomandazioni attuariali fino alla chiusura.</li>
        </ul>
        <h3>Governance del rischio e ORSA</h3>
        <p>
          Le Linee guida EIOPA sul sistema di governance (2017), le raccomandazioni della Commissione europea sul risk management e il
          Regolamento IVASS n. 38/2018 richiedono un&apos;ORSA prospettica, politiche di rischio documentate e flussi informativi verso il CdA.
        </p>
        <ul>
          <li>Aggiornare il risk appetite framework con metriche quantitative e qualitative coerenti con lo SCR.</li>
          <li>Eseguire almeno annualmente l&apos;ORSA, includendo scenari di stress e piani di recupero del capitale.</li>
          <li>Definire una checklist di follow-up per le azioni ORSA e tracciarne lo stato di avanzamento.</li>
        </ul>
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
        <div className="research-grid" role="list">
          {researchPapers.map((paper, index) => {
            const detailsId = `${paper.id}-details-${index}`;
            const isOpen = openCards[paper.id];

            return (
              <div className="research-card" key={paper.id} role="listitem">
                <p className="research-card__authors">{paper.authors}</p>
                <h4>{paper.title}</h4>
                <p className="research-card__source">
                  <strong>Fonte:</strong>{" "}
                  <a href={paper.sourceHref} rel="noopener noreferrer" target="_blank">
                    {paper.sourceLabel}
                  </a>
                </p>
                <p className="research-card__summary">
                  <strong>Sintesi:</strong> {paper.summary}
                </p>
                <button
                  type="button"
                  className="toggle-button"
                  aria-expanded={isOpen}
                  aria-controls={detailsId}
                  onClick={() => handleToggle(paper.id)}
                >
                  {isOpen ? "Nascondi applicazioni pratiche" : "Mostra applicazioni pratiche"}
                </button>
                <div
                  id={detailsId}
                  className={`toggle-details${isOpen ? " is-visible" : ""}`}
                  hidden={!isOpen}
                >
                  <p>
                    <strong>Applicazioni pratiche:</strong> {paper.applications}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
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
