import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import * as styles from "./hero.module.scss";

const HomepageHero = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulCompany {
          logo {
            description
            title
            file {
              url
            }
          }
          homepageCtaText
          homepageHeadline
        }
      }
    `}
    render={(data) => (
      <div>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>
            {data.contentfulCompany.homepageHeadline}
          </h1>
          <Link to="/contact" class="btn-primary">
            {data.contentfulCompany.homepageCtaText}
          </Link>
        </div>
      </div>
    )}
  />
);

export default HomepageHero;
