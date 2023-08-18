import ArticlePage, {
  staticPathsFor,
  staticPropsFor,
} from "../../../components/ArticlePage";

export default ArticlePage;

export const getStaticPaths = staticPathsFor(
  "info/education",
  "/info/education"
);

export const getStaticProps = staticPropsFor(
  "info/education",
  "Якість Освіти",
  undefined,
  undefined,
  "info/education"
);
