// pages/blog/rendita.js import Head from "next/head"; import Link from "next/link";

export default function BlogRendita() { return ( <> <Head> <title>Come si calcola una rendita vitalizia – Attuario.EU</title> <meta name="description" content="Guida al calcolo di una rendita vitalizia con esempi e formula attuariale. Scopri il funzionamento e prova il nostro simulatore online." /> </Head>

<main className="px-4 py-10 max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-6">📘 Come si calcola una rendita vitalizia</h1>

    <p className="mb-4 text-gray-700">
      Una <strong>rendita vitalizia</strong> è una prestazione periodica, solitamente mensile o annuale, erogata a un soggetto fino al termine della sua vita. È uno strumento tipico dei contratti assicurativi, pensionistici o di rendita immediata.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-2">📐 La formula attuariale base</h2>
    <p className="mb-4">
      Il valore della rendita annua può essere calcolato approssimativamente come:
    </p>
    <pre className="bg-gray-100 p-3 rounded mb-4 overflow-x-auto">
      R = C × i / [1 - (1 + i)<sup>-n</sup>]
    </pre>
    <p className="mb-4">
      Dove:
      <ul className="list-disc pl-6">
        <li><strong>R</strong> è la rendita annua</li>
        <li><strong>C</strong> è il capitale iniziale disponibile</li>
        <li><strong>i</strong> è il tasso tecnico di attualizzazione</li>
        <li><strong>n</strong> è la durata attesa della vita (in anni)</li>
      </ul>
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-2">🧮 Simulatore online</h2>
    <p className="mb-4">
      Per semplificare il calcolo, puoi usare il nostro <Link href="/calcolatori/rendita" className="text-blue-600 underline">calcolatore di rendita</Link> online. Ti consente di inserire:
    </p>
    <ul className="list-disc pl-6 mb-4">
      <li>Capitale disponibile</li>
      <li>Tasso tecnico</li>
      <li>Età del beneficiario</li>
      <li>Frequenza di erogazione</li>
      <li>Flag per rivalutazione e anticipo</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-6 mb-2">🔎 Approfondimenti</h2>
    <p className="mb-2">Per chi vuole approfondire:</p>
    <ul className="list-disc pl-6 mb-8">
      <li><a href="https://www.ivass.it" className="text-blue-600 underline">Regolamenti IVASS sulle rendite assicurative</a></li>
      <li><a href="https://www.covip.it" className="text-blue-600 underline">Documentazione COVIP su PIP e fondi pensione</a></li>
    </ul>

    <p className="text-sm text-gray-500">Articolo pubblicato da Attuario.EU – aggiornato al {new Date().getFullYear()}</p>
  </main>
</>

); }

