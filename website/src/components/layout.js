import React from "react"
import IconBucket from "./icon-bucket"
import Header from "./header"
import Footer from "./footer"

function Layout({ location, children }) {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <IconBucket />
      <Header />
      <main>
        <div className="global-wrapper" id="main-container">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
