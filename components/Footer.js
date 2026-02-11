import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="legal-disclaimer">
        <div className="shell">
          <p>
            <strong>attuario.eu</strong> è un progetto didattico open source ideato da Pietro Maietta, laureato magistrale in Statistica e Scienze Attuariali. <strong>Non iscritto all&apos;Albo Nazionale Attuari</strong>. Tutti i materiali sono a scopo esclusivamente formativo e non costituiscono consulenza professionale ai sensi della Legge 194/1942.
          </p>
        </div>
      </div>
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
          <p className="site-footer__disclaimer">
            Contenuti destinati esclusivamente a finalità divulgative e formative. Nessuna informazione presente su questo sito
            costituisce consulenza attuariale, finanziaria o legale.
          </p>
        </div>
      </footer>
    </>
  );
}
