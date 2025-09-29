import Layout from "../components/Layout";

export default function Wiki() {
  return (
    <Layout
      title="Wiki attuariale"
      eyebrow="Knowledge base"
      intro="Sezione dedicata a glossari, FAQ e snippet normativi riutilizzabili. Popola questa pagina con articoli o collegamenti alla tua base di conoscenza."
    >
      <div className="info-panel">
        <p>
          Personalizza questa pagina creando sotto-sezioni (es. Glossario, Solvency II, IFRS 17) o integrando contenuti Markdown
          generati automaticamente dal repository.
        </p>
      </div>
    </Layout>
  );
}
