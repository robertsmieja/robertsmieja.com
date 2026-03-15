/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import React from "react"

interface FooterProperties {
  siteAuthor: string
}

// ⚡ Bolt: Wrapped static layout component with React.memo() to prevent
// unnecessary re-renders when the parent Layout/Page changes state.
const Footer = React.memo<FooterProperties>(
  ({ siteAuthor }: FooterProperties) => (
    <footer
      css={css`
        @media print {
          display: none;
        }

        padding: 2rem;
        grid-column: 1 / 4;
      `}
    >
      <div
        css={css`
          text-align: center;
        `}
      >
        © {new Date().getFullYear()}, {siteAuthor}
      </div>
    </footer>
  )
)

export default Footer
