import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <meta
          name="keywords"
          content="львівський фізико математичний ліцей хіміко біологічний школа інтернат інформатика фізика математика хімія біологія"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div data-netlify-identity-menu></div>
      </body>
    </Html>
  );
}
