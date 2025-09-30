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
        languages: ["R", "Python"],
      },
      {
        label: "Dashboard sinistri pivot",
        summary:
          "Dataset di esempio per costruire tabelle pivot e grafici dinamici su premi, sinistri e combined ratio per ramo.",
        href: "/toolkit/dashboard-sinistri.csv",
        languages: ["R", "Python"],
      },
      {
        label: "Scheduler flussi ALM",
        summary:
          "Foglio con cash flow attivi/passivi e calcolo della differenza attualizzata utile per analisi di immunizzazione.",
        href: "/toolkit/alm-scheduler.csv",
        languages: ["R", "Python"],
      },
    ],
  },
  {
    title: "Toolkit R",
    description:
      "Pacchetti, vignette e reference per pricing, riservazione e longevity modelling in R.",
    resources: [
      {
        label: "ChainLadder (R)",
        summary:
          "Vignette ufficiali per il pacchetto leader nella riservazione sinistri: Chain Ladder deterministico, Mack e Bootstrap con esempi riproducibili.",
        href: "https://cran.r-project.org/web/packages/ChainLadder/vignettes/ChainLadder.html",
        external: true,
        languages: ["R"],
      },
      {
        label: "insurancerating (R)",
        summary:
          "Documentazione del pacchetto per il pricing con GLM, funzioni per l’esplorazione dati e tutorial su metriche di performance tariffaria.",
        href: "https://insurancerating.readthedocs.io/",
        external: true,
        languages: ["R"],
      },
      {
        label: "actuar (R package)",
        summary:
          "Funzioni per tariffe collettive, distribuzioni attuariali, rischio/rovina, simulazioni e credibilità.",
        href: "https://cran.r-project.org/package=actuar",
        external: true,
        languages: ["R"],
      },
      {
        label: "lifecontingencies (R package)",
        summary:
          "Funzioni per tavole di mortalità, valorizzazione di assicurazioni vita, rendite e sensibilità demografica.",
        href: "https://cran.r-project.org/package=lifecontingencies",
        external: true,
        languages: ["R"],
      },
      {
        label: "StMoMo (R package)",
        summary:
          "Framework per modellare la mortalità (Lee–Carter, Cairns–Blake–Dowd, APC, varianti coortali) e proiezioni.",
        href: "https://github.com/amvillegas/StMoMo",
        external: true,
        languages: ["R"],
      },
    ],
  },
  {
    title: "Toolkit Python",
    description:
      "Librerie e workflow Python per pricing, riservazione, IFRS 17 e analisi di sopravvivenza.",
    resources: [
      {
        label: "chainladder-python",
        summary:
          "Porting dei metodi Chain Ladder in Python, con API reference e notebook su Mack, Bornhuetter–Ferguson e reserving Bayesiano.",
        href: "https://chainladder-python.readthedocs.io/",
        external: true,
        languages: ["Python"],
      },
      {
        label: "lifelines survival analysis",
        summary:
          "Toolkit per l’analisi di sopravvivenza (Kaplan–Meier, Cox PH, modelli parametrici) con esempi e API.",
        href: "https://github.com/CamDavidsonPilon/lifelines",
        external: true,
        languages: ["Python"],
      },
      {
        label: "lifelib – modelli vita open source",
        summary:
          "Framework modulare per proiettare passività vita, calcolare BEL e CSM IFRS 17 con notebook Jupyter.",
        href: "https://github.com/lifelib-dev/lifelib",
        external: true,
        languages: ["Python"],
      },
      {
        label: "GEMAct (Python)",
        summary:
          "Libreria per modelli collettivi, copule e riserve stocastiche con tutorial su fitting, simulazione e variabilità.",
        href: "https://gemact.readthedocs.io/",
        external: true,
        languages: ["Python"],
      },
      {
        label: "PyMC & ArviZ actuarial workflows",
        summary:
          "Esempi Bayesiani per frequenza/severità e diagnostica con ArviZ (GLM Poisson, MCMC, best-practice di modellazione).",
        href: "https://www.pymc.io/projects/examples/en/latest/case_studies/insurance_claims.html",
        external: true,
        languages: ["Python"],
      },
    ],
  },
  {
    title: "Dataset e repository",
    description:
      "Fonti ufficiali e comunitarie per dati su mortalità, sinistri, clima e mercati finanziari, con suggerimenti per la documentazione.",
    resources: [
      {
        label: "Human Mortality Database",
        summary:
          "Serie storiche demografiche internazionali per analisi di longevità e costruzione tavole generazionali.",
        href: "https://www.mortality.org",
        external: true,
        languages: ["R", "Python"],
      },
      {
        label: "CAS Loss Reserving Database",
        summary:
          "Dataset open per riserve danni (Schedule P), utili a esercitazioni e benchmarking.",
        href: "https://www.casact.org/publications-research/research/research-resources/loss-reserving-data-pulled-naic-schedule-p",
        external: true,
        languages: ["R", "Python"],
      },
      {
        label: "Eurostat/EIOPA – Insurance statistics",
        summary:
          "Indicatori su premi, sinistri, bilanci e investimenti del settore assicurativo europeo.",
        href: "https://www.eiopa.europa.eu/tools-and-data/insurance-statistics_en",
        external: true,
        languages: ["R", "Python"],
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
        summary:
          "Sequenza di attività e deliverable per condurre un laboratorio di 90 minuti con follow-up strutturato.",
        href: "/toolkit/workshop-checklist.md",
        languages: [],
      },
      {
        label: "Guida quiz Moodle",
        summary:
          "Documentazione ufficiale su creazione question bank, randomizzazione item e feedback adattivi.",
        href: "https://docs.moodle.org/402/it/Quiz",
        external: true,
        languages: [],
      },
      {
        label: "Template rubrica valutazione",
        summary:
          "Template e best practice per rubriche di valutazione pronte all’uso.",
        href: "https://www.credential.net/resources/assessment-rubric-template",
        external: true,
        languages: [],
      },
    ],
  },
  {
    title: "Workflow e script R",
    description:
      "Notebook e script per experience studies, ESG e demo interattive costruiti con l’ecosistema R.",
    resources: [
      {
        label: "actxps experience studies",
        summary:
          "Pipeline R per experience study vita con tassi osservati/attesi e benchmark interattivi.",
        href: "https://github.com/ActuarialVo/actxps",
        external: true,
        languages: ["R"],
      },
      {
        label: "ESGtoolkit (R)",
        summary:
          "Funzioni e notebook per generare scenari stocastici multi-fattore calibrati a curve risk-free e volatilità storiche.",
        href: "https://github.com/fcasados/ESGtoolkit",
        external: true,
        languages: ["R"],
      },
      {
        label: "StMoMo demo scripts",
        summary:
          "Esempi pratici per stimare modelli di mortalità e produrre grafici di sensitività.",
        href: "https://github.com/amvillegas/StMoMo/tree/master/vignettes",
        external: true,
        languages: ["R"],
      },
      {
        label: "CAS Consumer Vehicle Toolkit",
        summary:
          "Workflow R per pricing auto personale: EDA, GLM e tecniche ML per confronti tariffari.",
        href: "https://github.com/casact/consumer_vehicle_toolkit",
        external: true,
        languages: ["R"],
      },
      {
        label: "experienceAnalytics (longevity studies)",
        summary:
          "Script R per analisi di esperienza vita: credibilità Bayesiana e dashboard interattivi.",
        href: "https://github.com/ActuarialVol/experienceAnalytics",
        external: true,
        languages: ["R"],
      },
    ],
  },
  {
    title: "Workflow e script Python",
    description:
      "Notebook e motori per simulazioni economiche, IFRS 17 e analisi demografiche in Python.",
    resources: [
      {
        label: "pyesg – Economic Scenario Generator",
        summary:
          "Motore per simulare curve dei tassi, inflazione e rendimenti con modelli GBM/CIR/Vasicek.",
        href: "https://github.com/jason-ash/pyesg",
        external: true,
        languages: ["Python"],
      },
      {
        label: "IFRS17 Calculation Engine (Python)",
        summary:
          "Motori e template open per calcolo cash flow, CSM e reporting IFRS 17 con notebook.",
        href: "https://github.com/Systemorph/IFRS17CalculationEngine",
        external: true,
        languages: ["Python"],
      },
      {
        label: "Life Expectancy Analysis notebook",
        summary:
          "Notebook su dataset OMS con pulizia dati, regressioni e visualizzazioni per driver di longevità.",
        href: "https://github.com/aarohip28/Life-Expectancy-Analysis",
        external: true,
        languages: ["Python"],
      },
      {
        label: "IFRS-17 PAA Implementation",
        summary:
          "Notebook e script per implementare passo-passo il Premium Allocation Approach (EN/ZH).",
        href: "https://github.com/YenLinWu/IFRS-17-PAA-Implementation",
        external: true,
        languages: ["Python"],
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
          "Manuale gratuito dell’IAA con esempi in R/Python su credibilità, frequenza-severità e gestione del rischio.",
        href: "https://openacttexts.github.io/Loss-Data-Analytics/",
        external: true,
        languages: ["R", "Python"],
      },
      {
        label: "Statistical Foundations of Actuarial Learning",
        summary:
          "Testo con appendici computazionali su modelli predittivi, machine learning e validazione per assicurazioni danni.",
        href: "https://cfasociety.org/texas/Documents/Statistical%20Foundations%20of%20Actuarial%20Learning.pdf",
        external: true,
        languages: ["R", "Python"],
      },
      {
        label: "GitHub – progetti attuariali open",
        summary:
          "Lista curata di repository (R, Python, Julia) per pricing, riservazione e longevity modelling.",
        href: "https://github.com/topics/actuarial-science",
        external: true,
        languages: ["R", "Python"],
      },
    ],
  },
];
