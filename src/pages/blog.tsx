/** @jsx jsx */
import { graphql, Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface BlogPageProperties {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          excerpt: string
          fields: {
            slug: string
          }
          frontmatter: {
            date: string
            title: string
            description: string
            tags: string[]
          }
        }
      }>
    }
  }
}

const postListStyles = css`
  max-width: 48rem;
  list-style: none;
  padding: 0;
`

const postItemStyles = css`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`

const titleStyles = css`
  margin: 0 0 0.25rem 0;

  a {
    color: black;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
      text-underline-offset: 4px;
    }
  }
`

const dateStyles = css`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  display: block;
`

const tagListStyles = css`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`

const tagStyles = css`
  background: #f0f0f0;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #555;
`

const rssLinkStyles = css`
  font-size: 0.9rem;
  color: #666;
`

export const Head: React.FC = () => (
  <SEO
    title="Blog"
    keywords={[`blog`, `technology`, `software engineering`, `robertsmieja`]}
  />
)

const BlogPage: React.FC<BlogPageProperties> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div>
        <h4>Blog</h4>
        <p>
          Thoughts on technology, software engineering, and things I find
          interesting.{" "}
          <a href="/rss.xml" css={rssLinkStyles}>
            RSS Feed
          </a>
        </p>
        {posts.length === 0 ? (
          <p>No blog posts yet. Check back soon!</p>
        ) : (
          <ul css={postListStyles}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <li key={node.fields.slug} css={postItemStyles}>
                  <h3 css={titleStyles}>
                    <Link to={node.fields.slug}>{title}</Link>
                  </h3>
                  <time css={dateStyles} dateTime={node.frontmatter.date}>
                    {node.frontmatter.date}
                  </time>
                  <p>
                    {node.frontmatter.description || node.excerpt}
                  </p>
                  {node.frontmatter.tags &&
                    node.frontmatter.tags.length > 0 && (
                      <ul css={tagListStyles}>
                        {node.frontmatter.tags.map((tag) => (
                          <li key={tag} css={tagStyles}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`
