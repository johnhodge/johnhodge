import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as styles from "./form.module.scss";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "That's a little long.")
    .min(2, "Too short!")
    .required("Please enter a first name."),
  lastName: Yup.string()
    .max(50, "That's a little long.")
    .required("Last name required, you can also share your last initial."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter a valid email."),
  message: Yup.string()
    .min(10, "This message is too short.")
    .required("Message field can't be blank."),
});

const ContactForm = () => (
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
      }}
    >
      {({ errors, touched, isSubmitting, isValid, status }) => (
        <div>
          {status ? (
            <div>
              <h2>Thanks for reaching out</h2>
              <p>
                Your message has been delivered, someone will follow up with you
                shortly.
              </p>
            </div>
          ) : (
            <Form
              name="contact-form"
              className={styles.form}
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
                className={
                  errors.firstName && touched.firstName
                    ? styles.invalidFieldEntry
                    : !errors.firstName && touched.firstName
                    ? styles.validFieldEntry
                    : ""
                }
              />
              {errors.firstName && touched.firstName ? (
                <div className={styles.errors}>{errors.firstName}</div>
              ) : null}
              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
                className={
                  errors.lastName && touched.lastName
                    ? styles.invalidFieldEntry
                    : !errors.lastName && touched.lastName
                    ? styles.validFieldEntry
                    : ""
                }
              />
              {errors.lastName && touched.lastName ? (
                <div className={styles.errors}>{errors.lastName}</div>
              ) : null}
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={
                  errors.email && touched.email
                    ? styles.invalidFieldEntry
                    : !errors.email && touched.email
                    ? styles.validFieldEntry
                    : ""
                }
              />
              {errors.email && touched.email ? (
                <div className={styles.errors}>{errors.email}</div>
              ) : null}
              <Field
                name="message"
                component="textarea"
                placeholder="Message"
                className={
                  errors.message && touched.message
                    ? styles.invalidFieldEntry
                    : !errors.message && touched.message
                    ? styles.validFieldEntry
                    : ""
                }
              />
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
        </div>
      )}
    </Formik>
  </div>
);

export default ContactForm;
