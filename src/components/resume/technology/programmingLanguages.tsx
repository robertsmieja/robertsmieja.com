import React from "react"

const ProgramingLanguages: React.FC = () => (
  <dl>
    <dt>Programming Languages</dt>
    <dd>
      In order of experience/proficiency:
      <ol>
        <li>
          {/* <FontAwesomeIcon icon={faJava} />  */}
          Java
        </li>
        <li>Groovy</li>
        <li>SQL</li>
        <li>Kotlin</li>
        <li>TypeScript</li>
        <li>
          {/* <FontAwesomeIcon icon={faJsSquare} /> */}
          JavaScript
        </li>
        <li>Ruby</li>
        <li>C#</li>
        <li>Perl</li>
        <li>C/C++</li>
        <li>Scala</li>
      </ol>
    </dd>
  </dl>
)

export default ProgramingLanguages
