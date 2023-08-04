import * as React from "react";
import styles from "../scss/Applet.module.scss";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function ArticleLink(props) {
    return (
        <Link href={props.href}>
            <a href={props.href} className={styles["link-container"]}>
                <ReactMarkdown className={styles.link}>
                    {props.title}
                </ReactMarkdown>
                <ReactMarkdown className={styles.description}>
                    {props.description}
                </ReactMarkdown>
                <div className={styles.date}>{props.date}</div>
            </a>
        </Link>
    );
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
