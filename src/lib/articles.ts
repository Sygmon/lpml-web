import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import matter from "gray-matter";
const base = path.join(process.cwd(), "content");
import { Article, ArticleMetadata, articleMetadataSchema } from "./article";

function inferMetadata(
  content: string,
  maxLength: number = 200
): { title: string | undefined; description: string | undefined } {
  let description: string | undefined;
  let title: string | undefined;

  let i = 0;
  const paragraphs = content.split("\n");
  let paragraph = paragraphs[i];
  if (paragraph.startsWith("#")) {
    title = paragraph.replace(/^#+/, "").trim();
    title = title.replace(/\[([^\]]+)\]\([^)]+\)/, "$1");
    i++;
    paragraph = paragraphs[i];
  }
  while (
    paragraph == "" ||
    paragraph.startsWith("#") ||
    paragraph.startsWith("![")
  ) {
    i++;
    paragraph = paragraphs[i];
    if (paragraph == undefined) {
      paragraph = "";
      break;
    }
  }
  const descriptionEnd = paragraph.length;
  if (descriptionEnd <= maxLength) {
    description = paragraph.substring(0, descriptionEnd);
  } else {
    const lastSpace = paragraph.substring(0, maxLength).lastIndexOf(" ");
    if (lastSpace == -1) {
      description = paragraph.substring(0, maxLength);
    } else {
      description = paragraph.substring(0, lastSpace);
    }
  }
  description += "...";

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
