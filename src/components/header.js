import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import styles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.title} to='/'>
          <span
            itemProp='creator'
            itemScope
            itemType='https://schema.org/Person'>
            {data.site.siteMetadata.title}
          </span>
        </Link>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              to='/blog'>
              Blog
            </Link>
          </li>
          <li>
            <a
              className={styles.navItem}
              activeClassName={styles.activeNavItem}
              href='/contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
