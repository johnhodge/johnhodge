import * as React from "react";
import Layout from "../components/layout";
import JsonLd from "../components/json-ld";
import Seo from "../components/seo";
import SolutionsIndex from "../components/solutions-index";
import Testimonials from "../components/testimonials";
import AboutIndex from "../components/about-index";

const Posts = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="BrightShell, LLC">
      <Seo metaTitle="Home" location={location} />
      <JsonLd schemaType="webpage" />
      <SolutionsIndex />
      {/* <AboutIndex />
      <Testimonials /> */}
    </Layout>
  </div>
);
export default Posts;
