import React from "react";
import { Link } from "gatsby";
import Cta from "./cta";

const NavList = ({ data, listType, mobileNavCta }) => (
  <div>
    {data.site.siteMetadata.metaLinks.map((item) =>
      item.type === listType ? (
        <li key={item.link}>
          {listType === "page" ? (
            <Link to={`${item.link}`} title={`Link to ${item.name}`}>
              {item.name}
            </Link>
          ) : listType === "cta" ? (
            <Cta
              ctaUrl={item.link}
              ctaName={item.name}
              ctaText={item.name}
              mobileNavCta={mobileNavCta}
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
