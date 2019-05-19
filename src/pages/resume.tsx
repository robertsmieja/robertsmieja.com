import React from "react"

import Container from "react-bootstrap/Container"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ResumePage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`robertsmieja`, `robert`, `smieja`, `resume`, `résumé`]}
    />
    <Container>
      <h1>Résumé</h1>

      <h2>Objective</h2>
      <dl>
        To learn interesting and new technologies, and to challenge and push my
        skills and abilities related to computer science.
      </dl>

      <h2>Education</h2>
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

      <h2>Experience</h2>
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

      <h2>Computer Skills</h2>
      <dl>
        <dt>Operating Systems</dt>
        <dd>Windows, Mac OS X, Linux (RHEL)</dd>

        <dt>Programming Languages</dt>
        <dd>C#, C/C++, Java, Groovy, SQL</dd>

        <dt>Technologies/Frameworks</dt>
        <dd>DB2 (LUW),Grails, Gradle, Spring MVC</dd>
      </dl>
    </Container>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default ResumePage
