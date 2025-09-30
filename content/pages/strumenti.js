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
        label: "Esempi ChainLadder in R",
        summary: "Vignette ufficiali del pacchetto ChainLadder con script per riserve deterministiche e stocastiche.",
        href: "https://cran.r-project.org/web/packages/ChainLadder/vignettes/ChainLadder.pdf",
        external: true,
      },
      {
        label: "Notebook Monte Carlo longevity",
        summary: "Simulazione di scenari di sopravvivenza con modelli Lee-Carter e Cairns-Blake-Dowd.",
        href: "https://nbviewer.org/github/openactuaries/notebooks/blob/main/longevity-scenarios.ipynb",
        external: true,
      },
      {
        label: "Pipeline pricing usage-based",
        summary: "Repository con esempio di data cleaning, feature engineering e modello GLM per telematica auto.",
        href: "https://github.com/actuarialopensource/usage-based-pricing-pipeline",
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
];
