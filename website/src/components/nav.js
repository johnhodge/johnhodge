import React from "react"
import { Link } from "gatsby"
import style from "./nav.module.css"
import { useStaticQuery, graphql } from "gatsby"

const Nav = () => {
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
    < nav >
      <div className={style.navBrand}>
        <Link to="/" className={style.brand}>{site.siteMetadata.title}</Link>
      </div>
      <div className={style.navFirst}>
        <Link to="/speaking" className={style.navItem}>Speaking</Link>
        <Link to="/about" className={style.navItem}>About</Link>
        <Link to="/blog" className={style.navItem}>Blog</Link>
      </div>
      <div className={style.navSecond}>
        <div className={style.navRight}>
          <div className={style.button}>
            <Link to="/sign-in" className={`${style.navItem} ${style.button}`}>Sign In</Link>
          </div>
          <div className={style.button}>
            <Link to="/sign-up" className={`${style.navItem} ${style.button} ${style.main}`}>Sign Up</Link>
          </div>
        </div>
      </div>
    </nav >


  )
}

export default Nav
