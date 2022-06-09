import Head from 'next/head';
import { GetStaticProps } from "next";
import Link from "next/link";
import { getArticles } from "../../lib/articles";
import styles from "../../scss/news.module.scss";

export default function NewsPage({ articles }) {
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
                All news and events
            </h1>
            <div className={styles.grid}>
                {articles.map(article => (
                    <Link href={article.url}>
                        <div className={styles.article}>
                            <h1 className={styles.title}>{article.title}</h1>
                            {article.cover && <img className={styles.cover} src={article.cover} />}
                            <span className={styles.description}>{article.description}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <Head>
                <title>LPML - News</title>
            </Head>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles = getArticles("blog").sort((a, b) => a.date < b.date ? -1 : 1).map(article => ({url: `/news/${article.id}`, title: article.title, description: article.description, date: article.date, cover: article.cover}));
  return {
    props: {
        articles: articles,
    },
  };
};