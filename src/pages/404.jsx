import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import JsonLd from "../components/json-ld";

const NotFoundPage = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="404: Page not found">
      <Seo metaTitle={`No page: ${location.pathname.replace("/", "")}`} />
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

export default NotFoundPage;
