import React from "react";
import "../scss/App.scss";
import Menu from "./Bar.js";
import MainPage from "./MainPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App(){
    return (
        <div className="App">
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/info/:id" element={<div>Nothing to see here</div>}/>
                    <Route path="*" element={<MainPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

