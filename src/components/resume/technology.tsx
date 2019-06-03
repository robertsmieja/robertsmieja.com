import {
  faApple,
  faRedhat,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Technology = () => (
  <div id="technology">
    <h2>
      <FontAwesomeIcon icon={faCode} /> Technologies
    </h2>
    <dl>
      <dt>Operating Systems</dt>
      <dd>
        <ul>
          <li>
            <FontAwesomeIcon icon={faWindows} /> Windows
          </li>
          <li>
            <FontAwesomeIcon icon={faApple} /> Mac OS X
          </li>
          <li>
            <FontAwesomeIcon icon={faRedhat} /> Linux (RHEL)
          </li>
        </ul>
      </dd>

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

      <dt>Frameworks/Libraries/Software</dt>
      <dd>
        <ul>
          <li>Ansible</li>
          <li>Gatsby.js</li>
          <li>Grails</li>
          <li>Gradle</li>
          <li>Kafka</li>
          <li>Puppet</li>
          <li>React</li>
          <li>Spring MVC</li>
          <li>Spring Data</li>
        </ul>
      </dd>

      <dt>Databases</dt>
      <dd>
        <ul>
          <li>Amazon DynamoDB</li>
          <li>DB2 (LUW)</li>
        </ul>
      </dd>
    </dl>
  </div>
)

export default Technology
