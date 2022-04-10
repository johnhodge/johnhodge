import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Article from "./article/article";
import HomepageHero from "./hero/hero";
import FooterCta from "./footer/footer-cta";
import SitepageHero from "./hero/sitepage-hero";

export default function Layout({
  pageTitle,
  children,
  featuredImage,
  post,
  location,
  createdAt,
  authorName,
}) {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div>
      <Header website={location.origin} />
      {location.pathname === "/" ? (
        <HomepageHero />
      ) : (
        <SitepageHero featuredImage={featuredImage} pageTitle={pageTitle} />
      )}
      <main>
        {location.pathname === "/" ? (
          ""
        ) : (
          <Article
            pageTitle={pageTitle}
            post={post}
            createdAt={createdAt}
            authorName={authorName}
          />
        )}
        {children}
      </main>
      {location.pathname.includes("/lp/") ? "" : <FooterCta />}
      <Footer year={year} website={location.origin} />
    </div>
  );
}
