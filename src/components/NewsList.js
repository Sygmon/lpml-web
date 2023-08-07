import { ArticleLink } from "./Applet.js";
import styles from "../scss/news_page_news.module.scss";

function List({ articles }) {
    // Sort articles by date(in dd.mm.yyyy format)
    articles.sort((a, b) => {
        // If null:
        if (!a.date) {
            return 1;
        }
        if (!b.date) {
            return -1;
        }
        const aDate = a.date.split(".");
        const bDate = b.date.split(".");
        const aDateObj = new Date(aDate[2], aDate[1], aDate[0]);
        const bDateObj = new Date(bDate[2], bDate[1], bDate[0]);
        return bDateObj - aDateObj;
    });
    return (
        <div className={styles.news}>
            {articles.map((article, index) => (
                <ArticleLink
                    key={`${article}${index}`}
                    href={article.href}
                    title={article.title}
                    date={article.date}
                    description={article.description}
                />
            ))}
        </div>
    );
}

export default function NewsList({ articles, scrollRef }) {
    return (
        <div className={styles.news_grid} id="news_grid_applet" ref={scrollRef}>
            <h1 className={styles.title}>
                Новини
            </h1>
            <List articles={articles} />
        </div>
    );
}
