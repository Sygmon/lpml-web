import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../../lib/articles";
import Article from "../../components/Article";
import Head from "next/head";

type ArticlePageProps = {
  id: string;
  content: string;
  title: string;
  description: string;
};

export default function ArticlePage({
  id,
  content,
  title,
  description,
}: ArticlePageProps) {
  return (
    <>
      <Article id={id} content={content} />
      <Head>
        <title>ЛФМЛ - {title}</title>
        <meta name="description" content={description} />
      </Head>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const excluded = [
    "education",
    "for-grads",
    "public-info",
    "for-students",
    "about",
  ];
  const paths = getArticles("info")
    .filter((article) => !excluded.includes(article.id))
    .map((article) => `/info/${article.id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{ props: ArticlePageProps }> => {
  const id = params.article as string;
  const articles = getArticles("info");
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
