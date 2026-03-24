import React, { FunctionComponent, ReactNode } from "react"
import ExternalLink from "../externalLink"

interface ProjectEntryProperties {
  year: string
  title: string
  link: string
  children: ReactNode
}

const ProjectEntry: FunctionComponent<ProjectEntryProperties> = ({
  children,
  link,
  title,
  year,
}: ProjectEntryProperties) => (
  <li>
    {year} -{" "}
    <ExternalLink
      href={`${link}`}
      ariaLabel={`External link to ${title} (opens in a new tab)`}
    >
      {title}
    </ExternalLink>{" "}
    - {children}
  </li>
)

export default ProjectEntry
