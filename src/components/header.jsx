import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Headroom from "react-headroom";
import logo from "../images/logo_blue.svg";
import * as styles from "./header.module.scss";

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            metaLinks {
              link
              name
            }
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
                  src={logo}
                  title={`${data.site.siteMetadata.title} logo`}
                  alt={`${data.site.siteMetadata.title} logo`}
                />
              </Link>
            </div>
            <ul>
              {data.site.siteMetadata.metaLinks.map((item) => (
                <li key={item.link}>
                  <Link to={`${item.link}`} title={`Link to ${item.name}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Headroom>
    )}
  />
);

export default Header;
