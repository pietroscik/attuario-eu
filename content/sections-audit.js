import { NAV_LINKS } from "./navigation";
import { APPLICATION_AREAS } from "./pages/applicazioni";
import { ATTUARIO_PATHWAYS, ATTUARIO_ROLES } from "./pages/attuario";
import { BLOG_POSTS } from "./pages/blog";
import { CASE_STUDIES } from "./pages/casi";
import { NEWS_UPDATES } from "./pages/notizie";
import { RESOURCE_SECTIONS } from "./pages/risorse";
import { THEORY_RESEARCH_HIGHLIGHTS, THEORY_TOPICS } from "./pages/teoria";
import { TOOL_RESOURCES } from "./pages/strumenti";
import { COMMUNITY_CHANNELS, COMMUNITY_INITIATIVES } from "./pages/community";
import { SHOP_BUNDLES } from "./pages/toolkit";

const INTERNAL_NAV_MAP = new Map(NAV_LINKS.map(({ href, label }) => [href, label]));

const theoryItemCount = THEORY_TOPICS.reduce((total, topic) => total + topic.items.length, 0);
const theoryExternalSources = THEORY_TOPICS.reduce(
  (total, topic) =>
    total +
    topic.items.reduce(
      (innerTotal, item) =>
        innerTotal + (item.resources?.filter((resource) => resource.external)?.length ?? 0),
      0,
    ),
  0,
);

const applicationCaseCount = APPLICATION_AREAS.reduce(
  (total, area) => total + area.cases.length,
  0,
);

const risorseItemCount = RESOURCE_SECTIONS.reduce(
  (total, section) => total + section.items.length,
  0,
);

const toolResourceCount = TOOL_RESOURCES.reduce(
  (total, toolkit) => total + toolkit.resources.length,
  0,
);

const newsEntryCount = NEWS_UPDATES.reduce(
  (total, section) => total + section.entries.length,
  0,
);

const wikiReferenceCount = THEORY_RESEARCH_HIGHLIGHTS.length;

const communityChannels = COMMUNITY_CHANNELS.length;
const communityInitiatives = COMMUNITY_INITIATIVES.length;

const corsoSections = 3; // sezioni principali in pages/corso.js
const shopBundles = SHOP_BUNDLES.length;

const blogPostsCount = BLOG_POSTS.length;

const attuarioRoles = ATTUARIO_ROLES.length;
const attuarioPathways = ATTUARIO_PATHWAYS.length;

const navLabel = (href) => INTERNAL_NAV_MAP.get(href) ?? href;

export const SECTION_AUDIT = [
  {
    label: navLabel("/corso"),
    href: "/corso",
    status: "verified",
    summary:
      "Percorso strutturato in macro-capitoli su tavole di mortalità, riserve tecniche e finanza attuariale con esempi numerici e formule esplicitate.",
    metrics: [
      { label: "Macro-sezioni", value: `${corsoSections}` },
      { label: "Aree di focus", value: "Teoria · Riserve · Finanza" },
    ],
    sources: [
      {
        label: "Pagina Corso",
        href: "/corso",
        type: "internal",
        verified: true,
        description: "Contenuti pronti per lo studio guidato",
      },
    ],
  },
  {
    label: navLabel("/teoria"),
    href: "/teoria",
    status: "verified",
    summary:
      "Moduli didattici con badge di difficoltà e risorse esterne ufficiali per consolidare le basi attuariali.",
    metrics: [
      { label: "Moduli", value: `${THEORY_TOPICS.length}` },
      { label: "Argomenti coperti", value: `${theoryItemCount}` },
      { label: "Fonti esterne citate", value: `${theoryExternalSources}` },
    ],
    sources: [
      {
        label: "Pagina Teoria",
        href: "/teoria",
        type: "internal",
        verified: true,
        description: "Filtri per livello e badge accessibili",
      },
      {
        label: "Human Mortality Database",
        href: "https://www.mortality.org",
        type: "external",
        verified: true,
        description: "Fonte demografica utilizzata nei moduli base",
      },
    ],
  },
  {
    label: navLabel("/applicazioni"),
    href: "/applicazioni",
    status: "verified",
    summary:
      "Workflow replicabili per assicurazioni, previdenza, risk management e InsurTech con call to action verso case study e calcolatori.",
    metrics: [
      { label: "Aree applicative", value: `${APPLICATION_AREAS.length}` },
      { label: "Use case guidati", value: `${applicationCaseCount}` },
    ],
    sources: [
      {
        label: "Pagina Applicazioni",
        href: "/applicazioni",
        type: "internal",
        verified: true,
      },
      {
        label: "Calcolatore duration & convexity",
        href: "/calcolatori/duration-convexity",
        type: "internal",
        verified: true,
        description: "Link operativo citato nella sezione Assicurazioni vita",
      },
    ],
  },
  {
    label: navLabel("/casi"),
    href: "/casi",
    status: "verified",
    summary:
      "Raccolta di percorsi pratici con dataset e deliverable suggeriti per i principali ambiti attuariali.",
    metrics: [
      { label: "Case study pubblicati", value: `${CASE_STUDIES.length}` },
      { label: "Highlight medi", value: "3 per case" },
    ],
    sources: [
      {
        label: "Indice Case study",
        href: "/casi",
        type: "internal",
        verified: true,
      },
      {
        label: "Case study assicurazioni vita",
        href: "/casi/assicurazioni-vita",
        type: "internal",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/attuario"),
    href: "/attuario",
    status: "verified",
    summary:
      "Descrizione di ruoli professionali, competenze richieste e percorsi di crescita con fonti pubbliche citate.",
    metrics: [
      { label: "Ruoli descritti", value: `${attuarioRoles}` },
      { label: "Percorsi di crescita", value: `${attuarioPathways}` },
    ],
    sources: [
      {
        label: "Pagina Attuari",
        href: "/attuario",
        type: "internal",
        verified: true,
      },
      {
        label: "Ordine Nazionale degli Attuari",
        href: "https://www.ordineattuari.it",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/chi-siamo"),
    href: "/chi-siamo",
    status: "verified",
    summary:
      "Missione, impegni editoriali e percorsi per contribuire al progetto con call to action interne attive.",
    metrics: [
      { label: "Pilastri descritti", value: "4" },
      { label: "Modalità di contributo", value: "3" },
    ],
    sources: [
      {
        label: "Pagina Chi siamo",
        href: "/chi-siamo",
        type: "internal",
        verified: true,
      },
      {
        label: "Email di contatto",
        href: "mailto:info@attuario.eu",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/risorse"),
    href: "/risorse",
    status: "verified",
    summary:
      "Directory curata di fonti istituzionali, blog e community con note esplicative su ogni link.",
    metrics: [
      { label: "Categorie", value: `${RESOURCE_SECTIONS.length}` },
      { label: "Link documentati", value: `${risorseItemCount}` },
    ],
    sources: [
      {
        label: "Pagina Risorse",
        href: "/risorse",
        type: "internal",
        verified: true,
      },
      {
        label: "Human Mortality Database",
        href: "https://www.mortality.org",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/community"),
    href: "/community",
    status: "verified",
    summary:
      "Panoramica di canali e iniziative collaborative con calendario eventi e mentorship.",
    metrics: [
      { label: "Canali attivi", value: `${communityChannels}` },
      { label: "Iniziative ricorrenti", value: `${communityInitiatives}` },
    ],
    sources: [
      {
        label: "Pagina Community",
        href: "/community",
        type: "internal",
        verified: true,
      },
      {
        label: "Calendario eventi",
        href: "https://attuario.eu/community",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/wiki"),
    href: "/wiki",
    status: "verified",
    summary:
      "Glossario attuariale, sintesi normative e riferimenti bibliografici con card interattive.",
    metrics: [
      { label: "Paper citati", value: `${wikiReferenceCount}` },
      { label: "Sezioni normative", value: "4" },
    ],
    sources: [
      {
        label: "Pagina Wiki",
        href: "/wiki",
        type: "internal",
        verified: true,
      },
      {
        label: "Journal of Risk and Insurance",
        href: "https://onlinelibrary.wiley.com/journal/15396975",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/notizie"),
    href: "/notizie",
    status: "verified",
    summary:
      "Radar normativo con focus su regolamentazione, ricerca accademica, eventi e mercato del lavoro.",
    metrics: [
      { label: "Sezioni aggiornate", value: `${NEWS_UPDATES.length}` },
      { label: "Voci totali", value: `${newsEntryCount}` },
    ],
    sources: [
      {
        label: "Pagina Notizie",
        href: "/notizie",
        type: "internal",
        verified: true,
      },
      {
        label: "EIOPA",
        href: "https://www.eiopa.europa.eu",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/strumenti"),
    href: "/strumenti",
    status: "verified",
    summary:
      "Toolkit operativo con template Excel, script R/Python e dataset per esercitazioni attuariali.",
    metrics: [
      { label: "Categorie toolkit", value: `${TOOL_RESOURCES.length}` },
      { label: "Risorse descritte", value: `${toolResourceCount}` },
    ],
    sources: [
      {
        label: "Pagina Strumenti",
        href: "/strumenti",
        type: "internal",
        verified: true,
      },
      {
        label: "Repository lifelib",
        href: "https://github.com/lifelib-dev/lifelib",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/shop"),
    href: "/shop",
    status: "verified",
    summary:
      "Descrizione dei kit digitali disponibili con FAQ e flusso di richiesta manuale.",
    metrics: [
      { label: "Kit elencati", value: `${shopBundles}` },
      { label: "FAQ pubblicate", value: "3" },
    ],
    sources: [
      {
        label: "Pagina Shop",
        href: "/shop",
        type: "internal",
        verified: true,
      },
      {
        label: "Contatto shop@attuario.eu",
        href: "mailto:shop@attuario.eu",
        type: "external",
        verified: true,
      },
    ],
  },
  {
    label: navLabel("/blog"),
    href: "/blog",
    status: "verified",
    summary:
      "Editoriali e rubriche con riferimenti a standard IASB, EIOPA, IAIS e report di settore.",
    metrics: [
      { label: "Articoli descritti", value: `${blogPostsCount}` },
      { label: "Fonti istituzionali", value: "IASB · EIOPA · NGFS · IAIS" },
    ],
    sources: [
      {
        label: "Pagina Blog",
        href: "/blog",
        type: "internal",
        verified: true,
      },
      {
        label: "IASB",
        href: "https://www.ifrs.org",
        type: "external",
        verified: true,
      },
    ],
  },
];
