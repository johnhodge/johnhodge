import React from 'react';

import Layout from '../components/layout';
import BlogRoll from '../components/blog-roll';
import SEO from '../components/seo';

const Blog = () => {
  return (
    <Layout>
      <SEO
        metaTitle='Blog'
        description='This blog is a space for me to log what I learn in my professional travels as a tech-wise client-facing solutions engineer.'
        pathname='/blog'
      />
      <h1>Blog.</h1>
      <BlogRoll />
    </Layout>
  );
};

export default Blog;
