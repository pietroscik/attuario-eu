import Layout from "../components/Layout";

export default function Community() {
  return (
    <Layout
      title="Community"
      eyebrow="Spazio di confronto"
      intro="Punto di raccolta per gruppi di studio, forum e iniziative collaborative. Personalizza questa sezione collegando la piattaforma community che preferisci (Discourse, Slack, Discord, ecc.)."
    >
      <div className="info-panel">
        <p>
          Suggerimento: integra un feed Discourse o linka canali tematici (esami, carriera, normativa). Ricorda di indicare le
          regole di partecipazione e la moderazione.
        </p>
      </div>
    </Layout>
  );
}
