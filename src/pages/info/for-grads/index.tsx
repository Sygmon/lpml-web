import { GetStaticProps } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import Head from "next/head";

export default function ArticlePage({ id, content, title, description }) {
  return (
    <>
      <Article id={id} content={content} />
      <Head>
        <title>ЛФМЛ - {title}</title>
        <meta name="description" content={description || content} />
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
      description: article.description,
    },
  };
};
