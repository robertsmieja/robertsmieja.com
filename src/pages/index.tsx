import React from "react"

import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`robertsmieja`, `robert`, `smieja`]} />
    <Container>
      <h1>Welcome my personal site.</h1>
      <p>Currently still under construction.</p>
    </Container>
  </Layout>
)

export default IndexPage
