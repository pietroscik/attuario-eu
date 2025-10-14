import { useMemo, useState } from "react";

export default function Annuity() {
  const [payment, setPayment] = useState(1000);
  const [rate, setRate] = useState(0.03);
  const [periods, setPeriods] = useState(10);
  const [isDue, setIsDue] = useState(false);

  const results = useMemo(() => {
    if (rate <= -1 || periods <= 0) {
      return null;
    }

    const v = 1 / (1 + rate);
    const aImmediate = (1 - Math.pow(v, periods)) / rate;
    const aDue = aImmediate * (1 + rate);
    const sImmediate = (Math.pow(1 + rate, periods) - 1) / rate;
    const sDue = sImmediate * (1 + rate);

    const presentValue = payment * (isDue ? aDue : aImmediate);
    const futureValue = payment * (isDue ? sDue : sImmediate);

    return {
      aImmediate,
      aDue,
      sImmediate,
      sDue,
      presentValue,
      futureValue,
    };
  }, [payment, rate, periods, isDue]);

  return (
    <div className="calculator">
      <h3>Rendite: valore attuale e futuro</h3>
      <p className="calculator-note">
        Calcola i coefficienti a<sub>n|i</sub> e s<sub>n|i</sub> di una rendita a rate costanti con pagamenti posticipati o
        anticipati. I risultati sono utili per quotare trasformazioni in rendita nei fondi pensione e nelle polizze vita.
      </p>
      <div className="calculator-grid">
        <label>
          Pagamento per periodo
          <input
            type="number"
            value={payment}
            min="0"
            step="10"
            onChange={(event) => setPayment(Number(event.target.value))}
          />
        </label>
        <label>
          Tasso per periodo i
          <input
            type="number"
            value={rate}
            step="0.0005"
            onChange={(event) => setRate(Number(event.target.value))}
          />
        </label>
        <label>
          Numero di periodi n
          <input
            type="number"
            value={periods}
            min="1"
            step="1"
            onChange={(event) => setPeriods(Number(event.target.value))}
          />
        </label>
        <label className="checkbox-field">
          <input
            type="checkbox"
            checked={isDue}
            onChange={(event) => setIsDue(event.target.checked)}
          />
          <span>Rendita anticipata (ä)</span>
        </label>
      </div>

      {results && (
        <div className="calculator-result" style={{ display: "grid", gap: "1rem" }}>
          <div className="metric-card">
            <h4>Coefficienti attuariali</h4>
            <p>
              a<sub>n|i</sub>: {results.aImmediate.toFixed(6)}
            </p>
            <p>
              ä<sub>n|i</sub>: {results.aDue.toFixed(6)}
            </p>
            <p>
              s<sub>n|i</sub>: {results.sImmediate.toFixed(6)}
            </p>
            <p>
              ś<sub>n|i</sub>: {results.sDue.toFixed(6)}
            </p>
          </div>
          <div className="metric-card">
            <h4>Valori economici</h4>
            <p>
              Valore attuale: <strong>€ {results.presentValue.toFixed(2)}</strong>
            </p>
            <p>
              Valore futuro: <strong>€ {results.futureValue.toFixed(2)}</strong>
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .calculator-grid {
          display: grid;
          gap: 0.75rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .checkbox-field {
          align-items: center;
          display: flex;
          gap: 0.5rem;
          padding-top: 0.5rem;
        }

        .metric-card {
          background: rgba(15, 23, 42, 0.04);
          border-radius: 12px;
          padding: 1rem;
        }

        .metric-card h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
