// pages/calcolatori/riserva-semplice.js
import RiservaSemplice from "../../components/calculators/RiservaSemplice";

export default function RiservaSemplicePage(){
  return (
    <main style={{maxWidth:900, margin:"2rem auto", padding:"1rem"}}>
      <h1>Riserva Semplice (wrapper)</h1>
      <RiservaSemplice />
    </main>
  );
}
