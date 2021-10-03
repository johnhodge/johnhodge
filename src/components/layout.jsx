import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import Article from "./article";
import HomepageHero from "./hero";
import defaultFeaturedImage from "../images/logo_red.svg";
import * as styles from "./layout.module.scss";

const Layout = ({
  pageTitle,
  children,
  featuredImage,
  post,
  location,
  createdAt,
}) => (
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
        contentfulCompany {
          name
          footerCtaButtonText
          footerCtaDescription
          footerCtaHeadline
          footerCtaImage {
            title
            description
            file {
              url
              details {
                image {
                  height
                  width
                }
              }
            }
          }
          solutions {
            solutionsName
            solutionsDescription
            solutionsAlternateDescription
            solutionsGraphic {
              file {
                fileName
                url
                details {
                  image {
                    height
                    width
                  }
                }
                contentType
              }
            }
          }
          socialMedia {
            accountHandle
            accountId
            accountUrl
          }
        }
      }
    `}
    render={(data) => (
      <div>
        <Header data={data} />
        {location.pathname === "/" ? (
          <HomepageHero />
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
          {location.pathname === "/" ? (
            ""
          ) : (
            <Article pageTitle={pageTitle} post={post} createdAt={createdAt} />
          )}
          {children}
        </main>
        <Footer data={data} />
      </div>
    )}
  />
);

export default Layout;
