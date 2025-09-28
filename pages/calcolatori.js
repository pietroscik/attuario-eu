import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PremioPuro from "../components/calculators/PremioPuro";
import RiservaSemplice from "../components/calculators/RiservaSemplice";
import ValoreAttualeRendita from "../components/calculators/ValoreAttualeRendita";
import LossRatio from "../components/calculators/LossRatio";

const quickLinks = [
  {
    id: "workflow",
    titolo: "Come funzionano",
    descrizione: "Dal dato grezzo al risultato in tre passaggi.",
  },
  {
    id: "modelli",
    titolo: "Modelli interattivi",
    descrizione: "Widget con formule integrate e controlli di qualità.",
  },
  {
    id: "schema",
    titolo: "Formula di riferimento",
    descrizione: "Riepilogo teorico e assunti di calcolo.",
  },
  {
    id: "assunzioni",
    titolo: "Assunzioni chiave",
    descrizione: "Condizioni attuariali da validare prima dell'uso.",
  },
  {
    id: "utilizzo",
    titolo: "Consigli operativi",
    descrizione: "Come interpretare gli output nei report.",
  },
  {
    id: "dataset",
    titolo: "Dataset di prova",
    descrizione: "Scarica esempi per testare i modelli.",
  },
  {
    id: "supporto",
    titolo: "Supporto & formazione",
    descrizione: "Contatti e percorsi personalizzati.",
  },
];

const workflow = [
  {
    title: "1. Inserisci i driver",
    description:
      "Carica volumi, tassi e ipotesi direttamente dai tuoi estratti o dalle note tecniche.",
  },
  {
    title: "2. Analizza le grandezze chiave",
    description:
      "I widget calcolano premio puro, riserve e indicatori di redditività con formule trasparenti.",
  },
  {
    title: "3. Esporta il risultato",
    description:
      "Copia i valori in Excel o nel modello GLM per iterare rapidamente sulle ipotesi.",
  },
];

const modelli = [
  {
    nome: "Premio puro",
    formula: "Frequenza × severità",
    note:
      "Input richiesti: esposti, sinistri osservati, costo medio residuo. Usa come baseline prima di applicare caricamenti.",
  },
  {
    nome: "Riserva semplificata",
    formula: "RBNS = aperti × costo medio − salvage; Totale = RBNS + IBNR",
    note:
      "Ottimo per controlli di primo livello su portafogli danni e riconciliazioni con triangoli chain-ladder.",
  },
  {
    nome: "Valore attuale rendita",
    formula: "PV = quota × (1 − (1 + i)^{−n}) / i",
    note:
      "Imposta quota periodale, numero rate e tasso coerente con la frequenza. Utile per buy-out e riserve vita.",
  },
  {
    nome: "Indicatori tecnici",
    formula: "Loss ratio = sinistri / premi; Combined = (sinistri + spese) / premi",
    note:
      "Confronta i ratio con budget e trend rolling 12 mesi per capire se intervenire su pricing o gestione sinistri.",
  },
];

const assunzioniChiave = [
  {
    titolo: "Premio puro",
    punti: [
      "Frequenza calcolata su esposti annualizzati e comparabili.",
      "Severità netta di recuperi e salvaguardie straordinarie.",
      "Non include caricamenti commerciali o margini di utile.",
    ],
  },
  {
    titolo: "Riserva semplificata",
    punti: [
      "Costo medio residuo aggiornato con inflazione e chiusure recenti.",
      "Salvage e recuperi sempre non negativi e documentati.",
      "IBNR stimato su triangoli coerenti con il portafoglio analizzato.",
    ],
  },
  {
    titolo: "Valore attuale rendita",
    punti: [
      "Tasso periodale coerente con la frequenza delle rate.",
      "Rendita certa: nessun rischio demografico incluso nel calcolo.",
      "Quote costanti e pagate posticipatamente salvo diversa ipotesi.",
    ],
  },
  {
    titolo: "Loss/Combined ratio",
    punti: [
      "Premi e sinistri di competenza dello stesso periodo.",
      "Spese considerate solo tecniche e allocate correttamente.",
      "Indicatori netti da riassicurazione trattati separatamente.",
    ],
  },
];

const dataset = [
  {
    nome: "Motor retail",
    contenuto: "Estratto sinistri quinquennale con classe, cilindrata e bonus-malus.",
    formato: "CSV (25k righe)",
  },
  {
    nome: "Portafoglio property",
    contenuto: "Valori assicurati, somme a rischio e sinistri catastrofali degli ultimi 10 anni.",
    formato: "Excel con pivot preimpostate",
  },
  {
    nome: "Portfolio vita",
    contenuto: "Coorti con età, sesso, anzianità e tassi di decadenza osservati.",
    formato: "CSV + notebook R per fitting curve",
  },
];

const servizi = [
  {
    titolo: "Sessioni di formazione",
    dettaglio: "Workshop di mezza giornata su pricing, riserve e IFRS 17 con esempi basati sui tuoi dati.",
  },
  {
    titolo: "Revisione modelli",
    dettaglio: "Audit light dei calcolatori interni con raccomandazioni su governance e performance.",
  },
  {
    titolo: "Supporto continuativo",
    dettaglio: "Pacchetti mensili di affiancamento per team attuariali e data scientist.",
  },
];

export default function Calcolatori() {
  return (
    <>
      <Nav />
      <main className="container">
        <section className="hero hero--stack">
          <p className="eyebrow">Toolbox attuariale</p>
          <h1>Calcolatori pronti all'uso</h1>
          <p className="section-intro">
            Modelli veloci per stress test, validazioni e what-if analysis. Gli output sono indicativi: perfeziona gli input nei
            tuoi ambienti professionali.
          </p>
        </section>

        <section className="section">
          <h2>Indice rapido</h2>
          <p className="section-intro">
            Naviga subito fra le sezioni dedicate a processo, modelli, schemi teorici e consigli di lettura degli output.
          </p>
          <div className="quick-nav">
            {quickLinks.map(link => (
              <a key={link.id} href={`#${link.id}`}>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{link.titolo}</span>
                <span style={{ fontSize: 13, opacity: 0.8 }}>{link.descrizione}</span>
              </a>
            ))}
          </div>
        </section>

        <section id="workflow" className="section">
          <h2>Come funzionano</h2>
          <p className="section-intro">
            Tutti i tool seguono lo stesso flusso operativo: input puliti, calcolo dei KPI principali e sintesi pronta per i
            report.
          </p>
          <div className="workflow-grid">
            {workflow.map(step => (
              <article key={step.title} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{step.title}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="modelli" className="section">
          <h2>Modelli interattivi</h2>
          <p className="section-intro">
            Compila i form con i tuoi dati, osserva subito frequenza, severità, riserve e indicatori tecnici. Ogni modulo include
            note d'uso e link di approfondimento.
          </p>
          <noscript>
            <div className="note">
              Attiva JavaScript per utilizzare i calcolatori interattivi. In alternativa scarica i template Excel dalla sezione
              toolkit o contattaci per una valutazione guidata.
            </div>
          </noscript>
          <div className="calculator-grid">
            <PremioPuro />
            <RiservaSemplice />
            <ValoreAttualeRendita />
            <LossRatio />
          </div>
        </section>

        <section id="schema" className="section">
          <h2>Formule di riferimento</h2>
          <p className="section-intro">
            Ogni calcolatore si basa su queste identità attuariali. Puoi riutilizzarle in Excel, R o Python per i tuoi modelli
            interni.
          </p>
          <div className="grid">
            {modelli.map(model => (
              <article key={model.nome} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{model.nome}</h3>
                <p style={{ margin: 0 }}>
                  <strong>Formula:</strong> {model.formula}
                </p>
                <p style={{ margin: 0, opacity: 0.8 }}>{model.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="assunzioni" className="section">
          <h2>Assunzioni attuariali da presidiare</h2>
          <p className="section-intro">
            Ogni output è corretto solo se le ipotesi di base rimangono valide. Rivedile prima di condividere i risultati con il
            management o con i revisori.
          </p>
          <div className="grid">
            {assunzioniChiave.map(item => (
              <article key={item.titolo} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{item.titolo}</h3>
                <ul className="stack-list" style={{ margin: 0 }}>
                  {item.punti.map(punto => (
                    <li key={punto}>{punto}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="utilizzo" className="section">
          <h2>Consigli operativi</h2>
          <p className="section-intro">
            Alcuni spunti su come inserire rapidamente i risultati nei tuoi processi di pricing, riservazione e monitoraggio.
          </p>
          <ul className="stack-list">
            <li>Confronta i premi puri con il pricing corrente per stimare margini impliciti e identificare opportunità.</li>
            <li>Usa le riserve rapide come benchmark rispetto ai metodi Chain-Ladder o GLM per i controlli di reasonableness.</li>
            <li>Inserisci loss/combined ratio nelle dashboard di monitoraggio insieme a serie rolling 12 mesi.</li>
            <li>Per le rendite, calibra il tasso coerente con i forward swap o i rendimenti risk-free più aggiornati.</li>
            <li>
              Documenta assunzioni, fonti dati e controlli in un registro versionato così da favorire audit trail e knowledge
              sharing.
            </li>
          </ul>
          <p className="calculator-note">
            Disclaimer: i calcoli sono semplificati e non sostituiscono perizie, attuari certificati o sistemi core.
          </p>
        </section>

        <section id="dataset" className="section">
          <h2>Dataset di prova</h2>
          <p className="section-intro">
            Utilizza questi pacchetti come sandbox per familiarizzare con i calcolatori o per condurre sessioni formative
            interne.
          </p>
          <div className="grid">
            {dataset.map(kit => (
              <article key={kit.nome} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{kit.nome}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{kit.contenuto}</p>
                <p style={{ margin: 0, fontSize: 13 }}>
                  Formato: <strong>{kit.formato}</strong>
                </p>
                <a className="btn secondary" href="mailto:info@attuario.eu?subject=Richiesta%20dataset%20calcolatori">
                  Richiedi accesso
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="supporto" className="section">
          <h2>Supporto e formazione</h2>
          <p className="section-intro">
            Possiamo aiutarti a integrare i calcolatori nei processi aziendali o progettare moduli su misura per il tuo team.
          </p>
          <div className="grid">
            {servizi.map(servizio => (
              <article key={servizio.titolo} className="card stack-sm">
                <h3 style={{ margin: 0 }}>{servizio.titolo}</h3>
                <p style={{ margin: 0, opacity: 0.8 }}>{servizio.dettaglio}</p>
                <a href="mailto:info@attuario.eu" style={{ fontWeight: 600 }}>
                  Prenota un confronto →
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
