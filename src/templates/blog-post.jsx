import React from 'react';
import { graphql } from 'gatsby';
import DOMPurify from 'isomorphic-dompurify';
import JsonLd from '../components/json-ld';
import Layout from '../components/layout';
import Article from '../components/article';

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost;
  var cleanHTML = post.body.childMarkdownRemark.html;

  return (
    <Layout featuredImage={post.heroImage.file.url} pageTitle={post.title}>
      <JsonLd>
        {{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          url: 'http://www.example.com',
          name: 'My website',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-401-555-1212',
            contactType: 'Customer service',
          },
        }}
      </JsonLd>
      <Article post={post} />
      <section
        dangerouslySetInnerHTML={{ __html: cleanHTML }}
        itemProp='articleBody'
      />
    </Layout>
  );
};
export const query = graphql`
  query Blog($slug: String = "") {
    contentfulBlogPost(slug: { eq: $slug }) {
      ...postEntryData
    }
  }
`;
export default BlogPost;
