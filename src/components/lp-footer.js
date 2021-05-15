import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './footer.module.scss';

const LpFooter = () => {
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
      <div className={styles.iconBucket}>
        <h2>\\\\\</h2>
        <p className={styles.footerParagraph}>
          Created by{' '}
          <a href={data.site.siteMetadata.siteUrl}>
            {' '}
            <span
              itemProp='creator'
              itemScope
              itemType='https://schema.org/WebSite'>
              {data.site.siteMetadata.author}
            </span>
          </a>{' '}
          <span
            itemProp='copyrightYear'
            itemScope
            itemType='https://schema.org/WebSite'>
            © {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default LpFooter;
