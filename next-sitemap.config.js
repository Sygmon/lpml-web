/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://lpml-web.netlify.app',
    generateRobotsTxt: true,
    generateIndexSitemap: true,
  }