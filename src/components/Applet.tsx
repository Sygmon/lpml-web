import * as React from "react";
import styles from "../scss/Applet.module.scss";
import Link from "next/link";

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
        <h2 className={styles.link}>{title}</h2>
        <span className={styles.description}>{description}</span>
        <div className={styles.date}>{date}</div>
      </a>
    </Link>
  );
}
