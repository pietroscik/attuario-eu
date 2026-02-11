import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="shell shell--footer">
        <div className="site-footer__meta">
          <span>© {new Date().getFullYear()} attuario.eu</span>
          <div className="site-footer__links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/termini">Termini</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>
        <div 
          className="professional-status" 
          style={{ 
            marginTop: "1.5rem", 
            paddingTop: "1rem", 
            borderTop: "1px solid #eee", 
            fontSize: "0.85rem", 
            color: "#555" 
          }}
        >
          <strong>attuario.eu</strong> è un progetto personale ideato e gestito da <strong>Pietro Maietta</strong>, laureato magistrale in Statistica e Scienze Attuariali (Università di Napoli Parthenope). <strong>Non iscritto all&apos;Albo Nazionale Attuari</strong> — in preparazione per l&apos;esame di Stato. Tutti i materiali sono a scopo esclusivamente didattico e non sostituiscono il parere di un professionista iscritto all&apos;Albo ai sensi della Legge 194/1942.
        </div>
      </div>
    </footer>
  );
}
