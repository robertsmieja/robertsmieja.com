import { faUniversity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import College from "./education/college"

const Education: React.FC = () => (
  <div id="education">
    <h2 className="font-weight-light">
      <FontAwesomeIcon icon={faUniversity} /> Education
    </h2>
    <dl>
      <College />
      {/* <HighSchool/> */}
    </dl>
  </div>
)

export default Education
