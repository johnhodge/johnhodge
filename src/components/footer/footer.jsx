import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import * as styles from "./footer.module.scss";

const Footer = ({ year }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          ...gatsbySiteData
        }
      }
    `}
    render={(data) => (
      <footer>
        <div className={styles.copyrightContainer}>
          <p>
            © {year}
            {"  "}
            <Link
              to="/"
              title={`Link to the ${data.site.siteMetadata.title} homepage`}
            >
              {data.site.siteMetadata.title}
            </Link>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
