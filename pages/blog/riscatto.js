// pages/blog/riscatto.js import Head from "next/head"; import Link from "next/link";

export default function BlogRiscatto() { return ( <> <Head> <title>Valore di riscatto: come si calcola – Attuario.EU</title> <meta name="description" content="Guida completa al calcolo del valore di riscatto di una posizione assicurativa o previdenziale. Simulatore incluso." /> </Head>

<main className="px-4 py-10 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6">💸 Valore di riscatto: come si calcola</h1>

    <p className="mb-4 text-gray-700">
      Il <strong>valore di riscatto</strong> rappresenta l'importo che un soggetto può recuperare in caso di interruzione anticipata di un contratto assicurativo o di un piano previdenziale.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-2">📉 Quali fattori incidono?</h2>
    <ul className="list-disc pl-6 mb-4">
      <li>Capitale accumulato fino alla data del riscatto</li>
      <li>Penalità percentuali applicate</li>
      <li>Quote fisse trattenute dal gestore</li>
      <li>Eventuali caricamenti contrattuali</li>
      <li>Tasso garantito o rivalutazioni già maturate</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-6 mb-2">🧮 Calcolatore online</h2>
    <p className="mb-4">
      Per una simulazione semplificata puoi utilizzare il nostro <Link href="/calcolatori/riscatto" className="text-blue-600 underline">calcolatore di riscatto</Link> online.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-2">📌 Nota tecnica</h2>
    <p className="mb-4">
      In ambito attuariale, il valore di riscatto è legato al concetto di <em>valore attuale netto</em>, cioè l’attualizzazione dei benefici futuri al momento del recesso. La formula analitica può variare a seconda del prodotto (vita, previdenza, fondi).
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-2">📚 Riferimenti</h2>
    <ul className="list-disc pl-6">
      <li><a href="https://www.ivass.it" className="text-blue-600 underline">Regolamenti IVASS sul riscatto delle polizze vita</a></li>
      <li><a href="https://www.covip.it" className="text-blue-600 underline">Note COVIP sui riscatti nei PIP</a></li>
    </ul>

    <p className="text-sm text-gray-500 mt-8">Articolo pubblicato da Attuario.EU – aggiornato al {new Date().getFullYear()}</p>
  </main>
</>

); }

