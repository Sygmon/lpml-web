import * as React from "react";
import { useRef, useState } from "react";
import {
    FaBars,
} from "react-icons/fa";
import styles from "../scss/Sidebar.module.scss";
import Link from "next/link";
import SearchBar from "./Search";
import {
    RiSearch2Line,
} from "react-icons/ri";

function MenuItem({ hide, href, children }) {
    return (
        <Link href={href}>
            <a href={href} className={styles.navlink} onClick={hide}>
                {children}
            </a>
        </Link>
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

export default function Topbar() {
    const checkbox = useRef(null);
    const [searchOpen, setSearchOpen] = useState(false);

    const hide = () => {
        setSearchOpen(false);
        checkbox.current.checked = false;
    }
    return (
        <>
            <input className={styles.drawer} id="drawer" type="checkbox" ref={checkbox} />
            <div className={styles.titlebar}>
                <DrawerButton/>
                <Link href="/">
                    <a href="/" className={styles.name} onClick={hide}>
                        ЛФМЛ
                    </a>
                </Link>
                <span className={`${styles.search} ${searchOpen ? styles.open :  styles.closed}`}>
                    <RiSearch2Line onClick={() => setSearchOpen(true)} />
                    <div className={searchOpen ? styles.open :  styles.closed}>
                        <SearchBar hide={hide} />
                    </div>
                </span>
                <MenuItem hide={hide} href="/info/about">
                    ліцей
                </MenuItem>
                <MenuItem hide={hide} href="/info/for-entrants">
                    вступ
                </MenuItem>
                <MenuItem hide={hide} href="/info/for-students">
                    для ліцеїстів
                </MenuItem>
                <MenuItem hide={hide} href="/info/public-info">
                    публічно
                </MenuItem>
            </div>
        </>
    )
}