require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    author: `John Hodge`,
    social: {
      twitter: `hijohnhodge`,
      twitterId: `376312987`,
      instagram: `hijohnhodge`,
      github: `hijohnhodge`,
    },
    title: `John Hodge`,
    description:
      `I'm a NYC based Solution's Engineer and I work in Adtech with some of the smartest people in the solar system.`,
    siteUrl: `https://johnhodge.com`,
    keywords: [`adtech`,`advertising`,`tech`,`marketing`,`google`,`freewheel`,`spotx`,`madhive`,`buy side`,`sell side`,`dsp`,`dmp`,`ad server`,`real-time bidding`,`rtb`,`iab`,`vast`,`vmap`],
    image: {
      src: `https://johnhodge.com/img.png`,
      width: `1920px`,
      height: `1920px`,
      altDescription: `I'm a NYC based Solution's Engineer and I work in Adtech with some of the smartest people in the solar system.`,
      contentType: `image/png`,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
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
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        // defaultDataLayer: { platform: `gatsby` },

        // Specify optional GTM environment details.
        // gtmAuth: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING`,
        // gtmPreview: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME`,
        // dataLayerName: `YOUR_DATA_LAYER_NAME`,

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: `YOUR_ROUTE_CHANGE_EVENT_NAME`,
      },
    },
    {
      resolve: `gatsby-plugin-htaccess`,
      options: {
        RewriteBase: `/`,
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: `www.johnhodge.com`, // if 'www' is set to 'false', be sure to also remove it here!
        // ErrorDocument: `
        //   ErrorDocument 401 /error_pages/401.html
        //   ErrorDocument 404 /error_pages/404.html
        //   ErrorDocument 500 /error_pages/500.html
        // `,
        redirect: [
          `RewriteRule ^(.*)([^/])$ http://%{HTTP_HOST}/$1$2/ [L,R=301]`,
          {
        //     from: 'my-domain.com',
        //     to: 'mydomain.com',
        //   },
        //   {
        //     from: 'my-other-domain.com',
        //     to: 'mydomain.com',
          },
        ],
        // custom: `
        //     # This is a custom rule!
        //     # This is a another custom rule!
        // `,
      },
    },
    {
      resolve:`gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap`
      }
    }
  ],
};
