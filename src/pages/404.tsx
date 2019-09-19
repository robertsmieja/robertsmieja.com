import React from "react"
import Container from "react-bootstrap/Container"
import isBrowserAvailable from "../checkIfLoaded"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC = () =>
  isBrowserAvailable && (
    <Layout>
      <SEO title="404: Not found" />
      <Container>
        <h1>404, Not Found</h1>
        <p>You just hit a route that doesn{`'`}t exist...</p>
      </Container>
    </Layout>
  )

export default NotFoundPage
