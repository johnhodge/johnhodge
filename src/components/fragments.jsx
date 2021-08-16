import { graphql } from 'gatsby';

export const postData = graphql`
  fragment postData on ContentfulBlogPostEdge {
    node {
      title
      slug
      category {
        id
        name
      }
      metadata {
        tags {
          id
          name
        }
      }
    }
  }
`;
