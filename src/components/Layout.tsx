import React from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"
import Footer from "./Footer"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
