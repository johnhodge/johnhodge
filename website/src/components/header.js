import React from "react"
import Nav from "./nav"
import style from "./header.module.css"

const Header = () => {

  return (

    <header className={style.globalHeader}>
      <div className="global-wrapper" id="header-container">
        <Nav />
      </div>
    </header>
  )
}
export default Header