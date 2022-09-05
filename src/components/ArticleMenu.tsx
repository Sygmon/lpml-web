import styles from "../scss/ArticleMenu.module.scss"


export default function ArticleMenu({ articles, active, path }: {articles: {id: string, title: string}[], active?: string, path?: string}) {
    return (
        <div className={styles.articleMenu}>
            {articles.map((article) => (
                <a
                    href={path ? `${path}/${article.id}` : article.id}
                    className={article.id === active ? `${styles.articleMenuLink} ${styles.active}` : `${styles.articleMenuLink} ${styles.disabled}`}
                    key={article.id}
                >
                    {article.title}
                </a>
            ))}
        </div>
    );
}
