import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./testimonials.module.scss";
import * as home from "../pages/index.module.scss";

const Testimonials = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulCompany {
          edges {
            node {
              testimonial {
                id
                firstName
                lastName
                jobTitle
                companyName
                headshot {
                  title
                  description
                  gatsbyImageData(aspectRatio: 1, placeholder: BLURRED)
                }
                testimonial {
                  childrenMarkdownRemark {
                    html
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const quote = data.allContentfulCompany.edges[0].node.testimonial;
      const [current, setCurrent] = useState(quote[0]);
      const [active, setActive] = useState(0);
      const handleSetClick = (event) => {
        setCurrent(quote[event.target.getAttribute("data-testimonial")]);
        setActive([event.target.getAttribute("data-testimonial")]);
      };
      return (
        <div className={home.hpSection}>
          <h2 className={home.hpSectionHeader}>Testimonials</h2>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <div className={styles.testimonialPerson}>
                <div className={styles.personImageContainer}>
                  <GatsbyImage
                    className={styles.testimonialImage}
                    image={getImage(current.headshot)}
                    title={current.headshot.title}
                    alt={current.headshot.description}
                  />
                </div>
                <div className={styles.personTextContainer}>
                  <h3>
                    {current.firstName} {current.lastName}
                  </h3>
                  <h3>{current.jobTitle}</h3>
                  <h3>{current.companyName}</h3>
                </div>
              </div>
            </div>
            <div className={styles.testimonialText}>
              <div
                dangerouslySetInnerHTML={{
                  __html: current.testimonial.childrenMarkdownRemark[0].html,
                }}
              />
              <div className={styles.selectors}>
                {Object.keys(quote).map((i) => (
                  <div
                    className={active == i ? styles.active : styles.inactive}
                    onClick={(event) => handleSetClick(event)}
                    data-testimonial={i}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }}
  />
);

export default Testimonials;
