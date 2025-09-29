import Link from "next/link";

import { NAV_LINKS } from "../content/navigation";

export default function Nav() {
  return (
    <header className="site-header" role="banner">
      <div className="shell shell--header">
        <Link href="/" className="brand">
          attuario.eu
        </Link>
        <nav className="site-nav" aria-label="Navigazione principale">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="site-nav__link">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
