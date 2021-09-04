import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import * as styles from '../components/layout.module.scss';

const Layout = ({ pageTitle, children, featuredImage }) => (
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
          <Footer data={data} />
        </div>
      );
    }}
  />
);

export default Layout;
