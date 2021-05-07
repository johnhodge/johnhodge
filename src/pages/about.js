import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <h2>Always solutioning, habitually making loud organized chaos.</h2>
      <p>I'm a Solutions Engineer in the Adtech space, I spend my freetime cooking and playing with noise (#FMSynth), and I'm down with elegant and intuitive solutioning. </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out.</Link>
      </p>
    </Layout>
  );
};

export default About;
