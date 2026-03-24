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
const headerContainerStyles = css`
  text-align: center;
  position: relative;

  @media print {
    margin-bottom: 0.5rem;
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
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  color: #333;

  @media print {
    display: none;
  }

  &:hover,
  &:focus-visible {
    color: #000;
  }
`

const gridContainerStyles = css`
  display: grid;
  align-content: start;
  flex-direction: column;

  @media (min-width: 800px) {
    flex-wrap: wrap;
  }

  height: 100%;
  width: 100%;

  text-align: left;

  @media print {
    display: block; /* Remove grid to allow better page breaking */

    /* Make h2s smaller and tighter for print */
    h2 {
      margin: 0.5rem 0 0.2rem 0;
      font-size: 1.3rem;
      border-bottom: 1px solid #ccc;
    }

    /* Tighter spacing for definitions/lists */
    dl,
    ul {
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }

    li {
      margin-bottom: 0.1rem;
    }
  }
`

const ResumePage: React.FC = () => (
  <Layout>
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
      <Technology />
      <DevOps />
      <Experience />
      <Profile />
      <Education />
    </div>
  </Layout>
)

export default ResumePage
