import { faBriefcase } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import ExperienceEntry from "./experience/experienceEntry"

const Experience: React.FC = () => (
  <div id="experience">
    <h2>
      <FontAwesomeIcon icon={faBriefcase} aria-hidden="true" /> Experience
    </h2>
    <ExperienceEntry
      company="FIS/WorldPay"
      location="Remote - Lowell, MA"
      dateRange="August 2023 - Present"
      jobTitle="Senior Software Engineer"
    >
      <ul>
        <li>
          Mentored junior engineers in designing and implementing a complex,
          large-volume SQL application framework for high-throughput data
          processing.
        </li>
        <li>
          Delivered the V2 upgrade of a critical internal API integration
          between two financial transaction platforms, establishing a more
          robust system for automated reconciliation.
        </li>
        <li>
          Spearheaded the internal adoption of GitHub Copilot, evaluating its
          impact on developer velocity and establishing best practices for
          LLM-based agentic tooling.
        </li>
        <li>
          Optimized nightly build system to reduce daily I/O storage array load
          by 10-20% to ensure pipelines finished on time.
        </li>
        <li>
          Selected to attend a software developer conference and present back to
          the wider engineering group.
        </li>
      </ul>
    </ExperienceEntry>
    <ExperienceEntry
      company="Quattr"
      location="Remote - Palo Alto, CA"
      dateRange="August 2021 - August 2023"
      jobTitle="Principal Full-Stack Engineer"
    >
      <ul>
        <li>
          Key contributor to the search optimization UI, focusing on the
          interface for the AI/ML-driven recommendation system, which directly
          influences customer acquisition.
        </li>
        <li>
          Proposed, designed, and implemented several modules in Python for
          rules engine design to enable a self-service interface for customers
          to create rules to categorize search queries.
        </li>
        <li>
          Led a cross-functional initiative to reduce technical debt and improve
          code quality by defining quality standards, testing practices, and
          promoting best practices across two remote teams.
        </li>
        <li>
          Achieved a 15% reduction in AWS Cloud costs by deleting and
          compressing objects in S3 buckets.
        </li>
        <li>
          Designed and implemented email based secure passwordless login system
          for test drive demos, including UI.
        </li>
        <li>
          Drove major technical debt reduction by upgrading critical libraries
          (NextJS 9-&gt;12, React 16-&gt;17, Node 12-&gt;14), significantly
          improving security posture and stability.
        </li>
        <li>
          Drove effort to replace out-of-date Okta integration with custom
          implementation in order to improve end-user experience, strengthen
          security posture, and reduce cost.
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
          Java and TypeScript/JavaScript application code contributor for
          internal platform team to unify Hitachi Vantara storage and data
          applications.
        </li>
        <li>
          Drove the design and complex system implementation for the rewrite of
          a product development SaaS platform, leveraging Kubernetes to
          standardize and unify storage/data applications.
        </li>
        <li>
          Implemented brand new UI written in React/TypeScript for an internal
          administrative UI for Hitachi Vantara software appliances and SaaS
          installations.
        </li>
        <li>
          Simplified management of development lab software configuration by
          introducing Ansible.
        </li>
        <li>
          Improved quality of internal product development platform
          documentation website by introducing Docusaurus for other Hitachi
          developers.
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
          Led a team of 4 junior engineers in an integration with AmazonPay as
          its first external client; drove the design and mentored the team in
          the implementation.
        </li>
        <li>
          Selected out of 150 Java engineers to form a team of 6 to upgrade
          Grails app for client configuration management due to ability to
          quickly learn new languages (Groovy) and frameworks (Grails v1 and
          v2); delivered by converting 100k+ lines and 1k+ tests within 1 year.
        </li>
        <li>
          Led teams in 2 company-wide and office-wide hackathons as Team Captain
          with 1 victory.
        </li>
        <li>
          Made key contributions on a team of 8 in the company&apos;s #1 project
          in 2018: an upgrade of a credit card dispute system to comply with new
          Visa regulations.
        </li>
        <li>
          Reduced technical debt and improved developer efficiency by converting
          a 1 million+ line Java codebase from Ant to Gradle, cutting build
          times by ~15%.
        </li>
        <li>
          Improved system reliability by refactoring frequently broken Puppet
          automation for server provisioning, modularizing the code and adding
          tests.
        </li>
      </ul>
    </ExperienceEntry>
  </div>
)

export default Experience
