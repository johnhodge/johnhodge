import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./footer.module.scss";
import Cta from "./cta";

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
        <div>
          <p>{data.contentfulCompany.footerCtaDescription}</p>
          <Cta
            ctaUrl="/lp/request-meeting/"
            ctaName={data.contentfulCompany.footerCtaButtonText}
            ctaText={data.contentfulCompany.footerCtaButtonText}
            ctaClass="accentCta"
          />
        </div>
        <div className="graphic-headline-container">
          <img
            src={data.contentfulCompany.footerCtaImage.file.url}
            title={data.contentfulCompany.footerCtaImage.title}
            alt={data.contentfulCompany.footerCtaImage.description}
            width={`${data.contentfulCompany.footerCtaImage.file.details.image.width}px`}
            height={`${data.contentfulCompany.footerCtaImage.file.details.image.height} px`}
            className="graphic-creative"
          />
          <h2 className="graphic-headline">
            {data.contentfulCompany.footerCtaHeadline}
          </h2>
        </div>
      </div>
    )}
  />
);

export default FooterCta;
