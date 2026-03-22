import React from "react"

// Extract inline Emotion CSS to prevent re-serialization on every render
const listStyles = {
  li: {
    marginLeft: "2rem",
    float: "left" as const,
  },
}

const Clouds: React.FC = () => (
  <dl>
    <dt>Clouds</dt>
    <dd>
      <ul css={listStyles}>
        <li>AWS</li>
        <li>GCP</li>
        <li>Azure</li>
      </ul>
    </dd>
  </dl>
)

export default Clouds
