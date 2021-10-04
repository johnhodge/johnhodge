import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import Article from "./article";
import HomepageHero from "./hero";
import defaultFeaturedImage from "../images/logo_red.svg";
import * as styles from "./layout.module.scss";

export default function Layout({
  pageTitle,
  children,
  featuredImage,
  post,
  location,
  createdAt,
}) {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div>
      <Header />
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
      <Footer year={year} />
    </div>
  );
}
