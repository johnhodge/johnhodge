import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ description, lang, meta, metaImage, title, pathname, metaKeywords, metaAuthor }) => {
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
  console.log(metaAuthor)

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
          content: keywords, 
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
