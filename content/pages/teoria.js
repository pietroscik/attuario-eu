export const THEORY_TOPICS = [
  {
    title: "Livello base · Fondamenti attuariali",
    difficulty: "base",
    items: [
      {
        label: "Valore attuale atteso e criteri di equivalenza",
        summary:
          "Richiamo dei fattori di sconto, del tasso tecnico e delle basi demografiche da impiegare per calcolare premi unici o periodici in equilibrio attuariale.",
        difficulty: "base",
        resources: [
          {
            label: "Calcolatore di premio puro",
            href: "/calcolatori/premio-puro",
          },
          {
            label: "Open Actuarial Text – Life Contingencies (via Loss Data Analytics)",
            href: "https://openacttexts.github.io/Loss-Data-Analytics/chapters/life.html",
            external: true,
          },
        ],
      },
      {
        label: "Tavole di mortalità discrete e continue",
        summary:
          "Come ricavare lx, dx e qx da tavole ufficiali, interpolare i valori continui e gestire l’aggiornamento periodico per garantire basi coerenti.",
        difficulty: "base",
        resources: [
          {
            label: "Human Mortality Database",
            href: "https://www.mortality.org",
            external: true,
          },
          {
            label: "Linea guida Ordine Attuari su tavole generazionali",
            href: "https://www.ordineattuari.it/",
            external: true,
          },
        ],
      },
      {
        label: "Rendite temporanee, vitalizie e differite",
        summary:
          "Formula generale delle rendite, conversione tra rendite immediate e differite e gestione di ratei anticipati/posticipati con esempi numerici.",
        difficulty: "base",
        resources: [
          {
            label: "Calcolatore rendite attuariali",
            href: "/calcolatori/annuity",
          },
          {
            label: "Notebook Python su rendite vita",
            href: "https://colab.research.google.com/github/insightactuaries/notebooks/blob/main/annuity-illustrations.ipynb",
            external: true,
          },
        ],
      },
      {
        label: "Premi puri, caricamenti e equilibrio tecnico",
        summary:
          "Ripasso dei caricamenti di sicurezza, spese e utile, con esempi di analisi di sensitività e margini secondo Solvency II.",
        difficulty: "base",
        resources: [
          {
            label: "Calcolatore premio unico",
            href: "/calcolatori/premio-unico",
          },
          {
            label: "IFoA – Learn about actuarial science",
            href: "https://www.actuaries.org.uk/studying/learn-about-actuarial-science",
            external: true,
          },
        ],
      },
      {
        label: "Duration, convexity e immunizzazione",
        summary:
          "Misura della sensibilità ai tassi, costruzione di strategie di immunizzazione e valutazione dell’efficacia con metriche di gap duration.",
        difficulty: "base",
        resources: [
          {
            label: "Calcolatore duration & convexity",
            href: "/calcolatori/duration-convexity",
          },
          {
            label: "EIOPA – Solvency II Overview",
            href: "https://www.eiopa.europa.eu/regulation-supervision/insurance/solvency-ii_en",
            external: true,
          },
        ],
      },
      {
        label: "Principi attuariali professionali e standard IVASS/EIOPA",
        summary:
          "Panoramica sugli standard professionali italiani ed europei, con riferimenti alle norme di condotta e agli standard tecnici.",
        difficulty: "base",
        resources: [
          {
            label: "Standard professionali ONA",
            href: "https://www.ordineattuari.it/",
            external: true,
          },
        ],
      },
    ],
  },
  {
    title: "Livello intermedio · Modelli e riserve",
    difficulty: "intermedio",
    items: [
      {
        label: "Modelli a tempo continuo e discreto per il calcolo delle prime",
        summary:
          "Differenze operative fra modelli basati su integrali continui e versioni a passi discreti, con focus su ipotesi di intensità di uscita costante o variabile.",
        difficulty: "intermedio",
        resources: [
          {
            label: "Guida su premium calculation principles",
            href: "https://www.soa.org/education/exam-req/syllabus-study/exam-ltam/",
            external: true,
          },
        ],
      },
      {
        label: "Leggi di mortalità (Makeham, Gompertz)",
        summary:
          "Costruzione delle funzioni di sopravvivenza partendo dalle intensità di mortalità e analisi delle deviazioni rispetto ai dati empirici.",
        difficulty: "intermedio",
        resources: [
          {
            label: "Dispensa su modelli di mortalità (MortalityLaws)",
            href: "https://cran.r-project.org/web/packages/MortalityLaws/vignettes/MortalityLaws.pdf",
            external: true,
          },
        ],
      },
      {
        label: "Metodi di credibilità classici e Bayesiani",
        summary:
          "Dalla formula di Bühlmann-Straub agli approcci full Bayesian con esempi implementati in R e Python.",
        difficulty: "intermedio",
        resources: [
          {
            label: "Notebook credibilità in R (ChainLadder)",
            href: "https://cran.r-project.org/web/packages/ChainLadder/vignettes/ChainLadder.html",
            external: true,
          },
        ],
      },
      {
        label: "Triangoli (Chain Ladder, Bornhuetter-Ferguson)",
        summary:
          "Passaggi pratici per costruire triangoli cumulati/incorsi e utilizzare fattori di sviluppo, con confronto tra metodi classici.",
        difficulty: "intermedio",
        resources: [
          {
            label: "Notebook Chain Ladder in Python",
            href: "https://colab.research.google.com/github/casact/chainladder-python/blob/master/examples/Chainladder_Workflow.ipynb",
            external: true,
          },
        ],
      },
      {
        label: "Asset Liability Management (ALM)",
        summary:
          "Metodi deterministici e stocastici per coordinare attivi e passivi, con esempi di cash-flow matching e gestione della liquidità.",
        difficulty: "intermedio",
        resources: [
          {
            label: "Case study ALM nel wiki",
            href: "/wiki#koijen-yogo-2016",
          },
        ],
      },
      {
        label: "Framework Solvency II: moduli, SCR e ORSA",
        summary:
          "Schema modulare, requisiti quantitativi e uso dei parametri standard vs modelli interni. Include check-list per la documentazione ORSA.",
        difficulty: "intermedio",
        resources: [
          {
            label: "Sintesi Solvency II",
            href: "/wiki#normativa-spiegata-semplice",
          },
          {
            label: "EIOPA – Solvency II Overview",
            href: "https://www.eiopa.europa.eu/regulation-supervision/insurance/solvency-ii_en",
            external: true,
          },
        ],
      },
      {
        label: "Enterprise Risk Management e framework di controllo interno",
        summary:
          "Linee guida per costruire matrici dei rischi, definire livelli di tolleranza e integrare il monitoring continuo.",
        difficulty: "intermedio",
        resources: [
          {
            label: "Linee guida ERM CRO Forum",
            href: "https://www.thecroforum.org/",
            external: true,
          },
        ],
      },
    ],
  },
  {
    title: "Livello avanzato · Ricerca e specializzazioni",
    difficulty: "avanzato",
    items: [
      {
        label: "Model point e costruzione di tavole generazionali",
        summary:
          "Definizione di cluster omogenei per portafogli assicurativi, scelta delle covariate e metodi per generare proiezioni generazionali coerenti.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Esempio di workbook per model point (StMoMo)",
            href: "https://amvillegas.github.io/StMoMo/",
            external: true,
          },
        ],
      },
      {
        label: "Probabilità congiunte e copule per rischi multipli",
        summary:
          "Quando usare approcci comonotoni vs copule Archimede, con esempi di pricing di rendite reversibili e portafogli multirischio.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Manuale pacchetto copula",
            href: "https://cran.r-project.org/web/packages/copula/copula.pdf",
            external: true,
          },
        ],
      },
      {
        label: "Inferenza bayesiana e stima parametrica/non parametrica",
        summary:
          "Uso di MCMC e smoothing per stimare intensità di uscita, confronto con approcci frequentisti e criteri di validazione.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Bayesian Mixed GLM (Statsmodels)",
            href: "https://www.statsmodels.org/stable/examples/notebooks/generated/bayes_mixed_glm.html",
            external: true,
          },
        ],
      },
      {
        label: "Distribuzioni per sinistri danni e riassicurazione",
        summary:
          "Scelta delle distribuzioni heavy-tail, confronto tra stop-loss e quota-parte e introduzione ai trattati di riassicurazione proporzionale.",
        difficulty: "avanzato",
        resources: [
          {
            label: "CAS Syllabus of Basic Education",
            href: "https://www.casact.org/exams/syllabus/",
            external: true,
          },
        ],
      },
      {
        label: "Riserve sinistri con modelli GLM e GLMM",
        summary:
          "Confronto fra catene deterministiche e approcci stocastici, includendo esempi di implementazione con ChainLadder e Pymer.",
        difficulty: "avanzato",
        resources: [
          {
            label: "ChainLadder vignette (GLM incluso)",
            href: "https://cran.r-project.org/web/packages/ChainLadder/vignettes/ChainLadder.html",
            external: true,
          },
        ],
      },
      {
        label: "Catene di Markov per sinistri vita",
        summary:
          "Costruzione di matrici di transizione, gestione degli stati assorbenti e calcolo delle riserve prospettiche in presenza di opzioni contrattuali.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Lecture note su Markov e riserve (Loss Data Analytics)",
            href: "https://openacttexts.github.io/Loss-Data-Analytics/chapters/life.html",
            external: true,
          },
        ],
      },
      {
        label: "Approccio stocastico con Bootstrap e Mack",
        summary:
          "Uso di simulazioni bootstrap per stimare la distribuzione delle riserve, calcolo dell’intervallo di confidenza e della deviazione standard dell’IBNR.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Esempio bootstrap con package ChainLadder",
            href: "https://cran.r-project.org/web/packages/ChainLadder/vignettes/ChainLadder.html",
            external: true,
          },
        ],
      },
      {
        label: "Tecniche di aggregazione e granularità micro-level",
        summary:
          "Quando adottare modelli granulari su singolo sinistro rispetto alle tecniche aggregate, con cenni a metodi Bayesian e machine learning.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Paper Antonio & Plat (2014)",
            href: "/wiki#antonio-plat-2014",
          },
        ],
      },
      {
        label: "Gestione integrata del rischio con metriche VaR / TVaR",
        summary:
          "Confronto tra misure coerenti e non coerenti, con esempi di applicazione a portafogli assicurativi multi-linea.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Calcolatore portafoglio variabile",
            href: "/calcolatori/portafoglio-variabile",
          },
          {
            label: "Paper su rischio finanziario (SOA Research)",
            href: "https://www.soa.org/research/topics/enterprise-risk-management/",
            external: true,
          },
        ],
      },
      {
        label: "Opzioni incorporate e replicating portfolio",
        summary:
          "Identificazione delle garanzie implicite nei prodotti vita e danni, tecniche di replica con strumenti derivati e verifica della copertura.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Calcolatore Black-Scholes",
            href: "/calcolatori/black-scholes",
          },
          {
            label: "Dispensa replicating portfolios (IAA)",
            href: "https://www.actuaries.org/IAA/Activities/ASTIN/Colloquia_Papers.aspx",
            external: true,
          },
        ],
      },
      {
        label: "IFRS 17: modelli di valutazione e disclosure",
        summary:
          "Confronto tra approcci BBA, VFA e PAA, struttura del CSM e implicazioni sulla reportistica trimestrale.",
        difficulty: "avanzato",
        resources: [
          {
            label: "Approfondimento IFRS 17",
            href: "/wiki#ifrs-17-per-i-bilanci-assicurativi",
          },
          {
            label: "IASB – Risorse IFRS 17",
            href: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-17-insurance-contracts/",
            external: true,
          },
        ],
      },
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
    slug: "/wiki#antonio-plat-2014",
  },
  {
    title: "📊 The cost of financial frictions for life insurers",
    description:
      "Analizza come le restrizioni di capitale e le frizioni finanziarie influenzino prezzi, offerta di prodotti vita e allocazioni di portafoglio nel lungo periodo.",
    slug: "/wiki#koijen-yogo-2016",
  },
];
