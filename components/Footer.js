import Link from "next/link";
export default function Footer(){
  return (
    <footer style={{borderTop:"1px solid #eee", marginTop:24}}>
      <div style={{maxWidth:960, margin:"0 auto", padding:"24px 16px", display:"flex", justifyContent:"space-between", fontSize:14}}>
        <span>© {new Date().getFullYear()} Attuario.eu</span>
        <div style={{display:"flex", gap:16}}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/termini">Termini</Link>
          <Link href="/contatti">Contatti</Link>
        </div>
      </div>
    </footer>
  );
}
