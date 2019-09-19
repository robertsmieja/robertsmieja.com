import { faCogs } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const DevOps: React.FC = () => (
  <div id="devops">
    <h2 className="font-weight-light">
      <FontAwesomeIcon icon={faCogs} /> DevOps
    </h2>
    <dl>
      <ul>
        <li>Ansible</li>
        <li>Docker</li>
        <li>Puppet</li>
      </ul>
    </dl>
  </div>
)

export default DevOps
