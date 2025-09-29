import { useState } from "react";

export default function PremioPuro() {
  const [freq, setFreq] = useState(0.05);
  const [sev, setSev] = useState(2000);

  const premio = freq >= 0 && sev >= 0 ? freq * sev : 0;

  return (
    <div className="calculator">
      <h3>Calcolatore premio puro</h3>
      <label>
        Frequenza (0–1)
        <input
          type="number"
          step="0.001"
          value={freq}
          min="0"
          onChange={(event) => setFreq(Number(event.target.value))}
        />
      </label>
      <label>
        Severità media (€)
        <input
          type="number"
          step="1"
          value={sev}
          min="0"
          onChange={(event) => setSev(Number(event.target.value))}
        />
      </label>
      <div className="calculator-result">Premio puro ≈ € {premio.toFixed(2)}</div>
      <p className="calculator-note">E[X] = frequenza × severità. Esclude caricamenti e margini.</p>
    </div>
  );
}
