import * as React from "react";
import { useRef } from "react";
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
} from "react-icons/fa";
import styles from "../scss/Sidebar.module.scss";
import Link from "next/link";
import SearchBar from "./Search";
import {
    RiSearch2Line,
} from "react-icons/ri";

import Switcher from "./Themeswitcher.js";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

function MenuItem(props) {
    return (
        <li key={props.href} className={styles.menuitem} onClick={() => {props.hider.current.checked = false}}>
            <Link href={props.href}>
                <a href={props.href} className={styles.menulink}>
                    <div className={styles.licontainer}>
                        {props.icon}
                        <div className={styles.text}>{props.children}</div>
                    </div>
                </a>
            </Link>
        </li>
    );
}

function DrawerButton() {
    return (
        <label htmlFor="drawer" className={styles.drawerlabel}>
            <FaBars className={`${styles.icon} ${styles.menubutton}`}/>
        </label>

	)
}

export { SearchBar, MenuItem, DrawerButton };

function Menu(props) {
    const checkbox = useRef(null);
    return (
        <>
            <nav className={styles.navbar}>
				<input className={styles.drawer} id="drawer" type="checkbox" ref={checkbox} />
                <div className={styles.navbar_content}>
                    <DrawerButton/>
                    <ul className={styles.links}>
                        <SearchBar hider={checkbox} />
                        <MenuItem href="/" icon={<FaHome className={styles.icon} />} hider={checkbox}>
                            Home
                        </MenuItem>
                        <MenuItem href="/info/about" icon={<FaPlus className={styles.icon} />} hider={checkbox}>
                            About
                        </MenuItem>
                        <MenuItem
                            href="/info/community"
                            icon={<FaComments className={styles.icon} />}
                            hider={checkbox}
                        >
                            Community
                        </MenuItem>
                        <MenuItem
                            href="/info/education"
                            icon={<FaBook className={styles.icon} />}
                            hider={checkbox}
                        >
                            Education quality
                        </MenuItem>
                        <MenuItem
                            href="/info/for-students"
                            icon={<FaPlus className={styles.icon} />}
                            hider={checkbox}
                        >
                            For students
                        </MenuItem>
                        <MenuItem
                            href="/info/for-entrants"
                            icon={<FaLeanpub className={styles.icon} />}
                            hider={checkbox}
                        >
                            For entrants
                        </MenuItem>
                        <MenuItem
                            href="/info/for-parents"
                            icon={<FaInfo className={styles.icon} />}
                            hider={checkbox}
                        >
                            For parents
                        </MenuItem>
                        <MenuItem
                            href="/info/public-info"
                            icon={<FaInfoCircle className={styles.icon} />}
                            hider={checkbox}
                        >
                            Public info
                        </MenuItem>
                        <MenuItem
                            href="/info/for-grads"
                            icon={<FaGraduationCap className={styles.icon} />}
                            hider={checkbox}
                        >
                            For graduates
                        </MenuItem>
                        <MenuItem
                        href="/"
                        icon={<img className={styles.logo} src="/logo.svg" alt="LPML logo"/>}
                        hider={checkbox}
                        >
                        Home
                        </MenuItem>
                        <li key="home-icon" className={styles.bottom}>
                            <button className={`${styles.menubutton} ${styles.text}`}>
                                <Switcher />
                            </button>
                            {/*TODO: somebody please make this link a menu item
                            with the LPML icon. I don't wanna */}
                            {/* <Link href="/">
                                <img className={styles.logo} src="/logo.svg" alt="LPML logo" />
                            </Link> */}
                        
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default function Topbar() {
    return (
        <div className={styles.titlebar}>
            <Link href="/">
                <a href="/" className={styles.name}>
                    ЛФМЛ
                </a>
            </Link>
            <span className={styles.search}>
                <RiSearch2Line />
            </span>
            <Link href="/info/about">
                <a href="/info/about" className={styles.navlink}>
                    ліцей
                </a>
            </Link>
            <Link href="/info/for-entrants">
                <a href="/info/for-entrants" className={styles.navlink}>
                    вступ
                </a>
            </Link>
            <Link href="/info/for-students">
                <a href="/info/for-students" className={styles.navlink}>
                    для ліцеїстів
                </a>
            </Link>
            <Link href="/info/public-info">
                <a href="/info/public-info" className={styles.navlink}>
                    публічно
                </a>
            </Link>
        </div>
    )
}