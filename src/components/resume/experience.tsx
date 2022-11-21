import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ExperienceEntry from "./experience/experienceEntry"

const Experience: React.FC = () => (
  <div id="experience">
    <h2>
      <FontAwesomeIcon icon={faBriefcase} /> Experience
    </h2>
    <ExperienceEntry
      company="Quattr"
      location="Remote - Palo Alto, CA"
      dateRange="August 2021 - Present"
      jobTitle="Principle Full Stack Engineer">
      <ul>
        <li>
          Led Full-Stack Chapter to improve code quality by promoting best practices and cross-team cooperation.
        </li>
        <li>
          Contributed to rules engine design to enable customers to categorize search intents
        </li>
        <li>
          Achieved a 15% reduction in AWS Cloud costs by deleting and compressing objects in S3 buckets
        </li>
        <li>
          Created e-mail based secure password-less login system for Test Drive demos
        </li>
      </ul>
    </ExperienceEntry>
    <ExperienceEntry
      company="Hitachi Vantara"
      location="Waltham, MA"
      dateRange="July 2019 - August 2021"
      jobTitle="Senior Full Stack Engineer"
    >
      <ul>
        <li>
          Drove design and implemented rewrite of internal product development platform,
          leveraging Kubernetes and open-source technologies to target both
          Software-as-a-Service and Software Appliances use cases.
        </li>
        <li>
          Implemented brand new UI written in React/TypeScript for an internal
          administrative UI for Hitachi Vantara products.
        </li>
        <li>
          Simplified management of development lab management by introducing
          Ansible.
        </li>
        <li>
          Improved accessibility and quality of internal product development platform documentation website
          by introducing Docusaurus for other Hitachi developers.
        </li>
      </ul>
    </ExperienceEntry>
    <ExperienceEntry
      company="Vantiv/WorldPay"
      location="Lowell, MA"
      dateRange="May 2015 - July 2019"
      jobTitle="Senior Software Engineer"
    >
      <ul>
        <li>
          Upgraded internal Grails application for configuration management from
          Grails 1.X to 2.X
        </li>
        <li>
          Implemented changes in development and production
          infrastructure automation in Puppet as a Automation/DevOps engineer.
        </li>
        <li>
          Led teams in company-wide and office-wide hackathons as Team Captain with 1 victory
        </li>
        <li>
          Led a team of 4 junior engineers in an integration with AmazonPay as its first external client; drove the design and mentored the team in the implementation.
        </li>
        <li>
          Implemented Operations UI Dispute engine as part of Visa Claims
          Resolution overhaul
        </li>
        <li>
          Converted large Java codebase of 1 million+ lines from Ant
          to Gradle to reduce build times by ~15%
        </li>
      </ul>
    </ExperienceEntry>
    <ExperienceEntry
      company="Litle & Co"
      location="Lowell, MA"
      dateRange="May 2013 - August
      2013, May 2014 - August 2014"
      jobTitle="Software Engineer Intern"
    >
      <ul>
        <li>
          Implemented features in production in a large Java code base with a team of interns and co-ops
          using pair programming.
        </li>
        <li>Added batch transaction processing to C# XML SDK</li>
        <li>Implemented improvements and features in customer facing UI, using Spring MVC</li>
        <li>
          Implemented enhancements to internal configuration web application written in
          Grails
        </li>
      </ul>
    </ExperienceEntry>
  </div>
)

export default Experience
