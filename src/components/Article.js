import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from "../scss/Applet.module.scss"

export default function Article(props) {
    return (
        <div className={styles.markdown}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={props.content}/>
        </div>
    )
}
