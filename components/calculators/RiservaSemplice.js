import { useState } from "react";

export default function RiservaSemplice() {
  const [aperti, setAperti] = useState(120);
  const [costoResiduo, setCostoResiduo] = useState(1500);
  const [ibnr, setIbnr] = useState(30000);

  const rbns = Math.max(0, aperti * costoResiduo);
  const totale = Math.max(0, rbns + ibnr);

  return (
    <div className="calculator">
      <h3>Riserva tecnica (stima semplice)</h3>
      <label>
        Sinistri aperti (RBNS)
        <input
          type="number"
          value={aperti}
          min="0"
          onChange={(event) => setAperti(Number(event.target.value))}
        />
      </label>
      <label>
        Costo medio residuo (€)
        <input
          type="number"
          value={costoResiduo}
          min="0"
          onChange={(event) => setCostoResiduo(Number(event.target.value))}
        />
      </label>
      <label>
        IBNR stimato (€)
        <input
          type="number"
          value={ibnr}
          min="0"
          onChange={(event) => setIbnr(Number(event.target.value))}
        />
      </label>
      <div className="calculator-result">
        RBNS ≈ € {rbns.toFixed(2)} — Totale ≈ € {totale.toFixed(2)}
      </div>
      <p className="calculator-note">Indicativo: per IBNR accurato servono triangoli/metodi dedicati.</p>
    </div>
  );
}
