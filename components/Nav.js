import Link from "next/link";

export default function Nav() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          Attuario.eu
        </Link>
        <nav className="site-nav">
          <Link href="/servizi">Servizi</Link>
          <Link href="/calcolatori">Calcolatori</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contatti" className="site-nav__cta">
            Prenota una call
          </Link>
        </nav>
      </div>
    </header>
  );
}
