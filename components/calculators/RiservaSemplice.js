import { useMemo, useState } from "react";

export default function RiservaSemplice() {
  const [aperti, setAperti] = useState(120);
  const [costoResiduo, setCostoResiduo] = useState(1500);
  const [ibnr, setIbnr] = useState(30000);
  const [fattoreInflazione, setFattoreInflazione] = useState(0.02);
  const [sconto, setSconto] = useState(0.005);

  const risultati = useMemo(() => {
    const safeAperti = Math.max(0, aperti);
    const safeCosto = Math.max(0, costoResiduo);
    const safeIbnr = Math.max(0, ibnr);
    const inflazione = Math.max(0, fattoreInflazione);
    const tassoSconto = Math.max(0, sconto);

    const rbns = safeAperti * safeCosto;
    const rbnsIndicizzato = rbns * (1 + inflazione);
    const ibnrIndicizzato = safeIbnr * (1 + inflazione);
    const riservaLorda = rbnsIndicizzato + ibnrIndicizzato;
    const fattoreAttualizzazione = 1 / (1 + tassoSconto);
    const riservaAttualizzata = riservaLorda * fattoreAttualizzazione;

    return {
      rbns,
      rbnsIndicizzato,
      ibnrIndicizzato,
      riservaLorda,
      fattoreAttualizzazione,
      riservaAttualizzata,
    };
  }, [aperti, costoResiduo, ibnr, fattoreInflazione, sconto]);

  return (
    <div className="calculator">
      <h3>Riserva tecnica (stima semplice)</h3>
      <p className="calculator-note">
        Strumento didattico ispirato alle linee guida IVASS sulla riservazione: si parte da RBNS (sinistri noti) e IBNR (sinistri
        non ancora denunciati), con adeguamenti per inflazione e attualizzazione.
      </p>
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
      <label>
        Adeguamento inflattivo previsto
        <input
          type="number"
          step="0.005"
          value={fattoreInflazione}
          onChange={(event) => setFattoreInflazione(Number(event.target.value))}
        />
      </label>
      <label>
        Tasso di sconto annuo
        <input
          type="number"
          step="0.0025"
          value={sconto}
          onChange={(event) => setSconto(Number(event.target.value))}
        />
      </label>
      <div className="calculator-result" style={{ display: "grid", gap: "0.5rem" }}>
        <div>RBNS corrente: € {risultati.rbns.toFixed(2)}</div>
        <div>RBNS indicizzato: € {risultati.rbnsIndicizzato.toFixed(2)}</div>
        <div>IBNR indicizzato: € {risultati.ibnrIndicizzato.toFixed(2)}</div>
        <div>Riserva lorda stimata: € {risultati.riservaLorda.toFixed(2)}</div>
        <div>Fattore di attualizzazione: {risultati.fattoreAttualizzazione.toFixed(5)}</div>
        <div>Riserva attualizzata: € {risultati.riservaAttualizzata.toFixed(2)}</div>
      </div>
      <p className="calculator-note">
        L’approccio reale richiede metodi triangolari (Chain-Ladder, Bornhuetter-Ferguson) e margini di rischio secondo Solvency
        II/IFRS 17. Questo strumento semplifica i passaggi per fornire un ordine di grandezza rapidamente comunicabile.
      </p>
    </div>
  );
}
