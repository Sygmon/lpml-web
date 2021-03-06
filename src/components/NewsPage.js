import Applet from "./Applet.js";
import styles from "../scss/main_page_news.module.scss";

export default function NewsPage({ articles }) {
    return (
        <div className={styles.news} id="articles_grid_applet">
            <h1 className={styles.title}>
                News and events
            </h1>
            <Applet link="tmp" articles={articles} />
            <div className={styles.padder} />
        </div>
    );
}
