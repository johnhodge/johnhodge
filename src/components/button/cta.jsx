import React from "react";
import { Link } from "gatsby";
import * as styles from "./cta.module.scss";

const Cta = ({ ctaUrl, ctaName, ctaText, ctaClass }) => {
  if (ctaUrl.includes("/lp/")) {
    return (
      <a
        href={ctaUrl}
        title={`Link to ${ctaName}`}
        className={`${styles.cta} ${
          ctaClass === "accentCta" ? styles.accentCta : styles.primaryCta
        }`}
      >
        {ctaText}
      </a>
    );
  }
  return (
    <Link
      to={`${ctaUrl}`}
      title={`Link to ${ctaName}`}
      className={
        ctaClass === "accentCta" ? styles.accentCta : styles.primaryCta
      }
    >
      {ctaText}
    </Link>
  );
};

export default Cta;