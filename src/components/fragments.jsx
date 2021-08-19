import { graphql } from 'gatsby';

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
    body {
      childMarkdownRemark {
        html
      }
    }
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
    updatedAt
    author {
      name
    }
    heroImage {
      file {
        url
      }
    }
  }
`;
