import React from "react"

interface ExperienceEntryProperties {
  company: string
  location: string
  dateRange: string
  jobTitle: string
  children: React.ReactElement | React.ReactElement[]
}

const ExperienceEntry: React.FC<ExperienceEntryProperties> = ({
  children,
  company,
  dateRange,
  jobTitle,
  location,
}: ExperienceEntryProperties) => (
  <div id={`experience-${company.replace(" ", "_")}`}>
    <div>
      <p>{company}, {location}, {dateRange}</p>
    </div>
    <p>{jobTitle}</p>
    <div>{children}</div>
  </div>
)

export default ExperienceEntry
