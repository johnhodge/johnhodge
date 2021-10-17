import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import JsonLd from "../components/json-ld";

const NotFoundPage = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="404: Page not found">
      <Seo
        metaTitle={`No page: ${location.pathname.replace("/", "")}`}
        location={location}
      />
      <JsonLd schemaType="webpage" />
    </Layout>
  </div>
);

export default NotFoundPage;
