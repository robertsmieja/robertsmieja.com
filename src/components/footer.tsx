import React from "react"

interface FooterProperties {
  siteAuthor: string
}

const Footer = ({ siteAuthor }: FooterProperties) => (
  <footer>
    © {new Date().getFullYear()}, {siteAuthor}
  </footer>
)

export default Footer
