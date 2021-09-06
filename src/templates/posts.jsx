import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import JsonLd from '../components/json-ld';
import Seo from '../components/seo';

const Posts = ({ pageContext, data, location }) => (
  <Layout location={location} pageTitle={pageContext.name}>
    <Seo
      metaTitle={pageContext.name}
      description={pageContext.description}
      metaKeywords={pageContext.keywords}
    />
    <JsonLd>
      {{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: location.origin,
        name: 'BrightShell, LLC',
      }}
    </JsonLd>
    {pageContext.type === `category`
      ? data.category.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/insights/${node.slug}`}>
              <h2>{node.title}</h2>
            </Link>
          </div>
        ))
      : pageContext.type === `author`
      ? data.author.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={`/insights/${node.slug}`}>
              <h2>{node.title}</h2>
            </Link>
          </div>
        ))
      : pageContext.type === `blog`
      ? data.blog.edges.map(({ node }) => (
          <div key={node.id}>
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
        ...postListingData
      }
    }
    author: allContentfulBlogPost(filter: { author: { id: { eq: $id } } }) {
      edges {
        ...postListingData
      }
    }
    tag: allContentfulBlogPost(
      filter: { metadata: { tags: { elemMatch: { id: { eq: $id } } } } }
    ) {
      edges {
        ...postListingData
      }
    }
    blog: allContentfulBlogPost {
      edges {
        ...postListingData
      }
    }
  }
`;
export default Posts;
