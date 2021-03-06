import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFound = () => {
  return (
    <Layout>
      <SEO metaTitle="404" />
      <h1>Page not found</h1>
      <p>Oops! The page you are looking for has been removed or relocated.</p>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
