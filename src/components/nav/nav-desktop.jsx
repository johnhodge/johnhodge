import React from "react";
import * as styles from "./nav-desktop.module.scss";
import NavList from "./nav-list";

const NavDesktop = ({ data }) => (
  <div className={styles.desktopNavLists}>
    <ul className={styles.navItems}>
      <NavList data={data} listType="page" />
    </ul>
    <ul className={styles.navItems}>
      <NavList data={data} listType="cta" />
    </ul>
  </div>
);

export default NavDesktop;
