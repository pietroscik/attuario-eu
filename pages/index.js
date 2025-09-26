import Link from 'next/link'
export default function Home() {
  return (
    <div className="hero">
      <h1>Soluzioni attuariali per imprese, banche e PA</h1>
      <p>Dalla normativa (IFRS 17, Solvency II) al pricing e al risk management: modelli solidi, deliverable chiari e impatti misurabili.</p>
      <p>
        <a className="btn primary" href="/contatti">Prenota una call</a>{' '}
        <a className="btn" href="/kit">Scarica la checklist IFRS 17</a>
      </p>
      <div className="grid" style={{marginTop:24}}>
        <div className="card"><h3>IFRS 17 end-to-end</h3><p>Gap analysis, dati, modellazione, disclosure.</p></div>
        <div className="card"><h3>Solvency II & ORSA</h3><p>Requisiti, reporting, stress test.</p></div>
        <div className="card"><h3>Pricing e portfolio analytics</h3><p>Tariffe, elasticità, redditività tecnica.</p></div>
      </div>
      <h2>Calcolatori veloci</h2>
      <div className="grid">
        <div className="card"><h3>Premio puro vita</h3><p><Link href="/calcolatori">Apri</Link></p></div>
        <div className="card"><h3>Black–Scholes</h3><p><Link href="/calcolatori">Apri</Link></p></div>
        <div className="card"><h3>Riserva IBNR</h3><p><Link href="/calcolatori">Apri</Link></p></div>
      </div>
    </div>
  )
}
