export const TOOL_RESOURCES = [
  {
    title: "Excel e fogli di calcolo",
    description:
      "Modelli pronti per calcolare premi, riserve semplificate e gap ALM in pochi passaggi. Ogni file è disponibile in formato CSV per favorire l’importazione in Excel, LibreOffice o Google Sheets.",
    resources: [
      {
        label: "Template valore attuale rendite",
        summary:
          "Tabella con probabilità, importi e fattori di sconto per ricostruire il valore attuale atteso di rendite temporanee o vitalizie.",
        href: "/toolkit/valore-attuale.csv",
      },
      {
        label: "Dashboard sinistri pivot",
        summary:
          "Dataset di esempio per costruire tabelle pivot e grafici dinamici su premi, sinistri e combined ratio per ramo.",
        href: "/toolkit/dashboard-sinistri.csv",
      },
      {
        label: "Scheduler flussi ALM",
        summary:
          "Foglio con cash flow attivi/passivi e calcolo della differenza attualizzata utile per analisi di immunizzazione.",
        href: "/toolkit/alm-scheduler.csv",
      },
    ],
  },
  {
    title: "R e Python",
    description:
      "Notebook e repository open source per implementare simulazioni Monte Carlo, modelli GLM/GLMM e pipeline di data science attuariale.",
    resources: [
      {
        label: "Vignette ChainLadder (R)",
        summary:
          "Documentazione ufficiale del pacchetto ChainLadder con esempi completi di metodi deterministici e stocastici per il calcolo delle riserve.",
        href: "https://cran.r-project.org/web/packages/ChainLadder/vignettes/ChainLadder.pdf",
        external: true,
      },
      {
        label: "insurancerating (R package)",
        summary:
          "Pacchetto R per il pricing assicurativo con workflow riproducibili, regressioni generalizzate e metriche di performance integrate.",
        href: "https://github.com/MHaringa/insurancerating",
        external: true,
      },
      {
        label: "actuar (R package)",
        summary:
          "Manuale CRAN con funzioni per teoria del rischio, premi netti, simulazione di perdite e modelli di credibilità Bayesiana.",
        href: "https://cran.r-project.org/package=actuar",
        external: true,
      },
      {
        label: "lifecontingencies (R package)",
        summary:
          "Toolkit per costruire tavole di mortalità, valorizzare assicurazioni vita e rendite e calcolare sensitività demografiche.",
        href: "https://cran.r-project.org/package=lifecontingencies",
        external: true,
      },
      {
        label: "StMoMo (R package)",
        summary:
          "Framework per modellare la mortalità con approcci Lee-Carter, Cairns-Blake-Dowd e varianti coortali per proiezioni LOB.",
        href: "https://github.com/amvillegas/StMoMo",
        external: true,
      },
      {
        label: "chainladder-python",
        summary:
          "Libreria ufficiale CAS per la riservazione in Python con esempi di Mack, Bornhuetter-Ferguson e modelli Bayesian.",
        href: "https://github.com/casact/chainladder-python",
        external: true,
      },
      {
        label: "lifelines survival analysis",
        summary:
          "Toolkit Python per l’analisi di sopravvivenza con Cox PH, Kaplan-Meier e strumenti per la calibrazione di tassi di decadenza.",
        href: "https://github.com/CamDavidsonPilon/lifelines",
        external: true,
      },
      {
        label: "lifelib – modelli vita open source",
        summary:
          "Framework modulare per proiettare passività vita, calcolare BEL e CSM IFRS 17 con esempi in notebook Jupyter.",
        href: "https://github.com/lifelib-dev/lifelib",
        external: true,
      },
    ],
  },
  {
    title: "Dataset e repository",
    description:
      "Fonti ufficiali e comunitarie per reperire dati su mortalità, sinistri, clima e mercati finanziari, con suggerimenti per la documentazione.",
    resources: [
      {
        label: "Human Mortality Database",
        summary: "Serie storiche demografiche internazionali per analisi di longevità e costruzione tavole generazionali.",
        href: "https://www.mortality.org",
        external: true,
      },
      {
        label: "CAS Loss Reserving Database",
        summary: "Dataset open source per esercitazioni su riserve danni, disponibilie in formato Excel e CSV.",
        href: "https://www.casact.org/data-management/database-queries/loss-reserving-database",
        external: true,
      },
      {
        label: "Eurostat – Insurance statistics",
        summary: "Indicatori su premi, sinistri e investimenti delle compagnie assicurative in Europa.",
        href: "https://ec.europa.eu/eurostat/web/insurance",
        external: true,
      },
    ],
  },
  {
    title: "Progettazione didattica",
    description:
      "Materiali per organizzare workshop, quiz e percorsi blended dedicati alla formazione attuariale.",
    resources: [
      {
        label: "Checklist workshop attuariale",
        summary: "Sequenza di attività e deliverable per condurre un laboratorio di 90 minuti con follow-up strutturato.",
        href: "/toolkit/workshop-checklist.md",
      },
      {
        label: "Guida quiz Moodle",
        summary: "Documentazione su come creare question bank, randomizzare item e configurare feedback adattivi.",
        href: "https://docs.moodle.org/402/it/Quiz",
        external: true,
      },
      {
        label: "Template rubrica valutazione",
        summary: "Foglio di lavoro per assegnare punteggi a progetti didattici con criteri qualitativi e quantitativi.",
        href: "https://www.credential.net/resources/assessment-rubric-template",
        external: true,
      },
    ],
  },
  {
    title: "Script e notebook automation",
    description:
      "Script pronti per generare scenari economici, calcolare indicatori IFRS 17 e analizzare dati demografici con workflow ripetibili.",
    resources: [
      {
        label: "pyesg – Economic Scenario Generator",
        summary:
          "Motore Python per simulare curve dei tassi, inflazione e rendimenti azionari con modelli stocastici standard (GBM, CIR, Vasicek).",
        href: "https://github.com/jason-ash/pyesg",
        external: true,
      },
      {
        label: "IFRS17 Calculation Engine (Python)",
        summary:
          "Traduzione in Python del motore lifelib per calcolare cash flow attesi, CSM e analisi di sensibilità su portafogli assicurativi.",
        href: "https://github.com/lifelib-dev/IFRS17CalculationEnginePython",
        external: true,
      },
      {
        label: "Life Expectancy Analysis notebook",
        summary:
          "Notebook su dataset OMS con pulizia dati, regressioni e visualizzazioni per individuare i driver della longevità.",
        href: "https://github.com/aarohip28/Life-Expectancy-Analysis",
        external: true,
      },
      {
        label: "actxps experience studies",
        summary:
          "Script R per costruire pipeline di experience study vita con estrazione dati, calcolo di tassi osservati/attesi e benchmark interattivi.",
        href: "https://github.com/ActuarialVo/actxps",
        external: true,
      },
      {
        label: "ESGtoolkit (R)",
        summary:
          "Notebook e funzioni per generare scenari stocastici multi-fattore, calibrati a curve risk-free e volatilità storiche.",
        href: "https://github.com/fcasados/ESGtoolkit",
        external: true,
      },
      {
        label: "StMoMo demo scripts",
        summary:
          "Esempi pratici per stimare modelli di mortalità, estrarre indicatori di longevità e produrre grafici di sensitività.",
        href: "https://github.com/amvillegas/StMoMo/tree/master/vignettes",
        external: true,
      },
    ],
  },
];
