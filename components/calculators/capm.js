// pages/calcolatori/capm.js
import { useMemo, useState } from "react";

const clampNumber = (value, fallback = 0) => {
  if (Number.isNaN(value) || !Number.isFinite(value)) {
    return fallback;
  }
  return value;
};

export default function CAPM() {
  const [riskFree, setRiskFree] = useState(0.02);
  const [marketReturn, setMarketReturn] = useState(0.08);
  const [beta, setBeta] = useState(1);
  const [portfolioVolatility, setPortfolioVolatility] = useState(0.12);
  const [portfolioReturn, setPortfolioReturn] = useState(0.1);

  const results = useMemo(() => {
    const rf = clampNumber(riskFree, 0);
    const rm = clampNumber(marketReturn, 0.08);
    const betaValue = clampNumber(beta, 1);
    const sigma = Math.max(0.0001, clampNumber(portfolioVolatility, 0.12));
    const rp = clampNumber(portfolioReturn, rm);

    const expectedReturn = rf + betaValue * (rm - rf);
    const sharpe = (rp - rf) / sigma;

    return { expectedReturn, sharpe, sigma };
  }, [riskFree, marketReturn, beta, portfolioVolatility, portfolioReturn]);

  return (
    <div className="calculator">
      <h3>CAPM & indice di Sharpe</h3>
      <p className="calculator-note">
        Stima il rendimento atteso di un titolo assicurativo tramite CAPM e calcola uno Sharpe ratio coerente con la volatilità
        ipotizzata del portafoglio. Gli input sono annualizzati.
      </p>
      <div className="calculator-grid">
        <label>
          Tasso risk-free r<sub>f</sub>
          <input
            type="number"
            step="0.0005"
            value={riskFree}
            onChange={(event) => setRiskFree(Number(event.target.value))}
          />
        </label>
        <label>
          Rendimento di mercato r<sub>m</sub>
          <input
            type="number"
            step="0.0005"
            value={marketReturn}
            onChange={(event) => setMarketReturn(Number(event.target.value))}
          />
        </label>
        <label>
          Beta del titolo
          <input
            type="number"
            step="0.01"
            value={beta}
            onChange={(event) => setBeta(Number(event.target.value))}
          />
        </label>
        <label>
          Volatilità portafoglio σ<sub>p</sub>
          <input
            type="number"
            step="0.005"
            value={portfolioVolatility}
            min="0"
            onChange={(event) => setPortfolioVolatility(Number(event.target.value))}
          />
        </label>
        <label>
          Rendimento portafoglio r<sub>p</sub>
          <input
            type="number"
            step="0.0005"
            value={portfolioReturn}
            onChange={(event) => setPortfolioReturn(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="calculator-result" style={{ marginTop: "1rem" }}>
        <p>
          Rendimento atteso CAPM ≈ <strong>{(results.expectedReturn * 100).toFixed(2)}%</strong>
        </p>
        <p>
          Sharpe ratio (annuo) ≈ <strong>{results.sharpe.toFixed(3)}</strong>
        </p>
        <p className="calculator-note">
          Lo Sharpe utilizza la volatilità impostata come denominatore. Per ORSA e IFRS 17 documenta come è stata stimata la
          deviazione standard del portafoglio.
        </p>
      </div>

      <style jsx>{`
        .calculator-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }
      `}</style>
    </div>
  );
}
