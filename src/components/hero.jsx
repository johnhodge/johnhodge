import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./hero.module.scss";
import * as home from "../pages/index.module.scss";
import Cta from "./cta";

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
      <div className={home.hpSection}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>
            {data.contentfulCompany.homepageHeadline}
          </h1>
          <Cta
            ctaUrl="/lp/request-meeting/"
            ctaName={data.contentfulCompany.homepageCtaText}
            ctaText={data.contentfulCompany.homepageCtaText}
            ctaClass="accentCta"
          />
        </div>
      </div>
    )}
  />
);

export default HomepageHero;
