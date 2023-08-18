import ArticlePage, {
  staticPathsFor,
  staticPropsFor,
} from "../../components/ArticlePage";

export default ArticlePage;

export const getStaticPaths = staticPathsFor("info", "/info", [
  "education",
  "for-grads",
  "public-info",
  "for-students",
  "about",
]);

export const getStaticProps = staticPropsFor("info");
