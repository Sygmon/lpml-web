import { Link } from "react-router-dom";
import {
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
                    <span className="text">{props.children}</span>
                </div>
            </Link>
        </li>
    );
}

function Menu(props) {
    return (
        <>
            <nav className="navbar">
                <ul className="links">
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
                        <button className="menu-button">
                            <Switcher />
                        </button>
                        <Link to="/" className="bottom">
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
