import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import * as styles from "./nav-mobile.module.scss";
import NavList from "./nav-list";

const NavMobile = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div id="mobile-navbar" className={styles.mobileNav}>
      <Hamburger
        rounded
        toggled={isOpen}
        toggle={setOpen}
        label="Show navigation menu"
      />
      <div />
      <ul
        key={isOpen}
        className={isOpen ? styles.mobileNavItems : styles.hiddenNavItems}
      >
        <NavList data={data} mobileNavCta="true" listType="cta" />
        <NavList data={data} listType="page" />
      </ul>
    </div>
  );
};
export default NavMobile;
