import { faBullseye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Objective = () => (
  <div id="objective">
    <h2 className="font-weight-light">
      <FontAwesomeIcon icon={faBullseye} /> Objective
    </h2>
    <dl>
      To learn interesting and new technologies, and to challenge and push my
      skills and abilities related to computer science.
    </dl>
  </div>
)

export default Objective
