import { faBullseye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Objective: React.FC = () => (
  <div id="objective">
    <h2 className="font-weight-light">
      <FontAwesomeIcon icon={faBullseye} /> Objective
    </h2>
    <dl>
      To apply technology to solve business problems and deliver products, as
      well as furthering my own skills and abilities related to computer
      science.
    </dl>
  </div>
)

export default Objective
