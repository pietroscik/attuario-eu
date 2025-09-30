import { useState } from "react";
import Link from "next/link";

import Layout from "../components/Layout";

const CONTACT_METHODS = [
  {
    label: "Redazione e partnership",
    email: "info@attuario.eu",
  },
  {
    label: "Acquisti digital kit",
    email: "shop@attuario.eu",
  },
  {
    label: "Community e moderazione",
    email: "community@attuario.eu",
  },
];

export default function Contatti() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const message = data?.message || "Invio non riuscito. Riprova più tardi.";
        throw new Error(message);
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Si è verificato un errore imprevisto.");
    }
  };

  return (
    <Layout
      title="Contatti & collaborazioni"
      eyebrow="Partecipa al progetto"
      intro="attuario.eu non offre consulenza professionale o servizi commerciali. Puoi però proporre articoli, segnalare eventi, condividere dataset o suggerire risorse utili alla community."
      width="narrow"
    >
      <form
        noValidate
        className="form-grid"
        onSubmit={handleSubmit}
      >
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Nome e affiliazione"
          autoComplete="name"
          required
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          required
        />
        <textarea
          className="input"
          name="message"
          placeholder="Descrivi la tua proposta o domanda"
          rows={6}
          required
        />
        <input type="hidden" name="_gotcha" aria-hidden="true" />
        <button className="button" type="submit" disabled={status === "loading"}>
          Invia
        </button>
        <div className="small-print" role="status" aria-live="polite">
          {status === "loading" && "Invio in corso..."}
          {status === "success" &&
            "Messaggio inviato correttamente. Riceverai una conferma via email a breve."}
          {status === "error" && errorMessage}
        </div>
      </form>
      <section className="section info-panel" aria-labelledby="contatti-email">
        <h2 id="contatti-email">Contatti diretti</h2>
        <p className="small-print">
          Preferisci scrivere dalla tua casella di posta? Usa l’indirizzo più adatto e riceverai risposta in 48 ore lavorative.
        </p>
        <ul className="list">
          {CONTACT_METHODS.map(({ label, email }) => (
            <li key={email}>
              <span className="small-print">{label}:</span>{" "}
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          ))}
        </ul>
      </section>
      <p className="small-print">
        Preferisci usare la tua casella di posta? Scrivici direttamente a{" "}
        <a href="mailto:info@attuario.eu">info@attuario.eu</a>{" "}
        per collaborazioni editoriali, idee per eventi e segnalazioni di risorse.
      </p>
      <p className="small-print">
        Con l’invio accetti la <Link href="/privacy">Privacy</Link>. I messaggi ricevuti vengono letti entro 72 ore.
      </p>
    </Layout>
  );
}
