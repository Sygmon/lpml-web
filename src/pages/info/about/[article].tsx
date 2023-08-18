import ArticlePage, {
  staticPathsFor,
  staticPropsFor,
} from "../../../components/ArticlePage";

export default ArticlePage;

export const getStaticPaths = staticPathsFor("info/about", "/info/about");

export const getStaticProps = staticPropsFor("info/about", "Про Ліцей");
