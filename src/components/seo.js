import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ 
  description, 
  lang, 
  meta, 
  metaImage, 
  title, 
  pathname, 
  metaKeywords, 
  metaAuthor,
  metaArticle
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          social {
            twitter
            instagram
            github
          }
          title,
          description
          siteUrl,
          keywords,
          image {
            src,
            width,
            height,
            altDescription,
            contentType
          }
        }
      }
    }
  `);

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const metaDescription = description || site.siteMetadata.description
  const keywords = metaKeywords || site.siteMetadata.keywords
  const image = metaImage || site.siteMetadata.image
  const social = site.siteMetadata.social
  const article = metaArticle ? metaArticle : null
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
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
    )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
}

export default SEO;
