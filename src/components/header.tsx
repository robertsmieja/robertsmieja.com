import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

interface HeaderProperties {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProperties) => (
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
          <NavDropdown id="nav-dropdown-links" title="Links">
            <NavDropdown.Item href="https://github.com/robertsmieja">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </NavDropdown.Item>
            <NavDropdown.Item href="https://www.linkedin.com/in/robertsmieja/">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </NavDropdown.Item>
          </NavDropdown>
          <Link className="nav-link" to="/presentations/">
            Presentations
          </Link>
          <Link className="nav-link" to="/resume/">
            Résumé
          </Link>
        </Nav>
        {/* <Form inline={true}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
    <h1 style={{ margin: 0 }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
