import React from 'react';
import { graphql, Link } from 'gatsby';
import DOMPurify from 'dompurify';

import JsonLd from '../components/json-ld';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost;
  var cleanHTML = DOMPurify.sanitize(post.body.childMarkdownRemark.html);

  return (
    <Layout pageTitle={post.title}>
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
      <div>
        <Link
          to={`/category/${post.category.name
            .toLowerCase()
            .replace(/\W/gm, '-')}`}>
          {post.category.name}
        </Link>
      </div>
      <div>
        {post.metadata.tags.map((tag, i) => {
          return (
            <span key={i}>
              <Link to={`/tag/${tag.name.toLowerCase().replace(/\W/gm, '-')}`}>
                {tag.name}
              </Link>
              {post.metadata.tags.length - (i + 1) > 0 ? `, ` : ``}
            </span>
          );
        })}
      </div>
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
    }
  }
`;
export default BlogPost;
