import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import JsonLd from "../../components/json-ld";
import MeetingRequestForm from "../../components/form-meeting-req";

const Contact = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="Request a Meeting">
      <Seo metaTitle="Request a Meeting" location={location} />
      <JsonLd schemaType="webpage" />
      <p>
        Please tell us a little about your place in the industry and what you
        need help with and we&apos;ll be in touch to discuss solutions.
      </p>
      <MeetingRequestForm />
    </Layout>
  </div>
);

export default Contact;
