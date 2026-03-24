/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

const listStyles = css`
  @media print {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 0;
    list-style: none;

    li {
      margin-right: 1.5rem;
      position: relative;
    }

    li:not(:last-child)::after {
      display: inline;
      clear: none;
      content: "•";
      position: absolute;
      right: -1rem;
      color: #666;
    }
  }
`

const Frameworks: React.FC = () => (
  <dl>
    <dt>Frameworks/Libraries/Software</dt>
    <dd>
      <ul css={listStyles}>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Gatsby.js</li>
        <li>Kafka</li>
        <li>Ansible</li>
        <li>Puppet</li>
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
