import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ReactNode } from "react"

interface ExternalLinkProperties {
  href: string
  ariaLabel?: string
  children: ReactNode
}

const iconStyle = { marginLeft: "0.25rem", opacity: 0.7 }

const ExternalLink: React.FC<ExternalLinkProperties> = ({
  href,
  ariaLabel,
  children,
}: ExternalLinkProperties) => {
  // Sanitize user input to prevent XSS. We want to prevent potentially dynamic
  // URLs that are passed into href from executing arbitrary JavaScript through
  // javascript: URIs or other malicious schemas. Fallback to a safe link if bad.
  const isValidUrl =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("/")
  const safeHref = isValidUrl ? href : "#"

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
