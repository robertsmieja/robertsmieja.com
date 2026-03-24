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

const ProgramingLanguages: React.FC = () => (
  <dl>
    <dt>Programming Languages</dt>
    <dd>
      In order of experience/proficiency:
      <ul css={listStyles}>
        <li>Java</li>
        <li>Groovy</li>
        <li>TypeScript/JavaScript</li>
        <li>Kotlin</li>
        <li>SQL</li>
        <li>Python</li>
        <li>Golang</li>
        <li>Powershell</li>
        <li>POSIX Shell/Bash</li>
        <li>C#</li>
        <li>Perl</li>
        <li>Ruby</li>
        <li>C/C++</li>
        <li>Scala</li>
      </ul>
    </dd>
  </dl>
)

export default ProgramingLanguages
