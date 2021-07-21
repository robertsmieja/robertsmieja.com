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
    {year} - <a href={`${link}`}>{title}</a> - {children}
  </li>
)

export default ProjectEntry
