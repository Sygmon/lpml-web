import React, { useState, useEffect } from "react";
import { themes } from "./themes.js";
import { FaBrush } from "react-icons/fa";
import "../scss/Themeswitcher.scss";

export function Switcher(props) {
    const [gtheme, setTheme] = useState(0);

    const selectTheme = (theme) => {
        setTheme(theme);
        localStorage.setItem("theme", JSON.stringify(theme));

        const root = document.documentElement;
        const current = themes[theme];
        const vars = {
            background: "background",
            foreground: "foreground",
            menu: "menu-bg",
            highlight: "highlight",
        };

        for (let [name, value] of Object.entries(current.style)) {
            console.log(`--${vars[name]}`, value);
            root?.style.setProperty(`--${vars[name]}`, value);
        }
    };

    useEffect(() => {
        const previous = localStorage.getItem("theme");
        selectTheme(previous ? JSON.parse(previous) : 0);
    });

    return (
        <div className="theme-switcher">
            <div className="current">
                <FaBrush />
            </div>
            <div className="dropdown">
                <ul className="options">
                    {themes.map((theme, index) => (
                        <li
                            className={gtheme === index ? "themeOption selected" : "themeOption"}
                            onClick={() => selectTheme(index)}
                        >
                            {theme.icon}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
