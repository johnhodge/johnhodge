import React from "react";
import * as styles from "./nav-desktop.module.scss";

const NavDesktop = ({ data }) => (
  <ul className={styles.desktopNavItems}>
    {data.site.siteMetadata.metaLinks.map((item) => (
      <li key={item.link}>
        <a href={`${item.link}`} title={`Link to ${item.name}`}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

export default NavDesktop;
