/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

interface FooterProperties {
  siteAuthor: string
}

const Footer: React.FC<FooterProperties> = ({
  siteAuthor,
}: FooterProperties) => (
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

export default Footer
