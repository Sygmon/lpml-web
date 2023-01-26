import React, { useRef } from "react";
import { getArticles } from "../lib/articles";
import MainPage from "../components/MainPage";
import NewsPage from "../components/NewsPage";
import { GetStaticProps } from "next";
import Head from 'next/head'

export default function App({ articles }){
    const scroll = useRef(null);

    return (
        <>
            <Head>
                <title>Lviv Physics and Maths Lyceum</title>
            </Head>
            <MainPage scrollRef={scroll} />
            <NewsPage articles={articles} scrollRef={scroll} />
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let articles = [];
    const articlesRaw = getArticles("blog").sort((a, b) => a.date < b.date ? -1 : 1);
    for(var i = 0;i<11;i++) {
        articles.push(
            {
                title: articlesRaw[i] ? articlesRaw[i].title : null,
                href: `/news/${articlesRaw[i] && articlesRaw[i].id}`,
                cover: (articlesRaw[i] && articlesRaw[i].cover != undefined) ? articlesRaw[i].cover : `https://picsum.photos/${400 + Math.floor(Math.random() * 100) + 1 }`
            }
        );
    };

  return {
    props: {
        articles: articles,
    },
  };
};
