import { ArticleLink } from "./Applet.js";
import styles from "../scss/news_page_news.module.scss";

function Grid({ articles }) {
    return (
        <div className={styles.news}>
            {articles.map((article, index) => (
                <ArticleLink
                    key={`${article}${index}`}
                    href={article.href}
                    title={article.title}
                    img={article.cover}
                />
            ))}
        </div>
    );
}

export default function NewsGrid({ articles, scrollRef }) {
    return (
        <div className={styles.news_grid} id="news_grid_applet" ref={scrollRef}>
            <h1 className={styles.title}>
                Новини
            </h1>
            <Grid link="tmp" articles={articles} />
        </div>
    );
}
