import Layout from "../../components/Layout";
import Link from "next/link";

export default function BlogIndex() {
  return (
    <Layout
      title="Archivio blog"
      eyebrow="Ricerca articoli"
      intro="Area dedicata alla raccolta degli articoli pubblicati. Integra un CMS o aggiungi file Markdown per popolare automaticamente i contenuti."
    >
      <p>
        Vai alla panoramica principale del blog per leggere gli ultimi pezzi:
      </p>
      <Link href="/blog" className="button secondary">
        Apri il blog
      </Link>
    </Layout>
  );
}
