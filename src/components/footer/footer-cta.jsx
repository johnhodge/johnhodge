import React from "react";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./footer.module.scss";
import HeadlineGraphic from "../headline-graphic/headline-graphic";
import Cta from "../button/cta";

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
        <HeadlineGraphic
          src={data.contentfulCompany.footerCtaImage.file.url}
          title={data.contentfulCompany.footerCtaImage.title}
          alt={data.contentfulCompany.footerCtaImage.description}
          width={`${data.contentfulCompany.footerCtaImage.file.details.image.width}px`}
          height={`${data.contentfulCompany.footerCtaImage.file.details.image.height} px`}
          header={data.contentfulCompany.footerCtaHeadline}
        />
      </div>
    )}
  />
);

export default FooterCta;
