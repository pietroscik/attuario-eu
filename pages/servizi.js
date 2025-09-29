import Layout from "../components/Layout";

const redirects = [
  {
    href: "/teoria",
    title: "Studia la teoria",
    text: "Lezioni, formule e quiz per consolidare le basi attuariali.",
  },
  {
    href: "/strumenti",
    title: "Usa gli strumenti",
    text: "Template, notebook e calcolatori interattivi per esercitarti.",
  },
  {
    href: "/contatti",
    title: "Collabora con noi",
    text: "Proponi articoli, eventi o iniziative divulgative.",
  },
];

export default function Servizi() {
  return (
    <Layout
      title="Nessuna consulenza attiva"
      eyebrow="Progetto divulgativo"
      intro="attuario.eu è un progetto divulgativo: non forniamo servizi professionali, preventivi o call commerciali. Il sito raccoglie risorse educative, strumenti open-source e aggiornamenti normativi per supportare studenti, docenti e operatori del settore."
    >
      <div className="card-grid">
        {redirects.map(({ href, title, text }) => (
          <a key={href} href={href} className="link-card">
            <h3>{title}</h3>
            <p>{text}</p>
          </a>
        ))}
      </div>
    </Layout>
  );
}
