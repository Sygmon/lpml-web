import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import Head from 'next/head'

export default function ArticlePage({ id, content, title, articles }) {
    return (
      <>
        <Article id={id} content={content} />
        <Head>
          <title>LPML - For Graduates - {title}</title>
        </Head>
      </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticles("info/about").map(article => `/info/about/${article.id}`);
  
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.article as string;
  const articles = getArticles("info/about");
  const article = articles.filter(article => article.id === id)[0];
  return {
    props: {
        id: article.id,
        content: article.content,
        title: article.title,
        articles: articles.map(article => ({id: article.id, title: article.title}))
    },
  };
};