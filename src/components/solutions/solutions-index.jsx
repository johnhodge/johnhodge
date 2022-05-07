import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./solutions-index.module.scss";
import * as home from "../../pages/index.module.scss";
import HeadlineGraphic from "../headline-graphic/headline-graphic";
import SolutionsDescription from "./solutions-description";

const SolutionsIndex = ({ location }) => (
  <StaticQuery
    query={graphql`
      {
        allContentfulCompany {
          edges {
            ...SolutionsData
          }
        }
      }
    `}
    render={(data) => (
      <div className={home.hpSection}>
        <h2 className={home.hpSectionHeader}>Solutions</h2>
        {data.allContentfulCompany.edges
          .filter(
            (filtered) =>
              filtered.node.website ===
              (process.env.NODE_ENV !== "development"
                ? location.origin
                : "https://www.johnhodge.com")
          )
          .map(({ node }) =>
            node.solutions.map((solution, i) => (
              <div key={solution.id}>
                {i % 2 === 0 ? (
                  <div
                    id={solution.solutionsName
                      .toLowerCase()
                      .replace(/\W/gm, `-`)}
                    className={styles.solutionsContainer}
                  >
                    <HeadlineGraphic
                      src={solution.solutionsGraphic.file.url}
                      title={solution.solutionsGraphic.title}
                      alt={solution.solutionsGraphic.description}
                      width={solution.solutionsGraphic.file.details.image.width}
                      height={
                        solution.solutionsGraphic.file.details.image.height
                      }
                      header={solution.solutionsName}
                    />
                    <SolutionsDescription
                      description={solution.solutionsDescription}
                    />
                  </div>
                ) : (
                  <div
                    id={solution.solutionsName
                      .toLowerCase()
                      .replace(/\W/gm, `-`)}
                    className={styles.solutionsContainerSwitch}
                    key={solution.id}
                  >
                    <SolutionsDescription
                      description={solution.solutionsDescription}
                    />
                    <HeadlineGraphic
                      src={solution.solutionsGraphic.file.url}
                      title={solution.solutionsGraphic.title}
                      alt={solution.solutionsGraphic.description}
                      width={solution.solutionsGraphic.file.details.image.width}
                      height={
                        solution.solutionsGraphic.file.details.image.height
                      }
                      header={solution.solutionsName}
                    />
                  </div>
                )}
              </div>
            ))
          )}
      </div>
    )}
  />
);

export default SolutionsIndex;
