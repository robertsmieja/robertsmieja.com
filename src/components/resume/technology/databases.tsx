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
