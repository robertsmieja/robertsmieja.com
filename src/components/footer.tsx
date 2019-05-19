import React from "react"

interface FooterProperties {
  siteAuthor: string
}

const Footer = ({ siteAuthor }: FooterProperties) => (
  <footer>
    <div className="text-center text-muted">
      © {new Date().getFullYear()}, {siteAuthor}
    </div>
  </footer>
)

export default Footer
