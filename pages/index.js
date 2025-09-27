// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Attuario.EU – Portale attuariale</title>
        <meta name="description" content="Calcolatori, articoli e risorse per attuari e consulenti finanziari. Un progetto divulgativo di Pietro Maietta." />
      </Head>

      <main className="px-4 py-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Benvenuto su Attuario.EU</h1>
        <p className="mb-6 text-lg text-gray-700">
          Un portale pensato per professionisti, studenti e appassionati di attuariato, economia, finanza e risk management.
          Troverai strumenti di calcolo, articoli tecnici e divulgativi, risorse normative e modelli utili alla professione.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard title="📘 Wiki Attuariale" href="/wiki" desc="Glossario, formule, normativa e appunti attuariali commentati." />
          <SectionCard title="🧮 Calcolatori" href="/calcolatori" desc="Strumenti interattivi per rendite, pensioni, premi, e molto altro." />
          <SectionCard title="📝 Blog" href="/blog" desc="Articoli divulgativi, approfondimenti e modelli attuariali." />
          <SectionCard title="🛒 Shop & Modelli" href="/shop" desc="Excel, PDF e tool professionali disponibili per l'acquisto o il download." />
          <SectionCard title="📡 Contatti" href="/contatti" desc="Scrivimi per collaborazioni, consulenze o suggerimenti." />
        </div>

        <div className="mt-10 text-sm text-gray-500">
          Un progetto ideato da <strong>Pietro Maietta</strong>, laureando in Metodi Quantitativi presso l’Università di Napoli “Parthenope”.
        </div>
      </main>
    </>
  );
}

function SectionCard({ title, href, desc }) {
  return (
    <a href={href} className="border p-4 rounded-xl hover:shadow-lg transition bg-white">
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-gray-600">{desc}</p>
    </a>
  );
}