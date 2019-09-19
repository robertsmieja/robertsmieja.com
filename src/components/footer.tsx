import React from "react"

interface FooterProperties {
  siteAuthor: string
}

const Footer: React.FC = ({ siteAuthor }: FooterProperties) => (
  <footer className="d-print-none">
    <div className="text-center text-muted">
      © {new Date().getFullYear()}, {siteAuthor}
    </div>
  </footer>
)

export default Footer
