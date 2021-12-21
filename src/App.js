import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Menu from "./components/Bar.js";
import MainPage from "./components/MainPage.js";
import React from "react";

function App() {
    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route exact path="/" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;
