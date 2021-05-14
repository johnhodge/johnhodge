import React from "react";
// import { Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About" 
        description="I'm a NYC based Solution's Engineer and I work in Adtech with some of the smartest people in the solar system."
        pathname="/about"
      />
      <h1>About.</h1>
      <p>I'm John, I work in solutions and I play around with FM synthesis.</p>
      <h2>Profesh</h2>
      <h3>Solutions: TransUnion</h3>
      <p>Media and Entertainment Vertical</p>
      <h3>Solutions: FreeWheel</h3>
      <p>Comcast NBC Advanced Advertising BU</p>
      <h2>Education</h2>
      <h3>BS Technology Management</h3>
      <p>Eastern Michigan University</p>
      <h2>Fun</h2>
      <h3>Frequency Modulator and Synthsician</h3>
      <p>NYC based noise maker with a synth and a drum machine.</p>
      <h3>Amateur Cook</h3>
      <p>
        Open fire and cast iron flavor enthusiast. Heavy emphasis on “amateur”.
      </p>
    </Layout>
  );
};

export default About;
