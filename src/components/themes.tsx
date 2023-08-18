import * as React from "react";
import { FaSun, FaMoon, FaBook } from "react-icons/fa";

export interface Theme {
  name: string;
  icon: JSX.Element;
  style: {
    background: string;
    foreground: string;
    menu: string;
    highlight: string;
    secondary: string;
  };
}

const themes: Theme[] = [
  {
    name: "default",
    icon: <FaBook />,
    style: {
      background: "#FFFFFF",
      foreground: "#000000",
      menu: "#93A38A",
      highlight: "#813405",
      secondary: "#17480F",
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
      secondary: "#e5e9f0",
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
      secondary: "#3b4252",
    },
  },
];

export default themes;
