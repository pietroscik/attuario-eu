// pages/wiki/index.js
import Head from "next/head";

export default function Wiki() {
  return (
    <>
      <Head>
        <title>Wiki Attuariale – Attuario.EU</title>
        <meta name="description" content="Glossario e risorse attuariali: formule, normative, esempi pratici e spiegazioni accessibili." />
      </Head>

      <main className="px-4 py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">📘 Wiki Attuariale</h1>
        <p className="mb-6 text-gray-700">
          In questa sezione trovi un <strong>glossario attuariale</strong> con definizioni tecniche, formule principali, normative rilevanti e appunti esplicativi.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">🧮 Glossario tecnico</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li><strong>Valore Attuale Netto (VAN):</strong> somma attualizzata dei flussi futuri.</li>
          <li><strong>Tasso tecnico:</strong> tasso di attualizzazione usato per calcolare premi e riserve.</li>
          <li><strong>Speranza di vita residua:</strong> durata media attesa di un soggetto all’età x, secondo una tavola di mortalità.</li>
          <li><strong>Premio puro:</strong> valore attuale delle prestazioni assicurate, al netto delle spese e margini.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">📜 Normativa rilevante</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li><a href="https://www.inps.it" className="text-blue-600 underline">Legge 335/1995</a> – Riforma del sistema pensionistico obbligatorio.</li>
          <li><a href="https://www.ivass.it" className="text-blue-600 underline">Regolamenti IVASS</a> – Normativa per riserve tecniche e solvibilità.</li>
          <li><a href="https://www.covip.it" className="text-blue-600 underline">Circolari COVIP</a> – Regole per fondi pensione e PIP.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">📝 Appunti & spiegazioni</h2>
        <p className="text-gray-700">
          Abbiamo incluso esempi e spiegazioni operative su:
        </p>
        <ul className="list-disc pl-6 text-gray-800 mt-2">
          <li>Come calcolare una rendita vitalizia immediata</li>
          <li>Legame tra tavole di mortalità e tasso di riscatto</li>
          <li>Come si determina la riserva matematica</li>
        </ul>

        <div className="mt-10 text-sm text-gray-500">
          La wiki è in continuo aggiornamento. Hai suggerimenti o vuoi contribuire? Scrivici nella sezione <a href="/contatti" className="text-blue-500 underline">Contatti</a>.
        </div>
      </main>
    </>
  );
}