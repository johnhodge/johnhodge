import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import heroNew from "../../fonts/hero_new_regular-webfont.woff";
import heroNewBold from "../../fonts/hero_new_bold-webfont.woff2";
import heroNewSuper from "../../fonts/hero_new_super-webfont.woff2";
import heroNewSuperItalic from "../../fonts/hero_new_super_italic-webfont.woff2";
import cartographMonoCfMedium from "../../fonts/cartographmonocf_medium-webfont.woff2";

const Seo = ({
  description,
  metaLang,
  metaImage,
  metaTitle,
  metaKeywords,
  metaArticle,
  location,
}) => {
  const data = useStaticQuery(graphql`
    {
      site {
        ...gatsbySiteData
      }
      allContentfulCompany(
        filter: { id: { eq: "b609af1b-49b4-5251-94fb-32a3da3ebf11" } }
      ) {
        edges {
          ...contentfulSiteData
        }
      }
    }
  `);

  const canonical = location.href;
  const metaDescription = description || data.site.siteMetadata.description;
  const keywords = metaKeywords || data.site.siteMetadata.keywords.join(", ");

  const image = metaImage || data.allContentfulCompany.edges[0].node.seoLogo;
  const imageFile = `https:${image.url ? image.url : image.file.url}`;
  const imageHeight = image.height
    ? image.height
    : image.file.details.image.height;
  const imageWidth = image.width ? image.width : image.file.details.image.width;
  const imageType = image.contentType
    ? image.contentType
    : image.file.contentType;

  const { social } = data.site.siteMetadata;
  const article = metaArticle || null;
  const title = `${metaTitle} » ${data.site.siteMetadata.title}`;
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
          content: image.description,
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
          content: image.description,
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
    />
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
