import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import * as styles from "./footer.module.scss";

const Footer = ({ year }) => (
  <StaticQuery
    query={graphql`
      {
        contentfulCompany {
          name
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
      <footer>
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
        <div className={styles.copyrightContainer}>
          <p className={styles.copyrightInfo}>
            © {year}
            {"  "}
            <Link
              to="/"
              title={`Link to the ${data.contentfulCompany.name} homepage`}
            >
              {data.contentfulCompany.name}, LLC
            </Link>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;
