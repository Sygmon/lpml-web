import { Link } from "react-router-dom";
import {
    FaBars,
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

import { Switcher } from "./Themeswitcher.js";

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
        <li className="menu-item">
            <Link className="menu-link" to={props.to}>
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
	    <li className="menu-item">
			<div className="li-container">
	            <label for="drawer" className="drawer-label">
	                <FaBars className="icon menu-button"/>
	            </label>
			</div>
	    </li>

	)
}

function Menu(props) {
    return (
        <>
            <nav className="navbar">
				<input id="drawer" type="checkbox"/>
                <ul className="links">
				    <DrawerButton/>
                    <SearchBar />
                    <MenuItem to="/about" icon={<FaPlus className="icon" />}>
                        About
                    </MenuItem>
                    <MenuItem
                        to="/community"
                        icon={<FaComments className="icon" />}
                    >
                        Community
                    </MenuItem>
                    <MenuItem
                        to="/education"
                        icon={<FaBook className="icon" />}
                    >
                        Education quality
                    </MenuItem>
                    <MenuItem
                        to="/for-students"
                        icon={<FaPlus className="icon" />}
                    >
                        For students
                    </MenuItem>
                    <MenuItem
                        to="/for-entrants"
                        icon={<FaLeanpub className="icon" />}
                    >
                        For entrants
                    </MenuItem>
                    <MenuItem
                        to="/for-parents"
                        icon={<FaInfo className="icon" />}
                    >
                        For parents
                    </MenuItem>
                    <MenuItem
                        to="/public-info"
                        icon={<FaInfoCircle className="icon" />}
                    >
                        Public info
                    </MenuItem>
                    <MenuItem
                        to="/for-grads"
                        icon={<FaGraduationCap className="icon" />}
                    >
                        For graduates
                    </MenuItem>
                    <li className="bottom">
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
/*
 */

export default Menu;
