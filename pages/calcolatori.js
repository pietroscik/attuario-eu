import Layout from "../components/Layout";
import PremioPuro from "../components/calculators/PremioPuro";
import RiservaSemplice from "../components/calculators/RiservaSemplice";

export default function Calcolatori() {
  return (
    <Layout
      title="Calcolatori attuariali"
      eyebrow="Tool didattici"
      intro="Strumenti didattici e indicativi: non sostituiscono una valutazione professionale."
    >
      <div className="calculator-grid">
        <PremioPuro />
        <RiservaSemplice />
      </div>
      <p className="small-print">
        I risultati sono da considerarsi dimostrativi. Verifica sempre formule e ipotesi prima di ogni applicazione reale.
      </p>
    </Layout>
  );
}
