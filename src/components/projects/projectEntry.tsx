import React, { FunctionComponent, ReactNode } from "react"
import ExternalLink from "../externalLink"

interface ProjectEntryProperties {
  year: string
  title: string
  link: string
  children: ReactNode
}

// Performance Optimization: Extract inline style object outside the component
// to prevent unnecessary object allocations and re-renders when the component renders.
const iconStyles = { marginLeft: "0.25rem", opacity: 0.7 }

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
