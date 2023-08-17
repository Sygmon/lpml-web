import * as React from "react";
import styles from "../scss/Applet.module.scss";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export function ArticleLink(props) {
  return (
    <Link href={props.href}>
      <a
        href={props.href}
        className={styles["link-container"]}
        aria-label={props.title}
      >
        <ReactMarkdown className={styles.link}>{props.title}</ReactMarkdown>
        <ReactMarkdown className={styles.description}>
          {props.description}
        </ReactMarkdown>
        <div className={styles.date}>{props.date}</div>
      </a>
    </Link>
  );
}
