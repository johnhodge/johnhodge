require(`dotenv`).config({ path: `.env.${process.env.NODE_ENV}` });

module.exports = {
  siteMetadata: {
    author: `BrightShell Dev Team`,
    siteUrl: `https://brightshell.com/`,
    title: `BrightShell`,
    logo: `/logo_blue.svg`,
    featuredImage: `/logo_red.svg`,
    description: `BrightShell, LLC is a consulting firm in the adtech industry with a focus on bringing talent to market while simplifying ad system integrations and monetization strategies.`,
    social: {
      twitter: `BrightShellUSA`,
      twitterId: 1423463429583654913,
      instagram: `brightshellusa`,
      github: `BrightShell-llc`,
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
      src: `${__dirname}/src/images/logo_blue.svg`,
      width: `1920px`,
      height: `1920px`,
      altDescription: `BrightShell, LLC is a consulting firm in the adtech industry with a focus on bringing talent to market while simplifying ad system integrations and monetization strategies.`,
      contentType: `image/svg+xml`,
    },
    metaLinks: [
      {
        name: `Solutions`,
        link: `/solutions`,
      },
      // {
      //   name: `Insights`,
      //   link: `/insights`,
      // },
      {
        name: `Contact`,
        link: `/contact`,
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
        name: `BrightShell`,
        short_name: `BrightShell`,
        start_url: `/`,
        background_color: `#1F2023`,
        theme_color: `#32D2FA`,
        display: `standalone`,
        icon: `src/images/logo_blue.svg`,
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
