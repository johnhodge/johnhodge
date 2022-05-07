import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import heroNew from "../../fonts/hero_new_regular-webfont.woff";
import heroNewBold from "../../fonts/hero_new_bold-webfont.woff2";
import heroNewSuper from "../../fonts/hero_new_super-webfont.woff2";
import heroNewSuperItalic from "../../fonts/hero_new_super_italic-webfont.woff2";
import cartographMonoCfMedium from "../../fonts/cartographmonocf_medium-webfont.woff2";
import { useSiteData } from "../../hooks/use-site-data";

const Seo = ({
  description,
  metaLang,
  metaImage,
  metaTitle,
  metaKeywords,
  metaArticle,
  location,
}) => {
  const gatsbyData = useSiteData()[0];
  console.log(gatsbyData);
  const contentfulData = useSiteData()[1];
  const website =
    process.env.NODE_ENV !== "development"
      ? location.origin
      : "https://www.johnhodge.com";
  const canonical = location.href;
  const metaDescription =
    description ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.description);
  const keywords =
    metaKeywords ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.keywords.join(", "));
  const image =
    metaImage ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.logo);
  const title = `${metaTitle} » ${contentfulData.allContentfulCompany.edges
    .filter((filtered) => filtered.node.website === website)
    .map(({ node }) => node.name)}`;
  const imageFile = `https:${
    image.url ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.seoLogo.file.url)
  }`;
  const imageHeight =
    image.height ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.seoLogo.file.details.image.height);
  const imageWidth =
    image.width ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.seoLogo.file.details.image.width);
  const imageDescription =
    image.description ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.seoLogo.description);
  const imageType =
    image.contentType ||
    contentfulData.allContentfulCompany.edges
      .filter((filtered) => filtered.node.website === website)
      .map(({ node }) => node.seoLogo.file.contentType);
  const { social } = gatsbyData.siteMetadata;
  const article = metaArticle || null;
  const lang = metaLang;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      link={[
        {
          rel: `canonical`,
          href: canonical,
        },
        {
          rel: `preload`,
          href: heroNew,
          as: `font`,
          type: `font/woff2`,
          crossOrigin: `true`,
        },
        {
          rel: `preload`,
          href: heroNewBold,
          as: `font`,
          type: `font/woff2`,
          crossOrigin: `true`,
        },
        {
          rel: `preload`,
          href: heroNewSuper,
          as: `font`,
          type: `font/woff2`,
          crossOrigin: `true`,
        },
        {
          rel: `preload`,
          href: heroNewSuperItalic,
          as: `font`,
          type: `font/woff2`,
          crossOrigin: `true`,
        },
        {
          rel: `preload`,
          href: cartographMonoCfMedium,
          as: `font`,
          type: `font/woff2`,
          crossOrigin: `true`,
        },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:url`,
          content: canonical,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:site_name`,
          content: title,
        },
        {
          property: `og:image`,
          content: imageFile,
        },
        {
          property: `og:image:width`,
          content: imageWidth,
        },
        {
          property: `og:image:height`,
          content: imageHeight,
        },
        {
          property: `og:image:alt`,
          content: imageDescription,
        },
        {
          property: `og:image:type`,
          content: imageType,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: `@${social.twitter}`,
        },
        {
          name: `twitter:site:id`,
          content: social.twitterId,
        },
        {
          name: `twitter:creator`,
          content: `@${social.twitter}`,
        },
        {
          name: `twitter:creator:id`,
          content: social.twitterId,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: imageFile,
        },
        {
          name: `twitter:image:alt`,
          content: imageDescription,
        },
      ].concat(
        article
          ? [
              {
                name: `article:published_time`,
                content: article.article_published_time,
              },
              {
                name: `article:modified_time`,
                content: article.article_modified_time,
              },
              {
                name: `article:author`,
                content: article.article_author,
              },
              {
                name: `article:section`,
                content: article.article_section,
              },
              {
                name: `article:tag`,
                content: article.article_tag
                  ? article.article_tag
                  : article.article_section,
              },
            ]
          : []
      )}
    >
      {contentfulData.allContentfulCompany.edges
        .filter((filtered) => filtered.node.website === website)
        .map(({ node }) => (
          <script type="application/ld+json">
            {JSON.stringify(
              {
                "@context": `https://schema.org`,
                "@type": `Organization`,
                name: node.name,
                url: website,
                legalName: `${node.name}, LLC`,
                logo: {
                  "@type": `ImageObject`,
                  name: node.logo.title,
                  caption: node.logo.title,
                  contentSize: `${node.logo.file.details.size / 1000}kb`,
                  contentUrl: `https:${node.logo.file.url}`,
                  encodingFormat: node.logo.file.contentType,
                  height: node.logo.file.details.image.height,
                  width: node.logo.file.details.image.width,
                },
                contactPoint: {
                  "@type": `ContactPoint`,
                  contactType: `Sales`,
                  email: `sales@${location.host}`,
                },
                founder: {
                  "@type": `ContactPoint`,
                  contactType: `Inquiries`,
                  email: `info@${location.host}`,
                },
                foundingDate: `2022-01-01 00:00:00`,
                foundingLocation: `New York, New York`,
                sameAs: node.socialMedia.map((account) => account.accountUrl),
              },
              null,
              ` `
            )}
          </script>
        ))}
    </Helmet>
  );
};

Seo.defaultProps = {
  metaLang: `US-en`,
  description: ``,
  location: ``,
  image: {
    src: ``,
    height: 0,
    width: 0,
  },
};

Seo.propTypes = {
  description: PropTypes.string,
  metaLang: PropTypes.string,
  metaTitle: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  location: PropTypes.string,
};

export default Seo;
