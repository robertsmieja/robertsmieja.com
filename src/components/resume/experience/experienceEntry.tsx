import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

interface ExperienceEntryProperties {
  company: string
  location: string
  dateRange: string
  jobTitle: string
  children: React.ReactElement | React.ReactElement[]
}

const ExperienceEntry: React.FC<ExperienceEntryProperties> = properties => (
  <Row noGutters>
    <Col>
      <Row noGutters>
        <Col>
          <Row className="justify-content-between" noGutters>
            <Col xs="auto">
              <p className="font-weight-bold mb-0 text-left">
                {properties.company}
              </p>
              <p className="font-weight-bold mb-0 text-left">
                {properties.location}
              </p>
            </Col>
            <Col xs="auto">
              <p className="font-weight-bold mb-0 text-right">
                {properties.dateRange}
              </p>
            </Col>
          </Row>
          <Row noGutters>
            <Col>
              <p className="font-weight-bold mb-0 text-left">
                {properties.jobTitle}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row noGutters>
        <Col>{properties.children}</Col>
      </Row>
    </Col>
  </Row>
)

export default ExperienceEntry
