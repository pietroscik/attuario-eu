import { useMemo, useState } from "react";

const clampProbability = (value) => {
  if (Number.isNaN(value)) return 0;
  return Math.min(Math.max(value, 0), 1);
};

const positiveNumber = (value) => {
  if (Number.isNaN(value)) return 0;
  return Math.max(value, 0);
};

export default function PremioPuro() {
  const [freq, setFreq] = useState(0.05);
  const [sev, setSev] = useState(2000);
  const [exposure, setExposure] = useState(1000);
  const [loading, setLoading] = useState(0.2);

  const output = useMemo(() => {
    const safeFreq = clampProbability(freq);
    const safeSev = positiveNumber(sev);
    const safeExposure = positiveNumber(exposure);
    const safeLoading = Number.isNaN(loading) ? 0 : loading;

    const premioNetto = safeFreq * safeSev;
    const premioLordo = premioNetto * Math.max(0, 1 + safeLoading);
    const sinistriAnnui = safeFreq * safeExposure;
    const costoTotaleAtteso = premioNetto * safeExposure;
    const premiLordiTotali = premioLordo * safeExposure;
    const lossRatio = premiLordiTotali > 0 ? costoTotaleAtteso / premiLordiTotali : 0;

    return {
      premioNetto,
      premioLordo,
      sinistriAnnui,
      costoTotaleAtteso,
      premiLordiTotali,
      lossRatio,
      sinistriPerCento: safeFreq * 100,
      premioPerCento: premioNetto * 100,
    };
  }, [freq, sev, exposure, loading]);

  return (
    <div className="calculator">
      <h3>Calcolatore premio puro</h3>
      <p className="calculator-note">
        Il premio puro è il valore atteso del costo del rischio su una singola esposizione. Ipotizza frequenza e severità
        indipendenti, come suggerito dai manuali IVASS e dal testo classico di Bowers et al. sulla tariffazione danni.
      </p>
      <label>
        Frequenza (0–1)
        <input
          type="number"
          step="0.0005"
          value={freq}
          min="0"
          max="1"
          onChange={(event) => setFreq(Number(event.target.value))}
        />
      </label>
      <label>
        Severità media (€)
        <input
          type="number"
          step="10"
          value={sev}
          min="0"
          onChange={(event) => setSev(Number(event.target.value))}
        />
      </label>
      <label>
        Unità di rischio esposte
        <input
          type="number"
          step="1"
          min="0"
          value={exposure}
          onChange={(event) => setExposure(Number(event.target.value))}
        />
      </label>
      <label>
        Caricamento tecnico (% su premio puro)
        <input
          type="number"
          step="0.01"
          value={loading}
          onChange={(event) => setLoading(Number(event.target.value))}
        />
      </label>
      <div className="calculator-result" style={{ display: "grid", gap: "0.6rem" }}>
        <div>
          Premio puro per polizza ≈ <strong>€ {output.premioNetto.toFixed(2)}</strong>
        </div>
        <div>
          Premio tecnico lordo ≈ <strong>€ {output.premioLordo.toFixed(2)}</strong>
        </div>
        <div>Sinistri attesi ogni 100 polizze: {output.sinistriPerCento.toFixed(2)}</div>
        <div>Premio puro annuo per 100 polizze: € {output.premioPerCento.toFixed(2)}</div>
        <div>Sinistri attesi sull’intero portafoglio: {output.sinistriAnnui.toFixed(2)}</div>
        <div>Costo complessivo atteso: € {output.costoTotaleAtteso.toFixed(2)}</div>
        <div>Premi lordi raccolti: € {output.premiLordiTotali.toFixed(2)}</div>
        <div>Loss ratio tecnico atteso: {(output.lossRatio * 100).toFixed(1)}%</div>
      </div>
      <p className="calculator-note">
        Inserisci nel caricamento caricamenti per spese, margini di sicurezza e imposte secondo i requisiti del Codice delle
        Assicurazioni e dei principi attuariali ANIA. Un loss ratio atteso inferiore al 100% indica che il caricamento copre
        integralmente le spese ipotizzate.
      </p>
    </div>
  );
}
