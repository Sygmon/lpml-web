import {
  Routes,
  Route
} from "react-router-dom";
import './scss/App.scss';
import { FaSun, FaMoon } from 'react-icons/fa';
import TopBar from './components/TopBar.js';
import Menu from './components/Bar.js';
import MainPage from './components/MainPage.js';
import React, { useState, useEffect } from "react";

function App() {

  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
	const root = document.documentElement;
	root?.style.setProperty(
		"--background",
		darkTheme ? "#2e3440" : "#d8dee9"
	);
	root?.style.setProperty(
		"--foreground",
		darkTheme ? "#d8dee9" : "#2e3440"
	);
	root?.style.setProperty(
		"--menu-bg",
		darkTheme ? "#4c566a" : "#eceff4"
	);
  }, [darkTheme]);

  return (
	<div className="App">
		<Menu 
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
