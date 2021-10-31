import React from "react";
import Header from "./header";
import Footer from "./footer";
import Article from "./article";
import HomepageHero from "./hero";
import FooterCta from "./footer-cta";
import SitepageHero from "./sitepage-hero";

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
      <Header />
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
      {location.pathname.includes("lp") ? "" : <FooterCta />}
      <Footer year={year} />
    </div>
  );
}
