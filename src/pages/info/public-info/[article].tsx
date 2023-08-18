import ArticlePage, {
  staticPathsFor,
  staticPropsFor,
} from "../../../components/ArticlePage";

export default ArticlePage;

export const getStaticPaths = staticPathsFor(
  "info/public-info",
  "/info/public-info"
);

export const getStaticProps = staticPropsFor("info/public-info", "Публічно");
