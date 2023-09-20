import { getArticles } from "./articles";
import { z } from "zod";
import { ArticleCard, articleCardSchema } from "./article";

export function getNews(
  startDate?: number | null,
  endDate?: number | null
): ArticleCard[] {
  const articles = getArticles("blog")
    .map((article) => ({
      title: article.title,
      href: `/news/${article.id}`,
      cover: article.cover || null,
      date: article.date || null,
      description: article.description,
    }))
    .filter((article) => {
      if (startDate && article.date) {
        const articleDate = article.date.split(".");
        const articleTimestamp = new Date(
          parseInt(articleDate[2]),
          parseInt(articleDate[1]) - 1,
          parseInt(articleDate[0])
        ).getTime();
        if (articleTimestamp < startDate) {
          return false;
        }
      }
      if (endDate && article.date) {
        const articleDate = article.date.split(".");
        const articleTimestamp = new Date(
          parseInt(articleDate[2]),
          parseInt(articleDate[1]) - 1,
          parseInt(articleDate[0])
        ).getTime();
        if (articleTimestamp > endDate) {
          return false;
        }
      }
      return true;
    });

  // Sort by dd.mm.yyyy
  articles.sort((a, b) => {
    // If null:
    if (!a.date) {
      return 1;
    }
    if (!b.date) {
      return -1;
    }
    // If not null:
    const aDate = a.date.split(".");
    const bDate = b.date.split(".");
    if (aDate[2] < bDate[2]) {
      return 1;
    }
    if (aDate[2] > bDate[2]) {
      return -1;
    }
    if (aDate[1] < bDate[1]) {
      return 1;
    }
    if (aDate[1] > bDate[1]) {
      return -1;
    }
    if (aDate[0] < bDate[0]) {
      return 1;
    }
    if (aDate[0] > bDate[0]) {
      return -1;
    }
    return 0;
  });

  return articles;
}

export function getNewsPage(
  pageId: number,
  startDate?: number | null,
  endDate?: number | null
): {
  page: ArticleCard[];
  total: number;
  done: boolean;
} {
  const articles = getNews(startDate, endDate);
  const page = articles.slice(pageId * 10, pageId * 10 + 10);
  return {
    page,
    total: articles.length,
    done: pageId * 10 + 10 >= articles.length,
  };
}

export async function fetchNewsPage(
  pageId: number,
  startDate?: number | null,
  endDate?: number | null
): Promise<{
  page: ArticleCard[];
  total: number;
  done: boolean;
}> {
  const response = await fetch(
    `/api/news_list/${pageId}?${new URLSearchParams({
      startDate: startDate ? startDate.toString() : "",
      endDate: endDate ? endDate.toString() : "",
    })}`
  ).then((res) => res.json());
  return z
    .object({
      page: z.array(articleCardSchema),
      total: z.number(),
      done: z.boolean(),
    })
    .parse(response);
}
