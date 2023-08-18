import * as React from "react";
import styles from "../scss/Applet.module.scss";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function ArticleLink({
  href,
  title,
  description,
  date,
}: {
  href: string;
  title: string;
  description: string;
  date?: string;
}) {
  return (
    <Link href={href}>
      <a href={href} className={styles["link-container"]} aria-label={title}>
        <ReactMarkdown className={styles.link}>{title}</ReactMarkdown>
        <ReactMarkdown className={styles.description}>
          {description}
        </ReactMarkdown>
        <div className={styles.date}>{date}</div>
      </a>
    </Link>
  );
}
