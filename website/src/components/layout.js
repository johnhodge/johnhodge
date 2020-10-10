import React from "react"
import { Link } from "gatsby"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <h1 className="main-heading">
      <Link to="/">{title}</Link>
    </h1>
  )
  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <div class="icon-bucket">
          <a href="https://github.com/johnhodge" target="_blank" rel="noreferrer" class="icon-link" title="Follow me on Github"><img class="icon" alt="Follow me on Github" src="https://unpkg.com/simple-icons@v3/icons/github.svg" /></a><a href="https://twitter.com/hodgecity" target="_blank" rel="noreferrer" class="icon-link" title="Peep my Tweets"><img class="icon" alt="Peep my Tweets" src="https://unpkg.com/simple-icons@v3/icons/twitter.svg" /></a>
        </div>
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      {/* <footer>
        <div className="global-wrapper" id="footer-container" data-is-root-path={isRootPath}>
          <div className="footer-container-item left">
            <h3 className="footer-heading">
              <Link to="/">{title}</Link>
            </h3>
            <small>&copy; {new Date().getFullYear()}</small>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

export default Layout
