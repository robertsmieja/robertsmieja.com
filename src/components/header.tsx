/** @jsx jsx */
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/react"
import { mq } from "../breakpoints"

interface HeaderProperties {
  siteTitle?: string
}

// Wrapped static layout component with React.memo() to prevent
// unnecessary re-renders when the parent Layout/Page changes state.
const Header = React.memo<HeaderProperties>(({ siteTitle = `` }) => (
  <header
    css={css`
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
    `}
  >
    <nav
      role="navigation"
      css={css`
        border-bottom: 1px solid black;
        transition: width 600ms ease;
      `}
    >
      <ul
        css={css`
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
            &:focus-visible {
              text-decoration: underline;
              text-underline-offset: 4px;
            }
          }
        `}
      >
        <li>
          <Link to="/">
            <h2>{siteTitle}</h2>
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/presentations/">Presentations</Link>
        </li>
        <li>
          <Link to="/projects/">Projects</Link>
        </li>
        <li>
          <Link to="/resume/">Résumé</Link>
        </li>
        <li
          css={css`
            margin-left: auto;
          `}
        >
          <a
            href="https://github.com/robertsmieja/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Robert Smieja's GitHub Profile"
          >
            <FontAwesomeIcon
              icon={
                faGithub as unknown as import("@fortawesome/fontawesome-svg-core").IconProp
              }
            />{" "}
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/robertsmieja/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Robert Smieja's LinkedIn Profile"
          >
            <FontAwesomeIcon
              icon={
                faLinkedin as unknown as import("@fortawesome/fontawesome-svg-core").IconProp
              }
            />{" "}
            LinkedIn
          </a>
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
