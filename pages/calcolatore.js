import Layout from "../components/Layout";
import { useState } from "react";

export default function CalcolatorePremio() {
  const [step, setStep] = useState(1);
  const [somma, setSomma] = useState("");
  const [qx, setQx] = useState("");

  const premio = somma && qx ? (somma * (qx / 100)) : null;

  return (
    <Layout
      title="Calcolatore Premio"
      eyebrow="Strumenti"
      intro="Calcola rapidamente il premio puro assicurativo basato sulla probabilità di morte."
    >
      <section className="section">
        <h2>Calcolatore Premio Assicurativo (premio puro)</h2>
        <p>Formula: <code>P = qₓ × S</code></p>

        {step === 1 && (
          <div className="card">
            <h3>1️⃣ Inserisci la somma assicurata</h3>
            <input type="number" value={somma} onChange={e => setSomma(e.target.value)} placeholder="Es. 100000" />
            <br /><br />
            <button className="button" onClick={() => setStep(2)} disabled={!somma}>Avanti ➡️</button>
          </div>
        )}

        {step === 2 && (
          <div className="card">
            <h3>2️⃣ Inserisci la probabilità di morte qₓ (%)</h3>
            <input type="number" value={qx} onChange={e => setQx(e.target.value)} placeholder="Es. 0.5" />
            <br /><br />
            <button className="button secondary" onClick={() => setStep(1)} style={{ marginRight: '1rem' }}>⬅️ Indietro</button>
            <button className="button" onClick={() => setStep(3)} disabled={!qx}>Avanti ➡️</button>
          </div>
        )}

        {step === 3 && (
          <div className="card">
            <h3>📊 Riepilogo</h3>
            <p>Somma assicurata: <b>{Number(somma).toLocaleString()} €</b></p>
            <p>Probabilità qₓ: <b>{qx}%</b></p>
            <hr />
            <h3>👉 Premio puro stimato: <b>{premio?.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' })}</b></h3>
            <button className="button" onClick={() => setStep(1)}>🔄 Rifai il calcolo</button>
          </div>
        )}
      </section>
    </Layout>
  );
}