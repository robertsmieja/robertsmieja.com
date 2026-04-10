/** @jsx jsx */
import { graphql, Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/react"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface BlogPostProperties {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        date: string
        description: string
        tags: string[]
      }
    }
  }
  pageContext: {
    slug: string
    previous: { fields: { slug: string }; frontmatter: { title: string } } | null
    next: { fields: { slug: string }; frontmatter: { title: string } } | null
  }
}

const articleStyles = css`
  max-width: 48rem;
  line-height: 1.7;

  h1 {
    margin-bottom: 0.25rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  pre {
    overflow-x: auto;
  }

  blockquote {
    border-left: 3px solid #ccc;
    margin-left: 0;
    padding-left: 1rem;
    color: #555;
  }
`

const dateStyles = css`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: block;
`

const tagListStyles = css`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
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

const navStyles = css`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 2rem 0 0;
  margin: 2rem 0 0;
  border-top: 1px solid #eee;
`

const BlogPostTemplate: React.FC<BlogPostProperties> = ({
  data,
  pageContext,
}) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <article css={articleStyles}>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <time css={dateStyles} dateTime={post.frontmatter.date}>
            {post.frontmatter.date}
          </time>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <ul css={tagListStyles}>
              {post.frontmatter.tags.map((tag) => (
                <li key={tag} css={tagStyles}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>
        {/* eslint-disable-next-line react/no-danger */}
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <nav>
        <ul css={navStyles}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                &larr; {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} &rarr;
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head: React.FC<BlogPostProperties> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      keywords={post.frontmatter.tags || []}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
