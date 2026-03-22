import {
  faApple,
  faRedhat,
  faUbuntu,
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
          <FontAwesomeIcon icon={faWindows} aria-hidden="true" /> Windows
        </li>
        <li>
          <FontAwesomeIcon icon={faApple} aria-hidden="true" /> Mac OS X
        </li>
        <li>
          <FontAwesomeIcon icon={faRedhat} aria-hidden="true" />/
          <FontAwesomeIcon icon={faUbuntu} aria-hidden="true" /> Linux
          (RHEL/Ubuntu)
        </li>
      </ul>
    </dd>
  </dl>
)

export default OperatingSystems
