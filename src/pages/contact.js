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
        description="TEST"
      />
      <h1>Contact.</h1>
      <BasicForm />
    </LpLayout>
  );
};

export default Contact;
