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
          <p>
            © {year}
            {"  "}
            <Link to="/" title="Link to the John Hodge homepage">
              John Hodge
            </Link>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
