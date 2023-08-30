import "../scss/App.scss";
import "../index.scss";
import Menu from "../components/Bar";
import Footer from "../components/Footer";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps, ...appProps }: AppProps) {
  const ignoreLayout = [`/admin`].includes(appProps.router.pathname);

  return ignoreLayout ? (
    <Component {...pageProps} />
  ) : (
    <div className="App">
      <div className="main">
        <Menu />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
