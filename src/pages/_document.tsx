import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div data-netlify-identity-menu></div>
      </body>
    </Html>
  );
}
