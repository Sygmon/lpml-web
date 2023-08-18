import ArticlePage, {
  staticPathsFor,
  staticPropsFor,
} from "../../../components/ArticlePage";

export default ArticlePage;

export const getStaticPaths = staticPathsFor(
  "info/for-grads",
  "/info/for-grads"
);

export const getStaticProps = staticPropsFor(
  "info/for-grads",
  "Для Випускників"
);
