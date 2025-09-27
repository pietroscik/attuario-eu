import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default function Contatti(){
  return (<>
    <Nav/>
    <main style={{maxWidth:720, margin:"0 auto", padding:"32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700}}>Contatti</h1>
      <p style={{opacity:.85}}>Raccontami l’esigenza e ti rispondo entro 1 giorno lavorativo.</p>
      <form action="https://formspree.io/f/your-id" method="POST" style={{display:"grid", gap:12}}>
        <input name="nome" placeholder="Nome e azienda" required style={{padding:12, borderRadius:12, border:"1px solid #ddd"}}/>
        <input name="email" type="email" placeholder="Email" required style={{padding:12, borderRadius:12, border:"1px solid #ddd"}}/>
        <textarea name="messaggio" placeholder="Descrizione richiesta" required style={{padding:12, borderRadius:12, border:"1px solid #ddd", minHeight:140}}/>
        <button style={{padding:"10px 16px", background:"#000", color:"#fff", borderRadius:999, width:"fit-content"}}>Invia</button>
      </form>
      <p style={{fontSize:12, opacity:.7, marginTop:8}}>Con l’invio accetti <Link href="/privacy">Privacy</Link>.</p>
    </main>
    <Footer/>
  </>);
}
