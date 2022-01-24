import "../scss/App.scss";
import { Link } from "react-router-dom";

// TODO: Add text from article instead of hello,
// add imege rendering from article instead of picsum

function ArticleLink(props) {
    return (
        <Link
            className="link-container"
            to={`/articles/${props.to}`}
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
        </Link>
    )
}

function Applet(props) {
    return (
        <div className="Applet">
            {/* Top tow */}
            <ArticleLink
                to="new/1"
                row="1 / 12"
                column="1 / 2"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                to="new/2"
                row="1 / 16"
                column="2 / 4"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                to="new/3"
                row="1 / 12"
                column="4 / 6"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                to="new/4"
                row="1 / 16"
                column="6 / 7"
                img="https://picsum.photos/300"
            />
            {/* Middle row */}
            <ArticleLink
                to="new/5"
                row="12 / 24"
                column="1 / 2"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                to="new/6"
                row="16 / 24"
                column="2 / 4"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                to="new/7"
                row="12 / 24"
                column="4 / 6"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                to="new/8"
                row="16 / 24"
                column="6 / 7"
                img="https://picsum.photos/300"
            />
            {/* Bottom row */}
            <ArticleLink
                to="new/9"
                row="24 / 48"
                column="1 / 3"
                img="https://picsum.photos/800"
            />
            <ArticleLink
                to="new/10"
                row="24 / 48"
                column="3 / 5"
                img="https://picsum.photos/800"
            />
            <ArticleLink
                to="new/11"
                row="24 / 48"
                column="5 / 7"
                img="https://picsum.photos/800"
            />
        </div>
    );
}

export default Applet;
