import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const Posts = ({ pageContext, data }) => (
  <Layout pageTitle={pageContext.name}>
    {pageContext.type === `category`
      ? data.category.edges.map(({ node, i }) => (
          <div key={i}>
            <Link to={`/insights/${node.slug}`}>
              <h2>{node.title}</h2>
            </Link>
          </div>
        ))
      : pageContext.type === `tag`
      ? data.tag.edges.map(({ node, i }) => (
          <div key={i}>
            <Link to={`/insights/${node.slug}`}>
              <h2>{node.title}</h2>
            </Link>
          </div>
        ))
      : pageContext.type === `blog`
      ? data.blog.edges.map(({ node, i }) => (
          <div key={i}>
            <Link to={`/insights/${node.slug}`}>
              <h2>{node.title}</h2>
            </Link>
          </div>
        ))
      : ''}
  </Layout>
);

export const query = graphql`
  query posts($id: String = "") {
    category: allContentfulBlogPost(filter: { category: { id: { eq: $id } } }) {
      edges {
        ...postData
      }
    }
    tag: allContentfulBlogPost(
      filter: { metadata: { tags: { elemMatch: { id: { eq: $id } } } } }
    ) {
      edges {
        ...postData
      }
    }
    blog: allContentfulBlogPost {
      edges {
        ...postData
      }
    }
  }
`;
export default Posts;
