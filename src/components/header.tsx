/* eslint-disable react/prop-types */
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavItem from "react-bootstrap/NavItem"

interface HeaderProperties {
  siteTitle: string
}

const Header: React.FC<HeaderProperties> = ({ siteTitle }) => (
  <header>
    <Navbar bg="dark" variant="dark" expand="lg">
      {/* <Navbar.Brand> */}
      <Link className="navbar-brand" to="/">
        {siteTitle}
      </Link>
      {/* </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/presentations/">
            Presentations
          </Link>
          <Link className="nav-link" to="/projects/">
            Projects
          </Link>
          <Link className="nav-link" to="/resume/">
            Résumé
          </Link>
        </Nav>
        <Nav className="justify-content-end">
          <NavItem className="mr-sm-2">
            <a href="https://github.com/robertsmieja/">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </NavItem>
          <NavItem className="mr-sm-2">
            <a href="https://www.linkedin.com/in/robertsmieja/">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <h1 style={{ margin: 0 }} />
  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string
// }

Header.defaultProps = {
  siteTitle: ``
}

export default Header
