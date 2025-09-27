// pages/calcolatori/annuity.js
import { useState, useMemo } from "react";

function pow1p(x,n){ return Math.pow(1+x, n); }

export default function Annuity(){
  const [P,setP]=useState(1000);    // pagamento periodico
  const [i,setI]=useState(0.03);    // tasso per periodo
  const [n,setN]=useState(10);      // numero di periodi
  const [due,setDue]=useState(false); // anticipata?

  const out = useMemo(()=>{
    if (i<=-1 || n<=0) return null;
    const v = 1/(1+i);
    const a_immediate = (1 - Math.pow(v, n))/i;
    const a_due = a_immediate*(1+i);
    const s_immediate = (pow1p(i,n) - 1)/i;
    const s_due = s_immediate*(1+i);

    const a = due ? a_due : a_immediate;
    const s = due ? s_due : s_immediate;

    const PV = P * a;
    const FV = P * s;

    return { a_immediate, a_due, s_immediate, s_due, PV, FV };
  }, [P,i,n,due]);

  return (
    <main style={{maxWidth:800, margin:"2rem auto", padding:"1rem"}}>
      <h1>Rendite (Annuity): Valore Attuale e Futuro</h1>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:12}}>
        <label>Pagamento P<input type="number" value={P} onChange={e=>setP(+e.target.value)} /></label>
        <label>Tasso i<input type="number" step="0.001" value={i} onChange={e=>setI(+e.target.value)} /></label>
        <label>Periodi n<input type="number" value={n} onChange={e=>setN(+e.target.value)} /></label>
        <label style={{display:"flex",alignItems:"center",gap:8}}>
          <input type="checkbox" checked={due} onChange={e=>setDue(e.target.checked)} />
          Anticipata (due)
        </label>
      </div>
      {out && (
        <section style={{marginTop:16, display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:16}}>
          <div style={{border:"1px solid #eee",borderRadius:10,padding:12}}>
            <h3>Coefficienti</h3>
            <div>a<sub>n|i</sub>: {out.a_immediate.toFixed(6)}</div>
            <div>ä<sub>n|i</sub>: {out.a_due.toFixed(6)}</div>
            <div>s<sub>n|i</sub>: {out.s_immediate.toFixed(6)}</div>
            <div>ś<sub>n|i</sub>: {out.s_due.toFixed(6)}</div>
          </div>
          <div style={{border:"1px solid #eee",borderRadius:10,padding:12}}>
            <h3>Valori</h3>
            <div><b>PV:</b> {out.PV.toFixed(2)}</div>
            <div><b>FV:</b> {out.FV.toFixed(2)}</div>
          </div>
        </section>
      )}
    </main>
  );
}
