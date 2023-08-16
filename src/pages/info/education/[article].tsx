import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../../../lib/articles";
import Article from "../../../components/Article";
import ArticleMenu from "../../../components/ArticleMenu";
import Head from "next/head";

export default function ArticlePage({ id, content, title, articles }) {
  return (
    <>
      <Article id={id} content={content}>
        <ArticleMenu articles={articles} active={id} />
      </Article>
      <Head>
        <title>LPML - Education quality - {title}</title>
      </Head>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticles("info/education").map(
    (article) => `/info/education/${article.id}`
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.article as string;
  const articles = getArticles("info/education");
  const article = articles.filter((article) => article.id === id)[0];
  return {
    props: {
      id: article.id,
      content: article.content,
      title: article.title,
      articles: articles.map((article) => ({
        id: article.id,
        title: article.title,
      })),
    },
  };
};

