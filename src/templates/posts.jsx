import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import JsonLd from "../components/json-ld";
import Seo from "../components/seo";
import PostListing from "../components/post-listing";

const Posts = ({ pageContext, data, location }) => (
  <Layout location={location} pageTitle={pageContext.name}>
    <Seo
      metaTitle={pageContext.name}
      description={pageContext.description}
      metaKeywords={pageContext.keywords}
      location={location}
    />
    <JsonLd schemaType="webpage" />
    {pageContext.type === `category` ? (
      <PostListing data={data.category} />
    ) : pageContext.type === `author` ? (
      <PostListing data={data.author} />
    ) : pageContext.type === `blog` ? (
      <PostListing data={data.blog} />
    ) : (
      ""
    )}
  </Layout>
);

export const query = graphql`
  query posts($id: String = "") {
    category: allContentfulBlogPost(
      filter: { category: { id: { eq: $id } } }
      sort: { fields: createdAt, order: DESC }
      limit: 10
    ) {
      edges {
        ...postListingData
      }
    }
    author: allContentfulBlogPost(
      filter: { author: { id: { eq: $id } } }
      sort: { fields: createdAt, order: DESC }
      limit: 10
    ) {
      edges {
        ...postListingData
      }
    }
    tag: allContentfulBlogPost(
      filter: { metadata: { tags: { elemMatch: { id: { eq: $id } } } } }
      sort: { fields: createdAt, order: DESC }
      limit: 10
    ) {
      edges {
        ...postListingData
      }
    }
    blog: allContentfulBlogPost(
      sort: { fields: createdAt, order: DESC }
      limit: 10
    ) {
      edges {
        ...postListingData
      }
    }
  }
`;
export default Posts;
