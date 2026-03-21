import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { FunctionComponent, ReactNode } from "react"

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
    <a
      href={`${link}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`External link to ${title}`}
    >
      {title}{" "}
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        size="sm"
        aria-hidden="true"
        style={{ marginLeft: "0.25rem", opacity: 0.7 }}
      />
    </a>{" "}
    - {children}
  </li>
)

export default ProjectEntry
