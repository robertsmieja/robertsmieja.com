import React from "react"

const ProgramingLanguages: React.FC = () => (
  <dl>
    <dt>Programming Languages</dt>
    <dd>
      In order of experience/proficiency:
      <ul css={{
        "li": {
          marginLeft: "2rem",
          float: "left"
        }
      }}>
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
