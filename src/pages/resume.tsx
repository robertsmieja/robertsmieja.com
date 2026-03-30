/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { faPrint } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Layout from "../components/layout"
import DevOps from "../components/resume/devops"
import Education from "../components/resume/education"
import Experience from "../components/resume/experience"
import Profile from "../components/resume/profile"
import Technology from "../components/resume/technology"
import SEO from "../components/seo"

export const Head: React.FC = () => (
  <SEO
    title="Résumé"
    keywords={[
      `back`,
      `backend`,
      `developer`,
      `devops`,
      `engineer`,
      `full`,
      `fullstack`,
      `robertsmieja`,
      `robert`,
      `smieja`,
      `stack`,
      `resume`,
      `résumé`,
      `software`,
      `wpi`,
      `worcester`,
      `polytechnic`,
      `institute`,
    ]}
  />
)

// Extract inline Emotion CSS to prevent re-serialization on every render
const resumeContainerStyles = css`
  max-width: 8.5in;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media print {
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`

const headerContainerStyles = css`
  text-align: center;
  position: relative;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #222;
  margin-bottom: 0.25rem;

  h1 {
    margin: 0.5rem 0 0.25rem;
    font-size: 2.25rem;
    letter-spacing: 0.02em;
  }

  h4 {
    margin: 0 0 0.25rem;
    font-weight: 400;
    color: #444;
    font-size: 1.1rem;
  }

  @media print {
    border-bottom: 1.5px solid #222;
    margin-bottom: 0.3rem;
    padding-bottom: 0.3rem;
    h1 {
      margin: 0.2rem 0;
      font-size: 1.8rem;
    }
    h4 {
      margin: 0.1rem 0;
      font-size: 1.1rem;
    }
  }
`

const printButtonStyles = css`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: inherit;
  z-index: 100;

  @media print {
    display: none;
  }

  &:hover,
  &:focus-visible {
    opacity: 0.7;
  }
`

const gridContainerStyles = css`
  text-align: left;

  h2 {
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-bottom: 1.5px solid #444;
    padding-bottom: 0.2rem;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  dl {
    margin: 0 0 0.5rem 0;

    dt {
      font-weight: 600;
      font-size: 0.85rem;
      color: #555;
      margin-bottom: 0.1rem;
    }

    dd {
      margin-left: 0;
      margin-bottom: 0.4rem;
    }
  }

  @media print {
    display: block;

    h2 {
      margin: 0.3rem 0 0.15rem 0;
      font-size: 0.9rem;
      border-bottom: 1px solid #ccc;
      padding-bottom: 0.1rem;
      letter-spacing: 0.05em;
    }

    dl,
    ul {
      margin-top: 0;
      margin-bottom: 0.1rem;
    }

    li {
      margin-bottom: 0;
    }
  }
`

const ResumePage: React.FC = () => (
  <Layout>
    <div css={resumeContainerStyles}>
      <div css={headerContainerStyles}>
        <h1>Robert Smieja</h1>
        <h4>Polyglot Full-stack Software Engineer</h4>
        <button
          type="button"
          css={printButtonStyles}
          onClick={() => {
            if (typeof window !== "undefined") {
              window.print()
            }
          }}
          aria-label="Print Resume"
          title="Print Resume"
        >
          <FontAwesomeIcon icon={faPrint} aria-hidden="true" />
        </button>
      </div>
      <div css={gridContainerStyles}>
        <Experience />
        <Profile />
        <Technology />
        <DevOps />
        <Education />
      </div>
    </div>
  </Layout>
)

export default ResumePage
