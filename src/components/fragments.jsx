import { graphql } from "gatsby";

export const postListingData = graphql`
  fragment postListingData on ContentfulBlogPostEdge {
    node {
      category {
        name
        id
      }
      metadata {
        tags {
          id
          name
        }
      }
      slug
      title
      createdAt
      updatedAt
      author {
        name
        id
      }
      heroImage {
        file {
          url
        }
      }
    }
  }
`;

export const postEntryData = graphql`
  fragment postEntryData on ContentfulBlogPost {
    node_locale
    author {
      name
      id
    }
    body {
      childMarkdownRemark {
        html
      }
    }
    category {
      name
      id
    }
    description
    heroImage {
      gatsbyImageData(formats: AUTO)
      file {
        contentType
        details {
          image {
            height
            width
          }
        }
        fileName
        url
      }
      description
    }
    title
    createdAt
    updatedAt
    slug
  }
`;

export const siteData = graphql`
  fragment siteData on Site {
    siteMetadata {
      author
      social {
        twitter
        twitterId
        instagram
        github
      }
      title
      description
      siteUrl
      keywords
      image {
        src
        width
        height
        altDescription
        contentType
      }
    }
  }
`;
