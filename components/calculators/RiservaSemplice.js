import { useState } from "react";
export default function RiservaSemplice(){
  const [aperti,setAperti]=useState(120), [costoresiduo,setCosto]=useState(1500), [ibnr,setIbnr]=useState(30000);
  const rbns = Math.max(0, aperti*costoresiduo); const totale = Math.max(0, rbns + ibnr);
  return (
    <div style={{border:"1px solid #eee", borderRadius:16, padding:16}}>
      <h3>Riserva tecnica (stima semplice)</h3>
      <label>Sinistri aperti (RBNS)<br/><input type="number" value={aperti} onChange={e=>setAperti(+e.target.value)} /></label><br/>
      <label>Costo medio residuo (€)<br/><input type="number" value={costoresiduo} onChange={e=>setCosto(+e.target.value)} /></label><br/>
      <label>IBNR stimato (€)<br/><input type="number" value={ibnr} onChange={e=>setIbnr(+e.target.value)} /></label>
      <div style={{marginTop:8}}>RBNS ≈ <b>€ {rbns.toFixed(2)}</b> — Totale ≈ <b>€ {totale.toFixed(2)}</b></div>
      <p style={{fontSize:12, opacity:.7}}>Indicativo: per IBNR accurato servono triangoli/metodi dedicati.</p>
    </div>
  );
}
