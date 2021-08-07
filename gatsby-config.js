module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "scratch",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "snP-INMQ5I_nHd_APhognXXC44I2Bv8M_LJfUSvOo5k",
        spaceId: "fgudfti5zcog",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
