/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

const listStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.15rem 1.25rem;
  padding-left: 0;
  list-style: none;
  margin: 0.25rem 0 0.5rem 0;

  @media print {
    display: block;
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      display: inline;
      margin: 0;
    }

    li:not(:last-child)::after {
      display: inline;
      clear: none;
      content: " \\2022 ";
      margin: 0 0.5ch;
      color: #666;
    }
  }
`

const Frameworks: React.FC = () => (
  <dl>
    <dt>Frameworks/Libraries/Software</dt>
    <dd>
      <ul css={listStyles}>
        <li>React</li>
        <li>NextJS</li>
        <li>Gatsby.js</li>
        <li>Kafka</li>
        <li>Gradle</li>
        <li>Grails</li>
        <li>JavaEE</li>
        <li>Spring MVC 5</li>
        <li>Spring Data 5</li>
      </ul>
    </dd>
  </dl>
)

export default Frameworks
