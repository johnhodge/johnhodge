import React from 'react';
import Header from '../components/header';
import * as styles from '../components/layout.module.scss';
import Footer from '../components/footer';

const Layout = ({ pageTitle, children, featuredImage }) => {
  return (
    <div>
      <Header />
      {featuredImage ? (
        <div className={styles.featuredImage}>
          <img
            src={`https://${featuredImage}`}
            alt={`${pageTitle}`}
            title={`${pageTitle}`}
          />
        </div>
      ) : (
        ''
      )}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
