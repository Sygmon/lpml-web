import { GetStaticProps } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import ArticleMenu from "../../../components/ArticleMenu";
import Head from 'next/head'

export default function ArticlePage({ id, content, title, articles }) {
    return (
      <>
        <Article id={id} content={content}>
            <ArticleMenu articles={articles} path="for-grads" />
        </Article>
        <Head>
          <title>LPML - {title}</title>
        </Head>
      </>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.article as string;
  const articles = getArticles("info/for-grads");
  const article = articles.filter(article => article.id === id)[0];
  return {
    props: {
        id: article.id != undefined ? article.id : "",
        content: article.content != undefined ? article.content : "",
        title: article.title != undefined ? article.title : "",
        articles: articles.map(article => ({id: article.id != undefined ? article.id : "", title: article.title != undefined ? article.title : ""}))
    },
  };
};
