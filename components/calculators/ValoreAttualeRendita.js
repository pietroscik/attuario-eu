"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const normalize = value => (typeof value === "string" ? value : `${value ?? ""}`).replace(",", ".");
const toNumber = value => {
  const parsed = parseFloat(normalize(value));
  return Number.isFinite(parsed) ? parsed : NaN;
};

export default function ValoreAttualeRendita() {
  const [r, setR] = useState("0.01");
  const [n, setN] = useState("120");
  const [quota, setQuota] = useState("500");

  const fattore = useMemo(() => {
    const rateNum = toNumber(r);
    const nRate = toNumber(n);

    if (!Number.isFinite(nRate) || nRate <= 0) return 0;
    if (!Number.isFinite(rateNum)) return 0;
    if (rateNum === 0) return nRate;

    const base = 1 + rateNum;
    return (1 - Math.pow(base, -nRate)) / rateNum;
  }, [r, n]);

  const valore = useMemo(() => {
    const quotaNum = toNumber(quota);
    if (!Number.isFinite(quotaNum) || quotaNum < 0) return 0;
    return Math.max(0, quotaNum * fattore);
  }, [quota, fattore]);

  const montante = useMemo(() => {
    const quotaNum = toNumber(quota);
    const rateNum = toNumber(r);
    const nRate = toNumber(n);

    if (!Number.isFinite(quotaNum) || quotaNum < 0) return 0;
    if (!Number.isFinite(nRate) || nRate <= 0) return 0;
    if (!Number.isFinite(rateNum)) return 0;
    if (rateNum === 0) return Math.max(0, quotaNum * nRate);

    const base = 1 + rateNum;
    const sFactor = (Math.pow(base, nRate) - 1) / rateNum;
    return Math.max(0, quotaNum * sFactor);
  }, [quota, r, n]);

  return (
    <section id="valore-attuale-rendita" className="card calculator-card">
      <div className="stack-sm">
        <h3>Valore attuale di una rendita certa</h3>
        <p style={{ margin: 0, fontSize: 13, opacity: 0.75 }}>
          PV = quota × a<sub>n|</sub>(i). Imposta tasso periodale e numero rate per stimare il valore di riserve o buy-out.
        </p>
      </div>
      <label>
        Quota periodale (€)
        <input type="number" min="0" step="1" inputMode="decimal" value={quota} onChange={e => setQuota(e.target.value)} />
      </label>
      <label>
        Numero di rate
        <input type="number" min="0" step="1" inputMode="numeric" value={n} onChange={e => setN(e.target.value)} />
      </label>
      <label>
        Tasso per periodo (decimale)
        <input type="number" step="0.0001" inputMode="decimal" value={r} onChange={e => setR(e.target.value)} />
      </label>
      <dl className="calculator-metrics" aria-live="polite">
        <div>
          <dt>Fattore a<sub>{n}|</sub>(i)</dt>
          <dd><b>{fattore.toFixed(4)}</b></dd>
        </div>
        <div>
          <dt>Valore attuale</dt>
          <dd><b>€ {valore.toFixed(2)}</b></dd>
        </div>
        <div>
          <dt>Montante capitalizzato</dt>
          <dd><b>€ {montante.toFixed(2)}</b></dd>
        </div>
      </dl>
      <p className="calculator-note">
        Usa tassi coerenti con la frequenza (mensile vs annuale). Per rendite vitalizie considera probabilità di sopravvivenza.
      </p>
      <div className="calculator-links">
        <Link href="/calcolatori#modelli">← Torna alla panoramica</Link>
        <Link href="/wiki#teoria-rendite">Teoria attuariale</Link>
      </div>
    </section>
  );
}
