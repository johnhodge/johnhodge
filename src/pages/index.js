import React from 'react';

import Layout from '../components/layout';
import BlogRoll from '../components/blog-roll';
import SEO from '../components/seo';

const Index = () => {
  return (
    <Layout>
      <SEO metaTitle='Home' pathname='/' />
      <h1>Hello!</h1>
      <p>I'm John, I work in solutions and I play around with FM synthesis.</p>
      <h2>Recent posts.</h2>
      <BlogRoll />
    </Layout>
  );
};

export default Index;
