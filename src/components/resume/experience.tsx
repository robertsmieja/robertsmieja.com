import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Experience = () => (
  <div id="experience">
    <h2>
      <FontAwesomeIcon icon={faBriefcase} /> Experience
    </h2>
    <dl>
      <dt>
        <p>Vantiv, now WorldPay, Lowell, MA, August 2017 – Present</p>
        <p>Senior Software Engineer</p>
      </dt>
      <dd>
        Worked on the WorldPay integration with AmazonPay as the first acquirer
        to partner with AmazonPay. Currently working as a Automation/DevOps
        working on development and production infrastructure automation in
        Puppet.
      </dd>
      <dt>
        <p>Vantv - eCommerce, Lowell, MA, May 2015 – August 2017</p>
        <p>Software Engineer</p>
      </dt>
      <dd>
        Worked on a large code base with a team of interns and co-ops using pair
        programming. Projects included a C# XML parsing SDK, working with Spring
        Framework, working with Groovy/Grails, and working with Gradle.
      </dd>
      <dt>
        Litle & Co, Lowell, MA, May 2013 – August 2013, May 2014 – August 2014
        <p>Software Engineer Intern</p>
      </dt>
      <dd>
        Worked on a large code base with a team of interns and co-ops using pair
        programming. Projects included a C# XML parsing SDK, working with Spring
        Framework, working with Groovy/Grails, and working with Gradle.
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
  </div>
)

export default Experience
