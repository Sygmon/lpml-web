import { ArticleLink } from "./Applet";
import styles from "../scss/news.module.scss";
import Link from "next/link";
import { ArticleCard } from "../lib/article";
import InfiniteScroll from "react-infinite-scroll-component";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    setArticles(initialArticles);
    setPage(0);
  }, [initialArticles]);

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
        <div className={styles.total}>
          {articles.map((article, index) => (
            <ArticleLink
              key={`${article}${index}`}
              href={article.href}
              title={article.title}
              date={article.date || undefined}
              description={article.description}
            />
          ))}
        </div>
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
  loadPage?: (
    page: number,
    startDate: number | null,
    endDate: number | null
  ) => Promise<{
    page: ArticleCard[];
    total: number;
    done: boolean;
  }>;
  total?: number;
  dedicated?: boolean;
}) {
  const [startDate, setStartDate] = useState<number | null>(null);
  const [endDate, setEndDate] = useState<number | null>(null);
  const [initialPage, setInitialPage] = useState(
    dedicated ? articles : articles.slice(0, 5)
  );
  const [initialTotal, setInitialTotal] = useState(total);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const loadFirstPage = async () => {
      if (!filtersOpen || (startDate === null && endDate === null)) {
        setInitialPage(dedicated ? articles : articles.slice(0, 5));
        return;
      }
      if (loadPage) {
        const newArticles = await loadPage(0, startDate, endDate);
        setInitialPage(newArticles.page);
        setInitialTotal(newArticles.total);
      }
    };
    loadFirstPage();
  }, [startDate, endDate, filtersOpen]);

  return (
    <div
      className={`${styles.news_grid} ${dedicated ? styles.shrink : ""}`}
      id="news_grid_applet"
    >
      {dedicated ? (
        <>
          <h1 className={styles.title}>Новини</h1>
          <div
            className={`${styles.filters} ${filtersOpen ? styles.open : ""}`}
          >
            <h2
              className={styles.filters_button}
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <input
                type="checkbox"
                checked={filtersOpen}
                onChange={() => setFiltersOpen(!filtersOpen)}
              />
              Фільтри
            </h2>
            <div className={styles.filters_content}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  label="Початкова дата"
                  onChange={(date) =>
                    setStartDate((date?.valueOf() as number) || null)
                  }
                />
                <DatePicker
                  label="Кінцева дата"
                  onChange={(date) =>
                    setEndDate((date?.valueOf() as number) || null)
                  }
                />
              </LocalizationProvider>
            </div>
          </div>
        </>
      ) : (
        <Link href="/news">
          <h2 className={styles.subtitle}>Стрічка новин</h2>
        </Link>
      )}
      {initialPage.length ||
      !filtersOpen ||
      (startDate != null && endDate != null) ? (
        <List
          articles={initialPage}
          loadPage={
            dedicated
              ? loadPage &&
                ((n) =>
                  loadPage(
                    n,
                    filtersOpen ? startDate : null,
                    filtersOpen ? endDate : null
                  ))
              : undefined
          }
          total={initialTotal}
        />
      ) : (
        <h4>Немає новин за вказаний період</h4>
      )}
      {dedicated ? null : (
        <Link href="/news">
          <a className={styles.more}>Більше новин &rarr;</a>
        </Link>
      )}
    </div>
  );
}
