import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import * as styles from "./footer.module.scss";

const Footer = ({ year }) => (
  <StaticQuery
    query={graphql`
      {
        contentfulCompany {
          name
        }
      }
    `}
    render={(data) => (
      <footer>
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightInfo}>
            © {year}
            {"  "}
            <Link
              to="/"
              title={`Link to the ${data.contentfulCompany.name} homepage`}
            >
              {data.contentfulCompany.name}, LLC
            </Link>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
