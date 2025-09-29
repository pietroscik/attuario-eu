export const THEORY_TOPICS = [
  {
    title: "Matematica attuariale di base",
    items: [
      "Valore attuale atteso e criteri di equivalenza",
      "Tavole di mortalità discrete e continue",
      "Rendite temporanee, vitalizie e differite",
      "Modelli a tempo continuo e discreto per il calcolo delle prime",
    ],
  },
  {
    title: "Modelli di sopravvivenza e rischio",
    items: [
      "Leggi di mortalità (Makeham, Gompertz)",
      "Model point e costruzione di tavole generazionali",
      "Probabilità congiunte e copule per rischi multipli",
      "Inferenza bayesiana e stima parametrica/non parametrica",
    ],
  },
  {
    title: "Teoria delle assicurazioni",
    items: [
      "Premi puri, caricamenti e equilibrio tecnico",
      "Metodi di credibilità classici e Bayesiani",
      "Distribuzioni per sinistri danni e riassicurazione",
      "Riserve sinistri con modelli GLM e GLMM",
    ],
  },
  {
    title: "Riserve tecniche",
    items: [
      "Catene di Markov per sinistri vita",
      "Triangoli (Chain Ladder, Bornhuetter-Ferguson)",
      "Approccio stocastico con Bootstrap e Mack",
      "Tecniche di aggregazione e granularità micro-level",
    ],
  },
  {
    title: "Finanza attuariale",
    items: [
      "Duration, convexity e immunizzazione",
      "Asset Liability Management (ALM)",
      "Gestione integrata del rischio con metriche VaR / TVaR",
      "Opzioni incorporate e replicating portfolio",
    ],
  },
  {
    title: "Normativa e governance",
    items: [
      "Framework Solvency II: moduli, SCR e ORSA",
      "IFRS 17: modelli di valutazione e disclosure",
      "Enterprise Risk Management e framework di controllo interno",
      "Principi attuariali professionali e standard IVASS/EIOPA",
    ],
  },
];

export const THEORY_RESEARCH_HIGHLIGHTS = [
  {
    title: "Principio di equivalenza attuariale",
    description:
      "Il premio è definito come valore attuale atteso dei flussi di prestazione, così da bilanciare incassi e pagamenti su base probabilistica. Il testo chiarisce come il tasso tecnico e le basi demografiche condizionano l'equilibrio contrattuale e la capitalizzazione dei premi.",
  },
  {
    title: "Leggi di mortalità e intensità di rischio",
    description:
      "Le funzioni di sopravvivenza derivano dalla forza di mortalità µ_x(t) modellata, ad esempio, con le leggi di Gompertz o Makeham. La sintesi mostra come stimare i parametri da tavole di esperienza e come utilizzare i risultati nelle valutazioni attuariali di durata di vita residua.",
  },
  {
    title: "Premi puri, caricamenti e credibilità",
    description:
      "Il premio puro nasce dal valore atteso del sinistro, mentre i caricamenti introducono margini per spese, rischio e utile. L'approfondimento descrive modelli individuali e collettivi, richiama il principio della varianza e illustra come i metodi di credibilità ponderano l'esperienza del portafoglio con le basi di riferimento.",
  },
  {
    title: "Riserve prospettiche e retrospettive",
    description:
      "La riserva tecnica rappresenta il valore attuale delle prestazioni future al netto dei premi futuri e può essere calcolata in ottica prospettica o retrospettiva. La descrizione spiega la dinamica delle catene di pagamento, il ruolo delle assunzioni economiche e demografiche e l'impiego di modelli stocastici per stimare l'IBNR.",
  },
  {
    title: "ALM e misure di rischio finanziario",
    description:
      "Duration e convexity sono utilizzate per immunizzare il portafoglio contro variazioni di tasso, coordinando attivi e passivi. L'approfondimento collega l'Asset Liability Management a metriche di rischio come VaR e TVaR, evidenziando l'uso di scenari deterministici e simulazioni stocastiche per la gestione del capitale.",
  },
  {
    title: "Gestione integrata del rischio climatico",
    description:
      "Linee guida per incorporare scenari climatici nei modelli attuariali, misurare l’esposizione fisica e di transizione e costruire stress test coerenti con le raccomandazioni NGFS.",
  },
  {
    title: "Modelli di longevity avanzati",
    description:
      "Introduzione a Lee-Carter, Cairns-Blake-Dowd e approcci multi-population, con esempi su come calibrare i parametri e valutare il rischio di miglioramento della sopravvivenza.",
  },
  {
    title: "📌 Micro-level stochastic loss reserving for general insurance",
    description:
      "Propone modelli granulari su singolo sinistro che combinano componenti di frequenza e severità con covariate assicurative, riducendo la dipendenza da assunzioni aggregate.",
    slug: "/wiki/ricerche-attuariali.html#antonio-plat-2014",
  },
  {
    title: "📊 The cost of financial frictions for life insurers",
    description:
      "Analizza come le restrizioni di capitale e le frizioni finanziarie influenzino prezzi, offerta di prodotti vita e allocazioni di portafoglio nel lungo periodo.",
    slug: "/wiki/ricerche-attuariali.html#koijen-yogo-2016",
  },
  {
    title: "🧮 On the calculation of the Solvency Capital Requirement based on nested simulations",
    description:
      "Approfondisce tecniche di simulazione annidata per il calcolo dello SCR, con focus su efficienza computazionale e accuratezza statistica.",
    slug: "/wiki/ricerche-attuariali.html#bauer-reuss-singer-2012",
  },
  {
    title: "📈 Machine learning in reserving: a practitioner’s guide",
    description:
      "Best practice per integrare gradient boosting, reti neurali e explainable AI nei processi di reserving, con riferimento alle linee guida dell’Institute and Faculty of Actuaries.",
    slug: "/wiki/ricerche-attuariali.html#ifoa-ml-reserving-2021",
  },
  {
    title: "🔍 Fairness e trasparenza nei modelli assicurativi",
    description:
      "Panoramica degli standard etici emergenti su pricing e underwriting algoritmico, con esempi di metriche di fairness e approcci di mitigazione.",
    slug: "/wiki/ricerche-attuariali.html#fairness-insurance-2022",
  },
];
