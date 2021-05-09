import React from 'react';

import LpLayout from '../components/lp-layout';
import Head from '../components/head';
import BasicForm from '../components/form'

// import styles from "./contact.module.scss";

const Contact = ({values}) => {
  return (
    <LpLayout>
      <Head title="Contact" /> 
      <h1>Contact.</h1>   
      <BasicForm />
    </LpLayout>
  );
};

export default Contact;
