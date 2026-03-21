/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

interface FooterProperties {
  siteAuthor: string
}

const footerStyles = css`
  @media print {
    display: none;
  }

  padding: 2rem;
  grid-column: 1 / 4;
`

const copyrightStyles = css`
  text-align: center;
`

// Wrapped static layout component with React.memo() to prevent
// unnecessary re-renders when the parent Layout/Page changes state.
const Footer = React.memo<FooterProperties>(
  ({ siteAuthor }: FooterProperties) => (
    <footer css={footerStyles}>
      <div css={copyrightStyles}>
        © {new Date().getFullYear()}, {siteAuthor}
      </div>
    </footer>
  )
)

export default Footer
