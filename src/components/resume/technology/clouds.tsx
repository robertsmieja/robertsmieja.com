import React from "react"

const Clouds: React.FC = () => (
  <dl>
    <dt>Clouds</dt>
    <dd>
      <ul css={{
        "li": {
          marginLeft: "2rem",
          float: "left"
        }
      }}>
        <li>AWS</li>
        <li>GCP</li>
        <li>Azure</li>
      </ul>
    </dd>
  </dl>
)

export default Clouds
