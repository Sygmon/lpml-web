import { GetStaticProps } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import ArticleMenu from "../../../components/ArticleMenu";
import Head from "next/head";

export default function ArticlePage({
  id,
  content,
  title,
  articles,
  description,
}) {
  return (
    <>
      <Article id={id} content={content}>
        <ArticleMenu articles={articles} path="about" />
      </Article>
      <Head>
        <title>ЛФМЛ - {title}</title>
        <meta name="description" content={description || content} />
      </Head>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = getArticles("info");
  const article = articles.filter((article) => article.id === "about")[0];
  const eq_articles = getArticles("info/about");
  return {
    props: {
      id: article.id,
      content: article.content,
      title: article.title,
      description: article.description,
      articles: eq_articles.map((article) => ({
        id: article.id,
        title: article.title,
      })),
    },
  };
};
