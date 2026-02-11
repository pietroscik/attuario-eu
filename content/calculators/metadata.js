export const CALCULATOR_METADATA = {
  "annuity": {
    level: "base",
    levelLabel: "Livello base",
    languages: ["R", "Python"],
    hypotheses: [
      "Pagamenti costanti con frequenza regolare e senza indicizzazione interna.",
      "Tassi di attualizzazione deterministici lungo l'orizzonte considerato.",
      "Sopravvivenza modellata con tavole demografiche omogenee per età e genere.",
    ],
    academicSources: [
      {
        label: "Dickson, Hardy, Waters (2013) — Actuarial Mathematics for Life Contingent Risks",
        detail:
          "Capitoli 3-5 sulle rendite immediate e differite, con derivazioni per valori attuali e funzioni di commutazione.",
        href: "https://www.cambridge.org/core/books/actuarial-mathematics-for-life-contingent-risks/",
      },
      {
        label: "Bowers et al. (1997) — Actuarial Mathematics",
        detail: "Paragrafo su annuity-due vs annuity-immediate e sui fattori di conversione per pagamenti frazionati.",
        href: "https://www.soa.org/globalassets/assets/files/edu/edu-2013-catalog-actuarial-mathematics.pdf",
      },
    ],
    validity: [
      "Valido per schemi con rendite fisse; per benefit collegati a indici o partecipazioni è necessaria una proiezione stocastica.",
      "Non considera carichi fiscali o di gestione: integrarli nel profit testing aziendale.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Formula di valore attuale Σ v^t con riferimento ai fattori di commutazione a:n illustrati in Dickson et al.",
        href: "https://openacttexts.github.io/LifeContingencies/Annuities.html",
      },
      {
        type: "Pratica",
        description:
          "Utilizzabile per quotare conversioni da montante a rendita nei fondi pensione negoziali e aperti.",
      },
      {
        type: "Normativa",
        description:
          "Supporta le verifiche sui tassi di trasformazione ai sensi del D.Lgs. 252/2005 e delle comunicazioni COVIP.",
        href: "https://www.covip.it/",
      },
    ]
  },
  "black-scholes": {
    level: "avanzato",
    levelLabel: "Livello avanzato",
    languages: ["Python", "R"],
    hypotheses: [
      "Prezzo del sottostante che segue un moto browniano geometrico con volatilità costante.",
      "Mercato perfetto: assenza di arbitraggio, possibilità di copertura continua e tassi risk-free costanti.",
      "Nessun dividendo durante la vita dell'opzione (o dividendo continuo espresso tramite yield).",
    ],
    academicSources: [
      {
        label: "Black & Scholes (1973) — The Pricing of Options and Corporate Liabilities",
        detail: "Articolo fondativo con la derivazione PDE e soluzione chiusa per opzioni europee.",
        href: "https://doi.org/10.1086/260062",
      },
      {
        label: "Merton (1973) — Theory of Rational Option Pricing",
        detail: "Estende il framework a dividendi, opzioni americane e strutture di tasso variabile.",
        href: "https://doi.org/10.2307/1831021",
      },
    ],
    validity: [
      "Adeguato per opzioni europee su sottostanti liquidi; per prodotti strutturati vita occorre includere barriere e discrepanze di volatilità implicita.",
      "Sensibile alle stime di volatilità: confrontare implied vs historical e documentare la scelta.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Soluzione della PDE di Black–Scholes e legame con il martingala risk-neutral descritto in Björk (2009).",
        href: "https://global.oup.com/academic/product/arbitrage-theory-in-continuous-time-9780199574742",
      },
      {
        type: "Pratica",
        description:
          "Utile per calcolare le greche da inserire nel reporting ORSA su prodotti unit-linked con garanzie finanziarie.",
      },
      {
        type: "Normativa",
        description:
          "Supporta le analisi richieste da Solvency II per il modulo Market Risk – sub-module Equity e SCR per opzioni e garanzie.",
        href: "https://www.eiopa.europa.eu/document-library",
      },
    ]
  },
  "capm": {
    level: "base",
    levelLabel: "Livello base",
    languages: ["Python", "R"],
    hypotheses: [
      "Investitori razionali con aspettative omogenee e mercati completi.",
      "Rendimento del portafoglio di mercato rappresentato da un indice diversificato.",
      "Relazione lineare tra rischio sistematico (beta) e rendimento atteso.",
    ],
    academicSources: [
      {
        label: "Sharpe (1964) — Capital Asset Prices",
        detail: "Derivazione originale del CAPM con portafoglio di mercato efficiente.",
        href: "https://doi.org/10.2307/2329297",
      },
      {
        label: "Lintner (1965) — The Valuation of Risk Assets",
        detail: "Estende il modello con la prospettiva dell'equilibrio competitivo.",
        href: "https://doi.org/10.1111/j.1540-6261.1965.tb02930.x",
      },
    ],
    validity: [
      "Adatto per analisi preliminari di costo del capitale; confrontare con approcci multi-factor (es. Fama-French) per portafogli complessi.",
      "Non incorpora rischio di illiquidità o specifico: documentare eventuali premi addizionali applicati nella valutazione attuariale.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Legame con la frontiera efficiente di Markowitz e la Security Market Line presentata nei corsi di finanza attuariale.",
        href: "https://doi.org/10.1111/j.1540-6261.1952.tb01525.x",
      },
      {
        type: "Pratica",
        description:
          "Utilizzato per stimare il tasso di sconto nel business plan assicurativo e nei test di redditività di nuovi prodotti.",
      },
      {
        type: "Normativa",
        description:
          "Rilevante per determinare il costo del capitale (CoC) nel calcolo del Risk Margin Solvency II e nei modelli ORSA.",
        href: "https://www.ivass.it/normativa/nazionale/lettere/2022/note-orientamento-orsa/index.html",
      },
    ]
  },
  "duration-convexity": {
    level: "intermedio",
    levelLabel: "Livello intermedio",
    languages: ["R", "Python"],
    hypotheses: [
      "Cedole costanti e pagate con frequenza regolare senza clausole di opzione embedded.",
      "Rendimento a scadenza costante per tutta la curva di sconto utilizzata.",
      "Nessun rischio di default o variazione di spread di credito durante l'orizzonte analizzato.",
    ],
    academicSources: [
      {
        label: "Macaulay (1938) — Some Theoretical Problems Suggested by the Movements of Interest Rates",
        detail: "Introduce il concetto di duration come media ponderata delle scadenze dei flussi.",
        href: "https://www.nber.org/books-and-chapters/",
      },
      {
        label: "Fabozzi & Mann (2012) — The Handbook of Fixed Income Securities",
        detail: "Capitolo dedicato a duration, convexity e tecniche di immunizzazione per portafogli obbligazionari.",
        href: "https://www.mhprofessional.com/9780071768466-usa-the-handbook-of-fixed-income-securities",
      },
    ],
    validity: [
      "Accuracy elevata per piccoli shock di tasso (±200 bps). Per movimenti maggiori è necessario usare modelli di scenario non lineari.",
      "Non considera variazioni di spread creditizio né opzioni embedded (callable, putable).",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Derivata prima e seconda del prezzo rispetto al rendimento e relazione con Taylor series in Fabozzi & Mann.",
        href: "https://doi.org/10.2139/ssrn.2176592",
      },
      {
        type: "Pratica",
        description:
          "Base per verificare l'allineamento duration asset/liability nei report ALM e nel Risk Appetite Framework.",
      },
      {
        type: "Normativa",
        description:
          "Rilevante per i test di sensitività tasso previsti da Solvency II e dal Regolamento IVASS n. 38/2018.",
        href: "https://www.ivass.it/it/normativa/regolamenti",
      },
    ]
  },
  "pensione-indicizzata": {
    level: "intermedio",
    levelLabel: "Livello intermedio",
    languages: ["Python"],
    hypotheses: [
      "Contributi costanti indicizzati a un tasso di crescita salariale definito.",
      "Rivalutazione della posizione maturata legata a un indice di rendimento definito dal regolamento del fondo.",
      "Tassi di uscita (turnover, pensionamento) deterministici e uniformi per coorti omogenee.",
    ],
    academicSources: [
      {
        label: "Pitacco et al. (2009) — Health Insurance",
        detail: "Sezioni su schemi pensionistici e accumulazione contributiva con indicizzazione dei benefit.",
        href: "https://doi.org/10.1007/978-3-540-78911-6",
      },
      {
        label: "Cairns, Blake, Dowd (2006) — Pricing Pension Insurance",
        detail: "Analisi dei meccanismi di rivalutazione e dei rischi di longevità nei fondi a contribuzione definita.",
        href: "https://doi.org/10.1111/j.1539-6975.2006.00192.x",
      },
    ],
    validity: [
      "Approccio deterministico: per stress ESG o longevity occorrono simulazioni stocastiche e scenari multipli.",
      "Non considera costi di switching o garantiti minimi oltre l'indicizzazione impostata.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Modello di accumulo contributivo con capitalizzazione composta come da manuali di previdenza complementare.",
      },
      {
        type: "Pratica",
        description:
          "Supporta la redazione delle schede sintetiche da fornire agli iscritti e la disclosure periodica ex COVIP.",
      },
      {
        type: "Normativa",
        description:
          "In linea con i requisiti informativi del D.Lgs. 252/2005 e con le Delibere COVIP su trasparenza e comparabilità.",
        href: "https://www.covip.it/la-normativa/",
      },
    ]
  },
  "portafoglio-variabile": {
    level: "avanzato",
    levelLabel: "Livello avanzato",
    languages: ["Python", "R"],
    hypotheses: [
      "Rendimenti asset modellati con distribuzioni normali stimate da serie storiche.",
      "Correlazioni stabili nel periodo di analisi e calcolate su dati coerenti per frequenza e orizzonte.",
      "Calcolo del VaR basato su approccio parametrico (varianza-covarianza).",
    ],
    academicSources: [
      {
        label: "Markowitz (1952) — Portfolio Selection",
        detail: "Deriva la frontiera efficiente utilizzata per l'ottimizzazione rischio-rendimento.",
        href: "https://doi.org/10.1111/j.1540-6261.1952.tb01525.x",
      },
      {
        label: "Jorion (2007) — Value at Risk",
        detail: "Approfondisce il calcolo parametrico del VaR e le sue limitazioni in presenza di code grasse.",
        href: "https://www.mheducation.com/cover-images/Jpeg_400-high/0071464956.jpeg",
      },
    ],
    validity: [
      "La frontiera efficiente cambia con i dati: aggiornare periodicamente le stime e verificare la robustezza.",
      "Il VaR parametrico sottostima il rischio in presenza di distribuzioni non gaussiane: valutare CVaR o simulazioni Monte Carlo.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Si appoggia alla mean-variance optimization e all'approccio matrice di covarianza discusso nei corsi di finanza quantitativa.",
      },
      {
        type: "Pratica",
        description:
          "Consente di produrre grafici da allegare al report ORSA e alla documentazione del Risk Appetite Framework.",
      },
      {
        type: "Normativa",
        description:
          "Contribuisce al monitoraggio dei limiti di concentrazione previsti da Solvency II e dalle Linee guida IVASS su investimenti.",
        href: "https://www.ivass.it/it/normativa/circolari-e-lettere/circolari",
      },
    ]
  },
  "premio-puro": {
    level: "base",
    levelLabel: "Livello base",
    languages: ["R", "Python"],
    hypotheses: [
      "Frequenza dei sinistri modellata come probabilità annua indipendente dagli anni precedenti.",
      "Severità media stimata su distribuzioni a supporto positivo con momento primo finito.",
      "Assenza di inflazione o trend: eventuali adeguamenti devono essere applicati esternamente.",
    ],
    academicSources: [
      {
        label: "Klugman, Panjer, Willmot (2012) — Loss Models",
        detail: "Capitoli su frequenza × severità e modelli collettivi per la tariffazione danni.",
        href: "https://www.wiley.com/en-us/Loss+Models%3A+From+Data+to+Decisions%2C+4th+Edition-p-9781118315323",
      },
      {
        label: "Werner & Modlin (2016) — Basic Ratemaking",
        detail: "Guida CAS su raccolta dati, trending e calcolo dei premi puri.",
        href: "https://doi.org/10.1017/9781108974358",
      },
    ],
    validity: [
      "Adatto a prodotti con frequenza moderata; per coperture catastrofali considerare modelli di severità heavy-tail.",
      "Non incorpora esplicitamente requisiti di capitale o margini di profitto: aggiungerli separatamente.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Richiama il principio di equivalenza attuariale e i modelli collettivi illustrati in Loss Models.",
      },
      {
        type: "Pratica",
        description:
          "Impiego per quotazioni rapide e controlli di coerenza nei fascicoli tecnici dei prodotti danni.",
      },
      {
        type: "Normativa",
        description:
          "Coerente con le indicazioni IVASS su trasparenza tariffaria e monitoraggio del loss ratio tecnico.",
        href: "https://www.ivass.it/it/normativa/circolari-e-lettere",
      },
    ]
  },
  "premio-unico": {
    level: "intermedio",
    levelLabel: "Livello intermedio",
    languages: ["R", "Python"],
    hypotheses: [
      "Evento assicurato che si verifica al termine della durata con probabilità omogenea sull'intervallo.",
      "Tasso tecnico deterministico applicato all'intero periodo contrattuale.",
      "Caricamenti trattati come percentuale o importo fisso separati dal premio puro.",
    ],
    academicSources: [
      {
        label: "Dickson, Hardy, Waters (2013) — Actuarial Mathematics for Life Contingent Risks",
        detail: "Capitolo sui premi unici e sulla relazione fra valore attuale del benefit e premio.",
        href: "https://www.soa.org/education/exam-req/syllabus-study/exam-ltam/",
      },
      {
        label: "CEA (2007) — Profit Testing for Life Insurance",
        detail: "Linee guida pratiche su caricamenti e margini di sicurezza nel pricing vita.",
        href: "https://www.insuranceeurope.eu/",
      },
    ],
    validity: [
      "Modello indicato per contratti senza opzioni complesse; per prodotti con partecipazione agli utili serve una proiezione multi-scenario.",
      "Non valuta il rischio di reinvestimento: verificare la coerenza con la politica ALM dell'impresa.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Equilibrio attuariale premio = valore attuale della prestazione, come da manualistica vita.",
      },
      {
        type: "Pratica",
        description:
          "Permette di predisporre le schede POG e gli allegati IVASS con ipotesi documentate.",
      },
      {
        type: "Normativa",
        description:
          "In linea con Regolamento IVASS n. 41/2018 su informativa precontrattuale e gestione caricamenti.",
        href: "https://www.ivass.it/it/normativa/regolamenti",
      },
    ]
  },
  "riserva-semplice": {
    level: "intermedio",
    levelLabel: "Livello intermedio",
    languages: ["R", "Python"],
    hypotheses: [
      "Sinistri aperti con costo medio residuo stimato in modo deterministico.",
      "IBNR calcolata come percentuale dell'esposto oppure tramite fattori prefissati.",
      "Nessun adeguamento per inflazione o sviluppo tardivo dei sinistri oltre l'orizzonte considerato.",
    ],
    academicSources: [
      {
        label: "Mack (1993) — Distribution-free Calculation of the Standard Error of Chain Ladder Reserve Estimates",
        detail: "Fornisce il collegamento con i metodi stocastici di riservazione utili per calibrare i fattori IBNR.",
        href: "https://doi.org/10.1016/0167-6687(93)91061-3",
      },
      {
        label: "Wüthrich & Merz (2008) — Stochastic Claims Reserving Methods",
        detail: "Capitoli su metodi deterministici vs stocastici e confronto con stime a costo medio.",
        href: "https://doi.org/10.1007/978-3-540-78484-5",
      },
    ],
    validity: [
      "Utile per controlli di coerenza rapidi; per bilanci ufficiali adottare modelli triangolo o Bornhuetter-Ferguson.",
      "Richiede monitoraggio periodico delle latenze di pagamento per evitare sottostime sistematiche.",
    ],
    connections: [
      {
        type: "Teoria",
        description:
          "Sintesi del metodo costo medio e legami con i fattori di sviluppo dei triangoli sinistri.",
      },
      {
        type: "Pratica",
        description:
          "Supporta la predisposizione del fascicolo tecnico e dei memo per la Funzione Attuariale.",
      },
      {
        type: "Normativa",
        description:
          "Coerente con Regolamento IVASS n. 38/2018 sui presidi di calcolo delle riserve tecniche.",
        href: "https://www.ivass.it/it/normativa/regolamenti",
      },
    ]
  },
};
