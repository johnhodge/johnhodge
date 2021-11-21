import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo/seo";
import JsonLd from "../components/seo/json-ld";
import * as styles from "./solutions.module.scss";
import SolutionsGraphic from "../components/solutions/solutions-graphic";
import SolutionsDescription from "../components/solutions/solutions-description";

const Solutions = ({ data, location }) => (
  <div>
    <Layout location={location} pageTitle="Solutions">
      <Seo metaTitle="Solutions" location={location} />
      <JsonLd schemaType="webpage" />
      <div>
        {data.allContentfulCompany.edges.map(({ node }) =>
          node.solutions.map((solution) => (
            <div
              id={solution.solutionsName.toLowerCase().replace(/\W/gm, `-`)}
              className={styles.solutionsContainer}
              key={node.id}
            >
              <SolutionsGraphic
                src={solution.solutionsGraphic.file.url}
                title={solution.solutionsGraphic.title}
                alt={solution.solutionsGraphic.description}
                width={solution.solutionsGraphic.file.details.image.width}
                height={solution.solutionsGraphic.file.details.image.height}
                header={solution.solutionsName}
              />
              <SolutionsDescription
                description={solution.solutionsAlternateDescription}
                benefits={solution.solutionsBenefits}
              />
            </div>
          ))
        )}
      </div>
    </Layout>
  </div>
);

export const query = graphql`
  {
    allContentfulCompany {
      edges {
        ...SolutionsData
      }
    }
  }
`;

export default Solutions;
