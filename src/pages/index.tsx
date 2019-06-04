import React from "react"

import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`robertsmieja`, `robert`, `smieja`]} />
    <Container>
      <p className="display-3">Robert Smieja</p>
      <p className="lead">Polyglot Full-stack Software/DevOps Engineer</p>

      <p>
        Most experience with Java and other JVM-based languages (Kotlin, Groovy,
        Scala, etc.).
      </p>
      <p className="mb-0">
        Recently I have begun exporing the JavaScript/Node.js ecosystem.
      </p>
      <p>
        For example,{" "}
        <a href="https://github.com/robertsmieja/robertsmieja.com">
          <FontAwesomeIcon icon={faGithub} /> this site
        </a>{" "}
        is written using Gatsby.js, TypeScript, and React and running on AWS S3
        and AWS CloudFront.
      </p>
      <p>
        I'm interested in being a lifelong learner, and in applying technology
        to solve problems:
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
            How can I leverage my own technical abilities to help other
            developers be more productive?
          </li>
        </ul>
      </p>
      <p>
        This site is under construction, I recommend checking out my{" "}
        <Link to="/resume">résumé</Link> for now.
      </p>
    </Container>
  </Layout>
)

export default IndexPage
