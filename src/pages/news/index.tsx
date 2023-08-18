import React from "react";
import { getArticles } from "../../lib/articles";
import { Article, ArticleCard } from "../../lib/article";
import NewsList from "../../components/NewsList";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function App({
  articles,
}: {
  articles: (Article & { href: string })[];
}) {
  return (
    <>
      <Head>
        <title>ЛФМЛ - Новини</title>
        <meta
          name="description"
          content={
            `Новини ЛФМЛ: ${articles
              .map((article) => article.title)
              .join(", ")}`.slice(0, 152) + "..."
          }
        />
      </Head>
      <NewsList articles={articles} dedicated />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles: ArticleCard[] = getArticles("blog").map((article) => ({
    title: article.title,
    href: `/news/${article.id}`,
    cover: article.cover || null,
    date: article.date || null,
    description: article.description || null,
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

  return {
    props: {
      articles: articles,
    },
  };
};
