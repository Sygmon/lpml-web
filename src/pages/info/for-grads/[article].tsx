import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import Head from "next/head";

export default function ArticlePage({ id, content, title, description }) {
  return (
    <>
      <Article id={id} content={content} />
      <Head>
        <title>ЛФМЛ - Для Випускників - {title}</title>
        <meta name="description" content={description || content} />
      </Head>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticles("info/for-grads").map(
    (article) => `/info/for-grads/${article.id}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.article as string;
  const articles = getArticles("info/for-grads");
  const article = articles.filter((article) => article.id === id)[0];
  return {
    props: {
      id: article.id,
      content: article.content,
      title: article.title,
      description: article.description,
    },
  };
};
