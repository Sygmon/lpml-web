import { ArticleLink } from "./Applet";
import styles from "../scss/news.module.scss";
import Link from "next/link";
import { ArticleCard } from "../lib/article";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

export function List({
  articles: initialArticles,
  loadPage,
  total,
}: {
  articles: (ArticleCard | ArticleCard)[];
  loadPage?: (page: number) => Promise<{
    page: (ArticleCard | ArticleCard)[];
    total: number;
    done: boolean;
  }>;
  total?: number;
}) {
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(loadPage !== undefined);
  const [articles, setArticles] = useState(initialArticles);
  return (
    <div className={styles.news}>
      <InfiniteScroll
        dataLength={articles.length}
        next={async () => {
          if (loadPage) {
            const newArticles = await loadPage(page + 1);
            setArticles([...articles, ...newArticles.page]);
            setPage(page + 1);
            setHasMore(!newArticles.done);
          }
        }}
        hasMore={hasMore}
        loader={<h4>Завантаження...</h4>}
      >
        {articles.map((article, index) => (
          <ArticleLink
            key={`${article}${index}`}
            href={article.href}
            title={article.title}
            date={article.date || undefined}
            description={article.description}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default function NewsList({
  articles,
  loadPage,
  total,
  dedicated = false,
}: {
  articles: ArticleCard[];
  loadPage?: (page: number) => Promise<{
    page: ArticleCard[];
    total: number;
    done: boolean;
  }>;
  total?: number;
  dedicated?: boolean;
}) {
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
      <List
        articles={dedicated ? articles : articles.slice(0, 5)}
        loadPage={dedicated ? loadPage : undefined}
        total={total}
      />
      {dedicated ? null : (
        <Link href="/news">
          <a className={styles.more}>Більше новин &rarr;</a>
        </Link>
      )}
    </div>
  );
}
