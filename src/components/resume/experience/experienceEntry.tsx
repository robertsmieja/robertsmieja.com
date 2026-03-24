/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

interface ExperienceEntryProperties {
  company: string
  location: string
  dateRange: string
  jobTitle: string
  children: React.ReactElement | React.ReactElement[]
}

const entryStyles = css`
  @media print {
    page-break-inside: avoid;
    margin-bottom: 0.2rem;

    p {
      margin: 0;
    }

    ul {
      margin-top: 0;
      margin-bottom: 0.1rem;
    }
  }
`

const headerStyles = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    margin: 0 0 1rem 0;
  }

  @media print {
    font-weight: bold;

    p {
      margin: 0;
    }
  }
`

const ExperienceEntry: React.FC<ExperienceEntryProperties> = ({
  children,
  company,
  dateRange,
  jobTitle,
  location,
}: ExperienceEntryProperties) => (
  <div id={`experience-${company.replace(" ", "_")}`} css={entryStyles}>
    <div css={headerStyles}>
      <p>
        {company}, {location}
      </p>
      <p>{dateRange}</p>
    </div>
    <p
      css={css`
        @media print {
          font-style: italic;
        }
      `}
    >
      {jobTitle}
    </p>
    <div>{children}</div>
  </div>
)

export default ExperienceEntry
