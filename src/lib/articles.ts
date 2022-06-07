import path from "path";
import fs from "fs";
import yaml from "js-yaml";
import matter from "gray-matter";
const base = path.join(process.cwd(), "content");

export function getArticles(category) {
    const category_dir = path.join(base, category);
    const articles = fs.readdirSync(category_dir)
      .map((file) => {
        const filepath = path.join(category_dir, file);
        const markdown = fs.readFileSync(filepath, "utf8");
  
        const parsed = matter(markdown, {
          engines: {
            yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
          },
        });
        const article = parsed.data as {
          title: string;
          description: string;
          category: string;
          content: string;
          id: string,
        };
        article.id = file.replace(/\.md$/, "");
        article.content = parsed.content;
  
        return article;
      });
    return articles;
}