import React from "react";

import LpLayout from "../components/lp-layout";
import SEO from "../components/seo";
import BasicForm from "../components/form";

// import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <LpLayout>
      <SEO 
        title="Contact" 
        description="Don't hesitate to reach out, just please be patient with me while I thinkof the perfect response!"
        pathname="/contact"
      />
      <h1>Contact.</h1>
      <BasicForm />
    </LpLayout>
  );
};

export default Contact;
