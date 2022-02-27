import * as React from "react";
import "../index.scss";
import "../scss/App.scss";
import App from "../components/App.js";
import { BrowserRouter as Router } from "react-router-dom";

export default function IndexPage() {
    return (
        <Router>
            <App />
        </Router>
    )
}
