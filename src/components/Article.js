import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../scss/Applet.module.scss";
import rehypeRaw from "rehype-raw";

function MdImage(props) {
  const [open, setOpen] = useState(false);
  const imgSource = props.src.startsWith("http")
    ? props.src
    : `https://raw.githubusercontent.com/Sygmon/lpml-web/redesign/public${props.src}`;

  return (
    <div className={styles["image-container"]}>
      <div
        className={`${styles.image} ${styles.closed}`}
        onClick={() => setOpen(!open)}
      >
        <img src={imgSource} alt={props.alt} loading="lazy" />
        {open && (
          <div
            className={`${styles.image} ${styles.open}`}
            onClick={() => setOpen(!open)}
          >
            <img
              src={props.src}
              alt={props.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function Table(props) {
  return (
    <div className={styles["table-container"]}>
      <table {...props}>{props.children}</table>
    </div>
  );
}

export default function Article(props) {
  return (
    <div className={styles.container}>
      {props.children}
      <div className={styles.markdown}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: MdImage,
            table: Table,
          }}
          rehypePlugins={[rehypeRaw]}
          children={props.content}
        />
      </div>
    </div>
  );
}
