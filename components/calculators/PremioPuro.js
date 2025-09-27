import { useState } from "react";
export default function PremioPuro(){
  const [freq,setFreq]=useState(0.05), [sev,setSev]=useState(2000);
  const premio = (freq>=0 && sev>=0) ? freq*sev : 0;
  return (
    <div style={{border:"1px solid #eee", borderRadius:16, padding:16}}>
      <h3>Calcolatore premio puro</h3>
      <label>Frequenza (0–1)<br/>
        <input type="number" step="0.001" value={freq} onChange={e=>setFreq(+e.target.value)} />
      </label><br/>
      <label>Severità media (€)<br/>
        <input type="number" step="1" value={sev} onChange={e=>setSev(+e.target.value)} />
      </label>
      <div style={{marginTop:8}}>Premio puro ≈ <b>€ {premio.toFixed(2)}</b></div>
      <p style={{fontSize:12, opacity:.7}}>E[X] = frequenza × severità. Esclude caricamenti e margini.</p>
    </div>
  );
}
