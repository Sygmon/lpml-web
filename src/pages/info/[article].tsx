import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../../lib/articles";
import Article from "../../components/Article";
import Head from 'next/head'

export default function ArticlePage({ id, content, title }) {
    return (
      <>
        <Article id={id} content={content} />
        <Head>
          <title>LPML - {title}</title>
        </Head>
      </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const excluded = ["education", "for-grads", "public-info"];
  const paths = getArticles("info")
    .filter(article => !excluded.includes(article.id))
    .map(article => `/info/${article.id}`);
  
  return {
    paths,
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.article as string;
  const articles = getArticles("info");
  const article = articles.filter(article => article.id === id)[0];
  return {
    props: {
        id: article.id,
        content: article.content,
        title: article.title,
    },
  };
};
