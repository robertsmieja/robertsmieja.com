/** @jsx jsx */
import * as normalize from "@csstools/normalize.css"
import { css, Global, jsx } from "@emotion/react"
import { config } from "@fortawesome/fontawesome-svg-core"
// fix for font-awesome large icon on initial load - https://github.com/FortAwesome/react-fontawesome#nextjs
import "@fortawesome/fontawesome-svg-core/styles.css" // Import the CSS
import React from "react"
import useSiteMetadata from "../lib/hooks/useSiteMetadata"
import Footer from "./footer"
import Header from "./header"

// Import the CSS
config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const globalCss = css`
  ${normalize}

  :root {
    font-size: 16px;
    font-family: system-ui, sans-serif;
    // font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    // Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    text-size-adjust: 100%;
  }

  /* clearfix */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/clear */
  *::after {
    content: "";
    display: block;
    clear: both;
  }

  * {
    box-sizing: border-box;
  }
`

const layoutCss = css`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;

  height: 100%;
`

const asideLeftCss = css`
  padding: 2rem;
  grid-column: 1 / 2;
`

const mainCss = css`
  grid-column: 2 / 3;
  margin: 0 auto;
`

const asideRightCss = css`
  padding: 2rem;
  grid-column: 3 / 4;
`

interface LayoutProperties {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProperties> = ({ children }) => {
  const { title, author } = useSiteMetadata()

  return (
    <div css={layoutCss}>
      <Global styles={globalCss} />
      <Header siteTitle={title} />
      <aside id="left" css={asideLeftCss} />
      <main css={mainCss}>{children}</main>
      <aside id="right" css={asideRightCss} />
      <Footer siteAuthor={author} />
    </div>
  )
}

export default Layout
