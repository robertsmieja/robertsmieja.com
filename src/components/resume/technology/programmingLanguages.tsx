/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

// Extract inline Emotion CSS to prevent re-serialization on every render
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

const ProgramingLanguages: React.FC = () => (
  <dl>
    <dt>Programming Languages</dt>
    <dd>
      In order of experience/proficiency:
      <ul css={listStyles}>
        <li>Java</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>Groovy</li>
        <li>Kotlin</li>
        <li>Python</li>
        <li>Golang</li>
        <li>SQL</li>
        <li>Powershell</li>
        <li>C#</li>
        <li>Ruby</li>
      </ul>
    </dd>
  </dl>
)

export default ProgramingLanguages
