export const THEORY_TOPICS = [
  {
    title: "Matematica attuariale di base",
    items: [
      "Valore attuale atteso e criteri di equivalenza",
      "Tavole di mortalità discrete e continue",
      "Rendite temporanee, vitalizie e differite",
    ],
  },
  {
    title: "Modelli di sopravvivenza e rischio",
    items: [
      "Leggi di mortalità (Makeham, Gompertz)",
      "Model point e costruzione di tavole generazionali",
      "Probabilità congiunte e copule per rischi multipli",
    ],
  },
  {
    title: "Teoria delle assicurazioni",
    items: [
      "Premi puri, caricamenti e equilibrio tecnico",
      "Metodi di credibilità classici e Bayesiani",
      "Distribuzioni per sinistri danni e riassicurazione",
    ],
  },
  {
    title: "Riserve tecniche",
    items: [
      "Catene di Markov per sinistri vita",
      "Triangoli (Chain Ladder, Bornhuetter-Ferguson)",
      "Approccio stocastico con Bootstrap e Mack",
    ],
  },
  {
    title: "Finanza attuariale",
    items: [
      "Duration, convexity e immunizzazione",
      "Asset Liability Management (ALM)",
      "Gestione integrata del rischio con metriche VaR / TVaR",
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
];
