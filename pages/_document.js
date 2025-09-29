import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const isAmp = this.props.__NEXT_DATA__?.isAmp;

    return (
      <Html lang="it">
        <Head>
          <meta
            name="google-adsense-account"
            content="ca-pub-8531177897035530"
          />
          {!isAmp && (
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8531177897035530"
              crossOrigin="anonymous"
            ></script>
          )}
          {isAmp && (
            <script
              async
              custom-element="amp-auto-ads"
              src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
            ></script>
          )}
        </Head>
        <body>
          {isAmp && (
            <amp-auto-ads
              type="adsense"
              data-ad-client="ca-pub-8531177897035530"
            ></amp-auto-ads>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
