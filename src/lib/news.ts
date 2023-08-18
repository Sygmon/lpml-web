import { getArticles } from "./articles";
import { z } from "zod";
import { ArticleCard, articleCardSchema } from "./article";

export function getNews(): ArticleCard[] {
  const articles = getArticles("blog").map((article) => ({
    title: article.title,
    href: `/news/${article.id}`,
    cover: article.cover || null,
    date: article.date || null,
    description: article.description,
  }));

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

export function getNewsPage(pageId: number): {
  page: ArticleCard[];
  total: number;
  done: boolean;
} {
  const articles = getNews();
  const page = articles.slice(pageId * 10, pageId * 10 + 10);
  return {
    page,
    total: articles.length,
    done: pageId * 10 + 10 >= articles.length,
  };
}

export async function fetchNewsPage(pageId: number): Promise<{
  page: ArticleCard[];
  total: number;
  done: boolean;
}> {
  const response = await fetch(`/api/news_list/${pageId}`).then((res) =>
    res.json()
  );
  return z
    .object({
      page: z.array(articleCardSchema),
      total: z.number(),
      done: z.boolean(),
    })
    .parse(response);
}
