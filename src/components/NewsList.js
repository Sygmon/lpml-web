import { ArticleLink } from "./Applet";
import styles from "../scss/news.module.scss";
import Link from "next/link";

export function List({ articles }) {
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

export default function NewsList({ articles, dedicated = false }) {
  return (
    <div
      className={`${styles.news_grid} ${dedicated ? styles.shrink : ""}`}
      id="news_grid_applet"
    >
      {dedicated ? (
        <h1 className={styles.title}>Новини</h1>
      ) : (
        <Link href="/news">
          <h2 className={styles.subtitle}>Стрічка новин</h2>
        </Link>
      )}
      <List articles={dedicated ? articles : articles.slice(0, 5)} />
      {dedicated ? null : (
        <Link href="/news">
          <a className={styles.more}>Більше новин &rarr;</a>
        </Link>
      )}
    </div>
  );
}
