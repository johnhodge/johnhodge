import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./solutions-index.module.scss";
import * as home from "../pages/index.module.scss";
import SolutionsGraphic from "./solutions-graphic";
import SolutionsDescription from "./solutions-description";

const SolutionsIndex = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulCompany {
          edges {
            ...Solutions
          }
        }
      }
    `}
    render={(data) => (
      <div className={home.hpSection}>
        <h2 className={home.hpSectionHeader}>Solutions</h2>
        {data.allContentfulCompany.edges.map(({ node }) =>
          node.solutions.map((solution, i) => (
            <div key={solution.id}>
              {i % 2 === 0 ? (
                <div
                  id={solution.solutionsName.toLowerCase().replace(/\W/gm, `-`)}
                  className={styles.solutionsContainer}
                >
                  <SolutionsGraphic
                    src={solution.solutionsGraphic.file.url}
                    title={solution.solutionsGraphic.title}
                    alt={solution.solutionsGraphic.description}
                    header={solution.solutionsName}
                  />
                  <SolutionsDescription
                    description={solution.solutionsDescription}
                  />
                </div>
              ) : (
                <div
                  id={solution.solutionsName.toLowerCase().replace(/\W/gm, `-`)}
                  className={styles.solutionsContainerSwitch}
                  key={solution.id}
                >
                  <SolutionsDescription
                    description={solution.solutionsDescription}
                  />
                  <SolutionsGraphic
                    src={solution.solutionsGraphic.file.url}
                    title={solution.solutionsGraphic.title}
                    alt={solution.solutionsGraphic.description}
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
