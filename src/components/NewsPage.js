import Applet from "./Applet.js";
import styles from "../scss/main_page_news.module.scss";

export default function NewsPage({ articles, scrollRef }) {
    return (
        <div className={styles.news} id="articles_grid_applet" ref={scrollRef}>
            <h1 className={styles.title}>
                Стрічка новин
            </h1>
            <Applet link="tmp" articles={articles} />
        </div>
    );
}
