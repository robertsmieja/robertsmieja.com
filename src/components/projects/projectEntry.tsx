import React, { FunctionComponent, ReactNode } from "react"

interface ProjectEntryProperties {
  year: string
  title: string
  link: string
  children: ReactNode
}

const ProjectEntry: FunctionComponent<ProjectEntryProperties> = (
  properties: ProjectEntryProperties
) => (
  <li>
    {properties.year} - <a href={`${properties.link}`}>{properties.title}</a> -{" "}
    {properties.children}
  </li>
)

export default ProjectEntry
