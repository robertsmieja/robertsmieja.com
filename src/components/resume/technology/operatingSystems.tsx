import {
  faApple,
  faRedhat,
  faUbuntu,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const listStyles = css`
  @media print {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      margin-right: 1.5rem;
      position: relative;
    }

    li:not(:last-child)::after {
      display: inline;
      clear: none;
      content: "•";
      position: absolute;
      right: -1rem;
      color: #666;
    }
  }
`

const OperatingSystems: React.FC = () => (
  <dl>
    <dt>Operating Systems</dt>
    <dd>
      <ul css={listStyles}>
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
