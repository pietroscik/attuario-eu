import Layout from "../../components/Layout";
import PensioneIndicizzata from "../../components/calculators/PensioneIndicizzata";

export default function PensioneIndicizzataPage() {
  return (
    <Layout
      title="Calcolatore pensione indicizzata"
      eyebrow="Prestazioni rivalutate"
      intro="Simula l'importo di una pensione retributiva con indicizzazione annua costante, calcolando quota maturata, valore attuale e profilo di crescita dei pagamenti."
      metaDescription="Calcolatore pensione indicizzata: retribuzione finale, quota di maturazione, valore attuale e grafico dei primi anni di pensione."
      width="narrow"
    >
      <PensioneIndicizzata />
      <section className="section info-panel">
        <h2>Metodo di calcolo</h2>
        <p>
          La pensione annua iniziale deriva dal prodotto tra retribuzione finale e aliquota di maturazione complessiva.
          Le prestazioni successive sono rivalutate con un tasso costante, mentre il valore attuale applica il tasso di attualizzazione selezionato.
        </p>
        <p>
          L'approccio replica i prospetti informativi previsti dal D.Lgs. 252/2005 e dalle note Covip sulle comunicazioni periodiche ai sottoscrittori.
        </p>
      </section>
      <section className="section">
        <h2>Come interpretare i risultati</h2>
        <p>
          Il coefficiente di trasformazione implicito consente di confrontare il modello con i coefficienti ufficiali INPS o con quelli di fondi negoziali.
        </p>
        <p>
          Modificando crescita retributiva e indicizzazione puoi costruire scenari stressati da allegare al documento di politica di investimento delle forme pensionistiche complementari.
        </p>
      </section>
      <section className="section">
        <h2>Fonti e riferimenti</h2>
        <ul className="list">
          <li>D.Lgs. 252/2005 e successive modifiche – regole per la previdenza complementare.</li>
          <li>Delibere Covip su rendicontazione e scenari probabilistici (es. Delibera 31/10/2006).</li>
          <li>Manuali ANIA sui piani pensionistici aziendali e schemi di comunicazione agli aderenti.</li>
        </ul>
      </section>
    </Layout>
  );
}
