import * as React from "react";
import styles from "../scss/main.module.scss";
import Link from "next/link";

export default function MainPage({}) {
    return (
        <>
            <div className={styles.main}>
                <span class={styles.heading}>
                    Lviv Physics and Maths Liceum
                </span>
                <div class={styles.corner_nav}>
                    <span class={styles.nav_button}>
                        <Link href="/info/about">
                            <span class={styles.nav_button_text}>
                                About
                            </span>
                        </Link>
                    </span>
                    <span class={styles.nav_button}>
                        <Link href="/info/for-entrants">
                            <span class={styles.nav_button_text}>
                                For entrants
                            </span>
                        </Link>
                    </span>
                    <span class={styles.nav_button}>
                        <Link href="#articles_grid_applet" scroll={true}>
                            <span class={styles.nav_button_text}>
                                News
                            </span>
                        </Link>
                    </span>
                </div>
                <div class={styles.logo}>
                    <img src="/logo.svg" alt="LPML logo" />
                </div>
            </div>
        </>
    );
}
