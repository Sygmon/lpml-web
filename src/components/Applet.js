import "../scss/App.scss";
import { Link } from "react-router-dom";

// TODO: make a netflix-like news element
// (rise on top of others on hover)
// TODO: make s news grid

function ArticleLink(props) {
    return (
        <Link
            className="link-container"
            to={`${props.url}`}
            style={{
                gridColumn: `${props.column}`,
                gridRow: `${props.row}`,
                backgroundImage: `url(${props.img})`
            }}
        >
           <div className="link">
                Hello!
           </div>
        </Link>
    )
}

function Applet(props) {
    return (
        <div className="Applet">
            <ArticleLink
                row="1 / 8"
                column="1 / 12"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                row="1 / 8"
                column="55 / 67"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                row="1 / 8"
                column="37 / 54"
                img="https://picsum.photos/300"
            />
            <ArticleLink
                row="1 / 8"
                column="13 / 36"
                img="https://picsum.photos/600"
            />
            <ArticleLink
                row="9 / 24"
                column="1 / 24"
                img="https://picsum.photos/600"
            />
        </div>
    );
}

export default Applet;
