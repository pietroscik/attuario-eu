import Nav from "../components/Nav"; import Footer from "../components/Footer";
export default function Servizi(){
  const items = [
    ["Pricing","Tariffe tecniche, GLM, analisi elasticità e marginalità."],
    ["Riserve Tecniche","RBNS/IBNR, triangoli semplificati, documentazione di supporto."],
    ["Solvibilità & Stress Test","VaR/CVaR, scenari avversi, capitale a rischio."],
    ["IFRS 17 & Compliance","Supporto operativo a misurazione e disclosure."],
    ["Valutazioni per PMI","Perdite attese, scoring interno, piani previdenziali."],
    ["Formazione","Workshop su metodi quantitativi e risk management."]
  ];
  return (<>
    <Nav/>
    <main style={{maxWidth:960, margin:"0 auto", padding:"32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700}}>Servizi</h1>
      <div style={{display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", marginTop:12}}>
        {items.map(([t,d],i)=>(
          <div key={i} style={{border:"1px solid #eee", borderRadius:16, padding:16}}>
            <h3 style={{margin:"0 0 6px"}}>{t}</h3><p style={{margin:0, opacity:.8}}>{d}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop:16}}>
        <a href="/contatti" style={{padding:"10px 16px", background:"#000", color:"#fff", borderRadius:999}}>Richiedi un preventivo</a>
      </div>
    </main>
    <Footer/>
  </>);
}
