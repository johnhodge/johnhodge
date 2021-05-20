import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import BlogRoll from '../components/blog-roll';
import SEO from '../components/seo';
import styles from '../components/header.module.scss';

const Index = () => {
  return (
    <Layout>
      <SEO metaTitle='Home' pathname='/' />
      <div className={styles.hpSection}>
        <h1 className={styles.mainHeadline}>
          Tech-wise{' '}
          <span className={styles.headlineHightlihgt}>solutions engineer</span>{' '}
          in NYC.
        </h1>
        <p className={styles.hpSectionP}>
          I'm John and I work in adtech, keep scrolling to learn more about my
          methodology.
        </p>
        <div className={styles.buttonContainer}>
          <Link className={styles.headerButtonLink} to='/blog'>
            <button className={styles.headerButtonLight}>Blog</button>
          </Link>
          <a className={styles.headerButtonLink} href='/contact'>
            <button className={styles.headerButtonDark}>Contact</button>
          </a>
        </div>
      </div>

      <div className={styles.hpSectionSecondary}>
        <h2 className={styles.subHeadline}>
          Client Services as a{' '}
          <span className={styles.headlineHightlihgt}>System</span>
        </h2>
        <div className={styles.imgContainer}>
          <img src='/SaaS.png' alt='' title='' />
        </div>
        <p className={styles.hpSectionP}>
          Client service delivery is a complex system of considerations,
          technology, measurement and processes.
        </p>
      </div>

      <div className={styles.hpSectionSecondary}>
        <h2 className={styles.subHeadline}>
          Component Driven{' '}
          <span className={styles.headlineHightlihgt}>Delivery</span>
        </h2>
        <div className={styles.imgContainer}>
          <img src='/Component_Driven_Delivery.png' alt='' title='' />
        </div>
        <p className={styles.hpSectionP}>
          Components of effort help direct capacity to initiatives that will
          likely return a positive impact.
        </p>
      </div>

      <div className={styles.hpSectionSecondary}>
        <h2 className={styles.subHeadline}>
          Atomic <span className={styles.headlineHightlihgt}>Solutioning</span>
        </h2>
        <div className={styles.imgContainer}>
          <img src='/Atomic_Solutioning.png' alt='' title='' />
        </div>
        <p className={styles.hpSectionP}>
          Atomic solutioning uses a hierarchical approach to identifying issues
          and elegant solutions quickly.
        </p>
      </div>
      <h3>Recent posts</h3>
      <BlogRoll />
    </Layout>
  );
};

export default Index;
