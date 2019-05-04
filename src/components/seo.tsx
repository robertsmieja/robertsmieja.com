/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes, { InferProps } from "prop-types"
import useSiteMetadata from "../lib/hooks/useSiteMetadata"

const propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.any),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

type SEOProperties = NonNullable<InferProps<typeof propTypes>>

const SEO: React.FC<SEOProperties> = (props) => {
  const siteMetadata = useSiteMetadata()

  // eslint-disable-next-line react/destructuring-assignment
  const description = props.description || siteMetadata.description
  const { lang, meta, keywords, title } = props

  return (
    <Helmet
      htmlAttributes={{
        lang: lang ?? undefined,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={(meta || [])
        .concat([
          {
            name: `description`,
            content: description,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: description,
          },
        ])
        .concat(
          (keywords?.length ?? 0) > 0
            ? {
                name: `keywords`,
                content: keywords?.join(`, `),
              }
            : []
        )}
    />
  )
}

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = propTypes

export default SEO
