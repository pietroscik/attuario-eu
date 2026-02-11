import Link from "next/link";

import Layout from "../components/Layout";
import {
  COMMUNITY_CHANNELS,
  COMMUNITY_GUIDELINES,
  COMMUNITY_INITIATIVES,
  COMMUNITY_SUPPORT,
} from "../content/pages/community";

export default function Community() {
  return (
    <Layout
      title="Community"
      eyebrow="Spazio di confronto"
      intro="Hub collaborativo per gruppi di studio e iniziative tra professionisti, studenti e docenti. Qui trovi i canali ufficiali su Discord e Telegram, il calendario delle attività e le linee guida per partecipare in modo efficace."
    >
      <section className="info-panel" aria-labelledby="community-canali">
        <h2 id="community-canali">Dove ci incontriamo</h2>
        <p>
          Scegli il canale più adatto al tuo stile di apprendimento: chat e thread su Discord per confronto rapido e approfondito, aggiornamenti push su Telegram, eventi live per esercitazioni e mentorship.
        </p>

        <p className="small-print">
          Cerchi racconti e approfondimenti della community? Li trovi raccolti nel nostro{" "}
          <Link href="/blog">blog</Link>, insieme alle interviste e agli editoriali curati dal team.
        </p>

        <div className="card-grid">
          {COMMUNITY_CHANNELS.map(({ name, description, action, href }) => {
            const isInternal = href.startsWith("/");
            return (
              <article key={name} className="card">
                <h3>{name}</h3>
                <p>{description}</p>
                {isInternal ? (
                  <Link className="button secondary" href={href}>
                    {action}
                  </Link>
                ) : (
                  <a className="button secondary" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {action}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" aria-labelledby="community-iniziative">
        <h2 id="community-iniziative">Attività ricorrenti</h2>
        <div className="card-grid">
          {COMMUNITY_INITIATIVES.map(({ title, description, cadence }) => (
            <article key={title} className="card">
              <h3>{title}</h3>
              <p>{description}</p>
              <p className="small-print">{cadence}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section info-panel" aria-labelledby="community-linee-guida">
        <h2 id="community-linee-guida">Linee guida di partecipazione</h2>
        <p>
          La community è moderata da volontari: segui queste indicazioni per mantenere un ambiente accogliente e professionale.
        </p>
        <ul className="list">
          {COMMUNITY_GUIDELINES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="small-print">
          Ricorda che attuario.eu è un progetto divulgativo: nessuna consulenza o parere professionale, solo scambio di conoscenza.
        </p>
      </section>

      <section className="section" aria-labelledby="community-supporto">
        <h2 id="community-supporto">Supporto e risorse dedicate</h2>
        <div className="card-grid">
          {COMMUNITY_SUPPORT.map(({ label, copy }) => (
            <article key={label} className="card">
              <h3>{label}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="small-print">
          Vuoi proporre un nuovo gruppo o coordinare un workshop? Compila il form nella pagina{" "}
          <Link href="/contatti">Contatti</Link>{" "}
          specificando obiettivi, target e materiali proposti. In alternativa scrivi a{" "}
          <a href="mailto:community@attuario.eu">community@attuario.eu</a>{" "}
          per entrare in contatto con il team di moderazione.
        </p>
      </section>
    </Layout>
  );
}
