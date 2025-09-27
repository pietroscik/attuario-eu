import Link from "next/link";
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
    id: "utilizzo",
    titolo: "Consigli operativi",
    descrizione: "Come interpretare gli output nei report.",
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
              <Link key={link.id} href={`#${link.id}`}>
                <span style={{ fontSize: 15, fontWeight: 600 }}>{link.titolo}</span>
                <span style={{ fontSize: 13, opacity: 0.8 }}>{link.descrizione}</span>
              </Link>
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
          </ul>
          <p className="calculator-note">
            Disclaimer: i calcoli sono semplificati e non sostituiscono perizie, attuari certificati o sistemi core.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
