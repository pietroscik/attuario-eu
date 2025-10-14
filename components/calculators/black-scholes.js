// pages/calcolatori/black-scholes.js
import { useState, useMemo } from "react";

const normalCdf = (value) => {
  const sign = value < 0 ? -1 : 1;
  const x = Math.abs(value) / Math.sqrt(2);
  const t = 1 / (1 + 0.3275911 * x);
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const erf =
    1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x));
  return 0.5 * (1 + sign * erf);
};

const normalPdf = (value) => Math.exp(-0.5 * value * value) / Math.sqrt(2 * Math.PI);

export default function BlackScholes() {
  const [spot, setSpot] = useState(100);
  const [strike, setStrike] = useState(100);
  const [rate, setRate] = useState(0.02);
  const [volatility, setVolatility] = useState(0.2);
  const [maturity, setMaturity] = useState(1);

  const output = useMemo(() => {
    if (spot <= 0 || strike <= 0 || volatility <= 0 || maturity <= 0) {
      return null;
    }

    const sqrtT = Math.sqrt(maturity);
    const d1 =
      (Math.log(spot / strike) + (rate + 0.5 * volatility * volatility) * maturity) /
      (volatility * sqrtT);
    const d2 = d1 - volatility * sqrtT;
    const Nd1 = normalCdf(d1);
    const Nd2 = normalCdf(d2);
    const Nmd1 = normalCdf(-d1);
    const Nmd2 = normalCdf(-d2);
    const discountedStrike = strike * Math.exp(-rate * maturity);

    const call = spot * Nd1 - discountedStrike * Nd2;
    const put = discountedStrike * Nmd2 - spot * Nmd1;

    const pdfD1 = normalPdf(d1);
    const gamma = pdfD1 / (spot * volatility * sqrtT);
    const vega = spot * pdfD1 * sqrtT;
    const callDelta = Nd1;
    const putDelta = Nd1 - 1;
    const callTheta = (-spot * pdfD1 * volatility) / (2 * sqrtT) - rate * discountedStrike * Nd2;
    const putTheta = (-spot * pdfD1 * volatility) / (2 * sqrtT) + rate * discountedStrike * Nmd2;
    const callRho = discountedStrike * maturity * Nd2;
    const putRho = -discountedStrike * maturity * Nmd2;

    return {
      call,
      put,
      callDelta,
      putDelta,
      gamma,
      vega,
      callTheta: callTheta / 365,
      putTheta: putTheta / 365,
      callRho,
      putRho,
    };
  }, [spot, strike, rate, volatility, maturity]);

  return (
    <div className="calculator">
      <h3>Black–Scholes: prezzo e greche</h3>
      <p className="calculator-note">
        Calcola prezzo teorico e sensibilità di opzioni europee assumendo volatilità costante e mercato privo di
        arbitraggio. Le greche sono espresse per unità di sottostante, con Theta riportato su base giornaliera.
      </p>
      <div className="calculator-grid">
        <label>
          Spot S
          <input
            type="number"
            value={spot}
            min="0"
            step="0.5"
            onChange={(event) => setSpot(Number(event.target.value))}
          />
        </label>
        <label>
          Strike K
          <input
            type="number"
            value={strike}
            min="0"
            step="0.5"
            onChange={(event) => setStrike(Number(event.target.value))}
          />
        </label>
        <label>
          Tasso risk-free r
          <input
            type="number"
            step="0.0005"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </label>
        <label>
          Volatilità σ
          <input
            type="number"
            step="0.005"
            value={volatility}
            min="0"
            onChange={(event) => setVolatility(Number(event.target.value))}
          />
        </label>
        <label>
          Scadenza T (anni)
          <input
            type="number"
            step="0.1"
            value={maturity}
            min="0"
            onChange={(event) => setMaturity(Number(event.target.value))}
          />
        </label>
      </div>

      {output && (
        <div className="calculator-result" style={{ display: "grid", gap: "1rem" }}>
          <div className="metric-card">
            <h4>Prezzi</h4>
            <p>Call: {output.call.toFixed(4)}</p>
            <p>Put: {output.put.toFixed(4)}</p>
          </div>
          <div className="metric-card">
            <h4>Greche Call</h4>
            <p>Δ: {output.callDelta.toFixed(4)}</p>
            <p>Γ: {output.gamma.toFixed(6)}</p>
            <p>Vega: {output.vega.toFixed(4)}</p>
            <p>Θ (giornaliero): {output.callTheta.toFixed(4)}</p>
            <p>ρ: {output.callRho.toFixed(4)}</p>
          </div>
          <div className="metric-card">
            <h4>Greche Put</h4>
            <p>Δ: {output.putDelta.toFixed(4)}</p>
            <p>Γ: {output.gamma.toFixed(6)}</p>
            <p>Vega: {output.vega.toFixed(4)}</p>
            <p>Θ (giornaliero): {output.putTheta.toFixed(4)}</p>
            <p>ρ: {output.putRho.toFixed(4)}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .calculator-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        }

        .metric-card {
          background: rgba(15, 23, 42, 0.04);
          border-radius: 12px;
          padding: 0.9rem 1rem;
        }

        .metric-card h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
