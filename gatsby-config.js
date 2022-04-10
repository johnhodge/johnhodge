require(`dotenv`).config({ path: `.env.${process.env.NODE_ENV}.local` });
console.log(`Starting up the environment: ${process.env.NODE_ENV}`);
module.exports = {
  siteMetadata: {
    author: `John Hodge`,
    siteUrl: `https://johnhodge.com/`,
    title: `John Hodge`,
    logo: `/logo.png`,
    featuredImage: `/logo.png`,
    description: `John Hodge is a tech saavy adtech professional with a firm understanding of publisher and advertiser motivations.`,
    social: {
      twitter: process.env.TWITTER,
      twitterId: process.env.TWITTERID,
      instagram: process.env.INSTAGRAM,
      github: process.env.GITHUB,
    },
    keywords: [
      `adtech`,
      `advertising`,
      `tech`,
      `marketing`,
      `google`,
      `freewheel`,
      `spotx`,
      `madhive`,
      `buy side`,
      `sell side`,
      `dsp`,
      `dmp`,
      `ad server`,
      `real-time bidding`,
      `rtb`,
      `iab`,
      `vast`,
      `vmap`,
    ],
    image: {
      src: `${__dirname}/src/images/logo.png`,
      width: `160px`,
      height: `160px`,
      altDescription: `John Hodge is a tech saavy adtech professional with a firm understanding of publisher and advertiser motivations.`,
      contentType: `image/png`,
    },
    metaLinks: [
      {
        name: `Request a Meeting`,
        link: `/lp/request-meeting`,
        type: `cta`,
      },
      {
        name: `Solutions`,
        link: `/solutions`,
        type: `page`,
      },
      {
        name: `Insights`,
        link: `/insights`,
        type: `page`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.PROJECT_NAME,
        short_name: process.env.PROJECT_NAME,
        start_url: `/`,
        background_color: process.env.BACKGROUND_COLOR,
        theme_color: process.env.THEME_COLOR,
        display: `standalone`,
        icon: `src/images/${process.env.PROJECT_NAME.toLowerCase().replace(
          " ",
          "-"
        )}-logo.png`,
        legacy: false,
      },
    },
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
    {
      resolve: `gatsby-plugin-prettier-eslint`,
      options: {
        prettier: {
          patterns: [
            `**/*.{css,scss,less}`,
            `**/*.{json,json5}`,
            `**/*.{graphql}`,
            `**/*.{md,mdx}`,
            `**/*.{html}`,
            `**/*.{yaml,yml}`,
          ],
        },
        eslint: {
          patterns: `**/*.{js,jsx,ts,tsx}`,
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID,

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: `gatsby` },

        // Specify optional GTM environment details.
        // gtmAuth: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING`,
        // gtmPreview: `YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME`,
        // dataLayerName: `YOUR_DATA_LAYER_NAME`,

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        // routeChangeEventName: `YOUR_ROUTE_CHANGE_EVENT_NAME`,
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: `YOUR_SELF_HOSTED_ORIGIN`,
      },
    },
  ],
};
