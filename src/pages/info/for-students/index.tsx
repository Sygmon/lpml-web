import { GetStaticProps } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import ArticleMenu from "../../../components/ArticleMenu";
import Head from "next/head";

export default function ArticlePage({ id, content, title, articles }) {
  return (
    <>
      <Article id={id} content={content}>
        <ArticleMenu articles={articles} path="for-students" />
      </Article>
      <Head>
        <title>LPML - {title}</title>
      </Head>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = getArticles("info");
  const article = articles.filter(
    (article) => article.id === "for-students"
  )[0];
  const eq_articles = getArticles("info/for-students");
  return {
    props: {
      id: article.id,
      content: article.content,
      title: article.title,
      articles: eq_articles.map((article) => ({
        id: article.id,
        title: article.title,
      })),
    },
  };
};
