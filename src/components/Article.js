import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from "../scss/Applet.module.scss"

function Image(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className={`${styles.image} ${styles.closed}`} onClick={() => setOpen(!open)}>
                <img src={props.src} alt={props.alt} />
                {open && (
                    <div className={`${styles.image} ${styles.open}`} onClick={() => setOpen(!open)}>
                        <img src={props.src} alt={props.alt} />
                    </div>
                )}
            </div>
        </>
    );
}

export default function Article(props) {
    return (
        <div className={styles.container}>
            <div className={styles.markdown}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
                    img: Image,
                }} children={props.content}/>
            </div>
        </div>
    )
}
