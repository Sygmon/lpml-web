import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "../scss/App.scss";
import Menu from "./Bar.js";
import MainPage from "./MainPage.js";

export default function App(){
    return (
        <div className="App">
            <Menu />
            <Routes>
                <Route exact path="/" element={<MainPage />} />
            </Routes>
        </div>
    )
}

