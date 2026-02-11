import Layout from "../../components/Layout";
import { BLOG_POSTS } from "../../content/pages/blog";

const RELATED_LINKS = {
  "ifrs17-gmm-iasb": [
    {
      href: "/risorse/ifrs17-essentials",
      label: "Mini-corso IFRS 17 Essentials",
    },
    {
      href: "/wiki#ifrs-17-per-i-bilanci-assicurativi",
      label: "Wiki: IFRS 17 per i bilanci assicurativi",
    },
    {
      href: "/teoria",
      label: "Teoria attuariale · moduli su riserve e valori attuariali",
    },
  ],
  "data-governance-attuariale": [
    {
      href: "/casi/data-science",
      label: "Case study · Data science attuariale",
    },
    {
      href: "/strumenti",
      label: "Strumenti & calcolatori · sezione tecnologia e dati",
    },
    {
      href: "/wiki#normativa-spiegata-semplice",
      label: "Wiki · Normativa spiegata semplice",
    },
  ],
  "insurtech-italiano-2024": [
    {
      href: "/casi/insurtech",
      label: "Case study · Innovazione InsurTech",
    },
    {
      href: "/applicazioni",
      label: "Applicazioni · innovazione prodotti e InsurTech",
    },
  ],
};

const ARTICLE_SECTIONS = {
  "ifrs17-gmm-iasb": [
    {
      title: "1. Dal principio contabile al lavoro quotidiano",
      paragraphs: [
        "Il General Measurement Model (GMM) non è solo una formula di bilancio: impatta direttamente sui flussi di lavoro attuariali. La scelta delle cash flow assumptions, dei tassi di sconto e del margine di servizio contrattuale (CSM) determina la volatilità dei risultati IFRS 17 nel tempo.",
        "Per chi lavora in attuariato o in funzioni finance, capire come BEL, RA e CSM reagiscono a modifiche delle ipotesi è fondamentale per dialogare con il board e con gli auditor.",
      ],
    },
    {
      title: "2. Punti di attenzione su BEL, RA e CSM",
      paragraphs: [
        "Quando analizzi un portafoglio IFRS 17, alcune domande chiave aiutano a mettere a fuoco la qualità dei numeri:",
      ],
      bullets: [
        "BEL: le ipotesi demografiche, economiche e di comportamento sono allineate ai dati osservati e ai requisiti di governance?",
        "Risk Adjustment: il metodo di stima (percentile, costo del capitale, ecc.) è documentato e coerente con il profilo di rischio della compagnia?",
        "CSM: la logica di unlocking è chiara, tracciata nel tempo e riconciliabile con le analisi di redditività di prodotto?",
      ],
    },
    {
      title: "3. Collegare IFRS 17 a Solvency II e ORSA",
      paragraphs: [
        "IFRS 17 non vive in un silo: i flussi e le ipotesi utilizzate per BEL e RA dialogano con il mondo Solvency II e con gli scenari ORSA.",
      ],
      bullets: [
        "Verifica le riconciliazioni chiave tra BEL IFRS 17 e Best Estimate Solvency II, evidenziando le scelte metodologiche che spiegano le differenze.",
        "Allinea gli scenari di sensitività IFRS 17 (tassi, lapse, mortalità) con quelli usati nei test ORSA, così da evitare messaggi incoerenti verso il board.",
        "Documenta in modo sintetico come le decisioni sul CSM influenzano la narrativa sulla redditività di lungo periodo.",
      ],
    },
  ],
  "data-governance-attuariale": [
    {
      title: "1. Perché serve un catalogo dati attuariale",
      paragraphs: [
        "Molti progetti falliscono non per mancanza di modelli, ma per mancanza di chiarezza sui dati. Un catalogo dati attuariale definisce quali tabelle esistono, chi le governa, come vengono aggiornate e per quali valutazioni vengono usate (riserve, pricing, ORSA, IFRS 17).",
        "Questo riduce fraintendimenti tra attuari, IT e data engineer e rende più semplice rispondere a domande di audit e vigilanza.",
      ],
    },
    {
      title: "2. Cosa non può mancare in un registro dati",
      paragraphs: [
        "Nel progettare un registro dati o un model registry attuariale, alcune informazioni dovrebbero sempre essere presenti:",
      ],
      bullets: [
        "Descrizione sintetica del dataset (portafoglio, sinistri, basi demografiche, curve di sconto, ecc.).",
        "Owner e steward del dato, con responsabilità su qualità e aggiornamento.",
        "Ciclicità di aggiornamento e controlli automatici applicati (completezza, coerenza, duplicati, outlier).",
        "Elenco dei modelli, delle analisi e dei report che dipendono da quel dataset.",
      ],
    },
    {
      title: "3. Errori frequenti da evitare",
      paragraphs: [
        "Nella pratica quotidiana emergono alcuni pattern ricorrenti che è utile prevenire:",
      ],
      bullets: [
        "Registri modello compilati solo in fase di progetto e non mantenuti nel BAU.",
        "Dipendenze critiche (es. basi demografiche, curvature di sconto) non dichiarate esplicitamente nel catalogo.",
        "Assenza di log strutturati sui cambi di ipotesi, che rende complessa la ricostruzione ex post delle valutazioni.",
      ],
    },
  ],
  "insurtech-italiano-2024": [
    {
      title: "1. Perché guardare all’InsurTech italiano",
      paragraphs: [
        "Il panorama InsurTech italiano offre casi concreti su come dati, tecnologia e partnership possano accelerare l’innovazione senza perdere il presidio attuariale. Startup e scale‑up lavorano su pricing dinamico, prodotti parametrici, embedded insurance e piattaforme di data analytics.",
      ],
    },
    {
      title: "2. Cosa osservare in una partnership",
      paragraphs: [
        "Dal punto di vista attuariale e di risk management, alcune domande guidano la valutazione di una collaborazione:",
      ],
      bullets: [
        "Quali dati vengono utilizzati e con quali basi legali e di consenso?",
        "Qual è l’impatto sul profilo di rischio (tecnico, operativo, reputazionale) del portafoglio esistente?",
        "Come vengono documentati gli algoritmi utilizzati e il loro monitoraggio nel tempo?",
      ],
    },
  ],
};

function formatDate(iso) {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}

export async function getStaticPaths() {
  const paths = BLOG_POSTS.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = BLOG_POSTS.find((item) => item.slug === params.slug) || null;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function BlogPostPage({ post }) {
  const {
    slug,
    title,
    summary,
    author,
    role,
    reviewedBy,
    updatedAt,
  } = post;

  const formattedDate = formatDate(updatedAt);
  const relatedLinks = RELATED_LINKS[slug] ?? [];
  const articleSections = ARTICLE_SECTIONS[slug] ?? [];

  return (
    <Layout
      title={title}
      eyebrow="Blog & approfondimenti"
      intro={summary}
      width="narrow"
    >
      <section className="section">
        <div className="card">
          <h2>Metadati editoriali</h2>
          <p className="small-print">
            <strong>Autore:</strong> {author} ({role})
            <br />
            {reviewedBy ? (
              <>
                <strong>Revisionato da:</strong> {reviewedBy}
                <br />
              </>
            ) : null}
            {formattedDate ? (
              <>
                <strong>Ultimo aggiornamento:</strong> {formattedDate}
              </>
            ) : null}
          </p>
        </div>
      </section>

      {articleSections.length ? (
        <section className="section">
          {articleSections.map(({ title: sectionTitle, paragraphs, bullets }) => (
            <article key={sectionTitle} className="card">
              <h2>{sectionTitle}</h2>
              {paragraphs?.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {bullets?.length ? (
                <ul className="list">
                  {bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>
      ) : null}

      <section className="section info-panel">
        <h2>Come usare questo articolo</h2>
        <p>
          Gli articoli del blog nascono come complementi alle sezioni Teoria, Casi e
          Strumenti del sito. Usa questa pagina come guida per orientare letture
          ufficiali (documenti di EIOPA, IASB, IVASS, IAIS, NGFS) e collegare i
          concetti ai tuoi progetti di studio o lavoro.
        </p>
        {relatedLinks.length ? (
          <>
            <h3>Collegamenti interni consigliati</h3>
            <ul className="list">
              {relatedLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
        <p className="small-print">
          I contenuti sono a solo scopo divulgativo e formativo: non sostituiscono in
          alcun modo la documentazione ufficiale dei regolatori, le note tecniche
          aziendali o la consulenza professionale di un attuario abilitato.
        </p>
      </section>
    </Layout>
  );
}
