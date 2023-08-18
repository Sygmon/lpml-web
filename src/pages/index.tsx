import React from "react";
import MainPage from "../components/MainPage";
import { GetStaticProps } from "next";
import Head from "next/head";
import NewsList from "../components/NewsList";
import { getNews } from "../lib/news";
import { ArticleCard } from "../lib/article";

export default function App({ articles }: { articles: ArticleCard[] }) {
  return (
    <>
      <Head>
        <title>Львівський фізико-математичний ліцей</title>
        <meta
          name="description"
          content="Офіційний сайт Львівського фізико-математичного ліцею-інтернату при Львівському національному університеті імені Івана Франка"
        />
      </Head>
      <MainPage />
      <NewsList articles={articles} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      articles: getNews().slice(0, 5),
    },
  };
};
