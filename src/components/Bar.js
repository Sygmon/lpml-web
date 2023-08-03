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

function MenuDropdown({ title, children }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropdownbutton} onClick={() => setOpen(!open)}>
                {title}
                <svg
                    className={`${open ? styles.open : styles.closed} ${styles.dropdownicon}`}
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                        fill="currentColor"
                    />
                </svg>
            </button>
            <div className={`${styles.dropdowncontent} ${open ? styles.open : styles.closed}`}>
                {children}
            </div>
        </div>
    );
}

function DrawerButton() {
    return (
        <label htmlFor="drawer" className={styles.drawerlabel}>
            <FaBars className={`${styles.icon} ${styles.menubutton}`} />
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
    const toggleSearch = () => {
        // If screen size < 1000px, do nothing
        if (window.innerWidth < 1000) return;
        setSearchOpen(!searchOpen);
    }
    return (
        <>
            <input className={styles.drawer} id="drawer" type="checkbox" ref={checkbox} />
            <div className={styles.titlebar}>
                <DrawerButton />
                <Link href="/">
                    <a href="/" className={styles.name} onClick={hide}>
                        ЛФМЛ
                    </a>
                </Link>
                <span className={`${styles.search} ${searchOpen ? styles.open : styles.closed}`}>
                    <RiSearch2Line onClick={() => toggleSearch()} className={styles.searchbutton} />
                    <div className={searchOpen ? styles.open : styles.closed}>
                        <SearchBar hide={hide} />
                    </div>
                </span>
                <MenuItem hide={hide} href="/info/public-info">
                    публічно
                </MenuItem>
                <MenuDropdown title="ліцей">
                    <MenuItem hide={hide} href="/info/about">
                        про ліцей
                    </MenuItem>
                    <MenuItem hide={hide} href="/info/education">
                        якість
                    </MenuItem>
                    <MenuItem hide={hide} href="/info/staff">
                        колектив
                    </MenuItem>
                </MenuDropdown>
                <MenuDropdown title="для...">
                    <MenuItem hide={hide} href="/info/for-parents">
                        батьків
                    </MenuItem>
                    <MenuItem hide={hide} href="/info/for-students">
                        ліцеїстів
                    </MenuItem>
                    <MenuItem hide={hide} href="/info/for-grads">
                        випускників
                    </MenuItem>
                </MenuDropdown>
            </div>
        </>
    )
}
