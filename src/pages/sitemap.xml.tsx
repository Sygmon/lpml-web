import { getArticles } from "../lib/articles";

const Sitemap = () => {};

function getPathsForLocation(location: string, category?: string): string[] {
    return getArticles(category || location).map(article => `${location}/${article.id}`);
}

function getAllPages() {
    let pages = [];
    pages.push(...getPathsForLocation("info"));
    pages.push(...getPathsForLocation("info/education"));
    pages.push(...getPathsForLocation("info/for-grads"));
    pages.push(...getPathsForLocation("info/public-info"));
    pages.push(...getPathsForLocation("news", "blog"));
    return pages;
}

export const getStaticProps = ({ res }) => {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://lpml-web.netlify.app",
  }[process.env.NODE_ENV];

  const index = getAllPages();

  const staticPages = index
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
