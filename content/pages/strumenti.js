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
      "Toolkit verificati per la modellazione attuariale in R e Python, con link a documentazione ufficiale, vignette e paper accademici citati.",
    resources: [
      {
        label: "ChainLadder (R)",
        summary:
          "Vignette ufficiali per il pacchetto leader nella riservazione sinistri: Chain Ladder deterministico, Mack e Bootstrap con esempi riproducibili.",
        href: "https://cran.r-project.org/web/packages/ChainLadder/vignettes/ChainLadder.html",
        external: true,
      },
      {
        label: "insurancerating (R)",
        summary:
          "Documentazione del pacchetto per il pricing con GLM, funzioni per l’esplorazione dati e tutorial su metriche di performance tariffaria.",
        href: "https://insurancerating.readthedocs.io/",
        external: true,
      },
      {
        label: "actuar (R package)",
        summary:
          "Codice sorgente e documentazione per tariffe collettive, distribuzioni attuariali e calcolo di premi di rischio e credibilità.",
        href: "https://github.com/boennecd/actuar",
        external: true,
      },
      {
        label: "lifecontingencies (R package)",
        summary:
          "Funzioni R per tavole di mortalità, valorizzazione di assicurazioni vita, rendite e misure di sensitività demografica.",
        href: "https://github.com/spedygiorgio/lifecontingencies",
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
          "Manuale CAS per portare i metodi Chain Ladder in Python, completo di API reference e notebook su Mack, Bornhuetter-Ferguson e Bayesian reserving.",
        href: "https://chainladder-python.readthedocs.io/",
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
      {
        label: "GEMAct (Python)",
        summary:
          "Libreria per modelli collettivi, copule e riserve stocastiche con tutorial su fitting, simulazione e valutazione della variabilità.",
        href: "https://gemact.readthedocs.io/",
        external: true,
      },
      {
        label: "PyMC & ArviZ actuarial workflows",
        summary:
          "Guida PyMC con esempi di regressioni Poisson, MCMC e diagnostica ArviZ per modellare frequenza e severità in chiave Bayesiana.",
        href: "https://www.pymc.io/projects/examples/en/latest/case_studies/insurance_claims.html",
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
      "Script pronti per generare scenari economici, calcolare indicatori IFRS 17 e analizzare dati demografici con workflow ripetibili (uso didattico: validare sempre prima dell’impiego professionale).",
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
      {
        label: "Systemorph IFRS17 Calculation Engine",
        summary:
          "Motore open source per valutazione IFRS 17 con moduli per calcolo cash flow, CSM e reporting, accompagnato da documentazione tecnica completa.",
        href: "https://github.com/Systemorph/IFRS17CalculationEngine",
        external: true,
      },
      {
        label: "IFRS-17 PAA Implementation",
        summary:
          "Notebook e script per implementare passo-passo il Premium Allocation Approach, con esempi numerici commentati in lingua inglese e cinese.",
        href: "https://github.com/YenLinWu/IFRS-17-PAA-Implementation",
        external: true,
      },
      {
        label: "CAS Consumer Vehicle Toolkit",
        summary:
          "Repository CAS con workflow di pricing auto personale: esplorazione dati, fitting GLM e tecniche machine learning per tariffe competitive.",
        href: "https://github.com/casact/consumer_vehicle_toolkit",
        external: true,
      },
      {
        label: "experienceAnalytics (longevity studies)",
        summary:
          "Collezione di script R per analisi di esperienze vita: preparazione dati, credibilità Bayesiana e visualizzazioni interattive con flexdashboard.",
        href: "https://github.com/ActuarialVol/experienceAnalytics",
        external: true,
      },
    ],
  },
  {
    title: "Approfondimenti e risorse aperte",
    description:
      "Testi open access, dataset e raccolte di progetti per ampliare le competenze attuariali e connettere teoria e pratica.",
    resources: [
      {
        label: "Loss Data Analytics (open textbook)",
        summary:
          "Manuale gratuito dell’International Actuarial Association con esempi in R/Python su credibilità, frequenza-severità e gestione del rischio.",
        href: "https://openacttexts.github.io/Loss-Data-Analytics/",
        external: true,
      },
      {
        label: "Statistical Foundations of Actuarial Learning",
        summary:
          "Testo accademico con appendici computazionali su modelli predittivi, machine learning e validazione per assicurazioni danni.",
        href: "https://cfasociety.org/texas/Documents/Statistical%20Foundations%20of%20Actuarial%20Learning.pdf",
        external: true,
      },
      {
        label: "GitHub – progetti attuariali open",
        summary:
          "Lista curata di repository attuariali (R, Python, Julia) per pricing, riservazione e longevity modelling con licenza open source.",
        href: "https://github.com/topics/actuarial-science",
        external: true,
      },
    ],
  },
];
