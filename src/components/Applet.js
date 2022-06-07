import * as React from "react";
import styles from "../scss/Applet.module.scss";
import Link from "next/link";

function ArticleLink(props) {
    return (
        <Link href={props.href}>
            <span
                className={styles["link-container"]}
                style={{
                    gridColumn: `${props.column}`,
                    gridRow: `${props.row}`,
                }}
            >
                <div
                    className={styles.background}
                    style={{
                        backgroundImage: `url(${props.img})`
                    }}
                />
                <div className={styles.link}>
                        {props.title}
                </div>
            </span>
        </Link>
    )
}

export default function Applet({ articles }) {
    // These are roughly sorted from the most href the least eye-catching tile
    // Only the first few tiles will be visible on mobile

    // I've given up on generating this procedurally for a given screen size
    // (5 hours wasted)
    // leaving it all hard-coded for now
    const positions = [
        {
            row: "1 / 16",
            column: "2 / 4"
        },
        {
            row: "1 / 12",
            column: "1 / 2"
        },
        {
            row: "1 / 12",
            column: "4 / 6"
        },
        {
            row: "12 / 24",
            column: "4 / 6"
        },
        {
            row: "16 / 24",
            column: "2 / 4"
        },
        {
            row: "1 / 16",
            column: "6 / 7"
        },
        {
            row: "12 / 24",
            column: "1 / 2"
        },
        {
            row: "16 / 24",
            column: "6 / 7"
        },
        {
            row: "24 / 48",
            column: "1 / 3"
        },
        {
            row: "24 / 48",
            column: "3 / 5"
        },
        {
            row: "24 / 48",
            column: "5 / 7"
        }
    ];

    return (
        <div className={styles.Applet}>
            {articles.map((article, index) => (
                <ArticleLink
                    key={`${article}${index}`}
                    href={article.href}
                    row={positions[index].row}
                    column={positions[index].column}
                    title={article.title}
                    img={article.cover}
                />
            ))}
        </div>
    );
}
