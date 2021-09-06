import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import JsonLd from '../components/json-ld';
import Seo from '../components/seo';

const Posts = ({ data, location }) => (
  <Layout location={location} pageTitle='John Hodge'>
    <Seo metaTitle='Home' />
    <JsonLd>
      {{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: location.origin,
        name: 'BrightShell, LLC',
      }}
    </JsonLd>
    <div>
      <p>Old man winter.</p>
    </div>
  </Layout>
);
export default Posts;
