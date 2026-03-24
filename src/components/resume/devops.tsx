import { faCogs } from "@fortawesome/free-solid-svg-icons"
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

const DevOps: React.FC = () => (
  <div id="devops">
    <h2>
      <FontAwesomeIcon icon={faCogs} aria-hidden="true" /> DevOps
    </h2>
    <dl>
      <ul css={listStyles}>
        <li>Ansible</li>
        <li>Docker</li>
        <li>Puppet</li>
      </ul>
    </dl>
  </div>
)

export default DevOps
