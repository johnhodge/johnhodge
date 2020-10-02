module.exports = {
  siteMetadata: {
    title: `John Hodge`,
    author: {
      name: `John Hodge`,
      summary: `Hey all, I'm John. I work for the adservers.`,
    },
    description: `Things I learned and outcomes from experiences I run. Notice, I do a lot in adtech, so look out, there might be a bunch of adtech experimentation finsings.`,
    siteUrl: `https://www.johnhodge.com`,
    social: {
      twitter: `hodgecity`,
    },
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'about',
        link: '/about'
      },
      {
        name: 'blog',
        link: '/blog'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 0rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P34JZK",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Hodge`,
        short_name: `Hodge`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4ABDE7`,
        display: `minimal-ui`,
        icon: `content/assets/laptop.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["VAL"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-plugin-fontawesome-css`
  ],
}
