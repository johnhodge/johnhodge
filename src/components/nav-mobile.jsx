import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import * as styles from "./nav-mobile.module.scss";

const NavMobile = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="mobile-navbar" className={styles.mobileNav}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div />
      <ul
        className={
          isOpen
            ? styles.mobileNavItems
            : `${styles.mobileNavItems} ${styles.hiddenNavItems}`
        }
      >
        {data.site.siteMetadata.metaLinks.map((item) => (
          <li key={item.link}>
            <a href={`${item.link}`} title={`Link to ${item.name}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NavMobile;
