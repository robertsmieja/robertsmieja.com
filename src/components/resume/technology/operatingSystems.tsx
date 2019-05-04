import {
  faApple,
  faRedhat,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const OperatingSystems: React.FC = () => (
  <dl>
    <dt>Operating Systems</dt>
    <dd>
      <ul>
        <li>
          <FontAwesomeIcon icon={faWindows} /> Windows
        </li>
        <li>
          <FontAwesomeIcon icon={faApple} /> Mac OS X
        </li>
        <li>
          <FontAwesomeIcon icon={faRedhat} /> Linux (RHEL)
        </li>
      </ul>
    </dd>
  </dl>
)

export default OperatingSystems
