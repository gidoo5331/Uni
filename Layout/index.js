import React from "react"
import Footer from "../components/Footer"
import NavbarComp from "../components/Navbar"

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