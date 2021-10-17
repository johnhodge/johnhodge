import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";
import JsonLd from "../components/json-ld";

const Contact = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="Contact">
      <Seo metaTitle="Contact" location={location} />
      <JsonLd schemaType="webpage" />
      <ContactForm />
    </Layout>
  </div>
);

export default Contact;
