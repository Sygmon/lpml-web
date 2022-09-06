import * as React from "react";
import styles from "../scss/main.module.scss";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

export default function MainPage({scrollRef}) {
    return (
        <>
            <div className={styles.main}>
                <span className={styles.heading}>
                    Lviv Physics and Maths Liceum
                </span>
                <div className={styles.corner_nav}>
                    <span className={styles.nav_button}>
                        <Link href="/info/about">
                            <a href="/info/about" className={styles.nav_button_text}>
                                About
                            </a>
                        </Link>
                    </span>
                    <span className={styles.nav_button}>
                        <Link href="/info/for-entrants">
                            <a href="/info/for-entrants" className={styles.nav_button_text}>
                                For entrants
                            </a>
                        </Link>
                    </span>
                    <span className={styles.nav_button}>
                        <a href="#articles_grid_applet" className={styles.nav_button_text} onClick={evt => {scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); evt.preventDefault();}}>
                            News
                        </a>
                    </span>
                </div>
                <div className={styles.logo}>
                    <img src="/logo.svg" alt="LPML logo" />
                </div>
                <div className={styles.scrolldown}>
                    <a className={styles.scrolldown_text} onClick={evt => {scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); evt.preventDefault();}} href="#articles_grid_applet">
                        <RiArrowDownSLine />
                    </a>
                </div>
            </div>
        </>
    );
}
