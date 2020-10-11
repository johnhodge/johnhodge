import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import style from "./footer.module.css"

const Footer = ({ title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (

    <footer>
      <div className="global-wrapper" id="footer-container">
        <div className={style.footerHeading}>
          <h3 className={style.footerHeading}>
            <Link to="/">{site.siteMetadata.title}</Link>
          </h3>
          <small>&copy; {new Date().getFullYear()}</small>
        </div>
      </div>
    </footer >
  )
}
export default Footer