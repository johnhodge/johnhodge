import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as home from "../../pages/index.module.scss";
import * as styles from "./about-index.module.scss";

const AboutIndex = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulAuthor(id: { eq: "85a99f23-18ba-5b12-87e2-282595b55fba" }) {
          shortBio {
            childrenMarkdownRemark {
              html
            }
          }
          headshot {
            gatsbyImageData(aspectRatio: 1, width: 350)
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <div className={home.hpSection}>
        <h2 className={home.hpSectionHeader}>About</h2>
        <div>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutImage}>
              <GatsbyImage
                image={getImage(data.contentfulAuthor.headshot)}
                title={data.contentfulAuthor.headshot.title}
                alt={data.contentfulAuthor.headshot.description}
              />
            </div>
            <div className={styles.aboutText}>
              <h3>BrightShell and John</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.contentfulAuthor.shortBio.childrenMarkdownRemark[0]
                      .html,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    )}
  />
);

export default AboutIndex;
