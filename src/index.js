import * as React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./scss/App.scss";
import App from "./components/App.js";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
