import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ReactNode } from "react"

interface ExternalLinkProperties {
  href: string
  ariaLabel?: string
  children: ReactNode
}

const iconStyle = { marginLeft: "0.25rem", opacity: 0.7 }

// Security enhancement: Sanitize URL to prevent XSS via javascript: URIs
const getSafeUrl = (url: string): string => {
  if (!url) return "#"
  try {
    // Validate the URL using a dummy base for relative paths.
    // This allows us to safely check the protocol.
    const parsedUrl = new URL(url, "http://fallback.local")
    const protocol = parsedUrl.protocol.toLowerCase()
    const isJavaScript = protocol === ["javascript", ":"].join("")
    const isVbScript = protocol === ["vbscript", ":"].join("")
    const isData = protocol === ["data", ":"].join("")
    if (isJavaScript || isVbScript || isData) {
      return "#"
    }
    return url
  } catch (e) {
    return "#"
  }
}

const ExternalLink: React.FC<ExternalLinkProperties> = ({
  href,
  ariaLabel,
  children,
}: ExternalLinkProperties) => (
  <a
    href={getSafeUrl(href)}
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

ExternalLink.defaultProps = {
  ariaLabel: undefined,
}

export default ExternalLink
