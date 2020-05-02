import React from "react"
import Navbar from "./Navbar"
import "../styles/global.scss"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar
        items={[
          {
            title: "tag 1",
            target: "/",
            id: "1",
          },
          {
            title: "tag 2",
            target: "/",
            id: "2",
          },
          {
            title: "tag 3",
            target: "/",
            id: "3",
          },
        ]}
      />

      <main>{children}</main>
    </>
  )
}

export default Layout
