import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Headroom from 'react-headroom';
import * as styles from '../components/header.module.scss';
import logo from '../images/logo_blue.svg';

const Header = () => (
  <StaticQuery
    query={graphql`
      {
        header: site {
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
      const siteData = data.header.siteMetadata;
      return (
        <Headroom disableInlineStyles>
          <div className={styles.navigation}>
            <nav>
              <div className={styles.branding}>
                <Link to='/' title={`Link to the ${siteData.title} homepage`}>
                  <h1>{siteData.title}</h1>
                  <img
                    src={logo}
                    title={`${siteData.title} logo`}
                    alt={`${siteData.title} logo`}
                  />
                </Link>
              </div>
              <ul>
                {siteData.metaLinks.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link to={`${item.link}`} title={`Link to ${item.name}`}>
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </Headroom>
      );
    }}
  />
);

export default Header;
