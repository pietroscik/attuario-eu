import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <Layout
      title="Privacy"
      eyebrow="Tutela dei dati"
      intro="Informativa ai sensi del Reg. (UE) 2016/679 (GDPR) e delle norme Google in materia di privacy e consenso. Questa pagina descrive quali dati raccogliamo, per quali finalità e come puoi esercitare i tuoi diritti."
      width="narrow"
    >
      <section className="section">
        <h2>Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento dei dati è il gestore di attuario.eu, contattabile all’indirizzo email indicato nella pagina{" "}
          Contatti. Il sito è pensato per studenti e professionisti adulti: non è rivolto a minori di 18 anni.
        </p>
      </section>

      <section className="section">
        <h2>Dati raccolti tramite il sito</h2>
        <p>
          Attraverso questo sito raccogliamo solo i dati strettamente necessari a fornire i servizi richiesti (contatto, newsletter,
          analisi di utilizzo del sito) e a mantenere la sicurezza delle pagine.
        </p>
        <ul className="list">
          <li>
            <strong>Form di contatto:</strong> nome, email e contenuto del messaggio, utilizzati esclusivamente per rispondere alle richieste ricevute.
          </li>
          <li>
            <strong>Newsletter:</strong> indirizzo email, utilizzato per l’invio di aggiornamenti informativi. Puoi annullare l’iscrizione in qualsiasi momento
            tramite il link presente nelle comunicazioni.
          </li>
          <li>
            <strong>Dati di navigazione:</strong> informazioni aggregate su pagine visitate, tempo di permanenza e dispositivo utilizzato, raccolte tramite
            strumenti di analisi e pubblicità di terze parti.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Cookie, Google Analytics e Google AdSense</h2>
        <p>
          attuario.eu utilizza cookie tecnici e, previo consenso laddove richiesto dalla normativa, cookie di misurazione e di pubblicità forniti da Google e
          da altri eventuali partner.
        </p>
        <ul className="list">
          <li>
            <strong>Google Analytics:</strong> servizio di analisi fornito da Google LLC. I cookie generati permettono di raccogliere informazioni anonime e aggregate
            sull’utilizzo del sito (pagine visitate, tempo di permanenza, tipo di browser, area geografica approssimativa). I dati sono utilizzati per migliorare i
            contenuti e la fruibilità del sito.
          </li>
          <li>
            <strong>Google AdSense:</strong> servizio di pubblicazione annunci fornito da Google LLC. Google può utilizzare cookie e identificatori per mostrare annunci
            personalizzati o non personalizzati e misurarne le performance. Le informazioni generate dai cookie sugli annunci (inclusi indirizzo IP e preferenze di
            navigazione) possono essere trasmesse a e conservate da Google sui propri server.
          </li>
        </ul>
        <p>
          Per maggiori informazioni sulle modalità con cui Google utilizza i dati nei propri prodotti pubblicitari e di analisi puoi consultare le informative ufficiali
          di Google sul trattamento dei dati e sulla personalizzazione degli annunci.
        </p>
      </section>

      <section className="section">
        <h2>Come gestire cookie e preferenze</h2>
        <p>
          Puoi controllare e/o eliminare i cookie a tua discrezione agendo sulle impostazioni del browser (ad esempio bloccando cookie di terze parti) e, per gli
          annunci personalizzati di Google, mediante le pagine di gestione delle preferenze pubblicitarie messe a disposizione da Google.
        </p>
        <p className="small-print">
          Se disabiliti alcuni tipi di cookie, alcune funzionalità del sito potrebbero non essere disponibili o risultare meno ottimizzate.
        </p>
      </section>

      <section className="section">
        <h2>Base giuridica e tempi di conservazione</h2>
        <p>
          I dati forniti tramite form di contatto o iscrizione alla newsletter sono trattati sulla base del tuo consenso esplicito e del legittimo interesse del
          titolare a gestire le comunicazioni con gli utenti. I dati vengono conservati per il tempo strettamente necessario a rispondere alle richieste o a mantenere
          attiva l’iscrizione alla newsletter, salvo ulteriori obblighi di legge.
        </p>
      </section>

      <section className="section">
        <h2>Diritti degli interessati</h2>
        <p>
          In qualsiasi momento puoi richiedere accesso, rettifica o cancellazione dei dati personali, nonché limitazione o opposizione al trattamento, scrivendo
          all’indirizzo email indicato nella pagina Contatti. Hai inoltre diritto a proporre reclamo all’Autorità Garante per la protezione dei dati personali.
        </p>
      </section>
    </Layout>
  );
}
