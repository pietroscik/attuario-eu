import Layout from "../components/Layout";

export default function Newsletter() {
  return (
    <Layout
      title="Newsletter attuario.eu"
      eyebrow="Aggiornamenti mensili"
      intro="Una email al mese con riassunti delle novità attuariali, link ai nuovi articoli, strumenti rilasciati e segnalazioni di eventi. Nessuna pubblicità, solo contenuti divulgativi."
      width="narrow"
    >
      <form action="https://formspree.io/f/your-id" method="POST" className="form-grid">
        <input className="input" name="nome" placeholder="Nome" required />
        <input className="input" name="email" type="email" placeholder="Email" required />
        <textarea
          className="input"
          name="interessi"
          placeholder="Temi attuariali di interesse (facoltativo)"
        />
        <button className="button" type="submit">
          Iscriviti
        </button>
      </form>
      <p className="small-print">
        Iscrivendoti autorizzi l’invio della newsletter divulgativa. Potrai cancellarti in qualsiasi momento tramite il link
        presente nelle email.
      </p>
    </Layout>
  );
}
