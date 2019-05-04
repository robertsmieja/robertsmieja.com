/** @jsx jsx */
import { jsx, css } from "@emotion/core"

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
