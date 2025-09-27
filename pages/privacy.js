import Nav from "../components/Nav"; import Footer from "../components/Footer";
export default function Privacy(){
  return (<>
    <Nav/>
    <main style={{maxWidth:960, margin:"0 auto", padding:"32px 16px"}}>
      <h1 style={{fontSize:28, fontWeight:700}}>Privacy</h1>
      <p>Informativa ai sensi del Reg. (UE) 2016/679 (GDPR). Questo sito raccoglie dati minimi per rispondere alle richieste (nome, email, messaggio). Non vende dati a terzi. Puoi chiedere rettifica o cancellazione scrivendo all’indirizzo indicato nei contatti.</p>
    </main>
    <Footer/>
  </>);
}
