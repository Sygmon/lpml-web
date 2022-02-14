import * as React from "react";
import { FaSun, FaMoon, FaBook } from "react-icons/fa";

const themes = [
    {
        name: "default",
        icon: <FaBook />,
        style: {
            background: "#E5E5E5",
            foreground: "#415243",
            menu: "#93A38A",
            highlight: "#A3BE8C",
        },
    },
    {
        name: "dark",
        icon: <FaMoon />,
        style: {
            background: "#2e3440",
            foreground: "#d8dee9",
            menu: "#4c566a",
            highlight: "#A3BE8C",
        },
    },
    {
        name: "light",
        icon: <FaSun />,
        style: {
            background: "#d8dee9",
            foreground: "#2e3440",
            menu: "#eceff4",
            highlight: "#A3BE8C",
        },
    },
];

export default themes;
