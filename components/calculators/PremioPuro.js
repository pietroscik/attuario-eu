"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const normalizza = valore => (typeof valore === "string" ? valore : `${valore ?? ""}`).replace(",", ".");
const toNumber = valore => {
  const numero = parseFloat(normalizza(valore));
  return Number.isFinite(numero) ? numero : NaN;
};

export default function PremioPuro() {
  const [esposti, setEsposti] = useState("10000");
  const [sinistri, setSinistri] = useState("480");
  const [costoMedio, setCostoMedio] = useState("2100");

  const { frequenza, premio } = useMemo(() => {
    const espostiNum = toNumber(esposti);
    const sinistriNum = toNumber(sinistri);
    const costoNum = toNumber(costoMedio);

    if (!Number.isFinite(espostiNum) || espostiNum <= 0) {
      return { frequenza: 0, premio: 0 };
    }

    const freq = Number.isFinite(sinistriNum) && sinistriNum >= 0 ? sinistriNum / espostiNum : 0;
    const premioLordo = Number.isFinite(costoNum) && costoNum >= 0 ? freq * costoNum : 0;

    return { frequenza: Math.max(freq, 0), premio: Math.max(premioLordo, 0) };
  }, [esposti, sinistri, costoMedio]);

  const severita = useMemo(() => {
    const costoNum = toNumber(costoMedio);
    return Number.isFinite(costoNum) && costoNum >= 0 ? costoNum : 0;
  }, [costoMedio]);

  const sinistriAttesi = useMemo(() => {
    const espostiNum = toNumber(esposti);
    return Number.isFinite(espostiNum) && espostiNum >= 0 ? espostiNum * frequenza : 0;
  }, [esposti, frequenza]);

  return (
    <section id="premio-puro" className="card calculator-card">
      <div className="stack-sm">
        <h3>Premio puro (frequenza × severità)</h3>
        <p style={{ margin: 0, fontSize: 13, opacity: 0.75 }}>
          E[X] = (sinistri / esposti) × costo medio. Utile per tariffe quick & dirty o come input a GLM.
        </p>
      </div>
      <label>
        Esposti (polizze-anno)
        <input type="number" min="0" step="1" inputMode="numeric" value={esposti} onChange={e => setEsposti(e.target.value)} />
      </label>
      <label>
        Sinistri osservati
        <input type="number" min="0" step="1" inputMode="numeric" value={sinistri} onChange={e => setSinistri(e.target.value)} />
      </label>
      <label>
        Costo medio residuo (€)
        <input
          type="number"
          min="0"
          step="1"
          inputMode="decimal"
          value={costoMedio}
          onChange={e => setCostoMedio(e.target.value)}
        />
      </label>
      <dl className="calculator-metrics" aria-live="polite">
        <div>
          <dt>Frequenza</dt>
          <dd><b>{(frequenza * 100).toFixed(2)}%</b></dd>
        </div>
        <div>
          <dt>Severità attesa</dt>
          <dd><b>€ {severita.toFixed(2)}</b></dd>
        </div>
        <div>
          <dt>Sinistri attesi</dt>
          <dd><b>{sinistriAttesi.toFixed(1)}</b></dd>
        </div>
        <div>
          <dt>Premio puro</dt>
          <dd><b>€ {premio.toFixed(2)}</b></dd>
        </div>
      </dl>
      <p className="calculator-note">
        Considera eventuali caricamenti, inflazione e derisking prima dell'emissione tariffaria.
      </p>
      <div className="calculator-links">
        <Link href="/calcolatori#modelli">← Torna alla panoramica</Link>
        <Link href="/wiki#teoria-premio-puro">Teoria attuariale</Link>
      </div>
    </section>
  );
}
