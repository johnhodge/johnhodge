import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import * as styles from "./footer.module.scss";

const Footer = ({ year, website }) => (
  <StaticQuery
    query={graphql`
      {
        allContentfulCompany {
          edges {
            ...contentfulSiteData
          }
        }
      }
    `}
    render={(data) => (
      <footer>
        <div className={styles.copyrightContainer}>
          <p>
            © {year}
            {"  "}
            <Link to="/" title={`Link to the ${data} homepage`}>
              {data.allContentfulCompany.edges
                .filter((filtered) => filtered.node.website === website)
                .map(({ node }) => node.name)}
            </Link>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
