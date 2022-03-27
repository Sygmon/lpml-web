import * as React from "react";
import {
    FaBars,
    FaHome,
    FaPlus,
    FaComments,
    FaBook,
    FaLeanpub,
    FaInfo,
    FaInfoCircle,
    FaGraduationCap,
    FaSearch,
} from "react-icons/fa";
import "../scss/App.scss";
import "../scss/Sidebar.scss";
import { Link } from "react-router-dom";

import Switcher from "./Themeswitcher.js";

function SearchBar(props) {
    // Gonna separate the input into another file
    // TODO: move this to a proper component library
    return (
        <div className="search">
            <input type="search" />
            <FaSearch className="icon" />
        </div>
    );
}

function MenuItem(props) {
    return (
        <li key={props.href} className="menu-item">
            <Link className="menu-link" to={`${props.href}`}>
                <div className="li-container">
                    {props.icon}
                    <div className="text">{props.children}</div>
                </div>
            </Link>
        </li>
    );
}

function DrawerButton() {
    return (
	    <li key="drawer-icon" className="menu-item">
			<div className="li-container">
	            <label htmlFor="drawer" className="drawer-label">
	                <FaBars className="icon menu-button"/>
	            </label>
			</div>
	    </li>

	)
}

export { SearchBar, MenuItem, DrawerButton };

export default function Menu(props) {
    return (
        <>
            <nav className="navbar">
				<input id="drawer" type="checkbox"/>
                <ul className="links">
				    <DrawerButton/>
                    <SearchBar />
                    <MenuItem href="/" icon={<FaHome className="icon" />}>
                        Home
                    </MenuItem>
                    <MenuItem href="/info/about" icon={<FaPlus className="icon" />}>
                        About
                    </MenuItem>
                    <MenuItem
                        href="/info/community"
                        icon={<FaComments className="icon" />}
                    >
                        Community
                    </MenuItem>
                    <MenuItem
                        href="/info/education"
                        icon={<FaBook className="icon" />}
                    >
                        Education quality
                    </MenuItem>
                    <MenuItem
                        href="/info/for-students"
                        icon={<FaPlus className="icon" />}
                    >
                        For students
                    </MenuItem>
                    <MenuItem
                        href="/info/for-entrants"
                        icon={<FaLeanpub className="icon" />}
                    >
                        For entrants
                    </MenuItem>
                    <MenuItem
                        href="/info/for-parents"
                        icon={<FaInfo className="icon" />}
                    >
                        For parents
                    </MenuItem>
                    <MenuItem
                        href="/info/public-info"
                        icon={<FaInfoCircle className="icon" />}
                    >
                        Public info
                    </MenuItem>
                    <MenuItem
                        href="/info/for-grads"
                        icon={<FaGraduationCap className="icon" />}
                    >
                        For graduates
                    </MenuItem>
                    <li key="home-icon" className="bottom">
                        <button className="menu-button text">
                            <Switcher />
                        </button>
						{/*TODO: somebody please make this link a menu item
						 with the LPML icon. I don't wanna */}
                        <Link to="/">
                            Gimme the god forsaken svg already (home)
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
