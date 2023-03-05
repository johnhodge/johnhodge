import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as styles from "./form.module.scss";
import Button from "../button/button";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "That's a little long.")
    .min(2, "Too short!")
    .required("First name required."),
  lastName: Yup.string()
    .max(50, "That's a little long.")
    .required("Last name required, you can also share your last initial."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter a valid email."),
  company: Yup.string()
    .max(50, "That's a little long.")
    .min(2, "Too short!")
    .required("Please enter a company name."),
  hs_persona: Yup.string().required(
    "Please select the option that best describes you."
  ),
  industry: Yup.string().required(
    "Please select the option that best describes your firm."
  ),
  message: Yup.string()
    .min(10, "This message is too short.")
    .required("Message field can't be blank."),
});

const MeetingRequestForm = () => (
  <div>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        hs_persona: "",
        industry: "",
        country: "",
        phone: "",
        project_timeline: "",
        message: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, actions) => {
        await sleep(500);
        actions.submitForm(values);
        actions.setSubmitting(false);
        actions.resetForm({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          hs_persona: "",
          industry: "",
          country: "",
          phone: "",
          project_timeline: "",
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
                name="company"
                type="text"
                placeholder="Company Name"
                className={
                  errors.company && touched.company
                    ? styles.invalidFieldEntry
                    : !errors.company && touched.company
                    ? styles.validFieldEntry
                    : ""
                }
              />
              {errors.company && touched.company ? (
                <div className={styles.errors}>{errors.company}</div>
              ) : null}
              <Field
                name="industry"
                component="select"
                placeholder="industry"
                className={
                  errors.industry && touched.industry
                    ? styles.invalidFieldEntry
                    : !errors.industry && touched.industry
                    ? styles.validFieldEntry
                    : ""
                }
              >
                <option value="" disabled selected>
                  Which best describes your company?
                </option>
                <option value="programmer">Programmer</option>
                <option value="distributor">Distributor</option>
                <option value="reseller">Reseller</option>
              </Field>
              {errors.industry && touched.industry ? (
                <div className={styles.errors}>{errors.industry}</div>
              ) : null}
              <Field
                name="hs_persona"
                component="select"
                className={
                  errors.hs_persona && touched.hs_persona
                    ? styles.invalidFieldEntry
                    : !errors.hs_persona && touched.hs_persona
                    ? styles.validFieldEntry
                    : ""
                }
              >
                <option value="" disabled selected>
                  Which best describes you?
                </option>
                <option value="persona_1">AdOps Manager/Director</option>
                <option value="persona_2">Programmatic Sales Lead</option>
                <option value="persona_3">Direct Sales Lead</option>
                <option value="persona_4">Player Developer</option>
                <option value="persona_5">
                  Content Partnership Manager/Director
                </option>
                <option value="persona_6">
                  Distributor Partnership Manager/Director
                </option>
              </Field>
              {errors.hs_persona && touched.hs_persona ? (
                <div className={styles.errors}>{errors.hs_persona}</div>
              ) : null}
              {errors.jobtitle && touched.jobtitle ? (
                <div className={styles.errors}>{errors.jobtitle}</div>
              ) : null}
              <Field
                name="country"
                type="text"
                placeholder="Country"
                className={
                  errors.country && touched.country
                    ? styles.invalidFieldEntry
                    : !errors.country && touched.country
                    ? styles.validFieldEntry
                    : ""
                }
              />
              {errors.country && touched.country ? (
                <div className={styles.errors}>{errors.country}</div>
              ) : null}
              <Field
                name="phone"
                type="tel"
                placeholder="Phone"
                className={
                  errors.phone && touched.phone
                    ? styles.invalidFieldEntry
                    : !errors.phone && touched.phone
                    ? styles.validFieldEntry
                    : ""
                }
              />
              {errors.phone && touched.phone ? (
                <div className={styles.errors}>{errors.phone}</div>
              ) : null}
              <Field
                name="project_timeline"
                component="select"
                className={
                  errors.project_timeline && touched.project_timeline
                    ? styles.invalidFieldEntry
                    : !errors.project_timeline && touched.project_timeline
                    ? styles.validFieldEntry
                    : ""
                }
              >
                <option value="" disabled selected>
                  When will you need help?
                </option>
                <option value="yesterday">Yesterday</option>
                <option value="within_30_days">Within 30 days</option>
                <option value="next_month">Next Month</option>
                <option value="this_quarter">This Quarter</option>
                <option value="next_quarter">Next Quarter</option>
                <option value="next_year">Next Year</option>
              </Field>
              {errors.project_timeline && touched.project_timeline ? (
                <div className={styles.errors}>{errors.project_timeline}</div>
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
              <Button
                isSubmitting={isSubmitting}
                isValid={isValid}
                buttonText="Send Request"
              />
            </Form>
          )}
        </div>
      )}
    </Formik>
  </div>
);

export default MeetingRequestForm;
