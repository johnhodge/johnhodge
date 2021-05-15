import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import styles from "./form.module.scss";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().min(10, "Too short!").required("Required"),
});

const BasicForm = () => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, actions) => {
        await sleep(500);
        actions.submitForm();
        actions.setSubmitting(false);
        actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        actions.setStatus({ success: "Message received 🎉" });
      }}>
      {({ errors, touched, isSubmitting, isValid, status }) => (
        <Form
          name="basic-form"
          className={styles.form}
          method="POST"
          noValidate
          netlify>
          <Field name="firstName" type="text" placeholder="First Name" />
          {errors.firstName && touched.firstName ? (
            <div className={styles.errors}>{errors.firstName}</div>
          ) : null}
          <Field name="lastName" type="text" placeholder="Last Name" />
          {errors.lastName && touched.lastName ? (
            <div className={styles.errors}>{errors.lastName}</div>
          ) : null}
          <Field name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? (
            <div className={styles.errors}>{errors.email}</div>
          ) : null}
          <Field name="message" component="textarea" placeholder="Message" />
          {errors.message && touched.message ? (
            <div className={styles.errors}>{errors.message}</div>
          ) : null}

          {!status ? (
            <button type="submit" disabled={isSubmitting || !isValid}>
              Send
            </button>
          ) : (
            <div className={styles.messageSuccess}>{status.success}</div>
          )}
        </Form>
      )}
    </Formik>
  </div>
);

export default BasicForm;
