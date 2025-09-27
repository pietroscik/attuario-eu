import Link from "next/link";
export default function Nav(){
  return (
    <header style={{borderBottom:"1px solid #eee"}}>
      <div style={{maxWidth:960, margin:"0 auto", padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <Link href="/" className="brand" style={{fontWeight:600, fontSize:18}}>Attuario.eu</Link>
        <nav style={{display:"flex", gap:16, fontSize:14}}>
          <Link href="/servizi">Servizi</Link>
          <Link href="/calcolatori">Calcolatori</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contatti" className="cta" style={{padding:"8px 12px", border:"1px solid #000", borderRadius:999}}>Prenota una call</Link>
        </nav>
      </div>
    </header>
  );
}
