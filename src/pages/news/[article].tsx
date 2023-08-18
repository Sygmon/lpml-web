import ArticlePage, {
  staticPathsFor,
  staticPropsFor,
} from "../../components/ArticlePage";

export default ArticlePage;

export const getStaticPaths = staticPathsFor("blog", "/news");

export const getStaticProps = staticPropsFor("blog");
