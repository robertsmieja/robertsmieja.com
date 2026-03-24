/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

// Extract inline Emotion CSS to prevent re-serialization on every render
const listStyles = css`
  li {
    margin-left: 2rem;
    float: left;
  }
  @media print {
    display: block;
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline;
      margin: 0;
      float: none;
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

const Clouds: React.FC = () => (
  <dl>
    <dt>Clouds</dt>
    <dd>
      <ul css={listStyles}>
        <li>AWS</li>
        <li>GCP</li>
        <li>Azure</li>
      </ul>
    </dd>
  </dl>
)

export default Clouds
