import '@/styles/globals.css'
import Link from 'next/link'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/community">Community</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/wiki">Wiki</Link>
        <Link href="/calcolatori">Calcolatori</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contatti">Contatti</Link>
      </nav>
      <div className="container">
        <Component {...pageProps} />
        <footer>
          <p><strong>Disclaimer —</strong> Il sito e i materiali pubblicati hanno finalità informative e formative. Non costituiscono consulenza o relazione/certificazione attuariale ai sensi della normativa vigente. Le attività riservate alla professione di Attuario sono svolte esclusivamente da professionisti iscritti all’Albo.</p>
        </footer>
      </div>
    </>
  )
}
