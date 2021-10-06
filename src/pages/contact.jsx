import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import ContactForm from "../components/contact-form";
import JsonLd from "../components/json-ld";

const Contact = (location) => (
  <div>
    <Layout location={location} pageTitle="Contact">
      <Seo metaTitle="Contact" />
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "Organization",
          url: location.origin,
          name: "BrightShell, LLC",
        }}
      </JsonLd>
      <ContactForm />
    </Layout>
  </div>
);

export default Contact;
