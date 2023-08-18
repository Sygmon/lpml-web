import ArticlePage, {
  staticPathsFor,
  staticPropsFor,
} from "../../../components/ArticlePage";

export default ArticlePage;

export const getStaticPaths = staticPathsFor(
  "info/for-students",
  "/info/for-students"
);

export const getStaticProps = staticPropsFor("info/for-students", "Для Учнів");
