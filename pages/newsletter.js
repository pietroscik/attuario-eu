import Nav from "../components/Nav";
import Footer from "../components/Footer";

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID;
const formAction = formspreeId ? `https://formspree.io/f/${formspreeId}` : undefined;

export default function Newsletter(){
  const isConfigured = Boolean(formAction);

  return (
    <>
      <Nav/>
      <main style={{maxWidth:720, margin:"0 auto", padding:"32px 16px"}}>
        <h1 style={{fontSize:28, fontWeight:700}}>Newsletter</h1>
        <p style={{opacity:.85}}>
          Iscriviti per ricevere aggiornamenti su assicurazioni, attuariato e strumenti pratici per la gestione del rischio.
        </p>
        <form
          action={formAction}
          method="POST"
          style={{display:"grid", gap:12, marginTop:16}}
          onSubmit={isConfigured ? undefined : (event) => event.preventDefault()}
        >
          <label style={{display:"grid", gap:4}}>
            <span style={{fontWeight:500}}>Email</span>
            <input
              name="email"
              type="email"
              placeholder="nome@azienda.it"
              required
              style={{padding:12, borderRadius:12, border:"1px solid #ddd"}}
              disabled={!isConfigured}
            />
          </label>
          <label style={{display:"grid", gap:4}}>
            <span style={{fontWeight:500}}>Nome</span>
            <input
              name="nome"
              placeholder="Il tuo nome"
              style={{padding:12, borderRadius:12, border:"1px solid #ddd"}}
              disabled={!isConfigured}
            />
          </label>
          <button
            type="submit"
            style={{padding:"10px 16px", background:"#000", color:"#fff", borderRadius:999, width:"fit-content"}}
            disabled={!isConfigured}
          >
            Iscriviti
          </button>
        </form>
        {!isConfigured && (
          <p style={{fontSize:12, opacity:.7, marginTop:12}}>
            Configura la variabile d&apos;ambiente <code>NEXT_PUBLIC_FORMSPREE_NEWSLETTER_ID</code> per abilitare l&apos;invio del modulo.
          </p>
        )}
        {isConfigured && (
          <p style={{fontSize:12, opacity:.7, marginTop:8}}>
            Con l’invio accetti <a href="/privacy">Privacy</a>.
          </p>
        )}
      </main>
      <Footer/>
    </>
  );
}
