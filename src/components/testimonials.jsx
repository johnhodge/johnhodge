import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./testimonials.module.scss";
import * as home from "../pages/index.module.scss";

const Testimonials = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulTestimonial(filter: { lastName: { eq: "Rohrs" } }) {
          edges {
            node {
              id
              firstName
              lastName
              jobTitle
              companyName
              testimonial {
                testimonial
              }
              headshot {
                title
                description
                gatsbyImageData(placeholder: DOMINANT_COLOR)
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className={home.hpSection}>
        <h2 className={home.hpSectionHeader}>Testimonials</h2>
        {data.allContentfulTestimonial.edges.map((testimonial) => (
          <div className={styles.testimonialContainer} key={testimonial.id}>
            <div className={styles.desktopTestimonialImageContainer}>
              <GatsbyImage
                className={styles.testimonialImage}
                image={getImage(testimonial.node.headshot)}
                title={testimonial.node.headshot.title}
                alt={testimonial.node.headshot.description}
              />
            </div>
            <div className={styles.testimonialText}>
              <p>{testimonial.node.testimonial.testimonial}</p>
              <div className={styles.testimonialFooter}>
                <div className={styles.mobileTestimonialImageContainer}>
                  <GatsbyImage
                    className={styles.testimonialImage}
                    image={getImage(testimonial.node.headshot)}
                    title={testimonial.node.headshot.title}
                    alt={testimonial.node.headshot.description}
                  />
                </div>
                <div className={styles.testimonialFooterHeaders}>
                  <h3>
                    {testimonial.node.firstName} {testimonial.node.lastName}
                  </h3>
                  <h3>{testimonial.node.jobTitle}</h3>
                  <h3>{testimonial.node.companyName}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  />
);

export default Testimonials;
