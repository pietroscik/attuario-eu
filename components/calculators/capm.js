// pages/calcolatori/capm.js
import { useState } from "react";

export default function CAPM(){
  const [rf,setRf]=useState(0.02);      // risk-free annuo
  const [rm,setRm]=useState(0.08);      // market expected return
  const [beta,setBeta]=useState(1.0);   // asset beta
  const [rp,setRp]=useState(0.10);      // optional: portfolio expected return for Sharpe

  const er = rf + beta*(rm - rf);       // CAPM
  const sharpe = (rp - rf) / Math.max(1e-9, Math.sqrt(1)); // assume stdev=1 if not provided

  return (
    <main style={{maxWidth:720, margin:"2rem auto", padding:"1rem"}}>
      <h1>CAPM & Indice di Sharpe</h1>
      <p style={{opacity:0.8}}>Rendimento atteso via CAPM e indice di Sharpe (semplificato).</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:12}}>
        <label>r<sub>f</sub><input type="number" step="0.001" value={rf} onChange={e=>setRf(+e.target.value)} /></label>
        <label>r<sub>m</sub><input type="number" step="0.001" value={rm} onChange={e=>setRm(+e.target.value)} /></label>
        <label>β<input type="number" step="0.01" value={beta} onChange={e=>setBeta(+e.target.value)} /></label>
        <label>r<sub>p</sub> (per Sharpe)<input type="number" step="0.001" value={rp} onChange={e=>setRp(+e.target.value)} /></label>
      </div>
      <div style={{marginTop:16}}>
        <div><b>E[r<sub>i</sub>]:</b> {er.toFixed(4)}</div>
        <div><b>Sharpe (sempl.):</b> {(rp - rf).toFixed(4)}</div>
        <p style={{opacity:0.7, fontSize:14, marginTop:8}}>Nota: per uno Sharpe corretto servono deviazione standard e/o tracking error. Qui è una stima grezza (solo premio per il rischio).</p>
      </div>
    </main>
  );
}
