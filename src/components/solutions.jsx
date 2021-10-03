import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./solutions.module.scss";
import * as home from "../pages/index.module.scss";

const Solutions = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulCompany {
          solutions {
            id
            solutionsName
            solutionsDescription
            solutionsAlternateDescription
            solutionsGraphic {
              file {
                fileName
                url
                details {
                  image {
                    height
                    width
                  }
                }
                contentType
              }
              description
              title
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className={home.hpSection}>
        <h2 className={home.hpSectionHeader}>Solutions</h2>
        {data.contentfulCompany.solutions.map((solution, i) =>
          i % 2 === 0 ? (
            <div className={styles.solutionsContainer} key={solution.id}>
              <div className={styles.imageContainer}>
                <h2 className={styles.solutionsName}>
                  {solution.solutionsName}
                </h2>
                <img
                  src={solution.solutionsGraphic.file.url}
                  title={solution.solutionsGraphic.title}
                  alt={solution.solutionsGraphic.description}
                  className={styles.solutionsGraphic}
                />
              </div>
              <div className={styles.descriptionContainer}>
                <p>{solution.solutionsDescription}</p>
              </div>
            </div>
          ) : (
            <div
              className={[styles.solutionsContainerSwitch]}
              key={solution.id}
            >
              <div className={styles.descriptionContainer}>
                <p>{solution.solutionsDescription}</p>
              </div>
              <div className={styles.imageContainer}>
                <h2 className={styles.solutionsName}>
                  {solution.solutionsName}
                </h2>
                <img
                  src={solution.solutionsGraphic.file.url}
                  title={solution.solutionsGraphic.title}
                  alt={solution.solutionsGraphic.description}
                  className={styles.solutionsGraphic}
                />
              </div>
            </div>
          )
        )}
      </div>
    )}
  />
);

export default Solutions;
