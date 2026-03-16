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
          <FontAwesomeIcon
            icon={
              faWindows as unknown as import("@fortawesome/fontawesome-svg-core").IconProp
            }
          />{" "}
          Windows
        </li>
        <li>
          <FontAwesomeIcon
            icon={
              faApple as unknown as import("@fortawesome/fontawesome-svg-core").IconProp
            }
          />{" "}
          Mac OS X
        </li>
        <li>
          <FontAwesomeIcon
            icon={
              faRedhat as unknown as import("@fortawesome/fontawesome-svg-core").IconProp
            }
          />
          /
          <FontAwesomeIcon
            icon={
              faUbuntu as unknown as import("@fortawesome/fontawesome-svg-core").IconProp
            }
          />{" "}
          Linux (RHEL/Ubuntu)
        </li>
      </ul>
    </dd>
  </dl>
)

export default OperatingSystems
