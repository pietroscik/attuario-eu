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
      title="Chi siamo"
      eyebrow="Un progetto di divulgazione attuariale"
      intro="attuario.eu è una piattaforma editoriale che raccoglie percorsi di studio, risorse e strumenti per la community attuariale in lingua italiana."
      metaDescription="Scopri la missione, l’approccio editoriale e come contribuire al progetto divulgativo di attuario.eu."
      width="narrow"
    >
      <section className="section info-panel" aria-labelledby="chi-siamo-missione">
        <h2 id="chi-siamo-missione">La nostra missione</h2>
        <p>
          Rendiamo più accessibili concetti, casi e strumenti della scienza attuariale. Il sito nasce come hub divulgativo per
          riunire materiali affidabili, percorsi guidati e opportunità di collaborazione, con particolare attenzione al pubblico italiano.
        </p>
        <p className="small-print">
          Ogni pagina mantiene il disclaimer presente nel footer del sito: le informazioni hanno scopo informativo e non costituiscono consulenza professionale.
        </p>
      </section>

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
    </Layout>
  );
}
