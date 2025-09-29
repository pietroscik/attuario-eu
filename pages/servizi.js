import Layout from "../components/Layout";

import { SERVICE_REDIRECTS } from "../content/pages/servizi";

export default function Servizi() {
  return (
    <Layout
      title="Nessuna consulenza attiva"
      eyebrow="Progetto divulgativo"
      intro="attuario.eu è un progetto divulgativo: non forniamo servizi professionali, preventivi o call commerciali. Il sito raccoglie risorse educative, strumenti open-source e aggiornamenti normativi per supportare studenti, docenti e operatori del settore."
    >
      <div className="card-grid">
        {SERVICE_REDIRECTS.map(({ href, title, text }) => (
          <a key={href} href={href} className="link-card">
            <h3>{title}</h3>
            <p>{text}</p>
          </a>
        ))}
      </div>
    </Layout>
  );
}
