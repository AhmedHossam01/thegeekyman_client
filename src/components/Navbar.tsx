import React from "react"
import Container from "react-bootstrap/Container"
import { Navbar, Nav } from "react-bootstrap"
import NavbarStyles from "../styles/modules/navbar.module.scss"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "./Image"

const AppNavbar: React.FC = () => {
  const result = useStaticQuery(graphql`
    query tags {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          # totalCount
        }
      }
    }
  `)

  const tags = result.allMarkdownRemark.group

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
              {tags.map(tag => (
                <Link
                  to={`tags/${tag.fieldValue}`}
                  className={NavbarStyles.link}
                >
                  {tag.fieldValue}
                </Link>
              ))}
              <a
                className={`${NavbarStyles.link} px-2 bg-primary text-white shadow-sm rounded`}
                href="https://www.linkedin.com/in/ahmedhossam01/"
                target="_blank"
              >
                About The Author
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppNavbar
