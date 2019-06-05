import React from "react"

import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Layout from "../components/layout"
import Education from "../components/resume/education"
import Experience from "../components/resume/experience"
import Objective from "../components/resume/objective"
import Technology from "../components/resume/technology"
import SEO from "../components/seo"

const ResumePage = () => (
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
    <Container>
      <Row>
        <Col>
          <Row className="justify-content-md-center">
            <p className="display-4">Robert Smieja</p>
          </Row>
          <Row className="justify-content-md-center">
            <p className="lead">Polyglot Full-stack Software/DevOps Engineer</p>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          {/* <Objective /> */}
          <Technology />
        </Col>
        <Col md="6">
          <Education />
          <Experience />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ResumePage
