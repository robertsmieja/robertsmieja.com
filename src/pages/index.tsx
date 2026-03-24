/** @jsx jsx */
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/react"
import ExternalLink from "../components/externalLink"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const Head: React.FC = () => (
  <SEO title="Home" keywords={[`robertsmieja`, `robert`, `smieja`]} />
)

// Extract inline Emotion CSS to prevent re-serialization on every render
const containerStyles = css`
  li,
  p {
    text-align: left;
  }
`

const IndexPage: React.FC = () => (
  <Layout>
    <div css={containerStyles}>
      <h1>Robert Smieja</h1>
      <h4>Polyglot Full-stack Software/DevOps Engineer</h4>

      <p>
        Most experience with Java and other JVM-based languages (Kotlin, Groovy,
        Scala, etc.).
      </p>
      <p>Recently I have begun exploring the JavaScript/Node.js ecosystem.</p>
      <p>
        For example,{" "}
        <ExternalLink
          href="https://github.com/robertsmieja/robertsmieja.com"
          ariaLabel="GitHub repository for this site (opens in a new tab)"
        >
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> this site
        </ExternalLink>{" "}
        is written using Gatsby.js, TypeScript, and React and running on{" "}
        <ExternalLink
          href="https://aws.amazon.com/cloudfront/"
          ariaLabel="AWS CloudFront (opens in a new tab)"
        >
          AWS CloudFront
        </ExternalLink>{" "}
        and{" "}
        <ExternalLink
          href="https://aws.amazon.com/s3/"
          ariaLabel="AWS S3 (opens in a new tab)"
        >
          AWS S3
        </ExternalLink>
      </p>
      <p>
        I&apos;m interested in being a lifelong learner, and in applying
        technology to solve problems:
      </p>
      <ul>
        <li>
          What does this new programming languages/framework offer?
          <ul>
            <li>How can it help us solve new problems?</li>
            <li>How can it help us solve old problems in new ways?</li>
          </ul>
        </li>
        <li>
          How can automation help developers focus on the problem at hand?
        </li>
        <li>
          How can I leverage my own technical abilities to help other developers
          be more productive?
        </li>
      </ul>
      <p>
        This site is under construction, I recommend checking out my{" "}
        <Link to="/resume/">résumé</Link> for now.
      </p>
    </div>
  </Layout>
)

export default IndexPage
