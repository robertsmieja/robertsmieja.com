import { faUniversity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Education = () => (
  <div id="education">
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
        University of Hartford High School of Science and Engineering, Hartford,
        CT High School Diploma, June 2011
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
  </div>
)

export default Education
