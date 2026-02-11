import Link from "next/link";

import Layout from "../components/Layout";

const SITE_PILLARS = [
  {
    title: "Percorsi di studio",
    description:
      "Moduli didattici e itinerari consigliati per approfondire matematica attuariale, riserve, finanza e preparazione agli esami professionali.",
  },
  {
    title: "Applicazioni pratiche",
    description:
      "Casi d’uso su assicurazioni, previdenza e risk management per collegare teoria e processi aziendali.",
  },
  {
    title: "Aggiornamento continuo",
    description:
      "Notizie, normativa, eventi e call for paper curate per la community attuariale italiana.",
  },
  {
    title: "Strumenti e risorse",
    description:
      "Guide a software, dataset open source e directory di siti istituzionali, blog e community specializzate.",
  },
];

const EDITORIAL_COMMITMENTS = [
  "Contenuti divulgativi e gratuiti, esposti con linguaggio chiaro e in lingua italiana.",
  "Ci impegniamo a citare fonti normative, paper accademici e dataset verificabili per agevolare lo studio autonomo.",
  "Nessuna consulenza professionale: le informazioni hanno scopo informativo e non sostituiscono pareri certificati.",
  "Ogni contributo viene revisionato insieme agli autori per garantire correttezza terminologica e trasparenza.",
];

const CONTRIBUTION_PATHS = [
  {
    title: "Proponi un contenuto",
    description:
      "Hai un articolo, un caso studio o un dataset da condividere? Scrivici una breve presentazione e il materiale di supporto.",
    action: "Invia la tua idea",
    href: "/contatti",
  },
  {
    title: "Suggerisci una risorsa",
    description:
      "Segnala siti istituzionali, podcast, libri o strumenti utili per chi studia o lavora nel settore attuariale.",
    action: "Compila il form",
    href: "mailto:info@attuario.eu?subject=Segnalazione%20risorsa",
  },
  {
    title: "Partecipa alla community",
    description:
      "Unisciti ai gruppi di studio, agli incontri live e ai canali di discussione per confrontarti con altri professionisti.",
    action: "Scopri le iniziative",
    href: "/community",
  },
];

export default function ChiSiamo() {
  return (
    <Layout
      title="Chi Sono"
      eyebrow="L'autore del progetto"
      intro={
        <>
          <p>
            Sono <strong>Pietro Maietta</strong>, 40 anni, laureato magistrale in Statistica e Scienze 
            Attuariali (105/110) e in fase di completamento della laurea magistrale in 
            Economia e Management del Mare (Università di Napoli Parthenope). <strong>Non sono iscritto all&apos;Albo Nazionale Attuari</strong> — sto preparando 
            l&apos;esame di Stato per l&apos;abilitazione professionale.
          </p>
          <p>
            <strong>attuario.eu</strong> è la mia iniziativa personale per condividere risorse didattiche 
            con altri studenti e aspiranti attuari. Non è uno studio professionale né 
            un&apos;organizzazione: è un progetto open source gestito da una singola persona.
          </p>
        </>
      }
      metaDescription="Scopri chi è l'autore di attuario.eu, il suo background e la missione del progetto."
      width="narrow"
    >
      <section className="section" aria-labelledby="chi-siamo-cosa-facciamo">
        <h2 id="chi-siamo-cosa-facciamo">Cosa trovi su attuario.eu</h2>
        <div className="card-grid">
          {SITE_PILLARS.map(({ title, description }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="small-print">
          Il progetto copre l’intero percorso professionale: dalla teoria attuariale alla pratica in impresa, passando per strumenti, notizie e approfondimenti pubblicati nel nostro <Link href="/blog">blog</Link>.
        </p>
      </section>

      <section className="section info-panel" aria-labelledby="chi-siamo-approccio">
        <h2 id="chi-siamo-approccio">Il nostro approccio editoriale</h2>
        <ul className="list">
          {EDITORIAL_COMMITMENTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="small-print">
          Per proporre modifiche o segnalare correzioni puoi scriverci direttamente via email all’indirizzo <a href="mailto:info@attuario.eu">info@attuario.eu</a>.
        </p>
      </section>

      <section className="section" aria-labelledby="chi-siamo-contribuisci">
        <h2 id="chi-siamo-contribuisci">Come contribuire</h2>
        <div className="card-grid">
          {CONTRIBUTION_PATHS.map(({ title, description, action, href }) => {
            const isInternalLink = href.startsWith("/");

            return (
              <article key={title} className="card">
                <h3>{title}</h3>
                <p>{description}</p>
                {isInternalLink ? (
                  <Link className="button secondary" href={href}>
                    {action}
                  </Link>
                ) : (
                  <a className="button secondary" href={href}>
                    {action}
                  </a>
                )}
              </article>
            );
          })}
        </div>
        <p className="small-print">
          Preferisci un contatto diretto? Visita la pagina <Link href="/contatti">Contatti</Link> per inviarci un messaggio e ricevere risposta entro pochi giorni lavorativi.
        </p>
      </section>

      <section
        className="section info-panel"
        aria-labelledby="chi-siamo-proprieta-intellettuale"
      >
        <h2 id="chi-siamo-proprieta-intellettuale">Proprietà intellettuale</h2>
        <p>
          Tutti i materiali originali pubblicati su attuario.eu, inclusi testi, grafiche e format redazionali, sono riconducibili alla mia persona e restano di mia esclusiva proprietà intellettuale. Qualsiasi riutilizzo o adattamento richiede un’autorizzazione esplicita.
        </p>
      </section>
    </Layout>
  );
}
