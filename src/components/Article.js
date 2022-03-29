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
        if ( ! data.includes("404: Not Found")){
            let tmp = data.split('\n')
            tmp.splice(0,4)
            setArticle(tmp.join('\n'));
        } else {
            setArticle("This should be the 404 markdown or something");
        }
    }

    xhr.send();

    /* TODO: Good fucking grace do we need a proper 404 page. Markdown looks nice, but when xhr gives a 404, we are fucked*/

    return (
        <div className="markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={article}/>
        </div>
    )
}
