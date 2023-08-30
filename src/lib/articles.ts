import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import matter from "gray-matter";
import markdownToTxt from "markdown-to-txt";
const base = path.join(process.cwd(), "content");
import { Article, ArticleMetadata, articleMetadataSchema } from "./article";

function inferMetadata(
  content: string,
  maxLength: number = 200
): { title: string | undefined; description: string | undefined } {
  let description: string | undefined;
  let title: string | undefined;

  const paragraphs = content.split("\n");

  if (paragraphs[0].startsWith("#")) {
    title = markdownToTxt(paragraphs.shift() || "");
  }

  // Join back again and then use markdownToTxt; then cut to maxLength
  const joined = paragraphs.join("\n");
  const txt = markdownToTxt(joined);
  description =
    txt.length > maxLength ? txt.slice(0, maxLength - 1) + "…" : txt;

  return { title, description };
}

function parseArticle(
  filename: string,
  category: string,
  content: string,
  frontmatter: ArticleMetadata
): Article {
  const inferred = inferMetadata(content);
  return {
    id: filename.replace(/\.md$/, ""),
    title: frontmatter.title || inferred.title || filename.replace(/\.md$/, ""),
    description: frontmatter.description || inferred.description || content,
    category,
    content: content,
    date: frontmatter.date,
    cover: frontmatter.cover,
  };
}

export function getArticles(category: string): Article[] {
  const category_dir = path.join(base, category);
  const articles = fs
    .readdirSync(category_dir, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name)
    .map((file) => {
      const filepath = path.join(category_dir, file);
      const markdown = fs.readFileSync(filepath, "utf8");

      const parsed = matter(markdown, {
        engines: {
          yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });

      return parseArticle(
        file,
        category,
        parsed.content,
        articleMetadataSchema.parse(parsed.data)
      );
    });
  return articles.filter((article) => article != undefined);
}
