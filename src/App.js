import {
  Routes,
  Route
} from "react-router-dom";
import './App.scss';
import { FaSun, FaMoon } from 'react-icons/fa';
import TopBar from './TopBar.js';
import MainPage from './MainPage.js';
import React, { useState, useEffect } from "react";

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
	const root = document.documentElement;
	root?.style.setProperty(
		"--background",
		darkTheme ? "#1d2a31" : "#d4be98"
	);
	root?.style.setProperty(
		"--foreground",
		darkTheme ? "#deb498" : "#1d2a31"
	);
	root?.style.setProperty(
		"--top-bar",
		darkTheme ? "#1d2a31" : "#d4be98"
	);
	root?.style.setProperty(
		"--trans",
		darkTheme ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.5)"
	);
  }, [darkTheme]);

  return (
	<div className="App">
		<TopBar 
		    themeSwitcher={() => setDarkTheme(!darkTheme)}
		    text={darkTheme ? <FaSun/> : <FaMoon/>}
		  />
		<Routes>
			<Route exact path="/" element={<MainPage />}/>
		</Routes>
	</div>
  );
}

export default App;
