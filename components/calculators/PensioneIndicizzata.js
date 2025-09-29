import { useMemo, useState } from "react";

const clampPositive = (value, fallback = 0) => {
  if (Number.isNaN(value) || !Number.isFinite(value)) return fallback;
  return Math.max(value, 0);
};

const clampStrictlyPositive = (value, fallback = 1) => {
  if (Number.isNaN(value) || !Number.isFinite(value) || value <= 0) return fallback;
  return value;
};

const computeGrowingAnnuityPV = (payment, growth, discount, years) => {
  if (years <= 0) return 0;
  if (Math.abs(discount - growth) < 1e-6) {
    return (payment * years) / (1 + discount);
  }

  const ratio = (1 + growth) / (1 + discount);
  return (payment * (1 - Math.pow(ratio, years))) / (discount - growth);
};

export default function PensioneIndicizzata() {
  const [retribuzioneAnnua, setRetribuzioneAnnua] = useState(35000);
  const [crescitaRetribuzione, setCrescitaRetribuzione] = useState(0.02);
  const [anniContribuzione, setAnniContribuzione] = useState(35);
  const [aliquotaAnnua, setAliquotaAnnua] = useState(0.0165);
  const [tassoIndicizzazione, setTassoIndicizzazione] = useState(0.015);
  const [anniPensione, setAnniPensione] = useState(25);
  const [tassoAttualizzazione, setTassoAttualizzazione] = useState(0.012);

  const risultati = useMemo(() => {
    const anni = clampStrictlyPositive(anniContribuzione, 1);
    const anniInPagamento = clampStrictlyPositive(anniPensione, 1);
    const retribuzioneFinale =
      clampStrictlyPositive(retribuzioneAnnua, 1) * Math.pow(1 + clampPositive(crescitaRetribuzione), anni);
    const quotaAccumulata = clampPositive(aliquotaAnnua) * anni;
    const pensioneIniziale = retribuzioneFinale * quotaAccumulata;
    const indicizzazione = clampPositive(tassoIndicizzazione);
    const discount = tassoAttualizzazione;

    const pensioneMediaPrimi5 = pensioneIniziale *
      (1 + (indicizzazione > 0 ? (Math.pow(1 + indicizzazione, Math.min(anniInPagamento, 5)) - 1) / indicizzazione : Math.min(anniInPagamento, 5))) /
      Math.max(1, Math.min(anniInPagamento, 5));

    const valoreAttuale = computeGrowingAnnuityPV(
      pensioneIniziale,
      indicizzazione,
      discount,
      anniInPagamento
    );

    const coefficienteTrasformazione = pensioneIniziale > 0 ? pensioneIniziale / valoreAttuale : 0;

    const seriePensioni = Array.from({ length: Math.min(anniInPagamento, 20) }, (_, index) => {
      const anno = index + 1;
      const importo = pensioneIniziale * Math.pow(1 + indicizzazione, index);
      return { anno, importo };
    });

    return {
      retribuzioneFinale,
      quotaAccumulata,
      pensioneIniziale,
      pensioneMediaPrimi5,
      valoreAttuale,
      coefficienteTrasformazione,
      seriePensioni,
      indicizzazione,
      discount,
    };
  }, [
    retribuzioneAnnua,
    crescitaRetribuzione,
    anniContribuzione,
    aliquotaAnnua,
    tassoIndicizzazione,
    anniPensione,
    tassoAttualizzazione,
  ]);

  const minImporto = risultati.seriePensioni.reduce((acc, punto) => Math.min(acc, punto.importo), Infinity);
  const maxImporto = risultati.seriePensioni.reduce((acc, punto) => Math.max(acc, punto.importo), 0);

  return (
    <div className="calculator">
      <h3>Pensione indicizzata</h3>
      <p className="calculator-note">
        Modello semplificato di pensione retributiva indicizzata: applica un'aliquota annua sulla retribuzione di fine carriera
        e rivaluta le prestazioni con un tasso di indicizzazione costante, come nelle simulazioni richieste dal D.Lgs. 252/2005.
      </p>
      <label>
        Retribuzione annua corrente (€)
        <input
          type="number"
          min="0"
          step="500"
          value={retribuzioneAnnua}
          onChange={(event) => setRetribuzioneAnnua(Number(event.target.value))}
        />
      </label>
      <label>
        Crescita retribuzione annua (0-1)
        <input
          type="number"
          step="0.001"
          value={crescitaRetribuzione}
          onChange={(event) => setCrescitaRetribuzione(Number(event.target.value))}
        />
      </label>
      <label>
        Anni di contribuzione
        <input
          type="number"
          min="1"
          step="1"
          value={anniContribuzione}
          onChange={(event) => setAnniContribuzione(Number(event.target.value))}
        />
      </label>
      <label>
        Aliquota annua di maturazione (0-1)
        <input
          type="number"
          step="0.0005"
          value={aliquotaAnnua}
          onChange={(event) => setAliquotaAnnua(Number(event.target.value))}
        />
      </label>
      <label>
        Indicizzazione annua della pensione (0-1)
        <input
          type="number"
          step="0.0005"
          value={tassoIndicizzazione}
          onChange={(event) => setTassoIndicizzazione(Number(event.target.value))}
        />
      </label>
      <label>
        Anni attesi di pensione
        <input
          type="number"
          min="1"
          step="1"
          value={anniPensione}
          onChange={(event) => setAnniPensione(Number(event.target.value))}
        />
      </label>
      <label>
        Tasso di attualizzazione (0-1)
        <input
          type="number"
          step="0.0005"
          value={tassoAttualizzazione}
          onChange={(event) => setTassoAttualizzazione(Number(event.target.value))}
        />
      </label>

      <div className="calculator-result" style={{ display: "grid", gap: "0.5rem" }}>
        <div>Retribuzione finale stimata: € {risultati.retribuzioneFinale.toFixed(2)}</div>
        <div>Quota maturata complessiva: {(risultati.quotaAccumulata * 100).toFixed(2)}%</div>
        <div>Pensione annua al primo anno: € {risultati.pensioneIniziale.toFixed(2)}</div>
        <div>Importo medio primi 5 anni indicizzati: € {risultati.pensioneMediaPrimi5.toFixed(2)}</div>
        <div>Valore attuale delle prestazioni: € {risultati.valoreAttuale.toFixed(2)}</div>
        <div>Coefficiente di trasformazione implicito: {risultati.coefficienteTrasformazione.toFixed(3)}</div>
      </div>

      {Number.isFinite(minImporto) && Number.isFinite(maxImporto) && maxImporto > minImporto ? (
        <figure className="calculator-note" style={{ marginTop: "1.5rem" }}>
          <svg role="img" aria-label="Crescita della pensione indicizzata" viewBox="0 0 320 160" style={{ width: "100%", height: "160px" }}>
            <rect x="0" y="0" width="320" height="160" fill="white" stroke="#d1d5db" />
            {risultati.seriePensioni.map((punto, index) => {
              if (index === risultati.seriePensioni.length - 1) return null;
              const prossimo = risultati.seriePensioni[index + 1];
              const x1 = 20 + (280 * index) / (risultati.seriePensioni.length - 1);
              const x2 = 20 + (280 * (index + 1)) / (risultati.seriePensioni.length - 1);
              const y1 = 130 - ((punto.importo - minImporto) / (maxImporto - minImporto)) * 100;
              const y2 = 130 - ((prossimo.importo - minImporto) / (maxImporto - minImporto)) * 100;
              return <line key={punto.anno} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#10b981" strokeWidth="2" />;
            })}
            {risultati.seriePensioni.map((punto, index) => {
              const x = 20 + (280 * index) / (risultati.seriePensioni.length - 1);
              const y = 130 - ((punto.importo - minImporto) / (maxImporto - minImporto)) * 100;
              return <circle key={`punto-${punto.anno}`} cx={x} cy={y} r={3} fill="#047857" />;
            })}
            <text x="10" y="150" fontSize="10">Anno 1</text>
            <text x="250" y="150" fontSize="10">Anno {risultati.seriePensioni[risultati.seriePensioni.length - 1].anno}</text>
            <text x="10" y="20" fontSize="10">Pensione annua (€)</text>
          </svg>
          <figcaption>
            Evoluzione dell'importo pensionistico indicizzato. Il profilo crescente riflette l'indicizzazione annua scelta e
            consente di confrontare scenari con il tasso di attualizzazione previsto dalle comunicazioni Covip.
          </figcaption>
        </figure>
      ) : null}
    </div>
  );
}
