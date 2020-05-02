import React from "react"
import Container from "react-bootstrap/Container"
import { Navbar, Nav } from "react-bootstrap"
import NavbarStyles from "../styles/modules/navbar.module.scss"
import { Link } from "gatsby"
import Image from "./Image"

const AppNavbar: React.FC<IProps> = ({ items }) => {
  return (
    <>
      <Navbar className={NavbarStyles.navbar} expand="md">
        <Container>
          <Navbar.Brand href="/">
            <Image
              className={NavbarStyles.logo}
              filename="logo.jpg"
              alt="The Geeky Man Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            className={NavbarStyles.toggler}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`ml-auto ${NavbarStyles.nav}`}>
              {items.map(item => (
                <Link
                  to={item.target}
                  key={item.id}
                  className={NavbarStyles.link}
                >
                  {item.title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

interface IProps {
  items: {
    title: string
    target: string
    id: string
  }[]
}

export default AppNavbar
