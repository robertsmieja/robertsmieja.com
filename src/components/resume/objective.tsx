import { faBullseye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Row from "react-bootstrap/Row"

const Objective = () => (
  <div id="objective">
    <Row>
      <h2>
        <FontAwesomeIcon icon={faBullseye} /> Objective
      </h2>
      <dl>
        To learn interesting and new technologies, and to challenge and push my
        skills and abilities related to computer science.
      </dl>
    </Row>
  </div>
)

export default Objective
