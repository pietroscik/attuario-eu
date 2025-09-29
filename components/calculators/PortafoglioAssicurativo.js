import { useMemo, useState } from "react";

const clamp = (value, min = 0, max = 1) => {
  if (Number.isNaN(value) || !Number.isFinite(value)) return min;
  return Math.min(Math.max(value, min), max);
};

const positive = (value, fallback = 0) => {
  if (Number.isNaN(value) || !Number.isFinite(value)) return fallback;
  return Math.max(value, 0);
};

export default function PortafoglioAssicurativo() {
  const [capitale, setCapitale] = useState(5000000);
  const [quotaAzionaria, setQuotaAzionaria] = useState(0.4);
  const [rendimentoBond, setRendimentoBond] = useState(0.015);
  const [rendimentoAzioni, setRendimentoAzioni] = useState(0.055);
  const [volBond, setVolBond] = useState(0.03);
  const [volAzioni, setVolAzioni] = useState(0.18);
  const [correlazione, setCorrelazione] = useState(0.2);

  const risultati = useMemo(() => {
    const wEquity = clamp(quotaAzionaria, 0, 1);
    const wBond = 1 - wEquity;
    const bondReturn = positive(rendimentoBond);
    const equityReturn = positive(rendimentoAzioni);
    const sigmaBond = positive(volBond);
    const sigmaEquity = positive(volAzioni);
    const rho = Math.min(Math.max(correlazione, -1), 1);

    const rendimentoAtteso = wBond * bondReturn + wEquity * equityReturn;
    const varianza =
      wBond ** 2 * sigmaBond ** 2 +
      wEquity ** 2 * sigmaEquity ** 2 +
      2 * wBond * wEquity * rho * sigmaBond * sigmaEquity;
    const volatilita = Math.sqrt(Math.max(varianza, 0));
    const capitaleFinaleAtteso = positive(capitale, 0) * (1 + rendimentoAtteso);
    const perditaVaR99 = positive(capitale, 0) * Math.max(0, 2.33 * volatilita - rendimentoAtteso);

    const puntiFrontiera = Array.from({ length: 21 }, (_, index) => {
      const pesoEquity = index / 20;
      const pesoBond = 1 - pesoEquity;
      const ret = pesoBond * bondReturn + pesoEquity * equityReturn;
      const varPort =
        pesoBond ** 2 * sigmaBond ** 2 +
        pesoEquity ** 2 * sigmaEquity ** 2 +
        2 * pesoBond * pesoEquity * rho * sigmaBond * sigmaEquity;
      const vol = Math.sqrt(Math.max(varPort, 0));
      return { vol, ret, pesoEquity };
    });

    return {
      rendimentoAtteso,
      volatilita,
      capitaleFinaleAtteso,
      perditaVaR99,
      puntiFrontiera,
      wEquity,
    };
  }, [
    capitale,
    quotaAzionaria,
    rendimentoBond,
    rendimentoAzioni,
    volBond,
    volAzioni,
    correlazione,
  ]);

  const minVol = risultati.puntiFrontiera.reduce((acc, punto) => Math.min(acc, punto.vol), Infinity);
  const maxVol = risultati.puntiFrontiera.reduce((acc, punto) => Math.max(acc, punto.vol), 0);
  const minRet = risultati.puntiFrontiera.reduce((acc, punto) => Math.min(acc, punto.ret), Infinity);
  const maxRet = risultati.puntiFrontiera.reduce((acc, punto) => Math.max(acc, punto.ret), 0);

  const formatPercent = (value) => `${(value * 100).toFixed(2)}%`;

  return (
    <div className="calculator">
      <h3>Portafoglio assicurativo</h3>
      <p className="calculator-note">
        Valuta rendimento, rischio e VaR di un portafoglio misto obbligazionario/azionario secondo le ipotesi del Modulo
        Investimenti del Pilastro I. Utilizzabile come base per il risk appetite framework richiesto da Solvency II e dalle
        linee guida IVASS sulla gestione degli attivi.
      </p>
      <label>
        Capitale investito (€)
        <input
          type="number"
          min="0"
          step="50000"
          value={capitale}
          onChange={(event) => setCapitale(Number(event.target.value))}
        />
      </label>
      <label>
        Quota azionaria (0-1)
        <input
          type="number"
          min="0"
          max="1"
          step="0.01"
          value={quotaAzionaria}
          onChange={(event) => setQuotaAzionaria(Number(event.target.value))}
        />
      </label>
      <label>
        Rendimento atteso obbligazioni (0-1)
        <input
          type="number"
          step="0.0005"
          value={rendimentoBond}
          onChange={(event) => setRendimentoBond(Number(event.target.value))}
        />
      </label>
      <label>
        Rendimento atteso azioni (0-1)
        <input
          type="number"
          step="0.0005"
          value={rendimentoAzioni}
          onChange={(event) => setRendimentoAzioni(Number(event.target.value))}
        />
      </label>
      <label>
        Volatilità obbligazioni (0-1)
        <input
          type="number"
          step="0.0005"
          value={volBond}
          onChange={(event) => setVolBond(Number(event.target.value))}
        />
      </label>
      <label>
        Volatilità azioni (0-1)
        <input
          type="number"
          step="0.0005"
          value={volAzioni}
          onChange={(event) => setVolAzioni(Number(event.target.value))}
        />
      </label>
      <label>
        Correlazione tra asset (-1 a 1)
        <input
          type="number"
          step="0.01"
          value={correlazione}
          onChange={(event) => setCorrelazione(Number(event.target.value))}
        />
      </label>

      <div className="calculator-result" style={{ display: "grid", gap: "0.5rem" }}>
        <div>Rendimento atteso portafoglio: {formatPercent(risultati.rendimentoAtteso)}</div>
        <div>Volatilità annualizzata: {formatPercent(risultati.volatilita)}</div>
        <div>Capitale atteso a 1 anno: € {risultati.capitaleFinaleAtteso.toFixed(2)}</div>
        <div>VaR 99% (approssimato): € {risultati.perditaVaR99.toFixed(2)}</div>
        <div>Quota azionaria applicata: {(risultati.wEquity * 100).toFixed(1)}%</div>
      </div>

      {Number.isFinite(minVol) && Number.isFinite(maxVol) && maxVol > minVol ? (
        <figure className="calculator-note" style={{ marginTop: "1.5rem" }}>
          <svg role="img" aria-label="Frontiera rischio-rendimento" viewBox="0 0 320 160" style={{ width: "100%", height: "160px" }}>
            <rect x="0" y="0" width="320" height="160" fill="white" stroke="#d1d5db" />
            {risultati.puntiFrontiera.map((punto, index) => {
              if (index === risultati.puntiFrontiera.length - 1) return null;
              const prossimo = risultati.puntiFrontiera[index + 1];
              const x1 = 30 + (260 * (punto.vol - minVol)) / (maxVol - minVol);
              const x2 = 30 + (260 * (prossimo.vol - minVol)) / (maxVol - minVol);
              const y1 = 130 - ((punto.ret - minRet) / (maxRet - minRet)) * 100;
              const y2 = 130 - ((prossimo.ret - minRet) / (maxRet - minRet)) * 100;
              return <line key={`segmento-${index}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7c3aed" strokeWidth="2" />;
            })}
            {risultati.puntiFrontiera.map((punto, index) => {
              const x = 30 + (260 * (punto.vol - minVol)) / (maxVol - minVol);
              const y = 130 - ((punto.ret - minRet) / (maxRet - minRet)) * 100;
              return <circle key={`punto-${index}`} cx={x} cy={y} r={3} fill="#5b21b6" />;
            })}
            <text x="10" y="150" fontSize="10">Volatilità</text>
            <text x="240" y="30" fontSize="10">Rendimento</text>
          </svg>
          <figcaption>
            Frontiera rischio-rendimento al variare della quota azionaria. Utilizza la curva per documentare nel report ORSA la
            coerenza fra asset allocation e metriche di solvibilità, come previsto dalle linee guida EIOPA.
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}
