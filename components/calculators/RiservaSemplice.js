"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const normalizza = valore => (typeof valore === "string" ? valore : `${valore ?? ""}`).replace(",", ".");
const toNumber = valore => {
  const numero = parseFloat(normalizza(valore));
  return Number.isFinite(numero) ? numero : NaN;
};

export default function RiservaSemplice() {
  const [aperti, setAperti] = useState("120");
  const [costoResiduo, setCostoResiduo] = useState("1500");
  const [ibnr, setIbnr] = useState("30000");
  const [salvage, setSalvage] = useState("5000");

  const valori = useMemo(() => {
    const apertiNum = toNumber(aperti);
    const costoNum = toNumber(costoResiduo);
    const ibnrNum = toNumber(ibnr);
    const salvageNum = toNumber(salvage);

    if (!Number.isFinite(apertiNum) || apertiNum < 0 || !Number.isFinite(costoNum) || costoNum < 0) {
      return { rbnsLordo: 0, rbnsNetto: 0, totale: 0 };
    }

    const lordo = Math.max(0, apertiNum * costoNum);
    const netto = Math.max(0, lordo - (Number.isFinite(salvageNum) ? Math.max(0, salvageNum) : 0));
    const totale = Math.max(0, netto + (Number.isFinite(ibnrNum) ? Math.max(0, ibnrNum) : 0));

    return { rbnsLordo: lordo, rbnsNetto: netto, totale };
  }, [aperti, costoResiduo, ibnr, salvage]);

  return (
    <section id="riserva-semplice" className="card calculator-card">
      <div className="stack-sm">
        <h3>Riserva tecnica semplificata</h3>
        <p style={{ margin: 0, fontSize: 13, opacity: 0.75 }}>
          RBNS = sinistri aperti × costo medio residuo − recuperi; Totale = RBNS + IBNR. Usa come sanity check di triangoli.
        </p>
      </div>
      <label>
        Sinistri aperti (numerosità)
        <input type="number" min="0" step="1" inputMode="numeric" value={aperti} onChange={e => setAperti(e.target.value)} />
      </label>
      <label>
        Costo medio residuo (€)
        <input type="number" min="0" step="1" inputMode="decimal" value={costoResiduo} onChange={e => setCostoResiduo(e.target.value)} />
      </label>
      <label>
        Recuperi/Salvage attesi (€)
        <input type="number" min="0" step="1" inputMode="decimal" value={salvage} onChange={e => setSalvage(e.target.value)} />
      </label>
      <label>
        IBNR stimato (€)
        <input type="number" step="1" inputMode="decimal" value={ibnr} onChange={e => setIbnr(e.target.value)} />
      </label>
      <div className="calculator-metrics">
        RBNS lordo ≈ <b>€ {valori.rbnsLordo.toFixed(2)}</b>
        RBNS netto ≈ <b>€ {valori.rbnsNetto.toFixed(2)}</b>
        Totale riserva ≈ <b>€ {valori.totale.toFixed(2)}</b>
      </div>
      <p className="calculator-note">Per IBNR adottare Chain-Ladder/BF/IBNeR quando sono disponibili triangoli maturi.</p>
      <div className="calculator-links">
        <Link href="/calcolatori#modelli">← Torna alla panoramica</Link>
        <Link href="/wiki#teoria-riserva-semplice">Teoria attuariale</Link>
      </div>
    </section>
  );
}
