/** @jsx jsx */
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/core"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" keywords={[`robertsmieja`, `robert`, `smieja`]} />
    <div
      css={css`
        li,
        p {
          text-align: left;
        }
      `}
    >
      <h1>Robert Smieja</h1>
      <h4>Polyglot Full-stack Software/DevOps Engineer</h4>

      <p>
        Most experience with Java and other JVM-based languages (Kotlin, Groovy,
        Scala, etc.).
      </p>
      <p>Recently I have begun exploring the JavaScript/Node.js ecosystem.</p>
      <p>
        For example,{" "}
        <a href="https://github.com/robertsmieja/robertsmieja.com">
          <FontAwesomeIcon icon={faGithub} /> this site
        </a>{" "}
        is written using Gatsby.js, TypeScript, and React and running on{" "}
        <a href="https://aws.amazon.com/cloudfront/">AWS CloudFront</a> and{" "}
        <a href="https://www.netlify.com/">Netlify</a>
      </p>
      <p>
        I&apos;m interested in being a lifelong learner, and in applying
        technology to solve problems:
      </p>
      <ul>
        <li>What does this new programming languages/framework offer?</li>
        <ul>
          <li>How can it help us solve new problems?</li>
          <li>How can it help us solve old problems in new ways?</li>
        </ul>
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
