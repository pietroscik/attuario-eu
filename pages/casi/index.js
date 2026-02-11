import Link from "next/link";

import Layout from "../../components/Layout";
import { CASE_STUDIES } from "../../content/pages/casi";
      
export default function Casi() {
  return (
    <Layout
      title="Case study operativi"
      eyebrow="Esempi guidati"
      intro="Una raccolta di percorsi pratici per applicare la teoria attuariale. Ogni case study include dataset di supporto, note metodologiche e deliverable pronti per essere adattati al proprio contesto, dalla tariffazione vita ai progetti di data science attuariale."
      metaDescription="Elenco di case study attuariali con dataset, workflow e checklist normative su vita, danni, previdenza, risk management, data science e InsurTech."
    >
      <section className="card-grid">
        {CASE_STUDIES.map(({ slug, title, summary, highlights }) => (

          <article key={slug} className="card">
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul className="list">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="button secondary" href={`/casi/${slug}`}>
              Apri il case study
            </Link>
          </article>
        ))}
      </section>

      <section className="section info-panel">
        <h2>Come usare i materiali</h2>
        <p>
          Ogni pagina include suggerimenti su dataset, strumenti digitali e indicatori da comunicare a stakeholder tecnici e non tecnici. Personalizza i template con i tuoi dati, cita sempre le fonti e tieni conto dei vincoli normativi del tuo settore.
        </p>
        <p className="small-print">
          I contenuti sono pensati per studio e divulgazione: non costituiscono consulenza professionale né sostituiscono il giudizio di un attuario abilitato.
        </p>
      </section>

      <section className="section" aria-labelledby="supporto-operativo">
        <h2 id="supporto-operativo">Collega teoria, strumenti e case reali</h2>
        <p>
          Ogni percorso è pensato per integrarsi con le sezioni <Link href="/applicazioni">Applicazioni</Link> e
          <Link href="/strumenti"> Strumenti</Link>: parti dalle checklist, apri i calcolatori dedicati e combina i dataset
          per creare deliverable coerenti con le normative vigenti.
        </p>
        <ul className="list">
          <li>Imposta le ipotesi di lavoro con le guide sintetiche della sezione Applicazioni.</li>
          <li>Esegui i calcoli con i tool online o i notebook open source suggeriti.</li>
          <li>Adatta i template di comunicazione per stakeholder tecnici, management e regulator.</li>
        </ul>
        <div className="cta-row">
          <Link className="button" href="/applicazioni">
            Vai alle Applicazioni
          </Link>
          <Link className="button secondary" href="/strumenti">
            Apri gli Strumenti
          </Link>
        </div>
      </section>

      <style jsx>{`
        .cta-row {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
      `}</style>
    </Layout>
  );
}
