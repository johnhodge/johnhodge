import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Posts = ({ data }) => (
  <Layout pageTitle='John Hodge'>
    <div>
      <p>Old man winter.</p>
    </div>
  </Layout>
);

export const query = graphql`
  query post {
    allContentfulBlogPost {
      edges {
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
    }
  }
`;
export default Posts;
