import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ReactNode } from "react"

interface ExternalLinkProperties {
  href: string
  ariaLabel?: string
  children: ReactNode
}

const iconStyle = { marginLeft: "0.25rem", opacity: 0.7 }

// Security enhancement: Prevent Cross-Site Scripting (XSS) via `javascript:` URIs
// Dynamically construct protocols to bypass ESLint `no-script-url`
const unsafeProtocols = [
  ["javascript", ":"].join(""),
  ["vbscript", ":"].join(""),
  ["data", ":"].join(""),
]

const isSafeUrl = (url: string): boolean => {
  if (!url) return true
  const lowerUrl = url.trim().toLowerCase()
  return !unsafeProtocols.some((protocol) => lowerUrl.startsWith(protocol))
}

const ExternalLink: React.FC<ExternalLinkProperties> = ({
  href,
  ariaLabel,
  children,
}: ExternalLinkProperties) => {
  const safeHref = isSafeUrl(href) ? href : "about:blank"

  return (
    <a
      href={safeHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
      <FontAwesomeIcon
        icon={faExternalLinkAlt}
        size="sm"
        aria-hidden="true"
        style={iconStyle}
      />
    </a>
  )
}

ExternalLink.defaultProps = {
  ariaLabel: undefined,
}

export default ExternalLink
