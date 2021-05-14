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
          title,
          description
          siteUrl,
          keywords,
          image {
            src,
            width,
            height
          }
        }
      }
    }
  `);

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null
  const metaDescription = description || site.siteMetadata.description
  const keywords = metaKeywords || site.siteMetadata.keywords
  const author = metaAuthor || site.siteMetadata.author
  const image = metaImage || site.siteMetadata.image
  const article = metaArticle ? metaArticle : null

  console.log(article)

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        { 
          name: "description", 
          content: metaDescription,
        },
        { 
          name: "keywords", 
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
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: "og:image",
          content: image.src,
        },
      ]
      .concat(
        image
          ? [
              {
                property: "og:image",
                content: image.src,
              },
              {
                property: "og:image:width",
                content: image.width,
              },
              {
                property: "og:image:height",
                content: image.height,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
          )
      .concat(
          article
            ? [
                {
                  name: "article:published_time",
                  content: article.article_published_time,
                },
                {
                  name: "article:modified_time",
                  content: article.article_modified_time,
                },
                {
                  name: "article:author",
                  content: article.article_author,
                },
                {
                  name: "article:section",
                  content: article.article_section,
                },
                {
                  name: "article:tag",
                  content: article.article_tag,
                },
              // article:published_time - datetime - When the article was first published.
              // article:modified_time - datetime - When the article was last changed.
              // article:expiration_time - datetime - When the article is out of date after.
              // article:author - profile array - Writers of the article.
              // article:section - string - A high-level section name. E.g. Technology
              // article:tag - string array - Tag words associated with this article.
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
