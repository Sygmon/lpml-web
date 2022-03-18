import React from "react";
import "../scss/App.scss";
import Menu from "./Bar.js";
import MainPage from "./MainPage.js";

export default function App(){
    return (
        <div className="App">
            <Menu />
            <MainPage />
        </div>
    )
}

