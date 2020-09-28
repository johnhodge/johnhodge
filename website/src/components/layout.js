import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )

  let url = new URL(document.URL)
  if (url == `http://${url.host}/`) {
    return (
      <div>
        <main>{children}</main>
      </div>
    )
  } else {
    return (
      <div>
        <div className="global-wrapper" data-is-root-path={isRootPath}>
          <header className="global-header">{header}</header>
          <main>{children}</main>
        </div>
        <footer>
          <div className="global-wrapper" id="footer-container" data-is-root-path={isRootPath}>
            <div className="footer-container-item left">
              <h3 className="footer-heading">
                <Link to="/">{title}</Link>
              </h3>
              <small>&copy; {new Date().getFullYear()}</small>
            </div>
            <div className="footer-container-item right">
              <FontAwesomeIcon icon={[fab, "twitter"]} />
              <FontAwesomeIcon icon={[fab, "github"]} />
            </div>
          </div>
        </footer>
      </div>
    )
  }

}

export default Layout
