/** @jsx jsx */
import { css, jsx } from "@emotion/react"
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

const Databases: React.FC = () => (
  <dl>
    <dt>Databases</dt>
    <dd>
      <ul css={listStyles}>
        <li>Amazon DynamoDB</li>
        <li>DB2 (LUW)</li>
        <li>PostgreSQL</li>
        <li>Snowflake</li>
      </ul>
    </dd>
  </dl>
)

export default Databases
