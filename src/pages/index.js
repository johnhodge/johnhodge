import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import BlogRollSmall from '../components/blog-roll-small';
import SEO from '../components/seo';
import styles from '../components/header.module.scss';

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulPerson {
        homePageHeadline
        homePageBio
      }
    }
  `);

  let headline = data.contentfulPerson.homePageHeadline;
  let headlineWords = headline.split(' ');
  let firstHeadlineEnd = Math.floor(headlineWords.length / 2 - 1);
  let firstHeadline = headlineWords.slice(0, firstHeadlineEnd);
  let secondHeadline = headlineWords
    .slice(firstHeadlineEnd, firstHeadlineEnd + 2)
    .join(' ');
  let thirdHeadline = headlineWords.slice(firstHeadlineEnd + 2).join(' ');

  return (
    <Layout>
      <SEO metaTitle='Home' pathname='/' />
      <div className={styles.hpSection}>
        <h1 className={styles.mainHeadline}>
          {console.log(secondHeadline)}
          {firstHeadline}{' '}
          <span className={styles.headlineHightlihgt}>{secondHeadline}</span>{' '}
          {thirdHeadline}
        </h1>
        <p className={styles.hpSectionP}>{data.contentfulPerson.homePageBio}</p>
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
      <BlogRollSmall header='Recent Posts' />
    </Layout>
  );
};

export default Index;
