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
          <Article pageTitle={pageTitle} post={post} createdAt={createdAt} />
        )}
        {children}
      </main>
      {location.pathname.includes("contact") ? "" : <FooterCta />}
      <Footer year={year} />
    </div>
  );
}
