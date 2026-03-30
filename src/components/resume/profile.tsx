import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Profile: React.FC = () => (
  <div id="profile">
    <h2>
      <FontAwesomeIcon icon={faUser} aria-hidden="true" /> Profile
    </h2>
    <p>
      Innovative problem solver. Life long learner, who is constantly on the
      lookout for new technology, to find new solutions to problems.
    </p>
  </div>
)

export default Profile
