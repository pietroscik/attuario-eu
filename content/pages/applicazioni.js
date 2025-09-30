export const APPLICATION_AREAS = [
  {
    title: "Assicurazioni vita",
    description:
      "Pricing di polizze caso vita e caso morte, gestione delle partecipazioni agli utili, business protection e valutazione del longevity risk.",
    cases: [
      {
        label: "Tariffazione temporanee caso morte",
        summary:
          "Usa il template valore attuale per stimare premi puri e confronta l’impatto delle basi demografiche IPS55 vs proiezioni generazionali.",
        href: "/casi/assicurazioni-vita",
      },
      {
        label: "Sensitività tassi d’interesse",
        summary:
          "Esegui analisi what-if sul premio puro variando le curve risk-free ±50 bps e valuta l’effetto sulle partecipazioni agli utili.",
        href: "/calcolatori/duration-convexity",
      },
      {
        label: "Checklist POG & documentazione",
        summary:
          "Scarica la scheda con requisiti IDD/POG e integra il memorandum regolamentare nel fascicolo di prodotto.",
        href: "/casi/assicurazioni-vita#output-attesi",
      },
    ],
  },
  {
    title: "Assicurazioni danni e salute",
    description:
      "Segmentazione portafogli auto, property e medical con GLM, machine learning interpretabile e metodi di credibilità.",
    cases: [
      {
        label: "Workflow frequenza × severità",
        summary:
          "Implementa un modello GLM in R seguendo lo script di riferimento e genera mappe di rischio per la direzione tecnica.",
        href: "/casi/assicurazioni-danni",
      },
      {
        label: "Stress test catastrofali",
        summary:
          "Applica scenari vento 1/100 agli exposure property per definire strategie riassicurative e capitali addizionali.",
        href: "/casi/assicurazioni-danni#output-attesi",
      },
      {
        label: "Telematica e pricing dinamico",
        summary:
          "Integra variabili telematiche in un modello usage-based e costruisci offerte personalizzate con soglie di rischio.",
        href: "/casi/data-science",
      },
    ],
  },
  {
    title: "Previdenza e fondi pensione",
    description:
      "Valutazioni attuariali per TFR, fondi a capitalizzazione, casse professionali e piani a benefici definiti con analisi ALM e risk budgeting.",
    cases: [
      {
        label: "IAS 19 e passività attuariali",
        summary:
          "Calcola obbligazioni attuariali a benefici definiti e documenta le assunzioni economiche per la nota integrativa.",
        href: "/casi/previdenza",
      },
      {
        label: "Scenari di contribuzione",
        summary:
          "Confronta scenari ottimistici/pessimistici di rendimento e valuta l’adeguatezza delle posizioni individuali.",
        href: "/casi/previdenza#proiezioni-sintetiche",
      },
      {
        label: "Comunicazioni agli aderenti",
        summary:
          "Prepara una relazione periodica con KPI ESG, indicatori di adeguatezza e raccomandazioni personalizzate.",
        href: "/casi/previdenza",
      },
    ],
  },
  {
    title: "Finanza e risk management",
    description:
      "Metriche di rischio integrate per banche, assicurazioni e corporate, con focus su solvibilità, liquidità e rischio climatico.",
    cases: [
      {
        label: "ORSA semplificato",
        summary:
          "Costruisci una vista integrata di capitale disponibile/requisito e definisci trigger di escalation per il comitato rischi.",
        href: "/casi/finanza-risk",
      },
      {
        label: "VaR & TVaR multi-linea",
        summary:
          "Utilizza il calcolatore Portafoglio variabile per stimare capitale economico e confrontarlo con soglie di risk appetite.",
        href: "/calcolatori/portafoglio-variabile",
      },
      {
        label: "Gestione rischio climatico",
        summary:
          "Integra scenari NGFS e definisci KPI climatici da monitorare nel reporting periodico.",
        href: "/casi/finanza-risk#kpi-da-monitorare",
      },
    ],
  },
  {
    title: "Data science e automazione",
    description:
      "Applicazione di tecniche di data engineering, MLOps e automazione dei processi attuariali per ridurre tempi di elaborazione e aumentare la qualità dei dati.",
    cases: [
      {
        label: "Pipeline ETL & feature store",
        summary:
          "Implementa ingestion giornaliera con Airflow e gestisci la disponibilità delle feature con Feast.",
        href: "/casi/data-science",
      },
      {
        label: "Monitoraggio drift modelli",
        summary:
          "Configura dashboard Evidently AI per analizzare il drift delle predizioni e aggiornare i modelli.",
        href: "/casi/data-science#componenti-principali",
      },
      {
        label: "Registro modelli EIOPA compliant",
        summary:
          "Documenta versioni, metriche e processi di governance per soddisfare le linee guida europee.",
        href: "/casi/data-science",
      },
    ],
  },
  {
    title: "Innovazione prodotti e InsurTech",
    description:
      "Ideazione e prototipazione di prodotti parametrici, polizze on-demand e servizi digitali a supporto dell’esperienza cliente.",
    cases: [
      {
        label: "Canvas value proposition",
        summary:
          "Compila il canvas per definire proposta di valore, segmenti di clientela e metriche di successo.",
        href: "/casi/insurtech",
      },
      {
        label: "Metriche MVP & sandbox",
        summary:
          "Stabilisci metriche di adozione e retention per sperimentazioni in sandbox regolamentare.",
        href: "/casi/insurtech#backlog-mvp",
      },
      {
        label: "Valutazione partner tecnologici",
        summary:
          "Verifica requisiti di sicurezza, SLA e compliance privacy dei fornitori InsurTech.",
        href: "/casi/insurtech",
      },
    ],
  },
];
