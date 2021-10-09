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
      const [active, setActive] = useState(quote[0]);
      const handleSetClick = (event) => {
        setCurrent(quote[event.target.getAttribute("data-testimonial")]);
        setActive(quote[event.target.getAttribute("data-testimonial")]);
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
                className={styles.testimonialBody}
                dangerouslySetInnerHTML={{
                  __html: current.testimonial.childrenMarkdownRemark[0].html,
                }}
              />
              <div className={styles.selectors}>
                {Object.keys(quote).map((i) => (
                  <div
                    className={
                      active.id === quote[i].id
                        ? styles.active
                        : styles.inactive
                    }
                    aria-checked={active.id === quote[i].id ? "true" : "false"}
                    onClick={(event) => handleSetClick(event)}
                    onKeyDown={(event) => handleSetClick(event)}
                    role="checkbox"
                    data-testimonial={i}
                    key={i}
                    tabIndex="0"
                    aria-label={`Select ${quote[i].id}'s testimonial`}
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
