import React from "react";
import { Link } from "gatsby";
import * as styles from "./cta.module.scss";

const Cta = ({ ctaUrl, ctaName, ctaText, mobileNavCta }) => {
  if (ctaUrl.includes("/lp/")) {
    return (
      <a
        href={ctaUrl}
        title={`Link to ${ctaName}`}
        className={`${mobileNavCta === "true" ? styles.mobileNavCta : ""} ${
          styles.cta
        }`}
      >
        {ctaText}
      </a>
    );
  }
  return (
    <Link to={`${ctaUrl}`} title={`Link to ${ctaName}`} className={styles.cta}>
      {ctaText}
    </Link>
  );
};

export default Cta;
