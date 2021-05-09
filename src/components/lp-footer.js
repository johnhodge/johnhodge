import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './footer.module.scss';

const LpFooter = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer className={styles.footer}>
      <div className={styles.iconBucket}>
        <h2>
          \\\\\
        </h2>
        <p className={styles.footerParagraph}>
          Created by{' '}
          <a href="https://johnhodge.com">
            {data.site.siteMetadata.author}
          </a>{' '}
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default LpFooter;