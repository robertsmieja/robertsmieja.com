import {
  faApple,
  faRedhat,
  faUbuntu,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

const listStyles = css`
  @media print {
    display: inline;
    padding: 0;
    margin: 0;

    & > li {
      display: inline;
      padding: 0;
      margin: 0;
      white-space: nowrap;
    }

    & > li:not(:last-child)::after {
      content: "•";
      display: inline;
      clear: none;
      margin: 0 0.5ch;
      color: var(--theme-ui-colors-textMuted);
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
