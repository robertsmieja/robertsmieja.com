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

  @media print {
    @page {
      margin: 1.5cm;
    }
    body {
      margin: 0;
      padding: 0;
      font-size: 10pt; /* slightly smaller font for printing */
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      page-break-after: avoid;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    ul,
    li {
      page-break-inside: avoid;
    }
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

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid #000;
    outline-offset: 2px;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`

interface LayoutProperties {
  children: React.ReactNode
}

// Emotion CSS extracted outside of the component to prevent unnecessary re-serialization on every render
const layoutCss = css`
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;

  height: 100%;

  @media print {
    display: block;
    height: auto;
  }
`

const leftAsideCss = css`
  padding: 2rem;
  grid-column: 1 / 2;

  @media print {
    display: none;
  }
`

const mainCss = css`
  grid-column: 2 / 3;
  margin: 0 auto;

  @media print {
    grid-column: 1 / -1;
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
`

const rightAsideCss = css`
  padding: 2rem;
  grid-column: 3 / 4;

  @media print {
    display: none;
  }
`

const Layout: React.FC<LayoutProperties> = ({ children }) => {
  const { title, author } = useSiteMetadata()

  return (
    <div css={layoutCss}>
      <Global styles={globalCss} />
      <Header siteTitle={title} />
      <aside id="left" css={leftAsideCss} />
      <main css={mainCss}>{children}</main>
      <aside id="right" css={rightAsideCss} />
      <Footer siteAuthor={author} />
    </div>
  )
}

export default Layout
