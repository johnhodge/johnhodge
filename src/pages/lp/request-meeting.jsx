import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo/seo";
import JsonLd from "../../components/seo/json-ld";
import MeetingRequestForm from "../../components/forms/form-meeting-req";

const Contact = ({ location }) => (
  <div>
    <Layout location={location} pageTitle="Request a Meeting">
      <Seo metaTitle="Request a Meeting" location={location} />
      <JsonLd schemaType="webpage" />
      <p>
        Please share a little about your place in the industry and what you need
        help with and let&apos;s discuss solutions.
      </p>
      <MeetingRequestForm />
    </Layout>
  </div>
);

export default Contact;
