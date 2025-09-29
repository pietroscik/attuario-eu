import { useMemo, useState } from "react";

const clampProbability = (value) => {
  if (Number.isNaN(value)) return 0;
  return Math.min(Math.max(value, 0), 1);
};

export default function PremioUnico() {
  const [sommaAssicurata, setSommaAssicurata] = useState(100000);
  const [probabilitaSinistro, setProbabilitaSinistro] = useState(0.003);
  const [anni, setAnni] = useState(10);
  const [tassoTecnico, setTassoTecnico] = useState(0.01);
  const [caricamento, setCaricamento] = useState(0.15);
  const [speseFisse, setSpeseFisse] = useState(50);
  const [speseVariabili, setSpeseVariabili] = useState(0.02);

  const risultati = useMemo(() => {
    if (sommaAssicurata < 0 || anni < 0 || tassoTecnico <= -1) {
      return null;
    }

    const prob = clampProbability(probabilitaSinistro);
    const discount = anni === 0 ? 1 : Math.pow(1 + tassoTecnico, -anni);
    const valoreAttuale = sommaAssicurata * prob * discount;
    const markupFactor = Math.max(0, 1 + caricamento);
    const variabileFactor = Math.max(0, 1 + speseVariabili);
    const premioCaricato = valoreAttuale * markupFactor * variabileFactor;
    const premioLordo = Math.max(0, premioCaricato + Math.max(0, speseFisse));
    const caricamentoTotale = premioLordo - valoreAttuale;
    const marginePercentuale = premioLordo > 0 ? (caricamentoTotale / premioLordo) * 100 : 0;
    const premioPerMille = sommaAssicurata > 0 ? (premioLordo / sommaAssicurata) * 1000 : 0;
    const quotaCaricamenti = premioLordo > 0 ? caricamentoTotale / premioLordo : 0;

    return {
      prob,
      discount,
      valoreAttuale,
      premioCaricato,
      premioLordo,
      markupFactor,
      variabileFactor,
      caricamentoTotale,
      marginePercentuale,
      premioPerMille,
      quotaCaricamenti,
    };
  }, [
    sommaAssicurata,
    probabilitaSinistro,
    anni,
    tassoTecnico,
    caricamento,
    speseFisse,
    speseVariabili,
  ]);

  return (
    <div className="calculator">
      <h3>Calcolatore premio unico</h3>
      <p className="calculator-note">
        Valuta l'importo di premio da incassare una tantum oggi per coperture vita di durata limitata.
      </p>
      <label>
        Somma assicurata (€)
        <input
          type="number"
          min="0"
          step="1000"
          value={sommaAssicurata}
          onChange={(event) => setSommaAssicurata(Number(event.target.value))}
        />
      </label>
      <label>
        Probabilità di sinistro (0-1)
        <input
          type="number"
          min="0"
          max="1"
          step="0.0001"
          value={probabilitaSinistro}
          onChange={(event) => setProbabilitaSinistro(Number(event.target.value))}
        />
      </label>
      <label>
        Durata copertura (anni)
        <input
          type="number"
          min="0"
          step="1"
          value={anni}
          onChange={(event) => setAnni(Number(event.target.value))}
        />
      </label>
      <label>
        Tasso tecnico i
        <input
          type="number"
          step="0.0005"
          value={tassoTecnico}
          onChange={(event) => setTassoTecnico(Number(event.target.value))}
        />
      </label>
      <label>
        Caricamento (% su premio netto)
        <input
          type="number"
          step="0.01"
          value={caricamento}
          onChange={(event) => setCaricamento(Number(event.target.value))}
        />
      </label>
      <label>
        Spese variabili (% su premio)
        <input
          type="number"
          step="0.005"
          value={speseVariabili}
          onChange={(event) => setSpeseVariabili(Number(event.target.value))}
        />
      </label>
      <label>
        Spese fisse (€)
        <input
          type="number"
          min="0"
          step="5"
          value={speseFisse}
          onChange={(event) => setSpeseFisse(Number(event.target.value))}
        />
      </label>

      {risultati && (
        <div className="calculator-result" style={{ display: "grid", gap: "0.5rem" }}>
          <div>
            Probabilità utilizzata: <strong>{(risultati.prob * 100).toFixed(2)}%</strong>
          </div>
          <div>
            Valore attuale atteso (premio netto): <strong>€ {risultati.valoreAttuale.toFixed(2)}</strong>
          </div>
          <div>
            Fattore di sconto applicato: {risultati.discount.toFixed(6)}
          </div>
          <div>
            Caricamento tecnico: × {risultati.markupFactor.toFixed(3)}
          </div>
          <div>
            Mark-up spese variabili: × {risultati.variabileFactor.toFixed(3)}
          </div>
          <div>
            Premio dopo caricamenti percentuali: € {risultati.premioCaricato.toFixed(2)}
          </div>
          <div>
            Premi fissi aggiunti: € {Math.max(0, speseFisse).toFixed(2)}
          </div>
          <div>
            Premio unico lordo suggerito: <strong>€ {risultati.premioLordo.toFixed(2)}</strong>
          </div>
          <div>
            Premio lordo per mille di somma assicurata: {risultati.premioPerMille.toFixed(2)} ‰
          </div>
          <div>
            Margine totale su premio lordo: {risultati.marginePercentuale.toFixed(1)}%
          </div>
          <div>
            Caricamenti complessivi (spese + margini): € {risultati.caricamentoTotale.toFixed(2)}
          </div>
          <div>
            Quota caricamenti sul premio lordo: {(risultati.quotaCaricamenti * 100).toFixed(1)}%
          </div>
        </div>
      )}

      <p className="calculator-note">
        Il premio netto corrisponde a S × q × v^n come indicato nei testi di attuarial science (ad esempio Bowers, "Actuarial
        Mathematics"), mentre caricamenti e spese seguono le linee guida IVASS sulla determinazione del premio di tariffa. Imposta
        <code>n = 0</code> per coperture immediate o modella durate diverse.
      </p>
      <p className="calculator-note">
        L'input "Spese variabili" separa i caricamenti percentuali previsti dal Regolamento IVASS n. 41/2018 tra costi tecnici e
        spese di gestione, facilitando la riconciliazione con il fascicolo tecnico e con i prospetti Solvency II (QRT S.05.01).
      </p>
    </div>
  );
}
