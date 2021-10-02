import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({
  description,
  meta,
  pathname,
  metaLang,
  metaImage,
  metaTitle,
  metaKeywords,
  metaArticle,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        ...siteData
      }
    }
  `);

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;
  const metaDescription = description || site.siteMetadata.description;
  const keywords = metaKeywords || site.siteMetadata.keywords;
  const image = metaImage || site.siteMetadata.image;
  const { social } = site.siteMetadata;
  const article = metaArticle || null;
  const title = `${metaTitle} | ${site.siteMetadata.title}`;
  const lang = metaLang;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      link={
        canonical
          ? [
              {
                rel: `canonical`,
                href: canonical,
              },
              {
                rel: `og:url`,
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords.join(","),
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
          content: site.siteMetadata.title,
        },
        {
          property: `og:image`,
          content: image.src,
        },
        {
          property: `og:image:width`,
          content: image.width,
        },
        {
          property: `og:image:height`,
          content: image.height,
        },
        {
          property: `og:image:alt`,
          content: image.altDescription,
        },
        {
          property: `og:image:type`,
          content: image.contentType,
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
          content: image.src,
        },
        {
          name: `twitter:image:alt`,
          content: image.altDescription,
        },
      ]
        .concat(
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
                  content: article.article_tag,
                },
              ]
            : []
        )
        .concat(meta)}
    />
  );
};

Seo.defaultProps = {
  metaLang: `US-en`,
  meta: [],
  description: ``,
  pathname: ``,
  image: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  metaLang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  metaTitle: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};

export default Seo;
