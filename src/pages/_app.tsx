import "../scss/App.scss";
import "../index.scss";
import Menu from "../components/Bar.js";

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="App">
            <Menu />
            <Component {...pageProps} />
        </div>
    )
}