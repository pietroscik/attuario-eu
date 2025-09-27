// pages/calcolatori/rendita.js import { useState } from "react"; import Head from "next/head"; import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function CalcolatoreRendita() { const [capitale, setCapitale] = useState(100000); const [tasso, setTasso] = useState(2); const [eta, setEta] = useState(65); const [tipo, setTipo] = useState("vitalizia"); const [anticipata, setAnticipata] = useState(false); const [frequenza, setFrequenza] = useState("annuale"); const [rivalutazione, setRivalutazione] = useState(false); const [risultato, setRisultato] = useState(null); const [serie, setSerie] = useState([]);

const calcolaRendita = () => { const i = tasso / 100; let durata = 20; // vita attesa semplificata

if (anticipata) durata -= 1;
if (eta > 70) durata -= (eta - 70) * 0.5;

let renditaBase =
  tipo === "vitalizia"
    ? capitale * i / (1 - Math.pow(1 + i, -durata))
    : capitale / durata;

// Aggiusta per frequenza
const freqMap = {
  annuale: 1,
  semestrale: 2,
  trimestrale: 4,
  mensile: 12
};
const coeff = freqMap[frequenza] || 1;
let rendita = renditaBase / coeff;

// Crea la serie temporale con rivalutazione opzionale
const serieData = [];
let totale = 0;
for (let t = 0; t < durata * coeff; t++) {
  const rival = rivalutazione ? Math.pow(1.03, Math.floor(t / coeff)) : 1;
  const quota = rendita * rival;
  totale += quota;
  serieData.push({ periodo: t + 1, quota: parseFloat(quota.toFixed(2)) });
}

setSerie(serieData);
setRisultato(totale.toFixed(2));

};

return ( <> <Head> <title>Calcolatore Rendita – Attuario.EU</title> </Head> <main className="px-4 py-10 max-w-3xl mx-auto"> <h1 className="text-3xl font-bold mb-6">🧮 Calcolatore Rendita</h1> <div className="grid gap-4"> <label> Capitale disponibile (€): <input type="number" className="input" value={capitale} onChange={(e) => setCapitale(+e.target.value)} /> </label> <label> Tasso tecnico (%): <input type="number" className="input" value={tasso} onChange={(e) => setTasso(+e.target.value)} /> </label> <label> Età beneficiario: <input type="number" className="input" value={eta} onChange={(e) => setEta(+e.target.value)} /> </label> <label> Tipo rendita: <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="input"> <option value="vitalizia">Vitalizia</option> <option value="temporanea">Temporanea</option> </select> </label> <label className="flex items-center gap-2"> <input type="checkbox" checked={anticipata} onChange={(e) => setAnticipata(e.target.checked)} /> Rendita anticipata </label>

<label>
        Frequenza di erogazione:
        <select value={frequenza} onChange={(e) => setFrequenza(e.target.value)} className="input">
          <option value="annuale">Annuale</option>
          <option value="semestrale">Semestrale</option>
          <option value="trimestrale">Trimestrale</option>
          <option value="mensile">Mensile</option>
        </select>
      </label>

      <label className="flex items-center gap-2">
        <input type="checkbox" checked={rivalutazione} onChange={(e) => setRivalutazione(e.target.checked)} />
        Rivalutazione annuale del 3%
      </label>

      <button className="btn" onClick={calcolaRendita}>
        Calcola rendita
      </button>

      {risultato && (
        <div className="mt-6 p-4 bg-green-100 rounded shadow">
          <p>Totale rendita complessiva stimata: <strong>{risultato} €</strong></p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={serie}>
                <XAxis dataKey="periodo" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="quota" stroke="#4caf50" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  </main>
</>

); }

