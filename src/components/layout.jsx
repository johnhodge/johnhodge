import React from 'react';
import Header from '../components/header';
import * as styles from '../components/layout.module.scss';

const Layout = ({ pageTitle, children, featuredImage }) => {
  return (
    <div>
      <Header />
      <div className={styles.featuredImage}>
        <img
          src={`https://${featuredImage}`}
          alt={`${pageTitle}`}
          title={`${pageTitle}`}
        />
      </div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
