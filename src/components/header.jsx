import React from "react";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import logo from "../images/logo_blue.svg";
import * as styles from "./header.module.scss";

const Header = ({ data }) => {
  const siteData = data.site.siteMetadata;
  return (
    <Headroom disableInlineStyles>
      <div className={styles.navigation}>
        <nav>
          <div className={styles.branding}>
            <Link to="/" title={`Link to the ${siteData.title} homepage`}>
              <h1>{siteData.title}</h1>
              <img
                src={logo}
                title={`${siteData.title} logo`}
                alt={`${siteData.title} logo`}
              />
            </Link>
          </div>
          <ul>
            {siteData.metaLinks.map((item) => (
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
  );
};

export default Header;
