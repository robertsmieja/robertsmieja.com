import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Profile: React.FC = () => (
  <div id="profile">
    <h2>
      <FontAwesomeIcon icon={faUser} aria-hidden="true" /> Profile
    </h2>
    <p>
      Senior polyglot engineer specializing in the design and delivery of
      complex, scalable systems. Proponent of modern developer tooling to
      enhance team velocity and efficiency. Committed to engineering excellence,
      with a focus on strategic modernization and refactoring to improve code
      stability, strengthen security posture, and optimize build pipelines.
    </p>
  </div>
)

export default Profile
