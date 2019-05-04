import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Profile: React.FC = () => (
  <div id="profile">
    <h2>
      <FontAwesomeIcon icon={faUser} /> Profile
    </h2>
    <dl>
      Innovative problem solver. Life long learner, who constantly on the look
      out for new technology, to find new solutions to problems.
    </dl>
  </div>
)

export default Profile
