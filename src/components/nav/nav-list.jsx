import React from "react";
import { Link } from "gatsby";
import Cta from "../button/cta";
import * as styles from "./nav-list.module.scss";

const NavList = ({ data, listType, navListClass }) => (
  <div>
    {data.site.siteMetadata.metaLinks.map((item) =>
      item.type === listType ? (
        <li
          key={item.link}
          className={listType === "cta" ? styles.ctaListItem : ""}
        >
          {listType === "page" ? (
            <Link to={`${item.link}`} title={`Link to ${item.name}`}>
              {item.name}
            </Link>
          ) : listType === "cta" ? (
            <Cta
              ctaUrl={item.link}
              ctaName={item.name}
              ctaText={item.name}
              ctaClass={navListClass}
            />
          ) : (
            ""
          )}
        </li>
      ) : (
        ""
      )
    )}
  </div>
);

export default NavList;
