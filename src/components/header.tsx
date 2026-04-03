/** @jsx jsx */
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/react"
import { mq } from "../breakpoints"
import ExternalLink from "./externalLink"

interface HeaderProperties {
  siteTitle?: string
}

// Extract inline Emotion CSS to prevent re-serialization on every render
const headerStyles = css`
  @media print {
    display: none;
  }

  ::after {
    content: "";
    display: block;
    clear: both;
  }

  width: 100%;
  grid-column: 1 / 4;
  padding: 1rem;
`

const navStyles = css`
  border-bottom: 1px solid black;
  transition: width 600ms ease;
`

const ulStyles = css`
  flex-direction: row;
  list-style: none;

  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    float: left;
    /* ${mq({
      width: ["100%", "50%", "25%"],
    })} */
    margin: 0.5rem 0.5rem;
  }

  a {
    color: black;
    text-decoration: none;

    &:hover,
    &:focus-visible,
    &.active {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    &:focus-visible {
      outline: 2px solid black;
      outline-offset: 2px;
    }

    &.active {
      font-weight: bold;
    }
  }
`

const githubLiStyles = css`
  margin-left: auto;
`

// Wrapped static layout component with React.memo() to prevent
// unnecessary re-renders when the parent Layout/Page changes state.
const Header = React.memo<HeaderProperties>(({ siteTitle = `` }) => (
  <header css={headerStyles}>
    <nav role="navigation" css={navStyles}>
      <ul css={ulStyles}>
        <li>
          <Link to="/">
            <h2>{siteTitle}</h2>
          </Link>
        </li>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/presentations/" activeClassName="active">
            Presentations
          </Link>
        </li>
        <li>
          <Link to="/projects/" activeClassName="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/resume/" activeClassName="active">
            Résumé
          </Link>
        </li>
        <li css={githubLiStyles}>
          <ExternalLink
            href="https://github.com/robertsmieja/"
            ariaLabel="Robert Smieja's GitHub Profile (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> GitHub
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            href="https://www.linkedin.com/in/robertsmieja/"
            ariaLabel="Robert Smieja's LinkedIn Profile (opens in a new tab)"
          >
            <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" /> LinkedIn
          </ExternalLink>
        </li>
      </ul>
    </nav>
    {/* </Navbar> */}
  </header>
))

// Header.propTypes = {
//   siteTitle: PropTypes.string
// }

export default Header
