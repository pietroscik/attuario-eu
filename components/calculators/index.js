// pages/calcolatori/index.js
export default function CalcolatoriIndex(){
  const cards = [
      {href:"/calcolatori/premio-puro", title:"Premio Puro", desc:"Wrapper del componente esistente"},
      {href:"/calcolatori/riserva-semplice", title:"Riserva Semplice", desc:"Wrapper del componente esistente"},
    {href:"/calcolatori/black-scholes", title:"Black–Scholes", desc:"Prezzo, greche e scenari per Call/Put europee"},
    {href:"/calcolatori/capm", title:"CAPM & Sharpe", desc:"Rendimento atteso, premio per il rischio e indice di Sharpe"},
    {href:"/calcolatori/annuity", title:"Rendite/Annuity", desc:"Valore attuale e futuro di rendite immediate e anticipate"},
  ];
  return (
    <main style={{maxWidth:900, margin:"2rem auto", padding:"1rem"}}>
      <h1 style={{fontSize:"2rem", marginBottom:8}}>Calcolatori Attuariali & Finanziari</h1>
      <p style={{opacity:0.8, marginBottom:24}}>Toolkit minimo per il sito <code>attuario.eu</code>. Aggiungi liberamente nuove schede.</p>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px,1fr))", gap:16}}>
        {cards.map(c => (
          <a key={c.href} href={c.href} style={{textDecoration:"none", color:"inherit"}}>
            <div style={{border:"1px solid #eaeaea", borderRadius:12, padding:16}}>
              <div style={{fontWeight:700, fontSize:"1.1rem"}}>{c.title}</div>
              <div style={{opacity:0.8, marginTop:8}}>{c.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
