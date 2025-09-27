import Nav from "../components/Nav"; import Footer from "../components/Footer";
import PremioPuro from "../components/calculators/PremioPuro";
import RiservaSemplice from "../components/calculators/RiservaSemplice";
export default function Calcolatori(){
  return (<>
    <Nav/>
    <main style={{maxWidth:960, margin:"0 auto", padding:"32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700}}>Calcolatori attuariali</h1>
      <p style={{opacity:.85}}>Strumenti didattici/indicativi: non sostituiscono una valutazione professionale.</p>
      <div style={{display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", marginTop:12}}>
        <PremioPuro/>
        <RiservaSemplice/>
      </div>
    </main>
    <Footer/>
  </>);
}
