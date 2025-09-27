import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Home(){
  return (<>
    <Nav/>
    <main style={{maxWidth:960, margin:"0 auto", padding:"32px 16px"}}>
      <section style={{textAlign:"center", marginBottom:32}}>
        <h1 style={{fontSize:36, fontWeight:700, margin:"0 0 12px"}}>Soluzioni attuariali per decisioni migliori</h1>
        <p style={{fontSize:18, opacity:.85}}>
          Pricing, riserve, solvibilità e gestione del rischio per assicurazioni, fondi e PMI.
          Dalla modellazione statistica alla reportistica conforme (IFRS 17, Solvency).
        </p>
        <div style={{display:"flex", gap:12, justifyContent:"center", marginTop:16}}>
          <a href="/contatti" style={{padding:"10px 16px", background:"#000", color:"#fff", borderRadius:999}}>Prenota una call</a>
          <a href="/calcolatori" style={{padding:"10px 16px", border:"1px solid #000", borderRadius:999}}>Prova i calcolatori</a>
        </div>
      </section>
      <section style={{display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))"}}>
        {[["Pricing tecnico","Frequenza × severità, GLM, credibilità."],
          ["Riserve","RBNS/IBNR con metodi deterministici e stocastici."],
          ["Solvibilità","VaR/CVaR, capitale a rischio e stress test."]]
          .map(([t,d],i)=>(
            <div key={i} style={{border:"1px solid #eee", borderRadius:16, padding:16}}>
              <h3 style={{margin:"0 0 6px"}}>{t}</h3><p style={{margin:0, opacity:.8}}>{d}</p>
            </div>
        ))}
      </section>
      <section style={{marginTop:24, border:"1px solid #eee", background:"#fafafa", borderRadius:16, padding:16}}>
        <h2 style={{margin:"0 0 8px"}}>Case studies</h2>
        <ul style={{margin:"0 0 0 18px"}}>
          <li>Tariffa sinistri auto con GLM e segmentazione rischio.</li>
          <li>IBNR per ramo danni con metodo semplice + sensitività.</li>
          <li>Report IFRS 17 sintetico per PMI assicurativa.</li>
        </ul>
      </section>
    </main>
    <Footer/>
  </>);
}
