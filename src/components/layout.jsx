import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import Article from '../components/article';
import defaultFeaturedImage from '../images/logo_red.svg';
import * as styles from '../components/layout.module.scss';

const Layout = ({ pageTitle, children, featuredImage, post, location }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            description
            title
            siteUrl
            metaLinks {
              link
              name
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <div>
          <Header data={data} />
          {location.pathname === '/' ? (
            ''
          ) : (
            <div className={styles.featuredImage}>
              <img
                src={featuredImage || defaultFeaturedImage}
                alt={`${pageTitle}`}
                title={`${pageTitle}`}
              />
            </div>
          )}
          <main>
            {location.pathname === '/' ? (
              ''
            ) : (
              <Article pageTitle={pageTitle} post={post} />
            )}
            {children}
          </main>
          <Footer data={data} />
        </div>
      );
    }}
  />
);

export default Layout;
