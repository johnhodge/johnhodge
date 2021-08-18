import React from 'react';
import { graphql, Link } from 'gatsby';
import DOMPurify from 'dompurify';
import JsonLd from '../components/json-ld';
import Layout from '../components/layout';
import * as styles from '../templates/blog-post.module.scss';

const BlogPost = ({ data }) => {
  const post = data.contentfulBlogPost;
  var cleanHTML = DOMPurify.sanitize(post.body.childMarkdownRemark.html);

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

      <article>
        <h1 className={styles.headerText}>{post.title}</h1>
        <div>
          <Link
            to={`/category/${post.category.name
              .toLowerCase()
              .replace(/\W/gm, '-')}`}
            link={`Link to ${post.category.name} listing page`}>
            {post.category.name}
          </Link>
        </div>
      </article>
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
      heroImage {
        file {
          url
        }
      }
    }
  }
`;
export default BlogPost;
