import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import styles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          siteUrl
        }
      }
    }
  `);

  return (
    <footer className={styles.footer}>
      <h2>Get in touch.</h2>
      <p>
        Have something to say? <Link to="/contact">Hit me up</Link>.
      </p>
      <div className={styles.iconBucket}>
        <h2>\\\\\</h2>
        <p className={styles.footerParagraph}>
          Created by{" "}
          <a href={data.site.siteMetadata.siteUrl}>
            {" "}
            <span
              itemprop="creator"
              itemscope
              itemtype="https://schema.org/WebSite">
              {data.site.siteMetadata.author}
            </span>
          </a>{" "}
          <span
            itemprop="copyrightYear"
            itemscope
            itemtype="https://schema.org/WebSite">
            © {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
