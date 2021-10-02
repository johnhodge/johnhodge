import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./footer.module.scss";

const Footer = ({ data }) => {
  const today = new Date();
  const year = today.getFullYear();
  const siteData = data.site.siteMetadata;
  return (
    <footer>
      <p className={styles.copyrightInfo}>
        © {year}
        {"  "}
        <Link to="/" title={`Link to the ${siteData.title} homepage`}>
          {siteData.title}, LLC
        </Link>
      </p>
    </footer>
  );
};
export default Footer;
