import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import isBrowserAvailable from "../checkIfLoaded"
import Layout from "../components/layout"
import DevOps from "../components/resume/devops"
import Education from "../components/resume/education"
import Experience from "../components/resume/experience"
import Profile from "../components/resume/profile"
import Technology from "../components/resume/technology"
import SEO from "../components/seo"

const ResumePage: React.FC = () =>
  isBrowserAvailable && (
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
          `institute`
        ]}
      />
      <Container>
        <Row>
          <Col>
            <Row className="justify-content-md-center">
              <p className="display-4 my-0">Robert Smieja</p>
            </Row>
            <Row className="justify-content-md-center">
              <p className="lead my-1">Polyglot Full-stack Software Engineer</p>
            </Row>
          </Col>
        </Row>
        <Row className="mt-0">
          <Col md="6">
            <Technology />
          </Col>
          <Col md="6">
            <DevOps />
            <Education />
            <Experience />
            <Profile />
          </Col>
        </Row>
      </Container>
    </Layout>
  )

export default ResumePage
