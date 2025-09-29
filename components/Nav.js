import Link from "next/link";

const links = [
  { href: "/teoria", label: "Teoria" },
  { href: "/applicazioni", label: "Applicazioni" },
  { href: "/attuario", label: "Attuari" },
  { href: "/risorse", label: "Risorse" },
  { href: "/wiki", label: "Wiki" },
  { href: "/notizie", label: "Notizie" },
  { href: "/strumenti", label: "Strumenti" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  return (
    <header className="site-header" role="banner">
      <div className="shell shell--header">
        <Link href="/" className="brand">
          attuario.eu
        </Link>
        <nav className="site-nav" aria-label="Navigazione principale">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="site-nav__link">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
