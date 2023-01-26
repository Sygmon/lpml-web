import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import Head from 'next/head'

export default function ArticlePage({ id, content, title, articles }) {
    return (
      <>
        <Article id={id} content={content} />
        <Head>
          <title>LPML - Public Information - {title}</title>
        </Head>
      </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticles("info/public-info").map(article => article == undefined ? "/info/public-info.md" : `/info/public-info/${article.id}`);
  
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.article as string;
  const articles = getArticles("info/public-info");
  const article = articles.filter(article => article.id === id)[0];
  return {
    props: {
        id: article.id != undefined ? article.id : null,
        content: article.content != undefined ? article.content : null,
        title: article.title != undefined ? article.title : null,
        articles: articles.map(article => ({id: article.id != undefined ? article.id : null, title: article.title != undefined ? article.title : null}))
    },
  };
};
