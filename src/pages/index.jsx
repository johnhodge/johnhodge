import * as React from "react";
import Layout from "../components/layout";
import JsonLd from "../components/seo/json-ld";
import Seo from "../components/seo/seo";
import SolutionsIndex from "../components/solutions/solutions-index";
import Testimonials from "../components/testimonials/testimonials";
import AboutIndex from "../components/about/about-index";

const Posts = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="BrightShell, LLC">
      <Seo metaTitle="Home" location={location} />
      <JsonLd schemaType="webpage" />
      <SolutionsIndex location={location} />
      <AboutIndex />
      <Testimonials />
    </Layout>
  </div>
);
export default Posts;
