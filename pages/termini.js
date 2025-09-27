import Nav from "../components/Nav"; import Footer from "../components/Footer";
export default function Termini(){
  return (<>
    <Nav/>
    <main style={{maxWidth:960, margin:"0 auto", padding:"32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700}}>Termini d’uso</h1>
      <p>Contenuti a scopo informativo. Nessuna garanzia implicita. L’utilizzo dei calcolatori è didattico e non sostituisce la consulenza professionale.</p>
    </main>
    <Footer/>
  </>);
}
