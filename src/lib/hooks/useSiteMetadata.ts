import { useStaticQuery, graphql } from "gatsby"

interface SiteQueryResult {
  site: Site
}

interface Site {
  siteMetadata: SiteMetadata
}

interface SiteMetadata {
  author: string
  description: string
  title: string
}

const useSiteMetadata = (): SiteMetadata =>
  useStaticQuery<SiteQueryResult>(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          title
        }
      }
    }
  `).site.siteMetadata

export default useSiteMetadata
