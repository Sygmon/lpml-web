import React, { useRef } from "react";
import { getArticles } from "../../lib/articles";
import NewsList from "../../components/NewsList";
import { GetStaticProps } from "next";
import Head from "next/head";

export default function App({ articles }) {
    const scroll = useRef(null);

    return (
        <>
            <Head>
                <title>Lviv Physics and Maths Lyceum</title>
            </Head>
            <NewsList articles={articles} scrollRef={scroll} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let articles = [];
    const articlesRaw = getArticles("blog").sort((a, b) =>
        a.date < b.date ? -1 : 1,
    );
    for (var i = 0; i < articlesRaw.length; i++) {
        articles.push({
            title: articlesRaw[i] ? articlesRaw[i].title : null,
            href: `/news/${articlesRaw[i] && articlesRaw[i].id}`,
            cover:
                articlesRaw[i] && articlesRaw[i].cover != undefined
                    ? articlesRaw[i].cover
                    : `https://picsum.photos/${
                          400 + Math.floor(Math.random() * 100) + 1
                      }`,
            date: articlesRaw[i].date ? articlesRaw[i].date : null,
            description: articlesRaw[i].description
                ? articlesRaw[i].description
                : null,
        });
    }
    articles.sort((a, b) => {
        // If null:
        if (!a.date) {
            return 1;
        }
        if (!b.date) {
            return -1;
        }
        const aDate = a.date.split(".");
        const bDate = b.date.split(".");
        const aDateObj = new Date(aDate[2], aDate[1], aDate[0]);
        const bDateObj = new Date(bDate[2], bDate[1], bDate[0]);
        return bDateObj - aDateObj;
    });

    return {
        props: {
            articles: articles,
        },
    };
};
