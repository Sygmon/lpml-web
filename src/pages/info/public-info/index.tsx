import ArticlePage, { staticPropsFor } from "../../../components/ArticlePage";

export default ArticlePage;

export const getStaticProps = staticPropsFor("info", null, "public-info");
