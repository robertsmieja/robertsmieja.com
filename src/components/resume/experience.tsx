import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ExperienceEntry from "./experience/experienceEntry"

const Experience = () => (
  <div id="experience">
    <h2 className="font-weight-light">
      <FontAwesomeIcon icon={faBriefcase} /> Experience
    </h2>
    <ExperienceEntry
      company="Vantiv, now WorldPay"
      location="Lowell, MA"
      dateRange="August 2017 – Present"
      jobTitle="Senior Software Engineer"
      description="Worked on the WorldPay integration with AmazonPay as the first acquirer
      to partner with AmazonPay, and on Vantiv eCommerce iQ Chargeback Engine as part of Visa Claims Resolution enchancements.
      Currently working as a Automation/DevOps working on development and production infrastructure automation in Puppet."
    />
    <ExperienceEntry
      company="Vantiv"
      location="Lowell, MA"
      dateRange="May 2015 – August 2017"
      jobTitle="Senior Software Engineer, Software Engineer"
      description="Worked on a large Java code base as part of System and Platform teams.
      Projects include:
      Ant to Gradle conversion
      Grails 1.X to 2.X Upgrade
      Coherence Upgrades and Improvements"
    />
    <ExperienceEntry
      company="Litle & Co"
      location="Lowell, MA"
      dateRange="May 2013 – August 2013, May 2014 – August 2014"
      jobTitle="Software Engineer Intern"
      description="Worked on a large Java code base with a team of interns and co-ops using pair
        programming. Projects included a C# XML parsing SDK, working with Spring
        Framework, and working with Groovy/Grails."
    />
    <ExperienceEntry
      company="WPI Helpdesk"
      location="Worcester, MA"
      dateRange="September 2012 – May 2015"
      jobTitle="Helpdesk Specialist"
      description="Provided remote troubleshooting and support through phone, e-mail and
        in-person for WPI faculty, staff, and students."
    />
  </div>
)

export default Experience
