import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ExperienceEntry from "./experience/experienceEntry"

const Experience: React.FC = () => (
  <div id="experience">
    <h2 className="font-weight-light">
      <FontAwesomeIcon icon={faBriefcase} /> Experience
    </h2>
    <ExperienceEntry
      company="Hitachi Vantara"
      location="Waltham, MA"
      dateRange="July 2019 – Present"
      jobTitle="Senior Full Stack Engineer"
    >
      <p className="mb-0">
        <ul>
          <li>
            Currently working on rewrite of internal product development
            platform, leveraging Kubernetes and open-source technologies to
            target both Software-as-a-Service and Software Appliances use cases.
          </li>
          <li>
            Currently working on a brand new UI written in React/TypeScript for
            an internal administrative UI for Hitachi Vantara products.
          </li>
        </ul>
      </p>
    </ExperienceEntry>
    <ExperienceEntry
      company="Vantiv/WorldPay"
      location="Lowell, MA"
      dateRange="May 2015 – July 2019"
      jobTitle="Senior Software Engineer"
    >
      <p className="mb-0">
        <ul>
          <li>
            Worked an Automation/DevOps working on development and production
            infrastructure automation in Puppet.
          </li>
          <li>
            Participate in company-wide and office-wide hackathons as Team
            Captain
          </li>
          <li>
            Designed and implemented AmazonPay integration as the first
            acquirer. Served as a Senior Engineer leading a team of new and
            junior Software Engineers while integrating with AmazonPay.
          </li>
          <li>
            Worked on Vantiv eCommerce iQ Chargeback Engine as part of Visa
            Claims Resolution overhaul
          </li>
          <li>
            Worked on converting large Java codebase of 1 million+ lines from
            Ant to Gradle conversion
          </li>
          <li>
            Upgraded internal Grails application for configuration management
            from Grails 1.X to 2.X
          </li>
          {/* <li>Coherence Upgrades and Improvements</li> */}
        </ul>
      </p>
    </ExperienceEntry>
    {/* <ExperienceEntry
      company="Vantiv"
      location="Lowell, MA"
      dateRange=" – August 2017"
      jobTitle="Senior Software Engineer, Software Engineer"
    >
      <p>
        Worked on a large Java code base as part of System and Platform teams.
      </p> 
    </ExperienceEntry> */}
    <ExperienceEntry
      company="Litle & Co"
      location="Lowell, MA"
      dateRange="May 2013 – August
      2013, May 2014 – August 2014"
      jobTitle="Software Engineer Intern"
    >
      <p>
        <ul>
          <li>
            Worked on a large Java code base with a team of interns and co-ops
            using pair programming.
          </li>
          <li>Add batch transaction processing to C# XML SDK</li>
          <li>Work in Spring MVC to add improvements to iQ Reporting UI</li>
          <li>
            Add enhancements to internal configuration web application written
            in Grails
          </li>
        </ul>
      </p>
    </ExperienceEntry>
    {/* <ExperienceEntry
      company="WPI Helpdesk"
      location="Worcester, MA"
      dateRange="September 2012 – May 2015"
      jobTitle="Helpdesk Specialist"
    >
      <p>
        Provided remote troubleshooting and support through phone, e-mail and
        in-person for WPI faculty, staff, and students.
      </p>
    </ExperienceEntry> */}
  </div>
)

export default Experience
