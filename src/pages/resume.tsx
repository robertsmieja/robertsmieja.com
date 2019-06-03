import React from "react"

import {
  faApple,
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
        `back`,
        `backend`,
        `developer`,
        `engineer`,
        `full`,
        `fullstack`,
        `robertsmieja`,
        `robert`,
        `smieja`,
        `resume`,
        `résumé`,
        `software`,
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
          <ul>
            <li>Software Engineering</li> <li>Operating Systems</li>
            <li>Object-Oriented Design Concepts</li>
            <li>Systems Programming Concepts</li>
            <li>Introduction to Machine Organization and Assembly Language</li>
            <li>Computer Networks</li>
            <li>The Game Development Process</li>
            <li>Critical Studies of Interactive Media and Games</li>
          </ul>
        </dd>
        <dt>Received</dt>
        <dd>WPI Presidential Merit Scholarship, 2011 – 2015</dd>
        <dt>
          University of Hartford High School of Science and Engineering,
          Hartford, CT High School Diploma, June 2011
        </dt>
        <dd>
          College level courses taken at University of Hartford:
          <ul>
            <li>Computer Programming I</li>
            <li>Engineering Computer Applications</li>
            <li>Calculus I</li>
            <li>Humanoid Robotics</li>
            <li>Graphic Communication</li>
          </ul>
        </dd>
      </dl>
      <h2>
        <FontAwesomeIcon icon={faBriefcase} /> Experience
      </h2>
      <dl>
        <dt>
          <p>Vantiv, now WorldPay, Lowell, MA, August 2017 – Present</p>
          <p>Senior Software Engineer</p>
        </dt>
        <dd>
          Worked on the WorldPay integration with AmazonPay as the first
          acquirer to partner with AmazonPay. Currently working as a
          Automation/DevOps working on development and production infrastructure
          automation in Puppet.
        </dd>
        <dt>
          <p>Vantv - eCommerce, Lowell, MA, May 2015 – August 2017</p>
          <p>Software Engineer</p>
        </dt>
        <dd>
          Worked on a large code base with a team of interns and co-ops using
          pair programming. Projects included a C# XML parsing SDK, working with
          Spring Framework, working with Groovy/Grails, and working with Gradle.
        </dd>
        <dt>
          Litle & Co, Lowell, MA, May 2013 – August 2013, May 2014 – August 2014
          <p>Software Engineer Intern</p>
        </dt>
        <dd>
          Worked on a large code base with a team of interns and co-ops using
          pair programming. Projects included a C# XML parsing SDK, working with
          Spring Framework, working with Groovy/Grails, and working with Gradle.
        </dd>
        <dt>
          WPI Helpdesk, Worcester, MA , September 2012 – May 2015
          <p>Helpdesk Specialist</p>
        </dt>
        <dd>
          Provided remote troubleshooting and support through phone, e-mail and
          in-person for WPI faculty, staff, and students.
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
    </Container>
  </Layout>
)

export default ResumePage
