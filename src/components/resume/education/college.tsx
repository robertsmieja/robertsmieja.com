/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

const flexHeaderStyles = css`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  flex-wrap: wrap;

  @media print {
    margin-bottom: 0.2rem;
  }
`

const College: React.FC = () => (
  <div
    id="college"
    css={css`
      @media print {
        page-break-inside: avoid;
      }
    `}
  >
    <dt css={flexHeaderStyles}>
      <span>Worcester Polytechnic Institute, Worcester, MA</span>
      <span>May 2015</span>
    </dt>
    <dd
      css={css`
        @media print {
          margin-bottom: 0.2rem;
          margin-left: 0;
        }
      `}
    >
      Bachelor of Science, Double Major in Computer Science & Interactive Media
      and Game Development
    </dd>
    {/* <dt>Related Coursework</dt>
    <dd>
      <ul styleType="disc">
        <li>Software Engineering</li> <li>Operating Systems</li>
        <li>Object-Oriented Design Concepts</li>
        <li>Systems Programming Concepts</li>
        <li>Introduction to Machine Organization and Assembly Language</li>
        <li>Computer Networks</li>
        <li>The Game Development Process</li>
        <li>Critical Studies of Interactive Media and Games</li>
      </ul>
    </dd> */}
    <dt>Received</dt>
    <dd>WPI Presidential Merit Scholarship, 2011 – 2015</dd>
  </div>
)

export default College
