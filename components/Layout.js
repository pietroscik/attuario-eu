import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

const BASE_TITLE = "attuario.eu";

export default function Layout({
  title,
  eyebrow,
  intro,
  metaDescription,
  hideHeader = false,
  width = "default",
  children,
}) {
  const hasCustomTitle = title && title.trim().toLowerCase() !== BASE_TITLE;
  const pageTitle = hasCustomTitle ? `${title} · ${BASE_TITLE}` : BASE_TITLE;
  const description = metaDescription ?? intro;
  const mainClassName = width === "narrow" ? "layout-main layout-main--narrow" : "layout-main";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <meta property="og:title" content={pageTitle} />
        {description && <meta property="og:description" content={description} />}
      </Head>
      <div className="layout">
        <Nav />
        <main className={mainClassName}>
          {!hideHeader && title && (
            <header className="page-header">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              <h1 id="page-title">{title}</h1>
              {intro && <p className="lead">{intro}</p>}
            </header>
          )}
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
