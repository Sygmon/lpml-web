import "../scss/App.scss";
import "../index.scss";
import Menu from "../components/Bar";
import Footer from "../components/Footer";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: any;
}) {
  return (
    <div className="App">
      <div className="main">
        <Menu />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
