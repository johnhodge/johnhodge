import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Headroom from "react-headroom";
import * as styles from "./header.module.scss";
import NavDesktop from "../nav/nav-desktop";
import NavMobile from "../nav/nav-mobile";

const Header = ({ website }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          ...gatsbySiteData
        }
        allContentfulCompany {
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
              {data.allContentfulCompany.edges
                .filter((filtered) => filtered.node.website === website)
                .map(({ node }) => (
                  <Link to="/" title={`Link to the ${node.name} homepage`}>
                    <h1>{node.name}</h1>
                    <img
                      src="/icons/icon-192x192.png"
                      title={`${node.name} logo`}
                      alt={`${node.name} logo`}
                    />
                  </Link>
                ))}
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
