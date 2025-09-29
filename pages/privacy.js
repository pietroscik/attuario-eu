import Layout from "../components/Layout";

export default function Privacy() {
  return (
    <Layout
      title="Privacy"
      eyebrow="Tutela dei dati"
      intro="Informativa ai sensi del Reg. (UE) 2016/679 (GDPR). Questo sito raccoglie dati minimi per rispondere alle richieste (nome, email, messaggio). Non vende dati a terzi."
      width="narrow"
    >
      <p>
        Puoi chiedere rettifica o cancellazione scrivendo all’indirizzo indicato nella pagina Contatti. I dati vengono conservati
        solo per il tempo necessario a gestire la richiesta o l’iscrizione alla newsletter.
      </p>
    </Layout>
  );
}
