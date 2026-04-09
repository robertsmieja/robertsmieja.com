import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const Head: React.FC = () => <SEO title="404: Not found" />

const NotFoundPage: React.FC = () => (
  <Layout>
    <h1>404, Not Found</h1>
    <p>You just hit a route that doesn&apos;t exist...</p>
    <p>
      <Link to="/">Return to Homepage</Link>
    </p>
  </Layout>
)

export default NotFoundPage
