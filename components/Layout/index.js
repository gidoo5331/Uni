import React from "react"
import Footer from "../Footer"
import NavbarComp from "../Navbar"

const Layout = ({children}) => {
  return (
      <div className="bg-white">
        <NavbarComp />
            {children}
        <Footer />
        </div>
  )
}

export default Layout