import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./sitepage-hero.module.scss";

const SitepageHero = ({ pageTitle, featuredImage }) => (
  <StaticQuery
    query={graphql`
      {
        allContentfulCompany(
          filter: { id: { eq: "b609af1b-49b4-5251-94fb-32a3da3ebf11" } }
        ) {
          edges {
            ...contentfulSiteData
          }
        }
      }
    `}
    render={(data) => (
      <div className={styles.featuredImage}>
        <img
          src={
            featuredImage ||
            `https:${data.allContentfulCompany.edges[0].node.logo.file.url}`
          }
          alt={`${pageTitle}`}
          title={`${pageTitle}`}
        />
        {console.log(data.allContentfulCompany.edges[0].node.logo.file.url)}
      </div>
    )}
  />
);

export default SitepageHero;
