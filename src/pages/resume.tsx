import React from "react"

import {
  faApple,
  faRedhat,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
import {
  faBriefcase,
  faBullseye,
  faCode,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
        `engineer`,
        `full`,
        `fullstack`,
        `robertsmieja`,
        `robert`,
        `smieja`,
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
        <Col md="6">
          <Objective />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Education />
        </Col>
        <Col md="6">
          <Technology />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Experience />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default ResumePage
