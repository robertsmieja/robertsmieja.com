import { faCogs } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

const listStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem 1.25rem;
  padding-left: 0;
  list-style: none;
  margin: 0.25rem 0 0.5rem 0;

  @media print {
    display: block;
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline;
      margin: 0;
    }

    li:not(:last-child)::after {
      display: inline;
      clear: none;
      content: " \\2022 ";
      margin: 0 0.5ch;
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
