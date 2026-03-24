import { faCogs } from "@fortawesome/free-solid-svg-icons"
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
