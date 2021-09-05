require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const os = require('os');

module.exports = {
  siteMetadata: {
    siteUrl: `https://johnghodge.com`,
    title: `BrightShell`,
    logo: `/logo_blue.svg`,
    featuredImage: `/logo_red.svg`,
    description: `This website is a basic theme with some cool functionality for tagging and basic UI interactions.`,
    metaLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Insights`,
        link: `/insights`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        enableTags: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
};
