import Layout from "../../components/Layout";
import PremioUnico from "../../components/calculators/PremioUnico";
import KnowledgePanel from "../../components/calculators/KnowledgePanel";
import { CALCULATOR_METADATA } from "../../content/calculators/metadata";

export default function PremioUnicoPage() {
  return (
    <Layout
      title="Calcolatore premio unico"
      eyebrow="Coperture vita a premio unico"
      intro="Calcola l’importo da incassare in un’unica soluzione oggi per coprire un capitale assicurato, considerando probabilità di sinistro, durata, caricamenti e spese fisse."
      metaDescription="Premio unico vita: calcolatore con probabilità di sinistro, tasso tecnico, caricamenti e spese secondo le linee guida IVASS."
      width="narrow"
    >
      <PremioUnico />
      <KnowledgePanel metadata={CALCULATOR_METADATA["premio-unico"]} />
      <section className="section info-panel">
        <h2>Passaggi del calcolo</h2>
        <ol className="list">
          <li>Valore medio dell’indennizzo: somma assicurata × probabilità di sinistro.</li>
          <li>Attualizzazione del valore medio con il tasso tecnico impostato.</li>
          <li>Applicazione del caricamento per spese/margini, espresso come percentuale sul premio netto.</li>
        </ol>
        <p>
          Il modello presuppone un evento liquidato al termine della durata impostata. Per polizze con flussi multipli o benefici variabili è necessario usare basi demografiche e finanziarie più articolate.
        </p>
        <p>
          In attuazione del Regolamento IVASS n. 41/2018 il premio lordo deve tenere conto anche di spese fisse e marginalità
          coerenti con il profilo di rischio dell’impresa. L’input “Spese fisse” consente di stimare questo contributo, mentre il
          caricamento percentuale riprende la formula classica <code>premio = premio\,netto × (1 + caricamento)</code> illustrata
          in <em>Actuarial Mathematics for Life Contingent Risks</em> (Dickson, Hardy, Waters).
        </p>
      </section>
      <section className="section">
        <h2>Estensioni possibili</h2>
        <ul className="list">
          <li>
            Per rendite o prestazioni frazionate è necessario calcolare un valore attuale dei flussi (present value of benefits)
            usando tavole di mortalità ISTAT/AG e tassi di attualizzazione coerenti con Solvency II o IFRS 17.
          </li>
          <li>
            In presenza di opzioni finanziarie (riscatti, switch) è opportuno integrare un costo implicito o un capitale di
            rischio, come raccomandato dal Comitato Europeo delle Assicurazioni (CEA).
          </li>
          <li>
            Il caricamento può includere componenti differenziate per spese di acquisizione, gestione e margine di profitto,
            calcolate su basi prospettiche tramite analisi dei flussi di cassa (profit testing).
          </li>
        </ul>
        <p>
          Il calcolatore restituisce anche il premio per mille, utile per confronti rapidi con benchmark di mercato e con i
          prospetti informativi previsti dal Regolamento IVASS n. 41/2018 allegato 4. In sede di pricing definitivo è opportuno
          verificare la coerenza con i tassi garantiti massimi pubblicati da Banca d’Italia e con le ipotesi demografiche della
          nota tecnica.
        </p>
      </section>
      <section className="section">
        <h2>Fonti e riferimenti consigliati</h2>
        <ul className="list">
          <li>
            <strong>IVASS</strong>, Regolamento n. 41/2018 – Informativa, pubblicità e realizzazione dei prodotti assicurativi
            vita.
          </li>
          <li>
            <strong>EIOPA</strong>, Guidelines on the Valuation of Technical Provisions – capitolo dedicato ai contratti vita a
            premio unico.
          </li>
          <li>
            <strong>Society of Actuaries</strong>, <em>Actuarial Mathematics for Life Contingent Risks</em> – capitoli 2-4 su
            attualizzazione e caricamenti.
          </li>
        </ul>
        <p>
          Queste risorse rappresentano il punto di partenza per documentare il modello nel fascicolo tecnico e per predisporre
          la reportistica Solvency II (QRT S.12.01, S.14.01). È buona prassi citare le fonti anche nei materiali formativi della
          rete distributiva e nelle presentazioni al consiglio di amministrazione.
        </p>
      </section>
      <section className="section info-panel">
        <h2>Checklist operativa</h2>
        <ul className="list">
          <li>Validare le probabilità di sinistro con basi demografiche ufficiali (ISTAT, RG48, tavole proprietarie).</li>
          <li>Verificare che il tasso tecnico rispetti i limiti fissati dalle comunicazioni IVASS e dalle policy ALM interne.</li>
          <li>Documentare le spese fisse e variabili distinguendo tra costi di acquisizione, gestione e oneri fiscali.</li>
        </ul>
        <p className="small-print">
          La checklist aiuta a ridurre gli errori di implementazione che generano pagine 404 o discrepanze tra nota tecnica e
          strumenti operativi. Archivia i prospetti di calcolo con versioning controllato per facilitare la revisione dell’attua
rio incaricato.
        </p>
      </section>
    </Layout>
  );
}
