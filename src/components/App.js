import React from "react";
import "../scss/App.scss";
import Menu from "./Bar.js";
import MainPage from "./MainPage.js";
import Article from "./Article.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App(){
    return (
        <>
        <div className="App">
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/info/:id" element={<Article group="info"/>}/>
                    <Route path="/articles/news/:id" element={<Article group="news"/>}/>
                    <Route path="/articles/:id" element={<Article group="articles"/>}/>
                     { /* TODO: MAke a proper 404 page*/ }
                    <Route path="/*" element={<MainPage/>}/>
                </Routes>
            </Router>
        </div>
        </>
    )
}

