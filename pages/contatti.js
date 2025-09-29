import Layout from "../components/Layout";

export default function Contatti() {
  return (
    <Layout
      title="Contatti & collaborazioni"
      eyebrow="Partecipa al progetto"
      intro="attuario.eu non offre consulenza professionale o servizi commerciali. Puoi però proporre articoli, segnalare eventi, condividere dataset o suggerire risorse utili alla community."
      width="narrow"
    >
      <form action="https://formspree.io/f/your-id" method="POST" className="form-grid">
        <input className="input" name="nome" placeholder="Nome e affiliazione" required />
        <input className="input" name="email" type="email" placeholder="Email" required />
        <textarea
          className="input"
          name="messaggio"
          placeholder="Descrivi la tua proposta o domanda"
          required
        />
        <button className="button" type="submit">
          Invia
        </button>
      </form>
      <p className="small-print">
        Con l’invio accetti la <a href="/privacy">Privacy</a>. I messaggi ricevuti vengono letti entro 72 ore.
      </p>
    </Layout>
  );
}
