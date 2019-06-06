import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Profile = () => (
  <div id="profile">
    <h2 className="font-weight-light">
      <FontAwesomeIcon icon={faUser} /> Profile
    </h2>
    <dl>
      Innovative problem solver. Life long learner, who constantly on the look
      out for new technology, to find new solutions to problems.
    </dl>
  </div>
)

export default Profile
