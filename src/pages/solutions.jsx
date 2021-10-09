import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import JsonLd from "../components/json-ld";
import * as styles from "./solutions.module.scss";
import SolutionsGraphic from "../components/solutions-graphic";
import SolutionsDescription from "../components/solutions-description";

const Solutions = ({ data, location }) => (
  <div>
    <Layout location={location} pageTitle="Solutions">
      <Seo metaTitle="Solutions" />
      <JsonLd>
        {{
          "@context": "https://schema.org",
          "@type": "Organization",
          url: location.origin,
          name: "BrightShell, LLC",
        }}
      </JsonLd>
      <div className={styles.solutionsBuckets}>
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
