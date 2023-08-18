import { GetStaticProps, GetStaticPaths } from "next";
import { getArticles } from "../lib/articles";
import Article from "./Article";
import ArticleMenu from "./ArticleMenu";
import Head from "next/head";

export type ArticlePageProps = {
  id: string;
  content: string;
  title: string;
  description: string;
  category: string | null;
  articles:
    | {
        id: string;
        title: string;
      }[]
    | null;
  menupath: string | null;
  samelevel: boolean;
};

export default function ArticlePage({
  id,
  content,
  title,
  description,
  category,
  articles,
  menupath,
  samelevel,
}: ArticlePageProps) {
  return (
    <>
      <Article id={id} content={content}>
        {articles && (
          <ArticleMenu
            articles={articles}
            path={menupath}
            active={samelevel ? id : null}
          />
        )}
      </Article>

      <Head>
        <title>
          ЛФМЛ {category ? `- ${category} ` : ""}- {title}
        </title>
        <meta name="description" content={description} />
      </Head>
    </>
  );
}

export const staticPropsFor =
  (
    categoryId: string,
    categoryName?: string,
    articleId?: string,
    menuPath?: string,
    menuCategory?: string
  ): GetStaticProps =>
  async ({ params }): Promise<{ props: ArticlePageProps }> => {
    const articles = getArticles(categoryId);
    const article = articles.filter(
      (article) => article.id === (articleId || params?.article)
    )[0];

    const menuArticles = menuCategory && getArticles(menuCategory);
    return {
      props: {
        id: article.id,
        content: article.content,
        title: article.title,
        description: article.description,
        category: categoryName || null,
        articles:
          menuArticles?.map((article) => ({
            id: article.id,
            title: article.title,
          })) || null,
        menupath: menuPath || null,
        samelevel: menuCategory === categoryId,
      },
    };
  };

export const staticPathsFor =
  (categoryId: string, url: string): GetStaticPaths =>
  async () => {
    const paths = getArticles(categoryId).map(
      (article) => `${url}/${article.id}`
    );

    return {
      paths,
      fallback: false,
    };
  };
