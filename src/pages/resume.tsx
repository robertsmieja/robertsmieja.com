import React from "react"

import {
  faApple,
  faJava,
  faJsSquare,
  faRedhat,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
import {
  faBriefcase,
  faCode,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = () => (
  <Layout>
    <SEO
      title="Résumé"
      keywords={[
        `robertsmieja`,
        `robert`,
        `smieja`,
        `resume`,
        `résumé`,
        `wpi`,
        `worcester`,
        `polytechnic`,
        `institute`,
      ]}
    />
    <Container>
      <h2>Objective</h2>
      <dl>
        To learn interesting and new technologies, and to challenge and push my
        skills and abilities related to computer science.
      </dl>

      <h2>
        <FontAwesomeIcon icon={faUniversity} /> Education
      </h2>
      <dl>
        <dt>Worcester Polytechnic Institute, Worcester, MA</dt>
        <dd>
          Bachelor of Science, Double Major in Computer Science & Interactive
          Media and Game Development, May 2015
        </dd>
        <dt>Related Coursework</dt>
        <dd>
          Software Engineering, Operating Systems, Object-Oriented Design
          Concepts, Systems Programming Concepts, Introduction to Machine
          Organization and Assembly Language, Computer Networks, The Game
          Development Process, Critical Studies of Interactive Media and Games
        </dd>
        <dt>Received</dt>
        <dd>WPI Presidential Merit Scholarship, 2011 – 2015</dd>
        <dt>
          University of Hartford High School of Science and Engineering,
          Hartford, CT High School Diploma, June 2011
        </dt>
        <dd>
          College level courses taken at University of Hartford: Computer
          Programming I, Engineering Computer Applications, Calculus I, Humanoid
          Robotics, Graphic Communication
        </dd>
      </dl>

      <h2>
        <FontAwesomeIcon icon={faBriefcase} /> Experience
      </h2>
      <dl>
        <dt>
          Vantv - eCommerce, Lowell, MA, May 2015 – Present Software Engineer
        </dt>
        <dd>
          Worked on a large code base with a team of interns and co-ops using
          pair programming. Projects included a C# XML parsing SDK, working with
          Spring Framework, working with Groovy/Grails, and working with Gradle.
        </dd>
        <dt>
          Litle & Co, Lowell, MA, May 2013 – August 2013, May 2014 – August 2014
        </dt>
        <dd>
          Software Engineer Intern Worked on a large code base with a team of
          interns and co-ops using pair programming. Projects included a C# XML
          parsing SDK, working with Spring Framework, working with
          Groovy/Grails, and working with Gradle.
        </dd>
        <dt>
          WPI Helpdesk, Worcester, MA , September 2012 – May 2015 Helpdesk
        </dt>
        <dd>
          Specialist Provided remote troubleshooting and support through phone,
          e-mail and in-person for WPI faculty, staff, and students.
        </dd>
      </dl>

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
          In order of proficiency:
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

        <dt>Frameworks and Libraries</dt>
        <dd>
          <ul>
            <li>Grails</li>
            <li>Gradle</li>
            <li>Spring MVC</li>
            <li>Spring Data</li>
          </ul>
        </dd>

        <dt>Databases</dt>
        <dd>
          <ul>
            <li>DB2 (LUW)</li>
            <li>Amazon DynamoDB</li>
          </ul>
        </dd>
      </dl>
    </Container>
  </Layout>
)

export default ResumePage
