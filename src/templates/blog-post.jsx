import React from 'react';
import { graphql } from 'gatsby';
import JsonLd from '../components/json-ld';
import Layout from '../components/layout';

const BlogPost = ({ data, location }) => {
  const post = data.contentfulBlogPost;
  var cleanHTML = post.body.childMarkdownRemark.html;

  return (
    <Layout
      location={location}
      featuredImage={post.heroImage.file.url}
      pageTitle={post.title}
      post={post}>
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
