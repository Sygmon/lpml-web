import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <meta
          name="keywords"
          content="львівський фізико математичний ліцей хіміко біологічний школа інтернат інформатика фізика математика хімія біологія"
        />
        <script
          async
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        />
      </Head>
      <body>
        <NextScript />
        <Main />
      </body>
    </Html>
  );
}
