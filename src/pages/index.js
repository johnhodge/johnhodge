import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';


const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'm John, I work in solutions and I play around with FM synthesis.</h2>
      <p>Want to get in contact with me? Please feel free to <Link to="/contact">drop me a line</Link>.</p>
    </Layout>
  );
};

export default Index;
