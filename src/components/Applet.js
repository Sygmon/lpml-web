import * as React from "react";
import "../scss/App.scss";

// TODO: Add text from article instead of hello,
// add image rendering from articles instead of picsum

function ArticleLink(props) {
    return (
        <a
            className="link-container"
            href={`/articles/${props.href}`}
            style={{
                gridColumn: `${props.column}`,
                gridRow: `${props.row}`,
            }}
        >
           <div
               className="background"
            style={{
                backgroundImage: `url(${props.img})`
            }}
           />
           <div className="link">
                Hello!
           </div>
        </a>
    )
}

export default function Applet(props) {
    // This will be an API call eventually
    let articles = [];
    for(var i = 0;i<11;i++) {
        articles.push(
            {
                href: `news/${i}`,
                cover: i < 8 ? "https://picsum.photos/300" : "https://picsum.photos/800"
            }
        );
    };

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
        <div className="Applet">
            {articles.map((article, index) => (
                <ArticleLink
                    href={article.href}
                    row={positions[index].row}
                    column={positions[index].column}
                    img={article.cover}
                />
            ))}
        </div>
    );
}
