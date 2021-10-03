import * as React from "react";
import Layout from "../components/layout";
import JsonLd from "../components/json-ld";
import Seo from "../components/seo";

const Posts = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="John Hodge">
      <Seo metaTitle="Home" />
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "Organization",
          url: location.origin,
          name: "BrightShell, LLC",
        }}
      </JsonLd>
    </Layout>
  </div>
);
export default Posts;
