import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import "../scss/Applet.scss";

export default function Article(props) {
    const articleURLBase = "https://raw.githubusercontent.com/Sygmon/lpml-web/main/static/content";
    const { id } = useParams();
    const fullURL = `${articleURLBase}/${props.group}/${id}.md`;

    const [ article, setArticle ] = useState();

    console.log(fullURL);

    const xhr = new XMLHttpRequest();
    xhr.open('GET', fullURL, true);

    xhr.onload = function() {
        const data = this.response
        setArticle(data);
    }

    xhr.send();

    /* TODO: good fucking god make a proper 404 page. Markdown looks nice, but when xhr gives a 404, we are fucked*/

    return (
        <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={article}/>
        </div>
    )
}
