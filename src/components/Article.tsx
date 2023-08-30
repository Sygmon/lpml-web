import React, {
  DetailedHTMLProps,
  PropsWithChildren,
  TableHTMLAttributes,
  useState,
} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "../scss/Applet.module.scss";
import rehypeRaw from "rehype-raw";
import { ReactMarkdownProps } from "react-markdown/lib/complex-types";

function MdImage({ src, alt }: { src?: string; alt?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span className={styles["image-container"]}>
      <span
        className={`${styles.image} ${styles.closed}`}
        onClick={() => setOpen(!open)}
      >
        <img src={src} alt={alt} loading="lazy" />
        {open && (
          <div
            className={`${styles.image} ${styles.open}`}
            onClick={() => setOpen(!open)}
          >
            <img src={src} alt={alt} />
          </div>
        )}
      </span>
    </span>
  );
}

function Table(
  props: PropsWithChildren<
    Omit<
      DetailedHTMLProps<
        TableHTMLAttributes<HTMLTableElement>,
        HTMLTableElement
      >,
      "ref"
    > &
      ReactMarkdownProps
  >
) {
  return (
    <div className={styles["table-container"]}>
      <table {...props} />
    </div>
  );
}

export default function Article({
  children,
  content,
  id,
  title,
}: {
  children?: React.ReactNode;
  content: string;
  id: string;
  title?: string;
}) {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.markdown}>
        {title && <h1>{title}</h1>}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: MdImage,
            table: Table,
          }}
          rehypePlugins={[rehypeRaw]}
          children={content}
        />
      </div>
    </div>
  );
}
