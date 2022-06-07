import * as React from "react";
import styles from "../scss/main.module.scss";

export default function MainPage() {
    return (
        <>
            <div className={styles.main}>
                <span class={styles.heading}>
                    Lviv Physics and Maths Liceum
                </span>
                <div class={styles.corner_nav}>
                    <span class={styles.nav_button}>
                        <span class={styles.nav_button_text}>
                            About
                        </span>
                    </span>
                    <span class={styles.nav_button}>
                        <span class={styles.nav_button_text}>
                            For entrants
                        </span>
                    </span>
                    <span class={styles.nav_button}>
                        <span class={styles.nav_button_text}>
                            News
                        </span>
                    </span>
                </div>
            </div>
        </>
    );
}
