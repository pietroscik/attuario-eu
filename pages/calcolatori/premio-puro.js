import Layout from "../../components/Layout";
import PremioPuro from "../../components/calculators/PremioPuro";

export default function PremioPuroPage() {
  return (
    <Layout
      title="Calcolatore premio puro"
      eyebrow="Modello frequenza × severità"
      intro="Stima l’importo medio richiesto per coprire un rischio danni partendo da frequenza attesa e severità media, con la possibilità di proiettare il premio su un intero portafoglio."
      metaDescription="Calcolatore interattivo per il premio puro assicurativo: frequenza, severità, caricamenti e loss ratio atteso secondo le raccomandazioni IVASS."
      width="narrow"
    >
      <PremioPuro />
      <section className="section info-panel">
        <h2>Formula utilizzata</h2>
        <p>
          Il premio puro è dato dall’attesa del costo del sinistro: <code>E[X] = \lambda \times m</code>, dove
          <code>\lambda</code> è la frequenza annua e <code>m</code> la severità media. In questa implementazione la frequenza
          viene espressa come probabilità compresa tra 0 e 1 (come indicato nelle <em>Linee guida IVASS sulla tariffazione</em>) e la severità come importo medio in euro.
        </p>
        <p className="small-print">
          Ricorda che per tariffe reali servono loading per spese, margini di rischio, imposte e adeguamenti regolamentari.
        </p>
        <p>
          Il caricamento opzionale permette di modellare il passaggio da premio puro a premio di tariffa, includendo spese di
          acquisizione e gestione, margini di sicurezza, contributi Consap ed eventuali imposte, come suggerito dal manuale ANIA
          <em>“Tecniche Tariffarie Danni”</em>.
        </p>
      </section>
      <section className="section">
        <h2>Quando usare il calcolo frequenza × severità</h2>
        <p>
          L’approccio è indicato per rami danni con sinistrosità moderata e distribuzione delle perdite approssimabile con
          modelli a media finita (ad esempio Poisson–Gamma o Negative Binomial). In presenza di code pesanti è opportuno integrare
          con analisi di severità e stop-loss, come illustrato in <em>Loss Models</em> (Klugman, Panjer, Willmot).
        </p>
        <p>
          Per portafogli eterogenei è consigliabile stratificare gli assicurati in classi di rischio omogenee e applicare un
          modello GLM per stimare coefficienti specifici, prima di calcolare il premio puro aggregato. Questo calcolatore fornisce
          un valore medio utile come controllo di coerenza.
        </p>
      </section>
      <section className="section">
        <h2>Fonti di riferimento</h2>
        <ul className="list">
          <li>
            <strong>IVASS</strong>, Lettera al mercato sulla costruzione delle tariffe danni auto – richiama l’uso di frequenza ×
            severità e l’obbligo di monitoraggio del loss ratio tecnico.
          </li>
          <li>
            <strong>ANIA</strong>, Manuale “Tecniche tariffarie danni” – capitoli su esposizioni equivalenti, bonus-malus e
            caricamenti.
          </li>
          <li>
            <strong>CAS</strong>, <em>Basic Ratemaking</em> – esempi pratici su trending della frequenza e sulla gestione delle
            spese.
          </li>
        </ul>
        <p>
          Cita queste fonti nella nota tecnica per dimostrare che il processo di pricing rispetta le best practice riconosciute e
          per facilitare eventuali revisioni dell’organo di vigilanza o dell’attuario incaricato.
        </p>
      </section>
    </Layout>
  );
}
