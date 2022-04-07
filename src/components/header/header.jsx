import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Headroom from "react-headroom";
import * as styles from "./header.module.scss";
import NavDesktop from "../nav/nav-desktop";
import NavMobile from "../nav/nav-mobile";

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          ...gatsbySiteData
        }
        allContentfulCompany(
          filter: { id: { eq: "b609af1b-49b4-5251-94fb-32a3da3ebf11" } }
        ) {
          edges {
            ...contentfulSiteData
          }
        }
      }
    `}
    render={(data) => (
      <Headroom disableInlineStyles>
        <div className={styles.navigation}>
          <nav>
            <div className={styles.branding}>
              <Link
                to="/"
                title={`Link to the ${data.site.siteMetadata.title} homepage`}
              >
                <h1>{data.site.siteMetadata.title}</h1>
                <img
                  src="/icons/icon-192x192.png"
                  title={`${data.site.siteMetadata.title} logo`}
                  alt={`${data.site.siteMetadata.title} logo`}
                />
              </Link>
            </div>
            <NavDesktop data={data} />
            <NavMobile data={data} />
          </nav>
        </div>
      </Headroom>
    )}
  />
);

export default Header;