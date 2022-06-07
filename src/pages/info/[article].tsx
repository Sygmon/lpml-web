import fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../../lib/articles";
import Article from "../../components/Article";

export default function ArticlePage({ id, content }) {
    return (
        <Article id={id} content={content} />
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getArticles("info").map(article => `/info/${article.id}`);
  
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
    },
  };
};