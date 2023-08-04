import * as React from "react";
import styles from "../scss/Applet.module.scss";
import Link from "next/link";

export function ArticleLink(props) {
    return (
        <Link href={props.href}>
            <a
                href={props.href}
                className={styles["link-container"]}
            >
                <div className={styles.link}>
                        {props.title}
                </div>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.date}>{props.date}</div>
            </a>
        </Link>
    )
}

export default function Applet({ articles }) {
    return (
        <div className={styles.Applet}>
            {articles.map((article, index) => (
                <ArticleLink
                    key={`${article}${index}`}
                    href={article.href}
                    title={article.title}
                    img={article.cover}
                    date={article.date}
                />
            ))}
        </div>
    );
}
