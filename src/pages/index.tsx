import React from "react"

import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`robertsmieja`, `robert`, `smieja`]} />
    <Container>
      <h1>Welcome my personal site.</h1>
      <p>I am a Full-stack Software/DevOps Engineer.</p>
      <p>
        This site is under construction, I recommend checking out my{" "}
        <Link to="/resume">résumé</Link> for now.
      </p>
    </Container>
  </Layout>
)

export default IndexPage
