import { NAV_LINKS } from "../content/navigation";
import { CASE_STUDIES } from "../content/pages/casi";

const BASE_URL = "https://attuario.eu";

function buildUrl(path) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
}

function createUrlEntry(loc, lastmod) {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    "  </url>",
  ]
    .filter(Boolean)
    .join("\n");
}

function generateSitemapXml() {
  const staticPaths = [
    "/",
    "/corso",
    "/teoria",
    "/applicazioni",
    "/casi",
    "/attuario",
    "/chi-siamo",
    "/risorse",
    "/community",
    "/wiki",
    "/notizie",
    "/strumenti",
    "/toolkit",
    "/blog",
    "/blog/archivio",
    "/calcolatori",
    "/calcolatore",
    "/newsletter",
    "/servizi",
    "/contatti",
    "/privacy",
    "/termini",
  ];

  const navPaths = NAV_LINKS.map(({ href }) => href);

  const caseStudyPaths = CASE_STUDIES.map(({ slug }) => `/casi/${slug}`);

  const calculatorPaths = [
    "/calcolatori/premio-puro",
    "/calcolatori/premio-unico",
    "/calcolatori/riserva-semplice",
    "/calcolatori/black-scholes",
    "/calcolatori/capm",
    "/calcolatori/annuity",
    "/calcolatori/duration-convexity",
    "/calcolatori/pensione-indicizzata",
    "/calcolatori/portafoglio-variabile",
  ];

  const resourcePaths = ["/risorse/ifrs17-essentials"];

  const allPaths = new Set([
    ...staticPaths,
    ...navPaths,
    ...caseStudyPaths,
    ...calculatorPaths,
    ...resourcePaths,
  ]);

  const today = new Date().toISOString().split("T")[0];

  const urlEntries = Array.from(allPaths)
    .sort()
    .map((path) => {
      const loc = buildUrl(path);
      return createUrlEntry(loc, today);
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSitemapXml();

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
