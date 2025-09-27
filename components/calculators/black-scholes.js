// pages/calcolatori/black-scholes.js
import { useState, useMemo } from "react";

function cdf(x){ return 0.5 * (1 + Math.erf(x/Math.SQRT2)); }
function pdf(x){ return Math.exp(-0.5*x*x)/Math.sqrt(2*Math.PI); }

export default function BlackScholes(){
  const [S,setS]=useState(100);
  const [K,setK]=useState(100);
  const [r,setR]=useState(0.02);
  const [sigma,setSigma]=useState(0.2);
  const [T,setT]=useState(1);

  const out = useMemo(()=>{
    if (S<=0 || K<=0 || sigma<=0 || T<=0) return null;
    const sqrtT = Math.sqrt(T);
    const d1 = (Math.log(S/K)+(r+0.5*sigma*sigma)*T)/(sigma*sqrtT);
    const d2 = d1 - sigma*sqrtT;
    const Nd1 = cdf(d1), Nd2 = cdf(d2);
    const Nmd1 = cdf(-d1), Nmd2 = cdf(-d2);
    const discK = K*Math.exp(-r*T);

    const call = S*Nd1 - discK*Nd2;
    const put  = discK*Nmd2 - S*Nmd1;

    // Greeks (per unit of underlying, per 1.0 of sigma; Theta per day)
    const n_d1 = pdf(d1);
    const callDelta = Nd1, putDelta = Nd1 - 1;
    const gamma = n_d1/(S*sigma*sqrtT);
    const vega  = S*n_d1*sqrtT;            // per unit of vol (e.g., 0.01 = 1% ⇒ vega*0.01)
    const callTheta = (-S*n_d1*sigma/(2*sqrtT) - r*discK*Nd2)/365.0;
    const putTheta  = (-S*n_d1*sigma/(2*sqrtT) + r*discK*Nmd2)/365.0;
    const callRho =  discK*T*Nd2;
    const putRho  = -discK*T*Nmd2;

    return { d1, d2, call, put, callDelta, putDelta, gamma, vega, callTheta, putTheta, callRho, putRho };
  }, [S,K,r,sigma,T]);

  return (
    <main style={{maxWidth:960,margin:"2rem auto",padding:"1rem"}}>
      <h1>Black–Scholes: Prezzo & Greche</h1>
      <p style={{opacity:0.8}}>Prezzi europei con tasso annuo continuo <code>r</code>, volatilità <code>σ</code> e scadenza <code>T</code> (anni).</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:12}}>
        <label>S<input type="number" value={S} onChange={e=>setS(+e.target.value)} /></label>
        <label>K<input type="number" value={K} onChange={e=>setK(+e.target.value)} /></label>
        <label>r<input type="number" step="0.001" value={r} onChange={e=>setR(+e.target.value)} /></label>
        <label>σ<input type="number" step="0.01" value={sigma} onChange={e=>setSigma(+e.target.value)} /></label>
        <label>T<input type="number" step="0.1" value={T} onChange={e=>setT(+e.target.value)} /></label>
      </div>

      {out && (
        <section style={{marginTop:16, display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(240px,1fr))", gap:16}}>
          <div style={{border:"1px solid #eee",borderRadius:10,padding:12}}>
            <h3>Prezzi</h3>
            <div><b>Call:</b> {out.call.toFixed(4)}</div>
            <div><b>Put:</b> {out.put.toFixed(4)}</div>
          </div>
          <div style={{border:"1px solid #eee",borderRadius:10,padding:12}}>
            <h3>Greche (Call)</h3>
            <div>Δ: {out.callDelta.toFixed(4)}</div>
            <div>Γ: {out.gamma.toFixed(6)}</div>
            <div>Vega: {out.vega.toFixed(4)}</div>
            <div>Θ (al dì): {out.callTheta.toFixed(4)}</div>
            <div>ρ: {out.callRho.toFixed(4)}</div>
          </div>
          <div style={{border:"1px solid #eee",borderRadius:10,padding:12}}>
            <h3>Greche (Put)</h3>
            <div>Δ: {out.putDelta.toFixed(4)}</div>
            <div>Γ: {out.gamma.toFixed(6)}</div>
            <div>Vega: {out.vega.toFixed(4)}</div>
            <div>Θ (al dì): {out.putTheta.toFixed(4)}</div>
            <div>ρ: {out.putRho.toFixed(4)}</div>
          </div>
        </section>
      )}
    </main>
  );
}
