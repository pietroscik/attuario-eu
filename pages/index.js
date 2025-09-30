import Link from "next/link";

import Layout from "../components/Layout";
import SectionAuditBoard from "../components/SectionAuditBoard";

import {
  HOME_HIGHLIGHTS,
  HOME_PERSONAS,
  HOME_UPDATES,
} from "../content/pages/home";
import { SECTION_AUDIT } from "../content/sections-audit";

export default function Home() {
  return (
    <Layout
      title="attuario.eu"
      intro="attuario.eu è una piattaforma italiana dedicata a studenti, professionisti e curiosi del mondo attuariale. Qui trovi spiegazioni rigorose ma leggibili, strumenti didattici e aggiornamenti per orientarti tra teoria, pratica e normative."
      metaDescription="Divulgazione attuariale indipendente con teoria, applicazioni, risorse e strumenti didattici. Nessuna consulenza professionale, solo conoscenza condivisa."
      hideHeader
    >
      <section className="hero">
        <span className="tagline">Divulgazione attuariale indipendente</span>
        <h1>La scienza del rischio, raccontata in modo accessibile</h1>
        <p>
          attuario.eu è una piattaforma italiana dedicata a studenti, professionisti e curiosi del mondo attuariale. Qui trovi
          spiegazioni rigorose ma leggibili, strumenti didattici e aggiornamenti per orientarti tra teoria, pratica e normative.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/newsletter">
            Iscriviti alla newsletter
          </Link>
          <a className="button secondary" href="#sezioni">
            Esplora le sezioni
          </a>
          <Link className="button secondary" href="/community">
            Entra nella community
          </Link>
          <Link className="button secondary" href="/shop">
            Scopri i kit digitali
          </Link>
        </div>
      </section>

      <section id="sezioni" className="section">
        <div className="card-grid">
          {HOME_HIGHLIGHTS.map(({ title, text, link }) => (
            <Link key={title} className="link-card" href={link}>
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Percorsi consigliati</h2>
        <div className="persona-grid">
          {HOME_PERSONAS.map(({ title, copy }) => (
            <div key={title} className="card">
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Aggiornamenti recenti</h2>
        <ul className="list">
          {HOME_UPDATES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section" aria-labelledby="content-audit">
        <h2 id="content-audit">Panoramica delle sezioni principali</h2>
        <p>
          Consulta lo stato editoriale delle sezioni del sito: per ogni area trovi livello di
          copertura, collegamenti rilevanti e note sulle attività da completare.
        </p>
        <SectionAuditBoard sections={SECTION_AUDIT} />
      </section>

      <section className="section info-panel">
        <h2>Community & collaborazioni</h2>
        <p>
          attuario.eu accoglie contributi accademici, segnalazioni di eventi e richieste di collaborazione su progetti divulgativi.
          Non vengono erogate consulenze professionali, ma siamo felici di raccontare e condividere esperienze del settore.
        </p>
        <Link className="button secondary" href="/contatti">
          Scrivici un messaggio
        </Link>
      </section>
    </Layout>
  );
}
