/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"
import Layout from "../components/layout"
import DevOps from "../components/resume/devops"
import Education from "../components/resume/education"
import Experience from "../components/resume/experience"
import Profile from "../components/resume/profile"
import Technology from "../components/resume/technology"
import SEO from "../components/seo"

const ResumePage: React.FC = () => (
  <Layout>
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
    <div
      css={css`
        text-align: center;
      `}
    >
      <h1>Robert Smieja</h1>
      <h4>Polyglot Full-stack Software Engineer</h4>
    </div>
    <div
      css={css`
        display: grid;
        align-content: start;
        flex-direction: column;

        @media (min-width: 800px) {
          flex-wrap: wrap;
        }

        height: 100%;
        width: 100%;

        text-align: left;
      `}
    >
      <Technology />
      <DevOps />
      <Experience />
      <Profile />
      <Education />
    </div>
  </Layout>
)

export default ResumePage
