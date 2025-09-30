import Link from "next/link";

import Layout from "../components/Layout";

const COMMUNITY_CHANNELS = [
  {
    name: "Server Discord (in manutenzione)",
    description:
      "Il server pubblico è temporaneamente offline mentre rivediamo moderazione e automazioni. Iscriviti alla lista di attesa per ricevere l'invito non appena riapre.",
    action: "Richiedi aggiornamenti",
    href: "mailto:community@attuario.eu?subject=Aggiornamenti%20Discord",
  },
  {
    name: "Canale Telegram",
    description:
      "Aggiornamenti rapidi su eventi, uscite editoriali e call for paper. Puoi seguirci dall'app ufficiale oppure da client CLI come tg (Linux), tenendo conto che il progetto open source non è più attivamente mantenuto.",
    action: "Iscriviti su Telegram",
    href: "https://t.me/attuarioeu",
  },
  {
    name: "Gruppi studio mensili",
    description:
      "Riunioni online di 60 minuti con focus tematici: preparazione esami professionali, approfondimenti su risk management e workshop di coding.",
    action: "Prenota il prossimo slot",
    href: "https://cal.attuario.eu/community",
  },
  {
    name: "Call individuale con il team",
    description:
      "Vuoi confrontarti su un progetto divulgativo o proporre una nuova iniziativa? Scrivici e fissiamo una call conoscitiva di 20 minuti.",
    action: "Richiedi una call",
    href: "mailto:community@attuario.eu?subject=Richiesta%20call%20conoscitiva&body=Raccontaci%20in%20pochi%20punti%20l'iniziativa%20o%20le%20domande%20che%20vorresti%20approfondire.",
  },
  {
    name: "Newsletter collaboratori",
    description:
      "Aggiornamenti dietro le quinte con call for paper, idee editoriali e opportunità di mentorship tra membri senior e junior.",
    action: "Iscriviti",
    href: "/newsletter",
  },
];

const COMMUNITY_INITIATIVES = [
  {
    title: "Office hour attuariale",
    description:
      "Sessioni Q&A live con professionisti che rispondono a dubbi su modelli, normativa e percorsi di carriera.",
    cadence: "Ogni secondo martedì del mese",
  },
  {
    title: "Co-writing di articoli",
    description:
      "Redazione condivisa di articoli divulgativi: dalla scelta delle fonti alla revisione peer-to-peer.",
    cadence: "Timeline di 4 settimane per ogni ciclo editoriale",
  },
  {
    title: "Hack lab dati",
    description:
      "Laboratorio collaborativo su dataset open source (HMD, CAS, Eurostat) per sperimentare tecniche di modellizzazione.",
    cadence: "Ultimo giovedì del mese",
  },
];

const COMMUNITY_GUIDELINES = [
  "Adotta un linguaggio rispettoso e includi sempre le fonti delle statistiche o delle normative citate.",
  "Evita di condividere dati sensibili o materiali coperti da copyright; privilegia dataset open source o sintetici.",
  "Quando poni un quesito tecnico descrivi contesto, ipotesi e strumenti utilizzati per facilitare risposte utili.",
  "Segnala ai moderatori comportamenti scorretti o violazioni della policy via canale #supporto-moderazione.",
  "Non sono ammesse offerte commerciali o consulenze: l’obiettivo è la condivisione divulgativa e formativa.",
];

const COMMUNITY_SUPPORT = [
  {
    label: "Programma mentorship",
    copy:
      "Abbina studenti e giovani professionisti con mentor esperti su tematiche come pricing, riserve e risk management.",
  },
  {
    label: "Calendario eventi",
    copy:
      "Google Calendar condiviso con webinar, call for paper, conferenze e deadline di certificazioni professionali.",
  },
  {
    label: "Bacheca opportunità",
    copy:
      "Raccolta settimanale di stage, offerte di lavoro e progetti di ricerca aperti alla community.",
  },
];

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
          {COMMUNITY_CHANNELS.map(({ name, description, action, href }) => (
            <article key={name} className="card">
              <h3>{name}</h3>
              <p>{description}</p>
              <a className="button secondary" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {action}
              </a>
            </article>
          ))}
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
