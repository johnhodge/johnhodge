import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import * as styles from "./footer.module.scss";

const FooterCta = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulCompany {
          footerCtaButtonText
          footerCtaDescription
          footerCtaHeadline
          footerCtaImage {
            title
            description
            file {
              url
              details {
                image {
                  height
                  width
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div className={styles.ctaContainer}>
        <div className={styles.ctaTextContainer}>
          <p>{data.contentfulCompany.footerCtaDescription}</p>
          <Link to="/contact" class="btn-primary">
            {data.contentfulCompany.footerCtaButtonText}
          </Link>
        </div>
        <div className="graphic-headline-container">
          <h2 className="graphic-headline">
            {data.contentfulCompany.footerCtaHeadline}
          </h2>
          <img
            src={data.contentfulCompany.footerCtaImage.file.url}
            title={data.contentfulCompany.footerCtaImage.title}
            alt={data.contentfulCompany.footerCtaImage.description}
            className="graphic-creative"
          />
        </div>
      </div>
    )}
  />
);

export default FooterCta;
