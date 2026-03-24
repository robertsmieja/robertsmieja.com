/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

const listStyles = css`
  @media print {
    display: inline;
    padding: 0;
    margin: 0;

    & > li {
      display: inline;
      padding: 0;
      margin: 0;
      white-space: nowrap;
    }

    & > li:not(:last-child)::after {
      content: "•";
      display: inline;
      clear: none;
      margin: 0 0.5ch;
      color: var(--theme-ui-colors-textMuted);
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
