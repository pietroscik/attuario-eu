"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const normalize = value => (typeof value === "string" ? value : `${value ?? ""}`).replace(",", ".");
const toNumber = value => {
  const parsed = parseFloat(normalize(value));
  return Number.isFinite(parsed) ? parsed : NaN;
};

export default function LossRatio() {
  const [premi, setPremi] = useState("1250000");
  const [sinistri, setSinistri] = useState("780000");
  const [spese, setSpese] = useState("210000");

  const { lossRatio, combinedRatio, risultatoTecnico } = useMemo(() => {
    const premiNum = toNumber(premi);
    const sinistriNum = toNumber(sinistri);
    const speseNum = toNumber(spese);

    if (!Number.isFinite(premiNum) || premiNum <= 0) {
      return { lossRatio: 0, combinedRatio: 0, risultatoTecnico: 0 };
    }

    const lr = Number.isFinite(sinistriNum) && sinistriNum >= 0 ? (sinistriNum / premiNum) * 100 : 0;
    const cr =
      Number.isFinite(sinistriNum) && sinistriNum >= 0 && Number.isFinite(speseNum) && speseNum >= 0
        ? ((sinistriNum + speseNum) / premiNum) * 100
        : 0;
    const risultato =
      Number.isFinite(sinistriNum) && Number.isFinite(speseNum)
        ? premiNum - Math.max(0, sinistriNum) - Math.max(0, speseNum)
        : 0;

    return {
      lossRatio: Math.max(lr, 0),
      combinedRatio: Math.max(cr, 0),
      risultatoTecnico: risultato,
    };
  }, [premi, sinistri, spese]);

  const margine = useMemo(() => 100 - combinedRatio, [combinedRatio]);

  return (
    <section id="loss-ratio" className="card calculator-card">
      <div className="stack-sm">
        <h3>Loss ratio & combined ratio</h3>
        <p style={{ margin: 0, fontSize: 13, opacity: 0.75 }}>
          Misura la redditività tecnica: LR = sinistri / premi; Combined = (sinistri + spese) / premi.
        </p>
      </div>
      <label>
        Premi di competenza (€)
        <input type="number" min="0" step="1000" inputMode="decimal" value={premi} onChange={e => setPremi(e.target.value)} />
      </label>
      <label>
        Sinistri di competenza (€)
        <input type="number" min="0" step="1000" inputMode="decimal" value={sinistri} onChange={e => setSinistri(e.target.value)} />
      </label>
      <label>
        Spese tecniche (€)
        <input type="number" min="0" step="1000" inputMode="decimal" value={spese} onChange={e => setSpese(e.target.value)} />
      </label>
      <dl className="calculator-metrics" aria-live="polite">
        <div>
          <dt>Loss ratio</dt>
          <dd><b>{lossRatio.toFixed(1)}%</b></dd>
        </div>
        <div>
          <dt>Combined ratio</dt>
          <dd><b>{combinedRatio.toFixed(1)}%</b></dd>
        </div>
        <div>
          <dt>Margine tecnico</dt>
          <dd><b>{margine.toFixed(1)}%</b></dd>
        </div>
        <div>
          <dt>Risultato tecnico</dt>
          <dd><b>€ {risultatoTecnico.toFixed(2)}</b></dd>
        </div>
      </dl>
      <p className="calculator-note">
        Target &lt; 95% per linee retail, &lt; 90% per corporate. Confronta trend rolling 12 mesi.
      </p>
      <div className="calculator-links">
        <Link href="/calcolatori#modelli">← Torna alla panoramica</Link>
        <Link href="/wiki#teoria-loss-ratio">Teoria attuariale</Link>
      </div>
    </section>
  );
}
