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
import styles from "../scss/Sidebar.module.scss";
import Link from "next/link";

import Switcher from "./Themeswitcher.js";

function SearchBar(props) {
    // Gonna separate the input into another file
    // TODO: move this to a proper component library
    return (
        <div className={styles.search}>
            <input type="search" />
            <FaSearch className={styles.icon} />
        </div>
    );
}

function MenuItem(props) {
    return (
        <li key={props.href} className={styles.menuitem}>
            <Link href={props.href}>
                <span  className={styles.menulink}>
                    <div className={styles.licontainer}>
                        {props.icon}
                        <div className={styles.text}>{props.children}</div>
                    </div>
                </span>
            </Link>
        </li>
    );
}

function DrawerButton() {
    return (
	    <li key="drawer-icon" className={styles.menuitem}>
			<div className={styles.licontainer}>
	            <label htmlFor="drawer" className={styles.drawerlabel}>
	                <FaBars className={`${styles.icon} ${styles.menubutton}`}/>
	            </label>
			</div>
	    </li>

	)
}

export { SearchBar, MenuItem, DrawerButton };

export default function Menu(props) {
    return (
        <>
            <nav className={styles.navbar}>
				<input className={styles.drawer} id="drawer" type="checkbox"/>
                <ul className={styles.links}>
				    <DrawerButton/>
                    <SearchBar />
                    <MenuItem href="/" icon={<FaHome className={styles.icon} />}>
                        Home
                    </MenuItem>
                    <MenuItem href="/info/about" icon={<FaPlus className={styles.icon} />}>
                        About
                    </MenuItem>
                    <MenuItem
                        href="/info/community"
                        icon={<FaComments className={styles.icon} />}
                    >
                        Community
                    </MenuItem>
                    <MenuItem
                        href="/info/education"
                        icon={<FaBook className={styles.icon} />}
                    >
                        Education quality
                    </MenuItem>
                    <MenuItem
                        href="/info/for-students"
                        icon={<FaPlus className={styles.icon} />}
                    >
                        For students
                    </MenuItem>
                    <MenuItem
                        href="/info/for-entrants"
                        icon={<FaLeanpub className={styles.icon} />}
                    >
                        For entrants
                    </MenuItem>
                    <MenuItem
                        href="/info/for-parents"
                        icon={<FaInfo className={styles.icon} />}
                    >
                        For parents
                    </MenuItem>
                    <MenuItem
                        href="/info/public-info"
                        icon={<FaInfoCircle className={styles.icon} />}
                    >
                        Public info
                    </MenuItem>
                    <MenuItem
                        href="/info/for-grads"
                        icon={<FaGraduationCap className={styles.icon} />}
                    >
                        For graduates
                    </MenuItem>
                    <li key="home-icon" className={styles.bottom}>
                        <button className={`${styles.menubutton} ${styles.text}`}>
                            <Switcher />
                        </button>
						{/*TODO: somebody please make this link a menu item
						 with the LPML icon. I don't wanna */}
                        <Link href="/">
                            Gimme the god forsaken svg already (home)
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
