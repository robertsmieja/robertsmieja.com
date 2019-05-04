/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

interface ExperienceEntryProperties {
  company: string
  location: string
  dateRange: string
  jobTitle: string
  children: React.ReactElement | React.ReactElement[]
}

const ExperienceEntry: React.FC<ExperienceEntryProperties> = (properties) => (
  <div id={`experience-${properties.company.replace(" ", "_")}`}>
    <div>
      <p>{properties.company}</p>
      <p>{properties.location}</p>
    </div>
    <div>
      <p>{properties.dateRange}</p>
    </div>
    <p>{properties.jobTitle}</p>
    <div>{properties.children}</div>
  </div>
)

export default ExperienceEntry
