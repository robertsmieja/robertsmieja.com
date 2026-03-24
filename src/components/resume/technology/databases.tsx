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
