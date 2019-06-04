import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

interface ExperienceEntryProperties {
  company: string
  dateRange: string
  jobTitle: string
  description: string
}

const ExperienceEntry = (properties: ExperienceEntryProperties) => (
  <Row>
    <Row>
      <Row>
        <Col>
          <p className="text-left">{properties.company}</p>
        </Col>
        <Col>
          <p className="text-right">{properties.dateRange}</p>
        </Col>
      </Row>
      <Row>
        <p className="text-left">{properties.jobTitle}</p>
      </Row>
    </Row>
    <Row>
      <Col>
        <p>{properties.description}</p>
      </Col>
    </Row>
  </Row>
)

export default ExperienceEntry
