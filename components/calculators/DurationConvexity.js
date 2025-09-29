import { useMemo, useState } from "react";

const clampPositive = (value, fallback = 0) => {
  if (Number.isNaN(value) || !Number.isFinite(value)) return fallback;
  return Math.max(value, 0);
};

const clampStrictlyPositive = (value, fallback = 1) => {
  if (Number.isNaN(value) || !Number.isFinite(value) || value <= 0) return fallback;
  return value;
};

const computeBondMetrics = ({
  nominal,
  couponRate,
  yieldRate,
  years,
  frequency,
}) => {
  const periods = Math.max(1, Math.round(years * frequency));
  const periodRate = yieldRate / frequency;
  const coupon = (nominal * couponRate) / frequency;

  let price = 0;
  let durationNumerator = 0;
  let convexityNumerator = 0;

  for (let period = 1; period <= periods; period += 1) {
    const time = period / frequency;
    const discounted = coupon / Math.pow(1 + periodRate, period);

    price += discounted;
    durationNumerator += time * discounted;
    convexityNumerator += time * (time + 1 / frequency) * discounted;
  }

  const redemptionPV = nominal / Math.pow(1 + periodRate, periods);
  const finalTime = periods / frequency;
  price += redemptionPV;
  durationNumerator += finalTime * redemptionPV;
  convexityNumerator += finalTime * (finalTime + 1 / frequency) * redemptionPV;

  if (price === 0) {
    return {
      price: 0,
      macaulayDuration: 0,
      modifiedDuration: 0,
      convexity: 0,
    };
  }

  const macaulayDuration = durationNumerator / price;
  const modifiedDuration = macaulayDuration / (1 + periodRate);
  const convexity = convexityNumerator / (price * Math.pow(1 + periodRate, 2));

  return {
    price,
    macaulayDuration,
    modifiedDuration,
    convexity,
  };
};

export default function DurationConvexity() {
  const [nominal, setNominal] = useState(1000);
  const [couponRate, setCouponRate] = useState(0.03);
  const [yieldRate, setYieldRate] = useState(0.025);
  const [years, setYears] = useState(7);
  const [frequency, setFrequency] = useState(2);

  const safeNominal = clampStrictlyPositive(nominal, 1000);
  const safeCouponRate = clampPositive(couponRate, 0);
  const safeYieldRate = yieldRate;
  const safeYears = clampStrictlyPositive(years, 1);
  const safeFrequency = clampStrictlyPositive(frequency, 1);

  const metrics = useMemo(
    () =>
      computeBondMetrics({
        nominal: safeNominal,
        couponRate: safeCouponRate,
        yieldRate: safeYieldRate,
        years: safeYears,
        frequency: safeFrequency,
      }),
    [safeNominal, safeCouponRate, safeYieldRate, safeYears, safeFrequency]
  );

  const priceCurve = useMemo(() => {
    const points = [];
    const baseYield = safeYieldRate;
    const minYield = baseYield - 0.02;
    const maxYield = baseYield + 0.02;
    const steps = 9;

    for (let index = 0; index < steps; index += 1) {
      const weight = steps === 1 ? 0 : index / (steps - 1);
      const y = minYield + weight * (maxYield - minYield);
      const { price } = computeBondMetrics({
        nominal: safeNominal,
        couponRate: safeCouponRate,
        yieldRate: y,
        years: safeYears,
        frequency: safeFrequency,
      });
      points.push({ yield: y, price });
    }

    return points;
  }, [safeNominal, safeCouponRate, safeYieldRate, safeYears, safeFrequency]);

  const minPrice = priceCurve.reduce((acc, point) => Math.min(acc, point.price), Infinity);
  const maxPrice = priceCurve.reduce((acc, point) => Math.max(acc, point.price), 0);

  const formatPercent = (value) => `${(value * 100).toFixed(2)}%`;

  return (
    <div className="calculator">
      <h3>Duration e convexity obbligazionaria</h3>
      <p className="calculator-note">
        Calcola prezzo, duration e convexity per un titolo obbligazionario a cedola costante. I parametri sono coerenti con
        gli schemi di calcolo indicati nel regolamento IVASS n. 38/2018 e nelle linee guida EIOPA sui rischi di tasso.
      </p>
      <label>
        Valore nominale (€)
        <input
          type="number"
          min="1"
          step="50"
          value={nominal}
          onChange={(event) => setNominal(Number(event.target.value))}
        />
      </label>
      <label>
        Tasso cedolare annuo (0-1)
        <input
          type="number"
          step="0.0005"
          value={couponRate}
          onChange={(event) => setCouponRate(Number(event.target.value))}
        />
      </label>
      <label>
        Yield to maturity (0-1)
        <input
          type="number"
          step="0.0005"
          value={yieldRate}
          onChange={(event) => setYieldRate(Number(event.target.value))}
        />
      </label>
      <label>
        Durata residua (anni)
        <input
          type="number"
          min="0.25"
          step="0.25"
          value={years}
          onChange={(event) => setYears(Number(event.target.value))}
        />
      </label>
      <label>
        Cedole per anno
        <input
          type="number"
          min="1"
          step="1"
          value={frequency}
          onChange={(event) => setFrequency(Number(event.target.value))}
        />
      </label>

      <div className="calculator-result" style={{ display: "grid", gap: "0.5rem" }}>
        <div>Prezzo teorico: € {metrics.price.toFixed(2)}</div>
        <div>Duration di Macaulay: {metrics.macaulayDuration.toFixed(3)} anni</div>
        <div>Duration modificata: {metrics.modifiedDuration.toFixed(3)}</div>
        <div>Convexity annua: {metrics.convexity.toFixed(3)}</div>
      </div>

      {Number.isFinite(minPrice) && Number.isFinite(maxPrice) && maxPrice > minPrice ? (
        <figure className="calculator-note" style={{ marginTop: "1.5rem" }}>
          <svg
            role="img"
            aria-label="Curva prezzo-yield"
            viewBox="0 0 320 160"
            style={{ width: "100%", height: "160px" }}
          >
            <rect x="0" y="0" width="320" height="160" fill="white" stroke="#d1d5db" />
            {priceCurve.map((point, index) => {
              if (index === priceCurve.length - 1) return null;
              const nextPoint = priceCurve[index + 1];
              const x1 = 20 + (280 * index) / (priceCurve.length - 1);
              const x2 = 20 + (280 * (index + 1)) / (priceCurve.length - 1);
              const y1 = 130 - ((point.price - minPrice) / (maxPrice - minPrice)) * 100;
              const y2 = 130 - ((nextPoint.price - minPrice) / (maxPrice - minPrice)) * 100;
              return (
                <line key={`${point.yield}-${nextPoint.yield}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563eb" strokeWidth="2" />
              );
            })}
            {priceCurve.map((point, index) => {
              const x = 20 + (280 * index) / (priceCurve.length - 1);
              const y = 130 - ((point.price - minPrice) / (maxPrice - minPrice)) * 100;
              return <circle key={point.yield} cx={x} cy={y} r={3} fill="#1d4ed8" />;
            })}
            <text x="10" y="150" fontSize="10">{formatPercent(priceCurve[0].yield)}</text>
            <text x="250" y="150" fontSize="10">{formatPercent(priceCurve[priceCurve.length - 1].yield)}</text>
            <text x="10" y="20" fontSize="10">Prezzo (€)</text>
          </svg>
          <figcaption>
            Prezzo in funzione del rendimento ±200 bps rispetto al valore inserito. Utilizza la retta tangente (duration) e la
            correzione di curvatura (convexity) per stress test Solvency II come richiesto dalle linee guida EIOPA.
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}
