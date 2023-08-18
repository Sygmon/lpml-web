import React from "react";
import { fetchNewsPage, getNewsPage } from "../../lib/news";
import { ArticleCard } from "../../lib/article";
import NewsList from "../../components/NewsList";
import { GetStaticProps } from "next";
import Head from "next/head";

type Props = {
  articles: ArticleCard[];
  total: number;
};

export default function App({ articles, total }: Props) {
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
      <NewsList
        articles={articles}
        loadPage={fetchNewsPage}
        total={total}
        dedicated
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: Props;
}> => {
  const page = getNewsPage(0);
  return {
    props: {
      articles: page.page,
      total: page.total,
    },
  };
};
