import React from "react";
import { getArticles } from "../lib/articles";
import MainPage from "../components/MainPage";
import { GetStaticProps } from "next";

export default function App({ articles }){
    return (
        <MainPage articles={articles} />
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let articles = [];
    const articlesRaw = getArticles("blog").sort((a, b) => a.date < b.date ? 1 : -1);
    for(var i = 0;i<11;i++) {
        articles.push(
            {
                title: articlesRaw[i] ? articlesRaw[i].title : null,
                href: `/articles/news/${articlesRaw[i] && articlesRaw[i].id}`,
                cover: articlesRaw[i] ? articlesRaw[i].cover : null
            }
        );
    };

  return {
    props: {
        articles: articles
    },
  };
};