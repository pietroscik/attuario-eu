import Link from "next/link";

import { CASE_STUDIES } from "../../content/pages/casi";

function buildRelatedCases(currentSlug, relatedSlugs = []) {
  if (relatedSlugs.length === 0) {
    return CASE_STUDIES.filter(({ slug }) => slug !== currentSlug).slice(0, 3);
  }

  const uniqueSlugs = Array.from(new Set(relatedSlugs)).filter((slug) => slug !== currentSlug);

  return uniqueSlugs
    .map((slug) => CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug))
    .filter(Boolean)
    .slice(0, 3);
}

export default function CaseNavigation({ currentSlug, relatedSlugs }) {
  const relatedCases = buildRelatedCases(currentSlug, relatedSlugs);

  return (
    <section className="section info-panel" aria-labelledby="case-nav-heading">
      <h2 id="case-nav-heading">Continua con altri case study</h2>
      <p>
        Approfondisci percorsi affini, apri gli strumenti operativi dedicati oppure torna all’elenco completo per
        scegliere un nuovo scenario da esplorare.
      </p>
      <div className="case-nav__links">
        {relatedCases.map(({ slug, title, summary }) => (
          <Link key={slug} className="link-card" href={`/casi/${slug}`}>
            <h3>{title}</h3>
            <p>{summary}</p>
          </Link>
        ))}
      </div>
      <div className="case-nav__cta">
        <Link className="button" href="/casi">
          Torna all’elenco completo
        </Link>
        <Link className="button secondary" href="/applicazioni">
          Rivedi le Applicazioni
        </Link>
        <Link className="button secondary" href="/strumenti">
          Apri gli Strumenti
        </Link>
      </div>

      <style jsx>{`
        .case-nav__links {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          margin: 24px 0;
        }

        .case-nav__cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (min-width: 768px) {
          .case-nav__cta {
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
