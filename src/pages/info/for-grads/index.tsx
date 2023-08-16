import { GetStaticProps } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import Head from "next/head";

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

export const getStaticProps: GetStaticProps = async () => {
  const articles = getArticles("info");
  const article = articles.filter((article) => article.id === "for-grads")[0];
  return {
    props: {
      id: article.id,
      content: article.content,
      title: article.title,
    },
  };
};

