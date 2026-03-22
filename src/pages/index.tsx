/** @jsx jsx */
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Extract inline Emotion CSS to prevent re-serialization on every render
const containerStyles = css`
  li,
  p {
    text-align: left;
  }
`

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" keywords={[`robertsmieja`, `robert`, `smieja`]} />
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
        <a
          href="https://github.com/robertsmieja/robertsmieja.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} aria-hidden="true" /> this site
        </a>{" "}
        is written using Gatsby.js, TypeScript, and React and running on{" "}
        <a
          href="https://aws.amazon.com/cloudfront/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS CloudFront
        </a>{" "}
        and{" "}
        <a
          href="https://aws.amazon.com/s3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AWS S3
        </a>
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
