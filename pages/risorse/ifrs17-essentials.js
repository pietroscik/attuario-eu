import Layout from "../../components/Layout";

export default function Ifrs17Essentials() {
  return (
    <Layout
      title="IFRS 17 Essentials"
      eyebrow="Mini-corso divulgativo"
      intro="Tre lezioni introduttive per orientarsi nel framework IFRS 17: struttura della passività, flussi di cassa attesi e principali impatti per le funzioni attuariali."
      metaDescription="Mini-corso IFRS 17 Essentials di attuario.eu: tre lezioni divulgative su BEL, RA, CSM e collegamenti con Solvency II. Contenuti a solo scopo informativo, nessuna consulenza professionale."
      width="narrow"
    >
      <section className="section">
        <h2>Struttura del mini-corso</h2>
        <ul className="list">
          <li>
            <strong>Lezione 1 – Fondamenti IFRS 17:</strong> oggetto dello
            standard, unit of account, portafogli di contratti e panoramica dei
            modelli di valutazione.
          </li>
          <li>
            <strong>Lezione 2 – Misurazione e componenti della passività:</strong>{" "}
            focus su Best Estimate Liability (BEL), Risk Adjustment (RA) e
            Contractual Service Margin (CSM) con esempi numerici semplificati.
          </li>
          <li>
            <strong>Lezione 3 – Collegamenti pratici:</strong> interazioni con
            Solvency II, disclosure di bilancio e ruolo delle funzioni attuariali
            nei processi di closing.
          </li>
        </ul>
      </section>

      <section className="section info-panel">
        <h2>A chi è rivolto</h2>
        <p>
          Il percorso è pensato per studenti, neo-assunti e professionisti che
          vogliono una visione sintetica ma rigorosa di IFRS 17 prima di
          approfondire testi specialistici o documentazione di implementazione.
        </p>
        <p className="small-print">
          I contenuti hanno finalità esclusivamente divulgative e formative: non
          sostituiscono in alcun modo la documentazione ufficiale IASB, le
          policy aziendali o la consulenza professionale di soggetti abilitati.
        </p>
      </section>

      <section className="section">
        <h2>Come verranno resi disponibili i materiali</h2>
        <p>
          Le lezioni saranno pubblicate progressivamente come articoli,
          schede PDF e brevi video di accompagnamento. Le call-to-action dalla
          pagina blog e dalla newsletter punteranno sempre a questa pagina, che
          fungerà da indice aggiornato del mini-corso.
        </p>
        <p className="small-print">
          In questa fase il mini-corso è in preparazione: gli esempi numerici e
          le sintesi normative potrebbero subire aggiornamenti per riflettere le
          ultime decisioni dello IASB e dei regolatori europei.
        </p>
      </section>

      <section className="section info-panel">
        <h2>Limiti d&apos;uso</h2>
        <p className="small-print">
          Le informazioni riportate non costituiscono consulenza contabile,
          attuariale o legale. Prima di assumere decisioni operative, fai
          riferimento ai principi IFRS ufficiali, alle linee guida EFRAG e alle
          policy interne della tua organizzazione.
        </p>
      </section>
    </Layout>
  );
}

