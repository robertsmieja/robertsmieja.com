import React from "react"

// Extract inline Emotion CSS to prevent re-serialization on every render
const listStyles = {
  li: {
    marginLeft: "2rem",
    float: "left" as const,
  },
}

const ProgramingLanguages: React.FC = () => (
  <dl>
    <dt>Programming Languages</dt>
    <dd>
      In order of experience/proficiency:
      <ul css={listStyles}>
        <li>TypeScript/JavaScript</li>
        <li>Java</li>
        <li>Groovy</li>
        <li>Kotlin</li>
        <li>Python</li>
        <li>Golang</li>
        <li>SQL</li>
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
