import { ArticleLink } from "./Applet.js";
import styles from "../scss/news_page_news.module.scss";

function List({ articles }) {
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
