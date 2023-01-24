import "../scss/App.scss";
import "../index.scss";
import Menu from "../components/Bar.js";


function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function MyApp({ Component, pageProps }) {
    return (
        <SafeHydrate>
            <div className="App">
                <Menu />
                <Component {...pageProps} />
            </div>
        </SafeHydrate>
    )
}
