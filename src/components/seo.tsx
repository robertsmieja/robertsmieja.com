/* eslint-disable react/prop-types */
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

type MetaProps = JSX.IntrinsicElements["meta"]

interface SEOProperties {
  description?: string
  lang?: string
  meta?: MetaProps[]
  keywords?: string[]
  title: string
}
const SEO: React.FC<SEOProperties> = props => {
  const { description, lang, meta, keywords, title } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={meta!
        .concat([
          {
            name: `description`,
            content: metaDescription
          },
          {
            property: `og:title`,
            content: title
          },
          {
            property: `og:description`,
            content: metaDescription
          },
          {
            property: `og:type`,
            content: `website`
          },
          {
            name: `twitter:card`,
            content: `summary`
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author
          },
          {
            name: `twitter:title`,
            content: title
          },
          {
            name: `twitter:description`,
            content: metaDescription
          }
        ])
        .concat(
          keywords!.length > 0
            ? {
                name: `keywords`,
                content: keywords!.join(`, `)
              }
            : []
        )}
    />
  )
}

// SEO.propTypes = {
//   description: PropTypes.string.isRequired,
//   lang: PropTypes.string.isRequired,
//   meta: PropTypes.arrayOf(PropTypes.object).isRequired,
//   keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
//   title: PropTypes.string.isRequired
// }

SEO.defaultProps = {
  description: ``,
  lang: `en`,
  meta: [],
  keywords: []
}

export default SEO
